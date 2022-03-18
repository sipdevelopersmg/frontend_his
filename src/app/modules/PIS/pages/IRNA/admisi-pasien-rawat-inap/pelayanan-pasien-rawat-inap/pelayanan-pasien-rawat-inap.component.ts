import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { JenisRuanganModel } from 'src/app/modules/Billing/models/setup-data/setup-jenis-ruangan.model';
import { KelasPerawatanModel } from 'src/app/modules/Billing/models/setup-data/setup-kelas-perawatan.model';
import { SetupJenisRuanganService } from 'src/app/modules/Billing/services/setup-data/setup-jenis-ruangan/setup-jenis-ruangan.service';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { IPersonPasienForAdmisiRawatJalanModel } from 'src/app/modules/PIS/models/IRJA/admisi-pasien-rawat-jalan.model';
import { DebiturModel } from 'src/app/modules/PIS/models/setup-data/setup-debitur.model';
import { PendaftaranPasienBaruService } from 'src/app/modules/PIS/services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import { SetupDebiturService } from 'src/app/modules/PIS/services/setup-data/setup-debitur/setup-debitur.service';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { OrgLookUpChecklistComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up-checklist/org-look-up-checklist.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as API_ADMISI from '../../../../../../api/PIS/IRJA/PELAYANAN_RAWAT_JALAN';
import * as API_PIS from '../../../../../../api/PIS';
import * as API_BILLING_SETUP_DATA from '../../../../../../api/BILLING/SETUP_DATA';
import settingGrid from '../json/admisi-pasien-rawat-inap.config.json';
import { IKamarModel } from 'src/app/modules/PIS/models/IRNA/setup-kamar.model';
import { IBedModel } from 'src/app/modules/PIS/models/IRNA/setup-bed.model';
import { IAdmisiPasienRawatInapModel, IAdmisiPasienRawatInapNonTPPRIModel } from 'src/app/modules/PIS/models/IRNA/admisi-pasien-rawat-inap.model';
import { AdmisiPasienRawatInapService } from 'src/app/modules/PIS/services/IRNA/admisi-pasien-rawat-inap/admisi-pasien-rawat-inap.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { IDaftarPemesananTempatTidurModel } from 'src/app/modules/PIS/models/IRNA/daftar-pemesanan-tempat-tidur.model';
import { PoliModel } from 'src/app/modules/Billing/models/setup-data/setup-poli.model';
import { AntrianRegulerService } from 'src/app/modules/PIS/services/IRNA/antrian-reguler/antrian-reguler.service';

@Component({
    selector: 'app-pelayanan-pasien-rawat-inap',
    templateUrl: './pelayanan-pasien-rawat-inap.component.html',
    styleUrls: ['./pelayanan-pasien-rawat-inap.component.css']
})
export class PelayananPasienRawatInapComponent implements OnInit {

    ButtonNav: object[];

    formAdmisiPasien: FormGroup;

    formDifferentBed: FormGroup;

    settingGrid = settingGrid;

    API_ADMISI = API_ADMISI;
    API_PIS = API_PIS.API_PIS;
    API_BILLING_SETUP_DATA = API_BILLING_SETUP_DATA.API_SETUP_DATA;

    @ViewChild('LookupMr') LookupMr: OrgInputLookUpComponent;
    urlRm = this.API_ADMISI.POST_GET_PASIEN_FOR_LOOKUP_ADMISI_NON_ANONIM_IRNA;
    LookupRmExceptionalData: any;

    @ViewChild('DropdownRuangan') DropdownRuangan: DropDownListComponent;
    DropdownRuanganDatasource: JenisRuanganModel[];
    DropdownRuanganField: object = { text: 'jenis_ruangan', value: 'id_jenis_ruangan' };

    @ViewChild('LookupKodePoli') LookupKodePoli: OrgInputLookUpKodeComponent;
    urlPoli: string = "";

