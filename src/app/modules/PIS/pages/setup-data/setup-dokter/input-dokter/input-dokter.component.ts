import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import { Observable } from 'rxjs';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { AgamaModel } from 'src/app/modules/PIS/models/setup-data/agama.model';
import { JenisIdentitasModel } from 'src/app/modules/PIS/models/setup-data/jenis-identitas.model';
import { MaritalStatusModel } from 'src/app/modules/PIS/models/setup-data/marital_status.model';
import { BahasaModel } from 'src/app/modules/PIS/models/setup-data/setup-bahasa.model';
import { EducationModel } from 'src/app/modules/PIS/models/setup-data/setup-education.model';
import { EtnisModel } from 'src/app/modules/PIS/models/setup-data/setup-etnis.model';
import { JobTypeModel } from 'src/app/modules/PIS/models/setup-data/setup-job-type.model';
import { KebangsaanModel } from 'src/app/modules/PIS/models/setup-data/setup-kebangsaan.model';
import { KecamatanModel } from 'src/app/modules/PIS/models/setup-data/setup-kecamatan.model';
import { KotaModel } from 'src/app/modules/PIS/models/setup-data/setup-kota.model';
import { ProvinsiModel } from 'src/app/modules/PIS/models/setup-data/setup-provinsi.model';
import { SmfModel } from 'src/app/modules/PIS/models/setup-data/setup-smf-dokter.model';
import { SpesialisasiDokterModel } from 'src/app/modules/PIS/models/setup-data/setup-spesialiasi-dokter.model';
import { SetupDokterService } from 'src/app/modules/PIS/services/setup-data/setup-dokter/setup-dokter.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'app-input-dokter',
    templateUrl: './input-dokter.component.html',
    styleUrls: ['./input-dokter.component.css']
})
export class InputDokterComponent implements OnInit {

    /** @UserData Variable User Data Get dari Session Storage */
    UserData: IAuthenticationResponseModel = JSON.parse(localStorage.getItem('UserData'));

    /** @ButtonNav Button Navigation Properties */
    ButtonNav: ButtonNavModel[] = [];

    /** @FormInputDokter Form Input Dokter Attribute */
    FormInputDokter: FormGroup;
    FormPerson: FormGroup;
    FormAlamats: FormArray;
    FormKontaks: FormArray;
    FormDokter: FormGroup;

    // ** Step States digunakan untuk mengatur state di Wizard
    stepStates = {
        normal: STEP_STATE.normal,
        disabled: STEP_STATE.disabled,
        error: STEP_STATE.error,
        hidden: STEP_STATE.hidden
    };

    // ** config untuk mengatur Wizard
    config: NgWizardConfig = {
        selected: 0,
        theme: THEME.dots,
        toolbarSettings: {}
    };

    /** @PersonFound Berisikan true / false, setelah Check No Identitas */
    PersonFound: boolean = false;
    IsPersonExisting: boolean = false;

    /**
     * @JenisIdentitasDropdownDatasource 
     * @Keterangan Dropdown Jenis Identitas Datasource
    */
    JenisIdentitasDropdownWniDatasource: Observable<JenisIdentitasModel[]> = this.setupDokterService.JenisIdentitasWniSubject.asObservable();
    JenisIdentitasDropdownWnaDatasource: Observable<JenisIdentitasModel[]> = this.setupDokterService.JenisIdentitasWnaSubject.asObservable();

    /**
     * @JenisIdentitasDropdownField 
     * @Keterangan Dropdown Jenis Identitas Mapping Field
    */
    JenisIdentitasDropdownField: object = { text: 'jenis_identitas', value: 'id_jenis_identitas' };

    /**
     * @GenderDropdown
     * @Keterangan Gender Dropdown 
    */
    @ViewChild('GenderDropdown') GenderDropdown: DropDownListComponent;

    /**
     * @GenderDropdownDatasource 
     * @Keterangan Dropdown Gender Datasource
    */
    GenderDropdownDatasource: object[] = [{ text: 'Laki - Laki', value: 'L' }, { text: 'Perempuan', value: 'P' }];

    /**
     * @GenderDropdownField 
     * @Keterangan Dropdown Gender Mapping Field
    */
    GenderDropdownField: object = { text: 'text', value: 'value' };

    /**
     * @MaritalStatusDropdown
     * @Keterangan Marital Status Dropdown 
    */
    @ViewChild('MaritalStatusDropdown') MaritalStatusDropdown: DropDownListComponent;

