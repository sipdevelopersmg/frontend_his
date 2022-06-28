import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';

@Component({
    selector: 'app-radiologi',
    templateUrl: './radiologi.component.html',
    styleUrls: ['./radiologi.component.css']
})
export class RadiologiComponent implements OnInit, AfterViewInit {

    ShowTitle: boolean = true;

    ButtonNav: ButtonNavModel[] = [
        { Id: "RiwayatPemeriksaan", Icons1: "fa-history", Captions: "Riwayat Pemeriksaan" },
        { Id: "InputOrderBaru", Icons1: "fa-plus-circle", Captions: "Input Order Baru" },
    ];

    StateActive: 'riwayat' | 'input' = 'riwayat';

    constructor(
        private router: Router,
        private navigationService: NavigationService,
    ) { }

    ngOnInit(): void {
        if ((this.router.url).includes('Dokter')) {
            this.ShowTitle = false;
        } else {
            this.onClickButtonNav("RiwayatPemeriksaan");
        }
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.navigationService.ButtonSidebarMenuState.next(true);
        }, 1);
    }
    onClickButtonNav(args: any): void {
        switch (args) {
            case "RiwayatPemeriksaan":
                this.ShowTitle ? this.router.navigateByUrl('/Dokter/radiologi/riwayat-pemeriksaan') : this.StateActive = 'riwayat';
                break;
            case "InputOrderBaru":
                this.ShowTitle ? this.router.navigateByUrl('/Dokter/radiologi/input-order-pemeriksaan') : this.StateActive = 'input';
                break;
            default:
                break;
        }
    }
}
