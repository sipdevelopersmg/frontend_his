import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { AssemblyTanpaEdService } from '../../../services/assembly-tanpa-ed/assembly-tanpa-ed.service';
import * as GridConfig from './json/grid.config.json'
@Component({
  selector: 'app-daftar-assembly-tanpa-ed',
  templateUrl: './daftar-assembly-tanpa-ed.component.html',
  styleUrls: ['./daftar-assembly-tanpa-ed.component.css']
})
export class DaftarAssemblyTanpaEdComponent implements OnInit {

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
      { text: 'No Assembly', value: 'tr.nomor_assembly' },
      { text: 'Tgl Assembly', value: 'tr.tanggal_assembly' },
      { text: 'Nama Stockroom', value: 'mss.nama_stockroom' },
      { text: 'Kode Item', value: 'tr.kode_item' },
      { text: 'Nama Item', value: 'msi.nama_item' },
      { text: 'Batch Number', value: 'tr.batch_number' },
      { text: 'Status Transaksi', value: 'tr.status_transaksi' },
  ];

  GridConfig = GridConfig;
  SelectedData
  dataSource: any;

  GridData: MolGridComponent = null;

  constructor(
      private router: Router,
      private encryptionService: EncryptionService,
      public assemblyTanpaEdService: AssemblyTanpaEdService,
  ) { }

  ngOnInit(): void {
      this.assemblyTanpaEdService.onInitList();
  }

  ngAfterViewInit(): void {
      setTimeout(() => {
          this.handlePencarianFilter([]);
      }, 1);
  }

  handlePencarianFilter(args: any) {
      this.assemblyTanpaEdService.onGetAllByParamsSource(args);
      this.GridData.Grid.refresh();
  }

  handleinitialized(component: MolGridComponent) {
      this.GridData = component
  }

  handleClickButtonNav(args: any): void {
      switch (args) {
          case 'Add':
              this.router.navigateByUrl('dashboard/MM_TE/assembly-tanpa-ed/input-assembly-tanpa-ed');
              break;
          case 'Edit':
              const id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.assembly_id));
              this.router.navigate(['dashboard/MM_TE/assembly-tanpa-ed/view-assembly-tanpa-ed', id, "GRAHCIS"]);
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
