import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import  * as Config  from './json/grid.config.json';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupItemModel } from '../../../models/setup-data/setup-item/SetupItemModel';
import { SetupItemService } from '../../../services/setup-data/setup-item/setup-item.service';
import {MM} from 'src/app/api/MM'
import * as LookupGridGrupItem from './json/lookupGrupItem.json'
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';

@Component({
  selector: 'app-setup-item',
  templateUrl: './setup-item.component.html',
  styleUrls: ['./setup-item.component.css']
})
export class SetupItemComponent implements OnInit {
  urlGrupItem = MM.SETUP_DATA.SETUP_GROUP_ITEM.GET_ALL_BY_PARMS;
  LookupGridGrupItem = LookupGridGrupItem;
  @ViewChild('LookupKodeGrupItem') LookupKodeGrupItem: OrgInputLookUpKodeComponent;

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
    private setupItemService: SetupItemService
  ) {
    this.FormInputData = this.formBuilder.group({
      id_grup_item: [0, [Validators.required]],
      id_pabrik: [0, [Validators.required]],
      id_supplier: [0, [Validators.required]],
      kode_item: ['', [Validators.required]],
      barcode: ['', [Validators.required]],
      nama_item: ['', [Validators.required]],
      kode_satuan: ['', [Validators.required]],
      id_temperatur_item: [0, [Validators.required]],
      batas_maksimal_pesan: [0, []],
      batas_maksimal_pakai: [0, []],
      batas_maksimal_mutasi: [0, []],
      batas_maksimal_jual: [0, []],
      batas_stok_kritis: [0, []],
      prosentase_stok_kritis: [0, []],
      harga_beli_terakhir: [0, []],
      hpp_average: [0, []],
      prosentase_default_profit: [0, []],
      is_ppn: [true, [Validators.required]],
      user_created: [0, [Validators.required]]
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
        this.SetActive($event.data.is_active, $event.data.id_item)
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

  heandleSelectedGrupItem(args: any): void {
    this.id_grup_item.setValue(args.id_grup_item);
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
    this.LookupKodeGrupItem.resetValue();
  }

  /** Method Untuk Mereload Data Grid */
  GetAllData(): void {
    this.setupItemService.onGetAll()
      .subscribe((result) => {
        this.GridDatasource = result.data;
      });
  }

  AddDataItem(): void {
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
      this.setupItemService.onPostSave(Data)
        .subscribe((result: SetupItemModel) => {
          this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
            .then(() => {
              this.ResetFrom();
            });
        });
    } else {
      this.setupItemService.onPutEdit(Data)
        .subscribe((result: SetupItemModel) => {
          this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
            .then(() => {

            });
        });
    }
  }

  /** Method untuk mengubah status aktif | Non Active 
   * @param is_active,kode_item
  */
  SetActive(is_active: boolean, id_item: number): void {
    let data = {
      id_item: id_item,
      user_deactived: 0
    }
    console.log('data', data)
    console.log('is_active', is_active)
    if (is_active) {
      this.setupItemService.onPutToActive(data)
        .subscribe((result) => {
          this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Aktifkan', result.message)
            .then(() => {

            });
        })
    } else {
      this.setupItemService.onPutToDeActive(data)
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

  get id_grup_item() { return this.FormInputData.get('id_grup_item') }
  get id_pabrik() { return this.FormInputData.get('id_pabrik') }
  get id_supplier() { return this.FormInputData.get('id_supplier') }
  get kode_item() { return this.FormInputData.get('kode_item') }
  get barcode() { return this.FormInputData.get('barcode') }
  get nama_item() { return this.FormInputData.get('nama_item') }
  get kode_satuan() { return this.FormInputData.get('kode_satuan') }
  get id_temperatur_item() { return this.FormInputData.get('id_temperatur_item') }
  get batas_maksimal_pesan() { return this.FormInputData.get('batas_maksimal_pesan') }
  get batas_maksimal_pakai() { return this.FormInputData.get('batas_maksimal_pakai') }
  get batas_maksimal_mutasi() { return this.FormInputData.get('batas_maksimal_mutasi') }
  get batas_maksimal_jual() { return this.FormInputData.get('batas_maksimal_jual') }
  get batas_stok_kritis() { return this.FormInputData.get('batas_stok_kritis') }
  get prosentase_stok_kritis() { return this.FormInputData.get('prosentase_stok_kritis') }
  get harga_beli_terakhir() { return this.FormInputData.get('harga_beli_terakhir') }
  get hpp_average() { return this.FormInputData.get('hpp_average') }
  get prosentase_default_profit() { return this.FormInputData.get('prosentase_default_profit') }
  get is_ppn() { return this.FormInputData.get('is_ppn') }
  get user_created() { return this.FormInputData.get('user_created') }
}
