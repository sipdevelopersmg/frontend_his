import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-inputs';
import { BehaviorSubject, Observable } from 'rxjs';
import { UtilityHelperService } from 'src/app/helpers/utility/utility-helper.service';
import { AgamaModel } from 'src/app/modules/PIS/models/setup-data/agama.model';
import { MaritalStatusModel } from 'src/app/modules/PIS/models/setup-data/marital_status.model';
import { BahasaModel } from 'src/app/modules/PIS/models/setup-data/setup-bahasa.model';
import { DebiturModel } from 'src/app/modules/PIS/models/setup-data/setup-debitur.model';
import { EducationModel } from 'src/app/modules/PIS/models/setup-data/setup-education.model';
import { EtnisModel } from 'src/app/modules/PIS/models/setup-data/setup-etnis.model';
import { JobTypeModel } from 'src/app/modules/PIS/models/setup-data/setup-job-type.model';
import { KebangsaanModel } from 'src/app/modules/PIS/models/setup-data/setup-kebangsaan.model';
import { KecamatanModel } from 'src/app/modules/PIS/models/setup-data/setup-kecamatan.model';
import { KotaModel } from 'src/app/modules/PIS/models/setup-data/setup-kota.model';
import { ProvinsiModel } from 'src/app/modules/PIS/models/setup-data/setup-provinsi.model';
import { PendaftaranPasienBaruService } from 'src/app/modules/PIS/services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';

@Component({
    selector: 'app-edit-pasien-irja',
    templateUrl: './edit-pasien.component.html',
    styleUrls: ['./edit-pasien.component.css']
})
export class EditPasienIRJAComponent implements OnInit, AfterViewInit {

    ButtonNav: ButtonNavModel[] = [
        { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-chevron-left' }
    ];

    /**
     * @FormState State Form Edit Pasien IRJA
     * @Value Edit / Detail 
    */
    FormState = "Insert";
    FormAlamatDatasource: any[] = [];
    FormKontakDatasource: any[] = [];

    /**
     * @FormEditPasien FormGroup  
    */
    FormPerson: FormGroup;
    FormAlamats: FormGroup;
    FormKontaks: FormGroup;
    FormDebiturs: FormGroup;

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

    url: any = '../../../../../../assets/image/pendaftaran-ulang-pasien/blank.png';
    PathFotoUrl: any;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private encryptionService: EncryptionService,
        private utilityHelperService: UtilityHelperService,
        private pendafatranPasienBaruService: PendaftaranPasienBaruService
    ) { }

