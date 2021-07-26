import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import LookUpPendaftaranPasienBaru from './json/LookupPendaftaranPasienBaru.json';
import * as CONFIG from "../../../../../api/index";
import { PendaftaranPasienBaruService } from '../../../services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';

@Component({
    selector: 'app-pendaftaran-pasien-baru',
    templateUrl: './pendaftaran-pasien-baru.component.html',
    styleUrls: ['./pendaftaran-pasien-baru.component.css']
})
export class PendaftaranPasienBaruComponent implements OnInit {

    // ** Button Navigation Properties
    ButtonNav: ButtonNavModel[] = [
        { Id: "save_end_new", Captions: "Save And New", Icons1: "fa-redo-alt" },
        { Id: "Save", Captions: "Save", Icons1: "fa-save" },
    ];

    // ** Form Pendaftaran Pasien Baru Attribute
    FormPendaftaranPasienBaruIrja: FormGroup;

    @ViewChild("LookupAgama") LookupAgama: OrgInputLookUpComponent;

    // ** Lookup Pendaftaran Pasien Baru
    public LookupPendaftaranPasienBaru = LookUpPendaftaranPasienBaru;

    // ** Lookup Pendaftaran Pasien Baru URL
    public LookupPendaftaranPasienBaruUrl = CONFIG.API;

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

    constructor(private formBuilder: FormBuilder,
        private pendafatranPasienBaruService: PendaftaranPasienBaruService) { }

    ngOnInit(): void {
        this.onSetFormPendaftaranPasienBaruIrjaAttribute();

        this.onGetDropdownOptions();
    }

    onGetDropdownOptions() {
        this.pendafatranPasienBaruService.onGetAllJenisKelamin()
            .subscribe((_result) => {
                // this.SelectOptionsJenisKelamin = _result;
                this.SelectOptionsJenisKelamin = [];
            });

        this.pendafatranPasienBaruService.onGetGolonganDarah()
            .subscribe((_result) => {
                this.SelectOptionsGolonganDarah = _result;
            });

        this.pendafatranPasienBaruService.onGetKeterbatasan()
            .subscribe((_result) => {
                this.SelectOptionsKeterbatasanFisik = _result;
            });

        this.pendafatranPasienBaruService.onGetBahasa()
            .subscribe((_result) => {
                this.SelectOptionsBahasa = _result;
            })
    }

