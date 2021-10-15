import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { IInformasiPasienModel } from 'src/app/modules/Billing/models/trans-billing/trans-billing.model';
import { TransBillingService } from 'src/app/modules/Billing/services/trans-billing/trans-billing.service';

@Component({
    selector: 'app-history-invoice-irja',
    templateUrl: './history-invoice-irja.component.html',
    styleUrls: ['./history-invoice-irja.component.css']
})
export class HistoryInvoiceIrjaComponent implements OnInit {

    @Input('InformasiPasien') InformasiPasien: IInformasiPasienModel;

    DaftarInvoice: any[] = [];

    @ViewChild('GridDetailInvoice') GridDetailInvoice: GridComponent;
    GridDetailInvoiceDatasource: any[] = [];

    FormHistoryInvoice: FormGroup;

    SelectedInvoice: any[] = [];

    NomorInvoiceTerpilih: string = "";

    @Output('onSendPaymentWithExistingInvoice') onSendPaymentWithExistingInvoice = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private transBillingService: TransBillingService
    ) { }

    ngOnInit(): void {
        this.FormHistoryInvoice = this.formBuilder.group({
            id_register: [0, []],
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

    handleOpenHistoryInvoice(): void {
        let btnModalHistoryInvoice = document.getElementById('btnModalHistoryInvoice') as HTMLElement;

        btnModalHistoryInvoice.click();

        setTimeout(() => {
            this.onGetHistoryInvoice();
        }, 500);
    }

    onGetHistoryInvoice(): void {
        this.transBillingService.onGetHistoryInvoiceWithoutPayment(this.InformasiPasien.id_register)
            .subscribe((result) => {
                this.DaftarInvoice = result.data;
            });
    }

    handleClickDetailItemInvoice(item: any): void {
        this.NomorInvoiceTerpilih = item.nomor_invoice;

        this.FormHistoryInvoice.setValue(item);

        this.GridDetailInvoiceDatasource = [];
        this.GridDetailInvoiceDatasource = item.invoice_item;

        this.GridDetailInvoice.refresh();
    }

    onFillFormHistoryInvoice(Data: any): void {
        this.FormHistoryInvoice.setValue(Data);
    }

    handleChangeCheckboxItemInvoice(item: any): void {
        this.SelectedInvoice.push(item);
    }

    handleSelectedRowDetailInvoice(args: any): void {

    }

    handleSubmitBayarTagihan(): void {
        let item_invoice = [];

        let total_amount = 0;
        let claim_amount = 0;
        let deposit_amount = 0;
        let paid_amount = 0;
        let belum_lunas = 0;

        this.SelectedInvoice.filter((item) => {
            let item_transaksi = [];

            item.invoice_item.filter((child_item) => { return item_transaksi.push(child_item.id_transaksi) });

            item_invoice.push(
                {
                    id_invoice: item.id_invoice,
                    item_transaksi: item_transaksi
                }
            );

            total_amount += item.total_amount;
            claim_amount += item.claim_amount;
            deposit_amount += item.deposit_amount;
            paid_amount += item.paid_amount;
            belum_lunas += item.paid_amount;
        });

        let header = {
            id_register: this.InformasiPasien.id_register,
            total_amount: total_amount,
            claim_amount: claim_amount,
            deposit_amount: deposit_amount,
            paid_amount: paid_amount,
            belum_lunas: belum_lunas,
        };

        this.transBillingService.HeaderBilling.next(header);

        let btnCloseHistoryInvoice = document.getElementById('btnCloseHistoryInvoice') as HTMLElement;
        btnCloseHistoryInvoice.click();

        setTimeout(() => {
            this.onSendPaymentWithExistingInvoice.emit(item_invoice);

            this.SelectedInvoice = [];

            this.GridDetailInvoiceDatasource = [];
        }, 500);
    }

    get id_register(): AbstractControl { return this.FormHistoryInvoice.get('id_register'); }
    get id_invoice(): AbstractControl { return this.FormHistoryInvoice.get('id_invoice'); }
    get tgl_invoice(): AbstractControl { return this.FormHistoryInvoice.get('tgl_invoice'); }
    get nomor_invoice(): AbstractControl { return this.FormHistoryInvoice.get('nomor_invoice'); }
    get paid_amount(): AbstractControl { return this.FormHistoryInvoice.get('paid_amount'); }
    get claim_amount(): AbstractControl { return this.FormHistoryInvoice.get('claim_amount'); }
    get total_amount(): AbstractControl { return this.FormHistoryInvoice.get('total_amount'); }
    get deposit_amount(): AbstractControl { return this.FormHistoryInvoice.get('deposit_amount'); }

}
