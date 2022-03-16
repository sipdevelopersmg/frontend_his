import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAntrianRegulerPemesananBedModel } from 'src/app/modules/PIS/models/IRNA/antrian-reguler-pemesanan-bed.model';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import * as API_CONFIG from '../../../../../../../api/PIS/IRNA';
import Config from '../../json/antrian-reguler-rawat-inap.config.json';

@Component({
    selector: 'app-dialog-update-status-terjadwal',
    templateUrl: './dialog-update-status-terjadwal.component.html',
    styleUrls: ['./dialog-update-status-terjadwal.component.css']
})
export class DialogUpdateStatusTerjadwalComponent implements OnInit {

    @Input('InformasiPasien') InformasiPasien: IAntrianRegulerPemesananBedModel;

    API_CONFIG = API_CONFIG;

    Config = Config;

    @ViewChild('LookupPasien') LookupPasien: OrgInputLookUpComponent;
    UrlLookupPasien = this.API_CONFIG.IRNA.DAFTAR_ANTRIAN_PEMESANAN_BED.GET_ALL_PASIEN_FOR_LOOKUP_ANTRIAN_TPPRI;

    FormUpdateStatus: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.FormUpdateStatus = this.formBuilder.group({
            id_person: [0, [Validators.required]],
            id_debitur: [0, [Validators.required]],
            no_rekam_medis: ['', []],
            id_kelas_request: [0, [Validators.required]],
            tanggal_rencana_masuk: ["", []],
            id_register_rencana_pulang: [0, []]
        });
    }

    handleOpenModalDialog(): void {
        const btnOpenModalUpdateStatusTerjadwal = document.getElementById('btnOpenModalUpdateStatusTerjadwal') as HTMLElement;
        btnOpenModalUpdateStatusTerjadwal.click();
    }

    handleCloseModalDialog(): void {
        let btnCloseUpdateStatusTerjadwal = document.getElementById("btnCloseUpdateStatusTerjadwal") as HTMLElement;
        btnCloseUpdateStatusTerjadwal.click();
    }

    handleSelectedLookupPasienRencanaPulang(args: any): void {
        console.log(args);
    }

    handleSubmitUpdateStatusAntrianTerjadwal(FormUpdateStatus: any): void {
        console.log(FormUpdateStatus);
    }

    get id_person(): AbstractControl { return this.FormUpdateStatus.get("id_person"); }
    get no_rekam_medis(): AbstractControl { return this.FormUpdateStatus.get("no_rekam_medis"); }
    get id_debitur(): AbstractControl { return this.FormUpdateStatus.get("id_debitur"); }
    get id_kelas_request(): AbstractControl { return this.FormUpdateStatus.get("id_kelas_request"); }
    get tanggal_rencana_masuk(): AbstractControl { return this.FormUpdateStatus.get("tanggal_rencana_masuk"); }
    get id_register_akan_pulang(): AbstractControl { return this.FormUpdateStatus.get("id_register_akan_pulang"); }
}
