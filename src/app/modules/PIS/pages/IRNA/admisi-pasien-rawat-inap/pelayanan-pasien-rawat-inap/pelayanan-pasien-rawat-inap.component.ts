import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { JenisRuanganModel } from 'src/app/modules/Billing/models/setup-data/setup-jenis-ruangan.model';
import { KelasPerawatanModel } from 'src/app/modules/Billing/models/setup-data/setup-kelas-perawatan.model';
import { PoliModel } from 'src/app/modules/Billing/models/setup-data/setup-poli.model';
import { SetupJenisRuanganService } from 'src/app/modules/Billing/services/setup-data/setup-jenis-ruangan/setup-jenis-ruangan.service';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { IPersonPasienForAdmisiRawatJalanModel } from 'src/app/modules/PIS/models/IRJA/admisi-pasien-rawat-jalan.model';
import { DebiturModel } from 'src/app/modules/PIS/models/setup-data/setup-debitur.model';
import { AdmisiPasienRawatJalanService } from 'src/app/modules/PIS/services/IRJA/admisi-pasien-rawat-jalan/admisi-pasien-rawat-jalan.service';
import { PendaftaranPasienBaruService } from 'src/app/modules/PIS/services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import { SetupDebiturService } from 'src/app/modules/PIS/services/setup-data/setup-debitur/setup-debitur.service';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { OrgLookUpChecklistComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up-checklist/org-look-up-checklist.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as API_ADMISI from '../../../../../../api/PIS/IRJA/PELAYANAN_RAWAT_JALAN';
import * as API_PIS_SETUP_DATA from '../../../../../../api/PIS/SETUP_DATA';
import * as API_BILLING_SETUP_DATA from '../../../../../../api/BILLING/SETUP_DATA';
import settingGrid from '../json/admisi-pasien-rawat-inap.config.json';
import { IKamarModel } from 'src/app/modules/PIS/models/IRNA/setup-kamar.model';
import { IBedModel } from 'src/app/modules/PIS/models/IRNA/setup-bed.model';

@Component({
    selector: 'app-pelayanan-pasien-rawat-inap',
    templateUrl: './pelayanan-pasien-rawat-inap.component.html',
    styleUrls: ['./pelayanan-pasien-rawat-inap.component.css']
})
export class PelayananPasienRawatInapComponent implements OnInit {

    ButtonNav: object[];

    formAdmisiPasien: FormGroup;

    settingGrid = settingGrid;

    API_ADMISI = API_ADMISI;
    API_PIS_SETUP_DATA = API_PIS_SETUP_DATA.API_SETUP_DATA;
    API_BILLING_SETUP_DATA = API_BILLING_SETUP_DATA.API_SETUP_DATA;

    @ViewChild('LookupMr') LookupMr: OrgInputLookUpComponent;
    urlRm = this.API_ADMISI.POST_GET_PASIEN_FOR_LOOKUP_ADMISI;

    @ViewChild('DropdownRuangan') DropdownRuangan: DropDownListComponent;
    DropdownRuanganDatasource: JenisRuanganModel[];
    DropdownRuanganField: object = { text: 'jenis_ruangan', value: 'id_jenis_ruangan' };

    @ViewChild('LookupKodePoli') LookupKodePoli: OrgInputLookUpKodeComponent;
    urlPoli: string;

    @ViewChild('LookupKodeDokter') LookupKodeDokter: OrgInputLookUpKodeComponent;
    urlDokter = "";

    @ViewChild('LookupRoom') LookupRoom: OrgInputLookUpKodeComponent;
    urlLookupRoom = this.API_PIS_SETUP_DATA.SETUP_ASAL_RUJUKAN.GET_ALL_ASAL_RUJUKAN_FOR_LOOKUP_ADMISI;

    @ViewChild('LookupAsalRujukan') LookupAsalRujukan: OrgInputLookUpKodeComponent;
    urlAsalRujukan = this.API_PIS_SETUP_DATA.SETUP_ASAL_RUJUKAN.GET_ALL_ASAL_RUJUKAN_FOR_LOOKUP_ADMISI;

