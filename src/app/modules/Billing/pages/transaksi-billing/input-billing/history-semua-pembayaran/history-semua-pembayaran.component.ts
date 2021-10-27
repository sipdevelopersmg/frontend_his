import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { IInformasiPasienModel } from 'src/app/modules/Billing/models/trans-billing/trans-billing.model';
import { TransBillingService } from 'src/app/modules/Billing/services/trans-billing/trans-billing.service';
import { SidebarChildMenuModel } from 'src/app/modules/core/models/navigation/menu.model';

@Component({
    selector: 'app-history-semua-pembayaran',
    templateUrl: './history-semua-pembayaran.component.html',
    styleUrls: ['./history-semua-pembayaran.component.css']
})
export class HistorySemuaPembayaranComponent implements OnInit {

    @Input('InformasiPasien') InformasiPasien: IInformasiPasienModel;

    DaftarInvoiceFields: any = {};
    DaftarInvoice: any[] = [];

    @ViewChild('GridDetailInvoice') GridDetailInvoice: GridComponent;
    GridDetailInvoiceDatasource: any[] = [];
    GridDetailInvoiceToolbar: any[] = [];

    FormHistoryInvoice: FormGroup;

    SelectedInvoice: any[] = [];

    NomorInvoiceTerpilih: string = "";

    @Output('onSendBatalPayment') onSendBatalPayment = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private transBillingService: TransBillingService
    ) { }

    ngOnInit(): void {
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

        this.GridDetailInvoiceToolbar = [
            { text: 'Batalkan Payment', tooltipText: 'Batalkan Payment', prefixIcon: 'fas fa-ban fa-sm', id: 'batal_payment' },
        ];
    }

    onGetButtonSidebarMenu(): void {
        let SidebarMenu: SidebarChildMenuModel = JSON.parse(localStorage.getItem('ActiveSidebarMenu'))[0];

        let Button = SidebarMenu.button;

        if (Button.length > 0) {
            Button.forEach((item) => {
                if (item.caption == "Batal Payment") {
                    this.GridDetailInvoiceToolbar = [
                        { text: 'Batalkan Invoice', tooltipText: 'Batalkan Invoice', prefixIcon: 'fas fa-ban fa-sm', id: 'batal_invoice' },
                    ];
                }
            });
        } else {
            this.GridDetailInvoiceToolbar = [];
        }
    }

    handleOpenHistoryAllPayment(): void {
        let btnModalHistoryAllPayment = document.getElementById('btnModalHistoryAllPayment') as HTMLElement;

        btnModalHistoryAllPayment.click();

        this.GridDetailInvoiceDatasource = [];
        this.GridDetailInvoice.refresh();

        this.onGetButtonSidebarMenu();

        setTimeout(() => {
            this.onGetHistoryAllPayment();
        }, 500);
    }

    handleCloseHistoryAllPayment(): void {
        let btnCloseHistoryPayment = document.getElementById('btnCloseHistoryPayment') as HTMLElement;
        btnCloseHistoryPayment.click();
    }

    onGetHistoryAllPayment(): void {
        this.transBillingService.onGetAllHistoryAllPayment(this.InformasiPasien.id_register)
            .subscribe((result) => {
                this.DaftarInvoice = result.data;
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

    handleToolbarClick(args: any): void {
        const item = args.item.id;

        switch (item) {
            case 'batal_payment':
                let parameter = {};
                parameter = {
                    id_register: this.id_register.value,
                    id_payment: this.id_payment.value,
                };
                this.onSendBatalPayment.emit(parameter);
                break;
            default:
                break;
        }
    }

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