    ngOnInit(): void {
        this.onSetFormEditPasienAttributes();

        this.pendafatranPasienBaruService.onGetDropdownOptions();
    }

    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        let PersonId: any = JSON.parse(this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]));
        this.onGetDetailPasienByPersonId(PersonId);
    }

    onClickButtonNav(args: any): void {
        switch (args) {
            case 'Cancel':
                this.router.navigateByUrl('dashboard/PIS/IRJA/daftar-pasien')
        }
    }

    onGetDetailPasienByPersonId(PersonId: number): void {
        this.pendafatranPasienBaruService.onGetPersonPasienDetailByPersonId(PersonId)
            .subscribe((result) => {

                const Person: any = this.utilityHelperService.onRemoveInfo(result.data.person, ['is_active', 'user_created', 'time_created', 'user_deactived', 'time_deactived']);
                this.FormPerson.setValue(Person);

                this.FormAlamatDatasource = result.data.alamat_person;

                // ** forEach result.data.kontak_person untuk mendapatkan value per index
                // result.data.kontak_forEach((e, index) => {
                //     if (index < result.data.kontak_length - 1) {
                //         this.FormKontaks.push(this.onCreateNewFormArrayKontak());
                //     }

                //     this.utilityHelperService.onRemoveInfo(result.data.kontak_person[index], ['is_active', 'time_created', 'time_deactived', 'user_deactived']);

                //     setTimeout(() => {
                //         this.FormKontaks.controls[index].setValue(e);
                //     }, 1000);
                // });

                // ** forEach result.data.debitur_pasien untuk mendapatkan value per index
                // result.data.debitur_pasien.forEach((e, index) => {
                //     if (index < result.data.debitur_pasien.length - 1) {
                //         this.FormDebiturs.push(this.onCreateNewFormArrayDebitur());
                //     }

                //     this.utilityHelperService.onRemoveInfo(result.data.debitur_pasien[index], ['is_active']);

                //     setTimeout(() => {
                //         this.FormDebiturs.controls[index].setValue(e);
                //     }, 1000);
                // });
            })
    }

    onSetFormEditPasienAttributes(): void {
        this.FormPerson = this.formBuilder.group({
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
        });

        this.FormAlamats = this.formBuilder.group({
            "id_person": [0, []],
            "id_alamat_person": [0, []],
            "alamat_lengkap": ["", Validators.required],
            "kode_pos": ["", []],
            "rt": ["", []],
            "rw": ["", []],
            "kelurahan": ["", []],
            "kode_wilayah": ["", Validators.required],
            "kode_wilayah_kota": ["", []],
            "kode_wilayah_provinsi": ["", []],
            "user_created": [0, []],
            "is_default": [false, Validators.required]
        });

        this.FormKontaks = this.formBuilder.group({
            "id_person": [0, []],
            "id_kontak_person": [0, []],
            "hand_phone": ["", Validators.required],
            "home_phone": ["", Validators.required],
            "office_phone": ["", Validators.required],
            "email": ["", []],
            "keterangan": ["", []],
            "user_created": [0, []],
            "is_default": [false, Validators.required]
        });

        this.FormDebiturs = this.formBuilder.group({
            "id_person": [0, []],
            "id_debitur": [0, []],
            "no_member": ["", Validators.required],
            "tgl_aktif_member": ["", Validators.required],
            "tgl_expired_member": ["", Validators.required],
            "keterangan": ["", Validators.required],
            "is_default": [false, Validators.required]
        });
    }

    handleSelectedTabId(args: any): void {
    }

    handleSelectedFormAlamat(item: any): void {
        this.utilityHelperService.onRemoveInfo(item, ['is_active', 'time_created', 'time_deactived', 'user_deactived']);

        const wilayah = this.utilityHelperService.onSplitKodeWilayahKecamatan(item.kode_wilayah);

        item['kode_wilayah_provinsi'] = wilayah['kode_wilayah_provinsi'];
        this.handleDropdownProvinsiChange(item['kode_wilayah_provinsi']);

        item['kode_wilayah_kota'] = wilayah['kode_wilayah_kota'];
        this.handleDropdownKotaChange(item['kode_wilayah_kota']);

        setTimeout(() => {
            this.FormAlamats.setValue(item);
        }, 500);
    }

    handleDropdownProvinsiChange(KodeProvinsi: string): void {
        this.pendafatranPasienBaruService.onGetDropdownKotaDatasourceByProvinsiId(KodeProvinsi);
    }

    handleDropdownKotaChange(KodeKota: string): void {
        this.pendafatranPasienBaruService.onGetDropdownKecamatanDatasourceByKotaId(KodeKota);
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

    get id_jenis_identitas() { return this.FormPerson.get("id_jenis_identitas") }
    get no_identitas() { return this.FormPerson.get("no_identitas") }
    get no_kartu_keluarga() { return this.FormPerson.get("no_kartu_keluarga") }
    get nama_depan() { return this.FormPerson.get("nama_depan") }
    get nama_belakang() { return this.FormPerson.get("nama_belakang") }
    get nama_panggilan() { return this.FormPerson.get("nama_panggilan") }
    get gelar_depan() { return this.FormPerson.get("gelar_depan") }
    get gelar_belakang() { return this.FormPerson.get("gelar_belakang") }
    get gender() { return this.FormPerson.get("gender") }
    get gol_darah() { return this.FormPerson.get("gol_darah") }
    get tempat_lahir() { return this.FormPerson.get("tempat_lahir") }
    get tanggal_lahir() { return this.FormPerson.get("tanggal_lahir") }
    get tinggi_badan_cm() { return this.FormPerson.get("tinggi_badan_cm") }
    get berat_badan_kg() { return this.FormPerson.get("berat_badan_kg") }
    get id_marital_status() { return this.FormPerson.get("id_marital_status") }
    get id_agama() { return this.FormPerson.get("id_agama") }
    get id_kebangsaan() { return this.FormPerson.get("id_kebangsaan") }
    get id_etnis() { return this.FormPerson.get("id_etnis") }
    get id_bahasa() { return this.FormPerson.get("id_bahasa") }
    get id_last_education() { return this.FormPerson.get("id_last_education") }
    get id_job_type() { return this.FormPerson.get("id_job_type") }
    get user_created() { return this.FormPerson.get("user_created") }

    get id_alamat_person() { return this.FormAlamats.get("id_alamat_person") }
    get alamat_lengkap() { return this.FormAlamats.get("alamat_lengkap") }
    get kode_pos() { return this.FormAlamats.get("kode_pos") }
    get rt() { return this.FormAlamats.get("rt") }
    get kelurahan() { return this.FormAlamats.get("kelurahan") }
    get kode_wilayah() { return this.FormAlamats.get("kode_wilayah") }
    get kode_wilayah_kota() { return this.FormAlamats.get("kode_wilayah_kota") }
    get kode_wilayah_provinsi() { return this.FormAlamats.get("kode_wilayah_provinsi") }
    get is_default_alamat() { return this.FormAlamats.get("is_default") }

    get id_kontak_person() { return this.FormKontaks.get("id_kontak_person") }
    get hand_phone() { return this.FormKontaks.get("hand_phone") }
    get home_phone() { return this.FormKontaks.get("home_phone") }
    get office_phone() { return this.FormKontaks.get("office_phone") }
    get email() { return this.FormKontaks.get("email") }
    get keterangan_alamat() { return this.FormKontaks.get("keterangan") }
    get is_default_kontak() { return this.FormKontaks.get("is_default") }

    get id_debitur() { return this.FormKontaks.get("id_debitur") }
    get no_member() { return this.FormKontaks.get("no_member") }
    get tgl_aktif_member() { return this.FormKontaks.get("tgl_aktif_member") }
    get tgl_expired_member() { return this.FormKontaks.get("tgl_expired_member") }
    get keterangan_debitur() { return this.FormKontaks.get("keterangan") }
    get is_default_debitur() { return this.FormKontaks.get("is_default") }
}
