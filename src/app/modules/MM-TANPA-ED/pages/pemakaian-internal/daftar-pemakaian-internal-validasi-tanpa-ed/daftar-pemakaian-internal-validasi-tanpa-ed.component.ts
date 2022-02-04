import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { PemakaianInternalTanpaEdService } from '../../../services/pemakaian-internal/pemakaian-internal-tanpa-ed.service';
import * as GridConfig from './json/grid.config.json'
@Component({
  selector: 'app-daftar-pemakaian-internal-validasi-tanpa-ed',
  templateUrl: './daftar-pemakaian-internal-validasi-tanpa-ed.component.html',
  styleUrls: ['./daftar-pemakaian-internal-validasi-tanpa-ed.component.css']
})
export class DaftarPemakaianInternalValidasiTanpaEdComponent implements OnInit {

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
      { text: 'No. Pemakaian', value: 'tpi.nomor_kontrak' },
      { text: 'Stockroom', value: 'mss.nama_stockroom' },
      { text: 'Status Transaksi', value: 'tpi.status_transaksi' },

  ];

  GridConfig = GridConfig;
  SelectedData
  dataSource:any;

  @ViewChild('GridData') GridData: MolGridComponent;
  
  id:number=0;
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
    this.handlePencarianFilter([])
  }

  handlePencarianFilter(args){
    this.pemakaianInternalTanpaEdService.onGetAllOpenByParams(args);
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
        // this.router.navigateByUrl('dashboard/MM_TE/pemakaian-internal-validation-tanpa-ed/pemakaian-internal-validation-tanpa-ed');
        break;
      case 'Edit':
        const pemakaian_internal_id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.pemakaian_internal_id));
        this.router.navigate(['dashboard/MM_TE/pemakaian-internal-validation-tanpa-ed/view-pemakaian-internal-validation-tanpa-ed', pemakaian_internal_id, "GRAHCIS"]);
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
