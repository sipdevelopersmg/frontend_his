import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { ReturPemakaianInternalTanpaEdService } from '../../../services/retur-pemakaian-internal/retur-pemakaian-internal-tanpa-ed.service';
import * as configGrid from './json/grid.config.json'

@Component({
  selector: 'app-daftar-retur-pemakaian-internal',
  templateUrl: './daftar-retur-pemakaian-internal.component.html',
  styleUrls: ['./daftar-retur-pemakaian-internal.component.css']
})
export class DaftarReturPemakaianInternalComponent implements OnInit {

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
      { text: 'No. Retur Pemakaian', value: 'trpi.nomor_kontrak' },
      { text: 'Stockroom', value: 'mss.nama_stockroom' },
      { text: 'PIC Pemberi', value: 'trpi.pic_pemberi' },
      { text: 'PIC Penerima', value: 'trpi.pic_penerima' },
      { text: 'Status Transaksi', value: 'trpi.status_transaksi' },
  ];

  GridConfig = configGrid;
  SelectedData
  dataSource:any;

  @ViewChild('GridData') GridData: MolGridComponent;

  constructor(
    private router: Router,
    private encryptionService: EncryptionService,
    public returPemakaianInternalTanpaEdService: ReturPemakaianInternalTanpaEdService,
  ) { }

  ngAfterViewInit(): void {
    // this.GridData.Grid.refresh();
    this.handlePencarianFilter([])
  }

  ngOnInit(): void {
    this.returPemakaianInternalTanpaEdService.onInitList();
  }

  handlePencarianFilter(args){
    this.returPemakaianInternalTanpaEdService.onGetAllByParamsSource(args);
    // setTimeout(()=>{
      this.GridData.Grid.refresh();
    // },500)
  }

  handleinitialized(component: MolGridComponent){
    this.GridData = component
  }

  handleClickButtonNav(args: any): void {
    switch (args) {
      case 'Add':
        this.router.navigateByUrl('dashboard/MM_TE/retur-pemakaian-internal-tanpa-ed/input-retur-pemakaian-internal-tanpa-ed');
        break;
      case 'Edit':
        const id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.retur_pemakaian_internal_id));
        this.router.navigate(['dashboard/MM_TE/retur-pemakaian-internal-tanpa-ed/view-retur-pemakaian-internal-tanpa-ed', id, "GRAHCIS"]);
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

  }

}
