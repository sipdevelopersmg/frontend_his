import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { DropDownList, ComboBox } from '@syncfusion/ej2-angular-dropdowns';
import { EditSettingsModel, IEditCell, GridComponent, GridModel } from '@syncfusion/ej2-angular-grids';
import { AddEventArgs } from '@syncfusion/ej2-angular-navigations';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription, BehaviorSubject } from 'rxjs';
import { MM } from 'src/app/api/MM';
import { AuditStokOpnameTanpaEdService } from 'src/app/modules/MM-TANPA-ED/services/stok-opname-tanpa-ed/audit-stok-opname-tanpa-ed/audit-stok-opname-tanpa-ed.service';
import { TrPersetujuanMutasiDetailInsert } from 'src/app/modules/MM/models/mutasi/persetujuan-mutasi';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Location } from '@angular/common'
import * as LookupGridSettingStokOpname from './json/LookupGridSettingStokOpname.json'
import { MM_TANPA_ED } from 'src/app/api/MM_TANPA_ED';

@Component({
  selector: 'app-input-audit-stok-opname-tanpa-ed',
  templateUrl: './input-audit-stok-opname-tanpa-ed.component.html',
  styleUrls: ['./input-audit-stok-opname-tanpa-ed.component.css']
})
export class InputAuditStokOpnameTanpaEdComponent implements OnInit {

  LookupGridSettingStokOpname = LookupGridSettingStokOpname;
  
  urlSettingStokOpname = MM_TANPA_ED.STOK_OPNAME_TANPA_ED.AUDIT_STOK_OPNAME_TANPA_ED.GET_ALL_SETTING_STOK_OPNAME_BY_PARAMS

  SetupStockroomDropdownField: object = { text: 'nama_stockroom', value: 'id_stockroom' };
  SetupRakStorageDropdownField: object = {text: 'nama_rak_storage', value: 'id_rak_storage'}
  formInput: FormGroup;
  inputFieldState = 'detail';
  
  ButtonNav: ButtonNavModel[] = [
      { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
      { Id: 'Simpan', Captions: 'Simpan Stok Opname', Icons1: 'fa-check' },
  ];

  modalRef: BsModalRef;


  GridDataEditSettings: EditSettingsModel = { allowEditing: true };
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


  //=========
  private id: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    public auditStokOpnameTanpaEdService: AuditStokOpnameTanpaEdService,
    private location: Location,
    private utilityService: UtilityService,
  ) { }

  ngOnInit(): void {

    this.formInput = this.formBuilder.group({
      setting_stok_opname_id:[0,],
      id_stockroom          :[0,],
      id_grup_item          :[0,],
      id_rak_storage        :[0,],
      waktu_capture_stok    :[null,],
      keterangan_entry      :[""]
    });

  }


  heandleSelectedSettingStokOpname(args: any): void {
    this.setting_stok_opname_id.setValue(args.setting_stok_opname_id);
    // this.auditStokOpnameTanpaEdServiceService.onGetStokroom(args.setting_stok_opname_id).subscribe((result)=>{
    this.dataSourceStockroom = args.stockrooms
    // })
  }

  handleChangeStockroom(args): void{
    console.log(args)
    this.auditStokOpnameTanpaEdService.onGetRak({
      setting_stok_opname_id : this.setting_stok_opname_id.value,
      id_stockroom : args.itemData.id_stockroom
    }).subscribe((result)=>{
      this.dataSourceRakStorage = result.data
    })
  }

  handleClickGetBarang():void{
    let data = {
      setting_stok_opname_id  :this.setting_stok_opname_id.value,
      id_rak_storage          :this.id_rak_storage.value,
      id_stockroom            :this.id_stockroom.value,
      waktu_capture           :this.waktu_capture_stok.value
    }
    console.log(data);
    this.auditStokOpnameTanpaEdService.onGetBarang(data).subscribe((result)=>{
      this.dataSourceGrid.next(result.data);
      this.gridDetail.refresh();
    })
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
            this.LookupItem.onOpenModal();
            break;
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

  handleActionCompleted($event: any): void{
    if ($event.requestType == 'save') {
      console.log($event);
      let data = this.dataSourceGrid.value;
      data[$event.rowIndex].qty_fisik = $event.data.qty_fisik;
      data[$event.rowIndex].sub_total_fisik = $event.data.hpp_average * $event.data.qty_fisik;
      this.gridDetail.refresh();
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
    })
    
    Data.details                            = details
    Data.jumlah_item_fisik                  = details.sum('qty_fisik')
    Data.total_nominal_fisik                = details.sum('sub_total_fisik')
    Data.jumlah_item_sistem_capture_stok    = details.sum('qty_sistem_capture_stok')
    Data.total_nominal_sistem_capture_stok  = details.sum('sub_total_sistem_capture_stok')
    this.auditStokOpnameTanpaEdService.Insert(Data).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Audit stok opname berhasil di simpan', result.message)
        .then(() => {
            this.ResetFrom();
        });
    })
  }

  ResetFrom(){
    this.formInput.reset();
    this.dataSourceGrid.next([]);
    this.gridDetail.refresh();
    this.LookupKodeSettingStokOpname.resetValue();
  }
  
  get setting_stok_opname_id(): AbstractControl { return this.formInput.get('setting_stok_opname_id'); }
  get id_grup_item(): AbstractControl { return this.formInput.get('id_grup_item'); }
  get id_rak_storage(): AbstractControl { return this.formInput.get('id_rak_storage'); }
  get id_stockroom(): AbstractControl { return this.formInput.get('id_stockroom'); }
  get waktu_capture_stok(): AbstractControl { return this.formInput.get('waktu_capture_stok'); }

}
