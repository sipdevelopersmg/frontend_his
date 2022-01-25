import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { DropDownList, ComboBox } from '@syncfusion/ej2-angular-dropdowns';
import { EditSettingsModel, IEditCell, GridComponent, GridModel } from '@syncfusion/ej2-angular-grids';
import { AddEventArgs } from '@syncfusion/ej2-angular-navigations';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription, BehaviorSubject } from 'rxjs';
import { MM } from 'src/app/api/MM';
import { TrPersetujuanMutasiDetailInsert } from 'src/app/modules/MM/models/mutasi/persetujuan-mutasi';
import { AuditStokOpnameService } from 'src/app/modules/MM/services/stok_opname/audit_stok_opname/audit-stok-opname.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import {Location} from '@angular/common'
import * as LookupGridSettingStokOpname from './json/LookupGridSettingStokOpname.json'
import { AuditStokOpnameTanpaSettingService } from 'src/app/modules/MM/services/stok_opname/audit_stok_opname_tanpa_setting/audit-stok-opname-tanpa-setting.service';
import * as GridLookUpItem from './json/lookupitem.json'
import { SetupStockroomService } from 'src/app/modules/MM/services/setup-data/setup-stockroom/setup-stock-room.service';
import moment from 'moment';

@Component({
  selector: 'app-input-audit-stok-opname-tanpa-setting',
  templateUrl: './input-audit-stok-opname-tanpa-setting.component.html',
  styleUrls: ['./input-audit-stok-opname-tanpa-setting.component.css']
})
export class InputAuditStokOpnameTanpaSettingComponent implements OnInit {

  LookupGridSettingStokOpname = LookupGridSettingStokOpname;
  GridLookUpItem = GridLookUpItem;
  urlSettingStokOpname = MM.STOK_OPNAME.AUDIT_STOK_OPNAME.GET_ALL_SETTING_STOK_OPNAME_BY_PARAMS
  urlItem = MM.STOK_OPNAME.AUDIT_STOK_OPNAME_TANPA_SETTING.GET_LOCKUP_BARANG_BY_PARAMS
  urlItemLookUp = this.urlItem 
  SetupStockroomDropdownField: object = { text: 'nama_stockroom', value: 'id_stockroom' };
  SetupRakStorageDropdownField: object = {text: 'nama_rak_storage', value: 'id_rak_storage'}
  formInput: FormGroup;
  inputFieldState = 'detail';
  
  ButtonNav: ButtonNavModel[] = [
      { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
      { Id: 'Simpan', Captions: 'Simpan Stok Opname', Icons1: 'fa-check' },
  ];

  modalRef: BsModalRef;

  GridDataEditSettings: EditSettingsModel = { allowEditing: false };
  GridDetailToolbar: any;
  subscriptions: Subscription[] = []

  public satuanParams: IEditCell;
  public satuanElem: HTMLElement;
  public satuanObj: DropDownList;
  counterChildGrid: number = 0;

  public datasatuan: { [key: string]: Object }[] = [];
  satuanVal: string;

  public childGridSatuan = [];

  detailSelected: TrPersetujuanMutasiDetailInsert;
  globalListenFunc: Function;
  private currentIndex: number;

  @ViewChild('gridDetail') gridDetail: GridComponent;
  @ViewChild('LookupItem') LookupItem: OrgLookUpComponent;
  @ViewChild('LookupKodeSettingStokOpname') LookupKodeSettingStokOpname: OrgInputLookUpKodeComponent;

  dataSourceStockroom:any[]=[];
  dataSourceRakStorage:any[]=[];

  //======= Child
    ChildGrid: GridModel;
    dataSourceGrid = new BehaviorSubject([]);
    dataScourceGridChild: any[] = [];
    totalJumlahItem = new BehaviorSubject(0);
    public itemBatch: any = [];
    public id_item = new BehaviorSubject(0);
    public item_current = new BehaviorSubject(null);
    public itemsParams: IEditCell;
    public itemsElem: HTMLElement;
    public itemsObj: DropDownList;

  //=========
  private id: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    public auditStokOpnameTanpaSettingService: AuditStokOpnameTanpaSettingService,
    private location: Location,
    private utilityService: UtilityService,
    private setupStockroomService: SetupStockroomService
  ) { }

