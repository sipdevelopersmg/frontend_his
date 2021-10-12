import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
            // disc_dokter_amount: [0, []],
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
        this.FormHistoryInvoice.setValue(item);

        this.GridDetailInvoiceDatasource = [];
        this.GridDetailInvoiceDatasource = item.invoice_item;

        this.GridDetailInvoice.refresh();
    }

    onFillFormHistoryInvoice(Data: any): void {
        this.FormHistoryInvoice.setValue(Data);
    }

    handleChangeCheckboxItemInvoice(item: any): void {
        console.log(item);
    }

    handleSelectedRowDetailInvoice(args: any): void {

    }

    get id_register(): AbstractControl { return this.FormHistoryInvoice.get('id_register'); }
    get id_invoice(): AbstractControl { return this.FormHistoryInvoice.get('id_invoice'); }
    get tgl_invoice(): AbstractControl { return this.FormHistoryInvoice.get('tgl_invoice'); }
    get nomor_invoice(): AbstractControl { return this.FormHistoryInvoice.get('nomor_invoice'); }
    get paid_amount(): AbstractControl { return this.FormHistoryInvoice.get('paid_amount'); }
    get claim_amount(): AbstractControl { return this.FormHistoryInvoice.get('claim_amount'); }
    get total_amount(): AbstractControl { return this.FormHistoryInvoice.get('total_amount'); }
    // get disc_dokter_amount(): AbstractControl { return this.FormHistoryInvoice.get('disc_dokter_amount'); }
    get deposit_amount(): AbstractControl { return this.FormHistoryInvoice.get('deposit_amount'); }

}
