import { Component, OnInit } from '@angular/core';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import * as Config from '../json/akomodasi-rawat-inap.config.json';

@Component({
    selector: 'app-list-akomodasi',
    templateUrl: './list-akomodasi.component.html',
    styleUrls: ['./list-akomodasi.component.css']
})
export class ListAkomodasiComponent implements OnInit {

    Config = Config;

    private GridData: MolGridComponent = null;
    GridDatasource: any[];
    GridDataToolbar: any[];
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridSelectedData: any;

    constructor() { }

    ngOnInit(): void {
        this.GridDataToolbar = ['Search'];
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    handleSelectedRow(args: any): void {
        this.GridSelectedData = args.data;
    }
}
