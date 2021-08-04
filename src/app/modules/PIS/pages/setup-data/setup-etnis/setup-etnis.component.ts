import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import * as Config from './json/setup-usulan.config.json';

import * as ConfigBatch from './json/setup-batch.config.json';


@Component({
  selector: 'app-setup-etnis',
  templateUrl: './setup-etnis.component.html',
  styleUrls: ['./setup-etnis.component.css']
})
export class SetupEtnisComponent implements OnInit {

  CheckButtonStatus: object[] = [
    { id: 'active', value: true, label: 'Cito', checked: false, inputFieldState: 'normal' },
  ];

  public GridUsulanConfig = Config;
  GridDataToolbar : Object[];

  modalRef: BsModalRef;
  @ViewChild('modalDialogBatch') modalDialogBatch: TemplateRef<any>;

  // ** Grid Setup Role Button Properties
  private gridDaftarBarang: MolGridComponent = null;
  GridDaftarBarangEditSettings: EditSettingsModel = { allowAdding: true, allowEditing: true };
  GridDaftarBarangColums = ConfigBatch;
  GridDaftarBarangToolbar = ["Add"];
  GridDaftarBarangDataSource: any;

  constructor(        private modalService: BsModalService,
    ) { }

  ngOnInit(): void {
    this.GridDataToolbar = [
      { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
    ];
  }

  onClickButton() {
      // ** Set Modal Size
      this.modalRef = this.modalService.show(this.modalDialogBatch);
  }

  onSelectedRow(args: any): void {

  }

  onToolbarClick(args: any): void {
      const item = args.item.id;

      switch (item) {
          case 'add':
              break;
          default:
              break;
      }
  }

  onInitalizedGrid(component: MolGridComponent) {
      this.gridDaftarBarang = component;
  }

}
