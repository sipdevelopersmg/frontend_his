import { Component, OnInit, ViewChild } from '@angular/core';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { TransBillingService } from '../../../services/trans-billing/trans-billing.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { TransBillingRawatDaruratService } from '../../../services/trans-billing-rawat-darurat/trans-billing-rawat-darurat.service';
import * as Config from '../json/transaksi-billing.config.json';
import * as API_CONFIG from '../../../../../api/BILLING';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-scanning',
    templateUrl: './scanning.component.html',
    styleUrls: ['./scanning.component.css']
})
export class ScanningComponent implements OnInit {

    Config = Config;

    API_TRANS_BILLING = API_CONFIG.API_BILLING;

    @ViewChild('LookupPasien') LookupPasien: OrgLookUpComponent;
    UrlLookupDaftarPasien: string;

    ScanningBillingState: string;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private utililtyService: UtilityService,
        private encryptionService: EncryptionService,
        private transBillingService: TransBillingService,
        private transBillingRawatDaruratService: TransBillingRawatDaruratService
    ) { }

    ngOnInit(): void {
        this.onCheckJenisRawat();
    }

    onCheckJenisRawat(): void {
        let activated_route = this.activatedRoute.snapshot.url[0].path;

        switch (activated_route) {
            case 'scan-billing-pasien-rawat-darurat':
                this.ScanningBillingState = "IRDA";
                this.UrlLookupDaftarPasien = this.API_TRANS_BILLING.TRANS_BILLING_IRDA.POST_GET_DATA_PASIEN_FOR_LOOKUP;
                break;
            case 'scan-billing-pasien-rawat-inap':
                this.ScanningBillingState = "IRNA";
                break;
            case 'scan-billing-pasien-rawat-jalan':
                this.ScanningBillingState = "IRJA";
                this.UrlLookupDaftarPasien = this.API_TRANS_BILLING.TRANS_BILLING.POST_GET_DATA_PASIEN_FOR_LOOKUP;
                break;
            default:
                break;
        };
    }

    handleClickPencarianNoRegister(NoRegister: string): void {
        switch (this.ScanningBillingState) {
            case 'IRJA':
                this.onScanNoRegisterIRJA(NoRegister);
                break;
            case 'IRNA':
                this.onScanNoRegisterIRNA(NoRegister);
                break;
            case 'IRDA':
                this.onScanNoRegisterIRDA(NoRegister);
                break;
            default:
                break;
        }
    }

    onScanNoRegisterIRJA(NoRegister: string): void {
        this.transBillingService.onScanNoRegister(NoRegister)
            .subscribe((result) => {
                if (result.responseResult) {
                    Swal.fire({
                        title: 'Data Pasien Ditemukan',
                        text: "Lanjutkan ke Input Transaksi Billing?",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Iya, Lanjutkan',
                        cancelButtonText: 'Tidak',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            let url_billing_irja = 'dashboard/Billing/transaksi-billing-rawat-jalan/input-billing-pasien';

                            this.onRedirectToInputBillingPasien(NoRegister, url_billing_irja);
                        }
                    });
                } else {
                    this.utililtyService.onShowingCustomAlert('warning', 'Oops', 'Data Pasien Tidak Ditemukan');
                }
            })
    }

    onScanNoRegisterIRNA(NoRegister: string): void {
        this.transBillingService.onScanNoRegister(NoRegister)
            .subscribe((result) => {
                if (result.responseResult) {
                    Swal.fire({
                        title: 'Data Pasien Ditemukan',
                        text: "Lanjutkan ke Input Transaksi Billing?",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Iya, Lanjutkan',
                        cancelButtonText: 'Tidak',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            let url_billing_irna = 'dashboard/Billing/transaksi-billing-rawat-inap/input-billing-pasien';

                            this.onRedirectToInputBillingPasien(NoRegister, url_billing_irna);
                        }
                    });
                } else {
                    this.utililtyService.onShowingCustomAlert('warning', 'Oops', 'Data Pasien Tidak Ditemukan');
                }
            })
    }

    onScanNoRegisterIRDA(NoRegister: string): void {
        this.transBillingRawatDaruratService.onScanNoRegister(NoRegister)
            .subscribe((result) => {
                if (result.responseResult) {
                    Swal.fire({
                        title: 'Data Pasien Ditemukan',
                        text: "Lanjutkan ke Input Transaksi Billing?",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Iya, Lanjutkan',
                        cancelButtonText: 'Tidak',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            let url_billing_irda = 'dashboard/Billing/transaksi-billing-rawat-darurat/input-billing-pasien';

                            this.onRedirectToInputBillingPasien(NoRegister, url_billing_irda);
                        }
                    });
                } else {
                    this.utililtyService.onShowingCustomAlert('warning', 'Oops', 'Data Pasien Tidak Ditemukan');
                }
            })
    }

    handleOpenLookupPasien(): void {
        this.LookupPasien.onOpenModal();
    }

    handleSelectedLookupPasien(args: any): void {
        let no_register = document.getElementById('no_register') as HTMLInputElement;
        no_register.value = args.no_register;

        Swal.fire({
            title: 'Data Pasien Ditemukan',
            text: "Lanjutkan ke Input Transaksi Billing?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya, Lanjutkan',
            cancelButtonText: 'Tidak',
        }).then((result) => {
            if (result.isConfirmed) {

                let url = "";

                switch (this.ScanningBillingState) {
                    case 'IRJA':
                        url = 'dashboard/Billing/transaksi-billing-rawat-jalan/input-billing-pasien';
                        break;
                    case 'IRNA':
                        url = 'dashboard/Billing/transaksi-billing-rawat-inap/input-billing-pasien';
                        break;
                    case 'IRDA':
                        url = 'dashboard/Billing/transaksi-billing-rawat-darurat/input-billing-pasien';
                        break;
                    default:
                        break;
                }

                this.onRedirectToInputBillingPasien(args.no_register, url);
            }
        });
    }

    onRedirectToInputBillingPasien(NoRegister: string, Url: string): void {
        let data_encrypted = this.encryptionService.encrypt(NoRegister);

        this.router.navigate([Url, data_encrypted, 'GRAHCIS']);
    }
}
