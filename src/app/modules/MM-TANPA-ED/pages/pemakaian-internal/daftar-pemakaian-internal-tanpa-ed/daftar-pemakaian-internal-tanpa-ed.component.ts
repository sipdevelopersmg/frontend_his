import { Component, OnInit, ViewChild } from '@angular/core';
import * as GridConfig from './json/grid.config.json';
import {Location} from '@angular/common'
import { PemakaianInternalTanpaEdService } from '../../../services/pemakaian-internal/pemakaian-internal-tanpa-ed.service';
import { Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
@Component({
  selector: 'app-daftar-pemakaian-internal-tanpa-ed',
  templateUrl: './daftar-pemakaian-internal-tanpa-ed.component.html',
  styleUrls: ['./daftar-pemakaian-internal-tanpa-ed.component.css']
})
export class DaftarPemakaianInternalTanpaEdComponent implements OnInit {

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
      { text: 'Nomor Pemakaian', value: 'tpi.nomor_pemakaian_internal' },
      { text: 'Stockroom', value: 'mss.nama_stockroom' },
      { text: 'PIC Pemberi', value: 'tpi.pic_pemberi' },
      { text: 'PIC Penerima', value: 'tpi.pic_penerima' },
      { text: 'Status', value: 'tpi.judul_kontrak' },
  ];

  GridConfig = GridConfig;
  SelectedData
  dataSource:any;

  @ViewChild('GridData') GridData: MolGridComponent;

  constructor(
    private router: Router,
    private encryptionService: EncryptionService,
    public pemakaianInternalTanpaEdService: PemakaianInternalTanpaEdService,
  ) { }

  ngAfterViewInit(): void {
    // this.GridData.Grid.refresh();
  }

  ngOnInit(): void {
    this.pemakaianInternalTanpaEdService.onInitList();
    this.handlePencarianFilter([]);
  }

  handlePencarianFilter(args){
    this.pemakaianInternalTanpaEdService.onGetAllByParamsSource(args);
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
        this.router.navigateByUrl('dashboard/MM_TE/pemakaian-internal-tanpa-ed/input-pemakaian-internal-tanpa-ed');
        break;
      case 'Edit':
        const id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.pemakaian_internal_id));
        this.router.navigate(['dashboard/MM_TE/pemakaian-internal-tanpa-ed/view-pemakaian-internal-tanpa-ed', id, "GRAHCIS"]);
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
