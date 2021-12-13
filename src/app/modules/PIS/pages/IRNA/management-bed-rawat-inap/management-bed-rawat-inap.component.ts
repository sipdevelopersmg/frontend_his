import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditSettingsModel } from '@syncfusion/ej2-grids';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { IPasienTeradmisiHariIniModel } from '../../../models/IRJA/admisi-pasien-rawat-jalan.model';
import { PendaftaranPasienBaruService } from '../../../services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import * as Config from './json/management-bed-rawat-inap.config.json';
import * as API_CONFIG from '../../../../../api/PIS/IRNA';
import { ManagementBedRawatInapService } from '../../../services/IRNA/management-bed-rawat-inap/management-bed-rawat-inap.service';
import { AddPermintaanMutasiComponent } from './add-permintaan-mutasi/add-permintaan-mutasi.component';
import { BatalkanPermintaanMutasiComponent } from './batalkan-permintaan-mutasi/batalkan-permintaan-mutasi.component';
import Swal from 'sweetalert2';
import { ApprovePermintaanMutasiComponent } from './approve-permintaan-mutasi/approve-permintaan-mutasi.component';
import { IApproveRequestMutasiModel, IBatalkanMutasiModel, IGetDaftarMutasiBedModel } from '../../../models/IRNA/management_bed_rawat_inap.model';
import { AdmisiPasienRawatInapService } from '../../../services/IRNA/admisi-pasien-rawat-inap/admisi-pasien-rawat-inap.service';
import { Location } from '@angular/common';
import { BatalkanMutasiComponent } from './batalkan-mutasi/batalkan-mutasi.component';

