import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { Observable } from 'rxjs';
import { UtilityHelperService } from 'src/app/helpers/utility/utility-helper.service';
import { AgamaModel } from 'src/app/modules/PIS/models/setup-data/agama.model';
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
import { PendaftaranPasienBaruService } from 'src/app/modules/PIS/services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import { SetupDokterService } from 'src/app/modules/PIS/services/setup-data/setup-dokter/setup-dokter.service';
import { SetupSpesialisasiDokterService } from 'src/app/modules/PIS/services/setup-data/setup-spesialisasi-dokter/setup-spesialisasi-dokter.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';

@Component({
    selector: 'app-edit-dokter',
    templateUrl: './edit-dokter.component.html',
    styleUrls: ['./edit-dokter.component.css']
})
export class EditDokterComponent implements OnInit, AfterViewInit {

    ButtonNav: ButtonNavModel[] = [
        { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-chevron-left' }
    ];

    FormState = "Insert";

    /**
    * @FormEditPasien FormGroup  
   */
    FormPerson: FormGroup;
    FormAlamats: FormGroup;
    FormKontaks: FormGroup;
    FormDokter: FormGroup;

    FormAlamatState = "Edit";
    FormAlamatDatasource: any[] = [];

    FormKontakState = "Edit";
    FormKontakDatasource: any[] = [];

    FormDebiturState = "Edit";
    FormDebiturDatasource: any[] = [];

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

    url: any = '../../../../../../assets/image/pendaftaran-ulang-pasien/blank.png';

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private encryptionService: EncryptionService,
        private setupDokterService: SetupDokterService,
        private utilityHelperService: UtilityHelperService,
        private setupSpesialisasiDokter: SetupSpesialisasiDokterService,
        private pendafatranPasienBaruService: PendaftaranPasienBaruService
    ) { }

    ngOnInit(): void {
        this.onSetFormEditDokterAttributes();

        this.setupDokterService.onGetDropdownOptions();
    }

    ngAfterViewInit(): void {
        this.onGetDetailDokterByPersonId();
    }

    onClickButtonNav(args: any): void {
        switch (args) {
            case 'Cancel':
                this.router.navigateByUrl('dashboard/PIS/IRJA/daftar-pasien')
        }
    }

    onSetFormEditDokterAttributes(): void {
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
            "is_active": [false, []],
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
            "is_active": [false, []],
            "is_default": [false, Validators.required]
        });

        this.FormDokter = this.formBuilder.group({
            "id_spesialisasi_dokter": [0, Validators.required],
            "no_surat_ijin_praktek": ["", []],
            "tgl_exp_surat_ijin_praktek": [Date, Validators.required],
            "no_str": ["", []],
            "tgl_exp_str": [Date, Validators.required],
            "id_smf": [0, []],
            "id_status_dokter": [0, []],
            "user_created": [0, []],
        });
    }

    onGetDetailDokterByPersonId(): void {
        let PersonId: any = JSON.parse(this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]));

        this.setupDokterService.onGetPersonDokterDetailByPersonId(PersonId)
            .subscribe((result) => {
                const Person: any = this.utilityHelperService.onRemoveInfo(result.data.person, ['is_active', 'user_created', 'time_created', 'user_deactived', 'time_deactived']);
                this.FormPerson.setValue(Person);

                this.FormAlamatDatasource = result.data.alamat_person;

                this.FormKontakDatasource = result.data.kontak_person;

                this.setupSpesialisasiDokter.onGetById(result.data.dokter.id_spesialisasi_dokter)
                    .subscribe((spesialisasi_dokter) => {
                        if (spesialisasi_dokter) {
                            result.data.dokter['spesialisasi_dokter'] = spesialisasi_dokter.data.spesialisasi_dokter;

                            this.FormDokter.setValue(result.data.dokter);
                        }
                    });


                this.pendafatranPasienBaruService.onGetLinkFotoPerson(result.data.person['id_person'], false)
                    .subscribe((result) => {
                        if (result) {
                            result.data != '' ? this.url = result.data : this.url = '../../../../../../assets/image/pendaftaran-ulang-pasien/blank.png';
                        }
                    });
            });
    }
}
