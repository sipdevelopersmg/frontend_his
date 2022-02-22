import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import {Location} from "@angular/common"
import * as GridConfigGroup from './json/grid-group.config.json'
import * as GridConfigStockroom from './json/grid-stockroom.config.json'
import * as GridConfigRak from './json/grid-rak.config.json'
import * as GridConfigItem from './json/grid-item.config.json'
import { SettingStokOpnameTanpaEdService } from 'src/app/modules/MM-TANPA-ED/services/stok-opname-tanpa-ed/setting_stok_opname-tanpa-ed/setting-stok-opname-tanpa-ed.service';

@Component({
  selector: 'app-view-setting-stok-opname-tanpa-ed',
  templateUrl: './view-setting-stok-opname-tanpa-ed.component.html',
  styleUrls: ['./view-setting-stok-opname-tanpa-ed.component.css']
})
export class ViewSettingStokOpnameTanpaEdComponent implements OnInit {

  GridConfigGroup = GridConfigGroup
  GridConfigStockroom = GridConfigStockroom
  GridConfigRak = GridConfigRak
  GridConfigItem = GridConfigItem

  formInput: FormGroup;
  inputFieldState='detail';

  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
  ];

  id:any;

  modalRef: BsModalRef;

  @ViewChild('GridStockroom') GridStockroom: MolGridComponent;
  @ViewChild('GridGroup') GridGroup: MolGridComponent;
  @ViewChild('GridRak') GridRak: MolGridComponent;
  @ViewChild('GridItem') GridItem: MolGridComponent;

  dataSourceStockroom:any = []
  dataSourceGroup:any=[]
  dataSourceRak:any=[]
  dataSourceItem:any=[]
  id_jenis_setting_stok_opname = null;

  constructor(
    private formBuilder: FormBuilder,
    public settingStokOpnameTanpaEdService:SettingStokOpnameTanpaEdService,
    private encryptionService: EncryptionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      tanggal_stok_opname:[''],
      nama_jenis_setting_stok_opname:[''],
      keterangan:[''],
    });
  }

  ngAfterViewInit(): void {
    let id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
    this.id = id
    this.onLoadDetailData(id);
  }

  onLoadDetailData(id){
      this.settingStokOpnameTanpaEdService.onGetById(id).subscribe((result)=>{
          this.formInput.setValue({
            tanggal_stok_opname             :result.data.tanggal_stok_opname,
            nama_jenis_setting_stok_opname  :result.data.nama_jenis_setting_stok_opname,
            keterangan                      :result.data.keterangan,
          })
          this.id_jenis_setting_stok_opname    =result.data.id_jenis_setting_stok_opname;
          this.dataSourceStockroom = result.data.stockrooms
          this.dataSourceGroup = result.data.grups
          this.dataSourceRak = result.data.raks
          this.dataSourceItem = result.data.items
      });
  }

  onClickButtonNav(ButtonId: string): void {
    switch (ButtonId) {
        case 'Back':
          this.location.back();
          break;
        default:
          break;
    }
  }

}
