import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import * as Config from '../json/akomodasi-rawat-inap.config.json';

@Component({
    selector: 'app-list-detail-akomodasi',
    templateUrl: './list-detail-akomodasi.component.html',
    styleUrls: ['./list-detail-akomodasi.component.css']
})
export class ListDetailAkomodasiComponent implements OnInit {

    Config = Config;

    private GridDetailAkomodasi: MolGridComponent = null;
    @Input('ListAkomodasiDetailDatasource') GridDetailAkomodasiDatasource: any[];
    GridDetailAkomodasiToolbar: any[];
    GridDetailAkomodasiEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDetailAkomodasiSelectedData: any;

    @Output('onSendTogglingModal') onSendTogglingModal = new EventEmitter<boolean>();

    ngOnInit(): void {
        this.GridDetailAkomodasiToolbar = [
            { text: 'Extract Data', tooltipText: 'Extract Data', prefixIcon: 'fas fa-cog fa-sm', id: 'extract_data' },
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridDetailAkomodasi = component;
    }

    handleSelectedRow(args: any): void {
        this.GridDetailAkomodasiSelectedData = args.data;
    }

    handleToolbarClick(args: any): void {
        let id = args.item.id;

        switch (id) {
            case "extract_data":
                this.onExtractDataDetailAkomodasi();
                break;
            case "add":
                this.onSendTogglingModal.emit(true);
                break;
            case "delete":
                this.onDeleteDetailAkomodasi();
                break;
            default:
                break;
        }
    }

    onExtractDataDetailAkomodasi(): void {

    }

    onSubmitAddDetailAkomodasi(): void {

    }

    onDeleteDetailAkomodasi(): void {

    }
}
