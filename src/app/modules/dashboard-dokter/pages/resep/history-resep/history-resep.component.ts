import { Component, OnInit, ViewChild } from '@angular/core';
import { EditSettingsModel, GridModel } from '@syncfusion/ej2-angular-grids';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { DaftarHistoryResepModel, InsertGridResepModel } from '../../../models/resep.model';
import { DashboardDokterService } from '../../../services/dashboard-dokter.service';
import { ResepDokterService } from '../../../services/resep-dokter/resep-dokter.service';
import * as GridConfig from './json/grid.json';

@Component({
    selector: 'app-history-resep',
    templateUrl: './history-resep.component.html',
    styleUrls: ['./history-resep.component.css']
})
export class HistoryResepComponent implements OnInit {

    public GridConfig = GridConfig;

    /**
     * @DaftarHistoryResep  
     * @Model DaftarHistoryResepModel
     * @Keterangan Variable untuk menyimpan datasource Daftar History Resep
    */
    DaftarHistoryResep: DaftarHistoryResepModel[];

    /**
     * @GridDetailResepEditSettings  
     * @Model EditSettingsModel
     * @Keterangan Variable untuk mensetting Edit Setting pada Grid
    */
    GridDetailResepEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };

    /**
     * @GridDetailResepToolbar  
     * @Model any
     * @Keterangan Variable untuk mensetting Toolbar pada Grid
    */
    GridDetailResepToolbar: any[];

    /**
     * @GridDetailResepDataSource  
     * @Model any
     * @Keterangan Variable untuk mensetting Datasource pada Grid
    */
    GridDetailResepDataSource: any[];

    /**
     * @GridDetailResepColumns  
     * @Model any
     * @Keterangan Variable untuk mensetting Columns pada Grid
    */
    GridDetailResepColumns = GridConfig;

    /**
     * @DropdownFields
     * @Keterangan Variable untuk mapping Dropdown 
    */
    DropdownFields: object = { text: "text", value: "text" };

    /**
     * @DokterEntryDatasource
     * @Keterangan Dropdown Dokter Entry Datasource
    */
    DokterEntryDatasource: any[] = [
        { id: 1, text: "dr. Anastasia Nadia", },
    ];

    @ViewChild('gridDetailResep') gridDetailResep:MolGridComponent

    dataSource: any = [];
    dataSourceChild :any = [];
    childGrid: GridModel;

    constructor(
        public resepDokterService: ResepDokterService 
    ) { }

    ngOnInit(): void {
        // this.DaftarHistoryResep = this.History.HistoryResep;
        this.childGrid = {
            dataSource: this.dataSourceChild,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            columns: this.GridConfig.columnsChild
          }
    }

    onLihatDaftarObat(HistoryDetailObat: any): void {
        this.dataSource = HistoryDetailObat.details
        this.mapingRacikan(HistoryDetailObat.details);
    }

    mapingRacikan(details){
        this.dataSourceChild = [];
        details.map((item) => {
            this.dataSourceChild.push(...item.racikans);
        });
        this.childGrid = {
            dataSource: this.dataSourceChild,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            columns: this.GridConfig.columnsChild
        }
    }

    rowDataBound(args: any) {
        var is_racikan = args.data.is_racikan;
        if (!is_racikan) {
            //here hide which parent row has no child records
            args.row.querySelector('td').innerHTML = " ";
            args.row.querySelector('td').className = "e-customizedExpandcell";
        } else {
            // args.row.classList.add('is-racikan');
        }
    }

    onDataBound(args: any) {
        this.gridDetailResep.Grid.detailRowModule.expandAll();
    }

    onSearchHistoryResep(): void {

    }
}
