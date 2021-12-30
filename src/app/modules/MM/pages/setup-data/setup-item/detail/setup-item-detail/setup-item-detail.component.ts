import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MM } from 'src/app/api/MM';
import { SetupItemService } from 'src/app/modules/MM/services/setup-data/setup-item/setup-item.service';
import { SetupPabrikService } from 'src/app/modules/MM/services/setup-data/setup-pabrik/setup-pabrik.service';
import { SetupSatuanService } from 'src/app/modules/MM/services/setup-data/setup-satuan/setup-satuan.service';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as LookupGridGrupItem from '../../json/lookupGrupItem.json'
import * as LookupGridSupplier from '../../json/lookupsupplier.json'
import * as LookupGridSetupItem from '../../json/lookupitem.json'
import * as GridSatuan from '../../json/gridSatuan.config.json'
import * as GridUrai from '../../json/gridUrai.config.json'
import * as GridAssembly from '../../json/gridAssembly.config.json'
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
@Component({
  selector: 'app-setup-item-detail',
  templateUrl: './setup-item-detail.component.html',
  styleUrls: ['./setup-item-detail.component.css']
})
export class SetupItemDetailComponent implements OnInit {
  public inputFieldState = 'input'
  // ** Variable untuk mengatur Form Input Data Pabrik
  FormInputDetail: FormGroup;
  FormInputSatuan: FormGroup;
  FormInputUrai: FormGroup;
  FormInputAssembly: FormGroup;

  MaritalSetupPabrikDropdownField: object = { text: 'nama_pabrik', value: 'id_pabrik' };
  MaritalSatuanDropdownField: object = { text: 'nama_satuan', value: 'kode_satuan' };

  urlGrupItem = MM.SETUP_DATA.SETUP_GROUP_ITEM.GET_ALL_BY_PARMS;
  urlSupplier = MM.SETUP_DATA.SETUP_SUPPLIER.GET_ALL_BY_PARMS;
  urlSetupItem = MM.SETUP_DATA.SETUP_ITEM.GET_ALL_BY_PARMS;
  
  LookupGridSetupItem = LookupGridSetupItem
  LookupGridGrupItem = LookupGridGrupItem
  LookupGridSupplier = LookupGridSupplier
  GridConfigSatuan = GridSatuan
  GridUrai = GridUrai
  GridAssembly = GridAssembly

