import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import * as Config  from './json/grid.config.json';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupStockroomModel } from '../../../models/setup-data/setup-stockroom/SetupStockroomModel';
import { SetupStockroomService } from '../../../services/setup-data/setup-stockroom/setup-stock-room.service';
import { SetupTipeStockroomService } from '../../../services/setup-data/setup-tipe-stockroom/setup-tipe-stockroom.service';

@Component({
  selector: 'app-setup-stockroom',
  templateUrl: './setup-stockroom.component.html',
  styleUrls: ['./setup-stockroom.component.css']
})
export class SetupStockroomComponent implements OnInit {

  MaritalTipeStockroomDropdownField: object = { text: 'tipe_stockroom', value: 'id_tipe_stockroom' };
  MaritalStockroomDropdownField: object = { text: 'nama_stockroom', value: 'id_stockroom' };
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
    public setupStockroomService: SetupStockroomService,
    public setupTipeStockroomService: SetupTipeStockroomService,
    
  ) {
    this.FormInputData = this.formBuilder.group({
      id_stockroom: ['', []],
      kode_stockroom: ['', [Validators.required]],
      nama_stockroom: ['', [Validators.required]],
      id_tipe_stockroom: ['', [Validators.required]],
      store_type: ['', []],
      gl_no: ['', []],
      gl_dept_name: ['', []],
      id_stockroom_parent: ['', []],
      is_show_persediaan: [true, []],
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
    this.setupTipeStockroomService.setDataSource();
    this.setupStockroomService.setDataSource();
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
        this.SetActive($event.data.is_active, $event.data.id_stockroom)
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
    this.kode_stockroom.setValue('');
    this.nama_stockroom.setValue('');
  }

  /** Method Untuk Mereload Data Grid */
  GetAllData(): void {
    this.setupStockroomService.onGetAll()
      .subscribe((result) => {
        this.GridDatasource = result.data;
      });
  }

  AddDataStockroom(): void {
    console.log('Add');
  }

  /** Method Untuk Mengisikan data yang ada di form */
  SetFrom(Data): void {
    delete Data.user_created;
    delete Data.time_created;
    delete Data.user_deactived;
    delete Data.time_deactived;
    this.FormInputData.reset();
    this.FormInputData.setValue(Data);
  }

  /** Method menyimpan | menubah data */
  SaveAndNew(): void {
    const Data = this.FormInputData.value;
    if (this.inputFieldState=='normal') {
      this.setupStockroomService.onPostSave(Data)
        .subscribe((result: SetupStockroomModel) => {
          this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
            .then(() => {
              this.ResetFrom();
            });
        });
    } else {
      this.setupStockroomService.onPutEdit(Data)
        .subscribe((result: SetupStockroomModel) => {
          this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
            .then(() => {

            });
        });
    }
  }

  /** Method untuk mengubah status aktif | Non Active 
   * @param is_active,kode_stockroom
  */
  SetActive(is_active: boolean, id_stockroom: number): void {
    let data = {
      id_stockroom: id_stockroom
    }
    console.log('data', data)
    console.log('is_active', is_active)
    if (is_active) {
      this.setupStockroomService.onPutToActive(data)
        .subscribe((result) => {
          this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Aktifkan', result.message)
            .then(() => {

            });
        })
    } else {
      this.setupStockroomService.onPutToDeActive(data)
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

  get kode_stockroom(): AbstractControl { return this.FormInputData.get('kode_stockroom'); }
  get nama_stockroom(): AbstractControl { return this.FormInputData.get('nama_stockroom'); }
  get id_tipe_stockroom(): AbstractControl { return this.FormInputData.get('id_tipe_stockroom'); }
  get store_type(): AbstractControl { return this.FormInputData.get('store_type'); }
  get gl_no(): AbstractControl { return this.FormInputData.get('gl_no'); }
  get gl_dept_name(): AbstractControl { return this.FormInputData.get('gl_dept_name'); }
  get id_stockroom_parent(): AbstractControl { return this.FormInputData.get('id_stockroom_parent'); }
  get is_show_persediaan(): AbstractControl { return this.FormInputData.get('is_show_persediaan'); }
  get is_active(): AbstractControl { return this.FormInputData.get('is_active'); }

}
