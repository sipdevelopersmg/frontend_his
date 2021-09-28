import { AfterViewInit, Component, OnInit } from '@angular/core';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DaftarPasienService } from '../../../services/daftar-pasien/daftar-pasien.service';
import { DashboardDokterService } from '../../../services/dashboard-dokter.service';
import { LaboratoriumService } from '../../../services/laboratorium/laboratorium.service';
import { RadiologiService } from '../../../services/radiologi/radiologi.service';
import * as GridConfig from '../json/GridRadiologi.json';

@Component({
    selector: 'app-riwayat-pemeriksaan-rad',
    templateUrl: './riwayat-pemeriksaan.component.html',
    styleUrls: ['./riwayat-pemeriksaan.component.css']
})
export class RiwayatPemeriksaanRadComponent implements OnInit, AfterViewInit {

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

    constructor(
        private radiologiService: RadiologiService,
        private daftarPasienService: DaftarPasienService,
        private dashboardDokterService: DashboardDokterService
    ) { }

    ngOnInit(): void {
        // this.dashboardDokterService.onSetSidebarMenuForDashboardDokter();
    }

    ngAfterViewInit(): void {
        this.onGetRiwayatPemeriksaanLab();
    }

    onGetRiwayatPemeriksaanLab(): void {
        const id_register = this.daftarPasienService.ActivePasien.value.id_register;

        this.radiologiService.onGetRiwayatOrderLab(id_register)
            .subscribe((result) => {
                this.GridDaftarOrderDataSource = result.data;
            })
    }

    onToolbarClick(args: any): void {

    }

    onRowSelected(args: any): void {
        let id_order_penunjang = args.data.id_order_penunjang;

        this.radiologiService.onGetDetailRiwayatOrderLab(id_order_penunjang)
            .subscribe((result) => {
                this.GridDetailOrderDataSource = result.data;
            })
    }
}
