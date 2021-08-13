import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { EducationModel } from '../../../models/setup-data/setup-education.model';
import { SetupEducationService } from '../../../services/setup-data/setup-education/setup-education.service';
import * as Config from './json/setup-education.config.json';

@Component({
    selector: 'app-setup-education',
    templateUrl: './setup-education.component.html',
    styleUrls: ['./setup-education.component.css']
})
export class SetupEducationComponent implements OnInit {

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

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: EducationModel;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupEducationService: SetupEducationService
    ) {
        this.FormInputData = this.formBuilder.group({
            id_education: [0, [Validators.required]],
            education: ['', [Validators.required]],
            deskripsi: ['', [Validators.required]],
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

    handleActionComplete(event: any): void {
        console.log(event);
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
        console.log(args);
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
        this.id_education.setValue(0);
        this.education.setValue('');
    }

    /** Method Untuk Mereload Data Grid */
    GetAllData(): void {
        this.setupEducationService.onGetAll()
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    /** Method Untuk Mengisikan data yang ada di form */
    SetFrom(Data: EducationModel): void {
        this.FormInputData.reset();
        this.FormInputData.setValue(Data);
    }

    /** Method menyimpan | menubah data */
    SaveAndNew(): void {
        const Data: EducationModel = this.FormInputData.value;

        if (this.inputFieldState == 'normal') {
            Data.id_education = 0;

            this.setupEducationService.onPostSave(Data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                        .then(() => {
                            this.Cancel();
                        });
                });
        } else {
            this.setupEducationService.onPutEdit(Data)
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

        const Data: EducationModel = this.SelectedData;

        this.setupEducationService.onDelete(Data.id_education)
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

    get id_education(): AbstractControl { return this.FormInputData.get('id_education'); }
    get education(): AbstractControl { return this.FormInputData.get('education'); }
    get deskripsi(): AbstractControl { return this.FormInputData.get('deskripsi'); }

}
