import { Component, OnInit } from '@angular/core';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DaftarHistoryResepModel, InsertGridResepModel } from '../../../models/resep.model';
import { DashboardDokterService } from '../../../services/dashboard-dokter.service';
import * as GridConfig from '../json/HistoryResep.json';

@Component({
    selector: 'app-history-resep',
    templateUrl: './history-resep.component.html',
    styleUrls: ['./history-resep.component.css']
})
export class HistoryResepComponent implements OnInit {

    public History = GridConfig;

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

    constructor(private dashboardDokterService: DashboardDokterService) { }

    ngOnInit(): void {
        this.DaftarHistoryResep = this.History.HistoryResep;

        this.dashboardDokterService.onSetSidebarMenuForDashboardDokter();
    }

    onLihatDaftarObat(HistoryDaftarObat: DaftarHistoryResepModel): void {
        this.GridDetailResepDataSource = HistoryDaftarObat.detail_resep;
    }

    onSearchHistoryResep(): void {

    }
}
