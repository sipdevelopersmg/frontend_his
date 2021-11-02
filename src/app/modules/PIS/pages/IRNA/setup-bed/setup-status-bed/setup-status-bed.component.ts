import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { IBedStatusModel } from 'src/app/modules/PIS/models/IRNA/setup-status-bed.model';
import { SetupStatusBedService } from 'src/app/modules/PIS/services/IRNA/setup-bed/setup-status-bed/setup-status-bed.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as Config from './json/setup-status-bed.config.json';

@Component({
    selector: 'app-setup-status-bed',
    templateUrl: './setup-status-bed.component.html',
    styleUrls: ['./setup-status-bed.component.css']
})
export class SetupStatusBedComponent implements OnInit {

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
    GridData: MolGridComponent = null;
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDataToolbar: any[];

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: IBedStatusModel;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupStatusBedService: SetupStatusBedService
    ) { }

    ngOnInit(): void {
        this.FormInputData = this.formBuilder.group({
            id_setup_status_bed: [0, [Validators.required]],
            status_bed: ["", [Validators.required]],
            status_bed_descr: ["", [Validators.required]],
            is_ready: [false, [Validators.required]],
            is_new: [false, [Validators.required]],
            is_fill: [false, [Validators.required]],
        });

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
            // this.setNewForm();
        } else {
            this.GetAllData();
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
                this.Delete(this.SelectedData.id_setup_status_bed);
                break;
            default:
                break;
        }
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

    setNewForm(): void {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'normal';
        this.ResetFrom();
        this.StatusFormNew = true;
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
            { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt' },
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
        ];
    };

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

    setViewForm(): void {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'detail';
        this.SetFrom(this.SelectedData);
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }

    ResetFrom(): void {
        this.FormInputData.reset();
        this.id_setup_status_bed.setValue(0);
        this.status_bed.setValue("");
        this.status_bed_descr.setValue('');
        this.is_ready.setValue(false);
        this.is_new.setValue(false);
        this.is_fill.setValue(false);

        setTimeout(() => {
            let is_ready = document.getElementById("is_ready") as HTMLInputElement;
            is_ready.checked = false;

            let is_new = document.getElementById("is_new") as HTMLInputElement;
            is_new.checked = false;

            let is_fill = document.getElementById("is_fill") as HTMLInputElement;
            is_fill.checked = false;
        }, 500);
    }

    GetAllData(): void {
        this.setupStatusBedService.onGetAllBedStatus()
            .subscribe((result) => {
                this.GridDatasource = result.data;
            })
    }

    SetFrom(Data: IBedStatusModel): void {
        this.FormInputData.reset();

        let data = {};

        data = {
            id_setup_status_bed: Data.id_setup_status_bed,
            status_bed: Data.status_bed,
            status_bed_descr: Data.status_bed_descr,
            is_ready: Data.is_ready,
            is_new: Data.is_new,
            is_fill: Data.is_fill,
        };

        this.FormInputData.setValue(data);

        setTimeout(() => {
            let is_ready = document.getElementById("is_ready") as HTMLInputElement;
            is_ready.checked = Data.is_ready;

            let is_new = document.getElementById("is_new") as HTMLInputElement;
            is_new.checked = Data.is_new;

            let is_fill = document.getElementById("is_fill") as HTMLInputElement;
            is_fill.checked = Data.is_fill;
        }, 500);
    }

    handleChangeRadioButtonOpsi(SelectedRadio: string): void {
        switch (SelectedRadio) {
            case 'is_ready':
                this.is_ready.setValue(true);
                this.is_new.setValue(false);
                this.is_fill.setValue(false);
                break;
            case 'is_new':
                this.is_ready.setValue(false);
                this.is_new.setValue(true);
                this.is_fill.setValue(false);
                break;
            case 'is_fill':
                this.is_ready.setValue(false);
                this.is_new.setValue(false);
                this.is_fill.setValue(true);
                break;
            default:
                break;
        }
    }

    SaveAndNew(): void {
        const Data = this.FormInputData.value;

        let data = {};

        if (this.inputFieldState == 'normal') {

            data = {
                status_bed: Data.status_bed,
                status_bed_descr: Data.status_bed_descr,
                is_ready: Data.is_ready,
                is_new: Data.is_new,
                is_fill: Data.is_fill,
            };

            this.setupStatusBedService.onPostSaveBedStatus(data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                        .then(() => {
                            this.Cancel();
                        });
                });
        } else {

            data = {
                id_setup_status_bed: Data.id_setup_status_bed,
                status_bed: Data.status_bed,
                status_bed_descr: Data.status_bed_descr,
                is_ready: Data.is_ready,
                is_new: Data.is_new,
                is_fill: Data.is_fill,
            };

            this.setupStatusBedService.onPutUpdateBedStatus(data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
                        .then(() => {
                            this.Cancel();
                        });
                });
        }
    }

    Clear(): void {
        this.ResetFrom();
    }

    Cancel(): void {
        this.ResetFrom();
        this.OrgTabsRef.onNavigateTabUsingTabId(0, 'Data');
        this.GetAllData();
    }

    Delete(id_setup_status_bed: number): void {
        this.setupStatusBedService.onDeleteBedStatus(id_setup_status_bed)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Hapus Data', result.message)
                        .then(() => {
                            this.GetAllData();
                        });
                }
            })
    }

    get id_setup_status_bed(): AbstractControl { return this.FormInputData.get("id_setup_status_bed"); }
    get status_bed(): AbstractControl { return this.FormInputData.get("status_bed"); }
    get status_bed_descr(): AbstractControl { return this.FormInputData.get("status_bed_descr"); }
    get is_ready(): AbstractControl { return this.FormInputData.get("is_ready"); }
    get is_new(): AbstractControl { return this.FormInputData.get("is_new"); }
    get is_fill(): AbstractControl { return this.FormInputData.get("is_fill"); }
}