    onSetFormPendaftaranPasienBaruIrjaAttribute() {
        this.FormPendaftaranPasienBaruIrja = this.formBuilder.group({
            "PartyId": [0, []],
            "FirstName": ["", Validators.required],
            "MiddleName": ["", []],
            "LastName": ["", []],
            "FrontTitle": ["", []],
            "EndTitle": ["", []],
            "Sex": [0, Validators.required],
            "Agama": [0, Validators.required],
            "TemplatLahir": ["", Validators.required],
            "TanggalLahir": ["", Validators.required],
            "Height": [0, []],
            "Weight": [0, []],
            "MaritalStatus": [0, Validators.required],
            "GolDarah": [0, Validators.required],
            "Telp": ["", Validators.required],
            "Hp": ["", Validators.required],
            "EthnicCode": ["", Validators.required],
            "NatCode": ["", Validators.required],
            "IdBahasa": [0, Validators.required],
            "Bahasa": ["", Validators.required],

            Pasien: this.formBuilder.group({
                "MrNo": ['0', []],
                "DebiturMemberNo": ["", []],
                "ExpDebiturMember": [null, []],
                "Visits": [0, []],
                "LastVisitDate": [null, []],
                "HistoryVisitDate": [null, []],
                "IsBridge": [false, []],
                "PhysicalLimitation": [0, []],
                "IrnaSirusVisits": [0, []],
                "LastNote": ["", []],
            }),
            KartuIdentitas: this.formBuilder.group({
                "PartyId": [0, []],
                "KodeJenisKartu": ["", Validators.required],
                "NomorKartu": ["", Validators.required],
                "FromDate": ["1900-01-01", []],
                "ThruDate": [null, []],
            }),
            PasienAddress: this.formBuilder.array([{
                "IdAlamat": [null, []],
                "Alamat": ["", Validators.required],
                "Rt": ["", Validators.required],
                "Rw": ["", Validators.required],
                "Provinsi": ["", Validators.required],
                "Kota": ["", Validators.required],
                "Kecamatan": ["", Validators.required],
                "Kelurahan": ["", Validators.required],
                "KodePos": ["", Validators.required],
            }]),
            Keluarga: this.formBuilder.group({
                "NamaSuamiIstri": ["", Validators.required],
                "TelpKeluarga": ["", Validators.required],
                "AnakKe": ["", Validators.required],
                "Dari": ["", Validators.required],
                "AkteLahir": ["", Validators.required],
            }),
            Ayah: this.formBuilder.group({
                "ParentIdOrtuAyah": [null, Validators.required],
                "NamaOrtuAyah": ["", Validators.required],
                "TglLahirOrtuAyah": ["", Validators.required],
                "AlamatOrtuAyah": ["", Validators.required],
                "KotaOrtuAyah": ["", Validators.required],
                "KecamatanOrtuAyah": ["", Validators.required],
                "KodePekerjaanOrtuAyah": ["", Validators.required],
            }),
            Ibu: this.formBuilder.group({
                "ParentIdOrtuIbu": [null, Validators.required],
                "NamaOrtuIbu": ["", Validators.required],
                "TglLahirOrtuIbu": ["", Validators.required],
                "AlamatOrtuIbu": ["", Validators.required],
                "KotaOrtuIbu": ["", Validators.required],
                "KecamatanOrtuIbu": ["", Validators.required],
                "KodePekerjaanOrtuIbu": ["", Validators.required],
            }),
            Pendidikan: this.formBuilder.group({
                "PartyId": [0, []],
                "KodePendidikan": [0, Validators.required],
            }),
            Pekerjaan: this.formBuilder.group({
                "PartyId": [0, []],
                "KodePekerjaan": [0, Validators.required],
            }),
            Keterbatasan: this.formBuilder.group({
                "PartyId": [0, []],
                "IdKeterbatasanFisik": [0, Validators.required],
            }),
        });
    }

    handleSelectedAgama(args: any) {
        console.log(args);

        this.Agama.setValue(args.Id);
    }

    handleSelectedMaritalStatus(args: any) {
        this.MaritalStatus.setValue(args.Id);
    }

    handleSelectedPendidikan(args: any) {
        this.KodePendidikan.setValue(args.KodePendidikan);
    }

    handleSelectedPekerjaan(args: any) {
        this.KodePekerjaan.setValue(args.KodePekerjaan);
    }

    handleSelectedProvinsi(args: any) {
        this.Provinsi.setValue(args.Id);

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
        this.Kota.setValue(args.Id);

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
        this.Kecamatan.setValue(args.Id);

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
        this.Kelurahan.setValue(args.Id);
    }

    handleSelectedJenisKartu(args: any) {
        this.KodeJenisKartu.setValue(args.KodeJenisKartu);
    }

    handleSelectedSuku(args: any) {
        this.EthnicCode.setValue(args.NatCode);
    }

    handleSelectedKebangsaan(args: any) {
        this.NatCode.setValue(args.EthCode);
    }

    handleSelectedKecamatanAyah(args: any) {
        this.KecamatanOrtuAyah.setValue(args.Id);
    }

    handleSelectedKotaAyah(args: any) {
        this.KotaOrtuAyah.setValue(args.Id);
    }

    handleSelectedPekerjaanAyah(args: any) {
        this.KodePekerjaanOrtuAyah.setValue(args.KodePekerjaan);
    }

