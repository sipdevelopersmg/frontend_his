import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SetupStockroomService } from 'src/app/modules/MM/services/setup-data/setup-stockroom/setup-stock-room.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import * as GridConfigStockroom from './json/grid-stockroom.config.json'
import * as GridConfigGroup from './json/grid-group.config.json'
import * as GridLookUpGroup from './json/lookupgroup.json'
import * as GridConfigRak from './json/grid-rak.config.json'
import * as GridLookUpRak from './json/lookuprak.json'
import * as GridConfigItem from './json/grid-item.config.json'
import * as GridLookUpItem from './json/lookupitem.json'
import { MM } from 'src/app/api/MM';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SettingStokOpnameService } from 'src/app/modules/MM/services/stok_opname/setting_stok_opname/setting-stok-opname.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-input-setting-stok-opname',
  templateUrl: './input-setting-stok-opname.component.html',
  styleUrls: ['./input-setting-stok-opname.component.css']
})
export class InputSettingStokOpnameComponent implements OnInit {
  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
    { Id: 'Reset', Captions: 'Reset', Icons1: 'fa-redo-alt' },
    { Id: 'Save', Captions: 'Save', Icons1: 'fa-save' },
  ];
  
  formInput:FormGroup;
  @ViewChild('GridStockroom') GridStockroom: MolGridComponent;
  @ViewChild('GridGroup') GridGroup: MolGridComponent;
  @ViewChild('GridRak') GridRak: MolGridComponent;
  @ViewChild('GridItem') GridItem: MolGridComponent;
  
  @ViewChild('LookupGroup') LookupGroup: OrgLookUpComponent;
  @ViewChild('LookupRak') LookupRak: OrgLookUpComponent;
  @ViewChild('LookupItem') LookupItem: OrgLookUpComponent;
  
  urlGroup = MM.STOK_OPNAME.SETTING_STOK_OPNAME.GET_ALL_GROUP_ITEM_BY_PARAMS
  urlRak = MM.STOK_OPNAME.SETTING_STOK_OPNAME.GET_ALL_RAK_BY_PARAMS
  urlItem = MM.STOK_OPNAME.SETTING_STOK_OPNAME.GET_ALL_ITEM_BY_PARAMS

  dataSourceJenisSettingStokOpname:any[] = [];
  SetupJenisSettingStokOpnameDropdownField: object = { text: 'nama_jenis_setting_stok_opname', value: 'id_jenis_setting_stok_opname' };
  SetupStockroomDropdownField: object = { text: 'nama_stockroom', value: 'id_stockroom' };

  // Stockroom
  dataSourceStockroom:any = []
  dataSourceStockroomCurrent:any = null
  dataSourceStockroomSelected:any = null
  gridToolbarStockroom = [
    { text: 'Hapus', tooltipText: 'Hapus', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'hapus' },
  ];
  GridConfigStockroom = GridConfigStockroom

  // Group
  dataSourceGroup:any=[]
  dataSourceGroupCurrent:any = null
  gridToolbarGroup = [
    { text: 'Tambah Group', tooltipText: 'Tambah Group', prefixIcon: 'fas fa-plus fa-sm', id: 'tambah' },
    { text: 'Hapus Group', tooltipText: 'Hapus Group', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'hapus' },
  ]
  GridConfigGroup = GridConfigGroup
  GridLookUpGroup = GridLookUpGroup

  // Rak
  dataSourceRak:any=[]
  dataSourceRakCurrent:any=null
  gridToolbarRak = [
    { text: 'Tambah Rak', tooltipText: 'Tambah Rak', prefixIcon: 'fas fa-plus fa-sm', id: 'tambah' },
    { text: 'Hapus Rak', tooltipText: 'Hapus Rak', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'hapus' },
  ]
  GridConfigRak = GridConfigRak 
  GridLookUpRak = GridLookUpRak

  // Item
  dataSourceItem:any=[]
  dataSourceItemCurrent:any=null 
  gridToolbarItem = [
    { text: 'Tambah Item', tooltipText: 'Tambah Item', prefixIcon: 'fas fa-plus fa-sm', id: 'tambah' },
    { text: 'Hapus Item', tooltipText: 'Hapus Item', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'hapus' },
  ]
  GridConfigItem = GridConfigItem
  GridLookUpItem = GridLookUpItem

  constructor(
    private formBuilder:FormBuilder,
    private settingStokOpnameService:SettingStokOpnameService,
    public setupStockroomService: SetupStockroomService,
    private utilityService: UtilityService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      tanggal_stok_opname:[null,Validators.required],
      id_jenis_setting_stok_opname:[0,Validators.required],
      keterangan:[''],
    })
    this.settingStokOpnameService.getAllJenisSetting().subscribe((result)=>{
      this.dataSourceJenisSettingStokOpname = result.data
    })
    this.setupStockroomService.setDataSource();
  }
