import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { RefundObatIrdaService } from '../../../services/refund-obat/refund-obat-irda/refund-obat-irda.service';
import * as GridConfig from './json/grid.config.json'
@Component({
  selector: 'app-refund-obat-irda-daftar',
  templateUrl: './refund-obat-irda-daftar.component.html',
  styleUrls: ['./refund-obat-irda-daftar.component.css']
})
export class RefundObatIrdaDaftarComponent implements OnInit {

  ButtonNav: ButtonNavModel[] = [
    { Id: 'Add', Captions: 'Add', Icons1: 'fa-plus fa-sm' },
    { Id: 'Edit', Captions: 'Lihat Detail', Icons1: 'fa-edit fa-sm' }
  ];

  GridDataToolbar = [
    { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
    { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
    { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
    'Search'
  ];

  FilterColumnDatasource: any[] = [
      { text: 'No. Refund', value: 'tpo.nomor_retur_penjualan_obat' },
      { text: 'No. Penjualan', value: 'tpo.nomor_penjualan_obat' },
      { text: 'Nama Outlet', value: 'pso.nama_outlet' },
      { text: 'Status Refund', value: 'tpo.judul_kontrak' },
  ];

  GridConfig = GridConfig;
  SelectedData
  dataSource:any;

  @ViewChild('GridData') GridData: MolGridComponent;

  constructor(
    private router: Router,
    private encryptionService: EncryptionService,
    public refundObatIrdaService: RefundObatIrdaService,
  ) { }

  ngAfterViewInit(): void {
    // this.GridData.Grid.refresh();
    this.handlePencarianFilter([]);
  }

  ngOnInit(): void {
    
  }

  handlePencarianFilter(args){
    this.refundObatIrdaService.onGetAllByParamsSource(args);
    // setTimeout(()=>{
      // this.GridData.Grid.refresh();
    // },500)
  }

  handleinitialized(component: MolGridComponent){
    this.GridData = component
  }

  handleClickButtonNav(args: any): void {
    switch (args) {
      case 'Add':
        this.router.navigateByUrl('dashboard/Pharmacy/refund-obat/refund-obat-irda');
        break;
      case 'Edit':
        const id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.retur_penjualan_obat_id));
        this.router.navigate(['dashboard/Pharmacy/refund-obat/refund-obat-irda-detail', id, "GRAHCIS"]);
        break;
      case 'Delete':
        // this.DeleteData(this.SelectedData.id_person, this.SelectedData['is_active']);
        break;
      default:
        break;
    }
  }

  handleSelectedRow(args: any): void {
    this.SelectedData = args.data;
    console.log(this.SelectedData)
  }

  handleRowDataBound(args: any): void {
    let status_transaksi = args.data.status_transaksi;

    if (status_transaksi == "VALIDATED") {
      args.row.classList.add('e-validation-background');
    }
    
    if(status_transaksi == "CANCELED"){
      args.row.classList.add('e-canceled-background');
    }
    
    if(status_transaksi == "CLOSED"){
      args.row.classList.add('e-closed-background');
    }

  }
}
