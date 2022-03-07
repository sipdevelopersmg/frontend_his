import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MM} from 'src/app/api/MM'
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import * as LookupGridGrupItem from './json/lookupGrupItem.json'
import * as LookupGridPabrik from './json/lookupGridPabrik.json'
import * as LookupGridCaraPakai from './json/LookupGridCaraPakai.json'
import * as GridConfig from './json/grid.config.json'
import * as GridConfigItem from './json/gridItem.config.json'
import { PHARMACY } from 'src/app/api/PHARMACY';

@Component({
  selector: 'app-setting-harga-jual',
  templateUrl: './setting-harga-jual.component.html',
  styleUrls: ['./setting-harga-jual.component.css']
})
export class SettingHargaJualComponent implements OnInit {
  public inputFieldState = 'detail'
  
  urlGrupItem = MM.SETUP_DATA.SETUP_GROUP_ITEM.GET_ALL_BY_PARMS;
  LookupGridGrupItem = LookupGridGrupItem;
  @ViewChild('LookupKodeGrupItem') LookupKodeGrupItem: OrgInputLookUpKodeComponent;
  
  urlPabrik = MM.SETUP_DATA.SETUP_PABRIK.GET_ALL_BY_PARMS;
  LookupGridPabrik = LookupGridPabrik;
  @ViewChild('LookupKodePabrik') LookupKodePabrik: OrgInputLookUpKodeComponent;

  urlCaraPakai = PHARMACY.SETUP_DATA.SETUP_CARA_PAKAI_OBAT.GET_ALL_BY_PARAMS;
  LookupGridCaraPakai = LookupGridCaraPakai;
  @ViewChild('LookupKodeCaraPakai') LookupKodeCaraPakai: OrgInputLookUpKodeComponent;
  GridConfig=GridConfig;
  GridConfigItem=GridConfigItem;
  dataSourceDetail = [];
  dataSourceItem = [];
  
  FormInputData: FormGroup;
  FormInputSetting: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.FormInputData = this.formBuilder.group({
      kode_obat:[],
      nama_obat:[],
      id_item: [0, []],
      id_grup_item: [0, []],
      id_pabrik: [0, []],
      id_cara_pakai: [0, []],
    });
    this.FormInputSetting = this.formBuilder.group({
      harga_beli_terakhir:[0, []],
      profit:[0, []],
      tanggal_berlaku:[null, []],
      pajak:[0, []],
      harga_jual:[0, []],
    })
  }

  handleGetDetail(){
    this.LookupKodeCaraPakai.resetValue();
    this.LookupKodeGrupItem.resetValue();
    this.LookupKodePabrik.resetValue();
  }

  heandleSelectedGrupItem(args: any): void {
    this.id_grup_item.setValue(args.id_grup_item);
  }

  heandleSelectedPabrik(args: any): void {
    this.id_pabrik.setValue(args.id_pabrik);
  }

  heandleSelectedCaraPakai(args: any): void {
    this.id_cara_pakai.setValue(args.id_cara_pakai);
  }

  getDataItem(args:any){
    console.log(args)
  }

  getDetail(args:any){
    console.log(args)
  }

  get kode_obat() { return this.FormInputData.get('kode_obat') }
  get nama_obat() { return this.FormInputData.get('nama_obat') }
  get id_item() { return this.FormInputData.get('id_item') }
  get id_grup_item() { return this.FormInputData.get('id_grup_item') }
  get id_pabrik() { return this.FormInputData.get('id_pabrik') }
  get id_cara_pakai() { return this.FormInputData.get('id_cara_pakai') }

  get harga_beli_terakhir() { return this.FormInputSetting.get('harga_beli_terakhir') }
  get profit() { return this.FormInputSetting.get('profit') }
  get tanggal_berlaku() { return this.FormInputSetting.get('tanggal_berlaku') }
  get pajak() { return this.FormInputSetting.get('pajak') }
  get harga_jual() { return this.FormInputSetting.get('harga_jual') }


}
