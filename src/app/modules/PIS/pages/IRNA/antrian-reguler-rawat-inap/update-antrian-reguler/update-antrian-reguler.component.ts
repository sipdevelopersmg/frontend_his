import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { GridComponent, EditSettingsModel, TextWrapSettingsModel } from '@syncfusion/ej2-angular-grids';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { AntrianRegulerService } from 'src/app/modules/PIS/services/IRNA/antrian-reguler/antrian-reguler.service';
import { DialogUpdateStatusBatalComponent } from './dialog-update-status-batal/dialog-update-status-batal.component';
import { DialogUpdateStatusTerjadwalComponent } from './dialog-update-status-terjadwal/dialog-update-status-terjadwal.component';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';

@Component({
    selector: 'app-update-antrian-reguler',
    templateUrl: './update-antrian-reguler.component.html',
    styleUrls: ['./update-antrian-reguler.component.css']
})
export class UpdateAntrianRegulerComponent implements OnInit {

    FilterColumnDatasource: any[];
    FilterDropdownDatasource: any[];
    FilterDropdownFields: any;

    @ViewChild('GridData') GridData: GridComponent;
    GridPageSettings = { pageSizes: false, pageSize: 30 };
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDatasource: any[] = [];
    GridDataToolbar: any[] = [
        {
            text: `Update Status <i class="fas fa-arrow-right"></i> Terjadwal`,
            tooltipText: `Update Bed -> Terjadwal`,
            prefixIcon: 'fas fa-clipboard-check fa-sm',
            id: 'update_status_terjadwal',
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

    @ViewChild('UpdateStatusTerjadwalComp') UpdateStatusTerjadwalComp: DialogUpdateStatusTerjadwalComponent;

    @ViewChild('UpdateStatusBatalComp') UpdateStatusBatalComp: DialogUpdateStatusBatalComponent;

    constructor(
        private utilityService: UtilityService,
        private antrianRegulerService: AntrianRegulerService,
        private setupKelasPerawatanService: SetupKelasPerawatanService,
    ) { }

    ngOnInit(): void {
        this.FilterColumnDatasource = [
            { text: 'Pilih Kelas', value: 'kp.nama_kelas' },
            { text: 'Tgl. Rencana Masuk', value: 'bb.tgl_rencana_inap' },
        ];

        this.GridTextWrapSettings = { wrapMode: 'Header' };

        this.handlePencarianFilter([]);
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
        this.antrianRegulerService.onGetAllAntrianReguler(args)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    handleRowSelectedGrid(args: any): void {
        this.GridSelectedData = args.data;
    }

    handleClickToolbarGrid(args: any): void {
        const id = args.item.id;

        switch (id) {
            case 'update_status_terjadwal':
                this.UpdateStatusTerjadwalComp.handleOpenModalDialog();
                break;
            case 'update_status_batal':
                this.UpdateStatusBatalComp.handleOpenModalDialog();
                break;
            default:
                break;
        }
    }

    onSwitchUpdateStatus(data: any): void {
        switch (data.status) {
            case 'terjadwal':
                this.onUpdateStatusTerjadwal(data.parameter);
                break;
            case 'batal':
                this.onUpdateStatusBatal(data.parameter);
                break;
            default:
                break;
        }
    }

    onUpdateStatusTerjadwal(parameter: any): void {
        this.antrianRegulerService.onPostUpdateStatusTerjadwal(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Berhasil Ubah Status Antrian')
                        .then(() => {
                            this.UpdateStatusTerjadwalComp.handleCloseModalDialog();
                            this.handlePencarianFilter([]);
                        });
                };
            });

    }

    onUpdateStatusBatal(parameter: any): void {
        this.antrianRegulerService.onPostUpdateStatusCanceled(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Berhasil Ubah Status Antrian')
                        .then(() => {
                            this.UpdateStatusBatalComp.handleCloseModalDialog();
                            this.handlePencarianFilter([]);
                        });
                };
            });
    }
}