  ngOnInit(): void {
    
    this.GridDetailToolbar = [
      { text: 'Add[F1]', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
      { text: 'Hapus', tooltipText: 'Hapus', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'hapus' },

    ];

    this.formInput = this.formBuilder.group({
      setting_stok_opname_id:[0,],
      id_stockroom          :[0,],
      id_grup_item          :[0,],
      id_rak_storage        :[0,],
      waktu_capture_stok    :[null,],
      keterangan_entry      :[""]
    });

    let id_item = this.id_item;
    let item_current =  this.item_current;
    let currentChildGird = null;

    this.itemsParams = {
        create: () => {
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
            this.auditStokOpnameTanpaSettingService.onGetBatchED({
              id_item       :id_item.value,
              id_stockroom  :this.id_stockroom.value,
              waktu_capture :this.waktu_capture_stok.value
            }).subscribe((result) => {
                this.itemsObj = new ComboBox({
                    value: '',
                    dataSource: result.data,
                    fields: { value: 'batch_number', text: 'batch_number' },
                    enabled: true,
                    placeholder: 'Select a Batch',
                    floatLabelType: 'Never',
                    change: function (args) {
                        this.setFormGrif(args);
                        id_item.next(args.itemData.id_item);
                        currentBatch = args.itemData
                    }.bind(this),
                });
                this.itemsObj.appendTo(this.itemsElem);

                if (currentChildGird) {
                  setTimeout(() => {
                      this.itemsObj.value = currentChildGird.batch_number;
                  }, 500)
                }
            })
        }
    }

    let dataSourceChild = this.dataScourceGridChild;
    let counterChildGrid = this.counterChildGrid;
    let dataSourceGrid = this.dataSourceGrid;
    let totalJumlahItem = this.totalJumlahItem;
    let currentBatch =null;

    this.ChildGrid = {
      dataSource: this.dataScourceGridChild,
      queryString: "id_item",
      rowHeight: 30,
      allowResizing: true,
      allowTextWrap: false,
      textWrapSettings: { wrapMode: 'Both' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      columns: [
          { field: "no_urut", headerText: 'urut', visible: false },
          { field: "id_item", headerText: 'id_item', visible: false },
          { field: "counterChildGrid", headerText: 'counterChildGrid', visible: false },
          { field: "batch_number", headerText: 'Batch Number', editType: 'dropdownedit', edit: this.itemsParams, width: 100 },
          { field: "expired_date", headerText: 'Expired Date',type:'Date',format:'dd MMMM yyyy', textAlign: 'Right', width: 80, allowEditing: true,editType:'datepickeredit' },
          { field: "qty_fisik", headerText: 'Qty Fisik', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
          { field: "qty_sistem_capture_stok", headerText: 'Qty capture', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
          { field: "nama_satuan", headerText: 'nama_satuan', visible: true, headerTextAlign: 'Center', textAlign: 'Left', width: 100 },
          { field: "hpp_average", headerText: 'Hpp Avarage', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
          { field: "harga_jual", headerText: 'Harga Jual', visible: true, allowEditing: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
          { field: "sub_total_fisik", headerText: 'Nominal', visible: true, allowEditing: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
          { field: "sub_total_sistem_capture_stok", headerText: 'Sub total sistem capture', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
          { field: "keterangan", headerText: 'Keterangan', visible: true, headerTextAlign: 'Center', textAlign: 'Left', width: 100 },
      ],
      rowSelected(args) {
          currentChildGird = args.data;
      },
      actionBegin(args: any) {
          if (args.requestType === 'add') {
              (args.data as object)['id_item'] = this.parentDetails.parentRowData.id_item;
              (args.data as object)['counterChildGrid'] = counterChildGrid++;
              id_item.next(this.parentDetails.parentRowData.id_item);
              item_current.next(this.parentDetails.parentRowData);
              console.log(id_item.value);
              currentChildGird = null;
          }
      },
      actionComplete(args) {
          if (args.requestType === 'save') {
              console.log('complete', args);
              if (args.action === 'add') {
                  console.log(currentBatch);
                  args.data.harga_jual      = parseFloat(args.data.harga_jual)
                  args.data.qty_fisik       = parseFloat(args.data.qty_fisik)
                  args.data.sub_total_fisik =  args.data.harga_jual * args.data.qty_fisik

                  if(typeof currentBatch.qty_sistem_capture_stok !== 'undefined'){
                    args.data.qty_sistem_capture_stok = currentBatch.qty_sistem_capture_stok
                  }else{
                    args.data.qty_sistem_capture_stok = 0;
                  }
                  
                  dataSourceChild.push(args.data);
              }
              if (args.action === 'edit') {
                  args.data.sub_total_fisik =  args.data.harga_jual * args.data.qty_fisik
                  let index = dataSourceChild.map((item) => { return item.counterChildGrid }).indexOf(args.data.counterChildGrid);
                  dataSourceChild[index] = args.data;
              }

              let data = []
              dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                  let total = 0
                  dataSourceChild.forEach((item, index) => {
                      if (itemPrent.id_item == item.id_item) {
                          total = total + parseInt(item.qty_fisik)
                      }
                  })
                  itemPrent.qty_fisik = total
                  itemPrent.sub_total_fisik = total * itemPrent.hpp_average
                  data.push(itemPrent)
              })
              setTimeout(() => {
                  dataSourceGrid.next(data);
                  totalJumlahItem.next(data.sum('qty_fisik'))
                  console.log(data);
              }, 500)
          }

          if (args.requestType === "delete") {
              let index = dataSourceChild.map((item) => { return item.counterChildGrid }).indexOf(args.data[0].counterChildGrid);
              dataSourceChild.splice(index, 1);

              let data = []
              dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                  let total = 0
                  dataSourceChild.forEach((item, index) => {
                      if (itemPrent.id_item == item.id_item) {
                          total = total + parseInt(item.qty_fisik)
                      }
                  })
                  itemPrent.qty_fisik = total
                  itemPrent.sub_total_fisik = total * itemPrent.hpp_average
                  data.push(itemPrent)
              })
              setTimeout(() => {
                  dataSourceGrid.next(data);
                  console.log(data);
              }, 500)
          }
      }
    }
    this.setupStockroomService.onGetAll().subscribe((result)=>{
      this.dataSourceStockroom = result.data
    })
  }

  setFormGrif(args): void {
    if(typeof args.itemData.expired_date !== 'undefined'){
      (<HTMLInputElement>document.getElementsByName("expired_date")[0]).value = args.itemData.expired_date;
      (<HTMLInputElement>document.getElementsByName("nama_satuan")[0]).value = args.itemData.nama_satuan;
      (<HTMLInputElement>document.getElementsByName("harga_jual")[0]).value = args.itemData.hpp_average;
    }else{
      (<HTMLInputElement>document.getElementsByName("harga_jual")[0]).value = this.item_current.value.hpp_average;
      (<HTMLInputElement>document.getElementsByName("nama_satuan")[0]).value = this.item_current.value.nama_satuan;
    }
  }


  heandleSelectedSettingStokOpname(args: any): void {
    this.setting_stok_opname_id.setValue(args.setting_stok_opname_id);
    // this.auditStokOpnameService.onGetStokroom(args.setting_stok_opname_id).subscribe((result)=>{
    this.dataSourceStockroom = args.stockrooms
    // })
  }

  handleChangeStockroom(args): void{
    // console.log(args)
    // this.auditStokOpnameTanpaSettingService.onGetRak({
    //   setting_stok_opname_id : this.setting_stok_opname_id.value,
    //   id_stockroom : args.itemData.id_stockroom
    // }).subscribe((result)=>{
    //   this.dataSourceRakStorage = result.data
    // })
  }

  heandleSelectedItem(args):void{
    let data = this.dataSourceGrid.value
    data.push(args);
    this.dataSourceGrid.next(data);
    this.gridDetail.refresh();
  }

  hapusItem():void{
    let data = this.dataSourceGrid.value
    data.splice(this.currentIndex,1);
    this.dataSourceGrid.next(data);
    this.gridDetail.refresh();
  }

  handleClickGetBarang():void{
    // let data = {
    //   id_rak_storage      :this.id_rak_storage.value,
    //   id_stockroom        :this.id_stockroom.value,
    //   waktu_capture       :this.waktu_capture_stok.value
    // }
    // console.log(data);
    // this.auditStokOpnameTanpaSettingService.onGetBarang(data).subscribe((result)=>{
    //   this.dataSourceGrid.next(result.data);
    //   this.gridDetail.refresh();
    // })
  }

  onClickButtonNav(ButtonId: string): void {
    switch (ButtonId) {
        case 'Back':
            this.location.back();
            break;
        case "Simpan":
            this.insert();
            break;
        default:
            break;
    }
  }

  onToolbarClick(args: any): void {
    const item = args.item.id;
    switch (item) {
        case 'add':
          console.log(this.waktu_capture_stok.value);
          let waktu = moment(this.waktu_capture_stok.value).format('yyyy-MM-DDThh:mm:ss');
          this.urlItemLookUp = this.urlItem+'/'+this.id_stockroom.value+'/'+waktu+'.000Z';
            this.LookupItem.onOpenModal();
            break;
        case 'hapus':
          this.hapusItem();
        default:
            break;
    }
  }

  handleSelectdRow(args: any): void {
    this.currentIndex = args.rowIndex;
    this.datasatuan = args.data.satuans;
    this.detailSelected = args.data
    this.satuanVal = args.data.kode_satuan_besar;
  }

  onDataBound() {
    this.gridDetail.detailRowModule.expandAll();
  }

  handleRowDataBound(args: any): void {
    let nama_item = args.data.nama_item;
    if(typeof nama_item !== 'undefined'){
      args.row.classList.add('e-validation-background');
    }
  }

  insert() {
    let Data = this.formInput.value
    let details = this.dataSourceGrid.value;
    details.map((e, i) => {
         e.detailBatchs = [];
         e.no_urut = i+1;
         return e
    });
    details.forEach((itemPrent, indexPrent) => {
      itemPrent.harga_jual =  itemPrent.hpp_average;
      itemPrent.sub_total_sistem_capture_stok =  itemPrent.qty_sistem_capture_stok * itemPrent.harga_jual;
        this.dataScourceGridChild.forEach((item, index) => {
            if (itemPrent.id_item == item.id_item) {
                item.qty_fisik = parseFloat(item.qty_fisik)
                item.harga_jual = parseFloat(item.harga_jual)
                item.hpp_average = item.harga_jual
                item.sub_total_fisik = item.qty_fisik * item.harga_jual;
                item.sub_total_sistem_capture_stok = item.qty_sistem_capture_stok * item.harga_jual
                details[indexPrent].detailBatchs.push(item);
            }
        })
    })
    
    Data.details                            = details
    Data.jumlah_item_fisik                  = details.sum('qty_fisik')
    Data.total_nominal_fisik                = details.sum('sub_total_fisik')
    Data.jumlah_item_sistem_capture_stok    = details.sum('qty_sistem_capture_stok')
    Data.total_nominal_sistem_capture_stok  = details.sum('sub_total_sistem_capture_stok')
    this.auditStokOpnameTanpaSettingService.Insert(Data).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Audit stok opname berhasil di simpan', result.message)
        .then(() => {
            this.ResetFrom();
        });
    })

    // this.dataSourceGrid.subscribe((result) => {
      
    // })
  }

  ResetFrom(){
    this.formInput.reset();
    this.dataSourceGrid.next([]);
    this.gridDetail.refresh();
  }
  
  get setting_stok_opname_id(): AbstractControl { return this.formInput.get('setting_stok_opname_id'); }
  get id_grup_item(): AbstractControl { return this.formInput.get('id_grup_item'); }
  get id_rak_storage(): AbstractControl { return this.formInput.get('id_rak_storage'); }
  get id_stockroom(): AbstractControl { return this.formInput.get('id_stockroom'); }
  get waktu_capture_stok(): AbstractControl { return this.formInput.get('waktu_capture_stok'); }


}
