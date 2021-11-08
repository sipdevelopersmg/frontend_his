import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ManagementBedRawatInapService } from 'src/app/modules/PIS/services/IRNA/management-bed-rawat-inap/management-bed-rawat-inap.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'app-batalkan-permintaan-mutasi-bed',
    templateUrl: './batalkan-permintaan-mutasi.component.html',
    styleUrls: ['./batalkan-permintaan-mutasi.component.css']
})
export class BatalkanPermintaanMutasiComponent implements OnInit {

    FormPembatalanPermintaanMutasi: FormGroup;

    @Input("TransferBedId") TransferBedId: number;

    @Output("onSendBatalkanRequestMutasi") onSendBatalakanRequestMutasi = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private managementBedRawatInapService: ManagementBedRawatInapService,
    ) { }

    ngOnInit(): void {
        this.onSetFormPembatalanRequestMutasiAttributes();
    }

    onSetFormPembatalanRequestMutasiAttributes(): void {
        this.FormPembatalanPermintaanMutasi = this.formBuilder.group({
            id_bed_transfer: [0, []],
            reason_canceled: ["", []],
        });
    }

    handleOpenModalPembatalanRequestMutasi(): void {
        let btnOpenModalPembatalanRequestMutasi = document.getElementById("btnOpenModalPembatalanRequestMutasi") as HTMLElement;
        btnOpenModalPembatalanRequestMutasi.click();

        this.handleResetFormPembatalanRequestMutasi();
    }

    handleResetFormPembatalanRequestMutasi(): void {
        this.FormPembatalanPermintaanMutasi.reset();

        this.id_bed_transfer.setValue(this.TransferBedId);
        this.reason_canceled.setValue("");
    }

    handleSubmitFormPembatalanRequestMutasi(FormPembatalanPermintaanMutasi: any): void {
        this.onSendBatalakanRequestMutasi.emit(FormPembatalanPermintaanMutasi);
    }

    handleCloseModalPembatalanRequestMutasi(): void {
        let btnCloseModalPembatalanRequestMutasi = document.getElementById("btnCloseModalPembatalanRequestMutasi") as HTMLElement;
        btnCloseModalPembatalanRequestMutasi.click();
    }

    get id_bed_transfer(): AbstractControl { return this.FormPembatalanPermintaanMutasi.get("id_bed_transfer"); }
    get reason_canceled(): AbstractControl { return this.FormPembatalanPermintaanMutasi.get("reason_canceled"); }
}
