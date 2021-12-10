import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { IBankPaymentModel } from 'src/app/modules/Billing/models/setup-data/setup-bank-payment.model';
import { IEdcPaymentModel } from 'src/app/modules/Billing/models/setup-data/setup-edc-payment.model';
import { SetupBankPaymentService } from 'src/app/modules/Billing/services/setup-data/setup-bank-payment/setup-bank-payment.service';
import { SetupEdcPaymentService } from 'src/app/modules/Billing/services/setup-data/setup-edc-payment/setup-edc-payment.service';
import { SetupPaymentMethodService } from 'src/app/modules/Billing/services/setup-data/setup-payment-method/setup-payment-method.service';
import { TransBillingRawatDaruratService } from 'src/app/modules/Billing/services/trans-billing-rawat-darurat/trans-billing-rawat-darurat.service';
import { TransBillingRawatInapService } from 'src/app/modules/Billing/services/trans-billing-rawat-inap/trans-billing-rawat-inap.service';
import { TransBillingService } from 'src/app/modules/Billing/services/trans-billing/trans-billing.service';

@Component({
    selector: 'app-payment-debit-irja',
    templateUrl: './payment-debit-irja.component.html',
    styleUrls: ['./payment-debit-irja.component.css']
})
export class PaymentDebitIrjaComponent implements OnInit {

    FormPaymentDebit: FormGroup;

    @ViewChild('BankPaymentDropdown') BankPaymentDropdown: DropDownListComponent;
    BankPaymentDatasource: IBankPaymentModel[] = [];
    BankPaymentFields: object = { text: 'nama_bank_payment', value: 'id_bank_payment' };

    @ViewChild('EDCDropdown') EDCDropdown: DropDownListComponent;
    EdcPaymentDatasource: IEdcPaymentModel[] = [];
    EdcPaymentFields: object = { text: 'nama_edc_payment', value: 'id_edc_payment' };

    @Input("JenisRawatState") JenisRawatState: string;

    @Output('onSendPaymentDebit') onSendPaymentDebit = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private transBillingService: TransBillingService,
        private setupEdcPaymentService: SetupEdcPaymentService,
        private setupBankPaymentService: SetupBankPaymentService,
        private setupPaymentMethodService: SetupPaymentMethodService,
        private transBillingRawatInapService: TransBillingRawatInapService,
        private transBillingRawatDaruratService: TransBillingRawatDaruratService,
    ) { }

    ngOnInit(): void {
        this.onSetFormPaymentDebitAttributes();
    }

    onSetFormPaymentDebitAttributes(): void {
        this.FormPaymentDebit = this.formBuilder.group({
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
        this.setupPaymentMethodService.onGetAllPaymentMethodByName("DEBIT CARD")
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
                    this.jumlah_bayar.setValue(result['belum_lunas']);
                    this.total_belum_lunas.setValue(this.belum_lunas.value - this.koreksi.value);
                }
            });
    }

    onGetJenisRawatIrnaAdditionalFormAttributes(): void {
        this.transBillingRawatDaruratService.HeaderBilling$
            .subscribe((result) => {
                if (Object.keys(result).length > 0) {
                    this.belum_lunas.setValue(result['total_tagihan']);
                    this.jumlah_bayar.setValue(result['total_tagihan']);
                    this.total_belum_lunas.setValue(this.belum_lunas.value - this.koreksi.value);
                }
            });
    }

    onGetJenisRawatIrdaAdditionalFormAttributes(): void {
        this.transBillingRawatInapService.HeaderBilling$
            .subscribe((result) => {
                if (Object.keys(result).length > 0) {
                    this.belum_lunas.setValue(result['total_tagihan']);
                    this.jumlah_bayar.setValue(result['total_tagihan']);
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

    onSendJumlahBayar(FormPaymentDebit: any): void {
        this.onSendPaymentDebit.emit(FormPaymentDebit);

        this.onResetFormPaymentDebit();
    }

    onResetFormPaymentDebit(): void {
        this.FormPaymentDebit.reset();

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

    get id_payment_method(): AbstractControl { return this.FormPaymentDebit.get('id_payment_method'); }
    get id_payment_method_detail(): AbstractControl { return this.FormPaymentDebit.get('id_payment_method_detail'); }
    get jenis_pembayaran(): AbstractControl { return this.FormPaymentDebit.get('jenis_pembayaran'); }
    get belum_lunas(): AbstractControl { return this.FormPaymentDebit.get('belum_lunas'); }
    get koreksi(): AbstractControl { return this.FormPaymentDebit.get('koreksi'); }
    get total_belum_lunas(): AbstractControl { return this.FormPaymentDebit.get('total_belum_lunas'); }
    get jumlah_bayar(): AbstractControl { return this.FormPaymentDebit.get('jumlah_bayar'); }
    get kembalian(): AbstractControl { return this.FormPaymentDebit.get('kembalian'); }
    get id_voucher(): AbstractControl { return this.FormPaymentDebit.get('id_voucher'); }
    get id_bank_payment(): AbstractControl { return this.FormPaymentDebit.get('id_bank_payment'); }
    get id_edc_payment(): AbstractControl { return this.FormPaymentDebit.get('id_edc_payment'); }
    get trace_number(): AbstractControl { return this.FormPaymentDebit.get('trace_number'); }
    get jenis_kartu(): AbstractControl { return this.FormPaymentDebit.get('jenis_kartu'); }
    get card_holder(): AbstractControl { return this.FormPaymentDebit.get('card_holder'); }
    get nomor_kartu(): AbstractControl { return this.FormPaymentDebit.get('nomor_kartu'); }
    get keterangan(): AbstractControl { return this.FormPaymentDebit.get('keterangan'); }
}
