import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { InputHasilRadiologiService } from '../../services/input-hasil-radiologi/input-hasil-radiologi.service';
import Config from './json/input-hasil-radiologi.config.json';

@Component({
    selector: 'app-input-hasil-radiologi',
    templateUrl: './input-hasil-radiologi.component.html',
    styleUrls: ['./input-hasil-radiologi.component.css']
})
export class InputHasilRadiologiComponent implements OnInit {

    Config = Config;

    FilterColumnDatasource: any[] = [
        { text: 'No. Order', value: "otop.nomor_order_penunjang" },
        { text: 'Tgl. Order', value: 'otop.tanggal_order_penunjang' },
        { text: 'Nama Pasien', value: "concat(p.nama_depan, ' ',p.nama_belakang)" },
        { text: 'No. Register', value: 'tp.no_register' },
        { text: 'No. Rekam Medis', value: 'tp.no_rekam_medis' },
    ];

    // ** Grid Daftar Order
    @ViewChild('GridData') GridData: GridComponent;
    GridDatasource: any[] = [];
    GridToolbar: any[] = ["Search"];
    GridDataOrderSelectedRecords: any;
    GridDataOrderSelectedRowIndex: any;

    // ** Grid Detail Order
    @ViewChild('GridDataDetail') GridDetail: GridComponent;
    GridDetailDatasource: any[] = [];
    GridDetailToolbar: any[] = ["Search"];
    GridDetailOrderSelectedRecords: any;
    GridDetailOrderSelectedRowIndex: any;
    GridDetailOrderContextMenuItems: MenuItemModel[] = [
        { id: 'hasil_radiologi', text: 'Hasil Radiologi', iconCss: 'fas fa-binoculars fa-sm' }
    ];

    screenWidth: any;

    @HostListener("window:resize", ['$event'])
    private onResize(event: any) {
        this.onDetectScreenSize(event.srcElement.innerWidth);
    }

    constructor(
        private router: Router,
        private utilityService: UtilityService,
        private encryptionService: EncryptionService,
        private inputHasilRadiologiService: InputHasilRadiologiService,
    ) { }

    ngOnInit(): void {
        this.onDetectScreenSize(window.innerWidth);

        this.handlePencarianFilter([]);
    }

    onDetectScreenSize(screenWidth: any): void {
        this.screenWidth = screenWidth;
    }

    handlePencarianFilter(args?: any): void {
        this.inputHasilRadiologiService.onGetAll(args)
            .subscribe((result) => {
                if (result) {
                    this.GridDatasource = result.data;
                }
            });
    }

    handleSelectedRow(args: any): void {
        this.GridDataOrderSelectedRecords = args.data;

        this.inputHasilRadiologiService.onGetDetailById(args.data.id_order_penunjang)
            .subscribe((result) => {
                this.GridDetailDatasource = result.data;
            });
    }

    handleSelectedRowDetail(args: any): void {
        this.GridDetailOrderSelectedRecords = args.data;
    }

    handleSelectGridContextMenu(args: any): void {
        let id = args.item.id;

        switch (id) {
            case "hasil_radiologi":
                let data = {
                    header: this.GridDataOrderSelectedRecords,
                    detail: this.GridDetailOrderSelectedRecords,
                };
                let data_encrypted = this.encryptionService.encrypt(JSON.stringify(data));
                this.router.navigate(['dashboard/OM/detail-hasil-radiologi/', data_encrypted, "GRAHCIS"]);
                break;
            default:
                break;
        }
    }
}
