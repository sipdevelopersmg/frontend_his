import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EditSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
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

    DokterId: number;

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

    @ViewChild('GridIRNA') GridIRNA: GridComponent;
    GridIRNADatasource: any[];
    GridIRNAEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridIRNAToolbar: any[] = [
        { text: 'Visit', tooltipText: 'Visit', prefixIcon: 'fas fa-user-check fa-sm', id: 'visit' },
        { text: 'Riwayat Pemeriksaan', tooltipText: 'Riwayat Pemeriksaan', prefixIcon: 'fas fa-clipboard-list fa-sm', id: 'riwayat_pemeriksaan' },
        "Search"
    ];
    GridIRNASelectedRow: any;

    GridIRDA: MolGridComponent = null;
    GridIRDADatasource: any[];
    GridIRDAEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridIRDAToolbar: any[];

    JenisRawat: string;

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
                this.DokterId = result['id_dokter'];

                this.onGetPasienIRJAByDokterId(this.DokterId);

                this.onGetPasienIRNAByDokterId(this.DokterId);
            });
    }

    onGetPasienIRJAByDokterId(DokterId: number): void {
        this.daftarPasienService.onGetAllDaftarPasienIRJA(DokterId)
            .subscribe((result) => {
                this.GridIRJADatasource = result.data;
            });
    }

    onGetPasienIRNAByDokterId(DokterId: number): void {
        this.daftarPasienService.onGetAllDaftarPasienIRNA(DokterId)
            .subscribe((result) => {
                this.GridIRNADatasource = result.data;
            })
    }

    handleSelectedTabId(args: any): void {
        this.JenisRawat = args;
    }

    handleSelectedRowIRJA(args: any): void {
        this.GridIRJASelectedRow = args.data;

        this.GridIRJASelectedRow.jenis_rawat = this.JenisRawat;
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
        this.router.navigateByUrl('Dokter/asesmen-awal');
    }

    handleActionCompleteIRJA(args: any): void {

    }

    handleSelectedRowIRNA(args: any): void {
        this.GridIRNASelectedRow = args.data;

        this.GridIRNASelectedRow.jenis_rawat = this.JenisRawat;
    }

    handleToolbarClickIRNA(args: any): void {
        switch (args.item.id) {
            case 'visit':
                this.daftarPasienService.ActivePasien.next({});
                this.daftarPasienService.onSetActivePasien(this.GridIRNASelectedRow);
                this.router.navigateByUrl('Dokter/asesmen-awal');
                break;
            default:
                break;
        }
    }
}
