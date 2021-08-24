import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { PendaftaranPasienBaruService } from '../../../../services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import { JenisIdentitasModel } from 'src/app/modules/PIS/models/setup-data/jenis-identitas.model';
import { MaritalStatusModel } from 'src/app/modules/PIS/models/setup-data/marital_status.model';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { AgamaModel } from 'src/app/modules/PIS/models/setup-data/agama.model';
import { KebangsaanModel } from 'src/app/modules/PIS/models/setup-data/setup-kebangsaan.model';
import { EtnisModel } from 'src/app/modules/PIS/models/setup-data/setup-etnis.model';
import { BahasaModel } from 'src/app/modules/PIS/models/setup-data/setup-bahasa.model';
import { EducationModel } from 'src/app/modules/PIS/models/setup-data/setup-education.model';
import { JobTypeModel } from 'src/app/modules/PIS/models/setup-data/setup-job-type.model';
import { Observable } from 'rxjs';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { ProvinsiModel } from 'src/app/modules/PIS/models/setup-data/setup-provinsi.model';
import { KotaModel } from 'src/app/modules/PIS/models/setup-data/setup-kota.model';
import { KecamatanModel } from 'src/app/modules/PIS/models/setup-data/setup-kecamatan.model';
import { DebiturModel } from 'src/app/modules/PIS/models/setup-data/setup-debitur.model';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import Swal from 'sweetalert2';
import { UtilityHelperService } from 'src/app/helpers/utility/utility-helper.service';

@Component({
    selector: 'app-pendaftaran-pasien-baru',
    templateUrl: './pendaftaran-pasien-baru.component.html',
    styleUrls: ['./pendaftaran-pasien-baru.component.css'],
    providers: [UtilityHelperService]
})
export class PendaftaranPasienBaruComponent implements OnInit {

    FormState = "Insert";

    UserData: IAuthenticationResponseModel = JSON.parse(sessionStorage.getItem('UserData'));

    /** @ButtonNav Button Navigation Properties */
    ButtonNav: ButtonNavModel[] = [
        // { Id: "Reset", Captions: "Reset", Icons1: "fa-redo-alt" },
        // { Id: "Save", Captions: "Save", Icons1: "fa-save" },
    ];

    // ** Form Pendaftaran Pasien Baru Attribute
    FormPendaftaranPasienBaruIrja: FormGroup;

    // ** Variable untuk menampung Array of Alamat
    FormPerson: FormGroup;
    FormAlamats: FormArray;
    FormKontaks: FormArray;
    FormDebiturs: FormArray;

    url: any = '../../../../../../assets/image/pendaftaran-ulang-pasien/blank.png';

    PersonFound: boolean = false;

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

    /**
     * @JenisIdentitasDropdownDatasource 
     * @Keterangan Dropdown Jenis Identitas Datasource
    */
    JenisIdentitasDropdownWniDatasource: Observable<JenisIdentitasModel[]> = this.pendafatranPasienBaruService.JenisIdentitasWniSubject.asObservable();
    JenisIdentitasDropdownWnaDatasource: Observable<JenisIdentitasModel[]> = this.pendafatranPasienBaruService.JenisIdentitasWnaSubject.asObservable();

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
    MaritalStatusDropdownDatasource: Observable<MaritalStatusModel[]> = this.pendafatranPasienBaruService.MaritalStatusSubject.asObservable();

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
    AgamaDropdownDatasource: Observable<AgamaModel[]> = this.pendafatranPasienBaruService.AgamaSubject.asObservable();

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
    KebangsaanDropdownDatasource: Observable<KebangsaanModel[]> = this.pendafatranPasienBaruService.KebangsaanSubject.asObservable();

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
    EtnisDropdownDatasource: Observable<EtnisModel[]> = this.pendafatranPasienBaruService.EtnisSubject.asObservable();

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
    BahasaDropdownDatasource: Observable<BahasaModel[]> = this.pendafatranPasienBaruService.BahasaSubject.asObservable();

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
    EducationDropdownDatasource: Observable<EducationModel[]> = this.pendafatranPasienBaruService.EducationSubject.asObservable();

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
    JobTypeDropdownDatasource: Observable<JobTypeModel[]> = this.pendafatranPasienBaruService.JobTypeSubject.asObservable();

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
    ProvinsiDropdownDataSource: Observable<ProvinsiModel[]> = this.pendafatranPasienBaruService.ProvinsiSubject.asObservable();

