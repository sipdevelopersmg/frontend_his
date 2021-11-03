import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as Config from '../json/admisi-pasien-rawat-inap.config.json';
import * as API_CONFIG from '../../../../../../api/PIS';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import Swal from 'sweetalert2';
import { IDaftarPemesananTempatTidurModel } from 'src/app/modules/PIS/models/IRNA/daftar-pemesanan-tempat-tidur.model';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';

@Component({
    selector: 'app-cari-pasien-antrian-tppri',
    templateUrl: './cari-pasien-antrian-tppri.component.html',
    styleUrls: ['./cari-pasien-antrian-tppri.component.css']
})
export class CariPasienAntrianTppriComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    Config = Config;

    API_IRNA = API_CONFIG.API_PIS.IRNA.IRNA;

    @ViewChild('LookupPasien') LookupPasien: OrgLookUpComponent;
    UrlLookupDaftarPasien: string = this.API_IRNA.DAFTAR_ANTRIAN_PEMESANAN_BED.GET_ALL_ANTRIAN_TPPRI_FOR_LOOKUP_ADMISI;

    constructor(
        private router: Router,
        private utilityService: UtilityService,
        private encryptionService: EncryptionService
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' }
        ];
    }

    onClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Back':
                this.router.navigateByUrl('dashboard/PIS/IRNA/pelayanan-pasien-rawat-inap');
                break;
            default:
                break;
        }
    }

    handleClickPencarianNoRekamMedis(NoRekamMedis: string): void {
        // this.transBillingService.onScanNoRegister(NoRegister)
        //     .subscribe((result) => {
        //         if (result.responseResult) {
        //             Swal.fire({
        //                 title: 'Data Pasien Ditemukan',
        //                 text: "Lanjutkan ke Input Transaksi Billing?",
        //                 icon: 'warning',
        //                 showCancelButton: true,
        //                 confirmButtonColor: '#3085d6',
        //                 cancelButtonColor: '#d33',
        //                 confirmButtonText: 'Iya, Lanjutkan',
        //                 cancelButtonText: 'Tidak',
        //             }).then((result) => {
        //                 if (result.isConfirmed) {
        //                     this.onRedirectToInputBillingPasien(NoRegister);
        //                 }
        //             });
        //         } else {
        //             this.utililtyService.onShowingCustomAlert('warning', 'Oops', 'Data Pasien Tidak Ditemukan');
        //         }
        //     })
    }

    handleOpenLookupPasien(): void {
        this.LookupPasien.onOpenModal();
    }

    handleSelectedLookupPasien(args: IDaftarPemesananTempatTidurModel): void {
        let no_rekam_medis = document.getElementById('no_rekam_medis') as HTMLInputElement;
        no_rekam_medis.value = args.no_rekam_medis;

        Swal.fire({
            title: 'Data Pasien Ditemukan',
            text: "Lanjutkan ke Admisi Pasien Rawat Inap?",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya, Lanjutkan',
            cancelButtonText: 'Tidak',
        }).then((result) => {
            if (result.isConfirmed) {
                this.onRedirectToAdmisiPasienRawatInap(args);
            }
        });
    }

    onRedirectToAdmisiPasienRawatInap(args: IDaftarPemesananTempatTidurModel): void {
        let data_encrypted = this.encryptionService.encrypt(JSON.stringify(args));

        this.router.navigate(['dashboard/PIS/IRNA/admisi-pasien-rawat-inap', data_encrypted, 'GRAHCIS']);
    }
}
