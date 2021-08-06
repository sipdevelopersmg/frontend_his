import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommandModel, EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { Columns } from 'src/app/modules/shared/components/molecules/grid/grid/grid.model';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupSatuanModel } from '../../../models/setup-data/setup-satuan/SetupSatuanModel';
import { SetupSatuanService } from '../../../services/setup-data/setup-satuan/setup-satuan.service';
import * as Config from './json/grid.config.json'
@Component({
  selector: 'app-setup-satuan',
  templateUrl: './setup-satuan.component.html',
  styleUrls: ['./setup-satuan.component.css']
})
export class SetupSatuanComponent implements OnInit {

  /**
   * Variable untuk Menympan Navigasi halaman
   * @ButtonNavModel StatusFormNew
  */
  ButtonNav: ButtonNavModel[];

  /**
   * Variable untuk mengatur Form Input Data Satuan
   * @Boolean StatusFormNew
  */
  FormInputDataSatuan: FormGroup;

  /**
   * Variable untuk menentukan apakah form dalam posisi input data atau edit data
   * @Boolean StatusFormNew
  */
  StatusFormNew : Boolean;

    /**
   * Variable untuk menyimpan Configurasi Grid
   * @Boolean StatusFormNew
  */
  GridSatuanConfig = Config;
  
  TabId: string = 'DataSatuan';
  @ViewChild('OrgTabsRef', { static: true }) OrgTabsRef: OrgTabsComponentComponent;
  
  GridSatuanDatasource: any[];
  GridSatuanColumns: Columns[];
  GridDataSatuanPagingSettings = { pageSizes: true, pageSize: 10 };
  private GridDataSatuan: MolGridComponent = null;
  GridDataSatuanEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
  GridDataSatuanToolbar: any[];
  GridDataSatuanCommands: CommandModel[] = [
    {
      buttonOption: {
        content: "<i class='fas fa-search'></i>",
        cssClass: "btn btn-warning"
      }
    }
  ];
  
  modalRef: BsModalRef;
  @ViewChild('modalDialogAddDataSatuan') modalDialogAddDataSatuan: TemplateRef<any>;
  
  RadioButtonStatus: object[] = [
    { id: 'active', value: true, label: 'Active', checked: false, inputFieldState: 'normal' },
    { id: 'nonActive', value: false, label: 'Non Active', checked: false, inputFieldState: 'normal' },
  ];
  
  inputFieldState = 'normal';
  
  SelectedDataSatuan:Object;
  
  constructor(
    private formBuilder: FormBuilder,
    private utilityService: UtilityService,
    private setupSatuanService: SetupSatuanService
  ) {
    this.FormInputDataSatuan = this.formBuilder.group({
      kode_satuan: ['', []],
      nama_satuan: ['', []],
    }); 
  }
  
  ngOnInit(): void {
    this.ButtonNav = [
      { Id: 'SaveAndNew', Captions: 'Save & New', StackIcon: true, Icons1: 'fa-save', Icons2: 'fa-plus-circle' },
      { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt' },
      { Id: 'Cancel', Captions: 'Cancel', Icons1: 'fa-window-close' },
    ];
    
    this.GridDataSatuanToolbar = [
      { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
      { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
      { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
      'Search'
    ];

    this.onGetAllSetupSatuan();

  }
  
  onSetFormSetupSatuanAttributes(): void {
    this.kode_satuan.setValue('');
    this.nama_satuan.setValue('');
  }
  
  onGetAllSetupSatuan(): void {
    this.setupSatuanService.onGetAll()
      .subscribe((result) => {
      this.GridSatuanDatasource = result.data;
      });
  }
  
  onGetSelectedTabId(TabId: string): void {
    this.TabId = TabId;
  }
  
  onInitalizedGrid(component: MolGridComponent) {
    this.GridDataSatuan = component;
  }
  
  onSelectedRow(args: any): void {
    this.SelectedDataSatuan = args.data;
  }
  
  onToolbarClick(args: any): void {
    const item = args.item.id;
    
    switch (item) {
      case 'add':
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'InputSatuan');
        this.inputFieldState = 'normal';
        this.FormInputDataSatuan.reset();
        this.StatusFormNew
        break;
      case 'edit':
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'InputSatuan');
        this.inputFieldState = 'edit';
        this.onEditDataSatuan(this.SelectedDataSatuan);
        break;
      case 'detail':
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'InputSatuan');
        this.inputFieldState = 'detail';
        this.onSeeDetailDataSatuan(this.SelectedDataSatuan);
        break;
      default:
        break;
    }
  }
  
  onClickCommandGridSatuan(args: any): void {
    console.log(args);
  }
  
  onAddDataSatuan(): void {
    console.log('Add');
  }
  
  onEditDataSatuan(DataSatuan): void {
      this.FormInputDataSatuan.reset();
      this.FormInputDataSatuan.setValue(DataSatuan);
  }
  
  onSeeDetailDataSatuan(DataSatuan): void {
    this.FormInputDataSatuan.reset();
  
    this.RadioButtonStatus = [
      { id: 'active', value: true, label: 'Active', checked: false, inputFieldState: 'normal' },
      { id: 'nonActive', value: false, label: 'Non Active', checked: false, inputFieldState: 'normal' },
    ];
  
    this.FormInputDataSatuan.setValue(DataSatuan);
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
    const Data = this.FormInputDataSatuan.value;
    this.setupSatuanService.onPostSave(Data)
      .subscribe((result: SetupSatuanModel) => {
        this.utilityService.onShowingCustomAlert('success', 'Success', result.message)
          .then(() => {
            this.FormInputDataSatuan.reset();
            
            this.onSetFormSetupSatuanAttributes();
          });
      });
  }
  
  onClear(): void {
    this.FormInputDataSatuan.reset();
    this.onSetFormSetupSatuanAttributes();
  }
  
  onCancel(): void {
    this.FormInputDataSatuan.reset();
    this.onSetFormSetupSatuanAttributes();
    this.OrgTabsRef.onNavigateTabUsingTabId(0, 'DataSatuan');
  }
  
  onLoadGridSatuan(args: any): void {
    document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.onKeyDownHandler.bind(this));
  }
  
  onKeyDownHandler(event: KeyboardEvent) {
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
  
  get kode_satuan(): AbstractControl { return this.FormInputDataSatuan.get('kode_satuan'); }
  get nama_satuan(): AbstractControl { return this.FormInputDataSatuan.get('nama_satuan'); }

}