    /**
     * @KotaDropdown
     * @Keterangan Kota Dropdown 
    */
    @ViewChild('KotaDropdown') KotaDropdown: DropDownListComponent;

    /**
     * @KotaDropdownDataSource 
     * @Keterangan Dropdown Kota Datasource
    */
    KotaDropdownDataSource: Observable<KotaModel[]> = this.pendafatranPasienBaruService.KotaSubject.asObservable();

    /**
     * @KecamatanDropdown
     * @Keterangan Kecamatan Dropdown 
    */
    @ViewChild('KecamatanDropdown') KecamatanDropdown: DropDownListComponent;

    /**
     * @KecamatanDropdownDataSource 
     * @Keterangan Dropdown Kecamatan Datasource
    */
    KecamatanDropdownDataSource: Observable<KecamatanModel[]> = this.pendafatranPasienBaruService.KecamatanSubject.asObservable();

    /**
     * @SetupWilayahDropdownField 
     * @Keterangan Dropdown Setup - Setup Wilayah Mapping Field
    */
    SetupWilayahDropdownField: object = { text: 'nama_wilayah', value: 'kode_wilayah' };

    /**
     * @DebiturDropdown
     * @Keterangan Debitur Dropdown 
    */
    @ViewChild('DebiturDropdown') DebiturDropdown: DropDownListComponent;

    /**
     * @KecamatanDropdownDataSource 
     * @Keterangan Dropdown Kecamatan Datasource
    */
    DebiturDropdownDataSource: Observable<DebiturModel[]> = this.pendafatranPasienBaruService.DebiturSubject.asObservable();

    /**
     * @SetupWilayahDropdownField 
     * @Keterangan Dropdown Setup - Setup Wilayah Mapping Field
    */
    DebiturDropdownField: object = { text: 'nama_debitur', value: 'id_debitur' };

    SubmittedForm = false;

    SelectedCheckboxAlamatsIndex: any[] = [];
    SelectedCheckboxKontaksIndex: any[] = [];
    SelectedCheckboxDebitursIndex: any[] = [];

