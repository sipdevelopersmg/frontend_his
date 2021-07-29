import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { Columns } from 'src/app/modules/shared/components/molecules/grid/grid/grid.model';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ISetupBahasaModel } from '../../../models/setup-data/setupBahasa.model';
import { SetupBahasaService } from '../../../services/setup-data/setup-bahasa/setup-bahasa.service';

import * as Config from './json/setup-bahasa.config.json';


@Component({
  selector: 'app-setup-bahasa',
  templateUrl: './setup-bahasa.component.html',
  styleUrls: ['./setup-bahasa.component.css']
})
export class SetupBahasaComponent implements OnInit {

  // ** Variable untuk menyimpan Button Navigasi Halaman
  ButtonNav: ButtonNavModel[];

  // ** Variable untuk mengatur Form Input Data Bahasa
  FormInputDataBahasa: FormGroup;

  // tslint:disable-next-line: no-inferrable-types
  TabId: string = 'DataBahasa';
  @ViewChild('OrgTabsRef', { static: true }) OrgTabsRef: OrgTabsComponentComponent;

  GridBahasaDatasource: any[];
  GridBahasaColumns: Columns[];
  GridDataBahasaPagingSettings = { pageSizes: true, pageSize: 10 };
  private GridDataBahasa: MolGridComponent = null;
  GridDataBahasaEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
  GridDataBahasaToolbar: any[];

  public GridBahasaConfig = Config;

  modalRef: BsModalRef;
  @ViewChild('modalDialogAddDataBahasa') modalDialogAddDataBahasa: TemplateRef<any>;

  RadioButtonStatus: object[] = [
      { id: 'active', value: true, label: 'Active', checked: false, inputFieldState: 'normal' },
      { id: 'nonActive', value: false, label: 'Non Active', checked: false, inputFieldState: 'normal' },
  ];

  inputFieldState = 'normal';

  SelectedDataBahasa : any;

  constructor(
      private formBuilder: FormBuilder,
      private modalService: BsModalService,
      private utilityService: UtilityService,
      private setupBahasaService: SetupBahasaService
  ) {
      this.FormInputDataBahasa = this.formBuilder.group({
          id_bahasa: [0, []],
          kode_bahasa: [null, [Validators.required]],
          nama_bahasa: [null, [Validators.required]],
      });
  }

  ngOnInit(): void {
      this.ButtonNav = [
          { Id: 'SaveAndNew', Captions: 'Save & New', StackIcon: true, Icons1: 'fa-save', Icons2: 'fa-plus-circle' },
          { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt' },
          { Id: 'Cancel', Captions: 'Cancel', Icons1: 'fa-window-close' },
      ];

      this.GridDataBahasaToolbar = [
          { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
          { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
          { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
          'Search'
      ];

      // this.onGetAllSetupBahasa();
  }

  onSetFormSetupBahasaAttributes(): void {
      this.id_bahasa.setValue(0);
      this.kode_bahasa.setValue(null);
      this.nama_bahasa.setValue(null);
  }

  onGetAllSetupBahasa(): void {
      this.setupBahasaService.onGetAllBahasa()
          .subscribe((result) => {
              this.GridBahasaDatasource = result.data;
          });
  }

  onGetSelectedTabId(TabId: string): void {
      this.TabId = TabId;
  }

  onInitalizedGrid(component: MolGridComponent) {
      this.GridDataBahasa = component;
  }

  onSelectedRow(args: any): void {
      this.SelectedDataBahasa = args.data;
  }

  onToolbarClick(args: any): void {
      const item = args.item.id;

      switch (item) {
          case 'add':
              this.OrgTabsRef.onNavigateTabUsingTabId(1, 'InputBahasa');
              this.inputFieldState = 'normal';
              this.FormInputDataBahasa.reset();
              break;
          case 'edit':
              this.OrgTabsRef.onNavigateTabUsingTabId(1, 'InputBahasa');
              this.inputFieldState = 'edit';
              this.onEditDataBahasa(this.SelectedDataBahasa);
              break;
          case 'detail':
              this.OrgTabsRef.onNavigateTabUsingTabId(1, 'InputBahasa');
              this.inputFieldState = 'detail';
              this.onSeeDetailDataBahasa(this.SelectedDataBahasa);
              break;
          default:
              break;
      }
  }

  onAddDataBahasa(): void {
      console.log('Add');

      // this.modalRef = this.modalService.show(
      //     this.modalDialogAddDataBahasa,
      //     Object.assign({}, { class: 'modal-lg' })
      // );

  }

  onEditDataBahasa(DataBahasa: ISetupBahasaModel): void {
      this.FormInputDataBahasa.reset();
      this.FormInputDataBahasa.setValue(DataBahasa);

      this.RadioButtonStatus = [
          { id: 'active', value: true, label: 'Active', checked: false, inputFieldState: 'normal' },
          { id: 'nonActive', value: false, label: 'Non Active', checked: false, inputFieldState: 'normal' },
      ];

      this.FormInputDataBahasa.setValue(DataBahasa);
  }

  onSeeDetailDataBahasa(DataBahasa: ISetupBahasaModel): void {
      this.FormInputDataBahasa.reset();

      this.RadioButtonStatus = [
          { id: 'active', value: true, label: 'Active', checked: false, inputFieldState: 'normal' },
          { id: 'nonActive', value: false, label: 'Non Active', checked: false, inputFieldState: 'normal' },
      ];

      this.FormInputDataBahasa.setValue(DataBahasa);
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
      const Data = this.FormInputDataBahasa.value;

      Data.is_active = JSON.parse(Data.is_active);

      this.setupBahasaService.onPostSaveSetupBahasa(Data)
          .subscribe((result) => {
              this.utilityService.onShowingCustomAlert('success', 'Success', result.message)
                  .then(() => {
                      this.FormInputDataBahasa.reset();

                      this.onSetFormSetupBahasaAttributes();
                  });
          });
  }

  onClear(): void {
      this.FormInputDataBahasa.reset();

      this.onSetFormSetupBahasaAttributes();
  }

  onCancel(): void {
      this.FormInputDataBahasa.reset();

      this.onSetFormSetupBahasaAttributes();

      this.OrgTabsRef.onNavigateTabUsingTabId(0, 'DataBahasa');
  }

  onGetBahasaById(): void {
      this.setupBahasaService.onGetBahasaById(2)
          .subscribe((result) => {
              console.log(result);
          }, (error) => {
              console.warn(error);
          }, () => {

          });
  }

  onTestError(): void {
      this.setupBahasaService.onTestError()
          .subscribe((result) => {
              console.log(result);
          });
  }

  onLoadGridBahasa(args: any): void {
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
          // let currentElement = this.GridDataBahasa.Grid.page

          console.log(this.GridDataBahasa.Grid.columns.length);
      }
  }

  get id_bahasa(): AbstractControl { return this.FormInputDataBahasa.get('id_bahasa'); }
  get kode_bahasa(): AbstractControl { return this.FormInputDataBahasa.get('kode_bahasa'); }
  get nama_bahasa(): AbstractControl { return this.FormInputDataBahasa.get('nama_bahasa'); }
}
