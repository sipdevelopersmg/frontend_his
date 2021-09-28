import { AfterViewInit, Component, OnInit } from '@angular/core';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DaftarPasienService } from '../../../services/daftar-pasien/daftar-pasien.service';
import { DashboardDokterService } from '../../../services/dashboard-dokter.service';
import { LaboratoriumService } from '../../../services/laboratorium/laboratorium.service';
import * as GridConfig from '../json/GridLaboratorium.json'

@Component({
    selector: 'app-riwayat-pemeriksaan-lab',
    templateUrl: './riwayat-pemeriksaan.component.html',
    styleUrls: ['./riwayat-pemeriksaan.component.css']
})
export class RiwayatPemeriksaanLabComponent implements OnInit, AfterViewInit {

    // ** Grid Daftar Order Properties
    GridDaftarOrderEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDaftarOrderToolbar: any = ["Search"];
    GridDaftarOrderDataSource: any[] = [];
    GridDaftarOrderColumns = GridConfig;

    // ** Grid Detail Order Properties
    GridDetailOrderEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDetailOrderToolbar: any[] = ["Search"];
    GridDetailOrderDataSource: any[] = [];
    GridDetailOrderColumns = GridConfig;

    public get width(): any {
        return window.innerWidth;
    };

    constructor(
        private daftarPasienService: DaftarPasienService,
        private laboratoriumService: LaboratoriumService,
        private dashboardDokterService: DashboardDokterService
    ) { }

    ngOnInit(): void {
        /*  this.dashboardDokterService.onSetSidebarMenuForDashboardDokter(); */
    }

    ngAfterViewInit(): void {
        this.onGetRiwayatPemeriksaanLab();
    }

    onGetRiwayatPemeriksaanLab(): void {
        const id_register = this.daftarPasienService.ActivePasien.value.id_register;

        this.laboratoriumService.onGetRiwayatOrderLab(id_register)
            .subscribe((result) => {
                this.GridDaftarOrderDataSource = result.data;
            })
    }

    onToolbarClick(args: any): void {

    }

    onRowSelected(args: any): void {
        let id_order_penunjang = args.data.id_order_penunjang;

        this.laboratoriumService.onGetDetailRiwayatOrderLab(id_order_penunjang)
            .subscribe((result) => {
                this.GridDetailOrderDataSource = result.data;
            })
    }
}
