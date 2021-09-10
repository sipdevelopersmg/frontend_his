import { Component, OnInit } from '@angular/core';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DashboardDokterService } from '../../../services/dashboard-dokter.service';
import * as GridConfig from '../json/GridRadiologi.json';

@Component({
    selector: 'app-riwayat-pemeriksaan-rad',
    templateUrl: './riwayat-pemeriksaan.component.html',
    styleUrls: ['./riwayat-pemeriksaan.component.css']
})
export class RiwayatPemeriksaanRadComponent implements OnInit {

    // ** Grid Daftar Order Properties
    GridDaftarOrderEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDaftarOrderToolbar: any = ["Search"];
    GridDaftarOrderDataSource: any;
    GridDaftarOrderColumns = GridConfig;

    // ** Grid Detail Order Properties
    GridDetailOrderEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDetailOrderToolbar: any[] = ["Search"];
    GridDetailOrderDataSource: any[];
    GridDetailOrderColumns = GridConfig;

    public get width(): any {
        return window.innerWidth;
    };

    constructor(private dashboardDokterService: DashboardDokterService) { }

    ngOnInit(): void {
        // this.dashboardDokterService.onSetSidebarMenuForDashboardDokter();
    }

    onToolbarClick(args: any): void {

    }

    onRowSelected(args: any): void {

    }
}
