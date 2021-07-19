import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DataPendaftaranUlangPasienModel, PendaftaranUlangPasienService } from '../../../services/IRJA/pendaftaran-ulang-pasien/pendaftaran-ulang-pasien.service';

@Component({
    selector: 'app-daftar-ulang-pasien',
    templateUrl: './daftar-ulang-pasien.component.html',
    styleUrls: ['./daftar-ulang-pasien.component.css']
})
export class DaftarUlangPasienComponent implements OnInit {

    FormDaftarUlangPasien: FormGroup;

    @ViewChild("NoAntrianField") NoAntrianField: ElementRef;

    constructor(
        private datePipe: DatePipe,
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private pendaftaranUlangPasienService: PendaftaranUlangPasienService
    ) {
        this.FormDaftarUlangPasien = this.formBuilder.group({
            NoTransaksi: ["", []],
            MrNo: ["", []],
            NamaPasien: ["", []],
            Alamat: ["", []],
            NamaDokter: ["", []],
            Specialist: ["", []],
            NoAntrian: ["", []],
            WaktuDaftar: ["", []],
        });
    }

    ngOnInit(): void { }

    onGetDataPasienByNoAntrian(NoAntrian: string) {
        console.log(NoAntrian);

        this.pendaftaranUlangPasienService.onGetDataPasienByNoAntrian(NoAntrian)
            .subscribe((_result: DataPendaftaranUlangPasienModel) => {
                this.MrNo.setValue(_result.MrNo);
                this.NamaPasien.setValue(_result.NamaPasien);
                this.Alamat.setValue(_result.Alamat);
                this.NamaDokter.setValue(_result.NamaDokter);
                this.Specialist.setValue(_result.Specialist);
                this.NoAntrian.setValue(_result.NoAntrian);
                this.WaktuDaftar.setValue(this.datePipe.transform(_result.WaktuDaftar, "dd MMMM yyyy, HH:mm:ss"));
            })
    }

    onKonfirmasiDaftarUlang(FormDaftarUlangPasien: DataPendaftaranUlangPasienModel) {
        this.pendaftaranUlangPasienService.onKonfirmasiPendaftaranUlang(FormDaftarUlangPasien.MrNo)
            .subscribe(
                (_result) => {
                    this.utilityService.onShowingCustomAlert("success", "Success", "Pendaftaran Ulang Berhasil")
                }, (error) => {
                    this.utilityService.onShowingCustomAlert("error", "Oops...", "Something Went Wrong")
                }, () => {
                    this.FormDaftarUlangPasien.reset();

                    this.NoAntrianField.nativeElement.value = "";
                }
            )
    }

    get NoTransaksi() { return this.FormDaftarUlangPasien.get("NoTransaksi") };
    get MrNo() { return this.FormDaftarUlangPasien.get("MrNo") };
    get NamaPasien() { return this.FormDaftarUlangPasien.get("NamaPasien") };
    get Alamat() { return this.FormDaftarUlangPasien.get("Alamat") };
    get NamaDokter() { return this.FormDaftarUlangPasien.get("NamaDokter") };
    get Specialist() { return this.FormDaftarUlangPasien.get("Specialist") };
    get NoAntrian() { return this.FormDaftarUlangPasien.get("NoAntrian") };
    get WaktuDaftar() { return this.FormDaftarUlangPasien.get("WaktuDaftar") };
}
