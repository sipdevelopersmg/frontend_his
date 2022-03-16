import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdmisiPasienRawatJalanService } from 'src/app/modules/PIS/services/IRJA/admisi-pasien-rawat-jalan/admisi-pasien-rawat-jalan.service';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DebiturModel } from 'src/app/modules/PIS/models/setup-data/setup-debitur.model';
import { KelasPerawatanModel } from 'src/app/modules/Billing/models/setup-data/setup-kelas-perawatan.model';
import { JenisRuanganModel } from 'src/app/modules/Billing/models/setup-data/setup-jenis-ruangan.model';
import { PendaftaranPasienBaruService } from 'src/app/modules/PIS/services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import { SetupJenisRuanganService } from 'src/app/modules/Billing/services/setup-data/setup-jenis-ruangan/setup-jenis-ruangan.service';
import { SetupDebiturService } from 'src/app/modules/PIS/services/setup-data/setup-debitur/setup-debitur.service';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import settingGrid from '../json/grid.json';
import { OrgLookUpChecklistComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up-checklist/org-look-up-checklist.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { IPersonPasienForAdmisiRawatJalanModel } from 'src/app/modules/PIS/models/IRJA/admisi-pasien-rawat-jalan.model';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { PoliModel } from 'src/app/modules/Billing/models/setup-data/setup-poli.model';
import * as API_ADMISI from '../../../../../../api/PIS/IRJA/PELAYANAN_RAWAT_JALAN';
import * as API_PIS_SETUP_DATA from '../../../../../../api/PIS/SETUP_DATA';
import * as API_BILLING_SETUP_DATA from '../../../../../../api/BILLING/SETUP_DATA';
import { IInputSEPModel } from 'src/app/modules/PIS/models/SEP/INPUT_SEP.model';

@Component({
    selector: 'app-pelayanan-pasien-rawat-jalan',
    templateUrl: './pelayanan-pasien-rawat-jalan.component.html',
    styleUrls: ['./pelayanan-pasien-rawat-jalan.component.css']
})
export class PelayananPasienRawatJalanComponent implements OnInit {

    ButtonNav: object[];

    formAdmisiPasien: FormGroup;

    settingGrid = settingGrid;

    API_ADMISI = API_ADMISI;
    API_PIS_SETUP_DATA = API_PIS_SETUP_DATA.API_SETUP_DATA;
    API_BILLING_SETUP_DATA = API_BILLING_SETUP_DATA.API_SETUP_DATA;

    @ViewChild('LookupMr') LookupMr: OrgInputLookUpComponent;
    urlRm = this.API_ADMISI.POST_GET_PASIEN_FOR_LOOKUP_ADMISI_NON_ANONIM;
    LookupRmExceptionalData: any;

    @ViewChild('DropdownRuangan') DropdownRuangan: DropDownListComponent;
    DropdownRuanganDatasource: JenisRuanganModel[];
    DropdownRuanganField: object = { text: 'jenis_ruangan', value: 'id_jenis_ruangan' };

    @ViewChild('LookupKodePoli') LookupKodePoli: OrgInputLookUpKodeComponent;
    urlPoli: string;

    @ViewChild('LookupKodeDokter') LookupKodeDokter: OrgInputLookUpKodeComponent;
    urlDokter = "";

    @ViewChild('LookupAsalRujukan') LookupAsalRujukan: OrgInputLookUpKodeComponent;
    urlAsalRujukan = this.API_PIS_SETUP_DATA.SETUP_ASAL_RUJUKAN.GET_ALL_ASAL_RUJUKAN_FOR_LOOKUP_ADMISI;

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
    DebiturNotTanggunganPribadi = false;

    @ViewChild('DropdownKelas') DropdownKelas: DropDownListComponent;
    DropdownKelasDatasource: KelasPerawatanModel[];
    DropdownKelasField: object = { text: 'nama_kelas', value: 'id_kelas' };

    TglMasuk: Date = new Date();

    @ViewChild('LookupChecklist') LookupChecklist: OrgLookUpChecklistComponent;

    FormInputSEP: FormGroup;
    FormInputSEPAdditionalData: IInputSEPModel;

    ShowLakaLantasDetail: boolean = false;

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

        this.LookupRmExceptionalData = {
            field: 'id_person',
            value_1: -1,
            value_2: 0
        };

        this.FormInputSEPAdditionalData = {};
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
                this.router.navigateByUrl('dashboard/PIS/IRJA/pelayanan-pasien-rawat-jalan');
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
            id_person: [0, [Validators.required]],
            full_name: ["", [Validators.required]],
            no_rekam_medis: ["", [Validators.required]],
            id_jenis_ruangan: [0, [Validators.required, Validators.min(1)]],
            id_poli: [0, [Validators.required, Validators.min(1)]],
            id_jadwal_dokter: [0, [Validators.required, Validators.min(1)]],
            id_dokter: [0, [Validators.required, Validators.min(1)]],
            id_debitur: [0, [Validators.required, Validators.min(1)]],
            id_asal_rujukan: [0, []],
            kode_wilayah_asal_rujukan: ["", []],
            id_kelas_rawat: [0, [Validators.required, Validators.min(1)]],
            no_peserta: ["", []],
            id_icd_masuk: [0, [Validators.required, Validators.min(1)]],
            keterangan_diagnosa: ["", []],
            keluhan: ["", []],
            no_antrian: ["", []],
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

        this.FormInputSEPAdditionalData.id_jenis_ruangan = JenisRuanganId;
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

        this.FormInputSEPAdditionalData.id_person = args.id_person;
        this.FormInputSEPAdditionalData.no_rekam_medis = args.no_rekam_medis;
        this.FormInputSEPAdditionalData.full_name = args.full_name;
    }

    heandleSelectedPoli(args: PoliModel): void {
        this.id_poli.setValue(args.id_poli || args[0].id_poli);

        this.urlDokter = "";

        this.urlDokter = this.API_PIS_SETUP_DATA.SETUP_DOKTER.POST_GET_ALL_DOKTER_FOR_LOOKUP_ADMISI + this.id_poli.value;

        this.FormInputSEPAdditionalData.id_poli = args.id_poli || args[0].id_poli;
        this.FormInputSEPAdditionalData.kode_poli = args.kode_poli || args[0].kode_poli;
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

        this.FormInputSEPAdditionalData.id_jadwal_dokter = args.id_jadwal_dokter || args[0].id_jadwal_dokter;
        this.FormInputSEPAdditionalData.id_dokter = args.id_dokter || args[0].id_dokter;
        this.FormInputSEPAdditionalData.kode_dpjp = args.kode_dokter || args[0].kode_dokter;
    }

    handleChangeDropdownDebitur(args: any): void {
        let data = args.itemData;

        if (data.id_debitur !== 1) {
            this.no_peserta.setValue(data.no_member);
            this.DebiturNotTanggunganPribadi = true;
        } else {
            this.DebiturNotTanggunganPribadi = false;
        }

        this.FormInputSEPAdditionalData.id_debitur = data.id_debitur;
    }

    handleSelectedAsalRujukan(args: any): void {
        this.id_asal_rujukan.setValue(args.id_asal_rujukan || args[0].id_asal_rujukan);

        this.FormInputSEPAdditionalData.id_asal_rujukan = args.id_asal_rujukan || args[0].id_asal_rujukan;
    }

    handleSelectedKotaAsalRujukan(args: any): void {
        this.kode_wilayah_asal_rujukan.setValue(args.kode_wilayah || args[0].kode_wilayah);

        this.FormInputSEPAdditionalData.kode_wilayah_asal_rujukan = args.kode_wilayah || args[0].kode_wilayah;
    }

    heandleSelectedDiagnosaAwal(args: any): void {
        this.id_icd_masuk.setValue(args.id_icd || args[0].id_icd);

        this.FormInputSEPAdditionalData.id_icd_masuk = args.id_icd || args[0].id_icd;
        this.FormInputSEPAdditionalData.diag_awal = args.nama_icd || args[0].nama_icd;
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

        // const btnModalInputSEP = document.getElementById('btnModalInputSEP') as HTMLElement;
        // btnModalInputSEP.click();

        // setTimeout(() => {
        //     this.FormInputSEPAdditionalData.id_kelas_rawat = FormAdmisiPasien.id_kelas_rawat;
        //     this.FormInputSEPAdditionalData.keterangan_diagnosa = FormAdmisiPasien.keterangan_diagnosa;
        //     this.FormInputSEPAdditionalData.keluhan = FormAdmisiPasien.keluhan;
        //     this.FormInputSEPAdditionalData.no_peserta = FormAdmisiPasien.no_peserta;
        //     this.FormInputSEPAdditionalData.no_surat_rujukan = (document.getElementById('no_rujukan') as HTMLInputElement).value;

        //     console.log(this.FormInputSEPAdditionalData);
        // }, 500);
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
            "keluhan": data.keluhan,
            "no_antrian": data.no_antrian
        };

        let formValidator = this.utilityService.onValidateForm(this.formAdmisiPasien);

        if (formValidator.length > 0) {
            this.utilityService.onShowingCustomAlert('warning', 'Oops', `${formValidator[0]} Tidak Boleh Kosong`);
        } else {
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
    get no_antrian(): AbstractControl { return this.formAdmisiPasien.get('no_antrian') };

    handleClickPencarianNoRujukan(NoRujukan: string): void {
        console.log(NoRujukan);
    }

    onChangeRadioLakaLantas(value: boolean): void {
        this.ShowLakaLantasDetail = value;
    }
}
