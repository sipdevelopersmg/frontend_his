import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GridModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { ResepDokterIrnaService } from 'src/app/modules/dashboard-dokter/services/resep-dokter-irna/resep-dokter-irna.service';
import { ResepFormulariumIrnaService } from 'src/app/modules/Pharmacy/services/resep-formularium/resep-formularium-irna.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import * as GridConfig from './json/grid.config.json'
@Component({
  selector: 'app-daftar-resep-formularium-irna',
  templateUrl: './daftar-resep-formularium-irna.component.html',
  styleUrls: ['./daftar-resep-formularium-irna.component.css']
})
export class DaftarResepFormulariumIrnaComponent implements OnInit {

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
      { text: 'Nomor Resep', value: 'trd.nomor_resep' }
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
    public resepFormulariumIrnaService: ResepFormulariumIrnaService,
  ) { }

  ngAfterViewInit(): void {
    // this.GridData.Grid.refresh();
  }

  public keterangan = (field: string, data1: object) => {
    return  data1['nama_rute_pemberian_obat'] + ', sehari ' + 
      data1['qty_harian'] +' '+ data1['nama_satuan']+' '+ data1['ket_label']+' '+data1['satuan_aturan_pakai']+ ' ' +data1['ket_aturan'];
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

    this.resepFormulariumIrnaService.onInitList();
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
    this.resepFormulariumIrnaService.onGetAllByResepActiveByRegister(args).subscribe((result)=>{
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
    this.router.navigate(['Dokter/resep-formularium-irna/view-resep-formularium-irna', id, "GRAHCIS"]);
  }

  handleClickButtonNav(args: any): void {
    switch (args) {
      case 'Add':
        this.router.navigateByUrl('Dokter/resep-formularium-irna/input-resep-formularium-irna');
        break;
      case 'Edit':
        const pemesanan_id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.resep_id));
        this.router.navigate(['Dokter/resep-formularium-irna/input-resep-formularium-irna', pemesanan_id, "GRAHCIS"]);
        break;
      case 'pulang':
        this.router.navigateByUrl('Dokter/resep-formularium-irna/pulang-resep-formularium-irna');
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
