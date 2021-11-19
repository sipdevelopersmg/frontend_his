import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GridComponent, GridModel } from '@syncfusion/ej2-angular-grids';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { ResepDokterIrnaService } from '../../../services/resep-dokter-irna/resep-dokter-irna.service';
import * as GridConfig from './json/grid.config.json'

@Component({
  selector: 'app-daftar-resep-irda',
  templateUrl: './daftar-resep-irda.component.html',
  styleUrls: ['./daftar-resep-irda.component.css']
})
export class DaftarResepIrdaComponent implements OnInit {

  ButtonNav: ButtonNavModel[] = [
    { Id: 'Add', Captions: 'Buat Resep Baru', Icons1: 'fa-plus fa-sm' },
    { Id: 'pulang', Captions: 'Resep Pulang', Icons1: 'fa-home fa-sm' },
  ];

  GridDataToolbar = [
    { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
    { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
    { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
    'Search'
  ];

  FilterColumnDatasource: any[] = [
      { text: 'No. Kontrak', value: 'tks.nomor_kontrak' },
      { text: 'Judul Kontrak', value: 'tks.judul_kontrak' },
  ];

  GridConfig = GridConfig;
  SelectedData
  dataSource:any = [];
  dataSourceChild:any = [];
  childGrid: GridModel;
  @ViewChild('GridResepRacikan') GridResepRacikan: GridComponent;
  @ViewChild('GridData') GridData: MolGridComponent;

  constructor(
    private router: Router,
    private encryptionService: EncryptionService,
    public resepDokterIrnaService: ResepDokterIrnaService,
  ) { }

  ngAfterViewInit(): void {
    // this.GridData.Grid.refresh();
  }

  public keterangan = (field: string, data1: object) => {
    console.log('keterangan',data1);
        return  data1['nama_obat'] +' '+
            data1['nama_rute_pemberian_obat'] + ', sehari ' + 
            data1['qty_harian'] +' '+ data1['nama_satuan']+', '+ data1['jumlah_satuan_aturan_pakai']+' '+ data1['nama_satuan']+
            ' tiap '+data1['jumlah_interval_aturan_pakai'] +' '+ data1['nama_interval_aturan_pakai']+' sekali, '+
            data1['label_tambahan_aturan_pakai_obat'];
  }

  public quantity = (field: string, data1: object) => {
    return  data1['qty_harian'] +' '+
            data1['nama_satuan']+'/Hari, untuk '+data1['jumlah_hari']+' Hari';
  }

  GridGroupSettings: object = { showDropArea: false, columns: ['nama_dokter', 'nomor_resep'] };


  ngOnInit(): void {
    this.childGrid = {
      dataSource: this.dataSourceChild,
      queryString: "resep_detail_id",
      rowHeight: 30,
      allowResizing: true,
      allowTextWrap: true,
      textWrapSettings: { wrapMode: 'Both' },
      columns: this.GridConfig.columnsChild
    }

    this.resepDokterIrnaService.onInitList();
    this.handlePencarianFilter([]);
  }

  rowDataBound(args: any) {
    // console.log(args.data.is_racikan)
      // let is_racikan = args.data.is_racikan;
      // if (!is_racikan) {
      //     //here hide which parent row has no child records
      //     args.row.querySelector('td').innerHTML = " ";
      //     args.row.querySelector('td').className = "e-customizedExpandcell";
      // } else {
      // //     // args.row.classList.add('is-racikan');
      // }
  }

  onDataBound() {
      // this.GridResepRacikan.detailRowModule.expandAll();
  }

  handlePencarianFilter(args){
    this.resepDokterIrnaService.onGetAllByResepActiveByRegister(args).subscribe((result)=>{
      this.dataSource = result.data;
      this.mapingRacikan(result.data);
      this.GridResepRacikan.refresh();
    });
  }

  mapingRacikan(details){
    this.dataSourceChild = [];
    details.map((item) => {
        this.dataSourceChild.push(...item.racikans);
    });
    
    this.childGrid = {
      dataSource: this.dataSourceChild,
      queryString: "resep_detail_id",
      rowHeight: 30,
      allowResizing: true,
      allowTextWrap: true,
      textWrapSettings: { wrapMode: 'Both' },
      columns: this.GridConfig.columnsChild
    }
  }
  
  handleClickDetail(args){
    console.log(args.items);
    const id = this.encryptionService.encrypt(JSON.stringify(args.items[0].resep_id));
    this.router.navigate(['Dokter/resep-irna/view-resep-irna', id, "GRAHCIS"]);
  }

  handleClickButtonNav(args: any): void {
    switch (args) {
      case 'Add':
        this.router.navigateByUrl('Dokter/resep-irna/input-resep-irna');
        break;
      case 'Edit':
        const pemesanan_id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.resep_id));
        this.router.navigate(['Dokter/resep-irna/input-resep-irna', pemesanan_id, "GRAHCIS"]);
        break;
      case 'pulang':
        this.router.navigateByUrl('Dokter/resep-irna/pulang-resep-irna');
        break;
      default:
        break;
    }
  }

  handleSelectedRow(args: any): void {
    this.SelectedData = args.data;
    console.log(this.SelectedData)
  }

}
