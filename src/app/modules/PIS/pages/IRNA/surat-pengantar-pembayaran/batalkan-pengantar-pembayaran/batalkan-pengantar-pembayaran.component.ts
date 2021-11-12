import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'batalkan-pengantar-pembayaran',
    templateUrl: './batalkan-pengantar-pembayaran.component.html',
    styleUrls: ['./batalkan-pengantar-pembayaran.component.css']
})
export class BatalkanPengantarPembayaranComponent implements OnInit {

    FormPembatalanPengantarPembayaran: FormGroup;

    @Input("RegisterId") RegisterId: number;

    @Output("onSendBatalkanPengantarPembayaran") onSendBatalkanPengantarPembayaran = new EventEmitter<any>();

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.onSetFormPembatalanPengantarPembayaranAttributes();
    }

    onSetFormPembatalanPengantarPembayaranAttributes(): void {
        this.FormPembatalanPengantarPembayaran = this.formBuilder.group({
            id_register: [0, []],
            reason_canceled: ["", []],
        });
    }

    handleOpenModalPembatalanRequestPengantarPembayaran(): void {
        let btnOpenModalPembatalanPengantarPembayaran = document.getElementById("btnOpenModalPembatalanPengantarPembayaran") as HTMLElement;
        btnOpenModalPembatalanPengantarPembayaran.click();

        this.handleResetFormPembatalanPengantarPembayaran();
    }

    handleResetFormPembatalanPengantarPembayaran(): void {
        this.FormPembatalanPengantarPembayaran.reset();

        this.id_register.setValue(this.RegisterId);
        this.reason_canceled.setValue("");
    }

    handleSubmitFormPembatalanPengantarPembayaran(FormPembatalanPengantarPembayaran: any): void {
        this.onSendBatalkanPengantarPembayaran.emit(FormPembatalanPengantarPembayaran);
    }

    handleCloseModalPembatalanPengantarPembayaran(): void {
        let btnCloseModalPembatalanPengantarPembayaran = document.getElementById("btnCloseModalPembatalanPengantarPembayaran") as HTMLElement;
        btnCloseModalPembatalanPengantarPembayaran.click();
    }

    get id_register(): AbstractControl { return this.FormPembatalanPengantarPembayaran.get("id_register"); }
    get reason_canceled(): AbstractControl { return this.FormPembatalanPengantarPembayaran.get("reason_canceled"); }
}
