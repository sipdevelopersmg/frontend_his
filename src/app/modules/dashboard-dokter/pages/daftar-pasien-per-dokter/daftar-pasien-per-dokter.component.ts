import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EditSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { SetupDokterService } from 'src/app/modules/PIS/services/setup-data/setup-dokter/setup-dokter.service';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
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
    GridIRNAEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridIRNAToolbar: any[] = [
        { text: 'Visit', tooltipText: 'Visit', prefixIcon: 'fas fa-user-check fa-sm', id: 'visit' },
        "Search"
    ];
    GridIRNASelectedRow: any;

    @ViewChild('GridIRDA') GridIRDA: GridComponent;
    GridIRDADatasource: any[];
    GridIRDAEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridIRDAToolbar: any[] = [
        { text: 'Visit', tooltipText: 'Visit', prefixIcon: 'fas fa-user-check fa-sm', id: 'visit' },
        "Search"
    ];
    GridIRDASelectedRow: any;

    JenisRawat: string;

    constructor(
        private router: Router,
        private utilityService: UtilityService,
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

                this.onGetPasienIRDAByDokterId(this.DokterId);
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

    onGetPasienIRDAByDokterId(DokterId: number): void {
        this.daftarPasienService.onGetAllDaftarPasienIRDA(DokterId)
            .subscribe((result) => {
                this.GridIRDADatasource = result.data;
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
        if (this.GridIRJASelectedRow) {
            switch (args.item.id) {
                case 'visit':
                    this.daftarPasienService.ActivePasien.next({});
                    this.daftarPasienService.onSetActivePasien(this.GridIRJASelectedRow);
                    this.router.navigateByUrl('Dokter/asesmen-awal');
                    break;
                default:
                    break;
            }
        } else {
            this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Tidak Ada Data Pasien Yang Dipilih');
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
        if (this.GridIRNASelectedRow) {
            switch (args.item.id) {
                case 'visit':
                    this.daftarPasienService.ActivePasien.next({});
                    this.daftarPasienService.onSetActivePasien(this.GridIRNASelectedRow);
                    this.router.navigateByUrl('Dokter/asesmen-awal');
                    break;
                default:
                    break;
            }
        } else {
            this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Tidak Ada Data Pasien Yang Dipilih');
        }
    }

    handleSelectedRowIRDA(args: any): void {
        this.GridIRDASelectedRow = args.data;

        this.GridIRDASelectedRow.jenis_rawat = this.JenisRawat;
    }

    handleToolbarClickIRDA(args: any): void {
        if (this.GridIRDASelectedRow) {
            switch (args.item.id) {
                case 'visit':
                    this.daftarPasienService.ActivePasien.next({});
                    this.daftarPasienService.onSetActivePasien(this.GridIRDASelectedRow);
                    this.router.navigateByUrl('Dokter/asesmen-awal');
                    break;
                default:
                    break;
            }
        } else {
            this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Tidak Ada Data Pasien Yang Dipilih');
        }
    }
}