    handleSelectedKecamatanIbu(args: any) {
        this.KecamatanOrtuAyah.setValue(args.Id);
    }

    handleSelectedKotaIbu(args: any) {
        this.KotaOrtuAyah.setValue(args.Id);
    }

    handleSelectedPekerjaanIbu(args: any) {
        this.KodePekerjaanOrtuAyah.setValue(args.KodePekerjaan);
    }

    onClickButtonNav(ButtonId: any) {
        switch (ButtonId) {
            case "Reset":
                this.onResetFormPendaftaranPasienBaruIrja();
                break;
            case "Save":
                this.onSubmitFormPendaftaranPasienBaruIrja(this.FormPendaftaranPasienBaruIrja);
                break;
            default:
                break;
        }
    }

    onSubmitFormPendaftaranPasienBaruIrja(FormPendaftaranBaruPasienIrja: FormGroup) {
        FormPendaftaranBaruPasienIrja.value.Sex = +FormPendaftaranBaruPasienIrja.value.Sex;
        FormPendaftaranBaruPasienIrja.value.GolDarah = +FormPendaftaranBaruPasienIrja.value.GolDarah;
        FormPendaftaranBaruPasienIrja.value.IdBahasa = +FormPendaftaranBaruPasienIrja.value.IdBahasa;

        console.log(FormPendaftaranBaruPasienIrja.value);
    }

    onResetFormPendaftaranPasienBaruIrja() {
        this.FormPendaftaranPasienBaruIrja.reset();

        this.LookupAgama.resetValue();
    }

    get Pasien() { return this.FormPendaftaranPasienBaruIrja.get("Pasien") }
    get KartuIdentitas() { return this.FormPendaftaranPasienBaruIrja.get("KartuIdentitas") }
    get Keluarga() { return this.FormPendaftaranPasienBaruIrja.get("Keluarga") }
    get Ayah() { return this.FormPendaftaranPasienBaruIrja.get("Ayah") }
    get Ibu() { return this.FormPendaftaranPasienBaruIrja.get("Ibu") }
    get Pendidikan() { return this.FormPendaftaranPasienBaruIrja.get("Pendidikan") }
    get Pekerjaan() { return this.FormPendaftaranPasienBaruIrja.get("Pekerjaan") }
    get Keterbatasan() { return this.FormPendaftaranPasienBaruIrja.get("Keterbatasan") }

