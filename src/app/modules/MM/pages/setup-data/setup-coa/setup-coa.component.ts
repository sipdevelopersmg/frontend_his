import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupCoaModel } from '../../../models/setup-data/setup-coa/SetupGroupCoaModel';
import { SetupCoaService } from '../../../services/setup-data/setup-coa/setup-coa.service';
import * as Config from './json/grid.config.json'
import * as LookupCoaParent from './json/LookupCoaParent.json'
import * as LookupGridGroupCoa from './json/LookupGridGroupCoa.json'
import {MM} from 'src/app/api/MM'
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
@Component({
  selector: 'app-setup-coa',
  templateUrl: './setup-coa.component.html',
  styleUrls: ['./setup-coa.component.css']
})
export class SetupCoaComponent implements OnInit {

  LookupCoaParent = LookupCoaParent;
  LookupGridGroupCoa = LookupGridGroupCoa;

  urlCoaParent = MM.SETUP_DATA.SETUP_COA.GET_ALL_BY_PARMS;
  urlGroupCoa = MM.SETUP_DATA.SETUP_GROUP_COA.GET_ALL_BY_PARMS;

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
  @ViewChild('LookupKodeCoaParent') LookupKodeCoaParent: OrgInputLookUpKodeComponent;
  @ViewChild('LookupGroupCoa') LookupGroupCoa: OrgInputLookUpKodeComponent;
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
    private setupCoaService: SetupCoaService
  ) {
    this.FormInputData = this.formBuilder.group({
      id_coa: [null, []],
      id_coa_parent: [null, []],
      id_grup_coa: [0, [Validators.required]],
      kode_coa: ['', [Validators.required]],
      deskripsi: ['', [Validators.required]],
      saldo: ['', [Validators.required]],
      is_active: [false, []],
      user_created: ['', [Validators.required]],
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
        this.SetActive($event.data.is_active, $event.data.kode_Coa)
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

  heandleSelectedCoaParent(args: any): void {
    this.id_coa_parent.setValue(args.id_coa);
  }

  heandleSelectedGroupCoa(args: any): void {
    this.id_grup_coa.setValue(args.id_grup_coa);
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
    this.LookupKodeCoaParent.resetValue();
    this.LookupGroupCoa.resetValue();
    this.id_coa_parent.setValue('');
    this.id_grup_coa.setValue('');
    this.kode_coa.setValue('');
    this.deskripsi.setValue('');
    this.saldo.setValue('');
    this.is_active.setValue('');
  }

  /** Method Untuk Mereload Data Grid */
  GetAllData(): void {
    this.setupCoaService.onGetAll()
      .subscribe((result) => {
        this.GridDatasource = result.data;
      });
  }

  AddDataCoa(): void {
    console.log('Add');
  }

  /** Method Untuk Mengisikan data yang ada di form */
  SetFrom(Data): void {
    delete Data.time_created;
    delete Data.user_deactived;
    delete Data.time_deactived;

    this.FormInputData.reset();
    this.FormInputData.setValue(Data);
    
    this.LookupGroupCoa.titleValue = '12345';
    this.LookupKodeCoaParent.kodeValue ="111";
    this.LookupKodeCoaParent.titleValue="2222";
  }

  /** Method menyimpan | menubah data */
  SaveAndNew(): void {
    const Data = this.FormInputData.value;
    if (this.inputFieldState=='normal') {
      this.setupCoaService.onPostSave(Data)
        .subscribe((result: SetupCoaModel) => {
          this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
            .then(() => {
              this.ResetFrom();
            });
        });
    } else {
      this.setupCoaService.onPutEdit(Data)
        .subscribe((result: SetupCoaModel) => {
          this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
            .then(() => {

            });
        });
    }
  }

  /** Method untuk mengubah status aktif | Non Active 
   * @param is_active,kode_Coa
  */
  SetActive(is_active: boolean, id_coa: number): void {
    let data = {
      id_coa: id_coa
    }
    console.log('data', data)
    console.log('is_active', is_active)
    if (is_active) {
      this.setupCoaService.onPutToActive(data)
        .subscribe((result) => {
          this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Aktifkan', result.message)
            .then(() => {

            });
        })
    } else {
      this.setupCoaService.onPutToDeActive(data)
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

  get id_coa(): AbstractControl { return this.FormInputData.get('id_coa'); }
  get id_coa_parent(): AbstractControl { return this.FormInputData.get('id_coa_parent'); }  
  get id_grup_coa(): AbstractControl { return this.FormInputData.get('id_grup_coa'); }    
  get kode_coa(): AbstractControl { return this.FormInputData.get('kode_coa'); }  
  get deskripsi(): AbstractControl { return this.FormInputData.get('deskripsi'); }  
  get saldo(): AbstractControl { return this.FormInputData.get('saldo'); }  
  get is_active(): AbstractControl { return this.FormInputData.get('is_active'); }  
  get user_created(): AbstractControl { return this.FormInputData.get('user_created'); }

}
