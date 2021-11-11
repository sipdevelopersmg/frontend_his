import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DateTimePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { IApproveRequestMutasiModel } from 'src/app/modules/PIS/models/IRNA/management_bed_rawat_inap.model';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'app-approve-permintaan-mutasi-bed',
    templateUrl: './approve-permintaan-mutasi.component.html',
    styleUrls: ['./approve-permintaan-mutasi.component.css']
})
export class ApprovePermintaanMutasiComponent implements OnInit {

    FormApprovePermintaanMutasi: FormGroup;

    ModalTitle: string;

    @Input("FormApprovePermintaanMutasiAdditionalInfo") FormApprovePermintaanMutasiAdditionalInfo: any;

    @ViewChild('DateTimePickerTglApprove') DateTimePickerTglApprove: DateTimePickerComponent;

    @Output("onSendApproveRequestMutasi") onSendApproveRequestMutasi = new EventEmitter<IApproveRequestMutasiModel>();

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
    ) { }

    ngOnInit(): void {
        this.onSetFormApproveRequestMutasiAttributes();
    }

    onSetFormApproveRequestMutasiAttributes(): void {
        this.FormApprovePermintaanMutasi = this.formBuilder.group({
            id_bed_transfer: [0, []],
            id_register: [0, []],
            id_setup_room_asal: [0, []],
            id_setup_bed_room_asal: [0, []],
            id_setup_room_tujuan: [0, []],
            id_setup_bed_room_tujuan: [0, []],
            id_poli_tujuan: [0, []],
            id_kelas_tujuan: [0, []],
            tanggal_bed_approve: ["", []],
            keterangan_approve: ["", []],
            tanggal_bed_request: ["", []],
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
        this.id_setup_room_asal.setValue(this.FormApprovePermintaanMutasiAdditionalInfo.id_setup_room_asal == 0 ? 0 : this.FormApprovePermintaanMutasiAdditionalInfo.id_setup_room_asal);
        this.id_setup_bed_room_asal.setValue(this.FormApprovePermintaanMutasiAdditionalInfo.id_setup_bed_room_asal == 0 ? 0 : this.FormApprovePermintaanMutasiAdditionalInfo.id_setup_bed_room_asal);
        this.id_setup_room_tujuan.setValue(this.FormApprovePermintaanMutasiAdditionalInfo.id_setup_room_tujuan);
        this.id_setup_bed_room_tujuan.setValue(this.FormApprovePermintaanMutasiAdditionalInfo.id_setup_bed_room_tujuan);
        this.id_poli_tujuan.setValue(this.FormApprovePermintaanMutasiAdditionalInfo.id_poli_tujuan);
        this.id_kelas_tujuan.setValue(this.FormApprovePermintaanMutasiAdditionalInfo.id_kelas_tujuan);
        this.tanggal_bed_approve.setValue("");
        this.DateTimePickerTglApprove.value = null;
        this.keterangan_approve.setValue("");
        this.tanggal_bed_request.setValue(this.FormApprovePermintaanMutasiAdditionalInfo.tanggal_bed_request);
    }

    handleSubmitFormApproveRequestMutasi(FormApprovePermintaanMutasi: IApproveRequestMutasiModel): void {
        let tanggal_bed_approve = this.utilityService.onFormatDate(FormApprovePermintaanMutasi.tanggal_bed_approve);

        let tanggal_bed_request = this.utilityService.onFormatDate(FormApprovePermintaanMutasi['tanggal_bed_request']);

        let compare_date_bed_approve = tanggal_bed_approve > tanggal_bed_request;

        FormApprovePermintaanMutasi.tanggal_bed_approve = tanggal_bed_approve;

        if (compare_date_bed_approve) {
            this.onSendApproveRequestMutasi.emit(FormApprovePermintaanMutasi);
        } else {
            this.utilityService.onShowingCustomAlert('error', 'Oops', 'Tgl Bed Approve Tidak Boleh < Tgl Bed Request');
        };
    }

    handleCloseModalApproveRequestMutasi(): void {
        let btnCloseModalApproveRequestMutasi = document.getElementById("btnCloseModalApproveRequestMutasi") as HTMLElement;
        btnCloseModalApproveRequestMutasi.click();
    }

    get id_bed_transfer(): AbstractControl { return this.FormApprovePermintaanMutasi.get("id_bed_transfer"); }
    get id_register(): AbstractControl { return this.FormApprovePermintaanMutasi.get("id_register"); }
    get id_setup_room_asal(): AbstractControl { return this.FormApprovePermintaanMutasi.get("id_setup_room_asal"); }
    get id_setup_bed_room_asal(): AbstractControl { return this.FormApprovePermintaanMutasi.get("id_setup_bed_room_asal"); }
    get id_setup_room_tujuan(): AbstractControl { return this.FormApprovePermintaanMutasi.get("id_setup_room_tujuan"); }
    get id_setup_bed_room_tujuan(): AbstractControl { return this.FormApprovePermintaanMutasi.get("id_setup_bed_room_tujuan"); }
    get id_poli_tujuan(): AbstractControl { return this.FormApprovePermintaanMutasi.get("id_poli_tujuan"); }
    get id_kelas_tujuan(): AbstractControl { return this.FormApprovePermintaanMutasi.get("id_kelas_tujuan"); }
    get tanggal_bed_approve(): AbstractControl { return this.FormApprovePermintaanMutasi.get("tanggal_bed_approve"); }
    get keterangan_approve(): AbstractControl { return this.FormApprovePermintaanMutasi.get("keterangan_approve"); }
    get tanggal_bed_request(): AbstractControl { return this.FormApprovePermintaanMutasi.get("tanggal_bed_request"); }
}
