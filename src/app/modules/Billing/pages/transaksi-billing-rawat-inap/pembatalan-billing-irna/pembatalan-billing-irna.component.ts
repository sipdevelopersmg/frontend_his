import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { IInformasiPasienModel } from '../../../models/trans-billing/trans-billing.model';

@Component({
    selector: 'app-pembatalan-billing-irna',
    templateUrl: './pembatalan-billing-irna.component.html',
    styleUrls: ['./pembatalan-billing-irna.component.css']
})
export class PembatalanBillingIrnaComponent implements OnInit {

    @Input('InformasiPasien') InformasiPasien: IInformasiPasienModel;

    @Input('InformasiReproses') InformasiReproses: any;

    @Input('FormPembatalanState') FormPembatalanState: string;

    FormPembatalan: FormGroup;

    ModalPembatalanTitle: string;

    @Output('onSendFormPembatalan') onSendFormPembatalan = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.FormPembatalan = this.formBuilder.group({
            id_register: [0, []],
            reason_canceled: ["", []],
        });
    }

    handleOpenPembatalan(): void {
        let btnModalPembatalan = document.getElementById('btnModalPembatalan') as HTMLElement;
        btnModalPembatalan.click();

        setTimeout(() => {
            this.onFillFormPembatalan();
        }, 500);
    }

    onFillFormPembatalan(): void {
        switch (this.FormPembatalanState) {
            case 'Batal_Pulang':
                this.ModalPembatalanTitle = "Pembatalan Pasien Pulang";
                break;
            case 'Reproses':
                this.ModalPembatalanTitle = "Alasan Reproses";
                break;
            case 'Batal_Payment':
                this.ModalPembatalanTitle = "Pembatalan Pelunasan Pasien";
                break;
            default:
                break;
        }

        this.id_register.setValue(this.InformasiPasien.id_register);
    }

    handleSubmitModalPembatalanPulang(FormPembatalan: any): void {
        switch (this.FormPembatalanState) {
            case 'Batal_Pulang':
                this.onSendFormPembatalan.emit(FormPembatalan);
                break;
            case 'Reproses':
                this.InformasiReproses.reason_reproses = FormPembatalan.reason_canceled;
                this.onSendFormPembatalan.emit(this.InformasiReproses);
                break;
            case 'Batal_Payment':
                this.onSendFormPembatalan.emit(FormPembatalan);
                break;
            default:
                break;
        }
    }

    handleClosePembatalan(): void {
        let btnClosePembatalan = document.getElementById('btnClosePembatalan') as HTMLElement;
        btnClosePembatalan.click();
    }

    get id_register(): AbstractControl { return this.FormPembatalan.get("id_register"); }
    get reason_canceled(): AbstractControl { return this.FormPembatalan.get("reason_canceled"); }
}
