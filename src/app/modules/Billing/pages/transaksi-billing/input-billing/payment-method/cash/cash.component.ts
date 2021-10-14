import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { SetupPaymentMethodService } from 'src/app/modules/Billing/services/setup-data/setup-payment-method/setup-payment-method.service';
import { TransBillingService } from 'src/app/modules/Billing/services/trans-billing/trans-billing.service';

@Component({
    selector: 'app-payment-cash-irja',
    templateUrl: './cash.component.html',
    styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {

    FormPaymentCash: FormGroup;

    @Output('onSendPaymentCash') onSendPaymentCash = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private transBillingService: TransBillingService,
        private setupPaymentMethodService: SetupPaymentMethodService
    ) { }

    ngOnInit(): void {
        this.onSetFormPaymentCashAttributes();
    }

    onSetFormPaymentCashAttributes(): void {
        this.FormPaymentCash = this.formBuilder.group({
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

        this.onGetFormAdditionalAttributes();
    }

    onGetFormAdditionalAttributes(): void {
        this.setupPaymentMethodService.onGetAllPaymentMethodByName("CASH")
            .subscribe((result) => {
                this.id_payment_method.setValue(result.data.id_payment_method);
                this.id_payment_method_detail.setValue(0);
                this.jenis_pembayaran.setValue(result.data.payment_method);
            });

        this.transBillingService.HeaderBilling$
            .subscribe((result) => {
                if (Object.keys(result).length > 0) {

                    this.belum_lunas.setValue(result['belum_lunas']);
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

    onSendJumlahBayar(FormPaymentCash: any): void {
        this.onSendPaymentCash.emit(FormPaymentCash);

        this.onResetFormPaymentCash();
    }

    onResetFormPaymentCash(): void {
        this.FormPaymentCash.reset();

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

    get id_payment_method(): AbstractControl { return this.FormPaymentCash.get('id_payment_method'); }
    get id_payment_method_detail(): AbstractControl { return this.FormPaymentCash.get('id_payment_method_detail'); }
    get jenis_pembayaran(): AbstractControl { return this.FormPaymentCash.get('jenis_pembayaran'); }
    get belum_lunas(): AbstractControl { return this.FormPaymentCash.get('belum_lunas'); }
    get koreksi(): AbstractControl { return this.FormPaymentCash.get('koreksi'); }
    get total_belum_lunas(): AbstractControl { return this.FormPaymentCash.get('total_belum_lunas'); }
    get jumlah_bayar(): AbstractControl { return this.FormPaymentCash.get('jumlah_bayar'); }
    get kembalian(): AbstractControl { return this.FormPaymentCash.get('kembalian'); }
    get id_voucher(): AbstractControl { return this.FormPaymentCash.get('id_voucher'); }
    get id_bank_payment(): AbstractControl { return this.FormPaymentCash.get('id_bank_payment'); }
    get id_edc_payment(): AbstractControl { return this.FormPaymentCash.get('id_edc_payment'); }
    get trace_number(): AbstractControl { return this.FormPaymentCash.get('trace_number'); }
    get jenis_kartu(): AbstractControl { return this.FormPaymentCash.get('jenis_kartu'); }
    get card_holder(): AbstractControl { return this.FormPaymentCash.get('card_holder'); }
    get nomor_kartu(): AbstractControl { return this.FormPaymentCash.get('nomor_kartu'); }
    get keterangan(): AbstractControl { return this.FormPaymentCash.get('keterangan'); }
}