    /**
     * @MaritalStatusDropdownDatasource 
     * @Keterangan Dropdown Marital Status Datasource
    */
    MaritalStatusDropdownDatasource: Observable<MaritalStatusModel[]> = this.setupDokterService.MaritalStatusSubject.asObservable();

    /**
     * @MaritalStatusDropdownField 
     * @Keterangan Dropdown Marital Status Mapping Field
    */
    MaritalStatusDropdownField: object = { text: 'marital_status', value: 'id_marital_status' };

    /**
     * @AgamaDropdown
     * @Keterangan Agama Dropdown 
    */
    @ViewChild('AgamaDropdown') AgamaDropdown: DropDownListComponent;

    /**
     * @AgamaDropdownDatasource 
     * @Keterangan Dropdown Agama Datasource
    */
    AgamaDropdownDatasource: Observable<AgamaModel[]> = this.setupDokterService.AgamaSubject.asObservable();

    /**
     * @AgamaDropdownField 
     * @Keterangan Dropdown Agama Mapping Field
    */
    AgamaDropdownField: object = { text: 'agama', value: 'id_agama' };

    /**
     * @KebangsaanDropdown
     * @Keterangan Kebangsaan Dropdown 
    */
    @ViewChild('KebangsaanDropdown') KebangsaanDropdown: DropDownListComponent;

    /**
     * @KebangsaanDropdownDatasource 
     * @Keterangan Dropdown Kebangsaan Datasource
    */
    KebangsaanDropdownDatasource: Observable<KebangsaanModel[]> = this.setupDokterService.KebangsaanSubject.asObservable();

    /**
     * @KebangsaanDropdownField 
     * @Keterangan Dropdown Kebangsaan Mapping Field
    */
    KebangsaanDropdownField: object = { text: 'nama_kebangsaan', value: 'id_kebangsaan' };

    /**
     * @EtnisDropdown
     * @Keterangan Etnis Dropdown 
    */
    @ViewChild('EtnisDropdown') EtnisDropdown: DropDownListComponent;

    /**
     * @EtnisDropdownDatasource 
     * @Keterangan Dropdown Etnis Datasource
    */
    EtnisDropdownDatasource: Observable<EtnisModel[]> = this.setupDokterService.EtnisSubject.asObservable();

    /**
     * @EtnisDropdownField 
     * @Keterangan Dropdown Etnis Mapping Field
    */
    EtnisDropdownField: object = { text: 'etnis', value: 'id_etnis' };

    /**
     * @BahasaDropdown
     * @Keterangan Bahasa Dropdown 
    */
    @ViewChild('BahasaDropdown') BahasaDropdown: DropDownListComponent;

    /**
     * @BahasaDropdownDatasource 
     * @Keterangan Dropdown Bahasa Datasource
    */
    BahasaDropdownDatasource: Observable<BahasaModel[]> = this.setupDokterService.BahasaSubject.asObservable();

    /**
     * @BahasaDropdownField 
     * @Keterangan Dropdown Bahasa Mapping Field
    */
    BahasaDropdownField: object = { text: 'bahasa', value: 'id_bahasa' };

    /**
     * @EducationDropdown
     * @Keterangan Education Dropdown 
    */
    @ViewChild('EducationDropdown') EducationDropdown: DropDownListComponent;

    /**
     * @EducationDropdownDatasource 
     * @Keterangan Dropdown Education Datasource
    */
    EducationDropdownDatasource: Observable<EducationModel[]> = this.setupDokterService.EducationSubject.asObservable();

    /**
     * @EducationDropdownField 
     * @Keterangan Dropdown Education Mapping Field
    */
    EducationDropdownField: object = { text: 'education', value: 'id_education' };

    /**
     * @JobTypeDropdown
     * @Keterangan Job Type Dropdown 
    */
    @ViewChild('JobTypeDropdown') JobTypeDropdown: DropDownListComponent;

    /**
     * @JobTypeDropdownDatasource 
     * @Keterangan Dropdown Job Type Datasource
    */
    JobTypeDropdownDatasource: Observable<JobTypeModel[]> = this.setupDokterService.JobTypeSubject.asObservable();

    /**
     * @JobTypeDropdownField 
     * @Keterangan Dropdown Job Type Mapping Field
    */
    JobTypeDropdownField: object = { text: 'job_type', value: 'id_job_type' };

    /**
     * @ProvinsiDropdown
     * @Keterangan Provinsi Dropdown 
    */
    @ViewChild('ProvinsiDropdown') ProvinsiDropdown: DropDownListComponent;

