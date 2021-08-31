import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import * as Config  from './json/grid.config.json';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupSupplierModel } from '../../../models/setup-data/setup-supplier/SetupSupplier';
import { SetupSupplierService } from '../../../services/setup-data/setup-supplier/setup-supplier.service';
import {API_PIS} from 'src/app/api/PIS'
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { SetupProvinsiService } from 'src/app/modules/PIS/services/setup-data/setup-wilayah/setup-provinsi.service';
import { SetupKotaService } from 'src/app/modules/PIS/services/setup-data/setup-wilayah/setup-kota.service';
import { SetupKecamatanService } from 'src/app/modules/PIS/services/setup-data/setup-wilayah/setup-kecamatan.service';
import { SetupTipeSupplierService } from '../../../services/setup-data/setup-tipe-supplier/setup-tipe-supplier.service';

@Component({
  selector: 'app-setup-supplier',
  templateUrl: './setup-supplier.component.html',
  styleUrls: ['./setup-supplier.component.css']
})

export class SetupSupplierComponent implements OnInit {
  urlWilayah = API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_PROVINSI;
  @ViewChild('MaritalTipeSupplierDropdown') MaritalTipeSupplierDropdown: DropDownListComponent;
  MaritalTipeSupplierDropdownField: object = { text: 'tipe_supplier', value: 'id_tipe_supplier' };

   /**
   * @SetupWilayahDropdownField 
   * @Keterangan Dropdown Setup - Setup Wilayah Mapping Field
  */
    SetupWilayahDropdownField: object = { text: 'nama_wilayah', value: 'kode_wilayah' };

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
    private setupSupplierService: SetupSupplierService,
    public setupTipeSupplierService: SetupTipeSupplierService,
    public setupProvinsiService:SetupProvinsiService,
    public setupKotaService:SetupKotaService,
    public setupKecamatanService:SetupKecamatanService
  ) {
    this.FormInputData = this.formBuilder.group({
      id_supplier: [0,],
      id_tipe_supplier: [0,],
      kode_supplier: ['', [Validators.required]],
      nama_supplier: ['', [Validators.required]],
      alamat_supplier: ['', []],
      kode_wilayah: ['',],
      negara: ['', []],
      telepon: ['', []],
      fax: ['', []],
      kode_pos: ['', []],
      email: ['', []],
      contact_person: ['', []],
      npwp: ['', []],
      default_hari_tempo_bayar: [0, []],
      default_hari_pengiriman: [0, []],
      default_prosentase_diskon: [0, []],
      default_prosentase_tax: [0, []],
      is_tax: [false, []],
      is_active: [false, []],
    });
    this.setupTipeSupplierService.setDataSource();
    this.setupProvinsiService.setDataSource();
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
        this.SetActive($event.data.is_active, $event.data.id_supplier)
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

  heandleSelectedWilayah(args: any): void {
    this.kode_wilayah.setValue(args.kode_wilayah);
  }

  handleDropdownProvinsiChange(args: any): void {
    this.setupKotaService.setDataSource(args.itemData.kode_wilayah);
  }

  handleDropdownKotaChange(args: any): void {
    this.setupKecamatanService.setDataSource(args.itemData.kode_wilayah);
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
  }

  /** Method Untuk Mereload Data Grid */
  GetAllData(): void {
    this.setupSupplierService.onGetAll()
      .subscribe((result) => {
        this.GridDatasource = result.data;
      });
  }

  AddDataSupplier(): void {
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
      this.setupSupplierService.onPostSave(Data)
        .subscribe((result: SetupSupplierModel) => {
          this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
            .then(() => {
              this.ResetFrom();
            });
        });
    } else {
      this.setupSupplierService.onPutEdit(Data)
        .subscribe((result: SetupSupplierModel) => {
          this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
            .then(() => {

            });
        });
    }
  }

  /** Method untuk mengubah status aktif | Non Active 
   * @param is_active,kode_supplier
  */
  SetActive(is_active: boolean, id_supplier: number): void {
    let data = {
      id_supplier: id_supplier,
      user_deactived:1,
    }
    console.log('data', data)
    console.log('is_active', is_active)
    if (is_active) {
      this.setupSupplierService.onPutToActive(data)
        .subscribe((result) => {
          this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Aktifkan', result.message)
            .then(() => {

            });
        })
    } else {
      this.setupSupplierService.onPutToDeActive(data)
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

  get id_supplier(): AbstractControl { return this.FormInputData.get('id_supplier'); }
  get kode_supplier(): AbstractControl { return this.FormInputData.get('kode_supplier'); }
  get nama_supplier(): AbstractControl { return this.FormInputData.get('nama_supplier'); }
  get id_tipe_supplier(): AbstractControl { return this.FormInputData.get('id_tipe_supplier'); }
  get alamat_supplier(): AbstractControl { return this.FormInputData.get('alamat_supplier'); }
  get kode_wilayah(): AbstractControl { return this.FormInputData.get('kode_wilayah'); }
  get negara(): AbstractControl { return this.FormInputData.get('negara'); }
  get telepon(): AbstractControl { return this.FormInputData.get('telepon'); }
  get fax(): AbstractControl { return this.FormInputData.get('fax'); }
  get kode_pos(): AbstractControl { return this.FormInputData.get('kode_pos'); }
  get email(): AbstractControl { return this.FormInputData.get('email'); }
  get contact_person(): AbstractControl { return this.FormInputData.get('contact_person'); }
  get npwp(): AbstractControl { return this.FormInputData.get('npwp'); }
  get default_hari_tempo_bayar(): AbstractControl { return this.FormInputData.get('default_hari_tempo_bayar'); }
  get default_hari_pengiriman(): AbstractControl { return this.FormInputData.get('default_hari_pengiriman'); }
  get default_prosentase_diskon(): AbstractControl { return this.FormInputData.get('default_prosentase_diskon'); }
  get default_prosentase_tax(): AbstractControl { return this.FormInputData.get('default_prosentase_tax'); }
  get is_tax(): AbstractControl { return this.FormInputData.get('is_tax'); }
  get is_active(): AbstractControl { return this.FormInputData.get('is_tax'); }




}
