import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import LookUpPendaftaranPasienBaru from './json/LookupPendaftaranPasienBaru.json';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import * as CONFIG from 'src/app/api/index';
@Component({
    selector: 'app-data-dokter',
    templateUrl: './data-dokter.component.html',
    styleUrls: ['./data-dokter.component.css']
})
export class DataDokterComponent implements OnInit {

    // ** Button Navigation Properties
    ButtonNav: ButtonNavModel[] = [
        // { Id: "save_end_new", Captions: "Save And New", Icons1: "fa-redo-alt" },
        // { Id: "Save", Captions: "Save", Icons1: "fa-save" },
    ];

    // ** Form Pendaftaran Pasien Baru Attribute
    FormPendaftaranPasienBaruIrja: FormGroup;

    @ViewChild("LookupAgama") LookupAgama: OrgInputLookUpComponent;

    // ** Lookup Pendaftaran Pasien Baru
    public LookupPendaftaranPasienBaru = LookUpPendaftaranPasienBaru;
    public LookupPendaftaranPasienBaruUrl = CONFIG.API;

     // ** Variable untuk menampung Array of Alamat
    FormAlamats: FormArray;
    FormIdentitas: FormGroup;
    FormDetail: FormGroup;

    url : any = '../../../../../../assets/image/pendaftaran-ulang-pasien/blank.png';

    // ** Select Options Jenis Kelamin
    SelectOptionsJenisKelamin: any[];

    // ** Select Options Golongan Darah
    SelectOptionsGolonganDarah: any[];

    // ** Select Options Keterbatasan Fisik
    SelectOptionsKeterbatasanFisik: any[];

    // ** Static Filter Lookup Kota
    StaticFilterLookupKota: any[] = [];

    // ** Static Filter Lookup Kecamatan
    StaticFilterLookupKecamatan: any[] = [];

    // ** Static Filter Lookup Kelurahan
    StaticFilterLookupKelurahan: any[] = [];

    // ** Select Options Bahasa Sehari Hari
    SelectOptionsBahasa: any[] = [];

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


    constructor(private formBuilder: FormBuilder,
        private ngWizardService: NgWizardService,) { }

    ngOnInit(): void {
        this.onSetFormPendaftaranPasienBaruIrjaAttribute();
        // this.onGetDropdownOptions();
    }

    // ** Function untuk melihat ketika Step di Wizard berganti
    stepChanged(args: StepChangedArgs): void {
        // console.log(args);
    }

    // !! Function untuk Menampilkan Tombol Previous Wizard (Wajib di deklrasikan)
    showPreviousStep(event?: Event) {
        this.ngWizardService.previous();
    }

    // !! Function untuk Menampilkan Tombol Next Wizard (Wajib di deklrasikan)
    showNextStep(event?: Event) {
        this.ngWizardService.next();
    }

    // !! Function untuk Mereset Wizard (Wajib di deklrasikan)
    resetWizard(event?: Event) {
        this.ngWizardService.reset();
    }

    // !! Function untuk Mengatur Tema Wizard (Wajib di deklrasikan)
    setTheme(theme: THEME) {
        this.ngWizardService.theme(theme);
    }

    onGetDropdownOptions() {
        // this.pendafatranPasienBaruService.onGetAllJenisKelamin()
        //     .subscribe((_result) => {
                // this.SelectOptionsJenisKelamin = _result;
                this.SelectOptionsJenisKelamin = [];
            // });

        // this.pendafatranPasienBaruService.onGetGolonganDarah()
        //     .subscribe((_result) => {
                this.SelectOptionsGolonganDarah = [];
            // });

        // this.pendafatranPasienBaruService.onGetKeterbatasan()
        //     .subscribe((_result) => {
                this.SelectOptionsKeterbatasanFisik = [];
            // });

        // this.pendafatranPasienBaruService.onGetBahasa()
        //     .subscribe((_result) => {
                this.SelectOptionsBahasa = [];
            // })
    }

