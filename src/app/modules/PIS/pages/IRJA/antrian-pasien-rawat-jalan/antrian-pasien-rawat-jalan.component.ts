import { Component, OnInit } from '@angular/core';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';

import GridHeaderJson from './json/GridHeaderFromDaftarUIang.json';
import LookupPoli from './json/LookupPoli.json';

import GridHeaderHomeCare from './json/GridHeaderHomecare.json';
import GridHeaderDummy from './json/GridHeaderDummy.json';

import * as CONFIG from '../../../../../api/index';
import { AntrianPasienRawatJalanService } from '../../../services/IRJA/antrian-pasien-rawat-jalan/antrian-pasien-rawat-jalan.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'app-antrian-pasien-rawat-jalan',
    templateUrl: './antrian-pasien-rawat-jalan.component.html',
    styleUrls: ['./antrian-pasien-rawat-jalan.component.css']
})
export class AntrianPasienRawatJalanComponent implements OnInit {

    GridAntrianIrjaEditSettings: EditSettingsModel = { allowAdding: true };
    GridAntrianIrjaToolbar: object[];
    GridAntrianColums: [];
    GridAntrianIrjaDataSource: any[];
    GridAntrianIrjaContextMenuItems: MenuItemModel[] = [
        {
            id: 'laboratorium',
            text: 'Order Laboratorium',
            iconCss: 'fas fa-clipboard-list'
        }, {
            id: 'radiologi',
            text: 'Order Radiologi',
            iconCss: 'fas fa-clipboard-list'
        }, {
            id: 'resep-digital',
            text: 'Order Resep',
            iconCss: 'fas fa-clipboard-list'
        }
    ];
    GridAntrianIrjaPaging = { pageSizes: true, pageSize: 12 };

    SelectedPolyCode: string;

    // public GridHeader = GridHeaderJson;
    public GridHeader = GridHeaderDummy;
    public LookupPoliAttribute = LookupPoli;

    LookupPoliUrl: string = CONFIG.API.GET_POLI_ANTRIAN_RAWAT_JALAN;

    constructor(
        private utilityService: UtilityService,
        private antrianPasienRawatJalanService: AntrianPasienRawatJalanService) { }

    ngOnInit(): void {
        // this.GridAntrianIrjaToolbar = [
        //     { text: 'Refresh', tooltipText: 'Refresh', prefixIcon: 'fas fa-sync', id: 'refresh' },
        //     'Search'
        // ];

        this.GridAntrianIrjaDataSource = [
            {
                Rx: 'Rx',
                No: '1',
                KodeObat: 'AOG0681NVL',
                NamaObat: 'ACETYLCYSTEINE 200 MG CAP',
                Satuan: 'CAP',
                Qty: '15',
                JumlahPemakaian: '3 Kali Sehari',
                AturanPakai: 'Setelah Makan',
                WaktuPakai: 'Pagi, Siang, Malam',
                Catatan: 'Mohon Untuk Diminum Rutin',
            },
            // {
            //     Rx: 'Rx',
            //     No: '2',
            //     KodeObat: 'AOG0681NVL',
            //     NamaObat: 'PARACETAMOL 500 MG STRIP',
            //     Satuan: 'STRIP',
            //     Qty: '1.5',
            //     JumlahPemakaian: '3 Kali Sehari',
            //     AturanPakai: 'Setelah Makan',
            //     WaktuPakai: 'Pagi, Siang, Malam',
            //     Catatan: 'Mohon Untuk Diminum Rutin',
            // },
        ];
    }

    onToolbarClick(args: any): void {
        const action = args.item.id;

        if (action === 'refresh') {
            if (this.SelectedPolyCode && this.SelectedPolyCode !== undefined) {
                this.onGetAllAntrianRawatJalanByPolyCode(this.SelectedPolyCode);
            }
            else {
                this.utilityService.onShowingCustomAlert('error', 'Oops...', 'Poli Belum Dipilih');
            }
        }
    }

    onSelectGridContextMenu(args: any): void {
        console.log(args);
    }

    handleSelectedPoli(args: any): void {
        this.SelectedPolyCode = args.PolyCode;

        this.onGetAllAntrianRawatJalanByPolyCode(args.PolyCode);
    }

    onGetAllAntrianRawatJalanByPolyCode(PolyCode: string): void {
        this.antrianPasienRawatJalanService.onGetAllDataAntrianRawatJalan()
            .subscribe((result) => {
                const data = result.data;

                this.GridAntrianIrjaDataSource = data.slice(2, 3);

                console.log(this.GridAntrianIrjaDataSource);
            });
    }
}
