import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { IBankPaymentModel } from 'src/app/modules/Billing/models/setup-data/setup-bank-payment.model';
import { IEdcPaymentModel } from 'src/app/modules/Billing/models/setup-data/setup-edc-payment.model';
import { SetupBankPaymentService } from 'src/app/modules/Billing/services/setup-data/setup-bank-payment/setup-bank-payment.service';
import { SetupEdcPaymentService } from 'src/app/modules/Billing/services/setup-data/setup-edc-payment/setup-edc-payment.service';
import { SetupPaymentMethodService } from 'src/app/modules/Billing/services/setup-data/setup-payment-method/setup-payment-method.service';
import { TransBillingService } from 'src/app/modules/Billing/services/trans-billing/trans-billing.service';

@Component({
    selector: 'app-payment-credit-irja',
    templateUrl: './payment-credit-irja.component.html',
    styleUrls: ['./payment-credit-irja.component.css']
})
export class PaymentCreditIrjaComponent implements OnInit {

    FormPaymentCredit: FormGroup;

    @ViewChild('BankPaymentDropdown') BankPaymentDropdown: DropDownListComponent;
    BankPaymentDatasource: IBankPaymentModel[] = [];
    BankPaymentFields: object = { text: 'nama_bank_payment', value: 'id_bank_payment' };

    @ViewChild('EDCDropdown') EDCDropdown: DropDownListComponent;
    EdcPaymentDatasource: IEdcPaymentModel[] = [];
    EdcPaymentFields: object = { text: 'nama_edc_payment', value: 'id_edc_payment' };

    @Output('onSendPaymentCredit') onSendPaymentCredit = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private transBillingService: TransBillingService,
        private setupEdcPaymentService: SetupEdcPaymentService,
        private setupBankPaymentService: SetupBankPaymentService,
        private setupPaymentMethodService: SetupPaymentMethodService,
    ) { }

    ngOnInit(): void {
        this.onSetFormPaymentCreditAttributes();
    }

    onSetFormPaymentCreditAttributes(): void {
        this.FormPaymentCredit = this.formBuilder.group({
            id_payment_method: [0, []],
            id_payment_method_detail: [0, []],
            jenis_pembayaran: ["", []],
            belum_lunas: [0, []],
            koreksi: [0, []],
            total_belum_lunas: [0, []],
            jumlah_bayar: [0, []],
            kembalian: [0, []],
            id_voucher: [0, []],
            id_bank_payment: [0, []],
            id_edc_payment: [0, []],
            trace_number: ["", []],
            jenis_kartu: ["", []],
            card_holder: ["", []],
            nomor_kartu: ["", []],
            keterangan: ["", []],
        });

        this.setupBankPaymentService.onGetAll()
            .subscribe((result) => {
                this.BankPaymentDatasource = result.data;
            });

        this.setupEdcPaymentService.onGetAll()
            .subscribe((result) => {
                this.EdcPaymentDatasource = result.data;
            });

        this.onGetFormAdditionalAttributes();
    }

    onGetFormAdditionalAttributes(): void {
        this.setupPaymentMethodService.onGetAllPaymentMethodByName("CREDIT CARD")
            .subscribe((result) => {
                this.id_payment_method.setValue(result.data.id_payment_method);
                this.id_payment_method_detail.setValue(0);
                this.jenis_pembayaran.setValue(result.data.payment_method);
            });

        this.transBillingService.HeaderBilling$
            .subscribe((result) => {
                if (Object.keys(result).length > 0) {
                    this.belum_lunas.setValue(result['belum_lunas']);
                    this.jumlah_bayar.setValue(result['belum_lunas']);
                    this.total_belum_lunas.setValue(this.belum_lunas.value - this.koreksi.value);
                }
            });
    }

    handleChangeJumlahBayar(JumlahBayar: number): void {
        if (JumlahBayar > this.total_belum_lunas.value) {
            let kembalian = JumlahBayar - this.total_belum_lunas.value;

            this.kembalian.setValue(kembalian);
        };
    }

    onSendJumlahBayar(FormPaymentCredit: any): void {
        this.onSendPaymentCredit.emit(FormPaymentCredit);

        this.onResetFormPaymentCredit();
    }

    onResetFormPaymentCredit(): void {
        this.FormPaymentCredit.reset();

        this.id_payment_method.setValue(0);
        this.id_payment_method_detail.setValue(0);
        this.belum_lunas.setValue(0);
        this.koreksi.setValue(0);
        this.total_belum_lunas.setValue(0);
        this.jumlah_bayar.setValue(0);
        this.kembalian.setValue(0);
        this.id_voucher.setValue(0);
        this.id_bank_payment.setValue(0);
        this.id_edc_payment.setValue(0);
        this.trace_number.setValue("");
        this.jenis_kartu.setValue("");
        this.card_holder.setValue("");
        this.nomor_kartu.setValue("");
        this.keterangan.setValue("");

        this.onGetFormAdditionalAttributes();
    }

    get id_payment_method(): AbstractControl { return this.FormPaymentCredit.get('id_payment_method'); }
    get id_payment_method_detail(): AbstractControl { return this.FormPaymentCredit.get('id_payment_method_detail'); }
    get jenis_pembayaran(): AbstractControl { return this.FormPaymentCredit.get('jenis_pembayaran'); }
    get belum_lunas(): AbstractControl { return this.FormPaymentCredit.get('belum_lunas'); }
    get koreksi(): AbstractControl { return this.FormPaymentCredit.get('koreksi'); }
    get total_belum_lunas(): AbstractControl { return this.FormPaymentCredit.get('total_belum_lunas'); }
    get jumlah_bayar(): AbstractControl { return this.FormPaymentCredit.get('jumlah_bayar'); }
    get kembalian(): AbstractControl { return this.FormPaymentCredit.get('kembalian'); }
    get id_voucher(): AbstractControl { return this.FormPaymentCredit.get('id_voucher'); }
    get id_bank_payment(): AbstractControl { return this.FormPaymentCredit.get('id_bank_payment'); }
    get id_edc_payment(): AbstractControl { return this.FormPaymentCredit.get('id_edc_payment'); }
    get trace_number(): AbstractControl { return this.FormPaymentCredit.get('trace_number'); }
    get jenis_kartu(): AbstractControl { return this.FormPaymentCredit.get('jenis_kartu'); }
    get card_holder(): AbstractControl { return this.FormPaymentCredit.get('card_holder'); }
    get nomor_kartu(): AbstractControl { return this.FormPaymentCredit.get('nomor_kartu'); }
    get keterangan(): AbstractControl { return this.FormPaymentCredit.get('keterangan'); }
}