    onSetFormPendaftaranPasienBaruIrjaAttribute() {
        this.FormPendaftaranPasienBaruIrja = this.formBuilder.group({
            "identitas":this.formBuilder.group({
                "id_jenis_identitas": [0, []],
                "no_identitas": ["aSADSDA", Validators.required],
                "path_foto": ['', []],
            }),
            "detail":this.formBuilder.group({
                "no_kartu_keluarga": ["", []],
                "nama_depan": ["", []],
                "nama_belakang": ["", []],
                "nama_panggilan": ["", []],
                "gelar_depan": [0, Validators.required],
                "gelar_belakang": [0, Validators.required],
                "gender": ["", Validators.required],
                "gol_darah": ["", Validators.required],
                "tempat_lahir": [0, []],
                "tanggal_lahir": [0, []],
                "tinggi_badan_cm": [0, Validators.required],
                "berat_badan_kg": [0, Validators.required],
                "id_marital_status": ["", Validators.required],
                "id_agama": ["", Validators.required],
                "id_kebangsaan": ["", Validators.required],
                "id_etnis": ["", Validators.required],
                "id_bahasa": [0, Validators.required],
                "id_last_education": ["", Validators.required],
                "id_job_type": ["", Validators.required],
            }),
            "alamat":this.formBuilder.array([
                
            ]),
            "kontak":this.formBuilder.array([
                
            ]),
            "dokter":this.formBuilder.group({
                "id_spesialisasi_dokter": ["", []],
                "no_surat_ijin_praktek": ["", []],
                "tgl_exp_surat_ijin_praktek": ["", []],
                "no_str": ["", []],
                "id_smf": ["", []],
                "id_status_dokter": ["", []],
            }),
        });

        this.FormIdentitas = this.FormPendaftaranPasienBaruIrja.get('identitas') as FormGroup

        this.FormDetail = this.FormPendaftaranPasienBaruIrja.get('detail') as FormGroup

        this.FormAlamats = this.FormPendaftaranPasienBaruIrja.get('alamat') as FormArray;
        this.FormAlamats.push(this.NewAlamat());
        
        this.FormAlamats = this.FormPendaftaranPasienBaruIrja.get('kontak') as FormArray;
        this.FormAlamats.push(this.NewKontak());

        this.FormAlamats = this.FormPendaftaranPasienBaruIrja.get('debitur') as FormArray;
        this.FormAlamats.push(this.NewDebitur());
    }

    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
    
          reader.readAsDataURL(event.target.files[0]); // read file as data url
    
