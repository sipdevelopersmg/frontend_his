import { Component, OnInit } from '@angular/core';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';

@Component({
    selector: 'app-setup-grup-item',
    templateUrl: './setup-grup-item.component.html',
    styleUrls: ['./setup-grup-item.component.css']
})
export class SetupGrupItemComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    constructor() { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: "SaveAndNew", Captions: "Save & New", StackIcon: true, Icons1: "fa-save", Icons2: "fa-plus-circle" },
            { Id: "SaveAndClose", Captions: "Save & Close", StackIcon: true, Icons1: "fa-save", Icons2: "fa-times-circle" },
            { Id: "Clear", Captions: "Clear", Icons1: "fa-redo-alt" },
            { Id: "Cancel", Captions: "Cancel", Icons1: "fa-window-close" },
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
            case "Cancel":
                this.onCancel();
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

    onCancel() {
        alert("Cancel Has Been Clicked");
    }
}
