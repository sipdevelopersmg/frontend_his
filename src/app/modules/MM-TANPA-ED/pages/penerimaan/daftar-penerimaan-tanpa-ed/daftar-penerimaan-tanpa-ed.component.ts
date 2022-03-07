import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { PenerimaanTanpaEdService } from '../../../services/penerimaan-tanpa-ed/penerimaan-tanpa-ed.service';
import * as GridConfig from './json/grid.config.json'
@Component({
  selector: 'app-daftar-penerimaan-tanpa-ed',
  templateUrl: './daftar-penerimaan-tanpa-ed.component.html',
  styleUrls: ['./daftar-penerimaan-tanpa-ed.component.css']
})
export class DaftarPenerimaanTanpaEdComponent implements OnInit {

  ButtonNav: ButtonNavModel[] = [
    { Id: 'Add', Captions: 'Add', Icons1: 'fa-plus fa-sm' },
    { Id: 'Edit', Captions: 'Lihat Detail', Icons1: 'fa-edit fa-sm' }
  ];

  GridDataToolbar = [
      // { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
      // { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
      // { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
      // 'Search'
  ];

  FilterColumnDatasource: any[] = [
      { text: 'No. Penerimaan', value: 'tp.namor_penerimaan' },
      { text: 'Jenis Penerimaan', value: 'msjp.jenis_penerimaan' },
      { text: 'Nama Stockroom', value: 'mss.nama_stockroom' },
      { text: 'No Pemesanan', value: 'po.nomor_pemesanan' },
      { text: 'Status', value: 'tp.status_transaksi' },
  ];

  GridConfig = GridConfig;
  SelectedData: any;
  dataSource: any;

  GridData: MolGridComponent = null;

  constructor(
      private router: Router,
      private encryptionService: EncryptionService,
      public penerimaanTanpaEdService: PenerimaanTanpaEdService,
  ) { }

  ngOnInit(): void {
      this.penerimaanTanpaEdService.onInitList();
  }

  handlePencarianFilter(args: any) {
      this.penerimaanTanpaEdService.onGetAllByParamsSource(args);
      this.GridData.Grid.refresh();
  }

  ngAfterViewInit(): void {
      setTimeout(() => {
          this.handlePencarianFilter([]);
      }, 1);
  }

  handleinitialized(component: MolGridComponent) {
      this.GridData = component
  }

  handleClickButtonNav(args: any): void {
      switch (args) {
          case 'Add':
              this.router.navigateByUrl('dashboard/MM_TE/penerimaan-tanpa-ed/input-penerimaan-tanpa-ed');
              break;
          case 'Edit':
              const penerimaan_id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.penerimaan_id));
              this.router.navigate(['dashboard/MM_TE/penerimaan-tanpa-ed/view-penerimaan-tanpa-ed', penerimaan_id, "GRAHCIS"]);
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

      if (status_transaksi == "CANCELED") {
          args.row.classList.add('e-canceled-background');
      }
  }
}