    /**
     * @ProvinsiDropdownDataSource 
     * @Keterangan Dropdown Provinsi Datasource
    */
    ProvinsiDropdownDataSource: Observable<ProvinsiModel[]> = this.setupDokterService.ProvinsiSubject.asObservable();

    /**
     * @KotaDropdown
     * @Keterangan Kota Dropdown 
    */
    @ViewChild('KotaDropdown') KotaDropdown: DropDownListComponent;

    /**
     * @KotaDropdownDataSource 
     * @Keterangan Dropdown Kota Datasource
    */
    KotaDropdownDataSource: Observable<KotaModel[]> = this.setupDokterService.KotaSubject.asObservable();

    /**
     * @KecamatanDropdown
     * @Keterangan Kecamatan Dropdown 
    */
    @ViewChild('KecamatanDropdown') KecamatanDropdown: DropDownListComponent;

    /**
     * @KecamatanDropdownDataSource 
     * @Keterangan Dropdown Kecamatan Datasource
    */
    KecamatanDropdownDataSource: Observable<KecamatanModel[]> = this.setupDokterService.KecamatanSubject.asObservable();

    /**
     * @SetupWilayahDropdownField 
     * @Keterangan Dropdown Setup - Setup Wilayah Mapping Field
    */
    SetupWilayahDropdownField: object = { text: 'nama_wilayah', value: 'kode_wilayah' };

    /**
     * @SpesialisasiDokter
     * @Keterangan Spesialisasi Dokter Dropdown 
    */
    @ViewChild('SpesialisasiDokter') SpesialisasiDokter: DropDownListComponent;

    /**
     * @SpesialisasiDokterDropdownDataSource 
     * @Keterangan Dropdown Spesialisasi Dokter Datasource
    */
    SpesialisasiDokterDropdownDataSource: Observable<SpesialisasiDokterModel[]> = this.setupDokterService.SpesialisasiDokterSubject.asObservable();

    /**
     * @SpesialisasiDokterDropdownField 
     * @Keterangan Dropdown Setup Spesialisasi Dokter Mapping Field
    */
    SpesialisasiDokterDropdownField: object = { text: 'spesialisasi_dokter', value: 'id_spesialisasi_dokter' };

    /**
     * @SmfDokter
     * @Keterangan Smf Dokter Dropdown 
    */
    @ViewChild('SmfDokter') SmfDokter: DropDownListComponent;

    /**
     * @SmfDokterDropdownDataSource 
     * @Keterangan Dropdown Smf Dokter Datasource
    */
    SmfDokterDropdownDataSource: Observable<SmfModel[]> = this.setupDokterService.SmfDokterSubject.asObservable();

    /**
     * @SmfDokterDropdownField 
     * @Keterangan Dropdown Setup Smf Dokter Mapping Field
    */
    SmfDokterDropdownField: object = { text: 'nama_smf', value: 'id_smf' };

    /**
     * @StatusDokter
     * @Keterangan Status Dokter Dropdown 
    */
    @ViewChild('StatusDokter') StatusDokter: DropDownListComponent;

    /**
     * @StatusDokterDropdownDataSource 
     * @Keterangan Dropdown Status Dokter Datasource
    */
    StatusDokterDropdownDataSource: Observable<SmfModel[]> = this.setupDokterService.StatusDokterSubject.asObservable();

