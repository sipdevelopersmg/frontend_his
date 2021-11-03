import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { EditSettingsModel } from '@syncfusion/ej2-grids';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { JenisRuanganModel } from '../../../models/setup-data/setup-jenis-ruangan.model';
import { KelasPerawatanModel } from '../../../models/setup-data/setup-kelas-perawatan.model';
import { ITiketPemeriksaanModel } from '../../../models/setup-data/setup-tiket-pemeriksaan.model';
import { SetupJenisRuanganService } from '../../../services/setup-data/setup-jenis-ruangan/setup-jenis-ruangan.service';
import { SetupKelasPerawatanService } from '../../../services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { SetupTiketPemeriksaanService } from '../../../services/setup-data/setup-tiket-pemeriksaan/setup-tiket-pemeriksaan.service';
import * as Config from './json/setup-tarif-pemeriksaan.config.json';
import * as API_BILLING from '../../../../../api/BILLING';

@Component({
    selector: 'app-setup-tarif-pemeriksaan',
    templateUrl: './setup-tarif-pemeriksaan.component.html',
    styleUrls: ['./setup-tarif-pemeriksaan.component.css']
})
export class SetupTarifPemeriksaanComponent implements OnInit {

    /**
     * Variable untuk Menympan Navigasi halaman
     * @ButtonNavModel Array
    */
    ButtonNav: ButtonNavModel[];

    /**
     * Form Group untuk mengatur Form Data
     * @FormGroup 
    */
    FormInputData: FormGroup;

    /**
     * Variable untuk menentukan apakah form dalam posisi input data atau edit data
     * @Boolean 
    */
    StatusFormNew: Boolean;

    /**
     * Variable untuk menyimpan Configurasi Grid
     * @Json Config
    */
    GridConfig = Config;

    API_BILLING = API_BILLING;

    /**
     * Variable untuk menentukan component input 
     * @val normal,edit,detail
    */
    inputFieldState = 'normal';

    /**
     * Variable untuk menentukan tap berada di posisi mana 
     * @valur data | input
    */
    TabId: string = 'Data';

    @ViewChild('OrgTabsRef', { static: true }) OrgTabsRef: OrgTabsComponentComponent;

    @ViewChild('DropdownRuangan') DropdownRuangan: DropDownListComponent;
    DropdownRuanganDatasource: JenisRuanganModel[];
    DropdownRuanganField: object = { text: 'jenis_ruangan', value: 'id_jenis_ruangan' };

    @ViewChild('DropdownKelas') DropdownKelas: DropDownListComponent;
    DropdownKelasDatasource: KelasPerawatanModel[];
    DropdownKelasField: object = { text: 'nama_kelas', value: 'id_kelas' };

    @ViewChild('LookupTarifBerlaku') LookupTarifBerlaku: OrgInputLookUpKodeComponent;
    UrlLookupTarifBerlaku: string;
    ModalTitleLookupTarifBerlaku: string;

