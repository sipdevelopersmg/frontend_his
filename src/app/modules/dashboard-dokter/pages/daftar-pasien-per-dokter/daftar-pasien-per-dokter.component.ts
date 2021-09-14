import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import * as Config from './json/GridPasienPerDokter.config.json';

@Component({
    selector: 'app-daftar-pasien-per-dokter',
    templateUrl: './daftar-pasien-per-dokter.component.html',
    styleUrls: ['./daftar-pasien-per-dokter.component.css']
})
export class DaftarPasienPerDokterComponent implements OnInit {

    /**
     * Variable untuk menyimpan Configurasi Grid
     * @Json Config
    */
    GridConfig = Config;

    GridIRJA: MolGridComponent = null;
    GridIRJADatasource: any[];
    GridIRJAEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridIRJAToolbar: any[] = [
        { text: 'Periksa', tooltipText: 'Periksa', prefixIcon: 'fas fa-user-check fa-sm', id: 'periksa' },
        { text: 'Riwayat Pemeriksaan', tooltipText: 'Riwayat Pemeriksaan', prefixIcon: 'fas fa-clipboard-list fa-sm', id: 'riwayat_pemeriksaan' },
        "Search"
    ];
    GridIRJACommands = [
        {
            "buttonOption": {
                "id": 'btnInfoIRJA',
                "content": "",
                "iconCss": "fas fa-info-circle",
                "cssClass": 'btn btn-primary btn-sm',
            },
        }
    ];

    GridIRNA: MolGridComponent = null;
    GridIRNADatasource: any[];
    GridIRNAEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridIRNAToolbar: any[];

    GridIRDA: MolGridComponent = null;
    GridIRDADatasource: any[];
    GridIRDAEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridIRDAToolbar: any[];

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        this.GridIRJADatasource = [
            {
                id_person: 1,
                tgl_masuk: new Date(),
                no_rekam_medis: 'C00005946',
                no_register: 'A12.2016.05506',
                full_name: 'Soetomo',
                gender: 'PRIA'
            }
        ];
    }

    handleSelectedTabId(args: any): void {

    }

    handleSelectedRowIRJA(args: any): void {
    }

    handleToolbarClickIRJA(args: any): void {
        console.log(args);

        switch (args.item.id) {
            case 'riwayat_pemeriksaan':
                this.router.navigateByUrl('Dokter/asesmen-awal');
                break;
            default:
                break;
        }
    }

    handleInitializedIRJA(component: MolGridComponent): void {
        this.GridIRJA = component;
    }

    handleClickCommandGridIRJA(args: any): void {
        console.log(args);

        this.router.navigateByUrl('Dokter/asesmen-awal');
    }

    handleActionCompleteIRJA(args: any): void { }
}
