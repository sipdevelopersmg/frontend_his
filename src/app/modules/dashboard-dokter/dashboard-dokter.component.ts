import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MolSidebarComponent } from '../core/components/sidebar/sidebar.component';
import { MolTopMenuComponent } from '../core/components/top-menu/top-menu.component';
import { NavigationService } from '../shared/services/navigation.service';
import { NotificationService } from '../shared/services/notification.service';
import { UtilityService } from '../shared/services/utility.service';
import { DaftarPasienService } from './services/daftar-pasien/daftar-pasien.service';
import { DashboardDokterService } from './services/dashboard-dokter.service';

@Component({
    selector: 'app-dashboard-dokter',
    templateUrl: './dashboard-dokter.component.html',
    styleUrls: ['./dashboard-dokter.component.css']
})
export class DashboardDokterComponent implements OnInit {

    // ** Show Informasi Pasien
    ShowInformasiPasien: boolean = false;

    // ** Sidebar Collapse State
    SidebarCollapse: boolean;
    SidebarMenuTitle: string;
    SidebarMenuDatasource: any[] = [];

    @ViewChild('TopMenuComponent') TopMenuComponent: MolTopMenuComponent;
    ToggleTopMenu: boolean = false;
    DashboardDokterState: boolean = false;

    @ViewChild(MolSidebarComponent) MolSidebarComponent: MolSidebarComponent;

    constructor(
        private router: Router,
        // private socket: Socket,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute,
        public navigationService: NavigationService,
        private notificationService: NotificationService,
        private daftarPasienService: DaftarPasienService,
        private dashboardDokterService: DashboardDokterService
    ) { }

    ngOnInit(): void {
        this.onCheckIsSidebarEmpty();
    }

    onClickNavbarBrand(args: any): void {
        const type = args.type;

        this.SidebarCollapse = type === 'click' ? !this.SidebarCollapse : !this.SidebarCollapse;
    }

    // ** Ketika component Dashboard memuat component Baru
    // ** Misal ketika beralih dari Halaman Beranda ke Halaman About
    // ** Maka Dashboard Component memuat component About sebagai component Baru
    componentAdded(args: any): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
        ).subscribe(() => {
            const routeData = this.getChild(this.activatedRoute);

            // ** Header Ribbon Hide ketika di halaman Beranda
            routeData.data.subscribe((data: any) => {
                if (data.title === 'Beranda Dokter' || data.title === "Daftar Pasien") {
                    this.dashboardDokterService.ShowInformasiPasien.next(true);
                } else {
                    this.dashboardDokterService.ShowInformasiPasien.next(false);
                }
            });
        });
    }

    getChild(activatedRoute: ActivatedRoute): any {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        }
        else {
            return activatedRoute;
        }
    }

    onCollapseSidebar(): void {
        this.SidebarCollapse = true;
        this.ToggleTopMenu = true;
    }

    onGetNotification(): void {
        // return this.socket.fromEvent('notification')
        //     .pipe(
        //         map((notify: any) => {
        //             return notify.data;
        //         })
        //     ).subscribe((_result) => {
        //         let header = 'Pemberitahuan Baru';
        //         let body = _result.Message;

        //         this.notificationService.onShowToast(header, body, { className: 'bg-primary text-light', delay: 10000 });
        //     });
    }

    onCheckIsSidebarEmpty(): void {
        this.navigationService.onGetActiveSidebarMenuSubject()
            .subscribe((result: any) => {
                if (result.length > 0) {
                    setTimeout(() => {
                        this.SidebarCollapse = false;
                    }, 250);
                }
            });
    }

    onClickBackToMainMenu(args: any): void {
        console.log(args);
    }

    onTogglingTopMenu(args: any): void {
        const sidebarSection = document.getElementById('sidebar-section');

        args === true ? sidebarSection.classList.add('hidding-top-menu') : sidebarSection.classList.remove('hidding-top-menu');
    }

    handleClickButtonSidebar(args: any): void {
        this.dashboardDokterService.onPeriksaPasien()
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', `${this.daftarPasienService.ActivePasien.value.nama_pasien} Finish Periksa`, 'Kembali Ke Daftar Pasien')
                        .then((result) => {
                            this.router.navigateByUrl('Dokter/daftar-pasien');

                            if (!this.MolSidebarComponent.SidebarCollapse) {
                                this.MolSidebarComponent.SidebarCollapse = true;

                                let NavbarBrand = document.getElementById("NavbarBrand");
                                NavbarBrand.click();
                            }
                        })
                }
            });
    }
}
