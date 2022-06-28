import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-base-resep-formularium-irna',
    templateUrl: './base-resep-formularium-irna.component.html',
    styleUrls: ['./base-resep-formularium-irna.component.css']
})
export class BaseResepFormulariumIrnaComponent implements OnInit {

    ShowTitle: boolean = false;

    /** State Active : input_resep_irna, daftar_resep_irna, pulang_resep_irna, view_resep_irna, ubah_resep_irna */
    StateActive: string = 'daftar_resep_irna';

    ViewResepIrnaQueryParams: any;

    UbahResepIrnaQueryParams: any;

    constructor() { }

    ngOnInit(): void {
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
