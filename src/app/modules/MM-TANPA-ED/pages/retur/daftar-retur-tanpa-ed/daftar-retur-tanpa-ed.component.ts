import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { ReturPembelianTanpaEdService } from '../../../services/retur-pembelian-tanpa-ed/retur-pembelian-tanpa-ed.service';
import * as GridConfig from './json/grid.config.json'
@Component({
  selector: 'app-daftar-retur-tanpa-ed',
  templateUrl: './daftar-retur-tanpa-ed.component.html',
  styleUrls: ['./daftar-retur-tanpa-ed.component.css']
})
export class DaftarReturTanpaEdComponent implements OnInit {

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
      { text: 'No. Retur', value: 'trp.nomor_retur_pembelian' },
      { text: 'Stockroom', value: 'mss.nama_stockroom' },
      { text: 'Supplier', value: 'sup.nama_supplier' },
      { text: 'Status Retur', value: 'trp.status_transaksi' },
  ];

  GridConfig = GridConfig;
  SelectedData: any;
  dataSource: any;

  GridData: MolGridComponent = null;

  constructor(
      private router: Router,
      private encryptionService: EncryptionService,
      public returPembelianTanpaEdService: ReturPembelianTanpaEdService,
  ) { }

  ngOnInit(): void {
      this.returPembelianTanpaEdService.onInitList();
  }

  ngAfterViewInit(): void {
      setTimeout(() => {
          this.handlePencarianFilter([]);
      }, 1);
  }

  handlePencarianFilter(args: any) {
      this.returPembelianTanpaEdService.onGetAllByParamsSource(args);
      this.GridData.Grid.refresh();
  }

  handleinitialized(component: MolGridComponent) {
      this.GridData = component
  }

  handleClickButtonNav(args: any): void {
      switch (args) {
          case 'Add':
              this.router.navigateByUrl('dashboard/MM/retur-pembelian/input-retur-pembelian');
              break;
          case 'Edit':
              const retur_pembelian_id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.retur_pembelian_id));
              this.router.navigate(['dashboard/MM/retur-pembelian/view-retur-pembelian', retur_pembelian_id, "GRAHCIS"]);
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
      console.log(this.SelectedData);
  }

  handleRowDataBound(args: any): void {
      let status_transaksi = args.data.status_transaksi;

      if (status_transaksi == "VALIDATED") {
          args.row.classList.add('e-validation-background');
      }

      if (status_transaksi == "CANCELED") {
          args.row.classList.add('e-canceled-background');
      }

      if (status_transaksi == "CLOSED") {
          args.row.classList.add('e-closed-background');
      }
  }

}
