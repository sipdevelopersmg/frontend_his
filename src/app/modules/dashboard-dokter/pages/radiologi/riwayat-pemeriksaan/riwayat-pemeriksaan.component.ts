import { Component, OnInit } from '@angular/core';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import * as GridConfig from '../json/GridRadiologi.json';

@Component({
    selector: 'app-riwayat-pemeriksaan',
    templateUrl: './riwayat-pemeriksaan.component.html',
    styleUrls: ['./riwayat-pemeriksaan.component.css']
})
export class RiwayatPemeriksaanComponent implements OnInit {

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

    constructor() { }

    ngOnInit(): void {
    }

    onToolbarClick(args: any): void {

    }

    onRowSelected(args: any): void {

    }
}
