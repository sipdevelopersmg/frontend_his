import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { IInformasiPasienModel } from '../../../models/trans-billing/trans-billing.model';

@Component({
    selector: 'app-info-kunjungan-irda',
    templateUrl: './info-kunjungan-irda.component.html',
    styleUrls: ['./info-kunjungan-irda.component.css']
})
export class InfoKunjunganIrdaComponent implements OnInit {

    @Input('InformasiPasien') InformasiPasien: IInformasiPasienModel;

    FormInfoKunjungan: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.onSetFormInfoKunjunganAttributes();
    }

    onSetFormInfoKunjunganAttributes(): void {
        this.FormInfoKunjungan = this.formBuilder.group({
            no_register: ['', []],
            tgl_masuk: ['', []],
            tgl_pulang: ['', []],
            tipe_pasien: ['', []],
            nama_poli: ['', []],
        });
    }

    handleOpenInfoKunjungan(): void {
        let btnModalInfoKunjungan = document.getElementById('btnModalInfoKunjungan') as HTMLElement;
        btnModalInfoKunjungan.click();

        setTimeout(() => {
            this.onFillFormInfoKunjungan();
        }, 500);
    }

    onFillFormInfoKunjungan(): void {
        this.no_register.setValue(this.InformasiPasien.no_register);
    }

    handleCloseInfoKunjungan(): void {
        let btnCloseInfoKunjungan = document.getElementById('btnCloseInfoKunjungan') as HTMLElement;
        btnCloseInfoKunjungan.click();
    }

    get no_register(): AbstractControl { return this.FormInfoKunjungan.get("no_register"); }
    get tgl_masuk(): AbstractControl { return this.FormInfoKunjungan.get("tgl_masuk"); }
    get tgl_pulang(): AbstractControl { return this.FormInfoKunjungan.get("tgl_pulang"); }
    get tipe_pasien(): AbstractControl { return this.FormInfoKunjungan.get("tipe_pasien"); }
    get nama_poli(): AbstractControl { return this.FormInfoKunjungan.get("nama_poli"); }
}
