import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdmisiPasienRawatJalanService } from 'src/app/modules/PIS/services/IRJA/admisi-pasien-rawat-jalan/admisi-pasien-rawat-jalan.service';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import settingGrid from '../json/grid.json';

@Component({
    selector: 'app-pelayanan-pasien-rawat-jalan',
    templateUrl: './pelayanan-pasien-rawat-jalan.component.html',
    styleUrls: ['./pelayanan-pasien-rawat-jalan.component.css']
})
export class PelayananPasienRawatJalanComponent implements OnInit {

    @ViewChild('LookupMr') LookupMr: OrgInputLookUpComponent;
    @ViewChild('LookupKodePoli') LookupKodePoli: OrgInputLookUpKodeComponent;
    @ViewChild('LookupKodeDokter') LookupKodeDokter: OrgInputLookUpKodeComponent;
    @ViewChild('LookupKodeDebitur') LookupKodeDebitur: OrgInputLookUpKodeComponent;
    @ViewChild('LookupKelas') LookupKelas: OrgInputLookUpKodeComponent;
    @ViewChild('LookupDiagnosa') LookupDiagnosa: OrgInputLookUpKodeComponent;

    ButtonNav: object[];
    formAdmisiPasien: FormGroup;
    settingGrid = settingGrid;
    urlRm = 'SetupAdmisiPasienIRJA/GetAllPasienByParams';
    urlPoli = 'SetupAdmisiPasienIRJA/GetPoliByParams';
    urlDokter = 'SetupAdmisiPasienIRJA/GetDokterByParams';
    urlDebitur = 'SetupAdmisiPasienIRJA/GetDebiturByParams';
    urlPelayanan = 'SetupAdmisiPasienIRJA/GetKelasByParams';
    urlDiagnosa = 'SetupAdmisiPasienIRJA/GetDiagnosaByParams';
    image = false;

    TglMasukMin: Date = new Date();

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private admisiPasienRawatJalanService: AdmisiPasienRawatJalanService,
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
            { Id: 'Reset', Captions: 'Reset', Icons1: 'fa-redo-alt' },
            { Id: 'Save', Captions: 'Save', Icons1: 'fa-save' },
        ];

        this.onSetAttributeFormAdmisiPasien();

        const date = new Date();
        date.setMonth(date.getMonth() - 2, 1);
        this.TglMasukMin = date;
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
        this.LookupKodeDebitur.resetValue();
        this.LookupKelas.resetValue();
        this.LookupDiagnosa.resetValue();
        this.image = false;
    }

    onSave(): void {
        const request = this.formAdmisiPasien.value;

        console.log(request);
    }

    // ... Set Form Admisi Pasien Attribute
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
            Catatan: [null, []]
        });
    }

    heandleSelectedMR(arg: any): void {
        this.MrNo.setValue(arg.MrNo);
        this.NamaPasien.setValue(arg.Nama);
        this.image = true;
    }

    heandleSelectedPoli(arg: any): void {
        this.PolyRi.setValue(arg.PolyCode);
    }

    heandleSelectedDokter(arg: any): void {
        this.KodeDokterRj.setValue(arg.KodeDokter);
    }

    heandleSelectedDebitur(arg: any): void {
        this.PartyDebitur.setValue(arg.PartyId);
    }

    heandleSelectedPelayanan(arg: any): void {
        this.ScvPelayanan.setValue(arg.ScvCode);
    }

    heandleSelectedDiagnosaAwal(arg: any): void {
        this.DiagnosaMasuk.setValue(arg.IcdCode);
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
}
