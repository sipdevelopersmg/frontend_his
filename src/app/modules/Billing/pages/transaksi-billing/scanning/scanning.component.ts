import { Component, OnInit, ViewChild } from '@angular/core';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import * as Config from '../json/transaksi-billing.config.json';
import * as API_CONFIG from '../../../../../api/BILLING';
import { TransBillingService } from '../../../services/trans-billing/trans-billing.service';
import Swal from 'sweetalert2';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Router } from '@angular/router';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';

@Component({
    selector: 'app-scanning',
    templateUrl: './scanning.component.html',
    styleUrls: ['./scanning.component.css']
})
export class ScanningComponent implements OnInit {

    Config = Config;

    API_TRANS_BILLING = API_CONFIG.API_BILLING.TRANS_BILLING;

    @ViewChild('LookupPasien') LookupPasien: OrgLookUpComponent;
    UrlLookupDaftarPasien = this.API_TRANS_BILLING.POST_GET_DATA_PASIEN_FOR_LOOKUP;

    constructor(
        private router: Router,
        private utililtyService: UtilityService,
        private encryptionService: EncryptionService,
        private transBillingService: TransBillingService,
    ) { }

    ngOnInit(): void {
    }

    handleClickPencarianNoRegister(NoRegister: string): void {
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
                            this.onRedirectToInputBillingPasien(NoRegister);
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
                this.onRedirectToInputBillingPasien(args.no_register);
            }
        });
    }

    onRedirectToInputBillingPasien(NoRegister: string): void {
        let data_encrypted = this.encryptionService.encrypt(NoRegister);

        this.router.navigate(['dashboard/Billing/transaksi-billing/input-billing-pasien', data_encrypted, 'GRAHCIS']);
    }
}
