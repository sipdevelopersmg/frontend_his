import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PermintaanMutasiTanpaEdService } from 'src/app/modules/MM-TANPA-ED/services/mutasi-tanpa-ed/permintaan-mutasi-tanpa-ed.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import * as GridConfig from './json/grid.config.json'
@Component({
  selector: 'app-daftar-permintaan-mutasi-tanpa-ed',
  templateUrl: './daftar-permintaan-mutasi-tanpa-ed.component.html',
  styleUrls: ['./daftar-permintaan-mutasi-tanpa-ed.component.css']
})
export class DaftarPermintaanMutasiTanpaEdComponent implements OnInit {

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
      { text: 'No Permintaan Mutasi', value: 'tm.nomor_permintaan_mutasi' },
      { text: 'Stocroom Pemberi', value: 'mss_pemberi.nama_stockroom' },
      { text: 'Stocroom Penerima', value: 'mss_penerima.nama_stockroom' },
      { text: 'Status Mutasi', value: 'tm.status_mutasi' },
  ];

  GridConfig = GridConfig;
  SelectedData: any;
  dataSource: any;

  @ViewChild('GridData') GridData: MolGridComponent;

  constructor(
      private router: Router,
      private encryptionService: EncryptionService,
      public permintaanMutasiTanpaEdService: PermintaanMutasiTanpaEdService,
  ) { }

  ngOnInit(): void {
      this.permintaanMutasiTanpaEdService.onInitList();
  }

  ngAfterViewInit(): void {
      setTimeout(() => {
          this.handlePencarianFilter([]);
      }, 1);
  }

  handlePencarianFilter(args) {
      this.permintaanMutasiTanpaEdService.onGetAllByParamsSource(args);
      this.GridData.Grid.refresh();
  }

  handleinitialized(component: MolGridComponent) {
      this.GridData = component
  }

  handleClickButtonNav(args: any): void {
      switch (args) {
          case 'Add':
              this.router.navigateByUrl('dashboard/MM_TE/permintaan-mutasi-tanpa-ed/input-permintaan-mutasi-tanpa-ed');
              break;
          case 'Edit':
              const mutasi_id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.mutasi_id));
              this.router.navigate(['dashboard/MM_TE/permintaan-mutasi-tanpa-ed/view-permintaan-mutasi-tanpa-ed', mutasi_id, "GRAHCIS"]);
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
      let status_transaksi = args.data.status_mutasi;

      if (status_transaksi == "APPROVED") {
          args.row.classList.add('e-validation-background');
      }

      if (status_transaksi == "CANCELED") {
          args.row.classList.add('e-canceled-background');
      }
  }
}