          reader.onload = (event) => { // called once readAsDataURL is completed
            this.url = event.target.result;
          }
        }
    }

    NewAlamat() :FormGroup{
        return this.formBuilder.group({
            "alamat_lengkap" : ["", []],
            "kode_pos" : ["", []],
            "rt": ["", []],
            "rw": ["", []],
            "kelurahan": ["", []],
            "id_wilayah": ["", []],
            "wilayah": ["", []],
        });
    }

    NewKontak() :FormGroup{
        return this.formBuilder.group({
            "hand_phone" : ["", []],
            "home_phone" : ["", []],
            "office_phone": ["", []],
            "email": ["", []],
            "keterangan": ["", []],
        });
    }

    NewDebitur() :FormGroup{
        return this.formBuilder.group({
            "no_member" : ["", []],
            "id_debitur" : ["", []],
            "keterangan": ["", []],
            "is_active": [true, []],
        });
    }

    handleSelectedAgama(args: any) {
        console.log(args);

        // this.Agama.setValue(args.Id);
    }

    handleSelectedMaritalStatus(args: any) {
        // this.MaritalStatus.setValue(args.Id);
    }

    handleSelectedPendidikan(args: any) {
        // this.KodePendidikan.setValue(args.KodePendidikan);
    }

    handleSelectedPekerjaan(args: any) {
        // this.KodePekerjaan.setValue(args.KodePekerjaan);
    }

    handleSelectedProvinsi(args: any) {
        // this.Provinsi.setValue(args.Id);

        this.StaticFilterLookupKota = [
            {
                "columnName": "IdProvinsi",
                "filter": "equal",
                "searchText": args.Id,
                "searchText2": ""
            }
        ];
    }

    handleSelectedKota(args: any) {
        // this.Kota.setValue(args.Id);

        this.StaticFilterLookupKecamatan = [
            {
                "columnName": "IdKota",
                "filter": "equal",
                "searchText": args.Id,
                "searchText2": ""
            }
        ];
    }

    handleSelectedKecamatan(args: any) {
        // this.Kecamatan.setValue(args.Id);

        this.StaticFilterLookupKelurahan = [
            {
                "columnName": "IdKecamatan",
                "filter": "equal",
                "searchText": args.Id,
                "searchText2": ""
            }
        ];
    }

    handleSelectedKelurahan(args: any) {
        // this.Kelurahan.setValue(args.Id);
    }

    handleSelectedJenisKartu(args: any) {
        // this.KodeJenisKartu.setValue(args.KodeJenisKartu);
    }

    handleSelectedSuku(args: any) {
        // this.EthnicCode.setValue(args.NatCode);
    }

    handleSelectedKebangsaan(args: any) {
        // this.NatCode.setValue(args.EthCode);
    }

    handleSelectedKecamatanAyah(args: any) {
        // this.KecamatanOrtuAyah.setValue(args.Id);
    }

    handleSelectedKotaAyah(args: any) {
        // this.KotaOrtuAyah.setValue(args.Id);
    }

    handleSelectedPekerjaanAyah(args: any) {
        // this.KodePekerjaanOrtuAyah.setValue(args.KodePekerjaan);
    }

    handleSelectedKecamatanIbu(args: any) {
        // this.KecamatanOrtuAyah.setValue(args.Id);
    }

    handleSelectedKotaIbu(args: any) {
        // this.KotaOrtuAyah.setValue(args.Id);
    }

    handleSelectedPekerjaanIbu(args: any) {
        // this.KodePekerjaanOrtuAyah.setValue(args.KodePekerjaan);
    }

    onClickButtonNav(ButtonId: any) {
        switch (ButtonId) {
            case "Reset":
                // this.onResetFormPendaftaranPasienBaruIrja();
                break;
            case "Save":
                // this.onSubmitFormPendaftaranPasienBaruIrja(this.FormPendaftaranPasienBaruIrja);
                break;
            default:
                break;
        }
    }

    // onSubmitFormPendaftaranPasienBaruIrja(FormPendaftaranBaruPasienIrja: FormGroup) {
    //     FormPendaftaranBaruPasienIrja.value.Sex = +FormPendaftaranBaruPasienIrja.value.Sex;
    //     FormPendaftaranBaruPasienIrja.value.GolDarah = +FormPendaftaranBaruPasienIrja.value.GolDarah;
    //     FormPendaftaranBaruPasienIrja.value.IdBahasa = +FormPendaftaranBaruPasienIrja.value.IdBahasa;

    //     console.log(FormPendaftaranBaruPasienIrja.value);
    // }

    // onResetFormPendaftaranPasienBaruIrja() {
    //     this.FormPendaftaranPasienBaruIrja.reset();

    //     this.LookupAgama.resetValue();
    // }

    get id_jenis_identitas() { return this.FormPendaftaranPasienBaruIrja.get("identitas.id_jenis_identitas") }
    get no_identitas() { return this.FormPendaftaranPasienBaruIrja.get("identitas.no_identitas") }
    get no_kartu_keluarga() { return this.FormPendaftaranPasienBaruIrja.get("no_kartu_keluarga") }
    get nama_depan() { return this.FormPendaftaranPasienBaruIrja.get("nama_depan") }
    get nama_belakang() { return this.FormPendaftaranPasienBaruIrja.get("nama_belakang") }
    get nama_panggilan() { return this.FormPendaftaranPasienBaruIrja.get("nama_panggilan") }
    get gelar_depan() { return this.FormPendaftaranPasienBaruIrja.get("gelar_depan") }
    get gelar_belakang() { return this.FormPendaftaranPasienBaruIrja.get("gelar_belakang") }

    get gender() { return this.FormPendaftaranPasienBaruIrja.get("gender") }
    get gol_darah() { return this.FormPendaftaranPasienBaruIrja.get("gol_darah") }
    get tempat_lahir() { return this.FormPendaftaranPasienBaruIrja.get("tempat_lahir") }
    get tanggal_lahir() { return this.FormPendaftaranPasienBaruIrja.get("tanggal_lahir") }
    get tinggi_badan_cm() { return this.FormPendaftaranPasienBaruIrja.get("tinggi_badan_cm") }
    get berat_badan_kg() { return this.FormPendaftaranPasienBaruIrja.get("berat_badan_kg") }
    get id_marital_status() { return this.FormPendaftaranPasienBaruIrja.get("id_marital_status") }
    get id_agama() { return this.FormPendaftaranPasienBaruIrja.get("id_agama") }
    get id_kebangsaan() { return this.FormPendaftaranPasienBaruIrja.get("id_kebangsaan") }
    get id_etnis() { return this.FormPendaftaranPasienBaruIrja.get("id_etnis") }
    get id_bahasa() { return this.FormPendaftaranPasienBaruIrja.get("id_bahasa") }
    get id_last_education() { return this.FormPendaftaranPasienBaruIrja.get("id_last_education") }
    get id_job_type() { return this.FormPendaftaranPasienBaruIrja.get("id_job_type") }

    get alamat() : FormArray {
        return this.FormPendaftaranPasienBaruIrja.get("alamat") as FormArray
    }

    get kontak() : FormArray {
        return this.FormPendaftaranPasienBaruIrja.get("kontak") as FormArray
    }

    get debitur() : FormArray {
        return this.FormPendaftaranPasienBaruIrja.get("debitur") as FormArray
    }
}
