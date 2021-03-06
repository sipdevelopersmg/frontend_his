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
import { TransBillingRawatInapService } from '../../../services/trans-billing-rawat-inap/trans-billing-rawat-inap.service';

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
        private transBillingRawatInapService: TransBillingRawatInapService,
        private transBillingRawatDaruratService: TransBillingRawatDaruratService
    ) { }

    ngOnInit(): void {
        this.onCheckJenisRawat();
    }

    onCheckJenisRawat(): void {
        const activatedRoute = this.activatedRoute.snapshot.url[0].path;

        switch (activatedRoute) {
            case 'scan-billing-pasien-rawat-darurat':
                this.ScanningBillingState = 'IRDA';
                this.UrlLookupDaftarPasien = this.API_TRANS_BILLING.TRANS_BILLING_IRDA.POST_GET_DATA_PASIEN_FOR_LOOKUP;
                break;
            case 'scan-billing-pasien-rawat-inap':
                this.ScanningBillingState = 'IRNA';
                this.UrlLookupDaftarPasien = this.API_TRANS_BILLING.TRANS_BILLING_IRNA.POST_GET_DATA_PASIEN_FOR_LOOKUP;
                break;
            case 'scan-billing-pasien-rawat-jalan':
                this.ScanningBillingState = 'IRJA';
                this.UrlLookupDaftarPasien = this.API_TRANS_BILLING.TRANS_BILLING.POST_GET_DATA_PASIEN_FOR_LOOKUP;
                break;
            default:
                break;
        }
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
                        text: 'Lanjutkan ke Input Transaksi Billing?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Iya, Lanjutkan',
                        cancelButtonText: 'Tidak',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            const urlBillingIrja = 'dashboard/Billing/transaksi-billing-rawat-jalan/input-billing-pasien';

                            this.onRedirectToInputBillingPasien(NoRegister, urlBillingIrja);
                        }
                    });
                } else {
                    this.utililtyService.onShowingCustomAlert('warning', 'Oops', 'Data Pasien Tidak Ditemukan');
                }
            })
    }

    onScanNoRegisterIRNA(NoRegister: string): void {
        this.transBillingRawatInapService.onScanNoRegister(NoRegister)
            .subscribe((result) => {
                if (result.responseResult) {
                    Swal.fire({
                        title: 'Data Pasien Ditemukan',
                        text: 'Lanjutkan ke Input Transaksi Billing?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Iya, Lanjutkan',
                        cancelButtonText: 'Tidak',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            const urlBillingIrda = 'dashboard/Billing/transaksi-billing-rawat-inap/input-billing-pasien';

                            this.onRedirectToInputBillingPasien(NoRegister, urlBillingIrda);
                        }
                    });
                } else {
                    this.utililtyService.onShowingCustomAlert('warning', 'Oops', 'Data Pasien Tidak Ditemukan');
                }
            });
    }

    onScanNoRegisterIRDA(NoRegister: string): void {
        this.transBillingRawatDaruratService.onScanNoRegister(NoRegister)
            .subscribe((result) => {
                if (result.responseResult) {
                    Swal.fire({
                        title: 'Data Pasien Ditemukan',
                        text: 'Lanjutkan ke Input Transaksi Billing?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Iya, Lanjutkan',
                        cancelButtonText: 'Tidak',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            const urlBillingIrda = 'dashboard/Billing/transaksi-billing-rawat-darurat/input-billing-pasien';

                            this.onRedirectToInputBillingPasien(NoRegister, urlBillingIrda);
                        }
                    });
                } else {
                    this.utililtyService.onShowingCustomAlert('warning', 'Oops', 'Data Pasien Tidak Ditemukan');
                }
            });
    }

    handleOpenLookupPasien(): void {
        this.LookupPasien.onOpenModal();
    }

    handleSelectedLookupPasien(args: any): void {
        const noRegister = document.getElementById('no_register') as HTMLInputElement;
        noRegister.value = args.no_register;

        Swal.fire({
            title: 'Data Pasien Ditemukan',
            text: 'Lanjutkan ke Input Transaksi Billing?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya, Lanjutkan',
            cancelButtonText: 'Tidak',
        }).then((result) => {
            if (result.isConfirmed) {

                let url = '';

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
        const dataEncrypted = this.encryptionService.encrypt(NoRegister);

        this.router.navigate([Url, dataEncrypted, 'GRAHCIS']);
    }
}
