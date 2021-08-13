import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { KecamatanModel } from 'src/app/modules/PIS/models/setup-data/setup-kecamatan.model';
import { KotaModel } from 'src/app/modules/PIS/models/setup-data/setup-kota.model';
import { ProvinsiModel } from 'src/app/modules/PIS/models/setup-data/setup-provinsi.model';
import { SetupKecamatanService } from 'src/app/modules/PIS/services/setup-data/setup-wilayah/setup-kecamatan.service';
import { SetupKotaService } from 'src/app/modules/PIS/services/setup-data/setup-wilayah/setup-kota.service';
import { SetupProvinsiService } from 'src/app/modules/PIS/services/setup-data/setup-wilayah/setup-provinsi.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as Config from '../json/setup-wilayah.config.json';

@Component({
    selector: 'app-setup-kecamatan',
    templateUrl: './setup-kecamatan.component.html',
    styleUrls: ['./setup-kecamatan.component.css']
})
export class SetupKecamatanComponent implements OnInit {

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

    GridDatasource: any[];
    private GridData: MolGridComponent = null;
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDataToolbar: any[];

    SelectedProvinsi: string;

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: KotaModel;

    /**
     * Dropdown Provinsi Datasource
     * @DropdownProvinsiData
    */
    DropdownProvinsiData: ProvinsiModel[];
    DropdownFields: object = { text: 'nama_wilayah', value: 'kode_wilayah' };

    /**
     * Dropdown Provinsi Datasource
     * @DropdownProvinsiData
    */
    DropdownKotaData: KotaModel[];

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupKotaService: SetupKotaService,
        private setupProvinsiService: SetupProvinsiService,
        private setupKecamatanService: SetupKecamatanService
    ) {
        this.FormInputData = this.formBuilder.group({
            kode_wilayah_parent: ['', []],
            kode_tipe_wilayah: ['', []],
            kode_wilayah: ['', [Validators.required]],
            nama_wilayah: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {
        this.GridDataToolbar = [
            { text: 'Advanced Filter', tooltipText: 'dvanced Filter', prefixIcon: 'fas fa-filter fa-sm', id: 'filter' },
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];

        this.GetAllData();

        /** Method untuk Get All Provinsi */
        this.setupProvinsiService.onGetAll()
            .subscribe((result) => {
                this.DropdownProvinsiData = result.data;
            });
    }

    handleSelectedTabId(TabId: string): void {
        this.TabId = TabId;

        if (TabId == 'Data') {
            this.GetAllData();
        }
        // else {
        //     this.setNewForm();
        // }
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    handleSelectedRow(args: any): void {
        this.SelectedData = args.data;
    }

    handleActionComplete(event: any): void {
        // console.log(event);
        // if (event.requestType == "save") {
        //     if (event.data.is_active != event.rowData.is_active) {
        //         this.SetActive(event.data.is_active, event.data.kode_field)
        //     }
        // }
    }

    handleToolbarClick(args: any): void {
        const item = args.item.id;

        switch (item) {
            case 'filter':
                const btnToggleOffcanvas = document.getElementById('btnToggleOffcanvas') as HTMLElement;
                btnToggleOffcanvas.click();

                let offCanvasEl = document.getElementById('offcanvasFilter') as HTMLElement;

                offCanvasEl.addEventListener('shown.bs.modal', (event) => {
                    offCanvasEl.blur();
                });

                break;
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

    handleClickCommandGrid(args: any): void {
        // console.log(args);
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

    /** untuk identifikasi keyboard down pada grid */
    handleLoadGrid(args: any): void {
        document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
    }

    handleFilterPencarian(FilterKota?: any): void {
        this.GetAllData(FilterKota);

        setTimeout(() => {
            (<HTMLElement>document.getElementById('btnClose')).click();
        }, 100);
    }

    handleChangeFilterProvinsi(ProvinsiId: string): void {

        this.SelectedProvinsi = ProvinsiId;

        this.setupKotaService.onGetAll(ProvinsiId)
            .subscribe((result) => {
                this.DropdownKotaData = result.data;
            });
    }

    handleChangeDropdownKota(args: any): void {
        this.kode_wilayah.setValue(args.itemData.kode_wilayah + '.');
    }

    /** method setting input new data */
    setNewForm(): void {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'normal';
        this.FormInputData.reset();
        this.StatusFormNew = true;
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    };

    /** method setting edit data */
    setEditForm(): void {
        this.inputFieldState = 'edit';
        this.SetFrom(this.SelectedData);
        this.StatusFormNew = false;
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];

    };

    /** method setting lihat data detail */
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
        this.kode_wilayah.setValue('');
        this.kode_wilayah_parent.setValue('');
        this.kode_tipe_wilayah.setValue('');
        this.nama_wilayah.setValue('');
    }

    /** Method Untuk Mereload Data Grid */
    GetAllData(filterKota?: string): void {

        const param = filterKota ? filterKota : '11.30';

        this.setupKecamatanService.onGetAll(param)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    /** Method Untuk Mengisikan data yang ada di form */
    SetFrom(Data: KotaModel): void {
        this.FormInputData.reset();
        this.FormInputData.setValue(Data);
    }

    /** Method menyimpan | menubah data */
    SaveAndNew(): void {
        const Data = this.FormInputData.value;

        if (this.inputFieldState == 'normal') {

            this.setupKecamatanService.onPostSave(Data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                        .then(() => {
                            this.Cancel();
                        });
                });
        } else {
            this.setupKecamatanService.onPutEdit(Data)
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

        const Data: KecamatanModel = this.SelectedData;

        this.setupKecamatanService.onDelete(Data.kode_wilayah)
            .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Hapus Data', result.message)
                    .then(() => {
                        this.Cancel();
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

    KeyDownHandler(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            console.log('Enter Has Been Pressed');
        };
        if (event.keyCode === 46) {
            console.log('Delete Key Has Been Pressed');
        };
        if (event.keyCode === 40) {
            console.log('Delete Key Has Been Pressed');
        }
    }

    get kode_wilayah_parent(): AbstractControl { return this.FormInputData.get('kode_wilayah_parent'); }
    get kode_tipe_wilayah(): AbstractControl { return this.FormInputData.get('kode_tipe_wilayah'); }
    get kode_wilayah(): AbstractControl { return this.FormInputData.get('kode_wilayah'); }
    get nama_wilayah(): AbstractControl { return this.FormInputData.get('nama_wilayah'); }

}
