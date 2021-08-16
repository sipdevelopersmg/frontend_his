import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-grids';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DebiturModel } from '../../../models/setup-data/setup-debitur.model';
import { SetupDebiturService } from '../../../services/setup-data/setup-debitur/setup-debitur.service';
import * as Config from './json/setup-debitur.config.json';

@Component({
    selector: 'app-setup-debitur',
    templateUrl: './setup-debitur.component.html',
    styleUrls: ['./setup-debitur.component.css']
})
export class SetupDebiturComponent implements OnInit {

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

    GridDatasource: any[] = [];
    private GridData: MolGridComponent = null;
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDataToolbar: any[];

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: DebiturModel;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupDebiturService: SetupDebiturService
    ) {
        this.FormInputData = this.formBuilder.group({
            id_debitur: [0, [Validators.required]],
            kode_debitur: ['', [Validators.required]],
            nama_debitur: ['', [Validators.required]],
            alamat_debitur: ['', [Validators.required]],
            telepon: ['', [Validators.required]],
            email: ['', [Validators.required]],
            tgl_expired: ['', [Validators.required]],
            is_active: [true, [Validators.required]],
            user_created: [0, [Validators.required]],
            time_created: [Date, [Validators.required]],
            user_deactived: [0, [Validators.required]],
            time_deactived: [Date, [Validators.required]],
        });
    }

    ngOnInit(): void {
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];

        this.GetAllData();
    }

    handleSelectedTabId(TabId: string): void {
        this.TabId = TabId;

        if (TabId == 'Input') {
            this.setNewForm();
        } else {
            // this.GetAllData;
        }
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

    /** Untuk identifikasi keyboard down pada grid */
    handleLoadGrid(args: any): void {
        document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
    }

    /** Method setting input new data */
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

    /** Method setting edit data */
    setEditForm(): void {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'edit';
        this.SetFrom(this.SelectedData);
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
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
        this.kode_debitur.setValue('');
        this.nama_debitur.setValue('');
        this.alamat_debitur.setValue('');
        this.telepon.setValue('');
        this.email.setValue('');
        this.tgl_expired.setValue(new Date());
        this.user_created.setValue(0);
    }

    /** Method Untuk Mereload Data Grid */
    GetAllData(): void {
        this.setupDebiturService.onGetAll()
            .subscribe((result) => {
                this.GridDatasource = result.data;

                this.GridData.Grid.refresh();
            });
    }

    /** Method Untuk Mengisikan data yang ada di form */
    SetFrom(Data: DebiturModel): void {
        this.FormInputData.reset();

        this.FormInputData.setValue(Data);
    }

    /** Method menyimpan | menubah data */
    SaveAndNew(): void {
        const Data: DebiturModel = this.FormInputData.value;

        if (this.inputFieldState == 'normal') {

            const UserData: IAuthenticationResponseModel = JSON.parse(sessionStorage.getItem('UserData'));

            Data.user_created = UserData.id_user;

            this.setupDebiturService.onPostSave(Data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                        .then(() => {
                            this.Cancel();
                        });
                });
        } else {
            this.setupDebiturService.onPutEdit(Data)
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

        const Data: DebiturModel = this.SelectedData;

        this.setupDebiturService.onDelete(Data.id_debitur)
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

    get kode_debitur(): AbstractControl { return this.FormInputData.get('kode_debitur'); }
    get nama_debitur(): AbstractControl { return this.FormInputData.get('nama_debitur'); }
    get alamat_debitur(): AbstractControl { return this.FormInputData.get('alamat_debitur'); }
    get telepon(): AbstractControl { return this.FormInputData.get('telepon'); }
    get email(): AbstractControl { return this.FormInputData.get('email'); }
    get tgl_expired(): AbstractControl { return this.FormInputData.get('tgl_expired'); }
    get user_created(): AbstractControl { return this.FormInputData.get('user_created'); }
}
