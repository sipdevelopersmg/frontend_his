import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { IDaftarPasienRawatDaruratAnonimModel } from '../../../models/IRDA/list-pasien-rawat-darurat-anonim.model';
import { IUpdatePasienRawatDaruratAnonimModel } from '../../../models/IRDA/update_pasien_tanpa_identitas.model';
import Config from './json/update-pasien-tanpa-identitas.config.json';
import * as API_ADMISI from '../../../../../api/PIS/IRJA/PELAYANAN_RAWAT_JALAN';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { SetupDebiturService } from '../../../services/setup-data/setup-debitur/setup-debitur.service';
import { DebiturModel } from '../../../models/setup-data/setup-debitur.model';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { UpdatePasienTanpaIdentitasService } from '../../../services/IRDA/update-pasien-tanpa-identitas/update-pasien-tanpa-identitas.service';
import Swal from 'sweetalert2';
import { PendaftaranPasienBaruService } from '../../../services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import { url } from 'inspector';

@Component({
    selector: 'app-update-pasien-tanpa-identitas',
    templateUrl: './update-pasien-tanpa-identitas.component.html',
    styleUrls: ['./update-pasien-tanpa-identitas.component.css']
})
export class UpdatePasienTanpaIdentitasComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    FormUpdateDataPasienAnonim: FormGroup;

    DataPasienAnonim: IDaftarPasienRawatDaruratAnonimModel;

    Config = Config;

    API_ADMISI = API_ADMISI;

    @ViewChild('LookupPasien') LookupPasien: OrgInputLookUpComponent;
    LookupPasienUrl = this.API_ADMISI.POST_GET_PASIEN_FOR_LOOKUP_ADMISI_NON_ANONIM;

    @ViewChild("DebiturPasien") DebiturPasien: DropDownListComponent;
    DebiturPasienDatasource: DebiturModel[];
    DebiturPasienFields: object;

    PhotoPasien: any;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private encryptionService: EncryptionService,
        private setupDebiturService: SetupDebiturService,
        private pendaftaranPasienBaruService: PendaftaranPasienBaruService,
        private updatePasienTanpaIdentitasService: UpdatePasienTanpaIdentitasService
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: 'back', Captions: 'Back', Icons1: 'fa-chevron-left fa-sm' },
            { Id: 'update_pasien', Captions: 'Update Data Pasien', Icons1: 'fa-save fa-sm' },
        ];

        this.onSetFormUpdateDataPasienAnonim();

        this.onCheckActivatedRouteParams();
    }

    onCheckActivatedRouteParams(): void {
        let data = this.activatedRoute.snapshot.params['data'];

        if (data) {
            this.onGetDetailPasienFromListPasienTanpaIdentitas(data);
        };
    }

    onGetDetailPasienFromListPasienTanpaIdentitas(Data: any): void {
        this.DataPasienAnonim = JSON.parse(this.encryptionService.decrypt(Data));

        this.id_register.setValue(this.DataPasienAnonim.id_register);
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'back':
                this.router.navigate(['dashboard/PIS/IRDA/daftar-pasien-rawat-darurat-tanpa-identitas']);
                break;
            case 'update_pasien':
                this.handleSubmitFormUpdateDataPasienAnonim(this.FormUpdateDataPasienAnonim.value);
                break;
            default:
                break;
        }
    }

    onSetFormUpdateDataPasienAnonim(): void {
        this.FormUpdateDataPasienAnonim = this.formBuilder.group({
            id_register: [0, []],
            id_person: [0, []],
            no_rekam_medis: ["", []],
            id_debitur: [0, []]
        });
    }

    handleSelectedLookupPasien(args: any): void {
        this.id_person.setValue(args.id_person);

        this.no_rekam_medis.setValue(args.no_rekam_medis);

        this.onGetAllDebiturPasienByIdPerson(args.id_person);

        this.onFillInformasiPasienAfterLookupPasien(args);

        this.pendaftaranPasienBaruService.onGetLinkFotoPerson(args.id_person, false)
            .subscribe((result) => {
                if (result) {
                    result.data ? this.PhotoPasien = result.data : '../../../../../../assets/image/pendaftaran-ulang-pasien/blank.png';
                }
            });
    }

    onFillInformasiPasienAfterLookupPasien(data: any): void {
        let no_rekam_medis_pasien = document.getElementById("no_rekam_medis_pasien") as HTMLInputElement;
        no_rekam_medis_pasien.value = data.no_rekam_medis;

        let tanggal_lahir_pasien = document.getElementById("tanggal_lahir_pasien") as HTMLInputElement;
        tanggal_lahir_pasien.value = this.utilityService.onFormatDate(data.tanggal_lahir, 'Do MMMM yyyy');

        let alamat_lengkap_pasien = document.getElementById("alamat_lengkap_pasien") as HTMLInputElement;
        alamat_lengkap_pasien.value = `${data.alamat_lengkap}, ${data.kelurahan}`;

        let hand_phone_pasien = document.getElementById("hand_phone_pasien") as HTMLInputElement;
        hand_phone_pasien.value = data.hand_phone;
    }

    onGetAllDebiturPasienByIdPerson(PersonId: number): void {
        this.setupDebiturService.onGetAllByPersonId(PersonId)
            .subscribe((result) => {
                this.DebiturPasienDatasource = result.data;

                this.DebiturPasienFields = { text: 'nama_debitur', value: 'id_debitur' };
            });
    }

    handleChangeDebiturPasien(args: any): void {
        let itemData = args.itemData;

        this.id_debitur.setValue(itemData.id_debitur);
    }

    handleSubmitFormUpdateDataPasienAnonim(FormUpdateDataPasienAnonim: IUpdatePasienRawatDaruratAnonimModel): void {
        Swal.fire({
            title: 'Apakah Anda Yakin?',
            text: "Data yang Telah Diupdate Tidak Dapat Diubah",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya, Saya Yakin',
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {
                this.updatePasienTanpaIdentitasService.onPutUpdateDataPasienRawatDaruratAnonim(FormUpdateDataPasienAnonim)
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', "Data Berhasil Diupdate", 'Menuju Ke Daftar Admisi Pasien Rawat Darurat')
                                .then(() => {
                                    this.onNavigateToDaftarAdmisiPasienRawatDarurat();
                                })
                        }
                    });
            }
        });
    }

    onNavigateToDaftarAdmisiPasienRawatDarurat(): void {
        this.router.navigate(['dashboard/PIS/IRDA/pelayanan-pasien-rawat-darurat']);
    }

    get id_register(): AbstractControl { return this.FormUpdateDataPasienAnonim.get("id_register"); }
    get id_person(): AbstractControl { return this.FormUpdateDataPasienAnonim.get("id_person"); }
    get no_rekam_medis(): AbstractControl { return this.FormUpdateDataPasienAnonim.get("no_rekam_medis"); }
    get id_debitur(): AbstractControl { return this.FormUpdateDataPasienAnonim.get("id_debitur"); }
}
