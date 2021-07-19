import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { AdmisiPasienRawatJalanService } from '../../../services/IRJA/admisi-pasien-rawat-jalan/admisi-pasien-rawat-jalan.service';
import settingGrid from './grid.json'
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-admisi-pasien-rawat-jalan',
    templateUrl: './admisi-pasien-rawat-jalan.component.html',
    styleUrls: ['./admisi-pasien-rawat-jalan.component.css']
})
export class AdmisiPasienRawatJalanComponent implements OnInit {

    @ViewChild("LookupMr") LookupMr: OrgInputLookUpComponent;
    @ViewChild("LookupKodePoli") LookupKodePoli: OrgInputLookUpKodeComponent;
    @ViewChild("LookupKodeDokter") LookupKodeDokter: OrgInputLookUpKodeComponent;
    @ViewChild("LookupKodeDebitur") LookupKodeDebitur: OrgInputLookUpKodeComponent;
    @ViewChild("LookupKelas") LookupKelas: OrgInputLookUpKodeComponent;
    @ViewChild("LookupDiagnosa") LookupDiagnosa: OrgInputLookUpKodeComponent;

    ButtonNav: Object[]
    formAdmisiPasien: FormGroup;
    settingGrid = settingGrid;
    urlRm = 'SetupAdmisiPasienIRJA/GetAllPasienByParams';
    urlPoli = 'SetupAdmisiPasienIRJA/GetPoliByParams';
    urlDokter = 'SetupAdmisiPasienIRJA/GetDokterByParams';
    urlDebitur = 'SetupAdmisiPasienIRJA/GetDebiturByParams';
    urlPelayanan = 'SetupAdmisiPasienIRJA/GetKelasByParams';
    urlDiagnosa = 'SetupAdmisiPasienIRJA/GetDiagnosaByParams';
    image = false;

