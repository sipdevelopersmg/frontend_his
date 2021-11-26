import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';
import { IInformasiPasienModel } from '../../../models/trans-billing/trans-billing.model';
import { TransBillingRawatDaruratService } from '../../../services/trans-billing-rawat-darurat/trans-billing-rawat-darurat.service';

@Component({
    selector: 'app-pembatalan-billing-irda',
    templateUrl: './pembatalan-billing-irda.component.html',
    styleUrls: ['./pembatalan-billing-irda.component.css']
})
export class PembatalanBillingIrdaComponent implements OnInit {

    @Input('InformasiPasien') InformasiPasien: IInformasiPasienModel;

    @Input('FormPembatalanState') FormPembatalanState: string;

    FormPembatalan: FormGroup;

    ModalPembatalanTitle: string;

    @Output('onSendFormPembatalan') onSendFormPembatalan = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private transBillingRawatDaruratService: TransBillingRawatDaruratService,
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
            default:
                break;
        }

        this.id_register.setValue(this.InformasiPasien.id_register);
    }

    handleSubmitModalPembatalanPulang(FormPembatalan: any): void {
        this.onSendFormPembatalan.emit(FormPembatalan);
    }

    handleClosePembatalan(): void {
        let btnClosePembatalan = document.getElementById('btnClosePembatalan') as HTMLElement;
        btnClosePembatalan.click();
    }

    get id_register(): AbstractControl { return this.FormPembatalan.get("id_register"); }
    get reason_canceled(): AbstractControl { return this.FormPembatalan.get("reason_canceled"); }
}