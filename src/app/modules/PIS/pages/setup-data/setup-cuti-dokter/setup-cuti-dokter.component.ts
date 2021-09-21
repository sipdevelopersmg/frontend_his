import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupCutiDokterService } from '../../../services/setup-data/setup-cuti-dokter/setup-cuti-dokter.service';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import * as Config from './json/setup-cuti-dokter.config.json';
import * as API_PIS_SETUP_DATA from '../../../../../api/PIS/SETUP_DATA';

@Component({
    selector: 'app-setup-cuti-dokter',
    templateUrl: './setup-cuti-dokter.component.html',
    styleUrls: ['./setup-cuti-dokter.component.css']
})
export class SetupCutiDokterComponent implements OnInit {

    API_PIS_SETUP_DATA = API_PIS_SETUP_DATA.API_SETUP_DATA;

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

    FilterColumnDatasource: any[] = [
        { text: 'Nama Dokter', value: "concat(p.nama_depan, ' ',p.nama_belakang)" },
        { text: 'Tgl. Mulai Cuti', value: 'cd.tgl_mulai_cuti' },
        { text: 'Tgl. Selesai Cuti', value: 'cd.tgl_selesai_cuti' },
    ];

    /**
     * Variable untuk menyimpan Configurasi Grid
     * @Json Config
    */
    GridConfig = Config;
    GridDataColumns: any;

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

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: any;

    @ViewChild('LookupKodeDokter') LookupKodeDokter: OrgInputLookUpKodeComponent;
    urlDokter = this.API_PIS_SETUP_DATA.SETUP_DOKTER.POST_GET_ALL_DOKTER_FOR_LOOKUP;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private navigationService: NavigationService,
        private setupCutiDokterService: SetupCutiDokterService
    ) {
        this.FormInputData = this.formBuilder.group({
            id_dokter: [0, [Validators.required]],
            nama_dokter: ["", [Validators.required]],
            spesialisasi_dokter: ["", [Validators.required]],
            tgl_mulai_cuti: ['', [Validators.required]],
            tgl_selesai_cuti: ['', [Validators.required]],
            keterangan: ['', []],
            is_active: [false, []],
        });
    }

    ngOnInit(): void {
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            { text: 'Ubah Status', tooltipText: 'Ubah Status', prefixIcon: 'fas fa-redo fa-sm', id: 'ubah_status' },
            'Search'
        ];

        this.GetAllData();
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

    handlePencarianFilter(args: any[]): void {
        this.setupCutiDokterService.onGetAllByDynamicFilter(args)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    handleSelectedRow(args: any): void {
        this.SelectedData = args.data;
    }

    handleActionComplete(event: any): void {
        // console.log(event);
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
            case 'ubah_status':
                this.handleChangeStatus(this.SelectedData);
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

    /** method setting input new data */
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

    /** method setting edit data */
    setEditForm(): void {
        this.inputFieldState = 'edit';
        this.SetFrom(this.SelectedData);
        this.StatusFormNew = false;
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
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
        this.id_dokter.setValue(0);
        this.tgl_mulai_cuti.setValue('');
        this.tgl_selesai_cuti.setValue('');
        this.keterangan.setValue('');

        (<HTMLInputElement>document.getElementById('inputGroupfull_name')).value = "";
    }

    /** Method Untuk Mereload Data Grid */
    GetAllData(): void {
        this.setupCutiDokterService.onGetAll()
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    /** Method Untuk Mengisikan data yang ada di form */
    SetFrom(Data: any): void {
        this.FormInputData.reset();
        this.FormInputData.setValue(Data);

        setTimeout(() => {
            (<HTMLInputElement>document.getElementById('inputGroupfull_name')).value = Data.nama_dokter;
        }, 500);
    }

    /** Method menyimpan | menubah data */
    SaveAndNew(): void {
        const Data: any = this.FormInputData.value;

        if (this.inputFieldState == 'normal') {
            this.setupCutiDokterService.onPostSave(Data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                        .then(() => {
                            this.Cancel();
                        });
                });
        } else {
            this.setupCutiDokterService.onPutEdit(Data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
                        .then(() => {
                            this.Cancel();
                        });
                });
        }
    }

    heandleSelectedDokter(args: any): void {
        this.id_dokter.setValue(args.id_dokter || args[0].id_dokter);
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

    handleChangeStatus(Data: any): void {
        const parameter = {
            id_dokter: Data.id_dokter,
            is_active: !Data.is_active
        }

        this.setupCutiDokterService.onPutEditStatus(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Status Data', result.message)
                        .then(() => {
                            this.GetAllData();
                        });
                }
            })
    }

    ngOnDestroy(): void {
        localStorage.removeItem('ActiveFieldGrid');
    }

    get id_dokter(): AbstractControl { return this.FormInputData.get('id_dokter'); }
    get tgl_mulai_cuti(): AbstractControl { return this.FormInputData.get('tgl_mulai_cuti'); }
    get tgl_selesai_cuti(): AbstractControl { return this.FormInputData.get('tgl_selesai_cuti'); }
    get keterangan(): AbstractControl { return this.FormInputData.get('keterangan'); }
}
