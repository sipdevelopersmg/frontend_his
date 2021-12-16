import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PersetujuanMutasiService } from 'src/app/modules/MM/services/mutasi/persetujuan-mutasi/persetujuan-mutasi.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { PemakaianInternalService } from '../../../services/issue/pemakaian-internal.service';
import * as GridConfig from './json/grid.config.json'

@Component({
  selector: 'app-daftar-issue-validation',
  templateUrl: './daftar-issue-validation.component.html',
  styleUrls: ['./daftar-issue-validation.component.css']
})
export class DaftarIssueValidationComponent implements OnInit {

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
    public pemakaianInternalService: PemakaianInternalService,
  ) { }

  ngAfterViewInit(): void {
    // this.GridData.Grid.refresh();
  }

  ngOnInit(): void {
    this.pemakaianInternalService.onInitList();
    this.handlePencarianFilter([])
  }

  handlePencarianFilter(args){
    this.pemakaianInternalService.onGetAllOpenByParams(args);
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
        this.router.navigateByUrl('dashboard/MM/issue-validation/view-issue-validation');
        break;
      case 'Edit':
        const pemakaian_internal_id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.pemakaian_internal_id));
        this.router.navigate(['dashboard/MM/issue-validation/view-issue-validation', pemakaian_internal_id, "GRAHCIS"]);
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
