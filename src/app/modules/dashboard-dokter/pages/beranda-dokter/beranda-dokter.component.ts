import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import { MainMenuModel } from 'src/app/modules/core/models/navigation/menu.model';
import { DashboardDokterService } from '../../services/dashboard-dokter.service';

@Component({
    selector: 'app-beranda-dokter',
    templateUrl: './beranda-dokter.component.html',
    styleUrls: ['./beranda-dokter.component.css']
})
export class BerandaDokterComponent implements OnInit {

    // ** User Properites
    UserFullName: string;

    MainMenu: MainMenuModel = { id_menu: 1, icon: 'icon-pis', caption: 'Daftar Pasien' }

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private dashboardDokterService: DashboardDokterService,
    ) { }

    ngOnInit(): void {
        // this.dashboardDokterService.onSetSidebarMenuForDashboardDokter();

        this.dashboardDokterService.onSetSidebarMenuTitle();

        this.UserFullName = this.authenticationService.currentUserValue.full_name;
    }

    handleClickSingleMenu(args: any): void {
        if (args.NamaMenu == "Daftar Pasien") {
            this.router.navigateByUrl('Dokter/daftar-pasien');
        }
    }
}
