import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';
import { IPasienTeradmisiHariIniModel, IPersonPasienForAdmisiRawatJalanModel } from '../../../models/IRJA/admisi-pasien-rawat-jalan.model';
import { AdmisiPasienRawatJalanService } from '../../../services/IRJA/admisi-pasien-rawat-jalan/admisi-pasien-rawat-jalan.service';
import * as Config from './json/admisi-pasien-rawat-inap.config.json';

@Component({
    selector: 'app-admisi-pasien-rawat-inap',
    templateUrl: './admisi-pasien-rawat-inap.component.html',
    styleUrls: ['./admisi-pasien-rawat-inap.component.css']
})
export class AdmisiPasienRawatInapComponent implements OnInit {

    GridConfig = Config;

    ButtonNav: ButtonNavModel[];

    modalRef: BsModalRef;
    @ViewChild('modalPencarianPasien') modalPencarianPasien: TemplateRef<any>;

    FormPencarianPasien: FormGroup;

    GridSearchingPasien: MolGridComponent = null;
    GridSearchingPasienDatasource: any[] = [];
    GridSearchingPasienPageSettings: object = { pageSize: 20, pageSizes: true, pageCount: 4 };

    DaftarAdmisiPasien: any[];

    SelectedDaftarAdmisiPasien: IPasienTeradmisiHariIniModel;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private bsModalService: BsModalService,
        private encryptionService: EncryptionService,
        private admisiRawatJalanService: AdmisiPasienRawatJalanService
    ) { }


    @HostListener('document:keydown', ['$event'])
    onKeyDownHandler(event: KeyboardEvent) {
        if (event.keyCode === 114) {
            event.preventDefault();
            this.handleClickButtonNav('input_pasien_baru')
        }

        if (event.keyCode === 116) {
            event.preventDefault();
            this.handleClickButtonNav('pelayanan_pasien_irja');
        }
    }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: "input_pasien_baru", Icons1: 'fa-user-plus', Captions: '[F3] Pasien Baru' },
            { Id: "pelayanan_pasien_irna", Icons1: 'fa-folder-plus', Captions: '[F5] Pelayanan Pasien' },
            { Id: "management_bed_irna", Icons1: 'fa-procedures', Captions: 'Management Bed' },
        ];

        this.FormPencarianPasien = this.formBuilder.group({
            no_identitas: ['', []],
            full_name: ['', []],
            tgl_lahir: ['', []],
            hand_phone: ['', []],
            alamat_lengkap: ['', []],
            kelurahan: ['', []],
        });
    }

    onGetDaftarAdmisi(args: IPasienTeradmisiHariIniModel[]): void {
        this.DaftarAdmisiPasien = args;
    }

    handleClickButtonNav(args: any): void {
        switch (args) {
            case 'input_pasien_baru':
                this.hanldeOpenModalPencarianPasien();
                break;
            case 'pelayanan_pasien_irna':
                this.handleOpenModalPencarianPasienTerdaftarPadaTPPRI();
                break;
            case 'management_bed_irna':
                this.onNavigateToManagementBedRawatInap(this.SelectedDaftarAdmisiPasien);
            default:
                break;
        }
    }

    hanldeOpenModalPencarianPasien(): void {
        this.GridSearchingPasienDatasource = [];

        this.modalRef = this.bsModalService.show(
            this.modalPencarianPasien,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    handleOpenModalPencarianPasienTerdaftarPadaTPPRI(): void {
        Swal.fire({
            icon: 'question',
            title: 'Apakah Pasien Pernah Terdaftar di Antrian TPPRI?',
            text: 'Jikah Sudah, Anda Dapat Melakukan Pencarian Pasien',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Sudah`,
            denyButtonText: `Belum`,
            focusDeny: true,
            customClass: { popup: 'swal-wide' }
        }).then((result) => {
            if (result.isConfirmed) {
                this.router.navigateByUrl('dashboard/PIS/IRNA/pencarian-pasien-rawat-inap');
            } else if (result.isDenied) {
                this.utilityService.onShowingCustomAlert('info', 'Menuju Ke Admisi Pasien Rawat Inap', 'Anda Dapat Melakukan Admisi Rawat Inap', 'swal-wide')
                    .then(() => {
                        this.router.navigateByUrl('dashboard/PIS/IRNA/admisi-pasien-rawat-inap');
                    });
            }
        });
    }

    InitalizedGridLookupPencarianPasien(component: MolGridComponent): void {
        this.GridSearchingPasien = component;
    }

    handleSelectedRowLookupPencarianPasien(args: any): void {

    }

    handleDoubleClickLookupPencarianPasien(args: any): void {

        const data: IPersonPasienForAdmisiRawatJalanModel = args.rowData;

        if (data.sudah_teradmisi) {
            this.utilityService.onShowingCustomAlert('error', 'Oops', `Pasien ${data.full_name} Sudah Teradmisi`);
        } else {
            const Person = this.encryptionService.encrypt(JSON.stringify(data));

            this.handleCloseModalLookupPencarianPasien();

            setTimeout(() => {
                this.router.navigate(['dashboard/PIS/IRNA/admisi-pasien-rawat-inap/', Person, "GRAHCIS"]);
            }, 400);
        }
    }

    handleCariLookupPencarianPasien(FormPencarianPasien: any): void {
        const parameter: PostRequestByDynamicFiterModel[] = [];

        if (FormPencarianPasien.value.full_name != "") {
            parameter.push({
                columnName: "concat(per.nama_depan, ' ',per.nama_belakang)",
                filter: "like",
                searchText: FormPencarianPasien.value.full_name,
                searchText2: ""
            });
        }

        if (FormPencarianPasien.value.alamat_lengkap != "") {
            parameter.push({
                columnName: "ap.alamat_lengkap",
                filter: "like",
                searchText: FormPencarianPasien.value.alamat_lengkap,
                searchText2: ""
            });
        }

        if (FormPencarianPasien.value.tgl_lahir != "") {
            parameter.push({
                columnName: "per.tanggal_lahir",
                filter: "like",
                searchText: FormPencarianPasien.value.tgl_lahir,
                searchText2: ""
            });
        }

        if (FormPencarianPasien.value.hand_phone != "") {
            parameter.push({
                columnName: "kp.hand_phone",
                filter: "like",
                searchText: FormPencarianPasien.value.hand_phone,
                searchText2: ""
            });
        }

        if (FormPencarianPasien.value.kelurahan != "") {
            parameter.push({
                columnName: "ap.kelurahan",
                filter: "like",
                searchText: FormPencarianPasien.value.kelurahan,
                searchText2: ""
            });
        }

        if (FormPencarianPasien.value.no_identitas != "") {
            parameter.push({
                columnName: "per.no_identitas",
                filter: "like",
                searchText: FormPencarianPasien.value.no_identitas,
                searchText2: ""
            });
        }

        this.admisiRawatJalanService.onGetAllPasienForSearching(parameter)
            .subscribe((result) => {
                this.GridSearchingPasienDatasource = result.data;

                // this.DaftarAdmisiPasien.filter((item) => {
                //     let daftar_admisi_index = result.data.map((item) => { return item.no_rekam_medis }).indexOf(item.no_rekam_medis);

                //     return result.data.splice(daftar_admisi_index, 1);
                // })

                // console.log(result.data);
            });
    }

    handleBaruLookupPencarianPasien(): void {
        this.handleCloseModalLookupPencarianPasien();

        setTimeout(() => {
            this.router.navigateByUrl('dashboard/PIS/pendaftaran-pasien-baru');
        }, 200);
    }

    handleCloseModalLookupPencarianPasien(): void {
        this.modalRef.hide();
    }

    handleSelectedRecordListPasienRawatInap(args: IPasienTeradmisiHariIniModel): void {
        this.SelectedDaftarAdmisiPasien = args;
    }

    onNavigateToManagementBedRawatInap(data: IPasienTeradmisiHariIniModel): void {
        if (data) {
            const Person = this.encryptionService.encrypt(JSON.stringify(data));

            this.router.navigate(['dashboard/PIS/IRNA/management-bed-rawat-inap/', Person, "GRAHCIS"]);
        } else {
            this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Data Admisi Belum Dipilih');
        }
    }

    get no_identitas(): AbstractControl { return this.FormPencarianPasien.get('no_identitas') };
    get full_name(): AbstractControl { return this.FormPencarianPasien.get('full_name') };
    get tgl_lahir(): AbstractControl { return this.FormPencarianPasien.get('tgl_lahir') };
    get hand_phone(): AbstractControl { return this.FormPencarianPasien.get('hand_phone') };
    get alamat_lengkap(): AbstractControl { return this.FormPencarianPasien.get('alamat_lengkap') };
    get kelurahan(): AbstractControl { return this.FormPencarianPasien.get('kelurahan') };
}
