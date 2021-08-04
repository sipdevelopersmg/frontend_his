import { Component, OnInit } from '@angular/core';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';

@Component({
    selector: 'app-radiologi',
    templateUrl: './radiologi.component.html',
    styleUrls: ['./radiologi.component.css']
})
export class RadiologiComponent implements OnInit {

    ButtonNav: ButtonNavModel[] = [
        { Id: "RiwayatPemeriksaan", Icons1: "fa-plus", Captions: "Riwayat Pemeriksaan" },
        { Id: "InputOrderBaru", Icons1: "fa-plus", Captions: "Input Order Baru" },
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
