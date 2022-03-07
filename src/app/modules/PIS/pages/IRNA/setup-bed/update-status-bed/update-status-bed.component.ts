import { Component, OnInit, ViewChild } from '@angular/core';
import { EditSettingsModel, GridComponent, PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { SetupPoliService } from 'src/app/modules/Billing/services/setup-data/setup-poli/setup-poli.service';
import { IPutUpdateStatusBedModel } from 'src/app/modules/PIS/models/IRNA/setup-bed.model';
import { SetupBedRoomService } from 'src/app/modules/PIS/services/IRNA/setup-bed/setup-bed-room/setup-bed-room.service';
import { SetupStatusBedService } from 'src/app/modules/PIS/services/IRNA/setup-bed/setup-status-bed/setup-status-bed.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-update-status-bed',
    templateUrl: './update-status-bed.component.html',
    styleUrls: ['./update-status-bed.component.css']
})
export class UpdateStatusBedComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    FilterColumnDatasource: any[];
    FilterDropdownDatasource: any[] = [];
    FilterDropdownFields: any = {};
    FilterDropdownColumn: any;
    SelectedFilter: any;

    @ViewChild("GridData") GridData: GridComponent;
    GridDatasource: any[];
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridPageSettings: PageSettingsModel;
    GridDataToolbar: any[];
    GridGroupSettings: object = { showDropArea: false, columns: ['nama_poli'] };
    GridSelectedData: IPutUpdateStatusBedModel[];

    SelectedStatusBedRoom: number;

    constructor(
        private utilityService: UtilityService,
        private setupPoliService: SetupPoliService,
        private setupBedRoomService: SetupBedRoomService,
        private setupStatusBedService: SetupStatusBedService,
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: 'Refresh', Captions: 'Refresh', Icons1: 'fa-redo-alt fa-sm' }
        ];

        this.handlePencarianFilter([]);

        this.FilterColumnDatasource = [
            { text: 'Pilih Poliklinik', value: 'p.nama_poli' },
        ];

        this.FilterDropdownColumn = {
            'caption': 'Pilih Poliklinik',
            'value': 'p.nama_poli',
        };

        this.onSetGridToolbarByDynamicStatusBed();

        this.GridPageSettings = { pageSize: 20, pageSizes: true };

        this.setupPoliService.onGetAllForLookupRawatInap([])
            .subscribe((result) => {
                if (this.FilterDropdownDatasource) {
                    this.FilterDropdownDatasource = result.data;
                    this.FilterDropdownFields = { text: 'nama_poli', value: 'nama_poli' };
                }
            });
    }

    onSetGridToolbarByDynamicStatusBed(): void {
        this.setupStatusBedService.onGetAllBedStatus()
            .subscribe((result) => {

                let is_ready = result.data.filter((item) => { return item.is_ready == true })[0];

                let not_operational = result.data.filter((item) => { return item.is_ready == false && item.is_fill == false && item.is_new == false })[0];

                this.GridDataToolbar = [
                    {
                        text: `Update Bed -> ${is_ready.status_bed}`,
                        tooltipText: `Update Bed -> ${is_ready.status_bed}`,
                        prefixIcon: 'fas fa-clipboard-check fa-sm',
                        id: is_ready.id_setup_status_bed,
                        method: () => { this.onUpdateStatusOk(is_ready.status_bed); }
                    },
                    {
                        text: `Update Bed -> ${not_operational.status_bed}`,
                        tooltipText: `Update Bed -> ${not_operational.status_bed}`,
                        prefixIcon: 'fas fa-ban fa-sm',
                        id: not_operational.id_setup_status_bed,
                        method: () => { this.onUpdateStatusTo(not_operational.status_bed); }
                    },
                    "Search"
                ];
            });
    }

    handlePencarianFilter(args: any): void {
        this.SelectedFilter = args;

        this.setupBedRoomService.onGetAllBedRoomByDynamicFilter(args)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    handleSelectedRow(args: any): void {
        this.GridSelectedData = this.GridData.getSelectedRecords().map((item) => {
            return { 'id_setup_bed_room': item['id_setup_bed_room'], 'id_setup_room': item['id_setup_room'], 'bed_no': item['bed_no'] }
        });
    }

    handleToolbarClick(args: any): void {
        this.SelectedStatusBedRoom = args.item.id;

        args.item.method();
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Refresh':
                this.handlePencarianFilter([]);
                break;
            default:
                break;
        }
    }

    onUpdateStatusOk(status_bed: string): void {
        Swal.fire({
            icon: 'warning',
            title: 'Apakah Anda Yakin?',
            text: `Status Bed Akan Diubah Menjadi ${status_bed}`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Yes`,
            denyButtonText: `Tidak, Kembali`,
            focusDeny: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.setupBedRoomService.onPutUpdateStatusBedRoomToOK(this.GridSelectedData)
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', 'Success', `Status Bed Berhasil Ubah Ke ${status_bed}`)
                                .then(() => {
                                    this.handlePencarianFilter(this.SelectedFilter);
                                });
                        }
                    });
            }
        });
    }

    onUpdateStatusTo(status_bed: string): void {
        Swal.fire({
            icon: 'warning',
            title: 'Apakah Anda Yakin?',
            text: `Status Bed Akan Diubah Menjadi ${status_bed}`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Yes`,
            denyButtonText: `Tidak, Kembali`,
            focusDeny: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.setupBedRoomService.onPutUpdateStatusBedRoomToTO(this.GridSelectedData)
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', 'Success', `Status Bed Berhasil Ubah Ke ${status_bed}`)
                                .then(() => {
                                    this.handlePencarianFilter(this.SelectedFilter);
                                });
                        }
                    });
            }
        });
    }
}
