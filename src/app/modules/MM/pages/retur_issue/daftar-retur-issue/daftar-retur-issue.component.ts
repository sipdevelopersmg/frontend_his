import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { ReturIssueService } from '../../../services/retur-issue/retur-issue.service';
import * as configGrid from './json/grid.config.json'
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
@Component({
  selector: 'app-daftar-retur-issue',
  templateUrl: './daftar-retur-issue.component.html',
  styleUrls: ['./daftar-retur-issue.component.css']
})
export class DaftarReturIssueComponent implements OnInit {

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

  GridConfig = configGrid;
  SelectedData
  dataSource:any;

  @ViewChild('GridData') GridData: MolGridComponent;

  constructor(
    private router: Router,
    private encryptionService: EncryptionService,
    public returIssueService: ReturIssueService,
  ) { }

  ngAfterViewInit(): void {
    // this.GridData.Grid.refresh();
  }

  ngOnInit(): void {
    this.returIssueService.onInitList();
  }

  handlePencarianFilter(args){
    this.returIssueService.onGetAllByParamsSource(args);
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
        this.router.navigateByUrl('dashboard/MM/retur-issue/input-retur-issue');
        break;
      case 'Edit':
        const id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.retur_pemakaian_internal_id));
        this.router.navigate(['dashboard/MM/retur-issue/view-retur-issue', id, "GRAHCIS"]);
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
    
    if(status_transaksi == "CANCELED"){
      args.row.classList.add('e-canceled-background');
    }

  }


}
