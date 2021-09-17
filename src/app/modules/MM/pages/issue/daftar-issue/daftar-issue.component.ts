import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { PemakaianInternalService } from '../../../services/issue/pemakaian-internal.service';
import * as GridConfig from './json/grid.config.json'

@Component({
  selector: 'app-daftar-issue',
  templateUrl: './daftar-issue.component.html',
  styleUrls: ['./daftar-issue.component.css']
})
export class DaftarIssueComponent implements OnInit {

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
    public pemakaianInternalService: PemakaianInternalService,
  ) { }

  ngAfterViewInit(): void {
    // this.GridData.Grid.refresh();
  }

  ngOnInit(): void {
    this.pemakaianInternalService.onInitList();
  }

  handlePencarianFilter(args){
    this.pemakaianInternalService.onGetAllByParamsSource(args);
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
        this.router.navigateByUrl('dashboard/MM/issue/input-issue');
        break;
      case 'Edit':
        const id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.pemakaian_internal_id));
        this.router.navigate(['dashboard/MM/issue/view-issue', id, "GRAHCIS"]);
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
