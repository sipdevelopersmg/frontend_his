import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { take } from 'rxjs/operators';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { KebangsaanModel } from '../../../models/setup-data/setup-kebangsaan.model';
import { SetupKebangsaanService } from '../../../services/setup-data/setup-kebangsaan/setup-kebangsaan.service';
import * as Config from './json/setup-kebangsaan.config.json';

@Component({
    selector: 'app-setup-kebangsaan',
    templateUrl: './setup-kebangsaan.component.html',
    styleUrls: ['./setup-kebangsaan.component.css']
})
export class SetupKebangsaanComponent implements OnInit, OnDestroy {

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
    SelectedData: KebangsaanModel;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private navigationService: NavigationService,
        private setupKebangsaanService: SetupKebangsaanService
    ) {
        this.FormInputData = this.formBuilder.group({
            id_kebangsaan: [0, [Validators.required]],
            kode_kebangsaan: ['', [Validators.required]],
            nama_kebangsaan: ['', []]
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

        this.navigationService.onGetFieldBySidebarMenuId()
            .pipe(take(1))
            .subscribe((result) => {
                this.GridDataColumns = result;
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
        this.id_kebangsaan.setValue(0);
        this.kode_kebangsaan.setValue('');
        this.nama_kebangsaan.setValue('');
    }

    /** Method Untuk Mereload Data Grid */
    GetAllData(): void {
        this.setupKebangsaanService.onGetAll()
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    /** Method Untuk Mengisikan data yang ada di form */
    SetFrom(Data): void {
        this.FormInputData.reset();
        this.FormInputData.setValue(Data);
    }

    /** Method menyimpan | menubah data */
    SaveAndNew(): void {
        const Data: KebangsaanModel = this.FormInputData.value;

        if (this.inputFieldState == 'normal') {

            Data.id_kebangsaan = 0;

            this.setupKebangsaanService.onPostSave(Data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                        .then(() => {
                            this.Cancel();
                        });
                });
        } else {
            this.setupKebangsaanService.onPutEdit(Data)
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

        const Data: KebangsaanModel = this.SelectedData;

        this.setupKebangsaanService.onDelete(Data.id_kebangsaan)
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

    ngOnDestroy(): void {
        sessionStorage.removeItem('ActiveFieldGrid');
    }

    get id_kebangsaan(): AbstractControl { return this.FormInputData.get('id_kebangsaan'); }
    get kode_kebangsaan(): AbstractControl { return this.FormInputData.get('kode_kebangsaan'); }
    get nama_kebangsaan(): AbstractControl { return this.FormInputData.get('nama_kebangsaan'); }
}
