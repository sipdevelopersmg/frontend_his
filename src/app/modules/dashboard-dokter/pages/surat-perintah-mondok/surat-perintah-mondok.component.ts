import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DaftarPasienService } from '../../services/daftar-pasien/daftar-pasien.service';
import { SuratPerintahMondokService } from '../../services/surat-perintah-mondok/surat-perintah-mondok.service';

@Component({
    selector: 'app-surat-perintah-mondok',
    templateUrl: './surat-perintah-mondok.component.html',
    styleUrls: ['./surat-perintah-mondok.component.css']
})
export class SuratPerintahMondokComponent implements OnInit, AfterViewInit {

    ButtonNav: ButtonNavModel[];

    FormPerintahMondok: FormGroup;

    inputFieldState = "detail";

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        public daftarPasienService: DaftarPasienService,
        private suratPerintahMondokService: SuratPerintahMondokService
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt fa-sm' },
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save fa-sm' },
        ];

        this.onSetFormAttributes();
    }

    ngAfterViewInit(): void {
        this.id_register.setValue(this.daftarPasienService.ActivePasien.value.id_register);
        this.id_dokter_pemberi_perintah_mondok.setValue(this.daftarPasienService.ActivePasien.value.id_dokter);
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Clear':
                this.onResetFormPerintahMondok();
                break;
            case 'SaveAndNew':
                this.onSubmitFormPerintahMondok(this.FormPerintahMondok.value);
                break;
            default:
                break;
        }
    }

    onSetFormAttributes(): void {
        this.FormPerintahMondok = this.formBuilder.group({
            id_register: [0, [Validators.required]],
            id_dokter_pemberi_perintah_mondok: [0, [Validators.required]],
            keterangan_perintah_mondok: ["", []],
        });
    }

    onSubmitFormPerintahMondok(FormPerintahMondok: any): void {
        this.suratPerintahMondokService.onPostSave(FormPerintahMondok)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Surat Perintah Mondok Berhasil Disimpan')
                        .then(() => {
                            this.onResetFormPerintahMondok();
                        })
                }
            })
    }

    onResetFormPerintahMondok(): void {
        this.keterangan_perintah_mondok.setValue("");
    }

    get id_register(): AbstractControl { return this.FormPerintahMondok.get("id_register"); }
    get id_dokter_pemberi_perintah_mondok(): AbstractControl { return this.FormPerintahMondok.get("id_dokter_pemberi_perintah_mondok"); }
    get keterangan_perintah_mondok(): AbstractControl { return this.FormPerintahMondok.get("keterangan_perintah_mondok"); }

}
