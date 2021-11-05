import { Component, OnInit, ViewChild } from '@angular/core';
import { EditSettingsModel, GridComponent, TextWrapSettingsModel } from '@syncfusion/ej2-angular-grids';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { DaftarPemesananTempatTidurService } from 'src/app/modules/PIS/services/IRNA/daftar-pemesanan-tempat-tidur/daftar-pemesanan-tempat-tidur.service';
import { SetupBedRoomService } from 'src/app/modules/PIS/services/IRNA/setup-bed/setup-bed-room/setup-bed-room.service';
import { SetupStatusBedService } from 'src/app/modules/PIS/services/IRNA/setup-bed/setup-status-bed/setup-status-bed.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { AddAntrianTppriComponent } from '../add-antrian-tppri/add-antrian-tppri.component';

@Component({
    selector: 'app-antrian-pemesanan-tempat-tidur',
    templateUrl: './antrian-pemesanan-tempat-tidur.component.html',
    styleUrls: ['./antrian-pemesanan-tempat-tidur.component.css']
})
export class AntrianPemesananTempatTidurComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    FilterColumnDatasource: any[];
    FilterDropdownDatasource: any[];
    FilterDropdownFields: any;

    @ViewChild('GridData') GridData: GridComponent;
    GridPageSettings = { pageSizes: false, pageSize: 30 };
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDatasource: any[] = [];
    GridToolbar: any[] = [];
    GridSelectedData: any;
    GridTextWrapSettings: TextWrapSettingsModel;

    SelectedStatusBedRoom: number;

    @ViewChild("AddAntrianTppri") AddAntrianTppri: AddAntrianTppriComponent;

    constructor(
        private utilityService: UtilityService,
        private setupBedRoomService: SetupBedRoomService,
        private setupStatusBedService: SetupStatusBedService,
        private setupKelasPerawatanService: SetupKelasPerawatanService,
        private daftarPemesananTempatTidurService: DaftarPemesananTempatTidurService
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: 'Tambah_Antrian', Captions: 'Tambah Antrian', Icons1: 'fa-plus fa-sm' },
            { Id: 'Lihat_Antrian', Captions: 'Lihat Antrian', Icons1: 'fa-info fa-sm' },
        ]

        this.FilterColumnDatasource = [
            { text: 'No. Room', value: 'sr.room_no' },
            { text: 'No. Bed', value: 'sbr.bed_no' },
            { text: 'Pilih Kelas', value: 'tat.id_kelas_request' },
            { text: 'Pilih Status Bed', value: 'ssb.status_bed_descr' },
            { text: 'Tgl. Rencana Masuk', value: 'tat.tanggal_rencana_masuk' },
        ];

        this.onSetGridToolbarByDynamicStatusBed();

        this.GridTextWrapSettings = { wrapMode: 'Header' };

        this.handlePencarianFilter([]);
    }

    onSetGridToolbarByDynamicStatusBed(): void {
        this.setupStatusBedService.onGetAllBedStatus()
            .subscribe((result) => {

                let is_ready = result.data.filter((item) => { return item.is_ready == true })[0];

                let not_operational = result.data.filter((item) => { return item.is_ready == false && item.is_fill == false && item.is_new == false })[0];

                this.GridToolbar = [
                    {
                        text: `Update Bed -> ${is_ready.status_bed}`,
                        tooltipText: `Update Bed -> ${is_ready.status_bed}`,
                        prefixIcon: 'fas fa-clipboard-check fa-sm',
                        id: is_ready.id_setup_status_bed,
                        method: () => { this.onUpdateStatusOk(); }
                    },
                    {
                        text: `Update Bed -> ${not_operational.status_bed}`,
                        tooltipText: `Update Bed -> ${not_operational.status_bed}`,
                        prefixIcon: 'fas fa-ban fa-sm',
                        id: not_operational.id_setup_status_bed,
                        method: () => { this.onUpdateStatusTo(); }
                    },
                    "Search"
                ];
            });
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Tambah_Antrian':
                this.AddAntrianTppri.handleOpenModalAddAntrianTppri();
                break;
            case 'Lihat_Antrian':
                break;
            default:
                break;
        }
    }

    handleChangeFilterPencarian(args: any): void {
        this.FilterDropdownDatasource = [];
        this.FilterDropdownFields = {};

        switch (args) {
            case 'Pilih Status Bed':
                this.setupStatusBedService.onGetAllBedStatus()
                    .subscribe((result) => {
                        this.FilterDropdownDatasource = result.data;
                        this.FilterDropdownFields = { text: 'status_bed_descr', value: 'status_bed_descr' }
                    });
                break;
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
        this.daftarPemesananTempatTidurService.onGetAllAntrianPemesananTempatTidur(args)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    handleSelectedRow(args: any): void {
        this.GridSelectedData = args.data;
    }

    handleToolbarClick(args: any): void {
        this.SelectedStatusBedRoom = args.item.id;

        args.item.method();
    }

    onUpdateStatusOk(): void {
        this.setupBedRoomService.onPutUpdateStatusBedRoom(
            this.GridSelectedData.id_setup_bed_room_request,
            this.GridSelectedData.id_setup_room_request,
            this.SelectedStatusBedRoom
        ).subscribe((result) => {
            if (result) {
                this.utilityService.onShowingCustomAlert('success', 'Success', 'Status Bed Berhasil Ubah Ke OK')
                    .then(() => {
                        this.handlePencarianFilter([]);
                    })
            }
        });
    }

    onUpdateStatusTo(): void {
        this.setupBedRoomService.onPutUpdateStatusBedRoom(
            this.GridSelectedData.id_setup_bed_room_request,
            this.GridSelectedData.id_setup_room_request,
            this.SelectedStatusBedRoom
        ).subscribe((result) => {
            if (result) {
                this.utilityService.onShowingCustomAlert('success', 'Success', 'Status Bed Berhasil Ubah Ke TO')
                    .then(() => {
                        this.handlePencarianFilter([]);
                    })
            }
        });
    }

    onSendFormAddAntrianValue(FormAddAntrianTppri: any): void {
        this.daftarPemesananTempatTidurService.onPostSaveAntrianPemesananTempatTidur(FormAddAntrianTppri)
            .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Success', 'Antrian Pemesanan Tempat Tidur Berhasil Disimpan')
                    .then(() => {
                        this.AddAntrianTppri.handleCloseModalAddAntrianTppri();

                        this.handlePencarianFilter([]);
                    });
            });
    }
}