// stockroom
  handleChangeStockroom(args){
    console.log(args)
    this.dataSourceStockroomSelected=args.itemData
  }

  handleTambahStockRoom(){
    this.dataSourceStockroom.push({
      id_stockroom    :this.dataSourceStockroomSelected.id_stockroom,
      nama_stockroom  :this.dataSourceStockroomSelected.nama_stockroom
    })
    this.GridStockroom.Grid.refresh();
  }

  handleSelectedRowStockroom(args){
    this.dataSourceStockroomCurrent = args
  }

  handleToolbarClickStockroom(args: any): void {
    const item = args.item.id;
    switch (item) {
      case 'hapus':
          this.dataSourceStockroom.splice(this.dataSourceStockroomCurrent.rowIndex,1)
          this.GridStockroom.Grid.refresh();
        break;
      default:
        break;
    }
  }

// group
  heandleSelectedGroup(args){
    this.dataSourceGroup.push(args)
    this.GridGroup.Grid.refresh();
  }

  handleSelectedRowGroup(args){
    this.dataSourceGroupCurrent = args
  }

  handleToolbarClickGroup(args){
    const item = args.item.id;
    switch (item) {
      case 'tambah':
        this.LookupGroup.onOpenModal();
        break;
      case 'hapus':
          this.dataSourceGroup.splice(this.dataSourceGroupCurrent.rowIndex,1)
          this.GridGroup.Grid.refresh();
        break;
      default:
        break;
    }
  }
// Rak
  heandleSelectedRak(args){
    this.dataSourceRak.push(args)
    this.GridRak.Grid.refresh();
  }

  handleSelectedRowRak(args){
    this.dataSourceRakCurrent = args
  }

  handleToolbarClickRak(args){
    const item = args.item.id;
    switch (item) {
      case 'tambah':
        this.LookupRak.onOpenModal();
        break;
      case 'hapus':
          this.dataSourceRak.splice(this.dataSourceRakCurrent.rowIndex,1)
          this.GridRak.Grid.refresh();
        break;
      default:
        break;
    }
  }

// item 
  heandleSelectedItem(args){
    this.dataSourceItem.push(args)
    this.GridItem.Grid.refresh();
  }

  handleSelectedRowItem(args){
    this.dataSourceItemCurrent = args
  }

  handleToolbarClickItem(args){
    const item = args.item.id;
    switch (item) {
      case 'tambah':
        this.LookupItem.onOpenModal();
        break;
      case 'hapus':
          this.dataSourceItem.splice(this.dataSourceItemCurrent.rowIndex,1)
          this.GridItem.Grid.refresh();
        break;
      default:
        break;
    }
  }

  onClickButtonNav(ButtonId: string): void {
    switch (ButtonId) {
        case 'Save':
            switch(this.id_jenis_setting_stok_opname.value){
              case 1:
                this.onInsertSemuaItem();
                break;
              case 2:
                this.onInsertGrup();
                break;
              case 3:
                this.onInsertRak();
                break;
              case 4:
                this.onInsertItem();
                break;
            }
            break;
        case 'Reset':
            this.ResetFrom();
            break;
        case 'Back':
            this.location.back();
            break;
        default:
            break;
    }
  }
  
  ResetFrom() {
    this.formInput.reset();
    this.dataSourceStockroom = [];
    this.dataSourceItem = [];
    this.dataSourceRak = [];
    this.dataSourceGroup = [];
    this.GridStockroom.Grid.refresh();
    this.GridGroup.Grid.refresh();
    this.GridItem.Grid.refresh();
    this.GridRak.Grid.refresh();
  }

  onInsertSemuaItem():void{
    let Data = this.formInput.value
    Data.details = this.dataSourceStockroom
    this.settingStokOpnameService.insertSettingSemuaItem(Data).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
      .then(() => {
          this.ResetFrom();
      });
    })
      
  }

  onInsertGrup():void{
    let Data = this.formInput.value
    Data.detailGudangs = this.dataSourceStockroom
    Data.details = this.dataSourceGroup
    this.settingStokOpnameService.insertSettingGroup(Data).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
        .then(() => {
            this.ResetFrom();
        });
    })
  }

  onInsertRak():void{
    let Data = this.formInput.value
    Data.detailGudangs = this.dataSourceStockroom
    Data.details = this.dataSourceRak
    this.settingStokOpnameService.insertSettingRak(Data).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
        .then(() => {
            this.ResetFrom();
        });
    })
  }

  onInsertItem():void{
    let Data = this.formInput.value
    Data.detailGudangs = this.dataSourceStockroom
    Data.details = this.dataSourceItem
    this.settingStokOpnameService.insertSettingItem(Data).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
        .then(() => {
            this.ResetFrom();
        });
    })
  }

  get id_jenis_setting_stok_opname(): AbstractControl { return this.formInput.get('id_jenis_setting_stok_opname'); }

}
