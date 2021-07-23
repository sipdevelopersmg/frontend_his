import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'app-pendaftaran-pasien-baru-irna',
    templateUrl: './pendaftaran-pasien-baru-irna.component.html',
    styleUrls: ['./pendaftaran-pasien-baru-irna.component.css']
})
export class PendaftaranPasienBaruIrnaComponent implements OnInit {

    ButtonNav = [
        { Id: 'Save', Captions: 'Simpan', Icons1: 'fa-save' },
    ];

    FormPendaftaranPasienBaru: FormGroup;

    // ** Variable untuk menampung Array of Alamat
    FormAlamats: FormArray;

    // ** Step States digunakan untuk mengatur state di Wizard
    stepStates = {
        normal: STEP_STATE.normal,
        disabled: STEP_STATE.disabled,
        error: STEP_STATE.error,
        hidden: STEP_STATE.hidden
    };

    // ** config untuk mengatur Wizard
    config: NgWizardConfig = {
        selected: 2,
        theme: THEME.dots,
        toolbarSettings: {}
    };

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private ngWizardService: NgWizardService, // !! NgWizardService wajib dideklarasikan
    ) { }

    ngOnInit(): void {
        this.FormPendaftaranPasienBaru = this.formBuilder.group({
            alamat: this.formBuilder.array([this.onCreateAlamatFormGroup()])
        });
    }

    onClickButtonNav(ButtonId: any): void {
        if (ButtonId === 'Save') {
            this.onSubmitPendaftaranPasien();
        }
    }

    onCreateAlamatFormGroup(): FormGroup {
        return this.formBuilder.group({
            alamat_lengkap: ['', []],
            kode_pos: ['', []],
            rt: ['', []],
            rw: ['', []],
            kelurahan: ['', []],
            id_wilayah: ['', []],
            wilayah: ['', []],
        })
    }

    onClickButtonTambahAlamat(): void {
        this.FormAlamats = this.FormPendaftaranPasienBaru.get('alamat') as FormArray;
        this.FormAlamats.push(this.onCreateAlamatFormGroup());
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

    onSubmitPendaftaranPasien(): void {
        this.utilityService.onShowingCustomAlert('success', 'Success', 'Pendaftaran Pasien Berhasil Disimpan')
            .then(() => {
                console.log(this.FormPendaftaranPasienBaru.value);
            });
    }
}
