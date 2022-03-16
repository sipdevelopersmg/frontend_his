import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, EditSettingsModel, TextWrapSettingsModel } from '@syncfusion/ej2-angular-grids';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

@Component({
    selector: 'app-update-antrian-reguler',
    templateUrl: './update-antrian-reguler.component.html',
    styleUrls: ['./update-antrian-reguler.component.css']
})
export class UpdateAntrianRegulerComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    FilterColumnDatasource: any[];
    FilterDropdownDatasource: any[];
    FilterDropdownFields: any;

    @ViewChild('GridData') GridData: GridComponent;
    GridPageSettings = { pageSizes: false, pageSize: 30 };
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDatasource: any[] = [
        {
            id_antrian_tppri: 1,
            id_person: 1,
            no_antrian_per_kelas: '1',
            kode_antrian_tppri: 'A001',
            tanggal_rencana_masuk: new Date(),
            no_rekam_medis: 'A12',
            nama_pasien: 'John Doe',
            gender: 'Laki - Laki',
            usia: '25 Tahun 1 Bulan 3 Hari',
            status_approve: 'PENDING'
        }
    ];
    GridDataToolbar: any[] = [
        {
            text: `Update Status <i class="fas fa-arrow-right"></i> Terjadwal`,
            tooltipText: `Update Bed -> Terjadwal`,
            prefixIcon: 'fas fa-clipboard-check fa-sm',
            id: 'update_status_terjadwal',
            method: () => { this.onUpdateStatus('terjadwal'); }
        },
        {
            text: `Update Status -> Batal`,
            tooltipText: `Update Status -> Batal`,
            prefixIcon: 'fas fa-ban fa-sm',
            id: 'upate_status_batal',
            method: () => { this.onUpdateStatus('batal'); }
        },
        "Search"
    ];
    GridSelectedData: any;
    GridTextWrapSettings: TextWrapSettingsModel;

    constructor(
        private setupKelasPerawatanService: SetupKelasPerawatanService,
    ) { }

    ngOnInit(): void {
        // this.ButtonNav = [
        //     { Id: 'Tambah_Antrian', Captions: 'Tambah Antrian', Icons1: 'fa-plus fa-sm' },
        // ];

        this.FilterColumnDatasource = [
            { text: 'Pilih Kelas', value: 'tat.id_kelas_request' },
            { text: 'Tgl. Rencana Masuk', value: 'tat.tanggal_rencana_masuk' },
        ];

        this.GridTextWrapSettings = { wrapMode: 'Header' };

        this.handlePencarianFilter([]);
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Tambah_Antrian':
                // this.handleOpenModalAddAntrianReguler();
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
        console.log(args);
    }

    handleClickToolbarGrid(args: any): void {
        console.log(args);
    }

    onUpdateStatus(status: string): void {

    }
}
