import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';

@Component({
    selector: 'app-radiologi',
    templateUrl: './radiologi.component.html',
    styleUrls: ['./radiologi.component.css']
})
export class RadiologiComponent implements OnInit, AfterViewInit {

    ButtonNav: ButtonNavModel[] = [
        { Id: "RiwayatPemeriksaan", Icons1: "fa-history", Captions: "Riwayat Pemeriksaan" },
        { Id: "InputOrderBaru", Icons1: "fa-plus-circle", Captions: "Input Order Baru" },
    ];

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.onClickButtonNav("RiwayatPemeriksaan");
    }

    onClickButtonNav(args: any): void {
        switch (args) {
            case "RiwayatPemeriksaan":
                this.router.navigateByUrl('/dashboard/Dokter/radiologi/riwayat-pemeriksaan');
                break;
            case "InputOrderBaru":
                this.router.navigateByUrl('/dashboard/Dokter/radiologi/input-order-pemeriksaan');
                break;
            default:
                break;
        }
    }
}