    @ViewChild('LookupKodeDokter') LookupKodeDokter: OrgInputLookUpKodeComponent;
    urlDokter = this.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_DOKTER.POST_GET_ALL_DOKTER_FOR_LOOKUP;

    @ViewChild('LookupRoom') LookupRoom: OrgInputLookUpKodeComponent;
    urlLookupRoom = this.API_PIS.IRNA.IRNA.SETUP_BED_IRNA.GET_ALL_ROOM_BY_DYNAMIC_FILTER;
    LookupBedStaticFilter: any[];

    @ViewChild('LookupBed') LookupBed: OrgInputLookUpKodeComponent;
    urlLookupBed = this.API_PIS.IRNA.IRNA.SETUP_BED_IRNA.GET_ALL_BED_ROOM_BY_DYNAMIC_FILTER;

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

    @ViewChild('DropdownKelas') DropdownKelas: DropDownListComponent;
    DropdownKelasDatasource: KelasPerawatanModel[];
    DropdownKelasField: object = { text: 'nama_kelas', value: 'id_kelas' };

    TglMasuk: Date = new Date();

    @ViewChild('LookupChecklist') LookupChecklist: OrgLookUpChecklistComponent;

    AdmisiRawatInapState: string;

    modalRef: BsModalRef;
    @ViewChild('modalDifferentBed') modalDifferentBed: TemplateRef<any>;

