import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EditSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { DaftarPasienService } from 'src/app/modules/dashboard-dokter/services/daftar-pasien/daftar-pasien.service';
import { DashboardDokterService } from 'src/app/modules/dashboard-dokter/services/dashboard-dokter.service';
import { SetupDokterService } from 'src/app/modules/PIS/services/setup-data/setup-dokter/setup-dokter.service';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as Config from '../../../dashboard-dokter/pages/daftar-pasien-per-dokter/json/GridPasienPerDokter.config.json';

@Component({
    selector: 'app-list-pasien',
    templateUrl: './list-pasien.component.html',
    styleUrls: ['./list-pasien.component.css']
})
export class ListPasienComponent implements OnInit {

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

    GridIRNAComp: MolGridComponent = null;
    GridIRNADatasource: any[];
    GridIRNAEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridIRNAToolbar: any[] = [
        { text: 'Visit', tooltipText: 'Visit', prefixIcon: 'fas fa-user-check fa-sm', id: 'visit' },
        "Search"
    ];
    GridIRNASelectedRow: any;

    @ViewChild('GridIRDAComp') GridIRDAComp: GridComponent;
    GridIRDADatasource: any[];
    GridIRDAEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridIRDAToolbar: any[] = [
        { text: 'Visit', tooltipText: 'Visit', prefixIcon: 'fas fa-user-check fa-sm', id: 'visit' },
        "Search"
    ];
    GridIRDASelectedRow: any;

    JenisRawat: string = 'IRJA';

    constructor(
        private router: Router,
        private utilityService: UtilityService,
        private dokterService: SetupDokterService,
        private daftarPasienService: DaftarPasienService,
        private dashboardDokterService: DashboardDokterService
    ) { }

    ngOnInit(): void {
        this.dashboardDokterService.JenisRawat.next(this.JenisRawat);

        this.dokterService.onGetAllDokter();

        this.onGetDokterId();
    }

    onGetDokterId(): void {
        const UserData: IAuthenticationResponseModel = JSON.parse(localStorage.getItem("UserData"));

        this.onGetPasienIRJAByDokterId(UserData.id_karyawan);

        this.onGetPasienIRNAByDokterId(UserData.id_karyawan);

        this.onGetPasienIRDAByDokterId(UserData.id_karyawan);
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

        if (this.JenisRawat == 'IRNA') {
            // this.GridIRNAComp.refresh();
        }

        this.dashboardDokterService.JenisRawat.next(this.JenisRawat);
    }

    handleSelectedRowIRJA(args: any): void {
        this.JenisRawat = 'IRJA';
        this.dashboardDokterService.JenisRawat.next(this.JenisRawat);
        this.GridIRJASelectedRow = args.data;
    }

    handleToolbarClickIRJA(args: any): void {
        if (this.GridIRJASelectedRow) {
            switch (args.item.id) {
                case 'visit':
                    this.daftarPasienService.ActivePasien.next({});
                    this.daftarPasienService.onSetActivePasien(this.GridIRJASelectedRow, 'IRJA');
                    this.router.navigateByUrl('Dokter/visit-pasien');
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
        this.router.navigateByUrl('Dokter/visit-pasien');
    }

    handleActionCompleteIRJA(args: any): void {

    }

    handleSelectedRowIRNA(args: any): void {
        this.JenisRawat = 'IRNA';
        this.dashboardDokterService.JenisRawat.next(this.JenisRawat);
        this.GridIRNASelectedRow = args.data;
    }

    handleToolbarClickIRNA(args: any): void {
        if (this.GridIRNASelectedRow) {
            switch (args.item.id) {
                case 'visit':
                    this.daftarPasienService.ActivePasien.next({});
                    this.daftarPasienService.onSetActivePasien(this.GridIRNASelectedRow, 'IRNA');
                    this.router.navigateByUrl('Dokter/visit-pasien');
                    break;
                default:
                    break;
            }
        } else {
            this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Tidak Ada Data Pasien Yang Dipilih');
        }
    }

    InitalizedGridIRNA(component: MolGridComponent) {
        this.GridIRNAComp = component;
    }

    handleSelectedRowIRDA(args: any): void {
        this.JenisRawat = 'IRDA';
        this.dashboardDokterService.JenisRawat.next(this.JenisRawat);
        this.GridIRDASelectedRow = args.data;
    }

    handleToolbarClickIRDA(args: any): void {
        if (this.GridIRDASelectedRow) {
            switch (args.item.id) {
                case 'visit':
                    this.daftarPasienService.ActivePasien.next({});
                    this.daftarPasienService.onSetActivePasien(this.GridIRDASelectedRow, 'IRDA');
                    this.router.navigateByUrl('Dokter/visit-pasien');
                    break;
                default:
                    break;
            }
        } else {
            this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Tidak Ada Data Pasien Yang Dipilih');
        }
    }

}
