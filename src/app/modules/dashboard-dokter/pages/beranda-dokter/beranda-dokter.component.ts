import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import { MainMenuModel } from 'src/app/modules/core/models/navigation/menu.model';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { DashboardDokterService } from '../../services/dashboard-dokter.service';

@Component({
    selector: 'app-beranda-dokter',
    templateUrl: './beranda-dokter.component.html',
    styleUrls: ['./beranda-dokter.component.css']
})
export class BerandaDokterComponent implements OnInit, AfterViewInit {

    // ** User Properites
    UserFullName: string;

    MainMenu: MainMenuModel = { id_menu: 1, icon: 'icon-pis', caption: 'Daftar Pasien' }

    constructor(
        private router: Router,
        private navigationService: NavigationService,
        private authenticationService: AuthenticationService,
        private dashboardDokterService: DashboardDokterService,
    ) { }

    ngOnInit(): void {
        // this.dashboardDokterService.onSetSidebarMenuForDashboardDokter();

        this.dashboardDokterService.onSetSidebarMenuTitle();

        this.UserFullName = this.authenticationService.currentUserValue.full_name;

        this.dashboardDokterService.onDestroySidebarMenuWhenNavigateToDaftarPasien();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.navigationService.ButtonSidebarMenuState.next(false);
        }, 1);
    }

    handleClickSingleMenu(args: any): void {
        if (args.NamaMenu == "Daftar Pasien") {
            this.router.navigateByUrl('Dokter/daftar-pasien');
        }
    }
}
