import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { IBatalkanMutasiModel } from 'src/app/modules/PIS/models/IRNA/management_bed_rawat_inap.model';

@Component({
    selector: 'app-batalkan-mutasi-bed',
    templateUrl: './batalkan-mutasi.component.html',
    styleUrls: ['./batalkan-mutasi.component.css']
})
export class BatalkanMutasiComponent implements OnInit {

    FormPembatalanMutasi: FormGroup;

    @Input("FormPembatalanMutasiAdditionalInfo") FormPembatalanMutasiAdditionalInfo: IBatalkanMutasiModel;

    @Output("onSendBatalkanMutasi") onSendBatalkanMutasi = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.onSetFormPembatalanMutasiAttributes();
    }

    onSetFormPembatalanMutasiAttributes(): void {
        this.FormPembatalanMutasi = this.formBuilder.group({
            id_bed_history: [0, []],
            id_register: [0, []],
            id_poli_tujuan: [0, []],
            id_kelas_tujuan: [0, []],
            id_setup_room_tujuan: [0, []],
            id_setup_bed_room_tujuan: [0, []],
            tgl_masuk_dibatalkan: ["", []],
            reason_canceled: ["", []],
        });
    }

    handleOpenModalPembatalanRequestMutasi(): void {
        let btnOpenModalPembatalanMutasi = document.getElementById("btnOpenModalPembatalanMutasi") as HTMLElement;
        btnOpenModalPembatalanMutasi.click();

        this.handleResetFormPembatalanMutasi();
    }

    handleResetFormPembatalanMutasi(): void {
        this.FormPembatalanMutasi.reset();

        this.id_bed_history.setValue(this.FormPembatalanMutasiAdditionalInfo.id_bed_history);
        this.id_register.setValue(this.FormPembatalanMutasiAdditionalInfo.id_register);
        this.id_kelas_tujuan.setValue(this.FormPembatalanMutasiAdditionalInfo.id_kelas_tujuan);
        this.id_poli_tujuan.setValue(this.FormPembatalanMutasiAdditionalInfo.id_poli_tujuan);
        this.id_register.setValue(this.FormPembatalanMutasiAdditionalInfo.id_register);
        this.id_setup_room_tujuan.setValue(this.FormPembatalanMutasiAdditionalInfo.id_setup_room_tujuan);
        this.id_setup_bed_room_tujuan.setValue(this.FormPembatalanMutasiAdditionalInfo.id_setup_bed_room_tujuan);
        this.tgl_masuk_dibatalkan.setValue(this.FormPembatalanMutasiAdditionalInfo.tgl_masuk_dibatalkan);
        this.reason_canceled.setValue("");
    }

    handleSubmitFormPembatalanMutasi(FormPembatalanMutasi: any): void {
        this.onSendBatalkanMutasi.emit(FormPembatalanMutasi);
    }

    handleCloseModalPembatalanMutasi(): void {
        let btnCloseModalPembatalanMutasi = document.getElementById("btnCloseModalPembatalanMutasi") as HTMLElement;
        btnCloseModalPembatalanMutasi.click();
    }

    get id_bed_history(): AbstractControl { return this.FormPembatalanMutasi.get("id_bed_history"); }
    get id_register(): AbstractControl { return this.FormPembatalanMutasi.get("id_register"); }
    get id_poli_tujuan(): AbstractControl { return this.FormPembatalanMutasi.get("id_poli_tujuan"); }
    get id_kelas_tujuan(): AbstractControl { return this.FormPembatalanMutasi.get("id_kelas_tujuan"); }
    get id_setup_room_tujuan(): AbstractControl { return this.FormPembatalanMutasi.get("id_setup_room_tujuan"); }
    get id_setup_bed_room_tujuan(): AbstractControl { return this.FormPembatalanMutasi.get("id_setup_bed_room_tujuan"); }
    get tgl_masuk_dibatalkan(): AbstractControl { return this.FormPembatalanMutasi.get("tgl_masuk_dibatalkan"); }
    get reason_canceled(): AbstractControl { return this.FormPembatalanMutasi.get("reason_canceled"); }
}