  GridDataToolbar = [
    { text: 'Hapus', tooltipText: 'Hapus', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'hapus' },
    { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
  ];

  GridDataToolbarUrai = [
    { text: 'Hapus', tooltipText: 'Hapus', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'hapus' },
  ];

  @ViewChild('LookupKodeSupplier') LookupKodeSupplier: OrgInputLookUpKodeComponent;
  @ViewChild('LookupKodeGrupItem') LookupKodeGrupItem: OrgInputLookUpKodeComponent;
  @ViewChild('LookupKodeSetupItem') LookupKodeSetupItem: OrgInputLookUpKodeComponent;
  @ViewChild('LookupKodeSetupItemAssembly') LookupKodeSetupItemAssembly: OrgInputLookUpKodeComponent;
  @ViewChild('GridDataSatuan') GridDataSatuan: MolGridComponent;
  @ViewChild('GridDataUrai') GridDataUrai: MolGridComponent;
  @ViewChild('GridDataAssembly') GridDataAssembly: MolGridComponent;

  dataSatuan = [];
  dataSatuanSelected = null;
  currectStatusSatuan = false;

  dataUrai = []
  dataUraiSelected = null;

  dataAssembly = []
  dataAssemblySelected = null;

  constructor(
    private formBuilder: FormBuilder,
    public setupItemService: SetupItemService,
    public setupPabrikService: SetupPabrikService,
    public utilityService: UtilityService,
    public setupSatuanService: SetupSatuanService,

  ) {
    this.FormInputDetail = this.formBuilder.group({
      id_item: [0, []],
      id_grup_item: [0, []],
      id_pabrik: [0, []],
      id_supplier: [0, []],
      kode_item: ['', []],
      barcode: ['', []],
      nama_item: ['', []],
      kode_satuan: ['', []],
      id_temperatur_item: [0, []],
      batas_maksimal_pesan: [0, []],
      batas_maksimal_pakai: [0, []],
      batas_maksimal_mutasi: [0, []],
      batas_maksimal_jual: [0, []],
      batas_stok_kritis: [0, []],
      prosentase_stok_kritis: [0, []],
      harga_beli_terakhir: [0, []],
      hpp_average: [0, []],
      prosentase_default_profit: [0, []],
      is_ppn: [0, []],
    });

    this.FormInputSatuan = this.formBuilder.group({
      kode_satuan: ['', []],
      isi: [0, []],
      is_satuan_beli: [false, []],
    })

    this.FormInputUrai = this.formBuilder.group({
      id_item_urai: [0, []],
      qty_urai: [0, []],
    })

    this.FormInputAssembly = this.formBuilder.group({
      id_item_assembly:[0,[]],
      qty_Assembly :[0,[]]
    })
  }

  setValue(Data): void{
    console.log(Data);
    this.FormInputDetail.reset();

    this.LookupKodeSupplier.kodeValue = Data.kode_supplier;
    this.LookupKodeSupplier.titleValue = Data.nama_supplier;

    this.LookupKodeGrupItem.kodeValue = Data.kode_grup_item;
    this.LookupKodeGrupItem.titleValue = Data.grup_item;

    this.FormInputDetail.setValue({
        id_item: Data.id_item,
        id_grup_item: Data.id_grup_item,
        id_pabrik: Data.id_pabrik,
        id_supplier: Data.id_supplier,
        kode_item: Data.kode_item,
        barcode: Data.barcode,
        nama_item: Data.nama_item,
        kode_satuan: Data.kode_satuan,
        id_temperatur_item: Data.id_temperatur_item,
        batas_maksimal_pesan: Data.batas_maksimal_pesan,
        batas_maksimal_pakai: Data.batas_maksimal_pakai,
        batas_maksimal_mutasi: Data.batas_maksimal_mutasi,
        batas_maksimal_jual: Data.batas_maksimal_jual,
        batas_stok_kritis: Data.batas_stok_kritis,
        prosentase_stok_kritis: Data.prosentase_stok_kritis,
        harga_beli_terakhir: Data.harga_beli_terakhir,
        hpp_average: Data.hpp_average,
        prosentase_default_profit: Data.prosentase_default_profit,
        is_ppn: Data.is_ppn,
    });

  }

  ngOnInit(): void {
    this.setupPabrikService.setDataSource();
    this.setupSatuanService.setDataSource();
  }

  handleSelectedRowSatuan(args){
    this.dataSatuanSelected = args.data
  }

  handleSelectedRowUrai(args){
    this.dataUraiSelected = args.data
  }

  handleSelectedRowAssembly(args){
    this.dataAssemblySelected = args.data
  }

  handleToolbarClickSatuan(args){
    const item = args.item.id;
    switch (item) {
        case 'hapus':
          console.log(this.dataSatuanSelected)
          let data = {
            id_item     :this.id_item.value,
            kode_satuan :this.dataSatuanSelected.kode_satuan,
          }
          this.setupItemService.deleteSatuanByItem(data).subscribe((result)=>{
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Hapus', result.message)
              .then(() => {
                this.loadSatuan()
              });  
          })
          break;
        case 'edit':
          this.currectStatusSatuan = true;
          this.FormInputSatuan.setValue({
            kode_satuan:this.dataSatuanSelected.kode_satuan,
            isi : this.dataSatuanSelected.isi,
            is_satuan_beli:this.dataSatuanSelected.is_satuan_beli
          })
          break;
        default:
          break;
    }
  }

  handleToolbarClickUrai(args){
    const item = args.item.id;
    switch (item) {
        case 'hapus':
          let data = {
            id_item     :this.id_item.value,
            id_item_urai:this.dataUraiSelected.id_item_urai,
          }
          this.setupItemService.deleteUraiByItem(data).subscribe((result)=>{
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Hapus', result.message)
              .then(() => {
                this.loadUrai()
              });  
          })
          break;
        case 'edit':
          break;
        default:
          break;
    }
  }

  handleToolbarClickAssembly(args){
    const item = args.item.id;
    switch (item) {
        case 'hapus':
          let data = {
            id_item     :this.id_item.value,
            id_item_assembly :this.dataAssemblySelected.id_item_assembly,
          }
          this.setupItemService.deleteAssemblyByItem(data).subscribe((result)=>{
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Hapus', result.message)
              .then(() => {
                this.loadAssembly()
              });  
          })
          break;
        case 'edit':
          break;
        default:
          break;
    }
  }

  handleSelectedTabId(TabId: string): void {
    // console.log(TabId)
    switch (TabId){
      case 'Satuan':
        this.loadSatuan();
        break;
      case 'Urai':
        this.loadUrai();
        break;
      case 'Assembly':
        this.loadAssembly();
        break;
      default:
        break;
    }
  }

  heandleSelectedGrupItem(args: any): void {
    this.id_grup_item.setValue(args.id_grup_item);
  }

  heandleSelectedSupplier(args: any): void {
    this.id_supplier.setValue(args.id_supplier);
  }

  handleClickUpdateItem():void{
    let Data = this.FormInputDetail.value;
    this.setupItemService.onPutEdit(Data)
    .subscribe((result) => {
      this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
        .then(() => {

        });
    });
  }

  heandleSelectedSetupItem(args):void{
    this.id_item_urai.setValue(args.id_item);
  }

  heandleSelectedSetupItemAssembly(args):void{
    this.id_item_assembly.setValue(args.id_item);
  }

  handleClickTambahSatuan():void{
    let data = this.FormInputSatuan.value
    data.id_item = this.id_item.value
    this.setupItemService.insertSatuanByItem(data).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Simpan', result.message)
        .then(() => {
          this.loadSatuan()
          this.FormInputSatuan.setValue({
            kode_satuan:"",
            isi:0,
            is_satuan_beli:false
          })
        }); 
    })
  }

  handleClickEditSatuan(){
    let data = this.FormInputSatuan.value
    data.id_item = this.id_item.value
    this.setupItemService.updateSatuanByItem(data).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Ubah', result.message)
        .then(() => {
          this.loadSatuan()
          this.FormInputSatuan.setValue({
            kode_satuan:"",
            isi:0,
            is_satuan_beli:false
          })
          this.currectStatusSatuan = false
        }); 
    })
  }

  handleClickBatalSatuan(){
    this.FormInputSatuan.setValue({
      kode_satuan:"",
      isi:0,
      is_satuan_beli:false
    })
    this.currectStatusSatuan = false
  }

  handleClickTambahUrai():void{
    let data = this.FormInputUrai.value
    data.id_item = this.id_item.value
    this.setupItemService.insertUraiByItem(data).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Simpan', result.message)
        .then(() => {
          this.loadUrai()
          this.FormInputUrai.setValue({
            id_item_urai:0,
            qty_urai:0,
          })
          this.LookupKodeSetupItem.resetValue()
        }); 
    })
  }

  handleClickTambahAssembly(): void{
    let data = this.FormInputAssembly.value
    data.id_item = this.id_item.value
    this.setupItemService.insertAssemblyByItem(data).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Simpan', result.message)
        .then(() => {
          this.loadAssembly()
          this.FormInputAssembly.setValue({
            id_item_assembly:0,
            qty_Assembly:0,
          })
          this.LookupKodeSetupItemAssembly.resetValue()
        }); 
    })
  }

  loadSatuan(){
    this.setupItemService.getSatuanByItem(this.id_item.value).subscribe((result)=>{
        this.dataSatuan = result.data
        this.GridDataSatuan.Grid.refresh();
    })
  }

  loadUrai(){
    this.setupItemService.getUraiByItem(this.id_item.value).subscribe((result)=>{
      this.dataUrai = result.data
      this.GridDataUrai.Grid.refresh();
    })
  }

  loadAssembly(){
    this.setupItemService.getAssemblyByItem(this.id_item.value).subscribe((result)=>{
      this.dataAssembly = result.data
      this.GridDataAssembly.Grid.refresh();
    })
  }

  get id_item() { return this.FormInputDetail.get('id_item') }
  get id_grup_item() { return this.FormInputDetail.get('id_grup_item') }
  get id_supplier() { return this.FormInputDetail.get('id_supplier') }
  get id_item_urai() { return this.FormInputUrai.get('id_item_urai')}
  get id_item_assembly() { return this.FormInputAssembly.get('id_item_assembly')}

}
