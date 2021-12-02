import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { IInformasiPasienModel } from 'src/app/modules/Billing/models/trans-billing/trans-billing.model';
import { TransBillingService } from 'src/app/modules/Billing/services/trans-billing/trans-billing.service';
import { SidebarChildMenuModel } from 'src/app/modules/core/models/navigation/menu.model';

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
    GridDetailInvoiceToolbar: any[] = [];

    @ViewChild('GridDetailInvoiceResep') GridDetailInvoiceResep: GridComponent;
    GridDetailInvoiceResepDatasource: any[] = [];

    FormHistoryInvoice: FormGroup;

    SelectedInvoice: any[] = [];

    NomorInvoiceTerpilih: string = "";

    @Output('onSendPaymentWithExistingInvoice') onSendPaymentWithExistingInvoice = new EventEmitter<any>();
    @Output('onSendBatalInvoice') onSendBatalInvoice = new EventEmitter<any>();

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
            charge_amount: [0, []],
            deposit_amount: [0, []],
            invoice_item: [[], []],
            invoice_resep_item: [[], []]
        });
    }

    onGetButtonSidebarMenu(): void {
        let SidebarMenu: SidebarChildMenuModel = JSON.parse(localStorage.getItem('ActiveSidebarMenu'))[0];

        let Button = SidebarMenu.button;

        let UserData: IAuthenticationResponseModel = JSON.parse(localStorage.getItem('UserData'));

        if (Button.length > 0 || (UserData.id_role === 5 || UserData.nama_role === "pengawas kasir")) {
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

    handleOpenHistoryInvoice(): void {
        let btnModalHistoryInvoice = document.getElementById('btnModalHistoryInvoice') as HTMLElement;

        btnModalHistoryInvoice.click();

        this.GridDetailInvoiceDatasource = [];
        this.GridDetailInvoice.refresh();

        this.onGetButtonSidebarMenu();

        setTimeout(() => {
            this.onGetHistoryInvoice();
        }, 500);
    }

    handleCloseHistoryInvoice(): void {
        let btnCloseHistoryInvoice = document.getElementById('btnCloseHistoryInvoice') as HTMLElement;
        btnCloseHistoryInvoice.click();
    }

    onGetHistoryInvoice(): void {
        this.transBillingService.onGetHistoryInvoiceWithoutPayment(this.InformasiPasien.id_register)
            .subscribe((result) => {
                this.DaftarInvoice = result.data;
            });
    }

    handleClickDetailItemInvoice(item: any): void {

        item.charge_amount = item.total_amount;

        this.NomorInvoiceTerpilih = item.nomor_invoice;

        this.FormHistoryInvoice.setValue(item);

        this.GridDetailInvoiceDatasource = [];
        this.GridDetailInvoiceDatasource = item.invoice_item;
        this.GridDetailInvoice.refresh();

        this.GridDetailInvoiceResepDatasource = [];
        this.GridDetailInvoiceResepDatasource = item.invoice_resep_item;
        this.GridDetailInvoiceResep.refresh();
    }

    handleToolbarClickDetailInvoice(args: any): void {
        const item = args.item.id;

        switch (item) {
            case 'batal_invoice':
                let parameter = {};
                parameter = {
                    id_register: this.id_register.value,
                    id_invoice: this.id_invoice.value,
                };
                this.onSendBatalInvoice.emit(parameter);
                break;
            default:
                break;
        }
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
        let charge_amount = 0;

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
            belum_lunas += item.total_amount;
            charge_amount += item.total_amount;
        });

        let header = {
            id_register: this.InformasiPasien.id_register,
            total_amount: total_amount,
            claim_amount: claim_amount,
            deposit_amount: deposit_amount,
            paid_amount: paid_amount,
            belum_lunas: belum_lunas,
            charge_amount: charge_amount,
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
    get charge_amount(): AbstractControl { return this.FormHistoryInvoice.get('charge_amount'); }
    get deposit_amount(): AbstractControl { return this.FormHistoryInvoice.get('deposit_amount'); }

}