    IsPersonTerjadwal: boolean = false;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private bsModalService: BsModalService,
        private utilityService: UtilityService,
        private encryptionService: EncryptionService,
        private setupDebiturService: SetupDebiturService,
        private antrianRegulerService: AntrianRegulerService,
        private setupJenisRuanganService: SetupJenisRuanganService,
        private setupKelasPerawatanService: SetupKelasPerawatanService,
        private pendaftaranPasienBaruService: PendaftaranPasienBaruService,
        private admisiPasienRawatInapService: AdmisiPasienRawatInapService,
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
            { Id: 'Reset', Captions: 'Reset', Icons1: 'fa-redo-alt' },
            { Id: 'Save', Captions: 'Save', Icons1: 'fa-save' },
        ];

        this.onSetAttributeFormAdmisiPasien();

        this.onSetAttributeFormDifferentBed();

        this.onGetAllJenisRuangan();

        this.onGetAllKelasPelayanan();

        if (Object.keys(this.activatedRoute.snapshot.params).length > 0) {
            let route_key = this.activatedRoute.snapshot.params['key'];

            switch (route_key) {
                case 'GRAHCIS':
                    this.AdmisiRawatInapState = "NON_TPPRI";
                    this.onGetDetailPersonFromSearching();
                    break;
                case 'TPPRI':
                    this.AdmisiRawatInapState = "TPPRI";
                    this.onGetDetailPasienFromTppri();
                    break;
                default:
                    break;
            }
        } else {
            this.AdmisiRawatInapState = "NON_TPPRI";
        };

        this.LookupRmExceptionalData = {
            field: 'id_person',
            value_1: -1,
            value_2: 0
        };
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

    onGetDetailPasienFromTppri(): void {
        if (this.activatedRoute.snapshot.params['id']) {
            let Person: IDaftarPemesananTempatTidurModel = JSON.parse(this.encryptionService.decrypt(this.activatedRoute.snapshot.params['id']));

            if (Person) {
                setTimeout(() => {
                    this.id_person.setValue(Person.id_person);

                    this.image = true;

                    this.pendaftaranPasienBaruService.onGetLinkFotoPerson(Person.id_person, false)
                        .subscribe((result) => {
                            this.imageSrc = result.data;
                        });

                    this.id_jenis_ruangan.setValue(Person.id_jenis_ruangan);

                    let atmkode_poli = document.getElementById("atmkode_poli") as HTMLInputElement;
                    atmkode_poli.value = Person.kode_poli;

                    let titlekode_poli = document.getElementById("titlekode_poli") as HTMLInputElement;
                    titlekode_poli.value = Person.nama_poli;

                    this.onGetAllDebiturByPersonId(Person.id_person);

                    this.no_rekam_medis.setValue(Person.no_rekam_medis);
                    (<HTMLInputElement>document.getElementById('inputGroupno_rekam_medis')).value = Person.no_rekam_medis;

                    this.full_name.setValue(Person.nama_pasien);

                    let inputGrouproom_no = document.getElementById("inputGrouproom_no") as HTMLInputElement;
                    inputGrouproom_no.value = Person.room_no;
                    this.id_setup_room_admisi.setValue(Person.id_setup_room_request);

                    let inputGroupbed_no = document.getElementById("inputGroupbed_no") as HTMLInputElement;
                    inputGroupbed_no.value = Person.bed_no;
                    this.id_setup_bed_room_admisi.setValue(Person.id_setup_bed_room_request);

                    this.id_kelas_rawat.setValue(Person.id_kelas_request);

                    this.id_poli.setValue(Person.id_poli);

                    this.id_antrian_tppri.setValue(Person.id_antrian_tppri)
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
            id_setup_room_admisi: [0, []],
            id_setup_bed_room_admisi: [0, []],
            id_jadwal_dokter: [0, []],
            id_dokter: [0, []],
            id_debitur: [0, []],
            id_hak_kelas: [0, []],
            id_asal_rujukan: [0, []],
            kode_wilayah_asal_rujukan: ["", []],
            id_kelas_rawat: [0, []],
            no_peserta: ["", []],
            id_icd_masuk: [0, []],
            keterangan_diagnosa: ["", []],
            keluhan: ["", []],
            reason_different_bed: ["", []],
            id_antrian_tppri: ["", []],
        });
    }

    onSetAttributeFormDifferentBed(): void {
        this.formDifferentBed = this.formBuilder.group({
            id_antrian_tppri: [0, []],
            reason_different_bed: ["", [Validators.required]],
        })
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
        this.setupKelasPerawatanService.onGetAll()
            .subscribe((result) => {
                this.DropdownKelasDatasource = result.data;
            });
    }

    handleChangeDropdownRuangan(JenisRuanganId: number): void {
        this.urlPoli = this.API_BILLING_SETUP_DATA.SETUP_POLI.GET_ALL_POLI_FOR_LOOKUP_ADMISI_RAWAT_INAP + JenisRuanganId;
    }

    heandleSelectedMR(args: any): void {
        this.image = true;

        (<HTMLInputElement>document.getElementById('inputGroupno_rekam_medis')).value = args.no_rekam_medis;

        this.id_person.setValue(args.id_person);
        this.no_rekam_medis.setValue(args.no_rekam_medis);
        this.full_name.setValue(args.full_name);

        this.antrianRegulerService.onCheckIsPersonTerjadwal(args.no_rekam_medis)
            .subscribe((result) => {
                this.IsPersonTerjadwal = result.responseResult;

                if (result.responseResult) {
                    this.utilityService.onShowingCustomAlert('warning', 'Perhatian', 'Pasien Sudah Terjadwal di Antrian')
                        .then(() => {
                            const jenis_ruangan_antrian = document.getElementById('jenis_ruangan_antrian') as HTMLInputElement;
                            jenis_ruangan_antrian.value = result.data.jenis_ruangan;
                            this.id_jenis_ruangan.setValue(result.data.id_jenis_ruangan);

                            const poli_antrian = document.getElementById('poli_antrian') as HTMLInputElement;
                            poli_antrian.value = result.data.nama_poli;
                            this.id_poli.setValue(result.data.id_poli);

                            const room_no_antrian = document.getElementById('room_no_antrian') as HTMLInputElement;
                            room_no_antrian.value = result.data.room_no;
                            this.id_setup_room_admisi.setValue(result.data.id_setup_room);

                            const bed_no_antrian = document.getElementById('bed_no_antrian') as HTMLInputElement;
                            bed_no_antrian.value = result.data.bed_no;
                            this.id_setup_bed_room_admisi.setValue(result.data.id_setup_bed_room);

                            const kelas_antrian = document.getElementById('kelas_antrian') as HTMLInputElement;
                            kelas_antrian.value = result.data.nama_kelas;
                            this.id_kelas_rawat.setValue(result.data.id_kelas);

                            const debitur_antrian = document.getElementById('debitur_antrian') as HTMLInputElement;
                            debitur_antrian.value = result.data.nama_debitur;
                            this.id_debitur.setValue(result.data.id_debitur);

                            this.setupDebiturService.onGetAllByPersonId(args.id_person)
                                .subscribe((result) => {
                                    if (result.data.length > 0) {
                                        const data = result.data.filter((item) => {
                                            return item.id_debitur == this.id_debitur.value;
                                        })[0];

                                        this.no_peserta.setValue(data['no_member']);
                                    }
                                });
                        })
                } else {
                    this.onGetAllDebiturByPersonId(args.id_person);
                }
            });

        this.pendaftaranPasienBaruService.onGetLinkFotoPerson(args.id_person, false)
            .subscribe((result) => {
                this.imageSrc = result.data;
            });

        (<HTMLInputElement>document.getElementById('nama_pasien')).focus();
    }

    heandleSelectedRoom(args: IKamarModel): void {
        this.id_poli.setValue(args.id_poli || args[0].id_poli);

        this.id_setup_room_admisi.setValue(args.id_setup_room);

        this.LookupBedStaticFilter = [
            {
                "columnName": "sr.room_no",
                "filter": "like",
                "searchText": args.room_no,
                "searchText2": ""
            }
        ]
    }

    heandleSelectedBed(args: IBedModel): void {
        this.id_setup_bed_room_admisi.setValue(args.id_setup_bed_room);
    }

    heandleSelectedPoli(args: PoliModel): void {
        this.id_poli.setValue(args.id_poli || args[0].id_poli);
    }

    handleChangeDropdownDebitur(args: any): void {
        let data = args.itemData;

        if (data.id_debitur !== 1) {
            this.no_peserta.setValue(data.no_member);
        };
    }

    heandleSelectedDokter(args: any): void {
        this.id_dokter.setValue(args.id_dokter || args[0].id_dokter);

        this.id_jadwal_dokter.setValue(0);
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
        if (this.IsPersonTerjadwal) {
            const jenis_ruangan_antrian = document.getElementById('jenis_ruangan_antrian') as HTMLInputElement;
            jenis_ruangan_antrian.value = "";
            this.id_jenis_ruangan.setValue(0);

            const poli_antrian = document.getElementById('poli_antrian') as HTMLInputElement;
            poli_antrian.value = "";
            this.id_poli.setValue(0);

            const room_no_antrian = document.getElementById('room_no_antrian') as HTMLInputElement;
            room_no_antrian.value = "";
            this.id_setup_room_admisi.setValue(0);

            const bed_no_antrian = document.getElementById('bed_no_antrian') as HTMLInputElement;
            bed_no_antrian.value = "";
            this.id_setup_bed_room_admisi.setValue(0);

            const kelas_antrian = document.getElementById('kelas_antrian') as HTMLInputElement;
            kelas_antrian.value = "";
            this.id_kelas_rawat.setValue(0);

            const debitur_antrian = document.getElementById('debitur_antrian') as HTMLInputElement;
            debitur_antrian.value = "";
            this.id_debitur.setValue(0);

            this.IsPersonTerjadwal = false;

            setTimeout(() => {
                this.formAdmisiPasien.reset();
                this.LookupMr.resetValue();
                this.DropdownRuangan.value = null;
                console.log(this.DropdownRuangan);
                this.DropdownKelas.value = null;
                this.LookupKodeDokter.resetValue();
                this.DropdownDebitur.value = null;
                this.LookupAsalRujukan.resetValue();
                this.LookupKotaAsalRujukan.resetValue();
                this.LookupDiagnosa.resetValue();

                this.id_person.setValue(0);
                this.full_name.setValue("");
                this.no_rekam_medis.setValue("");
                this.id_asal_rujukan.setValue(0);
                this.kode_wilayah_asal_rujukan.setValue("");
                this.no_peserta.setValue("");
                this.id_icd_masuk.setValue(0);
                this.keterangan_diagnosa.setValue("");
                this.keluhan.setValue(0);
                this.reason_different_bed.setValue("");
                this.id_antrian_tppri.setValue("");

                this.image = false;
            }, 500);
        } else {
            this.formAdmisiPasien.reset();
            this.LookupMr.resetValue();
            this.DropdownRuangan.value = null;
            this.DropdownKelas.value = null;
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
            this.id_setup_room_admisi.setValue(0);
            this.id_setup_bed_room_admisi.setValue(0);
            this.reason_different_bed.setValue("");
            this.id_antrian_tppri.setValue("");

            this.image = false;
        }
    }

    onSave(FormAdmisiPasien: any): void {
        if (FormAdmisiPasien.id_debitur == 1 && this.AdmisiRawatInapState == "TPPRI") {
            this.onSaveNonPenjaminTPPRI(FormAdmisiPasien);
        }

        if (FormAdmisiPasien.id_debitur != 1 && this.AdmisiRawatInapState == "TPPRI") {
            this.onSaveWithPenjaminTPPRI(FormAdmisiPasien);
        }

        if (FormAdmisiPasien.id_debitur == 1 && this.AdmisiRawatInapState == "NON_TPPRI") {
            this.onSaveNonPenjaminNonTPPRI(FormAdmisiPasien);
        }

        if (FormAdmisiPasien.id_debitur != 1 && this.AdmisiRawatInapState == "NON_TPPRI") {
            this.onSaveWithPenjaminNonTPPRI(FormAdmisiPasien);
        }
    }

    onSaveNonPenjaminTPPRI(data: IAdmisiPasienRawatInapModel): void {
        const parameter = {
            "id_person": data.id_person,
            "no_rekam_medis": data.no_rekam_medis,
            "id_jenis_ruangan": data.id_jenis_ruangan,
            "id_poli": data.id_poli,
            "id_dokter": data.id_dokter,
            "id_debitur": data.id_debitur,
            "id_kelas_rawat": data.id_kelas_rawat,
            "id_icd_masuk": data.id_icd_masuk,
            "keterangan_diagnosa": data.keterangan_diagnosa,
            "keluhan": data.keluhan,
            "id_setup_room_admisi": data.id_setup_room_admisi,
            "id_setup_bed_room_admisi": data.id_setup_bed_room_admisi,
            "reason_different_bed": "",
            "id_antrian_tppri": data.id_antrian_tppri
        };

        this.admisiPasienRawatInapService.onPostAdmisiRawatJalanTanpaPenjaminTPPRI(parameter)
            .subscribe((result) => {
                if (result) {
                    if (result.data.is_different_bed) {

                        this.utilityService.onShowingCustomAlert('warning', 'Data Berhasil Disimpan', 'Dengan No.Bed Berbeda Dari No.Bed TPPRI')
                            .then(() => {
                                this.handleOpenModalDifferentBed(result.data.id_antrian_tppri);
                            });


                    } else {
                        this.utilityService.onShowingCustomAlert('success', 'Admisi Pasien Berhasil', `No. Register : ${result.data.no_register}`)
                            .then(() => {
                                this.resetForm();

                                setTimeout(() => {
                                    this.router.navigateByUrl('dashboard/PIS/IRNA/pelayanan-pasien-rawat-inap');
                                }, 250);
                            });
                    }
                }
            });
    }

    onSaveWithPenjaminTPPRI(data: IAdmisiPasienRawatInapModel): void {
        this.admisiPasienRawatInapService.onPostAdmisiRawatJalanWithPenjaminTPPRI(data)
            .subscribe((result) => {
                if (result) {
                    if (result.data.is_different_bed) {
                        this.utilityService.onShowingCustomAlert('warning', 'Data Berhasil Disimpan', 'Dengan No.Bed Berbeda Dari No.Bed TPPRI')
                            .then(() => {
                                this.handleOpenModalDifferentBed(result.data.id_antrian_tppri);
                            });
                    } else {
                        this.utilityService.onShowingCustomAlert('success', 'Admisi Pasien Berhasil', `No. Register : ${result.data.no_register}`)
                            .then(() => {
                                this.resetForm();

                                setTimeout(() => {
                                    this.router.navigateByUrl('dashboard/PIS/IRNA/pelayanan-pasien-rawat-inap');
                                }, 250);
                            });
                    }
                }
            });
    }

    onSaveNonPenjaminNonTPPRI(data: IAdmisiPasienRawatInapNonTPPRIModel): void {
        const parameter = {
            "id_person": data.id_person,
            "no_rekam_medis": data.no_rekam_medis,
            "id_jenis_ruangan": data.id_jenis_ruangan,
            "id_poli": data.id_poli,
            "id_dokter": data.id_dokter,
            "id_debitur": data.id_debitur,
            "id_kelas_rawat": data.id_kelas_rawat,
            "id_icd_masuk": data.id_icd_masuk,
            "keterangan_diagnosa": data.keterangan_diagnosa,
            "keluhan": data.keluhan,
            "id_setup_room_admisi": data.id_setup_room_admisi,
            "id_setup_bed_room_admisi": data.id_setup_bed_room_admisi
        };

        this.admisiPasienRawatInapService.onPostAdmisiRawatJalanTanpaPenjamin(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Admisi Pasien Berhasil', `No. Register : ${result.data.no_register}`)
                        .then(() => {
                            this.resetForm();

                            setTimeout(() => {
                                this.router.navigateByUrl('dashboard/PIS/IRNA/pelayanan-pasien-rawat-inap');
                            }, 250);
                        });
                }
            });
    }

    onSaveWithPenjaminNonTPPRI(data: IAdmisiPasienRawatInapNonTPPRIModel): void {
        const parameter = {
            "id_person": data.id_person,
            "no_rekam_medis": data.no_rekam_medis,
            "id_jenis_ruangan": data.id_jenis_ruangan,
            "id_poli": data.id_poli,
            "id_dokter": data.id_dokter,
            "id_debitur": data.id_debitur,
            "id_asal_rujukan": data.id_asal_rujukan,
            "kode_wilayah_asal_rujukan": data.kode_wilayah_asal_rujukan,
            "id_kelas_rawat": data.id_kelas_rawat,
            "no_peserta": data.no_peserta,
            "id_icd_masuk": data.id_icd_masuk,
            "keterangan_diagnosa": data.keterangan_diagnosa,
            "keluhan": data.keluhan,
            "id_setup_room_admisi": data.id_setup_room_admisi,
            "id_setup_bed_room_admisi": data.id_setup_bed_room_admisi
        };

        this.admisiPasienRawatInapService.onPostAdmisiRawatJalanWithPenjamin(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Admisi Pasien Berhasil', `No. Register : ${result.data.no_register}`)
                        .then(() => {
                            this.resetForm();

                            setTimeout(() => {
                                this.router.navigateByUrl('dashboard/PIS/IRNA/pelayanan-pasien-rawat-inap');
                            }, 250);
                        });
                }
            });
    }

    handleOpenModalDifferentBed(id_antrian_tppri: number): void {
        this.onResetFormDifferentBed();

        this.id_antrian_tppri_reason.setValue(id_antrian_tppri);

        let config = {
            backdrop: true,
            ignoreBackdropClick: true
        };

        this.modalRef = this.bsModalService.show(this.modalDifferentBed, config);
    }

    handleCloseModalDifferentBed(): void {
        this.modalRef.hide();
    }

    handleSubmitModalDifferentBed(formDifferentBed: any): void {
        Swal.fire({
            title: 'Apakah Anda Yakin?',
            text: "Data yang Telah Diinput Tidak Dapat Diubah",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya, Saya Yakin',
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {
                this.admisiPasienRawatInapService.onPutUpdateAdmisiRawatInapDifferentBed(formDifferentBed.value.id_antrian_tppri, formDifferentBed.value.reason_different_bed)
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', "Success", `Data Berhasil Disimpan`)
                                .then(() => {
                                    this.handleCloseModalDifferentBed();

                                    this.resetForm();

                                    setTimeout(() => {
                                        this.router.navigateByUrl('dashboard/PIS/IRNA/pelayanan-pasien-rawat-inap');
                                    }, 250);
                                })
                        }
                    });
            }
        });
    }

    onResetFormDifferentBed(): void {
        this.formDifferentBed.reset();

        this.id_antrian_tppri_reason.setValue(0);
        this.reason_different_bed_reason.setValue("");
    }

    get id_person(): AbstractControl { return this.formAdmisiPasien.get('id_person'); }
    get full_name(): AbstractControl { return this.formAdmisiPasien.get('full_name'); }
    get no_rekam_medis(): AbstractControl { return this.formAdmisiPasien.get('no_rekam_medis'); }
    get id_jenis_ruangan(): AbstractControl { return this.formAdmisiPasien.get('id_jenis_ruangan'); }
    get id_poli(): AbstractControl { return this.formAdmisiPasien.get('id_poli'); }
    get id_jadwal_dokter(): AbstractControl { return this.formAdmisiPasien.get('id_jadwal_dokter'); }
    get id_dokter(): AbstractControl { return this.formAdmisiPasien.get('id_dokter'); }
    get id_debitur(): AbstractControl { return this.formAdmisiPasien.get('id_debitur'); }
    get id_hak_kelas(): AbstractControl { return this.formAdmisiPasien.get('id_hak_kelas'); }
    get id_asal_rujukan(): AbstractControl { return this.formAdmisiPasien.get('id_asal_rujukan'); }
    get kode_wilayah_asal_rujukan(): AbstractControl { return this.formAdmisiPasien.get('kode_wilayah_asal_rujukan'); }
    get id_kelas_rawat(): AbstractControl { return this.formAdmisiPasien.get('id_kelas_rawat'); }
    get no_peserta(): AbstractControl { return this.formAdmisiPasien.get('no_peserta'); }
    get id_icd_masuk(): AbstractControl { return this.formAdmisiPasien.get('id_icd_masuk'); }
    get keterangan_diagnosa(): AbstractControl { return this.formAdmisiPasien.get('keterangan_diagnosa'); }
    get keluhan(): AbstractControl { return this.formAdmisiPasien.get('keluhan') };
    get id_setup_room_admisi(): AbstractControl { return this.formAdmisiPasien.get('id_setup_room_admisi') };
    get id_setup_bed_room_admisi(): AbstractControl { return this.formAdmisiPasien.get('id_setup_bed_room_admisi') };
    get reason_different_bed(): AbstractControl { return this.formAdmisiPasien.get('reason_different_bed') };
    get id_antrian_tppri(): AbstractControl { return this.formAdmisiPasien.get('id_antrian_tppri') };

    get id_antrian_tppri_reason(): AbstractControl { return this.formDifferentBed.get("id_antrian_tppri"); }
    get reason_different_bed_reason(): AbstractControl { return this.formDifferentBed.get("reason_different_bed"); }
}
