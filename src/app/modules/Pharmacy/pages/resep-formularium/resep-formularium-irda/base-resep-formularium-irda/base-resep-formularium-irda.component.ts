import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-base-resep-formularium-irda',
    templateUrl: './base-resep-formularium-irda.component.html',
    styleUrls: ['./base-resep-formularium-irda.component.css']
})
export class BaseResepFormulariumIrdaComponent implements OnInit {

    ShowTitle: boolean = false;

    /** State Active : input_resep_irda, daftar_resep_irda, pulang_resep_irda, view_resep_irda, ubah_resep_irda */
    StateActive: string = 'daftar_resep_irda';

    ViewResepIrdaQueryParams: any;

    UbahResepIrdaQueryParams: any;

    constructor() { }

    ngOnInit(): void {
    }

    handleClickButtonNavInputResep(id: string): void {
        switch (id) {
            case 'kembali_update':
                this.StateActive = 'view_resep_irda';
                break;
            case 'Kembali':
                this.StateActive = 'daftar_resep_irda';
                break;
            default:
                break;
        }
    }

    handleClickButtonNavDaftarResep(data: any): void {
        switch (data.id) {
            case 'Add':
                this.StateActive = 'input_resep_irda';
                break;
            case 'Edit':
                this.StateActive = 'input_resep_irda';
                break;
            case 'pulang':
                this.StateActive = 'pulang_resep_irda';
                break;
            case 'view_detail':
                this.StateActive = 'view_resep_irda';
                this.ViewResepIrdaQueryParams = data.data;
            default:
                break;
        }
    }

    handleClickButtonNavViewResep(data: any): void {
        switch (data.id) {
            case 'kembali':
                this.StateActive = 'daftar_resep_irda';
                break;
            case 'ubah':
                this.StateActive = 'ubah_resep_irda';
                this.UbahResepIrdaQueryParams = data.data;
                break;
            case 'pulang':
                this.StateActive = 'ubah_resep_irda';
                this.UbahResepIrdaQueryParams = data.data;
                break;
            default:
                break;
        }
    }

    handleClickButtonNavPulangResep(id: string): void {
        if (id == 'kembali') {
            this.StateActive = 'daftar_resep_irda';
        }
    }
}
