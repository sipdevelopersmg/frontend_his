import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PemesananService } from 'src/app/modules/MM/services/pemasukan/pemesanan/pemesanan.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import * as GridConfig from './json/grid.config.json'
@Component({
  selector: 'app-daftar-pemesanan',
  templateUrl: './daftar-pemesanan.component.html',
  styleUrls: ['./daftar-pemesanan.component.css']
})
export class DaftarPemesananComponent implements OnInit {

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
    public pemesananService: PemesananService,
  ) { }

  ngAfterViewInit(): void {
    // this.GridData.Grid.refresh();
  }

  ngOnInit(): void {
    this.pemesananService.onInitList();
  }

  handlePencarianFilter(args){
    this.pemesananService.onGetAllByParamsSource(args);
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
        this.router.navigateByUrl('dashboard/MM/pemesanan/input-pemesanan');
        break;
      case 'Edit':
        const kontrak_id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.kontrak_id));
        this.router.navigate(['dashboard/MM/pemesanan/view-pemesanan', kontrak_id, "GRAHCIS"]);
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