    @ViewChild('LookupBed') LookupBed: OrgInputLookUpKodeComponent;
    urlLookupBed = this.API_PIS_SETUP_DATA.SETUP_ASAL_RUJUKAN.GET_ALL_ASAL_RUJUKAN_FOR_LOOKUP_ADMISI;

    @ViewChild('LookupKotaAsalRujukan') LookupKotaAsalRujukan: OrgInputLookUpKodeComponent;
    urlKotaAsalRujukan = this.API_PIS_SETUP_DATA.SETUP_KOTA.GET_ALL_KOTA_FOR_LOOKUP_ADMISI;

    @ViewChild('LookupKelas') LookupKelas: OrgInputLookUpKodeComponent;
    urlKelasPelayanan = this.API_BILLING_SETUP_DATA.SETUP_KELAS_PERAWATAN.GET_ALL_KELAS_PERAWATAN_FOR_LOOKUP_ADMISI_IRJA;

    @ViewChild('LookupDiagnosa') LookupDiagnosa: OrgInputLookUpKodeComponent;
    urlDiagnosa = this.API_PIS_SETUP_DATA.SETUP_ICD_DIAGNOSA.GET_ALL_DIAGNOSA_FOR_LOOKUP_ADMISI;

    image = false;
    imageSrc: string;

    @ViewChild('DropdownDebitur') DropdownDebitur: DropDownListComponent;
    DropdownDebiturDatasource: DebiturModel[];
    DropdownDebiturField: object = { text: 'nama_debitur', value: 'id_debitur' };

    @ViewChild('DropdownKelas') DropdownKelas: DropDownListComponent;
    DropdownKelasDatasource: KelasPerawatanModel[];
    DropdownKelasField: object = { text: 'nama_kelas', value: 'id_kelas' };

    TglMasuk: Date = new Date();

