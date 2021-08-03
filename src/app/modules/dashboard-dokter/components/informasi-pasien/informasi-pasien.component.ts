import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'dd-informasi-pasien',
    templateUrl: './informasi-pasien.component.html',
    styleUrls: ['./informasi-pasien.component.css']
})
export class InformasiPasienComponent implements OnInit {

    @Input("ToggleVisibility") ToggleVisibility: boolean = false;

    @Output("onToggledVisibility") onToggledVisibility = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    onTogglingVisibility() {
        this.ToggleVisibility = !this.ToggleVisibility;

        let elem = document.getElementById("ArrowVisibilty");

        if (this.ToggleVisibility == true) {
            elem.classList.remove("fa-chevron-circle-up");
            elem.classList.add("fa-chevron-circle-down");
        } else {
            elem.classList.remove("fa-chevron-circle-down");
            elem.classList.add("fa-chevron-circle-up");
        }

        this.onToggledVisibility.emit(this.ToggleVisibility);
    }
}
