import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IAntrianRegulerPemesananBedModel } from 'src/app/modules/PIS/models/IRNA/antrian-reguler-pemesanan-bed.model';
import { IGetRencanaPulangForAntrianRegulerModel } from 'src/app/modules/PIS/models/IRNA/rencana-pulang-pasien.model';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as API_CONFIG from '../../../../../../../api/PIS/IRNA';
import Config from '../../json/antrian-reguler-rawat-inap.config.json';

@Component({
    selector: 'app-dialog-update-status-terjadwal',
    templateUrl: './dialog-update-status-terjadwal.component.html',
    styleUrls: ['./dialog-update-status-terjadwal.component.css']
})
export class DialogUpdateStatusTerjadwalComponent implements OnInit {

    @Input('InformasiPasien') InformasiPasien: IAntrianRegulerPemesananBedModel;

    API_CONFIG = API_CONFIG;

    Config = Config;

    modalRef: BsModalRef;
    @ViewChild('ModalUpdateStatusTerjadwalRef') ModalUpdateStatusTerjadwalRef: TemplateRef<any>;

    @ViewChild('LookupPasien') LookupPasien: OrgInputLookUpComponent;
    UrlLookupPasien: string;

    FormUpdateStatus: FormGroup;

    @Output('submitForm') submitForm = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private bsModalService: BsModalService
    ) { }

    ngOnInit(): void {
        this.FormUpdateStatus = this.formBuilder.group({
            id_booking: [0, [Validators.required]],
            bed_no: ['', [Validators.required]]
        });
    }

    handleOpenModalDialog(): void {
        this.modalRef = this.bsModalService.show(
            this.ModalUpdateStatusTerjadwalRef,
            Object.assign({}, { class: 'modal-xl' })
        );

        setTimeout(() => {
            this.onMapInformasiPasien(this.InformasiPasien);
        }, 1000);
    }

    onMapInformasiPasien(informasiPasien: IAntrianRegulerPemesananBedModel): void {
        this.id_booking.setValue(informasiPasien.id_booking);

        const nama_pasien_antrian = document.getElementById('nama_pasien_antrian') as HTMLInputElement;
        nama_pasien_antrian.value = informasiPasien.nama_pasien;

        const no_rekam_medis_pasien_antrian = document.getElementById('no_rekam_medis_pasien_antrian') as HTMLInputElement;
        no_rekam_medis_pasien_antrian.value = informasiPasien.no_rekam_medis;

        const debitur_pasien_antrian = document.getElementById('debitur_pasien_antrian') as HTMLInputElement;
        debitur_pasien_antrian.value = informasiPasien.nama_debitur;

        const kelas_request_antrian = document.getElementById('kelas_request_antrian') as HTMLInputElement;
        kelas_request_antrian.value = informasiPasien.nama_kelas;

        const tanggal_rencana_masuk = document.getElementById('tanggal_rencana_masuk') as HTMLInputElement;
        tanggal_rencana_masuk.value = this.utilityService.onFormatDate(informasiPasien.tgl_rencana_inap, 'Do/MM/yyyy');

        this.UrlLookupPasien = `${this.API_CONFIG.IRNA.SURAT_PENGANTAR_PEMBAYARAN.GET_PERINTAH_PULANG_BY_ID_KELAS}${informasiPasien.id_kelas}`;
    }

    handleCloseModalDialog(): void {
        this.onResetFormUpdateStatus();
        setTimeout(() => {
            this.modalRef.hide();
        }, 500);
    }

    handleSelectedLookupPasienRencanaPulang(args: IGetRencanaPulangForAntrianRegulerModel): void {
        const no_rekam_medis_rencana_pulang = document.getElementById('no_rekam_medis_rencana_pulang') as HTMLInputElement;
        no_rekam_medis_rencana_pulang.value = args.no_rekam_medis;

        const no_room_rencana_pulang = document.getElementById('no_room_rencana_pulang') as HTMLInputElement;
        no_room_rencana_pulang.value = args.room_no;

        const no_bed_rencana_pulang = document.getElementById('no_bed_rencana_pulang') as HTMLInputElement;
        no_bed_rencana_pulang.value = args.bed_no;

        const tgl_rencana_pulang = document.getElementById('tgl_rencana_pulang') as HTMLInputElement;
        tgl_rencana_pulang.value = this.utilityService.onFormatDate(args.tanggal_perintah_pulang, 'Do/MM/yyyy');

        this.bed_no.setValue(args.bed_no);
    }

    onResetFormUpdateStatus(): void {
        const nama_pasien_antrian = document.getElementById('nama_pasien_antrian') as HTMLInputElement;
        nama_pasien_antrian.value = "";

        const no_rekam_medis_pasien_antrian = document.getElementById('no_rekam_medis_pasien_antrian') as HTMLInputElement;
        no_rekam_medis_pasien_antrian.value = "";

        const debitur_pasien_antrian = document.getElementById('debitur_pasien_antrian') as HTMLInputElement;
        debitur_pasien_antrian.value = "";

        const kelas_request_antrian = document.getElementById('kelas_request_antrian') as HTMLInputElement;
        kelas_request_antrian.value = "";

        const tanggal_rencana_masuk = document.getElementById('tanggal_rencana_masuk') as HTMLInputElement;
        tanggal_rencana_masuk.value = this.utilityService.onFormatDate(new Date(), 'Do/MM/yyyy');

        const no_rekam_medis_rencana_pulang = document.getElementById('no_rekam_medis_rencana_pulang') as HTMLInputElement;
        no_rekam_medis_rencana_pulang.value = "";

        const no_room_rencana_pulang = document.getElementById('no_room_rencana_pulang') as HTMLInputElement;
        no_room_rencana_pulang.value = "";

        const no_bed_rencana_pulang = document.getElementById('no_bed_rencana_pulang') as HTMLInputElement;
        no_bed_rencana_pulang.value = "";

        const tgl_rencana_pulang = document.getElementById('tgl_rencana_pulang') as HTMLInputElement;
        tgl_rencana_pulang.value = this.utilityService.onFormatDate(new Date(), 'Do/MM/yyyy');

        this.FormUpdateStatus.reset();
        this.id_booking.setValue(0);
        this.bed_no.setValue('');
    }

    handleSubmitUpdateStatusAntrianTerjadwal(FormUpdateStatus: any): void {
        const data = {
            status: 'terjadwal',
            parameter: FormUpdateStatus
        };

        this.submitForm.emit(data);
    }

    get id_booking(): AbstractControl { return this.FormUpdateStatus.get("id_booking"); }
    get bed_no(): AbstractControl { return this.FormUpdateStatus.get("bed_no"); }
}