    PersonIdResponseData: number;
    PathFotoUrl: any;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private ngWizardService: NgWizardService,
        private utilityHelperService: UtilityHelperService,
        private pendafatranPasienBaruService: PendaftaranPasienBaruService,
    ) { }

    ngOnInit(): void {
        this.onSetFormPendaftaranPasienBaruIrjaAttribute();

        this.pendafatranPasienBaruService.onGetDropdownOptions();
    }

    onSetFormPendaftaranPasienBaruIrjaAttribute(): void {
        this.FormPendaftaranPasienBaruIrja = this.formBuilder.group({
            "person": this.formBuilder.group({
                "id_person": [0, []],
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
                "tanggal_lahir": ["", [Validators.required]],
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
            "debitur_pasien": this.formBuilder.array([

            ]),
            "pasien": this.formBuilder.group({
                "keterangan": ["", []]
            })
        });

        this.FormPerson = this.FormPendaftaranPasienBaruIrja.get('person') as FormGroup

        this.FormAlamats = this.FormPendaftaranPasienBaruIrja.get('alamat_person') as FormArray;
        this.FormAlamats.push(this.NewAlamat());

        this.FormKontaks = this.FormPendaftaranPasienBaruIrja.get('kontak_person') as FormArray;
        this.FormKontaks.push(this.NewKontak());

        this.FormDebiturs = this.FormPendaftaranPasienBaruIrja.get('debitur_pasien') as FormArray;
        this.FormDebiturs.push(this.NewDebitur());
    }

    /** @stepChanged Function untuk melihat ketika Step di Wizard berganti */
    stepChanged(args: StepChangedArgs): void {
        if (args.step.index == 4) {
            this.FormState == "Insert" ?
                this.ButtonNav = [
                    { Id: 'Save', Captions: 'Simpan', 'Icons1': 'fa-save' }
                ] :
                this.ButtonNav = [
                    { Id: 'SavePersonSudahAda', Captions: 'Simpan', 'Icons1': 'fa-save' }
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

    onSelectFile(event: any, value: any) {
        this.PathFotoUrl = (event.target as HTMLInputElement).files[0];

        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.readAsDataURL(event.target.files[0]); // read file as data url

            reader.onload = (event) => { // called once readAsDataURL is completed
                this.url = event.target.result;
            }
        };
    }

    NewAlamat(): FormGroup {
        return this.formBuilder.group({
            "alamat_lengkap": ["", Validators.required],
            "kode_pos": ["", []],
            "rt": ["", []],
            "rw": ["", []],
            "kelurahan": ["", []],
            "kode_wilayah": ["", Validators.required],
            "kode_wilayah_kota": ["", []],
            "kode_wilayah_provinsi": ["", []],
            "user_created": [this.UserData.id_user, []],
            "is_default": [false, Validators.required]
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
            "is_default": [false, Validators.required]
        });
    }

    NewDebitur(): FormGroup {
        return this.formBuilder.group({
            "id_debitur": [0, []],
            "no_member": ["", Validators.required],
            "tgl_aktif_member": ["", Validators.required],
            "tgl_expired_member": ["", Validators.required],
            "keterangan": ["", Validators.required],
            "is_default": [false, Validators.required]
        });
    }

    handleChangeRadioButtonKewarganegaraan(JenisKewarganegaraan?: string): void {
        // console.log(JenisKewarganegaraan);
    }

    handleDropdownJenisIdentitasChange(args: any): void {
        this.id_jenis_identitas.setValue(args.itemData.id_jenis_identitas);
    }

    handleCheckPersonByNoIdentitas(NoIdentitas: string): void {
        this.pendafatranPasienBaruService.onCheckPersonByNoIdentitas(NoIdentitas)
            .subscribe((result) => {

                if (result) {
                    const NoRekamMedis = result.data.no_rekam_medis;

                    // ** Terdaftar sebagai Person / Dokter, tetapi belum terdaftar sebagai Pasien
                    if (NoRekamMedis === "") {

                        this.FormState = "Edit";

                        this.onHandlingPersonSudahAda(result.data.id_person);


                    }
                    // ** Terdaftar sebagai Pasien
                    else {
                        this.utilityService.onShowingCustomAlert('error', 'NIK Pasien Ditemukan', `Dengan Nomor RM ${NoRekamMedis}`)
                            .then(() => {
                                this.PersonFound = false;
                            });
                    }
                } else {

                    this.FormState = "Insert";

                    this.utilityService.onShowingCustomAlert('info', 'Person Tidak Ditemukan', 'Anda Dapat Melanjutkan Input Data Pasien')
                        .then(() => {
                            this.PersonFound = true;

                            setTimeout(() => {
                                this.ngWizardService.next();
                            }, 250);
                        });
                }
            })
    }

    onHandlingPersonSudahAda(PersonId: number): void {
        this.pendafatranPasienBaruService.onGetPersonPasienDetailByPersonId(PersonId)
            .subscribe((result) => {

                this.utilityService.onShowingCustomAlert('info', 'Person Ditemukan', 'Anda Dapat Melanjutkan Input Data Pasien')
                    .then(() => {
                        this.PersonFound = true;

                        const Person: any = this.utilityHelperService.onRemoveInfo(result.data.person, ['is_active', 'time_created', 'user_deactived', 'time_deactived']);
                        this.FormPerson.setValue(Person);

                        result.data.alamatPersons.forEach((e, index) => {
                            const wilayahs = this.utilityHelperService.onSplitKodeWilayahKecamatan(e.kode_wilayah, { 'kode_wilayah_provinsi': 0, 'kode_wilayah_kota': 0 });

                            e['kode_wilayah_provinsi'] = wilayahs['kode_wilayah_provinsi'];
                            e['kode_wilayah_kota'] = wilayahs['kode_wilayah_kota'];

                            this.utilityHelperService.onRemoveInfo(result.data.alamatPersons[index], ['id_alamat_person', 'id_person', 'is_active', 'time_created', 'time_deactived', 'user_deactived'])
                        });

                        const Alamats: any = result.data.alamatPersons;
                        this.FormAlamats.setValue(Alamats);

                        setTimeout(() => {
                            this.ngWizardService.next();
                        }, 250);
                    });
            });
    }

    handleDropdownProvinsiChange(args: any): void {
        this.pendafatranPasienBaruService.onGetDropdownKotaDatasourceByProvinsiId(args.itemData.kode_wilayah);
    }

    handleDropdownKotaChange(args: any): void {
        this.pendafatranPasienBaruService.onGetDropdownKecamatanDatasourceByKotaId(args.itemData.kode_wilayah);
    }

    handleChangeRadioButtonIsDefault(CheckboxId: number): void {
        this.SelectedCheckboxAlamatsIndex.sort();

        const El = (<HTMLInputElement>document.getElementById('CheckboxIsDefault' + CheckboxId));

        if (El.checked) {
            if (this.SelectedCheckboxAlamatsIndex.indexOf(CheckboxId) < 0) {
                this.SelectedCheckboxAlamatsIndex.push(CheckboxId);
            }
        } else {
            this.SelectedCheckboxAlamatsIndex.splice(this.SelectedCheckboxAlamatsIndex.indexOf(CheckboxId), 1);
        }

        for (let i = 0; i < this.SelectedCheckboxAlamatsIndex.length; i++) {
            (<HTMLInputElement>document.getElementById('CheckboxIsDefault' + this.SelectedCheckboxAlamatsIndex[i])).checked = this.SelectedCheckboxAlamatsIndex[i] === CheckboxId ? true : false;

            this.FormAlamats.value[i].is_default = (<HTMLInputElement>document.getElementById('CheckboxIsDefault' + this.SelectedCheckboxAlamatsIndex[i])).checked;
        }
    }

    handleChangeCheckboxKontakPersonIsDefault(CheckboxId: number): void {
        this.SelectedCheckboxKontaksIndex.sort();

        const El = (<HTMLInputElement>document.getElementById('CheckboxKontakPersonIsDefault' + CheckboxId));

        if (El.checked) {
            if (this.SelectedCheckboxKontaksIndex.indexOf(CheckboxId) < 0) {
                this.SelectedCheckboxKontaksIndex.push(CheckboxId);
            }
        } else {
            this.SelectedCheckboxKontaksIndex.splice(this.SelectedCheckboxKontaksIndex.indexOf(CheckboxId), 1);
        }

        for (let i = 0; i < this.SelectedCheckboxKontaksIndex.length; i++) {
            (<HTMLInputElement>document.getElementById('CheckboxKontakPersonIsDefault' + this.SelectedCheckboxKontaksIndex[i])).checked = this.SelectedCheckboxKontaksIndex[i] === CheckboxId ? true : false;

            this.FormKontaks.value[i].is_default = (<HTMLInputElement>document.getElementById('CheckboxKontakPersonIsDefault' + this.SelectedCheckboxKontaksIndex[i])).checked;
        }
    }

    handleChangeCheckboxDebiturIsDefault(CheckboxId: number): void {
        this.SelectedCheckboxDebitursIndex.sort();

        const El = (<HTMLInputElement>document.getElementById('CheckboxDebiturIsDefault' + CheckboxId));

        if (El.checked) {
            if (this.SelectedCheckboxDebitursIndex.indexOf(CheckboxId) < 0) {
                this.SelectedCheckboxDebitursIndex.push(CheckboxId);
            }
        } else {
            this.SelectedCheckboxDebitursIndex.splice(this.SelectedCheckboxDebitursIndex.indexOf(CheckboxId), 1);
        }

        for (let i = 0; i < this.SelectedCheckboxDebitursIndex.length; i++) {
            (<HTMLInputElement>document.getElementById('CheckboxDebiturIsDefault' + this.SelectedCheckboxDebitursIndex[i])).checked = this.SelectedCheckboxDebitursIndex[i] === CheckboxId ? true : false;

            this.FormDebiturs.value[i].is_default = (<HTMLInputElement>document.getElementById('CheckboxDebiturIsDefault' + this.SelectedCheckboxDebitursIndex[i])).checked;
        }
    }

    handleClickTambahFormArray(Kategori: string): void {
        switch (Kategori) {
            case "Alamat":
                this.FormAlamats = this.FormPendaftaranPasienBaruIrja.get('alamat_person') as FormArray;
                this.FormAlamats.push(this.NewAlamat());
                break;
            case "Kontak":
                this.FormKontaks = this.FormPendaftaranPasienBaruIrja.get('kontak_person') as FormArray;
                this.FormKontaks.push(this.NewKontak());
                break;
            case "Debitur":
                this.FormDebiturs = this.FormPendaftaranPasienBaruIrja.get('debitur_pasien') as FormArray;
                this.FormDebiturs.push(this.NewDebitur());
                break;
            default:
                break;
        }
    }

    handleClickHapusFormArray(Kategori: string): void {
        switch (Kategori) {
            case "Alamat":
                this.FormAlamats = this.FormPendaftaranPasienBaruIrja.get('alamat_person') as FormArray;

                if (this.FormAlamats.length > 1) {
                    this.FormAlamats.removeAt(this.FormAlamats.length - 1);
                    this.SelectedCheckboxAlamatsIndex.pop();
                }
                break;
            case "Kontak":
                this.FormKontaks = this.FormPendaftaranPasienBaruIrja.get('kontak_person') as FormArray;

                if (this.FormKontaks.length > 1) {
                    this.FormKontaks.removeAt(this.FormKontaks.length - 1);
                }
                break;
            case "Debitur":
                this.FormDebiturs = this.FormPendaftaranPasienBaruIrja.get('debitur_pasien') as FormArray;

                if (this.FormDebiturs.length > 1) {
                    this.FormDebiturs.removeAt(this.FormDebiturs.length - 1);
                }
                break;
            default:
                break;
        }
    }

    onClickButtonNav(ButtonId: any): void {
        switch (ButtonId) {
            case "Cancel":
                this.PersonFound = false;
                this.SubmittedForm = false;
                this.onResetForm();
                this.resetWizard();
                break;
            case "Save":
                this.onSubmitForm();
                break;
            case 'Upload':
                if (this.PathFotoUrl != undefined) {
                    this.onUploadPhotoPasien(this.PersonIdResponseData, this.PathFotoUrl);
                } else {
                    this.utilityService.onShowingCustomAlert('error', 'Oops', 'Foto Tidak Boleh Kosong');
                }
                break;
            case "SavePersonSudahAda":
                console.log(this.FormPendaftaranPasienBaruIrja.value);
                break;
            default:
                break;
        }
    }

    onSubmitForm(): void {
        this.pendafatranPasienBaruService.onSavePendaftaranPasienBaruIrja(this.FormPendaftaranPasienBaruIrja.value)
            .subscribe((result) => {
                if (result) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Pendaftaran Pasien Berhasil',
                        text: 'Apakah Anda Ingin Mengupload Foto Pasien?',
                        showDenyButton: true,
                        showCancelButton: false,
                        confirmButtonText: `Yes`,
                        denyButtonText: `Tidak, Lakukan Lain Kali`,
                    }).then((res) => {
                        if (res.isConfirmed) {
                            this.onResetForm();

                            this.SubmittedForm = true;

                            setTimeout(() => {
                                this.PersonIdResponseData = result.data;

                                this.ngWizardService.next();
                            }, 250);
                        } else if (res.isDenied) {
                            this.SubmittedForm = false;

                            this.onResetForm();

                            this.resetWizard();
                        }
                    });
                }
            });
    }

    onResetForm(): void {
        this.FormPendaftaranPasienBaruIrja.reset();

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

        this.DebiturDropdown.value = null;

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

        if (this.FormDebiturs.length > 1) {
            for (let i = 0; i < this.FormDebiturs.length; i++) {
                this.FormDebiturs.removeAt(i);
            }
        }
    }

    onUploadPhotoPasien(PersonId: number, Path: string): void {
        const formData: any = new FormData();

        formData.append('id_person', PersonId.toString());
        formData.append('form_file', Path);

        this.pendafatranPasienBaruService.onUploadFotoPasienIRJA(formData)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Foto Pasien Berhasil Diupload')
                        .then(() => {
                            this.onResetForm();

                            this.resetWizard();

                            this.PersonFound = false;
                        })
                }
            })
    }

    get id_jenis_identitas() { return this.FormPendaftaranPasienBaruIrja.get("person.id_jenis_identitas") }
    get no_identitas() { return this.FormPendaftaranPasienBaruIrja.get("person.no_identitas") }
    get no_kartu_keluarga() { return this.FormPendaftaranPasienBaruIrja.get("person.no_kartu_keluarga") }
    get nama_depan() { return this.FormPendaftaranPasienBaruIrja.get("person.nama_depan") }
    get nama_belakang() { return this.FormPendaftaranPasienBaruIrja.get("person.nama_belakang") }
    get nama_panggilan() { return this.FormPendaftaranPasienBaruIrja.get("person.nama_panggilan") }
    get gelar_depan() { return this.FormPendaftaranPasienBaruIrja.get("person.gelar_depan") }
    get gelar_belakang() { return this.FormPendaftaranPasienBaruIrja.get("person.gelar_belakang") }
    get gender() { return this.FormPendaftaranPasienBaruIrja.get("person.gender") }
    get gol_darah() { return this.FormPendaftaranPasienBaruIrja.get("person.gol_darah") }
    get tempat_lahir() { return this.FormPendaftaranPasienBaruIrja.get("person.tempat_lahir") }
    get tanggal_lahir() { return this.FormPendaftaranPasienBaruIrja.get("person.tanggal_lahir") }
    get tinggi_badan_cm() { return this.FormPendaftaranPasienBaruIrja.get("person.tinggi_badan_cm") }
    get berat_badan_kg() { return this.FormPendaftaranPasienBaruIrja.get("person.berat_badan_kg") }
    get id_marital_status() { return this.FormPendaftaranPasienBaruIrja.get("person.id_marital_status") }
    get id_agama() { return this.FormPendaftaranPasienBaruIrja.get("person.id_agama") }
    get id_kebangsaan() { return this.FormPendaftaranPasienBaruIrja.get("person.id_kebangsaan") }
    get id_etnis() { return this.FormPendaftaranPasienBaruIrja.get("person.id_etnis") }
    get id_bahasa() { return this.FormPendaftaranPasienBaruIrja.get("person.id_bahasa") }
    get id_last_education() { return this.FormPendaftaranPasienBaruIrja.get("person.id_last_education") }
    get id_job_type() { return this.FormPendaftaranPasienBaruIrja.get("person.id_job_type") }
    get user_created() { return this.FormPendaftaranPasienBaruIrja.get("person.user_created") }

    get alamat_person(): FormArray {
        return this.FormPendaftaranPasienBaruIrja.get("alamat_person") as FormArray
    }

    get kontak_person(): FormArray {
        return this.FormPendaftaranPasienBaruIrja.get("kontak_person") as FormArray
    }

    get debitur_pasien(): FormArray {
        return this.FormPendaftaranPasienBaruIrja.get("debitur_pasien") as FormArray
    }
}
