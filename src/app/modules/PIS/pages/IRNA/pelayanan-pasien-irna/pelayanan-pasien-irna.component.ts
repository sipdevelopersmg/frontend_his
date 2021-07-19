import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';

@Component({
    selector: 'app-pelayanan-pasien-irna',
    templateUrl: './pelayanan-pasien-irna.component.html',
    styleUrls: ['./pelayanan-pasien-irna.component.css']
})
export class PelayananPasienIrnaComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: "SaveAndNew", Captions: "Save & New", StackIcon: true, Icons1: "fa-save", Icons2: "fa-plus-circle" },
            { Id: "SaveAndClose", Captions: "Save & Close", StackIcon: true, Icons1: "fa-save", Icons2: "fa-times-circle" },
            {
                Id: "Print", Captions: "Print", Icons1: "fa-print",
                Children: [
                    { Id: "CetakSemuaRM", Captions: "Cetak Semua RM", Icons: "fa-print" },
                    { Id: "CetakRM1", Captions: "Cetak RM 1", Icons: "fa-print" },
                ]
            },
            { Id: "Clear", Captions: "Clear", Icons1: "fa-redo-alt" },
            { Id: "ClosePage", Captions: "Close Page", Icons1: "fa-window-close" },
        ];
    }

    onClickButtonNav(ButtonId: string) {
        console.log(ButtonId);

        switch (ButtonId) {
            case "SaveAndNew":
                this.onSaveAndNew();
                break;
            case "SaveAndClose":
                this.onSaveAndClose();
                break;
            case "Clear":
                this.onClear();
                break;
            case "ClosePage":
                this.onClosePage();
                break;
            default:
                break;
        }
    }

    onSaveAndNew() {
        alert("Save & New Button Has Been Clicked");
    }

    onSaveAndClose() {
        alert("Save & Close Button Has Been Clicked");
    }

    onClear() {
        alert("Clear Has Been Clicked");
    }

    onClosePage() {
        this.router.navigateByUrl("dashboard/beranda");
    }
}
