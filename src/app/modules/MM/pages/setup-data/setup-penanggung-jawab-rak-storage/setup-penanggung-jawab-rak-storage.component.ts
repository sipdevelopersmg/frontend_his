import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupPenanggungJawabRakStorageModel } from '../../../models/setup-data/setup-penanggung-jawab-rak-storagr/SetupPabrikModel';
import { SetupPenanggungJawabRakStorageService } from '../../../services/setup-data/setup-penanggung-jawab-rak-storage/setup-penanggung-jawab-rak-storage.service';
import * as Config from './json/setup-grid.config.json'
import {MM} from 'src/app/api/MM'
import * as LookupGridSetupSupplier from './json/lookupsupplier.json'
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { AttrAst } from '@angular/compiler';
@Component({
  selector: 'app-setup-penanggung-jawab-rak-storage',
  templateUrl: './setup-penanggung-jawab-rak-storage.component.html',
  styleUrls: ['./setup-penanggung-jawab-rak-storage.component.css']
})
export class SetupPenanggungJawabRakStorageComponent implements OnInit {

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

    urlSetupSupplier = MM.SETUP_DATA.SETUP_SUPPLIER.GET_ALL_BY_PARMS;
    LookupGridSetupSupplier = LookupGridSetupSupplier;
    @ViewChild('LookupKodeSetupSupplier') LookupKodeSetupSupplier: OrgInputLookUpKodeComponent;
    
    constructor(
      private formBuilder: FormBuilder,
      private utilityService: UtilityService,
      private setupPenanggungJawabRakStorageService: SetupPenanggungJawabRakStorageService
    ) {
      this.FormInputData = this.formBuilder.group({
        id_penanggung_jawab_rak_storage: [0,[]],
        nik_penanggung_jawab_rak_storage: ['', [Validators.required]],
        nama_penanggung_jawab_rak_storage: ['', [Validators.required]],
        id_supplier: [0, [Validators.required]],
        keterangan: ['', []],
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
  
    }
    
    heandleSelectedSetupSupplier(args: any): void {
      this.id_supplier.setValue(args.id_supplier);
    }
  
    handleSelectedTabId(TabId: string): void {
      this.TabId = TabId;
      if (TabId == 'Input') {
        this.setNewForm;
      } else {
        this.GetAllData
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
      this.LookupKodeSetupSupplier.resetValue();
    }
  
    /** Method Untuk Mereload Data Grid */
    GetAllData(): void {
      this.setupPenanggungJawabRakStorageService.onGetAll()
        .subscribe((result) => {
          this.GridDatasource = result.data;
        });
    }
  
    AddDataPenanggungJawabRakStorage(): void {
      console.log('Add');
    }
  
    /** Method Untuk Mengisikan data yang ada di form */
    SetFrom(Data): void {
      this.FormInputData.reset();
      this.FormInputData.setValue({
        id_penanggung_jawab_rak_storage:Data.id_penanggung_jawab_rak_storage,
        nik_penanggung_jawab_rak_storage:Data.nik_penanggung_jawab_rak_storage,
        nama_penanggung_jawab_rak_storage:Data.nama_penanggung_jawab_rak_storage,
        id_supplier:Data.id_supplier,
        keterangan: Data.keterangan
      });
      this.LookupKodeSetupSupplier.kodeValue = Data.kode_supplier;
      this.LookupKodeSetupSupplier.titleValue = Data.nama_supplier;
    }
  
    /** Method menyimpan | menubah data */
    SaveAndNew(): void {
      const Data = this.FormInputData.value;
      if (this.inputFieldState=='normal') {
        this.setupPenanggungJawabRakStorageService.onPostSave(Data)
          .subscribe((result: SetupPenanggungJawabRakStorageModel) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
              .then(() => {
                this.ResetFrom();
              });
          });
      } else {
        this.setupPenanggungJawabRakStorageService.onPutEdit(Data)
          .subscribe((result: SetupPenanggungJawabRakStorageModel) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
              .then(() => {
  
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
  
    get nik_penanggung_jawab_rak_storage(): AbstractControl { return this.FormInputData.get('nik_penanggung_jawab_rak_storage'); }
    get nama_penanggung_jawab_rak_storage(): AbstractControl { return this.FormInputData.get('nama_penanggung_jawab_rak_storage'); }      
    get id_supplier(): AbstractControl { return this.FormInputData.get('id_supplier'); }      
    get keterangan(): AbstractControl { return this.FormInputData.get('keterangan'); }      


}