import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuditStokOpnameService } from 'src/app/modules/MM/services/stok_opname/audit_stok_opname/audit-stok-opname.service';
import { AuditStokOpnameTanpaSettingService } from 'src/app/modules/MM/services/stok_opname/audit_stok_opname_tanpa_setting/audit-stok-opname-tanpa-setting.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import * as GridConfig from './json/grid.config.json'

@Component({
  selector: 'app-daftar-audit-stok-opname-tanpa-setting',
  templateUrl: './daftar-audit-stok-opname-tanpa-setting.component.html',
  styleUrls: ['./daftar-audit-stok-opname-tanpa-setting.component.css']
})
export class DaftarAuditStokOpnameTanpaSettingComponent implements OnInit {

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
      public auditStokOpnameTanpaSettingService: AuditStokOpnameTanpaSettingService,
  ) { }

  ngOnInit(): void {
      this.auditStokOpnameTanpaSettingService.onInitList();
  }

  ngAfterViewInit(): void {
      setTimeout(() => {
          this.handlePencarianFilter([]);
      }, 1);
  }

  handlePencarianFilter(args: any) {
      this.auditStokOpnameTanpaSettingService.onGetAllByParamsSource(args);
      this.GridData.Grid.refresh();
  }

  handleinitialized(component: MolGridComponent) {
      this.GridData = component
  }

  handleClickButtonNav(args: any): void {
      switch (args) {
          case 'Add':
              this.router.navigateByUrl('dashboard/MM/stok-opname/audit-stok-opname-tanpa-setting/input-stok-opname-tanpa-setting');
              break;
          case 'Edit':
              const id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.audit_stok_opname_id));
              this.router.navigate(['dashboard/MM/stok-opname/audit-stok-opname-tanpa-setting/view-stok-opname-tanpa-setting', id, "GRAHCIS"]);
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
      let status_transaksi = args.data.status_trans;

      if (status_transaksi == "VALIDATED") {
          args.row.classList.add('e-validation-background');
      }

      if (status_transaksi == "CANCELED") {
          args.row.classList.add('e-canceled-background');
      }
  }

}
