import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { SetupPaymentMethodService } from 'src/app/modules/Billing/services/setup-data/setup-payment-method/setup-payment-method.service';
import { TransBillingRawatDaruratService } from 'src/app/modules/Billing/services/trans-billing-rawat-darurat/trans-billing-rawat-darurat.service';
import { TransBillingService } from 'src/app/modules/Billing/services/trans-billing/trans-billing.service';

@Component({
    selector: 'app-payment-qris-irja',
    templateUrl: './qris.component.html',
    styleUrls: ['./qris.component.css']
})
export class QrisComponent implements OnInit {

    FormPaymentQRIS: FormGroup;

    @Input("JenisRawatState") JenisRawatState: string;

    @Output('onSendPaymentQRIS') onSendPaymentQRIS = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private transBillingService: TransBillingService,
        private setupPaymentMethodService: SetupPaymentMethodService,
        private transBillingRawatDaruratService: TransBillingRawatDaruratService,
    ) { }

    ngOnInit(): void {
        this.onSetFormPaymentQRISAttributes();
    }

    onSetFormPaymentQRISAttributes(): void {
        this.FormPaymentQRIS = this.formBuilder.group({
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
        this.setupPaymentMethodService.onGetAllPaymentMethodByName("QR")
            .subscribe((result) => {
                this.id_payment_method.setValue(result.data.id_payment_method);
                this.id_payment_method_detail.setValue(0);
                this.jenis_pembayaran.setValue(result.data.payment_method);
            });

        switch (this.JenisRawatState) {
            case 'IRJA':
                this.onGetJenisRawatIrjaAdditionalFormAttributes();
                break;
            case 'IRNA':
                this.onGetJenisRawatIrnaAdditionalFormAttributes();
                break;
            case 'IRDA':
                this.onGetJenisRawatIrdaAdditionalFormAttributes();
                break;
            default:
                break;
        }
    }

    onGetJenisRawatIrjaAdditionalFormAttributes(): void {
        this.transBillingService.HeaderBilling$
            .subscribe((result) => {
                if (Object.keys(result).length > 0) {
                    this.belum_lunas.setValue(result['belum_lunas']);
                    this.total_belum_lunas.setValue(this.belum_lunas.value - this.koreksi.value);
                }
            });
    }

    onGetJenisRawatIrnaAdditionalFormAttributes(): void {
        this.transBillingRawatDaruratService.HeaderBilling$
            .subscribe((result) => {
                if (Object.keys(result).length > 0) {
                    this.belum_lunas.setValue(result['total_tagihan']);
                    this.total_belum_lunas.setValue(this.belum_lunas.value - this.koreksi.value);
                }
            });
    }

    onGetJenisRawatIrdaAdditionalFormAttributes(): void {
        this.transBillingRawatDaruratService.HeaderBilling$
            .subscribe((result) => {
                if (Object.keys(result).length > 0) {
                    this.belum_lunas.setValue(result['total_tagihan']);
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

    onSendJumlahBayar(FormPaymentQRIS: any): void {
        this.onSendPaymentQRIS.emit(FormPaymentQRIS);

        this.onResetFormPaymentQRIS();
    }

    onResetFormPaymentQRIS(): void {
        this.FormPaymentQRIS.reset();

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

    get id_payment_method(): AbstractControl { return this.FormPaymentQRIS.get('id_payment_method'); }
    get id_payment_method_detail(): AbstractControl { return this.FormPaymentQRIS.get('id_payment_method_detail'); }
    get jenis_pembayaran(): AbstractControl { return this.FormPaymentQRIS.get('jenis_pembayaran'); }
    get belum_lunas(): AbstractControl { return this.FormPaymentQRIS.get('belum_lunas'); }
    get koreksi(): AbstractControl { return this.FormPaymentQRIS.get('koreksi'); }
    get total_belum_lunas(): AbstractControl { return this.FormPaymentQRIS.get('total_belum_lunas'); }
    get jumlah_bayar(): AbstractControl { return this.FormPaymentQRIS.get('jumlah_bayar'); }
    get kembalian(): AbstractControl { return this.FormPaymentQRIS.get('kembalian'); }
    get id_voucher(): AbstractControl { return this.FormPaymentQRIS.get('id_voucher'); }
    get id_bank_payment(): AbstractControl { return this.FormPaymentQRIS.get('id_bank_payment'); }
    get id_edc_payment(): AbstractControl { return this.FormPaymentQRIS.get('id_edc_payment'); }
    get trace_number(): AbstractControl { return this.FormPaymentQRIS.get('trace_number'); }
    get jenis_kartu(): AbstractControl { return this.FormPaymentQRIS.get('jenis_kartu'); }
    get card_holder(): AbstractControl { return this.FormPaymentQRIS.get('card_holder'); }
    get nomor_kartu(): AbstractControl { return this.FormPaymentQRIS.get('nomor_kartu'); }
    get keterangan(): AbstractControl { return this.FormPaymentQRIS.get('keterangan'); }
}
