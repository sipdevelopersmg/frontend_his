import { Component, OnInit, ViewChild } from '@angular/core';
import { EditSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { DaftarPemesananTempatTidurService } from 'src/app/modules/PIS/services/IRNA/daftar-pemesanan-tempat-tidur/daftar-pemesanan-tempat-tidur.service';
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
    GridToolbar: any[] = ["Search"];
    GridSelectedData: any[];

    @ViewChild("AddAntrianTppri") AddAntrianTppri: AddAntrianTppriComponent;

    constructor(
        private utilityService: UtilityService,
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
            { text: 'Pilih Status', value: 'tp.no_register' },
            { text: 'Pilih Kelas', value: "concat(per.nama_depan, ' ',per.nama_belakang)" },
            { text: 'Pilih Jenis Antrian', value: 'tp.no_rekam_medis' },
            { text: 'Tgl. Rencana Rawat', value: 'p.nama_poli' },
        ];
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
            case 'Pilih Status':
                this.setupStatusBedService.onGetAllBedStatus()
                    .subscribe((result) => {
                        this.FilterDropdownDatasource = result.data;
                        this.FilterDropdownFields = { text: 'status_bed', value: 'status_bed' }
                    });
                break;
            case 'Pilih Kelas':
                this.setupKelasPerawatanService.onGetAll()
                    .subscribe((result) => {
                        this.FilterDropdownDatasource = result.data;
                        this.FilterDropdownFields = { text: 'nama_kelas', value: 'nama_kelas' }
                    });
                break;
            default:
                break;
        }
    }

    handlePencarianFilter(args: PostRequestByDynamicFiterModel[]): void {
        // this.admisiRawatJalanService.onGetAllPasienRawatJalanTeradmisiHariIni(args)
        //     .subscribe(
        //         (result) => {
        //             this.GridDatasource = result.data;
        //         }, (error) => {

        //         }, () => {
        //             this.onGetDaftarAdmisi.emit(this.GridDatasource);
        //         });
    }

    handleSelectedRow(args: any): void {
        this.GridSelectedData = args.data;
    }

    onSendFormAddAntrianValue(FormAddAntrianTppri: any): void {
        this.daftarPemesananTempatTidurService.onPostSaveAntrianPemesananTempatTidur(FormAddAntrianTppri)
            .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Success', 'Antrian Pemesanan Tempat Tidur Berhasil Disimpan')
                    .then(() => {
                        this.AddAntrianTppri.handleCloseModalAddAntrianTppri();
                    });
            });
    }
}
