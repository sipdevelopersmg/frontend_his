import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MM} from 'src/app/api/MM';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import * as LookupGridGrupItem from './json/lookupGrupItem.json';
import * as LookupGridPabrik from './json/lookupGridPabrik.json';
import * as LookupGridCaraPakai from './json/LookupGridCaraPakai.json';
import * as GridConfig from './json/grid.config.json';
import * as GridConfigItem from './json/gridItem.config.json';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { SettingHargaJualService } from '../../../services/setup-data/setting-harga-jual/setting-harga-jual.service';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
  selector: 'app-setting-harga-jual',
  templateUrl: './setting-harga-jual.component.html',
  styleUrls: ['./setting-harga-jual.component.css']
})
export class SettingHargaJualComponent implements OnInit {
  public inputFieldState = 'detail'
  
  urlGrupItem = MM.SETUP_DATA.SETTING_HARGA_JUAL.GET_GRUP;
  LookupGridGrupItem = LookupGridGrupItem;
  @ViewChild('LookupKodeGrupItem') LookupKodeGrupItem: OrgInputLookUpKodeComponent;
  
  urlPabrik = MM.SETUP_DATA.SETTING_HARGA_JUAL.GET_PABRIK;
  LookupGridPabrik = LookupGridPabrik;
  @ViewChild('LookupKodePabrik') LookupKodePabrik: OrgInputLookUpKodeComponent;

  urlCaraPakai = MM.SETUP_DATA.SETTING_HARGA_JUAL.GET_CARA_PAKAI;
  LookupGridCaraPakai = LookupGridCaraPakai;
  @ViewChild('LookupKodeCaraPakai') LookupKodeCaraPakai: OrgInputLookUpKodeComponent;

  GridConfig        = GridConfig;
  GridConfigItem    = GridConfigItem;
  dataSourceDetail  = [];
  dataSourceItem    = [];
  
  FormInputData     : FormGroup;
  FormInputSetting  : FormGroup;

  @ViewChild("GridDataItem") GridDataItem:MolGridComponent;
  @ViewChild("GridDataDetail") GridDataDetail:MolGridComponent;

  
  public searchText = "";

  constructor(
    private formBuilder: FormBuilder,
    private settingHargaJualService:SettingHargaJualService,
    private utilityService:UtilityService
  ) { }

  ngOnInit(): void {
    this.FormInputData = this.formBuilder.group({
      kode_obat:[],
      nama_obat:[],
      id_item: [0, []],
      id_grup_obat: [0, []],
      id_pabrik: [0, []],
      id_cara_pakai_obat: [0, []],
    });
    this.FormInputSetting = this.formBuilder.group({
      harga_netto_apotek:[0, []],
      prosentase_profit:[0, []],
      tgl_berlaku:[null, []],
      pajak:[0, []],
      harga_jual_apotek:[0, []],
    })
  }

  handleGetDetail(){
    this.LookupKodeCaraPakai.resetValue();
    this.LookupKodeGrupItem.resetValue();
    this.LookupKodePabrik.resetValue();
  }

  heandleSelectedGrupItem(args: any): void {
    this.id_grup_obat.setValue(args.id_grup_obat);
  }

  heandleSelectedPabrik(args: any): void {
    this.id_pabrik.setValue(args.id_pabrik);
  }

  heandleSelectedCaraPakai(args: any): void {
    this.id_cara_pakai_obat.setValue(args.id_cara_pakai_obat);
  }

  getDataItem(args:any){
    this.settingHargaJualService.getItemByParams([
      {
      columnName:"msi.nama_item",
      filter    :"like",
      searchText:this.searchText,
      searchText2:""
    }
    ]).subscribe((result)=>{
      this.dataSourceItem = result.data
      this.GridDataItem.Grid.refresh();
      setTimeout(() => {
        if (result.data.length > 0) {
            this.GridDataItem.Grid.selectedRowIndex = 0;
        }
      }, 200);
    })
  }

  getDetail(args:any){
    this.id_item.setValue(args.id_item);
    this.kode_obat.setValue(args.kode_item);
    this.nama_obat.setValue(args.nama_item);
    this.harga_netto_apotek.setValue(args.harga_beli_terakhir);

    this.id_grup_obat.setValue(args.id_grup_obat);
    this.LookupKodeGrupItem.kodeValue = args.kode_grup_obat;
    this.LookupKodeGrupItem.titleValue = args.nama_grup_obat;

    this.id_pabrik.setValue(args.id_pabrik);
    this.LookupKodePabrik.kodeValue = args.kode_pabrik;
    this.LookupKodePabrik.titleValue = args.nama_pabrik;

    this.id_cara_pakai_obat.setValue(args.id_cara_pakai_obat);
    this.LookupKodeCaraPakai.kodeValue = args.kode_cara_pakai_obat;
    this.LookupKodeCaraPakai.titleValue = args.cara_pakai_obat;

    this.reset();
    this.reloadDetail()

  }

  reloadDetail(){
    this.settingHargaJualService.onGetDetailHargaJual(this.id_item.value).subscribe((result)=>{
      this.dataSourceDetail = result.data;
      this.GridDataDetail.Grid.refresh();
    })
  }

  hitung(args:any){
    let margin = (args!=0)?this.harga_netto_apotek.value * ( args / 100 ):0
    this.harga_jual_apotek.setValue(margin+this.harga_netto_apotek.value); 
  }

  reset(){
    this.tgl_berlaku.setValue(null);
    this.harga_jual_apotek.setValue(0);
    this.prosentase_profit.setValue(0);
  }

  insertHargaJual(){
    let data = this.FormInputSetting.value;
    data.id_item = this.id_item.value;
    data.tgl_berlaku = this.utilityService.onFixingDatepickerSyncfusion(data.tgl_berlaku)
    this.settingHargaJualService.insert(data).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Success', result.message)
        .then(() => {
          this.reset();
          this.reloadDetail()
        });
    })
  }

  updateObat(){
    let data = this.FormInputData.value;
    this.settingHargaJualService.update(data).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Success', result.message)
        .then(() => {
          // this.reset();
          // this.reloadDetail()
        });
    })
  }

  get kode_obat() { return this.FormInputData.get('kode_obat') }
  get nama_obat() { return this.FormInputData.get('nama_obat') }
  get id_item() { return this.FormInputData.get('id_item') }
  get id_grup_obat() { return this.FormInputData.get('id_grup_obat') }
  get id_pabrik() { return this.FormInputData.get('id_pabrik') }
  get id_cara_pakai_obat() { return this.FormInputData.get('id_cara_pakai_obat') }

  get harga_netto_apotek() { return this.FormInputSetting.get('harga_netto_apotek') }
  get prosentase_profit() { return this.FormInputSetting.get('prosentase_profit') }
  get tgl_berlaku() { return this.FormInputSetting.get('tgl_berlaku') }
  get pajak() { return this.FormInputSetting.get('pajak') }
  get harga_jual_apotek() { return this.FormInputSetting.get('harga_jual_apotek') }


}
