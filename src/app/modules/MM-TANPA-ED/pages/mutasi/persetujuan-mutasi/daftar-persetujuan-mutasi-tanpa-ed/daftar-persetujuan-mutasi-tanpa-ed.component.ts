import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersetujuanMutasiTanpaEdService } from 'src/app/modules/MM-TANPA-ED/services/mutasi-tanpa-ed/persetujuan-mutasi-tanpa-ed.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import * as GridConfig from './json/grid.config.json'
@Component({
  selector: 'app-daftar-persetujuan-mutasi-tanpa-ed',
  templateUrl: './daftar-persetujuan-mutasi-tanpa-ed.component.html',
  styleUrls: ['./daftar-persetujuan-mutasi-tanpa-ed.component.css']
})
export class DaftarPersetujuanMutasiTanpaEdComponent implements OnInit {

  ButtonNav: ButtonNavModel[] = [
    // { Id: 'Add', Captions: 'Add', Icons1: 'fa-plus fa-sm' },
    { Id: 'Edit', Captions: 'Lihat Detail', Icons1: 'fa-edit fa-sm' }
  ];

  GridDataToolbar = [
      { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
      { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
      { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
      'Search'
  ];

  FilterColumnDatasource: any[] = [
      { text: 'No. Mutasi', value: 'tm.nomor_mutas' },
      { text: 'Stockroom Pemberi', value: 'mss_pemberi.nama_stockroom' },
      { text: 'Stockroom Penerima', value: 'mss_penerima.nama_stockroom' },
      { text: 'Status Mutasi', value: 'tm.status_mutasi' },
  ];

  GridConfig = GridConfig;
  SelectedData: any;
  dataSource: any;

  GridData: MolGridComponent = null;

  id: number = 0;

  constructor(
      private router: Router,
      private encryptionService: EncryptionService,
      public persetujuanMutasiTanpaEdService: PersetujuanMutasiTanpaEdService,
  ) { }

  ngOnInit(): void {
      this.persetujuanMutasiTanpaEdService.onInitList();
  }

  ngAfterViewInit(): void {
      setTimeout(() => {
          this.handlePencarianFilter([]);
      }, 1);
  }   

  handlePencarianFilter(args: any) {
      this.persetujuanMutasiTanpaEdService.onGetAllByParamsSource(args);
      this.GridData.Grid.refresh();
  }

  handleinitialized(component: MolGridComponent) {
      this.GridData = component
  }

  handleClickButtonNav(args: any): void {
      switch (args) {
          case 'Add':
              this.router.navigateByUrl('dashboard/MM_TE/persetujuan-mutasi-tanpa-ed/input-persetujuan-mutasi-tanpa-ed');
              break;
          case 'Edit':
              const mutasi_id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.mutasi_id));
              this.router.navigate(['dashboard/MM_TE/persetujuan-mutasi-tanpa-ed/proses-persetujuan-mutasi-tanpa-ed', mutasi_id, "GRAHCIS"]);
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

}
