import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommandClickEventArgs, CommandColumnService, CommandModel, ContextMenuItem, GridComponent, QueryCellInfoEventArgs, RecordDoubleClickEventArgs, RowSelectEventArgs, TextWrapSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-grids';
import { Columns } from './grid.model';

export interface Data {
    OrderID: string;
    CustomerID: string;
    Freight: number;
    OrderDate: Date;
}

@Component({
    selector: 'mol-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css'],
    providers: [CommandColumnService]
})
export class MolGridComponent implements OnInit, AfterViewInit {

    @ViewChild('Grid') public Grid: GridComponent;

    @Input('grid-id') gridId: string;
    @Input('grid-width') gridWidth: any;
    @Input('grid-height') gridHeight: any;
    @Input('grid-lines') gridLines: string;
    @Input('grid-paging') gridPaging: any;
    @Input('grid-filtering') gridFiltering: boolean = false;
    @Input('grid-initial-page') gridInitialPage: any;
    @Input('grid-toolbar') toolbar: ToolbarItems[];
    @Input('grid-editTemplate') gridEditTemplate: Object;
    @Input('grid-editSettings') gridEditingSettings: EditSettingsModel = {};
    @Input('grid-DataSource') gridDataSource: any = [];
    @Input('grid-ContextMenuItems') gridContextMenuItems: ContextMenuItem[];
    @Input('grid-selectionSettings') gridSelectionSettings: any;

    @Input('columns') columns: Columns[];
    @Input('urlGetColumns') urlGetColumns: string;
    @Input('command-columns') commandColumns: CommandModel[];
    @Input('textWrapSettings') textWrapSettings: TextWrapSettingsModel = null;

    @Output('row-selected') onRowSelected = new EventEmitter<any>();
    @Output('enter-pressed') onKeyPressed = new EventEmitter<any>();
    @Output('double-click') onDoubleClicked = new EventEmitter<any>();
    @Output('action-begin') onActionBegined = new EventEmitter<any>();
    @Output('action-complete') onActionCompleted = new EventEmitter<any>();
    @Output('toolbar-click') onToolbarClicked = new EventEmitter<any>();
    @Output('command-click') onCommandClicked = new EventEmitter<any>();
    @Output('initialized') initialized: EventEmitter<MolGridComponent> = new EventEmitter<MolGridComponent>();
    @Output('load-grid') onLoadedGrid = new EventEmitter<any>();
    @Output('query-cell-info') onQueryingCellInfo = new EventEmitter<any>();

    allowTextWrap = false;
    constructor() {
    }

    ngOnInit(): void {
        if (this.textWrapSettings) {
            this.allowTextWrap = true
        }
        // this.columns = [
        //     { headerText: 'NO ANTRIAN', width: 300, field: 'NoAntrian', visible: false },
        //     { headerText: 'NO ANTRIAN', width: 200, field: 'JamAdmisi', visible: false },
        //     { headerText: 'TGL ADMISI', width: 200, field: 'TglAdmisi', visible: false },
        //     { headerText: 'JAM MASUK', width: 200, field: 'JamMasukRawat', visible: false },
        //     { headerText: 'JAM MASUK', width: 200, field: 'JamMasukRawat', visible: false },
        //     { headerText: 'JAM MASUK', width: 200, field: 'JamMasukRawat', visible: false },
        //     { headerText: 'JAM MASUK', width: 200, field: 'JamMasukRawat', visible: false },
        //     { headerText: 'JAM MASUK', width: 200, field: 'JamMasukRawat', visible: false },
        //     { headerText: 'JAM MASUK', width: 200, field: 'JamMasukRawat', visible: false },
        // ]; 
    }

    ngAfterViewInit(): void {
        this.initialized.emit(this);
    }

    onRowSelecting(args: RowSelectEventArgs): void {
        this.onRowSelected.emit(args);
    }

    onKeyPressing(args: any): void {
        this.onKeyPressed.emit(args);
    }

    onDoubleClick(args: RecordDoubleClickEventArgs): void {
        this.onDoubleClicked.emit(args.rowData);
    }

    onActionBegin(args: any): void {
        this.onActionBegined.emit(args);
    }

    onActionComplete(args: any): void {
        this.onActionCompleted.emit(args);
    }

    onToolbarClick(args: ClickEventArgs): void {
        this.onToolbarClicked.emit(args);
    }

    onCommandClick(args: CommandClickEventArgs): void {
        this.onCommandClicked.emit(args);
    }

    onLoadGrid(args: any): void {
        this.onLoadedGrid.emit(args);
    }

    onQueryCellInfo(args: QueryCellInfoEventArgs): void {
        this.onQueryingCellInfo.emit(args);
    }
}
