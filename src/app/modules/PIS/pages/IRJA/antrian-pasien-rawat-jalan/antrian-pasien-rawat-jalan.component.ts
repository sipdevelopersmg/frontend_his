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
    GridAntrianIrjaToolbar: any;
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

    // LookupPoliUrl: string = CONFIG.API.IRJA.GET_POLI_ANTRIAN_RAWAT_JALAN;

    constructor(
        private utilityService: UtilityService,
        private antrianPasienRawatJalanService: AntrianPasienRawatJalanService) { }

    ngOnInit(): void {
        this.GridAntrianIrjaToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash fa-sm', id: 'delete' },
            'Search'
        ];

        this.GridAntrianIrjaDataSource = [
            {
                No: '1',
                NamaUser: 'Jennie',
                RoleUser: 'Admisi',
                CreatedDate: new Date(),
            },
            {
                No: '2',
                NamaUser: 'Jisoo',
                RoleUser: 'Admisi',
                CreatedDate: new Date(),
            },
            {
                No: '3',
                NamaUser: 'Rose',
                RoleUser: 'Farmasi',
                CreatedDate: new Date(),
            },
            {
                No: '4',
                NamaUser: 'Lalisa',
                RoleUser: 'Dokter',
                CreatedDate: new Date(),
            },
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
        // this.antrianPasienRawatJalanService.onGetAllDataAntrianRawatJalan()
        //     .subscribe((result) => {
        //         const data = result.data;

        //         this.GridAntrianIrjaDataSource = data.slice(2, 3);

        //         console.log(this.GridAntrianIrjaDataSource);
        //     });
    }
}
