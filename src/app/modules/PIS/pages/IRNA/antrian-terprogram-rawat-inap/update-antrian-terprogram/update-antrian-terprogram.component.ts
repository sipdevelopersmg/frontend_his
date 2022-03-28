import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GridComponent, EditSettingsModel, TextWrapSettingsModel } from '@syncfusion/ej2-angular-grids';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { AntrianTerprogramService } from 'src/app/modules/PIS/services/IRNA/antrian-terprogram/antrian-terprogram.service';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DialogUpdateStatusCancelComponent } from './dialog-update-status-cancel/dialog-update-status-cancel.component';
import { DialogUpdateStatusConfirmedComponent } from './dialog-update-status-confirmed/dialog-update-status-confirmed.component';
import { Socket } from 'ngx-socket-io';

@Component({
    selector: 'app-update-antrian-terprogram',
    templateUrl: './update-antrian-terprogram.component.html',
    styleUrls: ['./update-antrian-terprogram.component.css']
})
export class UpdateAntrianTerprogramComponent implements OnInit, OnDestroy {

    FilterColumnDatasource: any[];
    FilterDropdownDatasource: any[];
    FilterDropdownFields: any;

    @ViewChild('GridData') GridData: GridComponent;
    GridPageSettings = { pageSizes: false, pageSize: 30 };
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDatasource: any[] = [];
    GridDataToolbar: any[] = [
        {
            text: `Update Status <i class="fas fa-arrow-right"></i> Confirmed`,
            tooltipText: `Update Bed -> Confirmed`,
            prefixIcon: 'fas fa-clipboard-check fa-sm',
            id: 'update_status_confirmed',
        },
        {
            text: `Update Status <i class="fas fa-arrow-right"></i> Batal`,
            tooltipText: `Update Status -> Batal`,
            prefixIcon: 'fas fa-ban fa-sm',
            id: 'update_status_batal',
        },
        "Search"
    ];
    GridSelectedData: any;
    GridTextWrapSettings: TextWrapSettingsModel;

    @ViewChild('UpdateStatusConfirmedComp') UpdateStatusConfirmedComp: DialogUpdateStatusConfirmedComponent;

    @ViewChild('UpdateStatusCancelComp') UpdateStatusCancelComp: DialogUpdateStatusCancelComponent;

    constructor(
        private socket: Socket,
        private utilityService: UtilityService,
        private antrianTerprogramService: AntrianTerprogramService,
        private setupKelasPerawatanService: SetupKelasPerawatanService,
    ) { }

    ngOnInit(): void {
        this.FilterColumnDatasource = [
            { text: 'Pilih Kelas', value: 'kp.nama_kelas' },
            { text: 'Tgl. Rencana Masuk', value: 'bb.tgl_rencana_inap' },
        ];

        this.GridTextWrapSettings = { wrapMode: 'Header' };

        this.handlePencarianFilter([]);

        this.socket.fromEvent('pis:update-bed-booking-terprogram')
            .subscribe((result) => {
                this.handlePencarianFilter([]);
            });
    }

    handleChangeFilterPencarian(args: any): void {
        this.FilterDropdownDatasource = [];
        this.FilterDropdownFields = {};

        switch (args) {
            case 'Pilih Kelas':
                this.setupKelasPerawatanService.onGetAll()
                    .subscribe((result) => {
                        this.FilterDropdownDatasource = result.data;
                        this.FilterDropdownFields = { text: 'nama_kelas', value: 'id_kelas' }
                    });
                break;
            default:
                break;
        }
    }

    handlePencarianFilter(args: PostRequestByDynamicFiterModel[]): void {
        this.antrianTerprogramService.onGetAllAntrianTerprogram(args)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    handleRowSelectedGrid(args: any): void {
        this.GridSelectedData = args.data;
    }

    handleClickToolbarGrid(args: any): void {
        const id = args.item.id;

        const status_terjadwal = this.GridSelectedData.status_booking == "TERJADWAL";

        const status_approved = this.GridSelectedData.status_booking == "APPROVED";

        const status_canceled = this.GridSelectedData.status_booking == "CANCELED";

        switch (id) {
            case 'update_status_confirmed':
                // if (status_terjadwal) {
                //     this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Antrian Ini Sudah Terjadwal');
                // } else if (status_approved) {
                //     this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Antrian Ini Sudah Approved');
                // } else if (status_canceled) {
                //     this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Antrian Ini Sudah Canceled');
                // } else {
                // };
                this.UpdateStatusConfirmedComp.handleOpenModalDialog();
                break;
            case 'update_status_batal':
                // if (status_approved) {
                //     this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Antrian Ini Sudah Approved');
                // } else if (status_canceled) {
                //     this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Antrian Ini Sudah Canceled');
                // } else {
                // };
                this.UpdateStatusCancelComp.handleOpenModalDialog();
                break;
            default:
                break;
        }
    }

    onSwitchUpdateStatus(data: any): void {
        switch (data.status) {
            case 'confirmed':
                this.onUpdateStatusConfirmed(data.parameter);
                break;
            case 'cancel':
                this.onUpdateStatusBatal(data.parameter);
                break;
            default:
                break;
        }
    }

    onUpdateStatusConfirmed(parameter: any): void {
        this.antrianTerprogramService.onPostUpdateStatusApprove(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Berhasil Ubah Status Antrian')
                        .then(() => {
                            this.UpdateStatusConfirmedComp.handleCloseModalDialog();
                            this.handlePencarianFilter([]);
                        });
                };
            });
    }

    onUpdateStatusBatal(parameter: any): void {
        this.antrianTerprogramService.onPostUpdateStatusCanceled(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Berhasil Ubah Status Antrian')
                        .then(() => {
                            this.UpdateStatusCancelComp.handleCloseModalDialog();
                            this.handlePencarianFilter([]);
                        });
                };
            });
    }

    ngOnDestroy(): void {
        this.socket.removeListener('pis:update-bed-booking-terprogram')
    }
}
