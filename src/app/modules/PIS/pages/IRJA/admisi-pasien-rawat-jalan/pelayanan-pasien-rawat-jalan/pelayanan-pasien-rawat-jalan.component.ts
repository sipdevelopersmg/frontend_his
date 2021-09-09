import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
import * as API_ADMISI from '../../../../../../api/PIS/IRJA/PELAYANAN_RAWAT_JALAN';
import * as API_PIS_SETUP_DATA from '../../../../../../api/PIS/SETUP_DATA';
import * as API_BILLING_SETUP_DATA from '../../../../../../api/BILLING/SETUP_DATA';
import { OrgLookUpChecklistComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up-checklist/org-look-up-checklist.component';

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
    urlRm = this.API_ADMISI.POST_GET_PASIEN_FOR_LOOKUP_ADMISI;

    DropdownRuanganDatasource: JenisRuanganModel[];
    DropdownRuanganField: object = { text: 'jenis_ruangan', value: 'id_jenis_ruangan' };

    @ViewChild('LookupKodePoli') LookupKodePoli: OrgInputLookUpKodeComponent;
    urlPoli: string;

    @ViewChild('LookupKodeDokter') LookupKodeDokter: OrgInputLookUpKodeComponent;
    urlDokter = this.API_PIS_SETUP_DATA.SETUP_DOKTER.POST_GET_ALL_DOKTER_FOR_LOOKUP_ADMISI;

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

    DropdownDebiturDatasource: DebiturModel[];
    DropdownDebiturField: object = { text: 'nama_debitur', value: 'id_debitur' };

    DropdownKelasDatasource: KelasPerawatanModel[];
    DropdownKelasField: object = { text: 'nama_kelas', value: 'id_kelas' };

    TglMasuk: Date = new Date();

    @ViewChild('LookupChecklist') LookupChecklist: OrgLookUpChecklistComponent;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
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

        this.onGetAllJenisRuangan();

        this.onGetAllKelasPelayanan();
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
                this.onSave();
                break;
            default:
                break;
        }
    }

    resetForm(): void {
        this.formAdmisiPasien.reset();
        this.LookupMr.resetValue();
        this.LookupKodeDokter.resetValue();
        this.LookupKodePoli.resetValue();
        this.LookupKelas.resetValue();
        this.LookupDiagnosa.resetValue();
        this.image = false;
    }

    onSave(): void {
        const request = this.formAdmisiPasien.value;

        console.log(request);
    }

    onSetAttributeFormAdmisiPasien(): void {
        this.formAdmisiPasien = this.formBuilder.group({
            PartyId: [0, []],
            MrNo: ['', [Validators.required]],
            NamaPasien: ['', []],
            TglMasukRawat: [null, []],
            NoRegister: [0, []],
            TipePasien: ['OUT', []],
            KodeRujukan: ['', []],
            KotaAsalRujukan: ['', []],
            Perujuk: ['', []],
            AsalMasuk: ['', []],
            KodeDokterRj: ['', []],
            TglRujukRi: [null, []],
            FromNoRegister: [0, []],
            TransferToNoreg: [0, []],
            DiagnosaMasuk: ['', []],
            KetDiagnosaMasuk: ['', []],
            Keluhan: ['', []],
            DiagnosaAkhir: ['', []],
            KetDiagnosaAkhir: ['', []],
            TglKeluar: [null, []],
            KondisiKeluar: [0, []],
            CaraKeluar: [0, []],
            SebabRi: ['', []],
            DokterPerujukRi: ['', []],
            PolyAsalRi: ['', []],
            PolyRi: ['', []],
            SubPoly: ['', []],
            PartyDebitur: [0, []],
            InsNo: ['', []],
            InsExpDate: [null, []],
            ScvCode: ['', []],
            ScvPelayanan: ['', []],
            Balance: [0, []],
            BalancePhar: [0, []],
            Deposite: [0, []],
            TotalCharge: [0, []],
            TicketCode: ['', []],
            PayTicketDate: [null, []],
            OprEntry: [0, []],
            IsVerifiedCoa: ['', []],
            IsBirth: ['', []],
            PayCompleteDate: [null, []],
            CancelDate: [null, []],
            SendDate: [null, []],
            CancelBy: [0, []],
            CancelReason: ['', []],
            TransferFrom: ['', []],
            JenisPelayananId: ['', []],
            KeterbatasanFisik: [0, []],
            PpjpEmpId: [0, []],
            BillProcessDate: [null, []],
            Catatan: [null, []],
            id_person: [0, []],
            id_jenis_ruangan: [0, []],
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
    }

    heandleSelectedMR(args: any): void {
        this.image = true;

        this.MrNo.setValue(args.no_rekam_medis);
        this.NamaPasien.setValue(args.full_name);

        this.pendaftaranPasienBaruService.onGetLinkFotoPerson(args.id_person, false)
            .subscribe((result) => {
                this.imageSrc = result.data;
            });

        this.onGetAllDebiturByPersonId(args.id_person);

        (<HTMLInputElement>document.getElementById('nama_pasien')).focus();
    }

    heandleSelectedPoli(args: any): void {
        this.PolyRi.setValue(args.PolyCode);
    }

    heandleSelectedDokter(args: any): void {
        // this.KodeDokterRj.setValue(args.KodeDokter);
    }

    heandleSelectedDebitur(arg: any): void {
        this.PartyDebitur.setValue(arg.PartyId);
    }

    heandleSelectedPelayanan(arg: any): void {
        this.ScvPelayanan.setValue(arg.ScvCode);
    }

    handleSelectedAsalRujukan(args: any): void {

    }

    handleSelectedKotaAsalRujukan($event): void {

    }

    heandleSelectedDiagnosaAwal(arg: any): void {
        this.DiagnosaMasuk.setValue(arg.IcdCode);
    }

    tes() {
        this.LookupChecklist.hanldeOpenModalLookupChecklist();
    }

    handleSelectedRecordAsalRujukan(args: any): void {
        console.log(args)
    }

    get PartyId(): AbstractControl { return this.formAdmisiPasien.get('PartyId'); }
    get NoRegister(): AbstractControl { return this.formAdmisiPasien.get('NoRegister'); }
    get MrNo(): AbstractControl { return this.formAdmisiPasien.get('MrNo'); }
    get NamaPasien(): AbstractControl { return this.formAdmisiPasien.get('NamaPasien'); }
    get TglMasukRawat(): AbstractControl { return this.formAdmisiPasien.get('TglMasukRawat'); }
    get PolyRi(): AbstractControl { return this.formAdmisiPasien.get('PolyRi'); }
    get KodeDokterRj(): AbstractControl { return this.formAdmisiPasien.get('KodeDokterRj'); }
    get PartyDebitur(): AbstractControl { return this.formAdmisiPasien.get('PartyDebitur'); }
    get ScvPelayanan(): AbstractControl { return this.formAdmisiPasien.get('ScvPelayanan'); }
    get FromNoRegister(): AbstractControl { return this.formAdmisiPasien.get('FromNoRegister'); }
    get ScvCode(): AbstractControl { return this.formAdmisiPasien.get('ScvCode'); }
    get TicketCode(): AbstractControl { return this.formAdmisiPasien.get('TicketCode'); }
    get KodeRujukan(): AbstractControl { return this.formAdmisiPasien.get('KodeRujukan'); }
    get KotaAsalRujukan(): AbstractControl { return this.formAdmisiPasien.get('KotaAsalRujukan'); }
    get Perujuk(): AbstractControl { return this.formAdmisiPasien.get('Perujuk'); }
    get DiagnosaMasuk(): AbstractControl { return this.formAdmisiPasien.get('DiagnosaMasuk'); }
    get Keluhan(): AbstractControl { return this.formAdmisiPasien.get('Keluhan'); }
    get Catatan(): AbstractControl { return this.formAdmisiPasien.get('Catatan'); }
    get OprEntry(): AbstractControl { return this.formAdmisiPasien.get('OprEntry'); }

    get id_person(): AbstractControl { return this.formAdmisiPasien.get('id_person'); }
}
