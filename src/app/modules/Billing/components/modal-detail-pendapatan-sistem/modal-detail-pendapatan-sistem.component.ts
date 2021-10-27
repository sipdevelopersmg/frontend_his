import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { take } from 'rxjs/operators';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupKasirIrjaService } from '../../services/kasir/kasir-rawat-jalan/setup-kasir-irja.service';

@Component({
    selector: 'app-modal-detail-pendapatan-sistem',
    templateUrl: './modal-detail-pendapatan-sistem.component.html',
    styleUrls: ['./modal-detail-pendapatan-sistem.component.css']
})
export class ModalDetailPendapatanSistemComponent implements OnInit {

    DaftarInvoiceFields: any = {};
    DaftarInvoice: any[] = [];

    @ViewChild('GridDetailInvoice') GridDetailInvoice: GridComponent;
    GridDetailInvoiceDatasource: any[] = [];
    GridDetailInvoiceToolbar: any[] = [];

    FormDetailPendapatanSistem: FormGroup;

    FormHistoryInvoice: FormGroup;

    SelectedInvoice: any[] = [];

    NomorInvoiceTerpilih: string = "";

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupKasirIrjaService: SetupKasirIrjaService,
    ) { }

    ngOnInit(): void {
        this.FormDetailPendapatanSistem = this.formBuilder.group({
            id_saldo_kasir: [0, []],
            user_kasir: ["", []],
            nama_kasir: ["", []],
            id_payment_method: [0, []],
            jenis_payment: ["", []],
            jumlah_pembayaran: ["", []],
            waktu_buka_kasir: ["", []],
            waktu_tutup_kasir: ["", []]
        });

        this.FormHistoryInvoice = this.formBuilder.group({
            id_register: [0, []],
            id_payment: [0, []],
            id_invoice: [0, []],
            tgl_invoice: ["", []],
            nomor_invoice: ["", []],
            paid_amount: [0, []],
            claim_amount: [0, []],
            total_amount: [0, []],
            deposit_amount: [0, []],
            invoice_item: [[], []],
        });
    }

    handleOpenModal(): void {
        let btnModalDetailPendapatanSistem = document.getElementById('btnModalDetailPendapatanSistem') as HTMLElement;
        btnModalDetailPendapatanSistem.click();

        setTimeout(() => {
            this.setupKasirIrjaService.HeaderPendapatanVersiSistem
                .subscribe((result) => {
                    this.FormDetailPendapatanSistem.setValue(result);

                    this.onGetDetailPaymentAndInvoice(result['id_saldo_kasir'], result['id_payment_method']);
                });
        }, 500);
    }

    onGetDetailPaymentAndInvoice(id_saldo_kasir: number, id_payment_method: number): void {
        this.setupKasirIrjaService.onGetDaftarPaymentForDetailPendapatanVersiSistem(id_saldo_kasir, id_payment_method)
            .pipe(take(1))
            .subscribe((result) => {
                this.DaftarInvoice = result.data;

                console.log(result.data);
            });
    }

    onTogglingHideChildMenu(id: any) {
        this.onTogglingIconArrow(id);

        // ** Get element berdasarkan ChildMenu yg dipilih
        let elem = document.getElementById(id + "ChildMenu");

        // ** Buat variable kondisi
        let conditionHidden = elem.classList.contains("is-hidden");
        let conditionShow = elem.classList.contains("is-show");

        // ** Kondisi apabila element ChildMenu memiliki class is-hidden atau is-show
        if (conditionHidden) {
            if (conditionShow) {
                elem.classList.remove("is-hidden");
                elem.classList.add("is-selected");
            } else {
                elem.classList.remove("is-hidden");
                elem.classList.add("is-show");
                elem.classList.add("is-selected");
            };
        };

        // ** Kondisi apabila element ChildMenu tidak memiliki class is-hidden atau is-show
        if (!conditionHidden) {
            if (conditionShow) {
                elem.classList.add("is-hidden");
                elem.classList.remove("is-show");
                elem.classList.remove("is-selected");

            } else {
                elem.classList.add("is-hidden");
                elem.classList.remove("is-selected");
            }
        };
    }

    onTogglingIconArrow(id: string) {
        // ** Get element berdasarkan Icon yg dipilih
        let elem = document.getElementById(id + "Icon");

        // ** Buat variable kondisi
        let conditionRight = elem.classList.contains("fa-angle-right");
        let conditionDown = elem.classList.contains("fa-angle-down");

        // ** Kondisi apabila element Icon tidak memiliki class angle-right atau angle-down
        if (conditionRight && !conditionDown) {
            elem.classList.remove("fa-angle-right");
            elem.classList.add("fa-angle-down");
        };

        if (!conditionRight && conditionDown) {
            elem.classList.remove("fa-angle-down");
            elem.classList.add("fa-angle-right");
        };
    }

    onTogglingGrandHideChildMenu(id: any) {
        this.onTogglingIconArrowChildMenu(id);

        // ** Get element berdasarkan GrandChildMenu yg dipilih
        let elem = document.getElementById(id + "GrandChildMenu");

        // ** Buat variable kondisi
        let conditionHidden = elem.classList.contains("is-hidden");
        let conditionShow = elem.classList.contains("is-show");

        // ** Kondisi apabila element GrandChildMenu memiliki class is-hidden atau is-show
        if (conditionHidden) {
            if (conditionShow) {
                elem.classList.remove("is-hidden");
                elem.classList.add("is-selected");
            } else {
                elem.classList.remove("is-hidden");
                elem.classList.add("is-show");
                elem.classList.add("is-selected");
            };
        };

        // ** Kondisi apabila element GrandChildMenu tidak memiliki class is-hidden atau is-show
        if (!conditionHidden) {
            if (conditionShow) {
                elem.classList.add("is-hidden");
                elem.classList.remove("is-show");
                elem.classList.remove("is-selected");

            } else {
                elem.classList.add("is-hidden");
                elem.classList.remove("is-selected");
            }
        };
    }

    onTogglingIconArrowChildMenu(id: string) {
        // ** Get element berdasarkan Icon yg dipilih
        let elem = document.getElementById(id + "IconChildMenu");

        // ** Buat variable kondisi
        let conditionRight = elem.classList.contains("fa-angle-right");
        let conditionDown = elem.classList.contains("fa-angle-down");

        // ** Kondisi apabila element Icon tidak memiliki class angle-right atau angle-down
        if (conditionRight && !conditionDown) {
            elem.classList.remove("fa-angle-right");
            elem.classList.add("fa-angle-down");
        };

        if (!conditionRight && conditionDown) {
            elem.classList.remove("fa-angle-down");
            elem.classList.add("fa-angle-right");
        };
    }

    handleClickDetailItem(item: any): void {
        this.GridDetailInvoiceDatasource = item.item_invoice;
        this.GridDetailInvoice.refresh();

        this.NomorInvoiceTerpilih = item.nomor_invoice;

        this.id_register.setValue(item.id_register);
        this.id_payment.setValue(item.id_payment);
        this.id_invoice.setValue(item.id_invoice);
        this.tgl_invoice.setValue(item.tgl_invoice);
        this.nomor_invoice.setValue(item.nomor_invoice);
        this.paid_amount.setValue(item.paid_amount);
        this.claim_amount.setValue(item.claim_amount);
        this.total_amount.setValue(item.total_amount);
        this.deposit_amount.setValue(item.deposit_amount);
    }

    handleCloseModal(): void {
        let btnCloseDetailPendapatanSistem = document.getElementById('btnCloseDetailPendapatanSistem') as HTMLElement;
        btnCloseDetailPendapatanSistem.click();
    }

    get id_saldo_kasir(): AbstractControl { return this.FormDetailPendapatanSistem.get('id_saldo_kasir'); }
    get user_kasir(): AbstractControl { return this.FormDetailPendapatanSistem.get('user_kasir'); }
    get nama_kasir(): AbstractControl { return this.FormDetailPendapatanSistem.get('nama_kasir'); }
    get id_payment_method(): AbstractControl { return this.FormDetailPendapatanSistem.get('id_payment_method'); }
    get jenis_payment(): AbstractControl { return this.FormDetailPendapatanSistem.get('jenis_payment'); }
    get jumlah_pembayaran(): AbstractControl { return this.FormDetailPendapatanSistem.get('jumlah_pembayaran'); }
    get waktu_buka_kasir(): AbstractControl { return this.FormDetailPendapatanSistem.get('waktu_buka_kasir'); }
    get waktu_tutup_kasir(): AbstractControl { return this.FormDetailPendapatanSistem.get('waktu_tutup_kasir'); }

    get id_register(): AbstractControl { return this.FormHistoryInvoice.get('id_register'); }
    get id_payment(): AbstractControl { return this.FormHistoryInvoice.get('id_payment'); }
    get id_invoice(): AbstractControl { return this.FormHistoryInvoice.get('id_invoice'); }
    get tgl_invoice(): AbstractControl { return this.FormHistoryInvoice.get('tgl_invoice'); }
    get nomor_invoice(): AbstractControl { return this.FormHistoryInvoice.get('nomor_invoice'); }
    get paid_amount(): AbstractControl { return this.FormHistoryInvoice.get('paid_amount'); }
    get claim_amount(): AbstractControl { return this.FormHistoryInvoice.get('claim_amount'); }
    get total_amount(): AbstractControl { return this.FormHistoryInvoice.get('total_amount'); }
    get deposit_amount(): AbstractControl { return this.FormHistoryInvoice.get('deposit_amount'); }
}
