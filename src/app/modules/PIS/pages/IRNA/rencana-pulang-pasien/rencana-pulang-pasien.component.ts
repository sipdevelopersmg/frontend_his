import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { PendaftaranPasienBaruService } from '../../../services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import { AdmisiPasienRawatInapService } from '../../../services/IRNA/admisi-pasien-rawat-inap/admisi-pasien-rawat-inap.service';
import * as API_PIS from '../../../../../api/PIS';
import settingGrid from './json/rencana-pulang-pasien.config.json';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import Swal from 'sweetalert2';
import { RencanaPulangPasienService } from '../../../services/IRNA/rencana-pulang-pasien/rencana-pulang-pasien.service';

@Component({
    selector: 'app-rencana-pulang-pasien',
    templateUrl: './rencana-pulang-pasien.component.html',
    styleUrls: ['./rencana-pulang-pasien.component.css']
})
export class RencanaPulangPasienComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    FormInformasiPasien: FormGroup;

    PhotoPasien: any;

    settingGrid = settingGrid;

    API_PIS = API_PIS.API_PIS;

    FormRencanaPulangPasien: FormGroup;

    @ViewChild('LookupKodeDokter') LookupKodeDokter: OrgInputLookUpKodeComponent;
    urlDokter = this.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_DOKTER.POST_GET_ALL_DOKTER_FOR_LOOKUP;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private encryptionService: EncryptionService,
        private admisiRawatInapService: AdmisiPasienRawatInapService,
        private pendaftaranPasienBaruService: PendaftaranPasienBaruService,
        private rencanaPulangPasienRawatInapService: RencanaPulangPasienService,
    ) { }

    ngOnInit(): void {
        this.onSetFormInformasiPasienAttributes();

        this.onSetFormRencanaPulangAttributes();

        this.onGetDetailAdmisiPasien();

        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
            { Id: 'Refresh', Captions: 'Refresh', Icons1: 'fa-redo-alt' },
            { Id: 'Save', Captions: 'Save', Icons1: 'fa-save' },
        ];
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Back':
                this.router.navigateByUrl('dashboard/PIS/IRNA/pelayanan-pasien-rawat-inap');
                break;
            case 'Refresh':
                this.onGetDetailAdmisiPasien();
                break;
            case 'Save':
                this.onSubmitRencanaPulangPasien(this.FormRencanaPulangPasien.value);
                break;
            default:
                break;
        }
    }

    onSetFormInformasiPasienAttributes(): void {
        this.FormInformasiPasien = this.formBuilder.group({
            id_person: [0, []],
            id_register: [0, []],
            nama_pasien: ['', []],
            no_rekam_medis: ['', []],
            no_register: ['', []],
            gender: ['', []],
            umur: ['', []],
            tgl_admisi: ['', []],
            nama_debitur: ['', []],
            id_setup_room: [0, []],
            room_no: ['', []],
            id_setup_bed_room: [0, []],
            bed_no: ['', []],
            nama_poli: ['', []],
            nama_kelas: ['', []],
        });
    }

    onSetFormRencanaPulangAttributes(): void {
        this.FormRencanaPulangPasien = this.formBuilder.group({
            id_register: [0, []],
            id_dokter_pemberi_ijin_pulang: [0, []],
            tanggal_rencana_pulang: ["", []],
            keterangan_rencana_pulang: ["", []],
        });
    }

    onGetDetailAdmisiPasien(): void {
        if (this.activatedRoute.snapshot.params['id']) {
            let id_register = JSON.parse(this.encryptionService.decrypt(this.activatedRoute.snapshot.params['id']));

            this.admisiRawatInapService.onGetAdmisiPasienRawatInapByIdRegister(id_register)
                .subscribe((result) => {
                    if (result) {
                        this.id_person.setValue(result.data['id_person']);
                        this.id_register.setValue(result.data['id_register']);
                        this.id_register_rencana_pulang.setValue(result.data['id_register']);
                        this.nama_pasien.setValue(result.data.nama_pasien);
                        this.no_rekam_medis.setValue(result.data.no_rekam_medis);
                        this.no_register.setValue(result.data.no_register);
                        this.gender.setValue(result.data.gender);
                        this.umur.setValue(result.data.umur);
                        this.tgl_admisi.setValue(result.data.tgl_admisi);
                        this.nama_debitur.setValue(result.data.nama_debitur);
                        this.id_setup_room.setValue(result.data['id_setup_room']);
                        this.room_no.setValue(result.data['room_no']);
                        this.id_setup_bed_room.setValue(result.data['id_setup_bed_room']);
                        this.bed_no.setValue(result.data['bed_no']);
                        this.nama_poli.setValue(result.data.nama_poli);
                        this.nama_kelas.setValue(result.data['nama_kelas']);

                        this.pendaftaranPasienBaruService.onGetLinkFotoPerson(result.data['id_person'], false)
                            .subscribe((result) => {
                                this.PhotoPasien = result.data;
                            });
                    }
                });
        }
    }

    handleSelectedDokter(args: any): void {
        this.id_dokter_pemberi_ijin_pulang.setValue(args.id_dokter || args[0].id_dokter);
    }

    onSubmitRencanaPulangPasien(FormRencanaPulangPasien: any): void {
        Swal.fire({
            icon: 'warning',
            title: 'Apakah Anda Yakin?',
            text: 'Data yang Telah Disimpah Tidak Dapat Diubah',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Yes`,
            denyButtonText: `Tidak, Kembali`,
            focusDeny: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.rencanaPulangPasienRawatInapService.onPostSaveRencanaPulangPasien(FormRencanaPulangPasien)
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Berhasil Disimpan')
                                .then(() => {
                                    this.handleClickButtonNav("Back");
                                });
                        }
                    });
            }
        });
    }

    get id_person(): AbstractControl { return this.FormInformasiPasien.get("id_person"); }
    get id_register(): AbstractControl { return this.FormInformasiPasien.get("id_register"); }
    get nama_pasien(): AbstractControl { return this.FormInformasiPasien.get("nama_pasien"); }
    get no_rekam_medis(): AbstractControl { return this.FormInformasiPasien.get("no_rekam_medis"); }
    get no_register(): AbstractControl { return this.FormInformasiPasien.get("no_register"); }
    get gender(): AbstractControl { return this.FormInformasiPasien.get("gender"); }
    get umur(): AbstractControl { return this.FormInformasiPasien.get("umur"); }
    get tgl_admisi(): AbstractControl { return this.FormInformasiPasien.get("tgl_admisi"); }
    get nama_debitur(): AbstractControl { return this.FormInformasiPasien.get("nama_debitur"); }
    get id_setup_room(): AbstractControl { return this.FormInformasiPasien.get("id_setup_room"); }
    get room_no(): AbstractControl { return this.FormInformasiPasien.get("room_no"); }
    get id_setup_bed_room(): AbstractControl { return this.FormInformasiPasien.get("id_setup_bed_room"); }
    get bed_no(): AbstractControl { return this.FormInformasiPasien.get("bed_no"); }
    get nama_poli(): AbstractControl { return this.FormInformasiPasien.get("nama_poli"); }
    get nama_kelas(): AbstractControl { return this.FormInformasiPasien.get("nama_kelas"); }

    get id_register_rencana_pulang(): AbstractControl { return this.FormRencanaPulangPasien.get("id_register"); }
    get id_dokter_pemberi_ijin_pulang(): AbstractControl { return this.FormRencanaPulangPasien.get("id_dokter_pemberi_ijin_pulang"); }
    get tanggal_rencana_pulang(): AbstractControl { return this.FormRencanaPulangPasien.get("tanggal_rencana_pulang"); }
    get keterangan_rencana_pulang(): AbstractControl { return this.FormRencanaPulangPasien.get("keterangan_rencana_pulang"); }
}