    /**
     * @StatusDokterDropdownField 
     * @Keterangan Dropdown Setup Status Dokter Mapping Field
    */
    StatusDokterDropdownField: object = { text: 'status_dokter', value: 'id_status_dokter' };

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private ngWizardService: NgWizardService,
        private setupDokterService: SetupDokterService
    ) { }

    ngOnInit(): void {
        this.onSetFormSetupDokterAttribute();

        this.setupDokterService.onGetDropdownOptions();
    }

    onSetFormSetupDokterAttribute(): void {
        this.FormInputDokter = this.formBuilder.group({
            "person": this.formBuilder.group({
                "id_jenis_identitas": [0, []],
                "no_identitas": ["", [Validators.required]],
                "no_kartu_keluarga": ["", []],
                "nama_depan": ["", [Validators.required]],
                "nama_belakang": ["", []],
                "nama_panggilan": ["", []],
                "gelar_depan": ["", []],
                "gelar_belakang": ["", []],
                "gender": ["", [Validators.required]],
                "path_foto": ["", []],
                "nama_foto": ["", []],
                "gol_darah": ["", [Validators.required]],
                "tempat_lahir": ["", []],
                "tanggal_lahir": [Date, [Validators.required]],
                "tinggi_badan_cm": [0, []],
                "berat_badan_kg": [0, []],
                "id_marital_status": [0, []],
                "id_agama": [0, []],
                "id_kebangsaan": [0, []],
                "id_etnis": [0, []],
                "id_bahasa": [0, []],
                "id_last_education": [0, []],
                "id_job_type": [0, []],
                "user_created": [this.UserData.id_user, [Validators.required]],
            }),
            "alamat_person": this.formBuilder.array([

            ]),
            "kontak_person": this.formBuilder.array([

            ]),
            "dokter": this.formBuilder.group({
                "id_spesialisasi_dokter": [0, Validators.required],
                "no_surat_ijin_praktek": ["", []],
                "tgl_exp_surat_ijin_praktek": [Date, Validators.required],
                "no_str": ["", []],
                "tgl_exp_str": [Date, Validators.required],
                "id_smf": [0, []],
                "id_status_dokter": [0, []],
                "user_created": [this.UserData.id_user, []],
            })
        });

        this.FormPerson = this.FormInputDokter.get('person') as FormGroup

        this.FormAlamats = this.FormInputDokter.get('alamat_person') as FormArray;
        this.FormAlamats.push(this.NewAlamat());

        this.FormKontaks = this.FormInputDokter.get('kontak_person') as FormArray;
        this.FormKontaks.push(this.NewKontak());
    }

    NewAlamat(): FormGroup {
        return this.formBuilder.group({
            "alamat_lengkap": ["", Validators.required],
            "kode_pos": ["", []],
            "rt": ["", []],
            "rw": ["", []],
            "kelurahan": ["", []],
            "kode_wilayah": ["", Validators.required],
            "user_created": [this.UserData.id_user, []],
        });
    }

    NewKontak(): FormGroup {
        return this.formBuilder.group({
            "hand_phone": ["", Validators.required],
            "home_phone": ["", Validators.required],
            "office_phone": ["", Validators.required],
            "email": ["", []],
            "keterangan": ["", []],
            "user_created": [this.UserData.id_user, []],
        });
    }

    /** @stepChanged Function untuk melihat ketika Step di Wizard berganti */
    stepChanged(args: StepChangedArgs): void {
        if (args.step.index == 4) {
            this.ButtonNav = [
                { Id: 'Save', Captions: 'Simpan', 'Icons1': 'fa-save' }
            ];
        } else if (args.step.index == 5) {
            this.ButtonNav = [
                { Id: 'Upload', Captions: 'Upload', 'Icons1': 'fa-file-upload' },
                { Id: 'Cancel', Captions: 'Cancel', 'Icons1': 'fa-redo-alt' },
            ];
        } else {
            this.ButtonNav = [];
        }
    }

    /** @resetWizard Function untuk Mereset Wizard (Wajib di deklrasikan) */
    resetWizard(event?: Event) {
        this.ngWizardService.reset();
    }

    /** @setTheme Function untuk Mengatur Tema Wizard (Wajib di deklrasikan) */
    setTheme(theme: THEME) {
        this.ngWizardService.theme(theme);
    }

    handleChangeRadioButtonKewarganegaraan(JenisKewarganegaraan?: string): void {
        // console.log(JenisKewarganegaraan);
    }

    handleDropdownJenisIdentitasChange(args: any): void {
        this.id_jenis_identitas.setValue(args.itemData.id_jenis_identitas);
    }

    handleCheckPersonByNoIdentitas(NoIdentitas: string): void {
        this.setupDokterService.onCheckPersonByNoIdentitas(NoIdentitas)
            .subscribe((result) => {

                if (result) {
                    const kode_dokter = result.data.kode_dokter;

                    // ** Terdaftar sebagai Person / Pasien, tetapi belum terdaftar sebagai Dokter
                    if (kode_dokter == "") {
                        this.PersonFound = true;
                        this.IsPersonExisting = true;

                        this.utilityService.onShowingCustomAlert('info', 'Person Ditemukan', 'Anda Dapat Melanjutkan Input Dokter')
                            .then(() => {
                                this.ngWizardService.next();
                            })
                    }
                    // ** Terdaftar sebagai Dokter
                    else {
                        this.utilityService.onShowingCustomAlert('error', 'Dokter Ditemukan', `Dengan Kode Dokter ${kode_dokter}`)
                            .then(() => {
                                this.PersonFound = false;
                                this.IsPersonExisting = true;
                            });
                    }
                } else {
                    this.PersonFound = true;
                    this.IsPersonExisting = false;

                    this.utilityService.onShowingCustomAlert('info', 'Person Tidak Ditemukan', 'Anda Dapat Melanjutkan Input Data Dokter')
                        .then(() => {
                            this.ngWizardService.next();
                        });
                }
            })
    }

    handleDropdownProvinsiChange(KodeProvinsi: string): void {
        this.setupDokterService.onGetDropdownKotaDatasourceByProvinsiId(KodeProvinsi);
    }

    handleDropdownKotaChange(KodeKota: string): void {
        this.setupDokterService.onGetDropdownKecamatanDatasourceByKotaId(KodeKota);
    }

    handleClickTambahFormArray(Kategori: string): void {
        switch (Kategori) {
            case "Alamat":
                this.FormAlamats = this.FormInputDokter.get('alamat_person') as FormArray;
                this.FormAlamats.push(this.NewAlamat());
                break;
            case "Kontak":
                this.FormKontaks = this.FormInputDokter.get('kontak_person') as FormArray;
                this.FormKontaks.push(this.NewKontak());
                break;
            default:
                break;
        }
    }

    handleClickHapusFormArray(Kategori: string): void {
        switch (Kategori) {
            case "Alamat":
                this.FormAlamats = this.FormInputDokter.get('alamat_person') as FormArray;

                if (this.FormAlamats.length > 1) {
                    this.FormAlamats.removeAt(this.FormAlamats.length - 1);
                }
                break;
            case "Kontak":
                this.FormKontaks = this.FormInputDokter.get('kontak_person') as FormArray;

                if (this.FormKontaks.length > 1) {
                    this.FormKontaks.removeAt(this.FormKontaks.length - 1);
                }
                break;
            default:
                break;
        }
    }

    onClickButtonNav(ButtonId: any) {
        switch (ButtonId) {
            case "Cancel":
                this.onResetForm();
                this.resetWizard();
                break;
            case "Save":

                if (this.IsPersonExisting) {
                    this.no_identitas.setValue('');
                }

                this.setupDokterService.onSaveSetupDokter(this.FormInputDokter.value)
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', 'Success', 'Pendaftaran Dokter Berhasil Disimpan')
                                .then(() => {
                                    this.onResetForm();

                                    this.resetWizard();
                                });
                        }
                    });

                // Swal.fire({
                //     icon: 'success',
                //     title: 'Pendaftaran Pasien Berhasil',
                //     text: 'Apakah Anda Ingin Mengupload Foto Pasien?',
                //     showDenyButton: true,
                //     showCancelButton: false,
                //     confirmButtonText: `Yes`,
                //     denyButtonText: `Tidak, Lakukan Lain Kali`,
                // }).then((result) => {
                //     if (result.isConfirmed) {
                //         this.SubmittedForm = true;

                //     } else if (result.isDenied) {
                //         this.SubmittedForm = false;

                //         this.onResetForm();

                //         this.resetWizard();
                //     }
                // });

                break;
            case 'Upload':
                this.utilityService.onShowingCustomAlert('success', 'Success', 'Foto Pasien Berhasil Diupload')
                    .then(() => {
                        this.onResetForm();

                        this.resetWizard();
                    });
                break;
            default:
                break;
        }
    }

    onResetForm(): void {
        this.FormInputDokter.reset();

        (<HTMLInputElement>document.getElementById("radioKewarganegaraanIndo")).checked = false;
        (<HTMLInputElement>document.getElementById("radioKewarganegaraanAsing")).checked = false;
        this.id_jenis_identitas.setValue(0);
        this.no_identitas.setValue("");
        this.no_kartu_keluarga.setValue("");

        this.nama_depan.setValue("");
        this.nama_belakang.setValue("");
        this.nama_panggilan.setValue("");
        this.gelar_depan.setValue("");
        this.gelar_belakang.setValue("");

        this.gender.setValue("");
        this.GenderDropdown.value = null;

        this.gol_darah.setValue("");
        this.tempat_lahir.setValue("");
        this.tanggal_lahir.setValue(new Date());
        this.tinggi_badan_cm.setValue(0);
        this.berat_badan_kg.setValue(0);

        this.id_marital_status.setValue(0);
        this.MaritalStatusDropdown.value = null;

        this.id_agama.setValue(0);
        this.AgamaDropdown.value = null;

        this.id_kebangsaan.setValue(0);
        this.KebangsaanDropdown.value = null;

        this.id_etnis.setValue(0);
        this.EtnisDropdown.value = null;

        this.id_bahasa.setValue(0);
        this.BahasaDropdown.value = null;

        this.id_last_education.setValue(0);
        this.EducationDropdown.value = null;

        this.id_job_type.setValue(0);
        this.JobTypeDropdown.value = null;

        this.ProvinsiDropdown.value = null;
        this.KotaDropdown.value = null;
        this.KecamatanDropdown.value = null;

        this.user_created.setValue(this.UserData.id_user);

        if (this.FormAlamats.length > 1) {
            for (let i = 0; i < this.FormAlamats.length; i++) {
                this.FormAlamats.removeAt(i);
            }
        }

        if (this.FormKontaks.length > 1) {
            for (let i = 0; i < this.FormKontaks.length; i++) {
                this.FormKontaks.removeAt(i);
            }
        }

        this.id_spesialisasi_dokter.setValue(0);
        this.SpesialisasiDokter.value = null;

        this.no_surat_ijin_praktek.setValue("");
        this.tgl_exp_surat_ijin_praktek.setValue(new Date());
        this.no_str.setValue("");
        this.tgl_exp_str.setValue("");

        this.id_smf.setValue(0);
        this.SmfDokter.value = null;

        this.id_status_dokter.setValue(0);
        this.StatusDokter.value = null;

        this.user_created_dokter.setValue(this.UserData.id_user);
    }

    get id_jenis_identitas() { return this.FormInputDokter.get("person.id_jenis_identitas") }
    get no_identitas() { return this.FormInputDokter.get("person.no_identitas") }
    get no_kartu_keluarga() { return this.FormInputDokter.get("person.no_kartu_keluarga") }
    get nama_depan() { return this.FormInputDokter.get("person.nama_depan") }
    get nama_belakang() { return this.FormInputDokter.get("person.nama_belakang") }
    get nama_panggilan() { return this.FormInputDokter.get("person.nama_panggilan") }
    get gelar_depan() { return this.FormInputDokter.get("person.gelar_depan") }
    get gelar_belakang() { return this.FormInputDokter.get("person.gelar_belakang") }
    get gender() { return this.FormInputDokter.get("person.gender") }
    get gol_darah() { return this.FormInputDokter.get("person.gol_darah") }
    get tempat_lahir() { return this.FormInputDokter.get("person.tempat_lahir") }
    get tanggal_lahir() { return this.FormInputDokter.get("person.tanggal_lahir") }
    get tinggi_badan_cm() { return this.FormInputDokter.get("person.tinggi_badan_cm") }
    get berat_badan_kg() { return this.FormInputDokter.get("person.berat_badan_kg") }
    get id_marital_status() { return this.FormInputDokter.get("person.id_marital_status") }
    get id_agama() { return this.FormInputDokter.get("person.id_agama") }
    get id_kebangsaan() { return this.FormInputDokter.get("person.id_kebangsaan") }
    get id_etnis() { return this.FormInputDokter.get("person.id_etnis") }
    get id_bahasa() { return this.FormInputDokter.get("person.id_bahasa") }
    get id_last_education() { return this.FormInputDokter.get("person.id_last_education") }
    get id_job_type() { return this.FormInputDokter.get("person.id_job_type") }
    get user_created() { return this.FormInputDokter.get("person.user_created") }

    get alamat_person(): FormArray { return this.FormInputDokter.get("alamat_person") as FormArray }

    get kontak_person(): FormArray { return this.FormInputDokter.get("kontak_person") as FormArray }

    get id_spesialisasi_dokter() { return this.FormInputDokter.get("dokter.id_spesialisasi_dokter") }
    get no_surat_ijin_praktek() { return this.FormInputDokter.get("dokter.no_surat_ijin_praktek") }
    get tgl_exp_surat_ijin_praktek() { return this.FormInputDokter.get("dokter.tgl_exp_surat_ijin_praktek") }
    get no_str() { return this.FormInputDokter.get("dokter.no_str") }
    get tgl_exp_str() { return this.FormInputDokter.get("dokter.tgl_exp_str") }
    get id_smf() { return this.FormInputDokter.get("dokter.id_smf") }
    get id_status_dokter() { return this.FormInputDokter.get("dokter.id_status_dokter") }
    get user_created_dokter() { return this.FormInputDokter.get("dokter.user_created") }
}
