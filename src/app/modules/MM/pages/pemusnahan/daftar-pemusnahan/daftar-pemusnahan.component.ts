import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { PemusnahanService } from '../../../services/pemusnahan/pemusnahan.service';
import { RepackingService } from '../../../services/repacking/repacking.service';
import * as GridConfig from './json/grid.config.json'

@Component({
  selector: 'app-daftar-pemusnahan',
  templateUrl: './daftar-pemusnahan.component.html',
  styleUrls: ['./daftar-pemusnahan.component.css']
})
export class DaftarPemusnahanComponent implements OnInit {

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
      { text: 'No Pemusnahan Stok', value: 'tps.nomor_pemusnahan_stok' },
      { text: 'Tgl Pemusnahan Stok', value: 'tps.tanggal_pemusnahan_stok' },
      { text: 'Nama Stockroom', value: 'mss.nama_stockroom' }
  ];

  GridConfig = GridConfig;
  SelectedData
  dataSource: any;

  GridData: MolGridComponent = null;

  constructor(
      private router: Router,
      private encryptionService: EncryptionService,
      public pemusnahanService: PemusnahanService,
  ) { }

  ngOnInit(): void {
      this.pemusnahanService.onInitList();
  }

  ngAfterViewInit(): void {
      setTimeout(() => {
          this.handlePencarianFilter([]);
      }, 1);
  }

  handlePencarianFilter(args: any) {
      this.pemusnahanService.onGetAllByParamsSource(args);
      this.GridData.Grid.refresh();
  }

  handleinitialized(component: MolGridComponent) {
      this.GridData = component
  }

  handleClickButtonNav(args: any): void {
      switch (args) {
          case 'Add':
              this.router.navigateByUrl('dashboard/MM/pemusnahan-stok/input-pemusnahan-stok');
              break;
          case 'Edit':
              const id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.pemusnahan_stok_id));
              this.router.navigate(['dashboard/MM/pemusnahan-stok/view-pemusnahan-stok', id, "GRAHCIS"]);
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
