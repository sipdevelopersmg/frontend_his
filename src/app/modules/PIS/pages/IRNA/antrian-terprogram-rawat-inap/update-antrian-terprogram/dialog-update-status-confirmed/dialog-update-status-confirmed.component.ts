import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IAntrianRegulerPemesananBedModel } from 'src/app/modules/PIS/models/IRNA/antrian-reguler-pemesanan-bed.model';
import { IAntrianTerprogramPemesananBedModel } from 'src/app/modules/PIS/models/IRNA/antrian-terprogram-pemesanan-bed.model';
import { IGetRencanaPulangForAntrianRegulerModel } from 'src/app/modules/PIS/models/IRNA/rencana-pulang-pasien.model';
import { AntrianTerprogramService } from 'src/app/modules/PIS/services/IRNA/antrian-terprogram/antrian-terprogram.service';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as API_CONFIG from '../../../../../../../api/PIS/IRNA';
import Config from '../../json/antrian-terprogram-rawat-inap.config.json';

@Component({
    selector: 'app-dialog-update-status-confirmed',
    templateUrl: './dialog-update-status-confirmed.component.html',
    styleUrls: ['./dialog-update-status-confirmed.component.css']
})
export class DialogUpdateStatusConfirmedComponent implements OnInit {

    @Input('InformasiPasien') InformasiPasien: IAntrianTerprogramPemesananBedModel;

    API_CONFIG = API_CONFIG;

    Config = Config;

    modalRef: BsModalRef;
    @ViewChild('ModalUpdateStatusConfirmedRef') ModalUpdateStatusConfirmedRef: TemplateRef<any>;

    FormUpdateStatus: FormGroup;

    @Output('submitForm') submitForm = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private bsModalService: BsModalService,
        private antrianTerprogramService: AntrianTerprogramService
    ) { }

    ngOnInit(): void {
        this.FormUpdateStatus = this.formBuilder.group({
            id_booking: [0, [Validators.required]],
            id_setup_bed_room: ['', [Validators.required]]
        });
    }

    handleOpenModalDialog(): void {
        this.modalRef = this.bsModalService.show(
            this.ModalUpdateStatusConfirmedRef,
            Object.assign({}, { class: 'modal-xl' })
        );

        setTimeout(() => {
            this.onMapInformasiPasien(this.InformasiPasien);
        }, 500);
    }

    onMapInformasiPasien(informasiPasien: IAntrianTerprogramPemesananBedModel): void {
        this.id_booking.setValue(informasiPasien.id_booking);

        const nama_pasien_antrian = document.getElementById('nama_pasien_antrian') as HTMLInputElement;
        nama_pasien_antrian.value = informasiPasien.nama_pasien;

        const no_rekam_medis_pasien_antrian = document.getElementById('no_rekam_medis_pasien_antrian') as HTMLInputElement;
        no_rekam_medis_pasien_antrian.value = informasiPasien.no_rekam_medis;

        const debitur_pasien_antrian = document.getElementById('debitur_pasien_antrian') as HTMLInputElement;
        debitur_pasien_antrian.value = informasiPasien.nama_debitur;

        const kelas_request_antrian = document.getElementById('kelas_request_antrian') as HTMLInputElement;
        kelas_request_antrian.value = informasiPasien.nama_kelas;

        const tgl_rencana_inap = document.getElementById('tgl_rencana_inap') as HTMLInputElement;
        tgl_rencana_inap.value = this.utilityService.onFormatDate(informasiPasien.tgl_rencana_inap, 'Do/MM/yyyy');

        const tgl_rencana_pulang = document.getElementById('tgl_rencana_pulang') as HTMLInputElement;
        tgl_rencana_pulang.value = this.utilityService.onFormatDate(informasiPasien.tgl_rencana_pulang, 'Do/MM/yyyy');

        const hand_phone = document.getElementById('hand_phone') as HTMLInputElement;
        hand_phone.value = informasiPasien.hand_phone;

        if (informasiPasien.id_setup_bed_room == 0) {
            this.id_setup_bed_room.setValue(informasiPasien.id_setup_bed_room_booked);
            this.onMapInformasiPersonTerjadwal(informasiPasien.id_setup_bed_room_booked);
        } else {
            this.id_setup_bed_room.setValue(informasiPasien.id_setup_bed_room);
            this.onMapInformasiPersonTerjadwal(informasiPasien.id_setup_bed_room);
        };
    }

    onMapInformasiPersonTerjadwal(id_setup_bed_room: number): void {
        this.antrianTerprogramService.onGetPersonTerjadwalForApprove(id_setup_bed_room)
            .subscribe((result) => {
                if (result.responseResult) {
                    const nama_pasien_rencana_pulang = document.getElementById('nama_pasien_rencana_pulang') as HTMLInputElement;
                    nama_pasien_rencana_pulang.value = result.data.nama_pasien;

                    const no_rekam_medis_rencana_pulang = document.getElementById('no_rekam_medis_rencana_pulang') as HTMLInputElement;
                    no_rekam_medis_rencana_pulang.value = result.data.no_rekam_medis;

                    const nama_poli_rencana_pulang = document.getElementById('nama_poli_rencana_pulang') as HTMLInputElement;
                    nama_poli_rencana_pulang.value = result.data.nama_poli;

                    const no_room_rencana_pulang = document.getElementById('no_room_rencana_pulang') as HTMLInputElement;
                    no_room_rencana_pulang.value = result.data.nama_kelas;

                    const no_bed_rencana_pulang = document.getElementById('no_bed_rencana_pulang') as HTMLInputElement;
                    no_bed_rencana_pulang.value = result.data.bed_no;

                    const tgl_rencana_pulang_terjadwal = document.getElementById('tgl_rencana_pulang_terjadwal') as HTMLInputElement;
                    tgl_rencana_pulang_terjadwal.value = this.utilityService.onFormatDate(result.data.tgl_rencana_pulang, 'Do/MM/yyyy');
                }
            });
    }

    handleCloseModalDialog(): void {
        this.onResetFormUpdateStatus();
        setTimeout(() => {
            this.modalRef.hide();
        }, 250);
    }

    onResetFormUpdateStatus(): void {
        const data: IAntrianTerprogramPemesananBedModel = {
            "id_booking": 0,
            "no_rekam_medis": "",
            "nama_pasien": "",
            "gender": "",
            "hand_phone": "",
            "tgl_rencana_inap": new Date(),
            "tgl_rencana_pulang": new Date(),
            "id_kelas": 0,
            "nama_kelas": "",
            "id_debitur": 0,
            "nama_debitur": "",
            "id_poli": 0,
            "nama_poli": "",
            "id_setup_room": 0,
            "room_no": "",
            "id_setup_bed_room": 0,
            "bed_no": "",
            "status_booking": "",
            "id_setup_room_booked": 0,
            "room_no_booked": "",
            "id_setup_bed_room_booked": 0,
            "bed_no_booked": "",
        };

        this.onMapInformasiPasien(data);

        this.FormUpdateStatus.reset();
        this.id_booking.setValue(0);
        this.id_setup_bed_room.setValue(0);
    }

    handleSubmitUpdateStatusAntrianTerjadwal(FormUpdateStatus: any): void {
        const data = {
            status: 'confirmed',
            parameter: FormUpdateStatus
        };

        this.submitForm.emit(data);
    }

    get id_booking(): AbstractControl { return this.FormUpdateStatus.get("id_booking"); }
    get id_setup_bed_room(): AbstractControl { return this.FormUpdateStatus.get("id_setup_bed_room"); }
}
