import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PersetujuanMutasiService } from 'src/app/modules/MM/services/mutasi/persetujuan-mutasi/persetujuan-mutasi.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import * as GridConfig from './json/grid.config.json'

@Component({
  selector: 'app-daftar-persetujuan-mutasi',
  templateUrl: './daftar-persetujuan-mutasi.component.html',
  styleUrls: ['./daftar-persetujuan-mutasi.component.css']
})
export class DaftarPersetujuanMutasiComponent implements OnInit {

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
      { text: 'No. Kontrak', value: 'tks.nomor_kontrak' },
      { text: 'Judul Kontrak', value: 'tks.judul_kontrak' },
  ];

  GridConfig = GridConfig;
  SelectedData
  dataSource:any;

  @ViewChild('GridData') GridData: MolGridComponent;

  constructor(
    private router: Router,
    private encryptionService: EncryptionService,
    public persetujuanMutasiService: PersetujuanMutasiService,
  ) { }

  ngAfterViewInit(): void {
    // this.GridData.Grid.refresh();
  }

  ngOnInit(): void {
    this.persetujuanMutasiService.onInitList();
  }

  handlePencarianFilter(args){
    this.persetujuanMutasiService.onGetAllByParamsSource(args);
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
        this.router.navigateByUrl('dashboard/MM/permintaan-mutasi/input-permintaan-mutasi');
        break;
      case 'Edit':
        const penerimaan_id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.penerimaan_id));
        this.router.navigate(['dashboard/MM/permintaan-mutasi/view-permintaan-mutasi', penerimaan_id, "GRAHCIS"]);
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
