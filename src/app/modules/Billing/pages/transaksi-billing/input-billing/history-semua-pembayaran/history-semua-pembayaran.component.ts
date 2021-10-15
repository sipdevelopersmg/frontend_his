import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { IInformasiPasienModel } from 'src/app/modules/Billing/models/trans-billing/trans-billing.model';
import { TransBillingService } from 'src/app/modules/Billing/services/trans-billing/trans-billing.service';

@Component({
    selector: 'app-history-semua-pembayaran',
    templateUrl: './history-semua-pembayaran.component.html',
    styleUrls: ['./history-semua-pembayaran.component.css']
})
export class HistorySemuaPembayaranComponent implements OnInit {

    @Input('InformasiPasien') InformasiPasien: IInformasiPasienModel;

    DaftarInvoiceFields: any = {};
    DaftarInvoice: any[] = [
        {
            id_payment: 1, nomor_payment: 'MX0001', tgl_payment: '2021-10-15T00:00:00',
            invoice_item: [
                { id_invoice: 1, nomor_invoice: 'INV00001', tgl_invoice: '2021-10-15T00:00:00' },
                { id_invoice: 2, nomor_invoice: 'INV00002', tgl_invoice: '2021-10-15T00:00:00' },
            ]
        }
    ];

    @ViewChild('GridDetailInvoice') GridDetailInvoice: GridComponent;
    GridDetailInvoiceDatasource: any[] = [];

    FormHistoryInvoice: FormGroup;

    SelectedInvoice: any[] = [];

    NomorInvoiceTerpilih: string = "";

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

        this.DaftarInvoiceFields = {
            dataSource: this.DaftarInvoice,
            id: 'id_payment',
            text: 'nomor_payment',
            child: 'invoice_item',
        }
    }

    handleOpenHistoryAllPayment(): void {
        let btnModalHistoryAllPayment = document.getElementById('btnModalHistoryAllPayment') as HTMLElement;

        btnModalHistoryAllPayment.click();

        // setTimeout(() => {
        //     this.onGetHistoryAllPayment();
        // }, 500);
    }

    onGetHistoryAllPayment(): void {
        this.transBillingService.onGetHistoryInvoiceWithoutPayment(this.InformasiPasien.id_register)
            .subscribe((result) => {
                this.DaftarInvoice = result.data;
            });
    }

    handleClickDetailItem(item: any): void {
        // this.NomorInvoiceTerpilih = item.nomor_invoice;

        // this.FormHistoryInvoice.setValue(item);

        // this.GridDetailInvoiceDatasource = [];
        // this.GridDetailInvoiceDatasource = item.invoice_item;

        // this.GridDetailInvoice.refresh();
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
