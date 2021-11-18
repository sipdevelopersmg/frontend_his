import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { BsModalService } from 'ngx-bootstrap/modal';
import { JenisRuanganModel } from 'src/app/modules/Billing/models/setup-data/setup-jenis-ruangan.model';
import { KelasPerawatanModel } from 'src/app/modules/Billing/models/setup-data/setup-kelas-perawatan.model';
import { SetupJenisRuanganService } from 'src/app/modules/Billing/services/setup-data/setup-jenis-ruangan/setup-jenis-ruangan.service';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { DebiturModel } from 'src/app/modules/PIS/models/setup-data/setup-debitur.model';
import { PendaftaranPasienBaruService } from 'src/app/modules/PIS/services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import { AdmisiPasienRawatInapService } from 'src/app/modules/PIS/services/IRNA/admisi-pasien-rawat-inap/admisi-pasien-rawat-inap.service';
import { SetupDebiturService } from 'src/app/modules/PIS/services/setup-data/setup-debitur/setup-debitur.service';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { OrgLookUpChecklistComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up-checklist/org-look-up-checklist.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as API_ADMISI from '../../../../../../api/PIS/IRJA/PELAYANAN_RAWAT_JALAN';
import * as API_PIS from '../../../../../../api/PIS';
import * as API_BILLING_SETUP_DATA from '../../../../../../api/BILLING/SETUP_DATA';
import settingGrid from '../json/admisi-pasien-rawat-darurat.config.json';
import { IPersonPasienForAdmisiRawatJalanModel } from 'src/app/modules/PIS/models/IRJA/admisi-pasien-rawat-jalan.model';
import { IAdmisiPasienRawatInapModel, IAdmisiPasienRawatInapNonTPPRIModel } from 'src/app/modules/PIS/models/IRNA/admisi-pasien-rawat-inap.model';
import { PoliModel } from 'src/app/modules/Billing/models/setup-data/setup-poli.model';
import { IBedModel } from 'src/app/modules/PIS/models/IRNA/setup-bed.model';
import { IKamarModel } from 'src/app/modules/PIS/models/IRNA/setup-kamar.model';
import { AdmisiPasienRawatDaruratService } from 'src/app/modules/PIS/services/IRDA/admisi-pasien-rawat-darurat/admisi-pasien-rawat-darurat.service';

@Component({
    selector: 'app-pelayanan-pasien-rawat-darurat',
    templateUrl: './pelayanan-pasien-rawat-darurat.component.html',
    styleUrls: ['./pelayanan-pasien-rawat-darurat.component.css']
})
export class PelayananPasienRawatDaruratComponent implements OnInit {

    ButtonNav: object[];

    formAdmisiPasien: FormGroup;

    settingGrid = settingGrid;

    API_ADMISI = API_ADMISI;
    API_PIS = API_PIS.API_PIS;
    API_BILLING_SETUP_DATA = API_BILLING_SETUP_DATA.API_SETUP_DATA;

    @ViewChild('LookupMr') LookupMr: OrgInputLookUpComponent;
    urlRm = this.API_ADMISI.POST_GET_PASIEN_FOR_LOOKUP_ADMISI;

    @ViewChild('LookupKodePoli') LookupKodePoli: OrgInputLookUpKodeComponent;
    urlPoli = this.API_BILLING_SETUP_DATA.SETUP_POLI.GET_ALL_POLI_FOR_LOOKUP_ADMISI_RAWAT_DARURAT;

    @ViewChild('LookupKodeDokter') LookupKodeDokter: OrgInputLookUpKodeComponent;
    urlDokter = this.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_DOKTER.POST_GET_ALL_DOKTER_FOR_LOOKUP;

    @ViewChild('LookupAsalRujukan') LookupAsalRujukan: OrgInputLookUpKodeComponent;
    urlAsalRujukan = this.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_ASAL_RUJUKAN.GET_ALL_ASAL_RUJUKAN_FOR_LOOKUP_ADMISI;

    @ViewChild('LookupKotaAsalRujukan') LookupKotaAsalRujukan: OrgInputLookUpKodeComponent;
    urlKotaAsalRujukan = this.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_KOTA.GET_ALL_KOTA_FOR_LOOKUP_ADMISI;

    @ViewChild('LookupKelas') LookupKelas: OrgInputLookUpKodeComponent;
    urlKelasPelayanan = this.API_BILLING_SETUP_DATA.SETUP_KELAS_PERAWATAN.GET_ALL_KELAS_PERAWATAN;

    @ViewChild('LookupDiagnosa') LookupDiagnosa: OrgInputLookUpKodeComponent;
    urlDiagnosa = this.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_ICD_DIAGNOSA.GET_ALL_DIAGNOSA_FOR_LOOKUP_ADMISI;

    image = false;
    imageSrc: string;

    @ViewChild('DropdownDebitur') DropdownDebitur: DropDownListComponent;
    DropdownDebiturDatasource: DebiturModel[];
    DropdownDebiturField: object = { text: 'nama_debitur', value: 'id_debitur' };

    TglMasuk: Date = new Date();

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute,
        private encryptionService: EncryptionService,
        private setupDebiturService: SetupDebiturService,
        private setupJenisRuanganService: SetupJenisRuanganService,
        private setupKelasPerawatanService: SetupKelasPerawatanService,
        private pendaftaranPasienBaruService: PendaftaranPasienBaruService,
        private admisiPasienDaruratService: AdmisiPasienRawatDaruratService,
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
            { Id: 'Reset', Captions: 'Reset', Icons1: 'fa-redo-alt' },
            { Id: 'Save', Captions: 'Save', Icons1: 'fa-save' },
        ];

        this.onSetAttributeFormAdmisiPasien();

        this.onGetDetailPersonFromSearching();
    }

    onGetDetailPersonFromSearching(): void {
        if (this.activatedRoute.snapshot.params['id']) {
            let Person: IPersonPasienForAdmisiRawatJalanModel = JSON.parse(this.encryptionService.decrypt(this.activatedRoute.snapshot.params['id']));

            if (Person) {
                setTimeout(() => {
                    this.heandleSelectedMR(Person);
                }, 500);
            }
        }
    }

    onClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Back':
                this.router.navigateByUrl('dashboard/PIS/IRDA/pelayanan-pasien-rawat-darurat');
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
            id_dokter: [0, []],
            id_debitur: [0, []],
            id_asal_rujukan: [0, []],
            kode_wilayah_asal_rujukan: ["", []],
            no_peserta: ["", []],
            id_icd_masuk: [0, []],
            keterangan_diagnosa: ["", []],
            keluhan: ["", []],
        });
    }

    onGetAllDebiturByPersonId(PersonId: number): void {
        this.setupDebiturService.onGetAllByPersonId(PersonId)
            .subscribe((result) => {
                this.DropdownDebiturDatasource = result.data;
            });
    }

    heandleSelectedMR(args: any): void {
        this.image = true;

        (<HTMLInputElement>document.getElementById('inputGroupno_rekam_medis')).value = args.no_rekam_medis;

        this.id_person.setValue(args.id_person);
        this.no_rekam_medis.setValue(args.no_rekam_medis);
        this.full_name.setValue(args.full_name);

        this.pendaftaranPasienBaruService.onGetLinkFotoPerson(args.id_person, false)
            .subscribe((result) => {
                this.imageSrc = result.data;
            });

        this.onGetAllDebiturByPersonId(args.id_person);

        (<HTMLInputElement>document.getElementById('nama_pasien')).focus();
    }

    heandleSelectedPoli(args: PoliModel): void {
        this.id_poli.setValue(args.id_poli || args[0].id_poli);

        this.id_jenis_ruangan.setValue(args.id_jenis_ruangan || args[0].id_jenis_ruangan);
    }

    heandleSelectedDokter(args: any): void {
        this.id_dokter.setValue(args.id_dokter || args[0].id_dokter);
    }

    handleChangeDebiturPasien(args: any): void {
        let data = args.itemData;

        if (data.no_member) {
            this.no_peserta.setValue(data.no_member);
        };
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
        this.no_peserta.setValue("");
        this.id_icd_masuk.setValue(0);
        this.keterangan_diagnosa.setValue("");
        this.keluhan.setValue(0);

        this.image = false;
    }

    onSave(FormAdmisiPasien: any): void {
        if (FormAdmisiPasien.id_debitur == 1) {
            this.onSaveNonPenjamin(FormAdmisiPasien);
        };

        if (FormAdmisiPasien.id_debitur != 1) {
            this.onSaveWithPenjamin(FormAdmisiPasien);
        };
    }

    onSaveNonPenjamin(data: IAdmisiPasienRawatInapModel): void {
        const parameter = {
            "id_person": data.id_person,
            "no_rekam_medis": data.no_rekam_medis,
            "id_jenis_ruangan": data.id_jenis_ruangan,
            "id_poli": data.id_poli,
            "id_dokter": data.id_dokter,
            "id_debitur": data.id_debitur,
            "id_icd_masuk": data.id_icd_masuk,
            "keterangan_diagnosa": data.keterangan_diagnosa,
            "keluhan": data.keluhan,
        };

        this.admisiPasienDaruratService.onPostAdmisiRawatDaruratTanpaPenjamin(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Admisi Pasien Berhasil', `No. Register : ${result.data.no_register}`)
                        .then(() => {
                            this.resetForm();

                            setTimeout(() => {
                                this.router.navigateByUrl('dashboard/PIS/IRDA/pelayanan-pasien-rawat-darurat');
                            }, 250);
                        });
                }
            });
    }

    onSaveWithPenjamin(data: IAdmisiPasienRawatInapModel): void {
        this.admisiPasienDaruratService.onPostAdmisiRawatDaruratDenganPenjamin(data)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Admisi Pasien Berhasil', `No. Register : ${result.data.no_register}`)
                        .then(() => {
                            this.resetForm();

                            setTimeout(() => {
                                this.router.navigateByUrl('dashboard/PIS/IRDA/pelayanan-pasien-rawat-darurat');
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
    get id_dokter(): AbstractControl { return this.formAdmisiPasien.get('id_dokter'); }
    get id_debitur(): AbstractControl { return this.formAdmisiPasien.get('id_debitur'); }
    get id_asal_rujukan(): AbstractControl { return this.formAdmisiPasien.get('id_asal_rujukan'); }
    get kode_wilayah_asal_rujukan(): AbstractControl { return this.formAdmisiPasien.get('kode_wilayah_asal_rujukan'); }
    get no_peserta(): AbstractControl { return this.formAdmisiPasien.get('no_peserta'); }
    get id_icd_masuk(): AbstractControl { return this.formAdmisiPasien.get('id_icd_masuk'); }
    get keterangan_diagnosa(): AbstractControl { return this.formAdmisiPasien.get('keterangan_diagnosa'); }
    get keluhan(): AbstractControl { return this.formAdmisiPasien.get('keluhan') };
}
