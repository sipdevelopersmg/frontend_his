import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupGroupCoaModel } from '../../../models/setup-data/setup-group-coa/SetupGroupCoaModel';
import { SetupGroupCoaService } from '../../../services/setup-data/setup-group-coa/setup-group-coa.service';
import Config from "./json/grid.config.json";

import "src/app/prototype/ArrPrototype";

@Component({
  selector: 'app-setup-group-coa',
  templateUrl: './setup-group-coa.component.html',
  styleUrls: ['./setup-group-coa.component.css']
})

export class SetupGroupCoaComponent implements OnInit {

  Dataku : Object[] = [
    { id :1 ,nu:2 , obat: 'komik', jumlah: 700},
    { id :2 ,nu:3 , obat: 'panadol', jumlah: 400},
    { id :3 ,nu:1 , obat: 'oskadon', jumlah: 200},
    { id :3 ,nu:1 , obat: 'amoxan', jumlah: 300}
  ]

  Total : Number = 0;
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
  
    constructor(
      private formBuilder: FormBuilder,
      private utilityService: UtilityService,
      private setupGroupCoaService: SetupGroupCoaService
    ) {
      this.FormInputData = this.formBuilder.group({
        id_grup_coa: [0, []],
        grup_coa: ['', [Validators.required]],
        deskripsi: ['', [Validators.required]],
        is_active: [false, []]
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
      this.Total = this.Dataku.sum('jumlah');
    }
  
    coba(){
      // this.Dataku.insertToIndex(2,{id :7 ,nu:5 , obat: 'XXXX', jumlah: 300});
      this.Dataku.orderBy('nu');
      console.log(this.Dataku);
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
  
    handleActionComplete($event: any): void {
      console.log($event);
      if ($event.requestType == "save") {
        if ($event.data.is_active != $event.rowData.is_active) {
          this.SetActive($event.data.is_active, $event.data.id_grup_coa)
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
      this.grup_coa.setValue('');
      this.deskripsi.setValue('');
    }
  
    /** Method Untuk Mereload Data Grid */
    GetAllData(): void {
      this.setupGroupCoaService.onGetAll()
        .subscribe((result) => {
          this.GridDatasource = result.data;
        });
    }
  
    AddDataGroupCoa(): void {
      console.log('Add');
    }
  
    /** Method Untuk Mengisikan data yang ada di form */
    SetFrom(Data): void {
      this.FormInputData.reset();
      this.FormInputData.setValue(Data);
    }
  
    /** Method menyimpan | menubah data */
    SaveAndNew(): void {
      const Data = this.FormInputData.value;
      if (this.inputFieldState=='normal') {
        this.setupGroupCoaService.onPostSave(Data)
          .subscribe((result: SetupGroupCoaModel) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
              .then(() => {
                this.ResetFrom();
              });
          });
      } else {
        this.setupGroupCoaService.onPutEdit(Data)
          .subscribe((result: SetupGroupCoaModel) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
              .then(() => {
  
              });
          });
      }
    }
  
    /** Method untuk mengubah status aktif | Non Active 
     * @param is_active,kode_group_coa
    */
    SetActive(is_active: boolean, id_grup_coa: number): void {
      let data = {
        id_grup_coa: id_grup_coa
      }
      console.log('data', data)
      console.log('is_active', is_active)
      if (is_active) {
        this.setupGroupCoaService.onPutToActive(data)
          .subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Aktifkan', result.message)
              .then(() => {
  
              });
          })
      } else {
        this.setupGroupCoaService.onPutToDeActive(data)
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
  
    get grup_coa(): AbstractControl { return this.FormInputData.get('grup_coa'); }
    get deskripsi(): AbstractControl { return this.FormInputData.get('deskripsi'); }
}
