import { Component, OnInit } from '@angular/core';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';

@Component({
    selector: 'app-resep',
    templateUrl: './resep.component.html',
    styleUrls: ['./resep.component.css']
})
export class ResepComponent implements OnInit {

    ButtonNav: ButtonNavModel[] = [
        { Id: "Reset", Icons1: "fas fa-undo fa-sm", Captions: "Reset" },
        { Id: "Simpan", Icons1: "fas fa-save fa-sm", Captions: "Simpan" },
    ];

    constructor() { }

    ngOnInit(): void {
    }

    onClickButtonNav(args: any): void {
        switch (args) {
            case "Reset":
                break;
            case "Simpan":
                break;
            default:
                break;
        }
    }

    onGetSelectedTabId(args: any): void {
        switch (args) {
            case "InputResep":
                this.ButtonNav = [
                    { Id: "Reset", Icons1: "fas fa-undo fa-sm", Captions: "Reset" },
                    { Id: "Simpan", Icons1: "fas fa-save fa-sm", Captions: "Simpan" },
                ];
                break;
            case "HistoryResep":
                this.ButtonNav = [];
                break;
            default:
                break;
        }
    }
}
