import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';

@Component({
    selector: 'layout-dashboard-dokter',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    // ** Header Ribbon
    HeaderRibbon: string;
    HideHeaderRibbon: boolean = false;

    // ** Sidebar Collapse State
    SidebarCollapse: boolean = true;
    SidebarMenuTitle: string;
    SidebarMenuDatasource: any[] = [];

    ToggleInformasiPasien: boolean = false;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private navigationService: NavigationService,
        private notificationService: NotificationService
    ) { }

    ngOnInit(): void {
        this.SidebarMenuDatasource = [

        ]
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

            routeData.data.subscribe((data: any) => {
                this.HeaderRibbon = data.title;

                if (data.title === 'Beranda') {
                    this.HideHeaderRibbon = true;
                } else {
                    this.HideHeaderRibbon = false;
                }
            });
        })
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
        // this.ToggleTopMenu = true;
    }

    onCheckIsSidebarEmpty(): void {
        this.navigationService.onGetActiveSidebarMenuSubject()
            .subscribe((result: any) => {
                setTimeout(() => {
                    this.SidebarCollapse = false;
                }, 250);
            });
    }

    onClickBackToMainMenu(args: any): void {
        console.log(args);
    }

    onTogglingInformasiPasien(args: any): void {
        const sidebarSection = document.getElementById('sidebar-section');

        args === true ? sidebarSection.classList.add('hidding-top-menu') : sidebarSection.classList.remove('hidding-top-menu');
    }

}