    get MrNo() { return this.FormPendaftaranPasienBaruIrja.get("Pasien.MrNo") }
    get FirstName() { return this.FormPendaftaranPasienBaruIrja.get("FirstName") }
    get Sex() { return this.FormPendaftaranPasienBaruIrja.get("Sex") }
    get Agama() { return this.FormPendaftaranPasienBaruIrja.get("Agama") }
    get TemplatLahir() { return this.FormPendaftaranPasienBaruIrja.get("TemplatLahir") }
    get TanggalLahir() { return this.FormPendaftaranPasienBaruIrja.get("TanggalLahir") }
    get MaritalStatus() { return this.FormPendaftaranPasienBaruIrja.get("MaritalStatus") }
    get KodePendidikan() { return this.FormPendaftaranPasienBaruIrja.get("Pendidikan.KodePendidikan") }
    get KodePekerjaan() { return this.FormPendaftaranPasienBaruIrja.get("Pekerjaan.KodePekerjaan") }
    get GolDarah() { return this.FormPendaftaranPasienBaruIrja.get("GolDarah") }
    get IdKeterbatasanFisik() { return this.FormPendaftaranPasienBaruIrja.get("Keterbatasan.IdKeterbatasanFisik") }
    get Alamat() { return this.FormPendaftaranPasienBaruIrja.get("PasienAddress.Alamat") }
    get Rt() { return this.FormPendaftaranPasienBaruIrja.get("PasienAddress.Rt") }
    get Rw() { return this.FormPendaftaranPasienBaruIrja.get("PasienAddress.Rw") }
    get Provinsi() { return this.FormPendaftaranPasienBaruIrja.get("PasienAddress.Provinsi") }
    get Kota() { return this.FormPendaftaranPasienBaruIrja.get("PasienAddress.Kota") }
    get Kecamatan() { return this.FormPendaftaranPasienBaruIrja.get("PasienAddress.Kecamatan") }
    get Kelurahan() { return this.FormPendaftaranPasienBaruIrja.get("PasienAddress.Kelurahan") }
    get KodePos() { return this.FormPendaftaranPasienBaruIrja.get("PasienAddress.KodePos") }
    get Telp() { return this.FormPendaftaranPasienBaruIrja.get("Telp") }
    get Hp() { return this.FormPendaftaranPasienBaruIrja.get("Hp") }
    get KodeJenisKartu() { return this.FormPendaftaranPasienBaruIrja.get("KartuIdentitas.KodeJenisKartu") }
    get NomorKartu() { return this.FormPendaftaranPasienBaruIrja.get("KartuIdentitas.NomorKartu") }
    get EthnicCode() { return this.FormPendaftaranPasienBaruIrja.get("EthnicCode") }
    get NatCode() { return this.FormPendaftaranPasienBaruIrja.get("NatCode") }
    get IdBahasa() { return this.FormPendaftaranPasienBaruIrja.get("IdBahasa") }
    get Bahasa() { return this.FormPendaftaranPasienBaruIrja.get("Bahasa") }
    get NamaSuamiIstri() { return this.FormPendaftaranPasienBaruIrja.get("Keluarga.NamaSuamiIstri") }
    get TelpKeluarga() { return this.FormPendaftaranPasienBaruIrja.get("Keluarga.TelpKeluarga") }
    get AnakKe() { return this.FormPendaftaranPasienBaruIrja.get("Keluarga.AnakKe") }
    get Dari() { return this.FormPendaftaranPasienBaruIrja.get("Keluarga.Dari") }
    get AkteLahir() { return this.FormPendaftaranPasienBaruIrja.get("Keluarga.AkteLahir") }
    get NamaOrtuAyah() { return this.FormPendaftaranPasienBaruIrja.get("Ayah.NamaOrtuAyah") }
    get TglLahirOrtuAyah() { return this.FormPendaftaranPasienBaruIrja.get("Ayah.TglLahirOrtuAyah") }
    get AlamatOrtuAyah() { return this.FormPendaftaranPasienBaruIrja.get("Ayah.AlamatOrtuAyah") }
    get KotaOrtuAyah() { return this.FormPendaftaranPasienBaruIrja.get("Ayah.KotaOrtuAyah") }
    get KecamatanOrtuAyah() { return this.FormPendaftaranPasienBaruIrja.get("Ayah.KecamatanOrtuAyah") }
    get KodePekerjaanOrtuAyah() { return this.FormPendaftaranPasienBaruIrja.get("Ayah.KodePekerjaanOrtuAyah") }
    get NamaOrtuIbu() { return this.FormPendaftaranPasienBaruIrja.get("Ibu.NamaOrtuIbu") }
    get TglLahirOrtuIbu() { return this.FormPendaftaranPasienBaruIrja.get("Ibu.TglLahirOrtuIbu") }
    get AlamatOrtuIbu() { return this.FormPendaftaranPasienBaruIrja.get("Ibu.AlamatOrtuIbu") }
    get KotaOrtuIbu() { return this.FormPendaftaranPasienBaruIrja.get("Ibu.KotaOrtuIbu") }
    get KecamatanOrtuIbu() { return this.FormPendaftaranPasienBaruIrja.get("Ibu.KecamatanOrtuIbu") }
    get KodePekerjaanOrtuIbu() { return this.FormPendaftaranPasienBaruIrja.get("Ibu.KodePekerjaanOrtuIbu") }
}
