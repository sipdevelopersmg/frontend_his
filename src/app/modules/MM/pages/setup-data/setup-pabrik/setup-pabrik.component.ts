import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { Columns } from 'src/app/modules/shared/components/molecules/grid/grid/grid.model';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ISetupPabrikModel, SetupPabrikModel } from '../../../models/setup-data/setup-pabrik/SetupPabrikModel';
import { SetupPabrikService } from '../../../services/setup-data/setup-pabrik/setup-pabrik.service';

import * as Config from './json/setup-pabrik.config.json';

@Component({
    selector: 'app-setup-pabrik',
    templateUrl: './setup-pabrik.component.html',
    styleUrls: ['./setup-pabrik.component.css']
})
export class SetupPabrikComponent implements OnInit {

    // ** Variable untuk menyimpan Button Navigasi Halaman
    ButtonNav: ButtonNavModel[];

    // ** Variable untuk mengatur Form Input Data Pabrik
    FormInputDataPabrik: FormGroup;

    // tslint:disable-next-line: no-inferrable-types
    TabId: string = 'DataPabrik';
    @ViewChild('OrgTabsRef', { static: true }) OrgTabsRef: OrgTabsComponentComponent;

    GridPabrikDatasource: any[];
    GridPabrikColumns: Columns[];
    GridDataPabrikPagingSettings = { pageSizes: true, pageSize: 10 };
    private GridDataPabrik: MolGridComponent = null;
    GridDataPabrikEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDataPabrikToolbar: any[];

    public GridPabrikConfig = Config;

    modalRef: BsModalRef;
    @ViewChild('modalDialogAddDataPabrik') modalDialogAddDataPabrik: TemplateRef<any>;

    RadioButtonStatus: object[] = [
        { id: 'active', value: true, label: 'Active', checked: false, inputFieldState: 'normal' },
        { id: 'nonActive', value: false, label: 'Non Active', checked: false, inputFieldState: 'normal' },
    ];

    inputFieldState = 'normal';

    SelectedDataPabrik: ISetupPabrikModel;

    constructor(
        private formBuilder: FormBuilder,
        private modalService: BsModalService,
        private utilityService: UtilityService,
        private setupPabrikService: SetupPabrikService
    ) {
        this.FormInputDataPabrik = this.formBuilder.group({
            id_pabrik: [0, []],
            kode_pabrik: [null, [Validators.required]],
            nama_pabrik: [null, [Validators.required]],
            alamat_pabrik: ['', []],
            kota: ['', []],
            provinsi: ['', []],
            negara: ['', []],
            telepon: ['', []],
            fax: ['', []],
            kode_pos: ['', []],
            email: ['', []],
            contact_person: ['', []],
            is_active: [null, [Validators.required]]
        });
    }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save & New', StackIcon: true, Icons1: 'fa-save', Icons2: 'fa-plus-circle' },
            { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt' },
            { Id: 'Cancel', Captions: 'Cancel', Icons1: 'fa-window-close' },
        ];