@Component({
    selector: 'app-management-bed-rawat-inap',
    templateUrl: './management-bed-rawat-inap.component.html',
    styleUrls: ['./management-bed-rawat-inap.component.css']
})
export class ManagementBedRawatInapComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    FormManagementBed: FormGroup;

    PhotoPasien: any;

    screenWidth: any;

    InformasiPasienDivClass: string;

    GridConfig = Config;

    GridDaftarPermintaan: MolGridComponent = null;
    GridDaftarPermintaanDatasource: any[];
    GridDaftarPermintaanEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDaftarPermintaanToolbar: any[];
    GridSelectedData: any;

    GridDaftarMutasi: MolGridComponent = null;
    GridDaftarMutasiDatasource: IGetDaftarMutasiBedModel[];
    GridDaftarMutasiEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDaftarMutasiToolbar: any[];
    GridDaftarMutasiSelectedData: IGetDaftarMutasiBedModel;

    API_CONFIG = API_CONFIG;

    @ViewChild('AddPermintaanMutasi') AddPermintaanMutasi: AddPermintaanMutasiComponent;
    FormPermintaanMutasiBedAdditionalInfo: any;

    @ViewChild('BatalkanPermintaanMutasiBed') BatalkanPermintaanMutasiBed: BatalkanPermintaanMutasiComponent;
    TransferBedId: number;

    @ViewChild('ApprovePermintaanMutasiBed') ApprovePermintaanMutasiBed: ApprovePermintaanMutasiComponent;
    FormApprovePermintaanMutasiAdditionalInfo: any;

    @ViewChild('BatalkanMutasiBed') BatalkanMutasiBed: BatalkanMutasiComponent;
    FormPembatalanMutasiAdditionalInfo: IBatalkanMutasiModel;

    @HostListener("window:resize", ['$event'])
    private onResize(event: any) {
        this.onDetectScreenSize(event.srcElement.innerWidth);
    }

    constructor(
        private router: Router,
        private location: Location,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private encryptionService: EncryptionService,
        private admisiRawatInapService: AdmisiPasienRawatInapService,
        private pendaftaranPasienBaruService: PendaftaranPasienBaruService,
        private managementBedRawatInapService: ManagementBedRawatInapService,
    ) { }

    ngOnInit(): void {
        this.onDetectScreenSize(window.innerWidth);

        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
            { Id: 'Refresh', Captions: 'Refresh', Icons1: 'fa-redo-alt' },
            { Id: 'Permintaan_Mutasi', Captions: 'Permintaan Mutasi', Icons1: 'fa-envelope-open-text' },
        ];

        this.onSetFormManagementBedAttributes();

        this.onGetDetailAdmisiPasien();

        this.GridDaftarPermintaanToolbar = [
            { text: 'Approve Permintaan Mutasi Bed', tooltipText: 'Approve Permintaan Mutasi Bed', prefixIcon: 'fas fa-check fa-sm', id: 'approve' },
            { text: 'Cetak Bukti Mutasi Bed', tooltipText: 'Cetak Bukti Mutasi Bed', prefixIcon: 'fas fa-print fa-sm', id: 'cetak' },
            { text: 'Batalkan Permintaan Mutasi Bed', tooltipText: 'Batalkan Permintaan Mutasi Bed', prefixIcon: 'fas fa-ban fa-sm', id: 'batalkan' },
            "Search"
        ];

        this.GridDaftarMutasiToolbar = [
            { text: 'Batalkan Mutasi Bed', tooltipText: 'Batalkan Mutasi Bed', prefixIcon: 'fas fa-ban fa-sm', id: 'batalkan_mutasi' },
            "Search"
        ];
    }

    onDetectScreenSize(screenWidth: any): void {
        this.screenWidth = screenWidth;

        this.InformasiPasienDivClass = screenWidth >= 1920 ? 'col-lg-2 col-md-2 col-sm-2 col-xs-2' : 'col-lg-3 col-md-3 col-sm-3 col-xs-3';
    }

    onClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Back':
                this.router.navigateByUrl('dashboard/PIS/IRNA/pelayanan-pasien-rawat-inap');
                break;
            case 'Refresh':
                this.onGetDetailAdmisiPasien();
                break;
            case 'Permintaan_Mutasi':
                this.AddPermintaanMutasi.handleOpenModalPermintaanMutasi();
                break;
            default:
                break;
        }
    }

    onGetDetailAdmisiPasien(): void {
        if (this.activatedRoute.snapshot.params['id']) {
            let id_register = JSON.parse(this.encryptionService.decrypt(this.activatedRoute.snapshot.params['id']));

            this.admisiRawatInapService.onGetAdmisiPasienRawatInapByIdRegister(id_register)
                .subscribe((result) => {
                    if (result) {
                        this.id_person.setValue(result.data['id_person']);
                        this.id_register.setValue(result.data['id_register']);
                        this.nama_pasien.setValue(result.data.nama_pasien);
                        this.no_rekam_medis.setValue(result.data.no_rekam_medis);
                        this.no_register.setValue(result.data.no_register);
                        this.gender.setValue(result.data.gender);
                        this.umur.setValue(result.data.umur);
                        this.tgl_admisi.setValue(result.data.tgl_admisi);
                        this.nama_debitur.setValue(result.data.nama_debitur);
                        this.id_setup_room.setValue(result.data['id_setup_room']);
                        this.room_no.setValue(result.data['room_no']);
                        this.id_setup_bed_room.setValue(result.data['id_setup_bed_room']);
                        this.bed_no.setValue(result.data['bed_no']);
                        this.nama_poli.setValue(result.data.nama_poli);
                        this.nama_kelas.setValue(result.data['nama_kelas']);

                        this.FormPermintaanMutasiBedAdditionalInfo = this.FormManagementBed.value;

                        this.pendaftaranPasienBaruService.onGetLinkFotoPerson(result.data['id_person'], false)
                            .subscribe((result) => {
                                this.PhotoPasien = result.data;
                            });
                    }
                });

            this.onGetDaftarPermintaanMutasiBedByIdRegister(id_register);

            this.onGetDaftarMutasiBedByIdRegister(id_register);
        }
    }

    onSetFormManagementBedAttributes(): void {
        this.FormManagementBed = this.formBuilder.group({
            id_person: [0, []],
            id_register: [0, []],
            nama_pasien: ['', []],
            no_rekam_medis: ['', []],
            no_register: ['', []],
            gender: ['', []],
            umur: ['', []],
            tgl_admisi: ['', []],
            nama_debitur: ['', []],
            id_setup_room: [0, []],
            room_no: ['', []],
            id_setup_bed_room: [0, []],
            bed_no: ['', []],
            nama_poli: ['', []],
            nama_kelas: ['', []],
        });
    }

    onGetDaftarPermintaanMutasiBedByIdRegister(id_register: number): void {
        this.managementBedRawatInapService.onGetDaftarPermintaanMutasiBedByIdRegister(id_register)
            .subscribe((result) => {
                this.GridDaftarPermintaanDatasource = result.data;
            });
    }

    onGetDaftarMutasiBedByIdRegister(id_register: number): void {
        this.managementBedRawatInapService.onGetDaftarMutasiBedByIdRegister(id_register)
            .subscribe((result) => {
                this.GridDaftarMutasiDatasource = result.data;
            });
    }

    handleSelectedTabId(TabId: string): void {
        // console.log(TabId);
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridDaftarPermintaan = component;

        this.GridDaftarMutasi = component;
    }

    handleSelectedRowDaftarPermintaan(args: any): void {
        this.GridSelectedData = args.data;

        this.TransferBedId = this.GridSelectedData.id_bed_transfer;

        let additional_info = {
            nomor_bed_transfer: this.GridSelectedData['nomor_bed_transfer'],
            id_register: this.GridSelectedData['id_register'],
            id_bed_transfer: this.GridSelectedData['id_bed_transfer'],
            id_poli_tujuan: this.GridSelectedData['id_poli_tujuan'],
            id_kelas_tujuan: this.GridSelectedData['id_kelas_tujuan'],
            id_setup_room_asal: this.GridSelectedData['id_setup_room_asal'],
            id_setup_bed_room_asal: this.GridSelectedData['id_setup_bed_room_asal'],
            id_setup_room_tujuan: this.GridSelectedData['id_setup_room_tujuan'],
            id_setup_bed_room_tujuan: this.GridSelectedData['id_setup_bed_room_tujuan'],
            tanggal_bed_request: this.GridSelectedData['tanggal_bed_request_datetime'],
        };

        this.FormApprovePermintaanMutasiAdditionalInfo = additional_info;
    }

    handleToolbarClickDaftarPermintaan(args: any): void {
        let id = args.item.id;

        switch (id) {
            case 'batalkan':
                if (this.TransferBedId > 0) {
                    this.BatalkanPermintaanMutasiBed.handleOpenModalPembatalanRequestMutasi();
                } else {
                    this.utilityService.onShowingCustomAlert('error', 'Oops', 'Belum Ada Data Permintaan Mutasi Bed yang Dipilih');
                }
                break;
            case 'approve':
                if (this.GridSelectedData) {
                    this.ApprovePermintaanMutasiBed.handleOpenModalApproveRequestMutasi();
                } else {
                    this.utilityService.onShowingCustomAlert('error', 'Oops', 'Belum Ada Data Permintaan Mutasi Bed yang Dipilih');
                }
                break;
            default:
                break;
        }
    }

    handleSelectedRowDaftarMutasi(args: any): void {
        this.GridDaftarMutasiSelectedData = args.data;

        let additional_info: IBatalkanMutasiModel = {
            id_bed_history: this.GridDaftarMutasiSelectedData.id_bed_history,
            id_register: this.GridDaftarMutasiSelectedData.id_register,
            id_kelas_tujuan: this.GridDaftarMutasiSelectedData.id_kelas,
            id_poli_tujuan: this.GridDaftarMutasiSelectedData.id_poli,
            id_setup_room_tujuan: this.GridDaftarMutasiSelectedData.id_setup_room,
            id_setup_bed_room_tujuan: this.GridDaftarMutasiSelectedData.id_setup_bed_room,
            tgl_masuk_dibatalkan: this.GridDaftarMutasiSelectedData.tgl_masuk_timestamp,
        };

        this.FormPembatalanMutasiAdditionalInfo = additional_info;
    }

    handleToolbarClickDaftarMutasi(args: any): void {
        let id = args.item.id;

        if (id == "batalkan_mutasi") {
            this.BatalkanMutasiBed.handleOpenModalPembatalanRequestMutasi();
        };
    }

    handleSubmitPermintaanMutasi(FormPermintaanMutasiBed: any): void {
        this.managementBedRawatInapService.onPostSaveRequestMutasiBed(FormPermintaanMutasiBed)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Berhasil Disimpan')
                        .then(() => {
                            this.AddPermintaanMutasi.handleCloseModalPermintaanMutasi();

                            this.onGetDaftarPermintaanMutasiBedByIdRegister(FormPermintaanMutasiBed.id_register);
                        });
                }
            });
    }

    handleBatalkanPermintaanMutasiBed(FormPembatalanRequestMutasiBed: any): void {
        Swal.fire({
            icon: 'warning',
            title: 'Apakah Anda Yakin?',
            text: 'Data yang Dibatalkan Tidak Dapat Dikembalikan',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Yes`,
            denyButtonText: `Tidak, Kembali`,
            focusDeny: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.managementBedRawatInapService.onPostCancelRequestMutasiBed(FormPembatalanRequestMutasiBed.id_bed_transfer, FormPembatalanRequestMutasiBed.reason_canceled)
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', 'Success', 'Request Mutasi Bed Berhasil Dibatalkan')
                                .then(() => {
                                    this.BatalkanPermintaanMutasiBed.handleCloseModalPembatalanRequestMutasi();

                                    this.onGetDetailAdmisiPasien();
                                });
                        }
                    });
            }
        });
    }

    handleApprovePermintaanMutasiBed(FormApproveMutasiBed: IApproveRequestMutasiModel): void {
        this.managementBedRawatInapService.onPostApproveRequestMutasiBed(FormApproveMutasiBed)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Permintaan Mutasi Bed Berhasil Approve')
                        .then(() => {
                            this.ApprovePermintaanMutasiBed.handleCloseModalApproveRequestMutasi();

                            this.onGetDetailAdmisiPasien();
                        });
                }
            });
    }

    handleBatalkanMutasiBed(FormBatalkanMutasi: any): void {
        Swal.fire({
            icon: 'warning',
            title: 'Apakah Anda Yakin?',
            text: 'Data yang Dibatalkan Tidak Dapat Dikembalikan',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Yes`,
            denyButtonText: `Tidak, Kembali`,
            focusDeny: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.managementBedRawatInapService.onPostCancelMutasiBed(FormBatalkanMutasi)
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', 'Success', 'Mutasi Bed Berhasil Dibatalkan')
                                .then(() => {
                                    this.BatalkanMutasiBed.handleCloseModalPembatalanMutasi();

                                    this.onGetDetailAdmisiPasien();
                                });
                        }
                    });
            }
        });
    }

    get id_person(): AbstractControl { return this.FormManagementBed.get("id_person"); }
    get id_register(): AbstractControl { return this.FormManagementBed.get("id_register"); }
    get nama_pasien(): AbstractControl { return this.FormManagementBed.get("nama_pasien"); }
    get no_rekam_medis(): AbstractControl { return this.FormManagementBed.get("no_rekam_medis"); }
    get no_register(): AbstractControl { return this.FormManagementBed.get("no_register"); }
    get gender(): AbstractControl { return this.FormManagementBed.get("gender"); }
    get umur(): AbstractControl { return this.FormManagementBed.get("umur"); }
    get tgl_admisi(): AbstractControl { return this.FormManagementBed.get("tgl_admisi"); }
    get nama_debitur(): AbstractControl { return this.FormManagementBed.get("nama_debitur"); }
    get id_setup_room(): AbstractControl { return this.FormManagementBed.get("id_setup_room"); }
    get room_no(): AbstractControl { return this.FormManagementBed.get("room_no"); }
    get id_setup_bed_room(): AbstractControl { return this.FormManagementBed.get("id_setup_bed_room"); }
    get bed_no(): AbstractControl { return this.FormManagementBed.get("bed_no"); }
    get nama_poli(): AbstractControl { return this.FormManagementBed.get("nama_poli"); }
    get nama_kelas(): AbstractControl { return this.FormManagementBed.get("nama_kelas"); }
}
