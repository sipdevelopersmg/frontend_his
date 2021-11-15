import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { MM } from 'src/app/api/MM';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupGrupItemModel } from '../../../models/setup-data/setup-grup-item/SetupGrupItemModel';
import { SetupGrupItemService } from '../../../services/setup-data/setup-grup-item/setup-grup-item.service';
import { SetupTipeItemService } from '../../../services/setup-data/setup-tipe-item/setup-tipe-item.service';
import * as Config from './json/grid.config.json' 
import * as LookupGridCoaPersediaan from './json/LookupGridCoaPersediaan.json'

@Component({
    selector: 'app-setup-grup-item',
    templateUrl: './setup-grup-item.component.html',
    styleUrls: ['./setup-grup-item.component.css']
})
export class SetupGrupItemComponent implements OnInit {
    urlCoa = MM.SETUP_DATA.SETUP_COA.GET_ALL_BY_PARMS;
    LookupGridCoa = LookupGridCoaPersediaan;

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
        SelectedData: Object;
       @ViewChild('LookupKodeCoaPersediaan') LookupKodeCoaPersediaan: OrgInputLookUpKodeComponent;
       @ViewChild('LookupKodeCoaPendapatan') LookupKodeCoaPendapatan: OrgInputLookUpKodeComponent;
       @ViewChild('LookupKodeCoaBiaya') LookupKodeCoaBiaya: OrgInputLookUpKodeComponent;
       SetupTipeItemDropdownField: object = { text: 'tipe_item', value: 'id_tipe_item' };

        constructor(
            private formBuilder: FormBuilder,
            private utilityService: UtilityService,
            private setupGrupItemService: SetupGrupItemService,
            public setupTipeItemService: SetupTipeItemService,

        ) {
            this.FormInputData = this.formBuilder.group({
                id_grup_item:['',[]],
                kode_grup_item: ['', [Validators.required]],
                grup_item: ['', [Validators.required]],
                last_no:['',[]],
                id_coa_persediaan:['',[]],
                id_coa_pendapatan:['',[]],
                id_coa_biaya:['',[]],
                is_active: [false, []],
                id_tipe_item: ['',[]]
            });
        }
    
        ngOnInit(): void {
    
            this.GridDataToolbar = [
                { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
                { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
                { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
                'Search'
            ];
    
            this.GetAllData();
            this.setupTipeItemService.setDataSource();

        }
    
    
        handleSelectedTabId(TabId: string): void {
            this.TabId = TabId;
            if (TabId == 'Input') {
                this.setNewForm;
            } else {
                this.GetAllData
            }
        }

        heandleSelectedCoaPersediaan(args: any): void {
            this.id_coa_persediaan.setValue(args.id_coa);
        } 

        heandleSelectedCoaPendapatan(args: any): void {
            this.id_coa_pendapatan.setValue(args.id_coa);
        }

        heandleSelectedCoaBiaya(args: any): void {
            this.id_coa_biaya.setValue(args.id_coa);
        }
    
        InitalizedGrid(component: MolGridComponent) {
            this.GridData = component;
        }
    
        handleSelectedRow(args: any): void {
            this.SelectedData = args.data;
        }
    
        handleActionComplete($event: any): void {
            console.log($event);
            if ($event.requestType == "save") {
                if ($event.data.is_active != $event.rowData.is_active) {
                    this.SetActive($event.data.is_active, $event.data.id_grup_item)
                }
            }
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
    
        /** Method untuk mengkosongkan data yang ada di form*/
        ResetFrom(): void {
            this.FormInputData.reset();
            this.kode_grup_item.setValue('');
            this.grup_item.setValue('');
            this.last_no.setValue('');
            this.LookupKodeCoaPendapatan.resetValue();
            this.LookupKodeCoaPersediaan.resetValue();
            this.LookupKodeCoaBiaya.resetValue();
        }
    
        /** Method Untuk Mereload Data Grid */
        GetAllData(): void {
            this.setupGrupItemService.onGetAll()
                .subscribe((result) => {
                    this.GridDatasource = result.data;
                });
        }
    
        AddDataGrupItem(): void {
            console.log('Add');
        }
    
        /** Method Untuk Mengisikan data yang ada di form */
        SetFrom(Data): void {
            this.FormInputData.reset();
            this.FormInputData.setValue({
                id_grup_item    : Data.id_grup_item,
                kode_grup_item  : Data.kode_grup_item,
                grup_item       : Data.grup_item,
                last_no         : Data.last_no,
                id_coa_persediaan: Data.id_coa_persediaan,
                id_coa_pendapatan: Data.id_coa_pendapatan,
                id_coa_biaya    : Data.id_coa_biaya,
                is_active       : Data.is_active,
                id_tipe_item    : Data.id_tipe_item
            });
            this.LookupKodeCoaPersediaan.kodeValue = Data.kode_coa_persediaan;
            this.LookupKodeCoaPersediaan.titleValue = Data.deskripsi_coa_persediaan;
            this.LookupKodeCoaPendapatan.kodeValue = Data.kode_coa_pendapatan;
            this.LookupKodeCoaPendapatan.titleValue = Data.deskripsi_coa_pendapatan;
            this.LookupKodeCoaBiaya.kodeValue = Data.kode_coa_biaya;
            this.LookupKodeCoaBiaya.titleValue = Data.deskripsi_coa_biaya;
        }
    
        /** Method menyimpan | menubah data */
        SaveAndNew(): void {
            const Data = this.FormInputData.value;
            if (this.inputFieldState=='normal') {
                this.setupGrupItemService.onPostSave(Data)
                    .subscribe((result: SetupGrupItemModel) => {
                        this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                            .then(() => {
                                this.ResetFrom();
                            });
                    });
            } else {
                this.setupGrupItemService.onPutEdit(Data)
                    .subscribe((result: SetupGrupItemModel) => {
                        this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
                            .then(() => {
    
                            });
                    });
            }
        }
    
        /** Method untuk mengubah status aktif | Non Active 
         * @param is_active,kode_grup_item
        */
        SetActive(is_active: boolean, id_grup_item: number): void {
            let data = {
                id_grup_item:id_grup_item
            }
            console.log('data', data)
            console.log('is_active', is_active)
            if (is_active) {
                this.setupGrupItemService.onPutToActive(data)
                    .subscribe((result) => {
                        this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Aktifkan', result.message)
                            .then(() => {
    
                            });
                    })
            } else {
                this.setupGrupItemService.onPutToDeActive(data)
                    .subscribe((result) => {
                        this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Non Aktifkan', result.message)
                            .then(() => {
    
                            });
                    })
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
    
        get kode_grup_item(): AbstractControl { return this.FormInputData.get('kode_grup_item'); }
        get grup_item(): AbstractControl { return this.FormInputData.get('grup_item'); }
        get last_no(): AbstractControl { return this.FormInputData.get('last_no'); }
        get id_coa_persediaan(): AbstractControl { return this.FormInputData.get('id_coa_persediaan'); }
        get id_coa_pendapatan(): AbstractControl { return this.FormInputData.get('id_coa_pendapatan'); }
        get id_coa_biaya(): AbstractControl { return this.FormInputData.get('id_coa_biaya'); }

}