    GridDatasource: any[];
    private GridData: MolGridComponent = null;
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDataToolbar: any[];

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: ITiketPemeriksaanModel;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupJenisRuanganService: SetupJenisRuanganService,
        private setupKelasPerawatanService: SetupKelasPerawatanService,
        private setupTiketPemeriksaanService: SetupTiketPemeriksaanService
    ) { }

    ngOnInit(): void {
        this.FormInputData = this.formBuilder.group({
            id_tiket_pemeriksaan: [0, [Validators.required]],
            id_jenis_ruangan: [0, [Validators.required]],
            kode_tiket_pemeriksaan: ['', [Validators.required]],
            nama_tiket_pemeriksaan: ['', [Validators.required]],
            id_setup_tarif: [0, [Validators.required]],
            id_kelas: [0, [Validators.required]],
            is_subsidi: [false, [Validators.required]],
        });

        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            // { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];

        this.GetAllData();

        this.onGetAllJenisRuangan();

        this.onGetAllKelasPelayanan();
    }

    onGetAllJenisRuangan(): void {
        this.setupJenisRuanganService.onGetAll()
            .subscribe((result) => {
                this.DropdownRuanganDatasource = result.data;
            });
    }

    onGetAllKelasPelayanan(): void {
        this.setupKelasPerawatanService.onGetAll()
            .subscribe((result) => {
                this.DropdownKelasDatasource = result.data;
            });
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'SaveAndNew':
                this.SaveAndNew();
                break;
            case 'Clear':
                this.Clear();
                break;
            case 'Cancel':
                this.Cancel();
                break;
            default:
                break;
        }
    }

    handleSelectedTabId(TabId: string): void {
        this.TabId = TabId;
        if (TabId == 'Data') {
            this.GetAllData();
        } else {
            // this.setNewForm();
        }
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    handleSelectedRow(args: any): void {
        this.SelectedData = args.data;
    }

    handleToolbarClick(args: any): void {
        const item = args.item.id;

        switch (item) {
            case 'add':
                this.setNewForm();
                break;
            case 'edit':
                this.setEditForm();
                break;
            case 'detail':
                this.setViewForm();
                break;
            case 'delete':
                this.DeleteData();
                break;
            default:
                break;
        }
    }

    /** Method setting input new data */
    setNewForm(): void {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'normal';
        this.FormInputData.reset();
        this.StatusFormNew = true;
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
            { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt' },
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
        ];
    };

    /** Method setting edit data */
    setEditForm(): void {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'edit';
        this.StatusFormNew = false;
        this.SetFrom(this.SelectedData);
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
        ];
    };

    /** Method setting lihat data detail */
    setViewForm(): void {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'detail';
        this.SetFrom(this.SelectedData);
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }

    /* Method untuk mengkosongkan data yang ada di form */
    ResetFrom(): void {
        this.FormInputData.reset();
        this.id_jenis_ruangan.setValue(0);
        this.kode_tiket_pemeriksaan.setValue('');
        this.nama_tiket_pemeriksaan.setValue('');
        this.id_setup_tarif.setValue(0);
        this.id_kelas.setValue(0);
        this.is_subsidi.setValue(false);

        let inputGroupnama_setup_tarif = document.getElementById("inputGroupnama_setup_tarif") as HTMLInputElement;
        inputGroupnama_setup_tarif.value = "";
    }

    /** Method Untuk Mereload Data Grid */
    GetAllData(): void {
        this.setupTiketPemeriksaanService.onGetAll()
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    SetFrom(Data: ITiketPemeriksaanModel): void {
        this.FormInputData.reset();

        let data = {
            id_tiket_pemeriksaan: Data.id_tiket_pemeriksaan,
            id_jenis_ruangan: Data.id_jenis_ruangan,
            kode_tiket_pemeriksaan: Data.kode_tiket_pemeriksaan,
            nama_tiket_pemeriksaan: Data.nama_tiket_pemeriksaan,
            id_setup_tarif: Data.id_setup_tarif,
            id_kelas: Data.id_kelas,
            is_subsidi: Data.is_subsidi,
        };

        this.FormInputData.setValue(data);

        setTimeout(() => {
            let inputGroupnama_setup_tarif = document.getElementById("inputGroupnama_setup_tarif") as HTMLInputElement;
            inputGroupnama_setup_tarif.value = Data.nama_setup_tarif;
        }, 500);
    }

    handleChangeDropdownKelas(args: any): void {
        let KelasId = args.itemData.id_kelas;

        this.ModalTitleLookupTarifBerlaku = `Data Tarif Berlaku Pada Kelas ${args.itemData.nama_kelas}`;

        this.UrlLookupTarifBerlaku = this.API_BILLING.API_BILLING.SETTING_HARGA_TARIF.SETTING_TARIF_BERLAKU.GET_ALL_TARIF_BERLAKU_BY_DYNAMIC_FILTER_FOR_TIKET + KelasId;
    }

    handleSelectedTarifBerlaku(args: any): void {
        this.id_setup_tarif.setValue(args.id_setup_tarif);
    }

    /** Method menyimpan | menubah data */
    SaveAndNew(): void {
        const Data = this.FormInputData.value;

        let parameter = {};

        if (this.inputFieldState == 'normal') {

            parameter = {
                id_jenis_ruangan: Data.id_jenis_ruangan,
                kode_tiket_pemeriksaan: Data.kode_tiket_pemeriksaan,
                nama_tiket_pemeriksaan: Data.nama_tiket_pemeriksaan,
                id_setup_tarif: Data.id_setup_tarif,
                id_kelas: Data.id_kelas,
                is_subsidi: Data.is_subsidi,
            };

            this.setupTiketPemeriksaanService.onPostSave(parameter)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                        .then(() => {
                            this.Cancel();
                        });
                });
        } else {

            parameter = {
                id_tiket_pemeriksaan: Data.id_tiket_pemeriksaan,
                id_jenis_ruangan: Data.id_jenis_ruangan,
                kode_tiket_pemeriksaan: Data.kode_tiket_pemeriksaan,
                nama_tiket_pemeriksaan: Data.nama_tiket_pemeriksaan,
                id_setup_tarif: Data.id_setup_tarif,
                id_kelas: Data.id_kelas,
                is_subsidi: Data.is_subsidi,
            }

            this.setupTiketPemeriksaanService.onPutEdit(Data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
                        .then(() => {
                            this.Cancel();
                        });
                });
        }
    }

    /** Method untuk Menghapus data yang ada di grid */
    DeleteData(): void {

        const Data: ITiketPemeriksaanModel = this.SelectedData;

        this.setupTiketPemeriksaanService.onDelete(Data.id_tiket_pemeriksaan)
            .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Hapus Data', result.message)
                    .then(() => {
                        this.GetAllData();
                    });
            })
    }

    Clear(): void {
        this.ResetFrom();
    }

    Cancel(): void {
        this.ResetFrom();
        this.OrgTabsRef.onNavigateTabUsingTabId(0, 'Data');
        this.GetAllData();
    }

    get id_tiket_pemeriksaan(): AbstractControl { return this.FormInputData.get("id_tiket_pemeriksaan"); }
    get id_jenis_ruangan(): AbstractControl { return this.FormInputData.get("id_jenis_ruangan"); }
    get kode_tiket_pemeriksaan(): AbstractControl { return this.FormInputData.get("kode_tiket_pemeriksaan"); }
    get nama_tiket_pemeriksaan(): AbstractControl { return this.FormInputData.get("nama_tiket_pemeriksaan"); }
    get id_setup_tarif(): AbstractControl { return this.FormInputData.get("id_setup_tarif"); }
    get id_kelas(): AbstractControl { return this.FormInputData.get("id_kelas"); }
    get is_subsidi(): AbstractControl { return this.FormInputData.get("is_subsidi"); }
}