    @ViewChild('LookupChecklist') LookupChecklist: OrgLookUpChecklistComponent;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private encryptionService: EncryptionService,
        private setupDebiturService: SetupDebiturService,
        private setupJenisRuanganService: SetupJenisRuanganService,
        private setupKelasPerawatanService: SetupKelasPerawatanService,
        private pendaftaranPasienBaruService: PendaftaranPasienBaruService,
        private admisiPasienRawatJalanService: AdmisiPasienRawatJalanService,
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
            { Id: 'Reset', Captions: 'Reset', Icons1: 'fa-redo-alt' },
            { Id: 'Save', Captions: 'Save', Icons1: 'fa-save' },
        ];

        this.onSetAttributeFormAdmisiPasien();

        this.onGetDetailPersonFromSearching();

        this.onGetAllJenisRuangan();

        this.onGetAllKelasPelayanan();
    }

    onGetDetailPersonFromSearching(): void {
        if (this.activatedRoute.snapshot.params['id']) {
            let Person: IPersonPasienForAdmisiRawatJalanModel = JSON.parse(this.encryptionService.decrypt(this.activatedRoute.snapshot.params['id']));

            if (Person) {
                setTimeout(() => {
                    console.log(Person);

                    this.heandleSelectedMR(Person);
                }, 500);
            }
        }
    }

    onClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Back':
                this.router.navigateByUrl('dashboard/PIS/IRNA/pelayanan-pasien-rawat-inap');
                break;
            case 'Reset':
                this.resetForm();
                break;
            case 'Save':
                this.onSave(this.formAdmisiPasien.value);
                break;
            default:
                break;
        }
    }

    onSetAttributeFormAdmisiPasien(): void {
        this.formAdmisiPasien = this.formBuilder.group({
            id_person: [0, []],
            full_name: ["", []],
            no_rekam_medis: ["", []],
            id_jenis_ruangan: [0, []],
            id_poli: [0, []],
            id_jadwal_dokter: [0, []],
            id_dokter: [0, []],
            id_debitur: [0, []],
            id_asal_rujukan: [0, []],
            kode_wilayah_asal_rujukan: ["", []],
            id_kelas_rawat: [0, []],
            no_peserta: ["", []],
            id_icd_masuk: [0, []],
            keterangan_diagnosa: ["", []],
            keluhan: ["", []],
        });
    }

    onGetAllJenisRuangan(): void {
        this.setupJenisRuanganService.onGetAll()
            .subscribe((result) => {
                this.DropdownRuanganDatasource = result.data;
            });
    }

    onGetAllDebiturByPersonId(PersonId: number): void {
        this.setupDebiturService.onGetAllByPersonId(PersonId)
            .subscribe((result) => {
                this.DropdownDebiturDatasource = result.data;
            });
    }

    onGetAllKelasPelayanan(): void {
        this.setupKelasPerawatanService.onGetAllForLookupAdmisiIrja()
            .subscribe((result) => {
                this.DropdownKelasDatasource = result.data;
            });
    }

    handleChangeDropdownRuangan(JenisRuanganId: number): void {
        this.urlPoli = this.API_BILLING_SETUP_DATA.SETUP_POLI.GET_ALL_POLI_FOR_LOOKUP_ADMISI + JenisRuanganId;
    }

    heandleSelectedMR(args: any): void {
        this.image = true;

        (<HTMLInputElement>document.getElementById('inputGroupno_rekam_medis')).value = args.no_rekam_medis;

        this.id_person.setValue(args.id_person);
        this.no_rekam_medis.setValue(args.no_rekam_medis);
        this.full_name.setValue(args.full_name || args.nama_pasien);

        this.pendaftaranPasienBaruService.onGetLinkFotoPerson(args.id_person, false)
            .subscribe((result) => {
                this.imageSrc = result.data;
            });

        this.onGetAllDebiturByPersonId(args.id_person);

        (<HTMLInputElement>document.getElementById('nama_pasien')).focus();
    }

    heandleSelectedRoom(args: IKamarModel): void {
        this.id_poli.setValue(args.id_poli || args[0].id_poli);

        this.urlDokter = "";

        this.urlDokter = this.API_PIS_SETUP_DATA.SETUP_DOKTER.POST_GET_ALL_DOKTER_FOR_LOOKUP_ADMISI + this.id_poli.value;
    }

    heandleSelectedBed(args: IBedModel): void {

    }

    heandleSelectedDokter(args: any): void {
        let sisa_kuota: any = args.sisa_kuota == ' - ' ? "Bebas" : parseInt(args.sisa_kuota);

        if (sisa_kuota == "Bebas" || sisa_kuota > 0) {
            this.id_dokter.setValue(args.id_dokter || args[0].id_dokter);

            this.id_jadwal_dokter.setValue(args.id_jadwal_dokter || args[0].id_jadwal_dokter);
        } else {
            this.utilityService.onShowingCustomAlert('warning', `Dokter ${args.full_name} Tidak Memiliki Kuota Tersisa`, 'Mohon Pilih Dokter Lain')
                .then(() => {
                    this.LookupKodeDokter.onOpenModal();
                });
        }
    }

    handleSelectedAsalRujukan(args: any): void {
        this.id_asal_rujukan.setValue(args.id_asal_rujukan || args[0].id_asal_rujukan);
    }

    handleSelectedKotaAsalRujukan(args: any): void {
        this.kode_wilayah_asal_rujukan.setValue(args.kode_wilayah || args[0].kode_wilayah);
    }

    heandleSelectedDiagnosaAwal(args: any): void {
        this.id_icd_masuk.setValue(args.id_icd || args[0].id_icd);
    }

    resetForm(): void {
        this.formAdmisiPasien.reset();
        this.LookupMr.resetValue();
        this.DropdownRuangan.value = null;
        this.DropdownKelas.value = null;
        this.LookupKodePoli.resetValue();
        this.LookupKodeDokter.resetValue();
        this.DropdownDebitur.value = null;
        this.LookupAsalRujukan.resetValue();
        this.LookupKotaAsalRujukan.resetValue();
        this.LookupDiagnosa.resetValue();

        this.id_person.setValue(0);
        this.full_name.setValue("");
        this.no_rekam_medis.setValue("");
        this.id_jenis_ruangan.setValue(0);
        this.id_poli.setValue(0);
        this.id_debitur.setValue(0);
        this.id_asal_rujukan.setValue(0);
        this.kode_wilayah_asal_rujukan.setValue("");
        this.id_kelas_rawat.setValue(0);
        this.no_peserta.setValue("");
        this.id_icd_masuk.setValue(0);
        this.keterangan_diagnosa.setValue("");
        this.keluhan.setValue(0);

        this.image = false;
    }

    onSave(FormAdmisiPasien: any): void {
        if (FormAdmisiPasien.id_debitur == 1) {
            this.onSaveNonPenjamin(FormAdmisiPasien);
        } else {
            this.onSaveWithPenjamin(FormAdmisiPasien);
        }
    }

    onSaveNonPenjamin(data: any) {
        const parameter = {
            "id_person": data.id_person,
            "no_rekam_medis": data.no_rekam_medis,
            "id_jenis_ruangan": data.id_jenis_ruangan,
            "id_poli": data.id_poli,
            "id_dokter": data.id_dokter,
            "id_jadwal_dokter": data.id_jadwal_dokter,
            "id_debitur": data.id_debitur,
            "id_kelas_rawat": data.id_kelas_rawat,
            "id_icd_masuk": data.id_icd_masuk,
            "keterangan_diagnosa": data.keterangan_diagnosa,
            "keluhan": data.keluhan
        };

        this.admisiPasienRawatJalanService.onPostAdmisiRawatJalanTanpaPenjamin(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Admisi Pasien Berhasil', `No. Register : ${result.data.no_register}`)
                        .then(() => {
                            this.resetForm();

                            setTimeout(() => {
                                this.router.navigateByUrl('dashboard/PIS/IRJA/pelayanan-pasien-rawat-jalan');
                            }, 250);
                        });
                }
            });
    }

    onSaveWithPenjamin(data: any) {
        this.admisiPasienRawatJalanService.onPostAdmisiRawatJalanDenganPenjamin(data)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Admisi Pasien Berhasil', `No. Register : ${result.data.no_register}`)
                        .then(() => {
                            this.resetForm();

                            setTimeout(() => {
                                this.router.navigateByUrl('dashboard/PIS/IRJA/pelayanan-pasien-rawat-jalan');
                            }, 250);
                        });
                }
            });
    }

    get id_person(): AbstractControl { return this.formAdmisiPasien.get('id_person'); }
    get full_name(): AbstractControl { return this.formAdmisiPasien.get('full_name'); }
    get no_rekam_medis(): AbstractControl { return this.formAdmisiPasien.get('no_rekam_medis'); }
    get id_jenis_ruangan(): AbstractControl { return this.formAdmisiPasien.get('id_jenis_ruangan'); }
    get id_poli(): AbstractControl { return this.formAdmisiPasien.get('id_poli'); }
    get id_jadwal_dokter(): AbstractControl { return this.formAdmisiPasien.get('id_jadwal_dokter'); }
    get id_dokter(): AbstractControl { return this.formAdmisiPasien.get('id_dokter'); }
    get id_debitur(): AbstractControl { return this.formAdmisiPasien.get('id_debitur'); }
    get id_asal_rujukan(): AbstractControl { return this.formAdmisiPasien.get('id_asal_rujukan'); }
    get kode_wilayah_asal_rujukan(): AbstractControl { return this.formAdmisiPasien.get('kode_wilayah_asal_rujukan'); }
    get id_kelas_rawat(): AbstractControl { return this.formAdmisiPasien.get('id_kelas_rawat'); }
    get no_peserta(): AbstractControl { return this.formAdmisiPasien.get('no_peserta'); }
    get id_icd_masuk(): AbstractControl { return this.formAdmisiPasien.get('id_icd_masuk'); }
    get keterangan_diagnosa(): AbstractControl { return this.formAdmisiPasien.get('keterangan_diagnosa'); }
    get keluhan(): AbstractControl { return this.formAdmisiPasien.get('keluhan') };
}
