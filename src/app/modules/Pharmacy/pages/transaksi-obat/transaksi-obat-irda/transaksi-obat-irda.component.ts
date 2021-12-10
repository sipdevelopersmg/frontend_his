import { Component, OnInit, ViewChild } from '@angular/core';
import * as LookupGridRuangan from './json/LookupGridRuangan.json';
import * as GridConfig from './json/gridPasien.config.json';
import * as GridConfigResep from './json/gridResep.config.json';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GridModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { API_BILLING } from 'src/app/api/BILLING';
import { AdmisiPasienRawatInapService } from 'src/app/modules/PIS/services/IRNA/admisi-pasien-rawat-inap/admisi-pasien-rawat-inap.service';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { ResepDokterIrdaService } from 'src/app/modules/dashboard-dokter/services/resep-dokter-irda/resep-dokter-irda.service';
import { TransaksiObatIrdaService } from '../../../services/transaksi-obat/transaksi-obat-irda/transaksi-obat-irda.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
@Component({
  selector: 'app-transaksi-obat-irda',
  templateUrl: './transaksi-obat-irda.component.html',
  styleUrls: ['./transaksi-obat-irda.component.css']
})
export class TransaksiObatIrdaComponent implements OnInit {

  urlRuangan = API_BILLING.SETUP_DATA.SETUP_POLI.GET_ALL_POLI_FOR_LOOKUP_RAWAT_INAP;
  LookupGridRuangan = LookupGridRuangan;
  GridConfig = GridConfig;
  GridConfigResep = GridConfigResep; 
  @ViewChild('LookupKodeRuangan') LookupKodeRuangan: OrgInputLookUpKodeComponent;
  DataSourcePasien:any = [];
  DataSourceResep:any = [];
  DataSourceDetailResep:any = [];
  DataSourceDetailResepRacikan:any = [];
  formInput: FormGroup;
  inputFieldState = 'detail';
  childGrid: GridModel;
  @ViewChild('GridDetailResep') GridDetailResep: GridComponent;
  handleClickResep:boolean = false;
  currentResepId = null;
  currentRegisterId = 1;
  public keterangan = (field: string, data1: object) => {
    return  data1['nama_obat'] +', '+
            data1['ket_label'] +', '+
            data1['ket_aturan'];
  }

  public quantity = (field: string, data1: object) => {
      return  data1['qty_harian'] + ' ' +data1['nama_satuan'] 
  }

  public hargajual= (field: string, data1: object) => {
    return (!data1['is_racikan'])? data1['harga_jual_apotek'] * data1['qty_harian']:data1['harga_jual_apotek']; 
  }

  @ViewChild('GridPasien') GridPasien:MolGridComponent

  constructor(
    private formBuilder: FormBuilder,
    private resepDokterIrdaService: ResepDokterIrdaService,
    public transaksiObatIrdaService: TransaksiObatIrdaService,
    public admisiPasienRawatInapService: AdmisiPasienRawatInapService,
    private utilityService:UtilityService,
    // public setupPoliService: SetupPoliService
  ) { }

  ngOnInit(): void {
    
    this.formInput = this.formBuilder.group({
      nama_pasien: ['', []],
      umur: ['', []],
      bed : ['', []],
      dokter : ['', []],
      nomor_rm : ['', []],
      nomor_registrasi : ['', []],
      total_bayar_resep: [0,[]]
    });

    this.childGrid = {
      dataSource: this.DataSourceDetailResepRacikan,
      queryString: "resep_detail_id",
      rowHeight: 30,
      allowResizing: true,
      allowTextWrap: true,
      textWrapSettings: { wrapMode: 'Both' },
      columns: [
        { "field": "nama_obat", "headerText": "Nama Obat"},
        { "field": "qty_racikan", "headerText": "Qty" ,"width":50},
        { "field": "harga_jual_apotek", "headerText": "Harga", "textAlign":"Right", "format": "N2","width":70},
        { "field": "total_harga", "headerText": "Total Harga", "textAlign":"Right", "format": "N2","width":70}
    ]
    }
    this.set(1);
    this.refreshGridPasien();
  }

  refreshGridPasien():void{
    this.transaksiObatIrdaService.onGetPasienIrda([]).subscribe((result)=>{
      this.DataSourcePasien = result.data
      this.GridPasien.Grid.refresh()
    })
  }

  set(id_register){
    this.resepDokterIrdaService.onGetByIdRegisterToTrans(id_register).subscribe((result)=>{
      this.transaksiObatIrdaService.setResep(result.data)
      console.log(result.data);
    })
  }

  handleSelectedRow(args:any): void{
    console.log(args)
    this.currentRegisterId = args.data.id_register;

    this.formInput.setValue({
      nama_pasien       : args.data.nama_pasien,
      umur              : args.data.umur,
      bed               : '',
      dokter            : args.data.nama_dokter,
      nomor_rm          : args.data.no_rekam_medis,
      nomor_registrasi  : args.data.no_register,
      total_bayar_resep : 0,
    });

    this.resepDokterIrdaService.onGetByIdRegisterToTrans(this.currentRegisterId).subscribe((result)=>{
      this.transaksiObatIrdaService.setResep(result.data)
    })
    this.handleClickResep = false;
  }

  handleSelectedRowResep(args:any):void{
    this.handleClickResep = true;
    this.onLoadDetailData(args.data.resep_id);  
    this.currentResepId = args.data.resep_id;
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

  onDataBound(){
    this.GridDetailResep.detailRowModule.expandAll();
  }

  onLoadDetailData(id) {
    this.resepDokterIrdaService.onGetById(id).subscribe((result)=>{
      this.DataSourceDetailResep = result.data.details;
      this.GridDetailResep.refresh();
      this.mapingRacikan(result.data.details);
      let tot =0
      this.DataSourceDetailResep.map((item)=>{
        console.log()
        tot +=  item['is_racikan'] ? item['harga_jual_apotek'] : item['qty_harian'] * item['harga_jual_apotek'];
        this.total_bayar_resep.setValue(tot);
      });
    })
  }

  mapingRacikan(details){
    this.DataSourceDetailResepRacikan = [];
    details.map((item) => {
      item.racikans.map((e)=>{
        return e.total_harga = e.qty_racikan * e.harga_jual_apotek;
      })
      this.DataSourceDetailResepRacikan.push(...item.racikans);
    });
    
    this.childGrid = {
      dataSource    : this.DataSourceDetailResepRacikan,
      queryString   : "resep_detail_id",
      rowHeight     : 30,
      allowResizing : true,
      allowTextWrap : true,
      textWrapSettings: { wrapMode: 'Both' },
      columns       : [
        { "field": "nama_obat", "headerText": "Nama Obat"},
        { "field": "qty_racikan", "headerText": "Qty" ,"width":50},
        { "field": "harga_jual_apotek", "headerText": "Harga", "textAlign":"Right", "format": "N2","width":70},
        { "field": "total_harga", "headerText": "Total Harga", "textAlign":"Right", "format": "N2","width":70}
    ]
    }
  }

  handelClickLihatresep(){
    this.handleClickResep = false;
  }

  handleClickSimpan(){
    this.transaksiObatIrdaService.Insert(this.currentResepId).subscribe((result)=>{
      this.handleClickResep = false;
      this.resepDokterIrdaService.onGetByIdRegisterToTrans(this.currentRegisterId).subscribe((result)=>{
        this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
          .then(() => {
            this.transaksiObatIrdaService.setResep(result.data)
            this.refreshGridPasien();
          });
      })
    })
  }

  get total_bayar_resep (){return this.formInput.get('total_bayar_resep')}

}