        this.GridDataPabrikToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            'Search'
        ];

        // this.onGetAllSetupPabrik();
    }

    onSetFormSetupPabrikAttributes(): void {
        this.id_pabrik.setValue(0);
        this.kode_pabrik.setValue(null);
        this.nama_pabrik.setValue(null);
        this.alamat_pabrik.setValue('');
        this.kota.setValue('');
        this.provinsi.setValue('');
        this.negara.setValue('');
        this.telepon.setValue('');
        this.fax.setValue('');
        this.kode_pos.setValue('');
        this.email.setValue('');
        this.contact_person.setValue('');
        this.is_active.setValue(null);
    }

    onGetAllSetupPabrik(): void {
        this.setupPabrikService.onGetAllPabrik()
            .subscribe((result: SetupPabrikModel) => {
                this.GridPabrikDatasource = result.data;
            });
    }

    onGetSelectedTabId(TabId: string): void {
        this.TabId = TabId;
    }

    onInitalizedGrid(component: MolGridComponent) {
        this.GridDataPabrik = component;
    }

    onSelectedRow(args: any): void {
        this.SelectedDataPabrik = args.data;
    }

    onToolbarClick(args: any): void {
        const item = args.item.id;

        switch (item) {
            case 'add':
                this.OrgTabsRef.onNavigateTabUsingTabId(1, 'InputPabrik');
                this.inputFieldState = 'normal';
                this.FormInputDataPabrik.reset();
                break;
            case 'edit':
                this.OrgTabsRef.onNavigateTabUsingTabId(1, 'InputPabrik');
                this.inputFieldState = 'edit';
                this.onEditDataPabrik(this.SelectedDataPabrik);
                break;
            case 'detail':
                this.OrgTabsRef.onNavigateTabUsingTabId(1, 'InputPabrik');
                this.inputFieldState = 'detail';
                this.onSeeDetailDataPabrik(this.SelectedDataPabrik);
                break;
            default:
                break;
        }
    }

    onAddDataPabrik(): void {
        console.log('Add');

        // this.modalRef = this.modalService.show(
        //     this.modalDialogAddDataPabrik,
        //     Object.assign({}, { class: 'modal-lg' })
        // );

    }

    onEditDataPabrik(DataPabrik: ISetupPabrikModel): void {
        this.FormInputDataPabrik.reset();
        this.FormInputDataPabrik.setValue(DataPabrik);

        this.RadioButtonStatus = [
            { id: 'active', value: true, label: 'Active', checked: false, inputFieldState: 'normal' },
            { id: 'nonActive', value: false, label: 'Non Active', checked: false, inputFieldState: 'normal' },
        ];

        this.FormInputDataPabrik.setValue(DataPabrik);

        if (DataPabrik.is_active) {
            this.RadioButtonStatus = [
                { id: 'active', value: true, label: 'Active', checked: true, inputFieldState: 'edit' },
                { id: 'nonActive', value: false, label: 'Non Active', checked: false, inputFieldState: 'edit' },
            ];
        } else {
            this.RadioButtonStatus = [
                { id: 'active', value: true, label: 'Active', checked: false, inputFieldState: 'edit' },
                { id: 'nonActive', value: false, label: 'Non Active', checked: true, inputFieldState: 'edit' },
            ];
        };
    }

    onSeeDetailDataPabrik(DataPabrik: ISetupPabrikModel): void {
        this.FormInputDataPabrik.reset();

        this.RadioButtonStatus = [
            { id: 'active', value: true, label: 'Active', checked: false, inputFieldState: 'normal' },
            { id: 'nonActive', value: false, label: 'Non Active', checked: false, inputFieldState: 'normal' },
        ];

        this.FormInputDataPabrik.setValue(DataPabrik);

        if (DataPabrik.is_active) {
            this.RadioButtonStatus = [
                { id: 'active', value: true, label: 'Active', checked: true, inputFieldState: 'detail' },
                { id: 'nonActive', value: false, label: 'Non Active', checked: false, inputFieldState: 'detail' },
            ];
        } else {
            this.RadioButtonStatus = [
                { id: 'active', value: true, label: 'Active', checked: false, inputFieldState: 'detail' },
                { id: 'nonActive', value: false, label: 'Non Active', checked: true, inputFieldState: 'detail' },
            ];
        };
    }

    onClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'SaveAndNew':
                this.onSaveAndNew();
                break;
            case 'Clear':
                this.onClear();
                break;
            case 'Cancel':
                this.onCancel();
                break;
            default:
                break;
        }
    }

    onSaveAndNew(): void {
        const Data = this.FormInputDataPabrik.value;

        Data.is_active = JSON.parse(Data.is_active);

        this.setupPabrikService.onPostSaveSetupPabrik(Data)
            .subscribe((result: SetupPabrikModel) => {
                this.utilityService.onShowingCustomAlert('success', 'Success', result.message)
                    .then(() => {
                        this.FormInputDataPabrik.reset();

                        this.onSetFormSetupPabrikAttributes();
                    });
            });
    }

    onClear(): void {
        this.FormInputDataPabrik.reset();

        this.onSetFormSetupPabrikAttributes();
    }

    onCancel(): void {
        this.FormInputDataPabrik.reset();

        this.onSetFormSetupPabrikAttributes();

        this.OrgTabsRef.onNavigateTabUsingTabId(0, 'DataPabrik');
    }

    onGetPabrikById(): void {
        this.setupPabrikService.onGetPabrikById(2)
            .subscribe((result) => {
                console.log(result);
            }, (error) => {
                console.warn(error);
            }, () => {

            });
    }

    onTestError(): void {
        this.setupPabrikService.onTestError()
            .subscribe((result) => {
                console.log(result);
            });
    }

    onLoadGridPabrik(args: any): void {
        document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.onKeyDownHandler.bind(this));
    }

    onKeyDownHandler(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            alert('Enter Has Been Pressed');
        };

        if (event.keyCode === 46) {
            alert('Delete Key Has Been Pressed');
        };

        if (event.keyCode === 40) {
            // let currentElement = this.GridDataPabrik.Grid.page

            console.log(this.GridDataPabrik.Grid.columns.length);
        }
    }

    get id_pabrik(): AbstractControl { return this.FormInputDataPabrik.get('id_pabrik'); }
    get kode_pabrik(): AbstractControl { return this.FormInputDataPabrik.get('kode_pabrik'); }
    get nama_pabrik(): AbstractControl { return this.FormInputDataPabrik.get('nama_pabrik'); }
    get alamat_pabrik(): AbstractControl { return this.FormInputDataPabrik.get('alamat_pabrik'); }
    get kota(): AbstractControl { return this.FormInputDataPabrik.get('kota'); }
    get provinsi(): AbstractControl { return this.FormInputDataPabrik.get('provinsi'); }
    get negara(): AbstractControl { return this.FormInputDataPabrik.get('negara'); }
    get telepon(): AbstractControl { return this.FormInputDataPabrik.get('telepon'); }
    get fax(): AbstractControl { return this.FormInputDataPabrik.get('fax'); }
    get kode_pos(): AbstractControl { return this.FormInputDataPabrik.get('kode_pos'); }
    get email(): AbstractControl { return this.FormInputDataPabrik.get('email'); }
    get contact_person(): AbstractControl { return this.FormInputDataPabrik.get('contact_person'); }
    get is_active(): AbstractControl { return this.FormInputDataPabrik.get('is_active'); }
}
