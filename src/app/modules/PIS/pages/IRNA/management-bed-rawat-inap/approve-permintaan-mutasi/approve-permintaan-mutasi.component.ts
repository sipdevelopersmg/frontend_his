import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-approve-permintaan-mutasi-bed',
    templateUrl: './approve-permintaan-mutasi.component.html',
    styleUrls: ['./approve-permintaan-mutasi.component.css']
})
export class ApprovePermintaanMutasiComponent implements OnInit {

    FormApprovePermintaanMutasi: FormGroup;

    ModalTitle: string;

    @Input("FormApprovePermintaanMutasiAdditionalInfo") FormApprovePermintaanMutasiAdditionalInfo: any;

    @Output("onSendApproveRequestMutasi") onSendApproveRequestMutasi = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.onSetFormApproveRequestMutasiAttributes();
    }

    onSetFormApproveRequestMutasiAttributes(): void {
        this.FormApprovePermintaanMutasi = this.formBuilder.group({
            id_bed_transfer: [0, []],
            id_register: [0, []],
            id_kelas_tujuan: [0, []],
            id_room_asal: [0, []],
            id_bed_asal: [0, []],
            id_room_tujuan: [0, []],
            id_bed_tujuan: [0, []],
            tanggal_approve: ["", []],
        });
    }

    handleOpenModalApproveRequestMutasi(): void {
        let btnOpenModalApproveRequestMutasi = document.getElementById("btnOpenModalApproveRequestMutasi") as HTMLElement;
        btnOpenModalApproveRequestMutasi.click();

        this.handleResetFormApproveRequestMutasi();
    }

    handleResetFormApproveRequestMutasi(): void {
        this.ModalTitle = `Approve Permintaan Mutasi No. ${this.FormApprovePermintaanMutasiAdditionalInfo.nomor_bed_transfer}`;

        this.FormApprovePermintaanMutasi.reset();

        this.id_bed_transfer.setValue(this.FormApprovePermintaanMutasiAdditionalInfo.id_bed_transfer);
        this.id_register.setValue(this.FormApprovePermintaanMutasiAdditionalInfo.id_register);
        this.id_kelas_tujuan.setValue(this.FormApprovePermintaanMutasiAdditionalInfo.id_kelas_tujuan);
        this.id_room_asal.setValue(this.FormApprovePermintaanMutasiAdditionalInfo.id_room_asal);
        this.id_bed_asal.setValue(this.FormApprovePermintaanMutasiAdditionalInfo.id_bed_asal);
        this.id_room_tujuan.setValue(this.FormApprovePermintaanMutasiAdditionalInfo.id_room_tujuan);
        this.id_bed_tujuan.setValue(this.FormApprovePermintaanMutasiAdditionalInfo.id_bed_tujuan);
        this.tanggal_approve.setValue(this.FormApprovePermintaanMutasiAdditionalInfo.tanggal_approve);
    }

    handleSubmitFormApproveRequestMutasi(FormApprovePermintaanMutasi: any): void {
        this.onSendApproveRequestMutasi.emit(FormApprovePermintaanMutasi);
    }

    handleCloseModalApproveRequestMutasi(): void {
        let btnCloseModalApproveRequestMutasi = document.getElementById("btnCloseModalApproveRequestMutasi") as HTMLElement;
        btnCloseModalApproveRequestMutasi.click();
    }

    get id_bed_transfer(): AbstractControl { return this.FormApprovePermintaanMutasi.get("id_bed_transfer"); }
    get id_register(): AbstractControl { return this.FormApprovePermintaanMutasi.get("id_register"); }
    get id_kelas_tujuan(): AbstractControl { return this.FormApprovePermintaanMutasi.get("id_kelas_tujuan"); }
    get id_room_asal(): AbstractControl { return this.FormApprovePermintaanMutasi.get("id_room_asal"); }
    get id_bed_asal(): AbstractControl { return this.FormApprovePermintaanMutasi.get("id_bed_asal"); }
    get id_room_tujuan(): AbstractControl { return this.FormApprovePermintaanMutasi.get("id_room_tujuan"); }
    get id_bed_tujuan(): AbstractControl { return this.FormApprovePermintaanMutasi.get("id_bed_tujuan"); }
    get tanggal_approve(): AbstractControl { return this.FormApprovePermintaanMutasi.get("tanggal_approve"); }
}
