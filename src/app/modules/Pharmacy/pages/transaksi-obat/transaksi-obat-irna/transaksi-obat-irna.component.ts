import { Component, OnInit, ViewChild } from '@angular/core';
import {MM} from 'src/app/api/MM'
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import * as LookupGridRuangan from './json/LookupGridRuangan.json'
import * as GridConfig from './json/gridPasien.config.json'
import * as GridConfigResep from './json/gridResep.config.json'
import { FormGroup, FormBuilder } from '@angular/forms';
import { GridModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { ResepDokterIrnaService } from 'src/app/modules/dashboard-dokter/services/resep-dokter-irna/resep-dokter-irna.service';
import { TransaksiObatIrnaService } from '../../../services/transaksi-obat/transaksi-obat-irna/transaksi-obat-irna.service';
@Component({
  selector: 'app-transaksi-obat-irna',
  templateUrl: './transaksi-obat-irna.component.html',
  styleUrls: ['./transaksi-obat-irna.component.css']
})
export class TransaksiObatIrnaComponent implements OnInit {
  urlRuangan = MM.SETUP_DATA.SETUP_COA.GET_ALL_BY_PARMS;
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
      return  data1['qty_resep'] + ' ' +data1['nama_satuan'] 
  }
  constructor(
    private formBuilder: FormBuilder,
    private resepDokterIrnaService: ResepDokterIrnaService,
    public transaksiObatIrnaService: TransaksiObatIrnaService,
  ) { }

  ngOnInit(): void {
    
    this.formInput = this.formBuilder.group({
      nama_pasien: ['', []],
      umur: ['', []],
      bed : ['', []],
      dokter : ['', []],
      nomor_rm : ['', []],
      nomor_registrasi : ['', []],
    });

    this.childGrid = {
      dataSource: this.DataSourceDetailResepRacikan,
      queryString: "resep_detail_id",
      rowHeight: 30,
      allowResizing: true,
      allowTextWrap: true,
      textWrapSettings: { wrapMode: 'Both' },
      columns: this.GridConfigResep.columnsChild
    }
    this.set(1);
  }
  
  heandleSelectedRuangan(args: any): void {
    // this.id_ruangan.setValue(args.id_ruangan);
    this.handleClickResep = false;
  }

  set(id_register){
    this.resepDokterIrnaService.onGetByIdRegisterToTrans(id_register).subscribe((result)=>{
      this.transaksiObatIrnaService.setResep(result.data)
      console.log(result.data);
    })
  }

  handleSelectedRow(args:any): void{
    console.log(args)
    this.currentRegisterId = args.data.id_register;

    this.formInput.setValue({
      nama_pasien     :args.data.nama_pasien,
      umur            :args.data.umur,
      bed             :args.data.bed,
      dokter          :args.data.dokter,
      nomor_rm        :args.data.nomor_rm,
      nomor_registrasi:args.data.nomor_registrasi,
    });

    this.resepDokterIrnaService.onGetByIdRegisterToTrans(this.currentRegisterId).subscribe((result)=>{
      this.transaksiObatIrnaService.setResep(result.data)
    })
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
    this.resepDokterIrnaService.onGetById(id).subscribe((result)=>{
      this.DataSourceDetailResep = result.data.details;
      this.GridDetailResep.refresh();
      this.mapingRacikan(result.data.details);
    })
  }

  mapingRacikan(details){
    this.DataSourceDetailResepRacikan = [];
    details.map((item) => {
      this.DataSourceDetailResepRacikan.push(...item.racikans);
    });
    
    this.childGrid = {
      dataSource    : this.DataSourceDetailResepRacikan,
      queryString   : "resep_detail_id",
      rowHeight     : 30,
      allowResizing : true,
      allowTextWrap : true,
      textWrapSettings: { wrapMode: 'Both' },
      columns       : this.GridConfigResep.columnsChild
    }
  }

  handelClickLihatresep(){
    this.handleClickResep = false;
  }

  handleClickSimpan(){
    this.transaksiObatIrnaService.Insert(this.currentResepId).subscribe((result)=>{
      this.handleClickResep = false;
      this.resepDokterIrnaService.onGetByIdRegisterToTrans(this.currentRegisterId).subscribe((result)=>{
        this.transaksiObatIrnaService.setResep(result.data)
      })
    })
  }

}