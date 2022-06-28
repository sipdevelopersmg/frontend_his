import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { ViewResepIrnaComponent } from '../view-resep-irna/view-resep-irna.component';

@Component({
    selector: 'app-base-resep-irna',
    templateUrl: './base-resep-irna.component.html',
    styleUrls: ['./base-resep-irna.component.css']
})
export class BaseResepIrnaComponent implements OnInit {

    ShowTitle: boolean = false;

    ButtonNav: ButtonNavModel[] = [];

    /** State Active : input_resep_irna, daftar_resep_irna, pulang_resep_irna, view_resep_irna, ubah_resep_irna */
    StateActive: string = 'daftar_resep_irna';

    @ViewChild('ViewResepIrnaComp') ViewResepIrnaComp: ViewResepIrnaComponent;
    ViewResepIrnaQueryParams: any;

    UbahResepIrnaQueryParams: any;

    constructor(
    ) { }

    ngOnInit(): void {
    }

    handleChangeState(state: string): void {
        console.log(state)
    }

    handleClickButtonNavInputResep(id: string): void {
        switch (id) {
            case 'kembali_update':
                this.StateActive = 'view_resep_irna';
                break;
            case 'Kembali':
                this.StateActive = 'daftar_resep_irna';
                break;
            default:
                break;
        }
    }

    handleClickButtonNavDaftarResep(data: any): void {
        switch (data.id) {
            case 'Add':
                this.StateActive = 'input_resep_irna';
                break;
            case 'Edit':
                this.StateActive = 'input_resep_irna';
                break;
            case 'pulang':
                this.StateActive = 'pulang_resep_irna';
                break;
            case 'view_detail':
                this.StateActive = 'view_resep_irna';
                this.ViewResepIrnaQueryParams = data.data;
            default:
                break;
        }
    }

    handleClickButtonNavViewResep(data: any): void {
        switch (data.id) {
            case 'kembali':
                this.StateActive = 'daftar_resep_irna';
                break;
            case 'ubah':
                this.StateActive = 'ubah_resep_irna';
                this.UbahResepIrnaQueryParams = data.data;
                break;
            case 'pulang':
                this.StateActive = 'ubah_resep_irna';
                this.UbahResepIrnaQueryParams = data.data;
                break;
            default:
                break;
        }
    }

    handleClickButtonNavPulangResep(id: string): void {
        if (id == 'kembali') {
            this.StateActive = 'daftar_resep_irna';
        }
    }
}
