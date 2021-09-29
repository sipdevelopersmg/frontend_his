import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';

@Component({
    selector: 'app-laboratorium',
    templateUrl: './laboratorium.component.html',
    styleUrls: ['./laboratorium.component.css']
})
export class LaboratoriumComponent implements OnInit, AfterViewInit {

    ButtonNav: ButtonNavModel[] = [
        { Id: "RiwayatPemeriksaan", Icons1: "fa-history", Captions: "Riwayat Pemeriksaan" },
        { Id: "InputOrderBaru", Icons1: "fa-plus-circle", Captions: "Input Order Baru" },
    ];

    constructor(
        private router: Router,
        private navigationService: NavigationService
    ) { }

    ngOnInit(): void {
        this.onClickButtonNav("RiwayatPemeriksaan");
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.navigationService.ButtonSidebarMenuState.next(true);
        }, 1);
    }

    onClickButtonNav(args: any): void {
        switch (args) {
            case "RiwayatPemeriksaan":
                this.router.navigate(['/Dokter/laboratorium/riwayat-pemeriksaan']);
                break;
            case "InputOrderBaru":
                this.router.navigate(['/Dokter/laboratorium/input-order-pemeriksaan']);
                break;
            default:
                break;
        }
    }
}
