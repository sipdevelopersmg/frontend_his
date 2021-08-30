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
import { EditPasienService } from 'src/app/modules/PIS/services/IRJA/edit-pasien/edit-pasien.service';
import { PendaftaranPasienBaruService } from 'src/app/modules/PIS/services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import { SetupDokterService } from 'src/app/modules/PIS/services/setup-data/setup-dokter/setup-dokter.service';
import { SetupSpesialisasiDokterService } from 'src/app/modules/PIS/services/setup-data/setup-spesialisasi-dokter/setup-spesialisasi-dokter.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

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

    PathFotoUrl: any;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private encryptionService: EncryptionService,
        private editPasienService: EditPasienService,
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
                this.router.navigateByUrl('dashboard/PIS/setup-data/setup-dokter/daftar-dokter')
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
            "id_dokter": [0, []],
            "id_person": [0, []],
            "id_spesialisasi_dokter": [0, Validators.required],
            "no_surat_ijin_praktek": ["", []],
            "tgl_exp_surat_ijin_praktek": [Date, Validators.required],
            "no_str": ["", []],
            "tgl_exp_str": [Date, Validators.required],
            "id_smf": [0, []],
            "id_status_dokter": [0, []],
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

                const Dokter: any = this.utilityHelperService.onRemoveInfo(result.data.dokter, ['kode_dokter', 'is_active', 'user_created', 'time_created', 'user_deactived', 'time_deactived'])
                this.FormDokter.setValue(Dokter);

                this.pendafatranPasienBaruService.onGetLinkFotoPerson(result.data.person['id_person'], false)
                    .subscribe((result) => {
                        if (result) {
                            result.data != '' ? this.url = result.data : this.url = '../../../../../../assets/image/pendaftaran-ulang-pasien/blank.png';
                        }
                    });
            });
    }

    handleSelectedTabId(args: any): void {
    }

    handleSelectedFormAlamat(item: any): void {
        this.utilityHelperService.onRemoveInfo(item, ['time_created', 'time_deactived', 'user_deactived']);

        const wilayah = this.utilityHelperService.onSplitKodeWilayahKecamatan(item.kode_wilayah);

        item['kode_wilayah_provinsi'] = wilayah['kode_wilayah_provinsi'];
        this.handleDropdownProvinsiChange(item['kode_wilayah_provinsi']);

        item['kode_wilayah_kota'] = wilayah['kode_wilayah_kota'];
        this.handleDropdownKotaChange(item['kode_wilayah_kota']);

        setTimeout(() => {
            this.handleCheckDefaultAlamatDokter(item['is_default']);

            this.FormAlamats.setValue(item);
        }, 500);
    }

    handleSelectedFormKontak(item: any): void {
        this.utilityHelperService.onRemoveInfo(item, ['time_created', 'time_deactived', 'user_deactived']);

        this.handleCheckDefaultKontakDokter(item['is_default']);

        this.FormKontaks.setValue(item);
    }

    handleDropdownProvinsiChange(KodeProvinsi: string): void {
        this.setupDokterService.onGetDropdownKotaDatasourceByProvinsiId(KodeProvinsi);
    }

    handleDropdownKotaChange(KodeKota: string): void {
        this.setupDokterService.onGetDropdownKecamatanDatasourceByKotaId(KodeKota);
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

    onUpdateFormPerson(FormPerson: any): void {
        this.editPasienService.onUpdateDetailPerson(FormPerson)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Update Detail Person Berhasil')
                        .then(() => {
                            this.onGetDetailDokterByPersonId();
                        });
                }
            })
    }

    handleClickTambahAlamatDokter(): void {
        this.FormAlamatState = 'Insert';
        this.onResetFormAlamat();

        this.handleCheckDefaultAlamatDokter();
    }

    handleCheckDefaultAlamatDokter(is_default?: boolean): void {
        const is_default_alamat = document.getElementById('is_default_alamat') as HTMLInputElement;

        let check_is_default = this.FormAlamatDatasource.findIndex(item => item.is_default === true) > -1 ? true : false;

        is_default = is_default ? is_default : false;

        if (check_is_default && !is_default) {
            is_default_alamat.disabled = true;
        } else {
            is_default_alamat.disabled = false;
        }
    }

    handleUpdateFormAlamat(FormAlamat: any): void {
        this.editPasienService.onUpdateAlamatPerson(FormAlamat)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Update Alamat Dokter Berhasil')
                        .then(() => {
                            this.onGetDetailDokterByPersonId();
                        });
                }
            });
    }

    handleDeleteFormAlamat(FormAlamat: any): void {
        this.editPasienService.onUpdateStatusActiveAlamatPerson(FormAlamat.id_person, FormAlamat.id_alamat_person, !FormAlamat.is_active)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Status Alamat Berhasil Diubah')
                        .then(() => {
                            this.onGetDetailDokterByPersonId();
                        });
                }
            })
    }

    handleInsertFormAlamat(FormAlamat: any): void {
        let PersonId: any = JSON.parse(this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]));

        if (PersonId) {
            FormAlamat.id_person = PersonId;

            this.utilityHelperService.onRemoveInfo(FormAlamat, ['id_alamat_person', 'kode_wilayah_kota', 'kode_wilayah_provinsi', 'user_created'])

            this.editPasienService.onInsertAlamatPerson(FormAlamat)
                .subscribe((result) => {
                    if (result) {
                        this.utilityService.onShowingCustomAlert('success', 'Success', 'Alamat Dokter Berhasil Disimpan')
                            .then(() => {
                                this.onResetFormAlamat();

                                this.onGetDetailDokterByPersonId();

                                this.FormAlamatState = 'Edit';
                            });
                    }
                })
        }
    }

    onResetFormAlamat(): void {
        this.FormAlamats.reset();

        this.alamat_lengkap.setValue('');
        this.kode_pos.setValue('');
        this.rt.setValue('');
        this.rw.setValue('');
        this.kelurahan.setValue('');
        this.kode_wilayah.setValue('');
        this.KecamatanDropdown.value = null;
        this.kode_wilayah_kota.setValue('');
        this.KotaDropdown.value = null;
        this.kode_wilayah_provinsi.setValue('');
        this.ProvinsiDropdown.value = null;
        this.is_default_alamat.setValue(false);
    }

    handleClickTambahKontakDokter(): void {
        this.FormKontakState = 'Insert';
        this.onResetFormKontak();

        this.handleCheckDefaultKontakDokter();
    }

    handleCheckDefaultKontakDokter(is_default?: boolean): void {
        let check_is_default = this.FormKontakDatasource.findIndex(item => item.is_default === true) > -1 ? true : false;

        const is_default_kontak = document.getElementById('is_default_kontak') as HTMLInputElement;

        is_default = is_default ? is_default : false;

        if (check_is_default && !is_default) {
            is_default_kontak.disabled = true;
        } else {
            is_default_kontak.disabled = false;
        }
    }

    handleUpdateFormKontak(FormKontak: any): void {
        this.editPasienService.onUpdateKontakPerson(FormKontak)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Update Kontak Person Berhasil')
                        .then(() => {
                            this.onGetDetailDokterByPersonId();
                        });
                }
            })
    }

    handleDeleteFormKontak(FormKontak: any): void {
        this.editPasienService.onUpdateStatusActiveKontakPerson(FormKontak.id_person, FormKontak.id_kontak_person, !FormKontak.is_active)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Status Kontak Person Berhasil Diubah')
                        .then(() => {
                            this.onGetDetailDokterByPersonId();
                        });
                }
            })
    }

    handleInsertFormKontak(FormKontak: any): void {
        let PersonId: any = JSON.parse(this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]));

        if (PersonId) {
            FormKontak.id_person = PersonId;

            this.utilityHelperService.onRemoveInfo(FormKontak, ['id_kontak_person', 'user_created', 'is_active', 'user_created'])

            this.editPasienService.onInsertKontakPerson(FormKontak)
                .subscribe((result) => {
                    if (result) {
                        this.utilityService.onShowingCustomAlert('success', 'Success', 'Kontak Person Berhasil Disimpan')
                            .then(() => {
                                this.onResetFormKontak();

                                this.onGetDetailDokterByPersonId();

                                this.FormKontakState = "Edit";
                            });
                    }
                })
        }
    }

    onResetFormKontak(): void {
        this.FormKontaks.reset();

        this.id_kontak_person.setValue('');
        this.hand_phone.setValue('');
        this.home_phone.setValue('');
        this.office_phone.setValue('');
        this.email.setValue('');
        this.keterangan_alamat.setValue('');
        this.is_default_kontak.setValue(false);
    }

    onUploadPhotoDokter(): void {
        const formData: any = new FormData();

        let PersonId: any = JSON.parse(this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]));

        formData.append('id_person', PersonId.toString());
        formData.append('form_file', this.PathFotoUrl);

        this.setupDokterService.onUploadFotoDokter(formData)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Foto Dokter Berhasil Diupdate')
                        .then(() => {
                            const path = document.getElementById('path_foto_dokter') as HTMLInputElement;

                            path.value = "";
                        });
                }
            })
    }

    handleUpdateFormDokter(FormDokter: any): void {
        this.setupDokterService.onUpdateDokter(FormDokter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Update Dokter Berhasil')
                        .then(() => {
                            this.onGetDetailDokterByPersonId();
                        });
                }
            })
    }

    onResetFormDebitur(): void {
        this.FormDokter.reset();

        this.id_dokter.setValue('');
        // this.DebiturDropdown.value = null;
        this.id_spesialisasi_dokter.setValue('');
        this.no_surat_ijin_praktek.setValue('');
        this.tgl_exp_surat_ijin_praktek.setValue('');
        this.no_str.setValue('');
        this.tgl_exp_str.setValue('');
        this.id_smf.setValue('');
        this.id_status_dokter.setValue('');
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
    get rw() { return this.FormAlamats.get("rw") }
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

    get id_dokter() { return this.FormDokter.get("id_dokter") }
    get id_spesialisasi_dokter() { return this.FormDokter.get("id_spesialisasi_dokter") }
    get no_surat_ijin_praktek() { return this.FormDokter.get("no_surat_ijin_praktek") }
    get tgl_exp_surat_ijin_praktek() { return this.FormDokter.get("tgl_exp_surat_ijin_praktek") }
    get no_str() { return this.FormDokter.get("no_str") }
    get tgl_exp_str() { return this.FormDokter.get("tgl_exp_str") }
    get id_smf() { return this.FormDokter.get("id_smf") }
    get id_status_dokter() { return this.FormDokter.get("id_status_dokter") }
}
