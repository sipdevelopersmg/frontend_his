import { Component, OnInit } from '@angular/core';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import * as Config from '../json/akomodasi-rawat-inap.config.json';

@Component({
    selector: 'app-list-bed-transfer',
    templateUrl: './list-bed-transfer.component.html',
    styleUrls: ['./list-bed-transfer.component.css']
})
export class ListBedTransferComponent implements OnInit {

    Config = Config;

    private GridBedTransfer: MolGridComponent = null;
    GridBedTransfersource: any[];
    GridBedTransferToolbar: any[];
    GridBedTransferEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridBedTransferSelectedData: any;

    constructor() { }

    ngOnInit(): void {
        this.GridBedTransferToolbar = ['Search'];
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridBedTransfer = component;
    }

    handleSelectedRow(args: any): void {
        this.GridBedTransferSelectedData = args.data;
    }

}
