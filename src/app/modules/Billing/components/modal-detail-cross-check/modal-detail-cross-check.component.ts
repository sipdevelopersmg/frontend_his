import { formatCurrency } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { GridComponent, CommandModel } from '@syncfusion/ej2-angular-grids';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupKasirIrjaService } from '../../services/kasir/kasir-rawat-jalan/setup-kasir-irja.service';
import { ModalDetailPendapatanSistemComponent } from '../modal-detail-pendapatan-sistem/modal-detail-pendapatan-sistem.component';

@Component({
    selector: 'app-modal-detail-cross-check',
    templateUrl: './modal-detail-cross-check.component.html',
    styleUrls: ['./modal-detail-cross-check.component.css']
})
export class ModalDetailCrossCheckComponent implements OnInit, OnDestroy {

    FormDetailCrossCheck: FormGroup;

    @ViewChild('GridPendapatanVersiSistem') GridPendapatanVersiSistem: GridComponent;
    GridPendapatanSistemDatasource: any[] = [];
    CommandLihatDetailVersiKomputer: CommandModel[] = [
        { buttonOption: { iconCss: 'fas fa-info fa-sm' } }
    ];

    @ViewChild('GridPendapatanVersiKasir') GridPendapatanVersiKasir: GridComponent;
    GridPendapatanKasirDatasource: any[] = [];

    HeaderPendapatanVersiSistem: any = {};

    @ViewChild('DetailPendapatanSistem') DetailPendapatanSistem: ModalDetailPendapatanSistemComponent;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupKasirIrjaService: SetupKasirIrjaService,
    ) { }

    ngOnInit(): void {
        this.onSetFormFormDetailCrossCheckAttributes();
    }

    onSetFormFormDetailCrossCheckAttributes(): void {
        this.FormDetailCrossCheck = this.formBuilder.group({
            user_pengawas_kasir: ["", []],
            user_kasir: ["", []],
            waktu_cross_check: ["", []],
            status_cross_check: ["", []],
            keterangan: ["", []],
        });
    }

    handleOpenModal(): void {
        let btnModalDetailCrossCheck = document.getElementById('btnModalDetailCrossCheck') as HTMLElement;
        btnModalDetailCrossCheck.click();

        setTimeout(() => {
            this.setupKasirIrjaService.onGetDetailHistoryCrossCheckTutupKasir(this.setupKasirIrjaService.HistoryCrossCheckTutupKasir.value['id_saldo_kasir'])
                .subscribe((result) => {
                    this.user_pengawas_kasir.setValue(result.data.kasir.username_pengawas_kasir);
                    this.user_kasir.setValue(result.data.kasir.username_kasir);
                    this.waktu_cross_check.setValue(result.data.kasir.waktu_validasi);
                    this.status_cross_check.setValue((result.data.kasir.status_croscek));
                    this.keterangan.setValue((result.data.kasir.keterangan_validasi));

                    this.GridPendapatanSistemDatasource = result.data.pendapatan_sistem;

                    this.GridPendapatanKasirDatasource = result.data.pendapatan_kasir;

                    this.HeaderPendapatanVersiSistem['id_saldo_kasir'] = this.setupKasirIrjaService.HistoryCrossCheckTutupKasir.value['id_saldo_kasir'];
                    this.HeaderPendapatanVersiSistem['user_kasir'] = result.data.kasir.username_kasir;
                    this.HeaderPendapatanVersiSistem['nama_kasir'] = result.data.kasir.username_kasir;
                    this.HeaderPendapatanVersiSistem['waktu_buka_kasir'] = this.utilityService.onFormatDate(result.data.kasir.waktu_validasi, 'Do MMMM yyyy HH:mm:ss');
                    this.HeaderPendapatanVersiSistem['waktu_tutup_kasir'] = this.utilityService.onFormatDate(result.data.kasir.waktu_validasi, 'Do MMMM yyyy HH:mm:ss');

                    this.setupKasirIrjaService.HeaderPendapatanVersiSistem.next(this.HeaderPendapatanVersiSistem);
                });
        }, 500);
    }

    handleSelectedRowVersiSistem(args: any): void {

    }

    handleCommandClickVersiSistem(args: any): void {
        let data = args.rowData;

        console.log(args);

        this.HeaderPendapatanVersiSistem['id_payment_method'] = data.id_payment_method;
        this.HeaderPendapatanVersiSistem['jenis_payment'] = data.payment_method;
        this.HeaderPendapatanVersiSistem['jumlah_pembayaran'] = formatCurrency(data.jumlah_bayar, 'EN', 'Rp. ');

        this.setupKasirIrjaService.HeaderPendapatanVersiSistem.next(this.HeaderPendapatanVersiSistem);

        this.DetailPendapatanSistem.handleOpenModal();
    }

    handleSelectedRowVersiKasir(args: any): void {

    }

    handleCloseModal(): void {
        let btnCloseModalDetailCrossCheck = document.getElementById('btnCloseModalDetailCrossCheck') as HTMLElement;
        btnCloseModalDetailCrossCheck.click();
    }

    ngOnDestroy(): void {
        this.DetailPendapatanSistem.handleCloseModal();
        this.handleCloseModal();
    }

    get user_pengawas_kasir(): AbstractControl { return this.FormDetailCrossCheck.get('user_pengawas_kasir'); }
    get user_kasir(): AbstractControl { return this.FormDetailCrossCheck.get('user_kasir'); }
    get waktu_cross_check(): AbstractControl { return this.FormDetailCrossCheck.get('waktu_cross_check'); }
    get status_cross_check(): AbstractControl { return this.FormDetailCrossCheck.get('status_cross_check'); }
    get keterangan(): AbstractControl { return this.FormDetailCrossCheck.get('keterangan'); }
}
