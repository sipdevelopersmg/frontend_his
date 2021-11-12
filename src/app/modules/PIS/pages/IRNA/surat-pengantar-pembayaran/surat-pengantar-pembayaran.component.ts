import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';
import * as API_PIS from '../../../../../api/PIS';
import { ICaraPulangModel, IKondisiPulangModel } from '../../../models/IRNA/surat_pengantar_pembayaran.model';
import { PendaftaranPasienBaruService } from '../../../services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import { AdmisiPasienRawatInapService } from '../../../services/IRNA/admisi-pasien-rawat-inap/admisi-pasien-rawat-inap.service';
import { RencanaPulangPasienService } from '../../../services/IRNA/rencana-pulang-pasien/rencana-pulang-pasien.service';
import SuratPengantarPembayaranService from '../../../services/IRNA/surat-pengantar-pembayaran/surat-pengantar-pembayaran.service';
import { BatalkanPengantarPembayaranComponent } from './batalkan-pengantar-pembayaran/batalkan-pengantar-pembayaran.component';
import { DetailInfoKematianComponent } from './detail-info-kematian/detail-info-kematian.component';
import settingGrid from './json/surat-pengantar-pembayaran.config.json';

@Component({
    selector: 'app-surat-pengantar-pembayaran',
    templateUrl: './surat-pengantar-pembayaran.component.html',
    styleUrls: ['./surat-pengantar-pembayaran.component.css']
})
export class SuratPengantarPembayaranComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    FormInformasiPasien: FormGroup;

    PhotoPasien: any;

    settingGrid = settingGrid;

    API_PIS = API_PIS.API_PIS;

    FormSuratPengantarPembayaran: FormGroup;

    @ViewChild('DropdownCaraPulang') DropdownCaraPulang: DropDownListComponent;
    DropdownCaraPulangDatasource: ICaraPulangModel[];
    DropdownCaraPulangField: any;

    @ViewChild('DropdownKondisiPulang') DropdownKondisiPulang: DropDownListComponent;
    DropdownKondisiPulangDatasource: IKondisiPulangModel[];
    DropdownKondisiPulangField: any;

    @ViewChild('LookupKodeDokter') LookupKodeDokter: OrgInputLookUpKodeComponent;
    urlDokter = this.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_DOKTER.POST_GET_ALL_DOKTER_FOR_LOOKUP;

    CaraPulangMeninggal: boolean;

    SudahPernahInputSpp: boolean;

    @ViewChild("DetailKematianPasien") DetailKematianPasien: DetailInfoKematianComponent;

    @ViewChild("BatalkanPengantarPembayaran") BatalkanPengantarPembayaran: BatalkanPengantarPembayaranComponent;
    RegisterId: number;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private encryptionService: EncryptionService,
        private admisiRawatInapService: AdmisiPasienRawatInapService,
        private pendaftaranPasienBaruService: PendaftaranPasienBaruService,
        private rencanaPulangPasienRawatInapService: RencanaPulangPasienService,
        private suratPengantaranPembayaranPasienService: SuratPengantarPembayaranService,
    ) { }

    ngOnInit(): void {
        this.onSetFormInformasiPasienAttributes();

        this.onSetFormSuratPengantarPembayaranAttributes();

        this.onGetCaraPulangAndKondisiPulang();

        this.onGetDetailAdmisiPasien();

        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
            { Id: 'Refresh', Captions: 'Refresh', Icons1: 'fa-redo-alt' },
            { Id: 'Cancel', Captions: 'Cancel', Icons1: 'fa-ban' },
            { Id: 'Save', Captions: 'Save', Icons1: 'fa-save' },
        ];

        this.CaraPulangMeninggal = false;

        this.SudahPernahInputSpp = false;
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Back':
                this.router.navigateByUrl('dashboard/PIS/IRNA/pelayanan-pasien-rawat-inap');
                break;
            case 'Refresh':
                this.onGetDetailAdmisiPasien();
                break;
            case 'Cancel':
                this.BatalkanPengantarPembayaran.handleOpenModalPembatalanRequestPengantarPembayaran();
                break;
            case 'Save':
                this.onSubmitSuratPengantarPembayaran(this.FormSuratPengantarPembayaran.value);
                break;
            default:
                break;
        }
    }

    onGetCaraPulangAndKondisiPulang(): void {
        this.suratPengantaranPembayaranPasienService.onGetAllCaraPulang()
            .subscribe((result) => {
                if (result) {
                    this.DropdownCaraPulangDatasource = result.data;

                    this.DropdownCaraPulangField = { text: 'cara_pulang', value: 'id_cara_pulang' };
                }
            });

        this.suratPengantaranPembayaranPasienService.onGetAllKondisiPulang()
            .subscribe((result) => {
                if (result) {
                    this.DropdownKondisiPulangDatasource = result.data;

                    this.DropdownKondisiPulangField = { text: 'kondisi_pulang', value: 'id_kondisi_pulang' };
                }
            });
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
            nama_dokter: ['', []],
        });
    }

    onSetFormSuratPengantarPembayaranAttributes(): void {
        this.FormSuratPengantarPembayaran = this.formBuilder.group({
            id_register: [0, []],
            id_dokter_pemberi_ijin_pulang: [0, []],
            id_cara_pulang: [0, []],
            id_kondisi_pulang: [0, []],
            id_rencana_pulang: [0, []],
            tanggal_perintah_pulang: ["", []],
            keterangan_perintah_pulang: ["", []],
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
                        this.id_register_pengantar_pembayaran.setValue(result.data['id_register']);
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
                        this.nama_dokter.setValue(result.data['nama_dokter']);

                        this.pendaftaranPasienBaruService.onGetLinkFotoPerson(result.data['id_person'], false)
                            .subscribe((result) => {
                                this.PhotoPasien = result.data;
                            });

                        this.onGetRencanaPulangPasien(result.data.id_register);

                        this.onGetPengantarPembayaran(result.data.id_register);

                        this.RegisterId = result.data.id_register;
                    }
                });
        }
    }

    onGetRencanaPulangPasien(RegisterId: number): void {
        this.rencanaPulangPasienRawatInapService.onGetRencanaPulangPasienByIdRegister(RegisterId)
            .subscribe((result) => {
                if (result) {
                    if (Object.keys(result.data).length > 0) {
                        setTimeout(() => {
                            this.id_rencana_pulang.setValue(result.data.id_rencana_pulang);
                            this.id_dokter_pemberi_ijin_pulang.setValue(result.data.id_dokter_pemberi_ijin_pulang);
                            this.tanggal_perintah_pulang.setValue(result.data.tanggal_rencana_pulang);
                            this.keterangan_perintah_pulang.setValue(result.data.keterangan_rencana_pulang);

                            let atmkode_dokter = document.getElementById("atmkode_dokter") as HTMLInputElement;
                            atmkode_dokter.value = result.data.kode_dokter;

                            let titlekode_dokter = document.getElementById("titlekode_dokter") as HTMLInputElement;
                            titlekode_dokter.value = result.data.nama_dokter;

                        }, 500);
                    }
                }
            })
    }

    onGetPengantarPembayaran(RegisterId: number): void {
        this.suratPengantaranPembayaranPasienService.onGetPengantarPembayaranByIdRegister(RegisterId)
            .subscribe((result) => {
                if (result.responseResult) {
                    this.id_cara_pulang.setValue(result.data.id_cara_pulang);
                    this.id_kondisi_pulang.setValue(result.data.id_kondisi_pulang);

                    this.CaraPulangMeninggal = result.data.id_cara_pulang == 5 ? true : false;

                    this.SudahPernahInputSpp = true;
                };
            });
    }

    handleChangeDropdownCaraPulang(args: any): void {
        let data = args.itemData;

        this.CaraPulangMeninggal = data.cara_pulang == "MENINGGAL" ? true : false;
    }

    handleChangeDropdownKondisiPulang(args: any): void {

    }

    handleSelectedDokter(args: any): void {
        this.id_dokter_pemberi_ijin_pulang.setValue(args.id_dokter || args[0].id_dokter);
    }

    onSubmitSuratPengantarPembayaran(FormSuratPengantarPembayaran: any): void {
        Swal.fire({
            icon: 'warning',
            title: 'Apakah Anda Yakin?',
            text: 'Surat Pengantar Pembayaran Akan Disimpan',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Yes`,
            denyButtonText: `Tidak, Kembali`,
            focusDeny: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.suratPengantaranPembayaranPasienService.onPostSavePengantarPembayaran(FormSuratPengantarPembayaran)
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

    onCancelSuratPengantarPembayaran(FormCancelSuratPengantarPembayaran: any): void {
        Swal.fire({
            icon: 'warning',
            title: 'Apakah Anda Yakin?',
            text: `Pembatalan Surat Pengantar Pembayaran Akan Disimpan`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Yes`,
            denyButtonText: `Tidak, Kembali`,
            focusDeny: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.suratPengantaranPembayaranPasienService.onCancelPengantarPembayaran(FormCancelSuratPengantarPembayaran.id_register, FormCancelSuratPengantarPembayaran.reason_canceled)
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', 'Success', 'Surat Pengantar Pembayaran Berhasil Disimpan')
                                .then(() => {
                                    this.BatalkanPengantarPembayaran.handleCloseModalPembatalanPengantarPembayaran();

                                    this.handleClickButtonNav("Back");
                                });
                        }
                    });
            }
        });
    }

    handleSubmitDetailKematian(FormDetailKematian: any): void {
        Swal.fire({
            icon: 'warning',
            title: 'Apakah Anda Yakin?',
            text: `Data Pasien Meninggal Akan Disimpan`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Yes`,
            denyButtonText: `Tidak, Kembali`,
            focusDeny: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.suratPengantaranPembayaranPasienService.onPostSaveInfoKematian(FormDetailKematian)
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Pasien Meninggal Berhasil Disimpan')
                                .then(() => {
                                    this.DetailKematianPasien.handleCloseModalDetailKematian();
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
    get nama_dokter(): AbstractControl { return this.FormInformasiPasien.get("nama_dokter"); }

    get id_register_pengantar_pembayaran(): AbstractControl { return this.FormSuratPengantarPembayaran.get("id_register"); }
    get id_dokter_pemberi_ijin_pulang(): AbstractControl { return this.FormSuratPengantarPembayaran.get("id_dokter_pemberi_ijin_pulang"); }
    get id_cara_pulang(): AbstractControl { return this.FormSuratPengantarPembayaran.get("id_cara_pulang"); }
    get id_kondisi_pulang(): AbstractControl { return this.FormSuratPengantarPembayaran.get("id_kondisi_pulang"); }
    get id_rencana_pulang(): AbstractControl { return this.FormSuratPengantarPembayaran.get("id_rencana_pulang"); }
    get tanggal_perintah_pulang(): AbstractControl { return this.FormSuratPengantarPembayaran.get("tanggal_perintah_pulang"); }
    get keterangan_perintah_pulang(): AbstractControl { return this.FormSuratPengantarPembayaran.get("keterangan_perintah_pulang"); }
}
