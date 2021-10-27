import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { SetupUserService } from 'src/app/modules/core/services/setup-user/setup-user.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ModalDetailCrossCheckComponent } from '../../../components/modal-detail-cross-check/modal-detail-cross-check.component';
import { SetupKasirIrjaService } from '../../../services/kasir/kasir-rawat-jalan/setup-kasir-irja.service';

@Component({
    selector: 'app-history-croscek-tutup-kasir',
    templateUrl: './history-croscek-tutup-kasir.component.html',
    styleUrls: ['./history-croscek-tutup-kasir.component.css']
})
export class HistoryCroscekTutupKasirComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    FilterColumnDatasource: any[] = [];
    FilterDropdownDatasource: any[] = [];
    FilterDropdownFields: any = {};

    @ViewChild('GridTransaksiTutupKasir') GridTransaksiTutupKasir: GridComponent;
    GridDatasource: any[] = [];
    GridToolbar: any[] = ["Search"];
    GridWrapSettings: object = { wrapMode: 'Header' };
    GridSelectedData: any = {};

    @ViewChild('DetailCrossCheck') DetailCrossCheck: ModalDetailCrossCheckComponent;

    constructor(
        private utilityService: UtilityService,
        private setupUserService: SetupUserService,
        private httpOperationService: HttpOperationService,
        private setupKasirIrjaService: SetupKasirIrjaService,
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: "Cetak_Detail_Pendapatan_Versi_Sistem", Icons1: 'fa-print fa-sm', Captions: 'Cetak History Cross Check Tutup Kasir' },
            // { Id: "Lihat_Detail_Pendapatan_Versi_Sistem", Icons1: 'fa-info fa-sm', Captions: 'Lihat Detail Pendapatan Versi Sistem' }
        ];

        this.FilterColumnDatasource = [
            { text: 'Pilih User Kasir', value: 'mu.user_name' },
            { text: 'Tgl. Buka Kasir', value: "tsk.waktu_tutup_kasir::date" },
        ];

        this.handlePencarianFilter([
            {
                columnName: "tsk.waktu_tutup_kasir::date",
                filter: "between",
                searchText: `${this.utilityService.onFormatDate(new Date(), 'yyyy-MM-Do')}`,
                searchText2: `${this.utilityService.onFormatDate(new Date(), 'yyyy-MM-Do')}`,
            }
        ]);

        this.setupUserService.onGetAllUserKasir()
            .subscribe((result) => {
                this.FilterDropdownDatasource = result.data;

                this.FilterDropdownFields = { text: 'full_name', value: 'user_name' };
            });
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Cetak_Detail_Pendapatan_Versi_Sistem':
                this.onPrintDetailPendapatanVersiSistem();
                break;
            case 'Lihat_Detail_Pendapatan_Versi_Sistem':
                this.onPreviewDetailPendapatanVersiSistem();
                break;
            default:
                break;
        }
    }

    onPrintDetailPendapatanVersiSistem(): void {
        this.setupKasirIrjaService.onPrintDetailPendapatanVersiSistem(this.GridSelectedData.id_saldo_kasir)
    }

    onPreviewDetailPendapatanVersiSistem(): void {
        this.setupKasirIrjaService.onPreviewDetailPendapatanVersiSistem(this.GridSelectedData.id_saldo_kasir)
            .subscribe((result) => {
                let window_new_tab = window.open('', 'window_new_tab');

                window_new_tab.document.body.innerHTML = result;
            })
    }

    handlePencarianFilter(args: PostRequestByDynamicFiterModel[]): void {
        this.setupKasirIrjaService.onGetHistoryCrossCheckTutupKasir(args)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            })
    }

    handleSelectedRow(args: any): void {
        this.GridSelectedData = args.data;
    }

    handleDoubleClick(args: any): void {
        this.setupKasirIrjaService.HistoryCrossCheckTutupKasir.next(args.rowData);

        this.DetailCrossCheck.handleOpenModal();
    }
}