    constructor(
        private formBuilder: FormBuilder,
        private admisiPasienRawatJalanService: AdmisiPasienRawatJalanService,
        private utilityService: UtilityService
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: "Save", Captions: "Save", Icons1: "fa-save" },
            { Id: "Reset", Captions: "Reset", Icons1: "fa-redo-alt" },
        ];
        this.onSetAttributeFormAdmisiPasien()
    }

    onClickButtonNav(ButtonId: string) {
        console.log(ButtonId);

        switch (ButtonId) {
            case "Save":
                this.onSave();
                break;
            case "Reset":
                this.resetForm();
            default:
                break;
        }
    }

    resetForm() {
        this.formAdmisiPasien.reset();
        this.LookupMr.resetValue();
        this.LookupKodeDokter.resetValue();
        this.LookupKodePoli.resetValue();
        this.LookupKodeDebitur.resetValue();
        this.LookupKelas.resetValue();
        this.LookupDiagnosa.resetValue();
        this.image = false;
    }

    onSave() {
        try {
            const request = this.formAdmisiPasien.value;

            this.admisiPasienRawatJalanService.postAdmisiPasienRawatJalan(request)
                .subscribe((response) => {
                    this.utilityService.onShowingCustomAlert('success', 'Tersimpan', 'Pasien Berhasil Di Dafarkan')
                    this.resetForm();
                }, (error: HttpErrorResponse) => {
                    this.utilityService.onShowingCustomAlert('error', 'Gagal Tersimpan', error.message)
                });

            this.resetForm();

        } catch (error) {
            this.utilityService.onShowingCustomAlert('error', 'Gagal Tersimpan', error.Message)
        }
    }

    // ... Set Form Admisi Pasien Attribute
    onSetAttributeFormAdmisiPasien() {
        this.formAdmisiPasien = this.formBuilder.group({
            "PartyId": [0, []],
            "MrNo": ["", [Validators.required]],
            "NamaPasien": ["", []],
            "TglMasukRawat": [null, []],
            "NoRegister": [0, []],
            "TipePasien": ["OUT", []],
            "KodeRujukan": ["", []],
            "KotaAsalRujukan": ["", []],
            "Perujuk": ["", []],
            "AsalMasuk": ["", []],
            "KodeDokterRj": ["", []],
            "TglRujukRi": [null, []],
            "FromNoRegister": [0, []],
            "TransferToNoreg": [0, []],
            "DiagnosaMasuk": ["", []],
            "KetDiagnosaMasuk": ["", []],
            "Keluhan": ["", []],
            "DiagnosaAkhir": ["", []],
            "KetDiagnosaAkhir": ["", []],
            "TglKeluar": [null, []],
            "KondisiKeluar": [0, []],
            "CaraKeluar": [0, []],
            "SebabRi": ["", []],
            "DokterPerujukRi": ["", []],
            "PolyAsalRi": ["", []],
            "PolyRi": ["", []],
            "SubPoly": ["", []],
            "PartyDebitur": [0, []],
            "InsNo": ["", []],
            "InsExpDate": [null, []],
            "ScvCode": ["", []],
            "ScvPelayanan": ["", []],
            "Balance": [0, []],
            "BalancePhar": [0, []],
            "Deposite": [0, []],
            "TotalCharge": [0, []],
            "TicketCode": ["", []],
            "PayTicketDate": [null, []],
            "OprEntry": [0, []],
            "IsVerifiedCoa": ["", []],
            "IsBirth": ["", []],
            "PayCompleteDate": [null, []],
            "CancelDate": [null, []],
            "SendDate": [null, []],
            "CancelBy": [0, []],
            "CancelReason": ["", []],
            "TransferFrom": ["", []],
            "JenisPelayananId": ["", []],
            "KeterbatasanFisik": [0, []],
            "PpjpEmpId": [0, []],
            "BillProcessDate": [null, []],
            "Catatan": [null, []]
        })
    }

    heandleSelectedMR(arg: any) {
        this.MrNo.setValue(arg.MrNo);
        this.NamaPasien.setValue(arg.Nama);
        this.image = true;
    }

    heandleSelectedPoli(arg: any) {
        this.PolyRi.setValue(arg.PolyCode);
    }

    heandleSelectedDokter(arg: any) {
        this.KodeDokterRj.setValue(arg.KodeDokter);
    }

    heandleSelectedDebitur(arg: any) {
        this.PartyDebitur.setValue(arg.PartyId);
    }

    heandleSelectedPelayanan(arg: any) {
        this.ScvPelayanan.setValue(arg.ScvCode);
    }

    heandleSelectedDiagnosaAwal(arg: any) {
        this.DiagnosaMasuk.setValue(arg.IcdCode);
    }

    get PartyId() { return this.formAdmisiPasien.get("PartyId") }
    get NoRegister() { return this.formAdmisiPasien.get("NoRegister") }
    get MrNo() { return this.formAdmisiPasien.get("MrNo") }
    get NamaPasien() { return this.formAdmisiPasien.get("NamaPasien") }
    get TglMasukRawat() { return this.formAdmisiPasien.get("TglMasukRawat") }
    get PolyRi() { return this.formAdmisiPasien.get("PolyRi") }
    get KodeDokterRj() { return this.formAdmisiPasien.get("KodeDokterRj") }
    get PartyDebitur() { return this.formAdmisiPasien.get("PartyDebitur") }
    get ScvPelayanan() { return this.formAdmisiPasien.get("ScvPelayanan") }
    get FromNoRegister() { return this.formAdmisiPasien.get("FromNoRegister") }
    get ScvCode() { return this.formAdmisiPasien.get("ScvCode") }
    get TicketCode() { return this.formAdmisiPasien.get("TicketCode") }
    get KodeRujukan() { return this.formAdmisiPasien.get("KodeRujukan") }
    get KotaAsalRujukan() { return this.formAdmisiPasien.get("KotaAsalRujukan") }
    get Perujuk() { return this.formAdmisiPasien.get("Perujuk") }
    get DiagnosaMasuk() { return this.formAdmisiPasien.get("DiagnosaMasuk") }
    get Keluhan() { return this.formAdmisiPasien.get("Keluhan") }
    get Catatan() { return this.formAdmisiPasien.get("Catatan") }
    get OprEntry() { return this.formAdmisiPasien.get("OprEntry") }

}
