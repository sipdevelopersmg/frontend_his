import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { SetupDokterService } from 'src/app/modules/PIS/services/setup-data/setup-dokter/setup-dokter.service';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { DaftarPasienService } from '../../services/daftar-pasien/daftar-pasien.service';
import { DashboardDokterService } from '../../services/dashboard-dokter.service';
import * as Config from './json/GridPasienPerDokter.config.json';

@Component({
    selector: 'app-daftar-pasien-per-dokter',
    templateUrl: './daftar-pasien-per-dokter.component.html',
    styleUrls: ['./daftar-pasien-per-dokter.component.css']
})
export class DaftarPasienPerDokterComponent implements OnInit, AfterViewInit {

    /**
     * Variable untuk menyimpan Configurasi Grid
     * @Json Config
    */
    GridConfig = Config;

    GridIRJA: MolGridComponent = null;
    GridIRJADatasource: any[];
    GridIRJAEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridIRJAToolbar: any[] = [
        { text: 'Visit', tooltipText: 'Visit', prefixIcon: 'fas fa-user-check fa-sm', id: 'visit' },
        { text: 'Riwayat Pemeriksaan', tooltipText: 'Riwayat Pemeriksaan', prefixIcon: 'fas fa-clipboard-list fa-sm', id: 'riwayat_pemeriksaan' },
        "Search"
    ];
    GridIRJACommands = [
        {
            "buttonOption": {
                "id": 'btnInfoIRJA',
                "content": "",
                "iconCss": "fas fa-info-circle",
                "cssClass": 'btn btn-primary btn-sm',
            },
        }
    ];
    GridIRJASelectedRow: any;

    GridIRNA: MolGridComponent = null;
    GridIRNADatasource: any[];
    GridIRNAEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridIRNAToolbar: any[];

    GridIRDA: MolGridComponent = null;
    GridIRDADatasource: any[];
    GridIRDAEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridIRDAToolbar: any[];

    constructor(
        private router: Router,
        private dokterService: SetupDokterService,
        private navigationService: NavigationService,
        private daftarPasienService: DaftarPasienService,
        private dashboardDokterService: DashboardDokterService
    ) { }

    ngOnInit(): void {
        this.dokterService.onGetAllDokter();

        this.onGetDokterId();

        this.dashboardDokterService.onDestroySidebarMenuWhenNavigateToDaftarPasien();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.navigationService.ButtonSidebarMenuState.next(false);
        }, 1);
    }

    onGetDokterId(): void {
        const UserData: IAuthenticationResponseModel = JSON.parse(localStorage.getItem("UserData"));

        const full_name = UserData.full_name.replace('dr. ', '');

        this.dokterService.onGetDokterByDokterName(full_name)
            .subscribe((result) => {
                this.onGetPasienIRJAByDokterId(result['id_dokter']);
            });
    }

    onGetPasienIRJAByDokterId(DokterId: number): void {
        this.daftarPasienService.onGetAllDaftarPasienIRJA(DokterId)
            .subscribe((result) => {
                this.GridIRJADatasource = result.data;
            });
    }

    handleSelectedTabId(args: any): void {

    }

    handleSelectedRowIRJA(args: any): void {
        this.GridIRJASelectedRow = args.data;
    }

    handleToolbarClickIRJA(args: any): void {
        switch (args.item.id) {
            case 'visit':
                this.daftarPasienService.ActivePasien.next({});
                this.daftarPasienService.onSetActivePasien(this.GridIRJASelectedRow);
                this.router.navigateByUrl('Dokter/asesmen-awal');
                break;
            default:
                break;
        }
    }

    handleInitializedIRJA(component: MolGridComponent): void {
        this.GridIRJA = component;
    }

    handleClickCommandGridIRJA(args: any): void {
        console.log(args);

        this.router.navigateByUrl('Dokter/asesmen-awal');
    }

    handleActionCompleteIRJA(args: any): void { }
}
