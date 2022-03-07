import { Component, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { DropDownList, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { IEditCell, EditSettingsModel, GridModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { NumericTextBox } from '@syncfusion/ej2-angular-inputs';
import { BehaviorSubject } from 'rxjs';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { DaftarPasienService } from 'src/app/modules/dashboard-dokter/services/daftar-pasien/daftar-pasien.service';
import { SetupLabelPemakaianObatService } from 'src/app/modules/Pharmacy/services/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.service';
import { SetupMetodeRacikanService } from 'src/app/modules/Pharmacy/services/setup-data/setup-metode-racikan/setup-metode-racikan.service';
import { SetupOutletService } from 'src/app/modules/Pharmacy/services/setup-data/setup-outlet/setup-outlet.service';
import { SetupSatuanAturanPakaiService } from 'src/app/modules/Pharmacy/services/setup-data/setup-satuan-aturan-pakai/setup-satuan-aturan-pakai.service';
import { SetupTambahanAturanPakaiService } from 'src/app/modules/Pharmacy/services/setup-data/setup-tambahan-aturan-pakai/setup-tambahan-aturan-pakai.service';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgLookUpHirarkiComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up-hirarki/org-look-up-hirarki.component';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data'

import Swal from 'sweetalert2';
import * as GridLookUpItem from './json/lookupitem.json'
import * as GridlookUpTemplateResep from './json/lookuptemplateresep.json'
import { ResepFormulariumIrjaService } from 'src/app/modules/Pharmacy/services/resep-formularium/resep-formularium-irja.service';
import { TrResepFormulariumDokterIrjaDetailInsert, TrResepFormulariumDokterIrjaDetailRacikanInsert } from 'src/app/modules/Pharmacy/models/resep-formularium/resep-formularium';
import { TrResepDokterIrjaDetailRacikanInsert } from 'src/app/modules/dashboard-dokter/models/resep.model';
import 'src/app/prototype/ArrPrototype';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import {Location} from "@angular/common"
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import moment from 'moment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-input-resep-formularium-irja',
  templateUrl: './input-resep-formularium-irja.component.html',
  styleUrls: ['./input-resep-formularium-irja.component.css']
})
export class InputResepFormulariumIrjaComponent implements OnInit {

  @ViewChild('LookupRacikan') LookupRacikan: OrgLookUpHirarkiComponent;
  @ViewChild('LookupTemplateResep') LookupTemplateResep: OrgLookUpHirarkiComponent;

  public itemsParams: IEditCell;
  public itemsElem: HTMLElement;
  public itemsObj: DropDownList;

  public urlRacikan = PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_RACIKAN; // + '/' + 2 + '/J';
  public urlTemplateResep = PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_TEMPLATE_RESEP;// + '/' + 2;
  public GridLookUpItem = GridLookUpItem;

  public GridlookUpTemplateResep = GridlookUpTemplateResep;

  DropdownLabelFields: object = { text: "nama_label_pemakaian_obat", value: "id_label_pemakaian_obat" };
  DropdownAturanFields: object = { text: "tambahan_aturan_pakai", value: "id_tambahan_aturan_pakai" };
  DropdownsatuanPakaiFields: object = { text: "satuan_aturan_pakai", value: "id_satuan_aturan_pakai" };
  SetupOutletDropdownField: object = { text: 'nama_outlet', value: 'id_outlet' };

  // ** Form Add Obat Properties
  FormAddObat: FormGroup;
  FormAddObatState: string = "input";

  // ** Satuan 
  SatuanObat: string = "-";

  DropdownObatFields: object = { text: 'nama_obat', value: 'id_item' };
  DropdownMetodeRacikanFields: object = { text: 'metode_racikan', value: 'id_metode_racikan' };

  NamaObatDatasource: any[] = [];

  // ** Waktu Pakai
  WaktuPakai: any[] = [];

  // ** Grid Daftar Obat Properties
  GridDaftarObatEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
  GridDaftarObatToolbar: any[];
  GridDaftarObatDataSource: any[] = [];
  // GridDaftarObatColumns = GridConfig;
  GridDaftarObatHeight: string;
  private gridDaftarObat: MolGridComponent;

  // ** Selected Data Obat
  SelectedDataObat: TrResepFormulariumDokterIrjaDetailInsert;
  SelectedDataRacikanObat: TrResepFormulariumDokterIrjaDetailRacikanInsert;
  public get width(): any { return window.innerWidth; };

  GridDetailResepRacikanDatasource = [];
  GridResepRacikanDatasource = [];
  ChildGrid: GridModel;

  @ViewChild('GridResepRacikan') GridResepRacikan: GridComponent;
  @ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;

  globalListenFunc: Function;
  dataSourceLabelPemakaian = [];
  dataSourceTambahanAturanPakai = [];
  dataSourceSatuanAturanPakai = [];
  counter: number = 0;
  counterRacikan: number = 0;

  dataSourceGrid = new BehaviorSubject([]);
  dataScourceGridChild: any[] = [];

  KandunganParams: IEditCell;
  KandunganElem: HTMLElement;
  KandunganObj: NumericTextBox;
  currentQtyResep: number;
  currentIdItem: number;
  currentIndex: number;
  whereField = "psg.nama_generik";
  select = "'nama_generik', 'id_formularium','sediaan_obat'";

  // SERVER SIDE 
  public IsUserLogin: IAuthenticationResponseModel = JSON.parse(localStorage.getItem('UserData'));
  public data: DataManager = new DataManager({
      headers: [
          {
              Authorization: "Bearer " + this.IsUserLogin.token
          }
      ],
      url: PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRJA.GET_FORMULARIUM_PARAMS_DROPDOWNLIST,
      adaptor: new ODataV4Adaptor,
      crossDomain: true,
  });

  public fields: Object = { text: 'nama_generik', value: 'id_formularium' };
  public query: Query = new Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', '', true);
  public text: string = "Select a Formularium";
  public sorting: string = 'Ascending';
  public onFiltering = (e: FilteringEventArgs) => {
      // load overall data when search key empty.
      if (e.text === '') {
          e.updateData(this.data);
      } else {
         let query: Query = new Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
          e.updateData(this.data, query);
      }
  };
  //=====================
  public dataChild: DataManager = new DataManager({
      headers: [
          {
              Authorization: "Bearer " + this.IsUserLogin.token
          }
      ],
      url: PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRJA.GET_FORMULARIUM_PARAMS_DROPDOWNLIST,
      adaptor: new ODataV4Adaptor,
      crossDomain: true,
  });
  public queryChild: Query = new Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', '', true);

  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
    { Id: 'Save', Captions: 'Save', Icons1: 'fa-save' },
  ];
  idOutlet = null;
  data_header = null;
  currentTanggal = null;
  newdetail: any = [];
  baru: any = 0;
  isGetFromTemplate: boolean;

  modalRef: BsModalRef;
  @ViewChild('modalTemplateResep') modalTemplateResep: TemplateRef<any>;

  constructor(
      private formBuilder: FormBuilder,
      public resepFormulariumIrjaService: ResepFormulariumIrjaService,
      public setupLabelPemakaianObatService: SetupLabelPemakaianObatService,
      public setupTambahanAturanPakaiService: SetupTambahanAturanPakaiService,
      public setupSatuanAturanPakaiService: SetupSatuanAturanPakaiService,
      public setupMetodeRacikanService: SetupMetodeRacikanService,
      public setupOutletService: SetupOutletService,
      private renderer: Renderer2,
      public daftarPasienService: DaftarPasienService,
      public location:Location,
      public utilityService:UtilityService,
      private modalService: BsModalService,

  ) {

  }

  ngOnInit(): void {
        this.currentTanggal = moment().format()

      this.FormAddObat = this.formBuilder.group({
          counter: [0, []],
          is_racikan: [false, []],
          no_urut: [0, []],
          set_racikan_id: [null, []],
          id_metode_racikan: [null, []],
          metode_racikan: ['', []],//kemasan Racikan
          id_formularium: [null, []],
          nama_racikan: ['', []],
          nama_obat: ['', []],
          qty_resep: [1, []],
          nama_satuan: ['-', []],

          label: ['', []],
          ket_label: ['', []],
          id_label_pemakaian_obat: [null, []],
          label_pemakaian_obat: ['', []],

          id_satuan_aturan_pakai: [null, []],
          satuan_aturan_pakai: [null, []],

          aturan: ['', []],
          ket_aturan: ['', []],
          id_tambahan_aturan_pakai: [null, []],
          label_tambahan_aturan_pakai_obat: ['', []]
      });

      this.GridDaftarObatToolbar = [
          { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
          { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
          'Search'
      ];

      let currentQtyResep = this.currentQtyResep;
      let currentIdItem = this.currentIdItem;
      let SelectedDataRacikanObat = this.SelectedDataRacikanObat;
      this.resepFormulariumIrjaService.dataSelectRacikan.next(SelectedDataRacikanObat);
      this.itemsParams = {
          create: () => {

              if (SelectedDataRacikanObat) {
                  this.queryChild = new Query().from('Formularium')
                      .select([this.select])
                      .take(10).where(this.whereField, 'contains', SelectedDataRacikanObat.nama_obat, true)
              }else{
                  this.queryChild = new Query().from('Formularium')
                      .select([this.select])
                      .take(10).where(this.whereField, 'contains', '', true)
              }

              this.itemsElem = document.createElement('input');
              return this.itemsElem;
          },
          read: () => {
              return this.itemsObj.text;
          },
          destroy: () => {
              this.itemsObj.destroy();
          },
          write: () => {
              this.itemsObj = new DropDownList({
                  dataSource: this.dataChild,
                  fields: this.fields,
                  query: this.queryChild,
                  enabled: true,
                  placeholder: 'Select a obat',
                  // floatLabelType: 'Never',
                  allowFiltering: true,
                  popupWidth: '55rem',
                  filtering: function (e) {
                      if (e.text === '') {
                          e.updateData(this.data);
                      } else {
                          let query: Query = new Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                          e.updateData(this.data, query);
                      }
                  }.bind(this),
                  change: function (args) {
                      currentIdItem = args.itemData.id_formularium;
                      (<HTMLInputElement>document.getElementsByName("nama_satuan")[0]).value = args.itemData.sediaan_obat;
                      console.log('currentItem',currentIdItem);
                  }.bind(this),
              });

              this.itemsObj.appendTo(this.itemsElem);

              if (SelectedDataRacikanObat) {
                  setTimeout(() => {
                      console.log('',SelectedDataRacikanObat);
                      currentIdItem = SelectedDataRacikanObat.id_formularium;
                      this.itemsObj.value = currentIdItem;
                  }, 10)
              }
          }
      }

      let counterRacikan = this.counterRacikan;
      let dataSourceChild = this.dataScourceGridChild;
      let dataSourceGrid = this.dataSourceGrid;
      this.resepFormulariumIrjaService.dataSourceChildGrid.next(dataSourceChild);
      this.resepFormulariumIrjaService.dataSourceParentGrid.next(dataSourceGrid.value);
      let nav = 'add';
      this.ChildGrid = {
          dataSource: this.dataScourceGridChild,
          queryString: "counter",
          rowHeight: 30,
          allowResizing: true,
          allowTextWrap: true,
          textWrapSettings: { wrapMode: 'Both' },
          toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
          editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
          sortSettings:{columns:[{field:'counterRacikan',direction:'Descending'}]},
          columns: [
              { field: "counter", headerText: 'counter', width: 100, visible: false },
              { field: "counterRacikan", headerText:'counterRacikan', width:100, visible:false},
              { field: "no_urut", headerText: 'ID Obat', visible: false },
              { field: "nama_obat", headerText: 'Nama Obat', editType: 'dropdownedit', edit: this.itemsParams, width: 200 },
              { field: "nama_satuan", headerText: 'Sediaan', textAlign: 'Right', width: 80, allowEditing: false },
              { field: "id_formularium", headerText: 'id', width: 100, visible: false },
              { field: "qty_resep", headerText: 'qty', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', visible: false },
              { field: "qty_racikan", headerText: 'QTY', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
              { field: "keterangan", headerText: 'Keterangan', headerTextAlign: 'Center', textAlign: 'Left', width: 100 },
          ],
          rowSelected(args) {
              SelectedDataRacikanObat = args.data
              console.log('SelectedDataRacikanObat',SelectedDataRacikanObat)
          },
          actionBegin(args: any) {
              console.log('begin', args)
              if (args.requestType === 'add') {
                  const counter = 'counter';
                  (args.data as object)[counter] = this.parentDetails.parentKeyFieldValue;
                  (args.data as object)['qty_resep'] = this.parentDetails.parentRowData.qty_resep;
                  // (args.data as object)['counterRacikan'] = counterRacikan++;
                  currentQtyResep = this.parentDetails.parentRowData.qty_resep;
                  SelectedDataRacikanObat = null;
              }
          },
          actionComplete(args) {
              console.log(args);
              if (args.requestType == 'save') {
                  if (args.action == 'add') {
                      args.data.id_formularium = currentIdItem;
                      args.data.counterRacikan = counterRacikan++;
                      args.data.qty_racikan = parseFloat(args.data.qty_racikan);
                      console.log(dataSourceChild);
                      dataSourceChild.push(args.data);
                  }
                  if (args.action == 'edit') {
                      args.data.id_formularium = currentIdItem;
                      args.data.qty_racikan = parseFloat(args.data.qty_racikan);
                      let index = dataSourceChild.map((item) => { return item.counterRacikan }).indexOf(args.data.counterRacikan);
                      dataSourceChild[index] = args.data;
                  }

                  let data:any[] = []
                  dataSourceChild.orderBy('-counterRacikan')
                  console.log('dataSourceChild',dataSourceChild)
                  dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                      data.push(itemPrent)
                  })
                  setTimeout(() => {
                      dataSourceGrid.next(data);
                      console.log(data);
                  }, 500)

              }
              if (args.requestType == "delete") {
                  let index = dataSourceChild.map((item) => { return item.counterRacikan }).indexOf(args.data[0].counterRacikan);
                  dataSourceChild.splice(index, 1);

                  let data = []
                  dataSourceChild.orderBy('-counterRacikan')
                  dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                      data.push(itemPrent)
                  })
                  setTimeout(() => {
                      dataSourceGrid.next(data);
                      console.log(data);
                  }, 500)
              }
          }
      }

      this.setupLabelPemakaianObatService.onGetAll().subscribe((result) => {
          this.dataSourceLabelPemakaian = result.data;
      });

      this.setupTambahanAturanPakaiService.onGetAll().subscribe((result) => {
          this.dataSourceTambahanAturanPakai = result.data;
      });

      this.setupSatuanAturanPakaiService.onGetAll().subscribe((result) => {
          this.dataSourceSatuanAturanPakai = result.data;
      })

      this.setupMetodeRacikanService.setDataSource();
      this.setupOutletService.setDataSource();
      this.urlTemplateResep = this.urlTemplateResep+'/'+this.daftarPasienService.ActivePasien.value.id_dokter;
      this.urlRacikan = this.urlRacikan + '/' + this.daftarPasienService.ActivePasien.value.id_dokter + '/J';
  }

  onLoad(args: any) {

  }

  handleChangeOutlet(args){
      this.idOutlet = args.value
  }

  setInputFilter(textbox: Element, inputFilter: (value: string) => boolean): void {
      ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
          textbox.addEventListener(event, function (this: (HTMLInputElement | HTMLTextAreaElement) & { oldValue: string; oldSelectionStart: number | null, oldSelectionEnd: number | null }) {
              if (inputFilter(this.value)) {
                  this.oldValue = this.value;
                  this.oldSelectionStart = this.selectionStart;
                  this.oldSelectionEnd = this.selectionEnd;
              } else if (Object.prototype.hasOwnProperty.call(this, 'oldValue')) {
                  this.value = this.oldValue;
                  if (this.oldSelectionStart !== null &&
                      this.oldSelectionEnd !== null) {
                      this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                  }
              } else {
                  this.value = "";
              }
          });
      });
  }

  rowDataBound(args: any) {
      var is_racikan = args.data.is_racikan;
      if (!is_racikan) {
          //here hide which parent row has no child records
          args.row.querySelector('td').innerHTML = " ";
          args.row.querySelector('td').className = "e-customizedExpandcell";
      } else {
          // args.row.classList.add('is-racikan');
      }
  }

  onDataBound() {
      this.GridResepRacikan.detailRowModule.expandAll();
  }

  // ** Dropdown Nama Obat onchange method
  handleChangeObat(args: any): void {
      this.nama_satuan.setValue(args.itemData.sediaan_obat);
      this.nama_obat.setValue(args.itemData.nama_generik);
  }

  handleChangeLabel(args: any): void {
      if (typeof args.value === 'number' && (args.value % 1) === 0) {
          this.label_pemakaian_obat.setValue('');
          this.id_label_pemakaian_obat.setValue(args.value);
          this.ket_label.setValue(args.itemData.nama_label_pemakaian_obat);
      } else {
          this.label_pemakaian_obat.setValue(args.value);
          this.id_label_pemakaian_obat.setValue(1);
          this.ket_label.setValue(args.itemData.nama_label_pemakaian_obat);
      }
  }

  handleChangeAturan(args: any): void {
      if (typeof args.value === 'number' && (args.value % 1) === 0) {
          this.label_tambahan_aturan_pakai_obat.setValue('');
          this.id_tambahan_aturan_pakai.setValue(args.value);
          this.ket_aturan.setValue(args.itemData.tambahan_aturan_pakai);
      } else {
          this.label_tambahan_aturan_pakai_obat.setValue(args.value);
          this.id_tambahan_aturan_pakai.setValue(1);
          this.ket_aturan.setValue(args.itemData.tambahan_aturan_pakai);
      }
  }

  handleChangeSatuanAturan(args: any): void {
      this.satuan_aturan_pakai.setValue(args.itemData.satuan_aturan_pakai);
  }

  handleChangeNamaRacikan(): void {
      this.set_racikan_id.setValue(null);
  }

  handelClickRacikan(): void {
      this.LookupRacikan.onOpenModal();
  }

  handelClickTemplateResep(): void {
      this.LookupTemplateResep.onOpenModal();
  }

  handleChangeMetodeRacikan(args: any): void {
      this.metode_racikan.setValue(args.itemData.metode_racikan);
  }

  heandleSelectedRacikan(args: any): void {
      this.counter++;
      args.counter = this.counter;
      args.is_racikan = true;
      args.no_urut = 0;
      args.id_item = null;
      args.nama_satuan = null;
      args.label = null
      args.nama_racikan = args.nama_obat;
      args.label = args.ket_label;
      args.aturan = args.ket_aturan;

      let dataObat = this.dataSourceGrid.value
      dataObat.push(args);
      this.dataSourceGrid.next(dataObat);
      this.resepFormulariumIrjaService.dataSourceParentGrid.next(dataObat);
      
      let detail;
      detail = this.GridResepRacikan.childGrid.dataSource;
      args.details.forEach(element => {
          let counterRacikan      = this.counterRacikan++;
          element.counter         = this.counter;
          element.counterRacikan  = counterRacikan;
          element.komposisi       = element.kandungan_obat;
          element.kandungan       = 1;
          element.seper           = 1;
          element.qty_resep       = args.qty_resep;
          detail.push(element);
      });
      this.resepFormulariumIrjaService.dataSourceChildGrid.next(detail);
      this.GridResepRacikan.refresh();
  }

  heandleSelectedTemplateResep(args) {
      console.log(args);
      let obat:any[] = [];
      let detail;
      detail = this.GridResepRacikan.childGrid.dataSource;

      args.details.forEach(element => {
          this.counter++;

          element.counter = this.counter;

          if (element.is_racikan) {
              element.nama_racikan = element.nama_obat
          } else {
              element.nama_racikan = ''
          }

          if (element.id_label_pemakaian_obat == 1) {
              element.label = element.ket_label;
          } else {
              element.label = element.id_label_pemakaian_obat;
          }

          if (element.id_tambahan_aturan_pakai == 1) {
              element.aturan = element.ket_aturan;
          } else {
              element.aturan = element.id_tambahan_aturan_pakai;
          }

          // this.resepFormulariumIrjaService.addDetail(element);
          obat.push(element)

          element.racikans.forEach(racikan => {
              let counterRacikan = this.counterRacikan++;
              racikan.counter = this.counter;
              racikan.counterRacikan = counterRacikan;
              racikan.komposisi = parseInt(racikan.kandungan_obat);
              racikan.kandungan       = 1;
              racikan.seper           = 1;
              racikan.qty_resep       = element.qty_resep;
              detail.push(racikan);
          });

      });

      this.dataSourceGrid.next(obat);
      this.resepFormulariumIrjaService.dataSourceChildGrid.next(detail);
      this.resepFormulariumIrjaService.dataSourceParentGrid.next(obat);
      this.GridResepRacikan.refresh();
      this.isGetFromTemplate =true;
  }

  handleAddObat(FormAddObat: any): void {
      if(this.validasi(FormAddObat)){
          this.counter++;
          FormAddObat.counter = this.counter;
          if (FormAddObat.is_racikan) {
              FormAddObat.nama_obat = FormAddObat.nama_racikan;
          } else {
              FormAddObat.id_metode_racikan = null;
              FormAddObat.metode_racikan = null;
          }
          // this.resepFormulariumIrjaService.addDetail(FormAddObat);
          let dataDetail = this.dataSourceGrid.value
          dataDetail.push(FormAddObat);
          this.dataSourceGrid.next(dataDetail);
          this.resepFormulariumIrjaService.dataSourceParentGrid.next(dataDetail);
          this.GridResepRacikan.refresh();
          this.onResetFormObat();
      }
  }
  

  validasi(FormData): boolean {
      let message = []
      let htmlSelection:string =''
      console.log('validasi',FormData);
      if (FormData.is_racikan) {
          if(FormData.nama_racikan=='' || FormData.nama_racikan==null){
              message.push('Nama Racikan belum di isi')
          }
          if(FormData.metode_racikan=='' || FormData.metode_racikan==null){
              message.push('Kemasan Racikan belum di isi')
          }
      }else{
          if(FormData.nama_obat=='' || FormData.nama_obat==null ){
              message.push('obat belum di pillih')
          }
          if(FormData.satuan_aturan_pakai=='' || FormData.satuan_aturan_pakai==null){
              message.push('Satuan belum di pillih')
          }
      }

      if(FormData.label == '' || FormData.label==null){
          message.push('Label Obat belum di isi')
      }

      if(FormData.aturan == '' || FormData.aturan==null){
          message.push('Aturan Tambahan belum di isi')
      }

      if(message.length>0){
          htmlSelection = '<div class="text-danger"><ul>';
          message.forEach((value:any,index)=>{
              htmlSelection +=`<li>${value}</li>`;
          })
          htmlSelection += `</ul></div>`;

          Swal.fire({
              icon    : 'error',
              title   : 'Validasi Data',
              html    : htmlSelection,
          })

          return false;
      }else{
          return true;
      }
  }

  onResetFormObat(): void {
      this.FormAddObat.reset();
      this.qty_resep.setValue(1);
      this.is_racikan.setValue(false);
  }

  // ** Update Data Obat method
  onUpdateDataObat(FormAddObat: any): void {
      if(this.validasi(FormAddObat)){
          if (FormAddObat.is_racikan) {
              FormAddObat.nama_obat = FormAddObat.nama_racikan;
          }
          let dataDetail = this.dataSourceGrid.value
              dataDetail[this.currentIndex] = FormAddObat
          this.dataSourceGrid.next(dataDetail);
          this.resepFormulariumIrjaService.dataSourceParentGrid.next(dataDetail);
          this.onResetFormObat()
          this.GridResepRacikan.refresh();
          this.FormAddObatState = "input";
      }
  }

  // ** Reset Form Add Obat 
  onResetFormDataObat() {
      this.FormAddObat.reset();
      this.SatuanObat = "";
  }

  // ** Grid Daftar Obat method
  onInitalizedGrid(component: MolGridComponent) {
      this.gridDaftarObat = component;
  }

  // ** Grid Daftar Obat method
  onToolbarClick(args: any): void {
      switch (args.item.id) {
          case "edit":
              // this.FormAddObat.setValue(this.SelectedDataObat);
              this.onEditData();
              this.FormAddObatState = "edit";
              break;
          case "delete":

              let dataObat = this.resepFormulariumIrjaService.dataSourceParentGrid.value
                  dataObat.splice(this.currentIndex, 1);
              this.resepFormulariumIrjaService.dataSourceParentGrid.next(dataObat)
              this.dataSourceGrid.next(dataObat);
              this.GridResepRacikan.refresh();

              break;
          default:
              break;
      };
  }

  onEditData() {
      let data = this.SelectedDataObat
      this.FormAddObat.setValue({
          counter: data.counter,
          no_urut: data.no_urut,
          is_racikan: data.is_racikan,
          set_racikan_id: data.set_racikan_id,
          id_metode_racikan: data.id_metode_racikan,
          metode_racikan: data.metode_racikan,
          id_formularium: data.id_formularium,
          nama_obat: data.nama_obat,
          qty_resep: data.qty_resep,
          nama_satuan: data.nama_satuan,
          label: data.label,
          ket_label: data.ket_label,
          id_label_pemakaian_obat: data.id_label_pemakaian_obat,
          label_pemakaian_obat: data.label_pemakaian_obat,
          aturan: data.aturan,
          ket_aturan: data.ket_aturan,
          id_tambahan_aturan_pakai: data.id_tambahan_aturan_pakai,
          label_tambahan_aturan_pakai_obat: data.label_tambahan_aturan_pakai_obat,
          nama_racikan: data.nama_racikan,
          id_satuan_aturan_pakai: data.id_satuan_aturan_pakai,
          satuan_aturan_pakai: data.satuan_aturan_pakai,
      });
  }

  onActionComplete(args: any): void {
      // let dataSourceParent: any = this.GridResepRacikan.dataSource;
      // this.resepFormulariumIrjaService.dataSourceParentGrid.next(dataSourceParent);

      // console.log("Parent", this.GridResepRacikan.dataSource);
      // console.log("Children", this.GridResepRacikan.childGrid.dataSource);
  }

  // ** Grid Daftar Obat method
  onRowSelected(args: any): void {
      this.currentIndex = args.rowIndex;
      this.SelectedDataObat = args.data;
  }

  onResetGrid():void{
      // this.GridResepRacikan.refresh();
      // this.resepFormulariumIrjaService.dataSourceChildGrid.next([]);
      // this.resepFormulariumIrjaService.dataSourceParentGrid.next([]);
      window.location.reload();
      // this.dataScourceGridChild = [];
      // this.dataSourceGrid.next([]);
      // this.ChildGrid.dataSource = [];
      // this.GridResepRacikan.refresh();
  }

  onClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Save':
                this.onSave();
                break;
            case 'Back':
                this.location.back();
                break;
            default:
                break;
        }
    }

    onSave(){
        if (!this.idOutlet) {
            this.utilityService.onShowingCustomAlert('warning', 'Depo Farmasi belum di isi', '')
            return false;
        }
        this.data_header = {
            id_dokter: this.daftarPasienService.ActivePasien.value.id_dokter,
            id_register: this.daftarPasienService.ActivePasien.value.id_register,
            id_outlet: this.idOutlet,
            id_person: this.daftarPasienService.ActivePasien.value.id_person,
            jenis_rawat: 'J',
            nama_template: '',
            tanggal_resep: this.currentTanggal
        }

        this.newdetail = this.resepFormulariumIrjaService.dataSourceParentGrid.value.filter((item)=>{
            return item.is_racikan && !item.set_racikan_id
        })

        this.baru = 0
        if (!this.isGetFromTemplate) {
            this.modalRef = this.modalService.show(
                this.modalTemplateResep,
                Object.assign({}, { class: 'modal-lg' })
            );
        } else {
            this.methodConfirmSetRacikan(0)
        }
    }

    handleClickSimpanTemplateResepDokter() {
        let nama_resep = (<HTMLInputElement>document.getElementsByName("nama_resep")[0]).value;
        this.data_header.nama_template = nama_resep;
        this.modalRef.hide();
        this.methodConfirmSetRacikan(1)
    }

    handleClickAbaikan() {
        this.modalRef.hide();
        this.methodConfirmSetRacikan(0)
    }

    methodConfirmSetRacikan(simpan_template) {
        if (this.newdetail.length > 0) {
            Swal.fire({
                title: 'Apakah Anda Ingin Menyimapan Racikan Baru ke dalam Setting Racikan dokter?',
                text: "Racikan akan bisa di gunakan lagi untuk template",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Iya, Saya Yakin',
                cancelButtonText: 'Tidak',
                focusCancel: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.baru = 1
                } else {
                    this.baru = 0
                }
                this.methodInsert(this.data_header, simpan_template, this.baru)
            });
        } else {
            this.methodInsert(this.data_header, simpan_template, 0)
        }
    }

    methodInsert(Data, is_simpan_template: number, is_simpan_racikan: number) {
        this.resepFormulariumIrjaService.Insert(Data, is_simpan_template, is_simpan_racikan).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                    this.onResetGrid();
                    this.isGetFromTemplate = false;
                });
        })
    }

  get is_racikan(): AbstractControl { return this.FormAddObat.get('is_racikan'); };
  get set_racikan_id(): AbstractControl { return this.FormAddObat.get('set_racikan_id'); };
  get id_metode_racikan(): AbstractControl { return this.FormAddObat.get('id_metode_racikan'); };
  get metode_racikan(): AbstractControl { return this.FormAddObat.get('metode_racikan'); };
  get id_formularium(): AbstractControl { return this.FormAddObat.get('id_formularium'); };
  get nama_obat(): AbstractControl { return this.FormAddObat.get('nama_obat'); };
  get qty_resep(): AbstractControl { return this.FormAddObat.get('qty_resep'); }
  get nama_satuan(): AbstractControl { return this.FormAddObat.get('nama_satuan'); }

  get label(): AbstractControl { return this.FormAddObat.get('label'); }
  get ket_label(): AbstractControl { return this.FormAddObat.get('ket_label'); }
  get id_label_pemakaian_obat(): AbstractControl { return this.FormAddObat.get('id_label_pemakaian_obat'); }
  get label_pemakaian_obat(): AbstractControl { return this.FormAddObat.get('label_pemakaian_obat'); }

  get aturan(): AbstractControl { return this.FormAddObat.get('aturan'); }
  get ket_aturan(): AbstractControl { return this.FormAddObat.get('ket_aturan'); }
  get id_tambahan_aturan_pakai(): AbstractControl { return this.FormAddObat.get('id_tambahan_aturan_pakai'); }
  get label_tambahan_aturan_pakai_obat(): AbstractControl { return this.FormAddObat.get('label_tambahan_aturan_pakai_obat'); }
  get nama_racikan(): AbstractControl { return this.FormAddObat.get('nama_racikan'); }
  get satuan_aturan_pakai(): AbstractControl { return this.FormAddObat.get('satuan_aturan_pakai') };


}
