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
    GridDaftarMutasiDatasource: any[];
    GridDaftarMutasiEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDaftarMutasiToolbar: any[];
    GridDaftarMutasiSelectedData: any;

    API_CONFIG = API_CONFIG;

    @ViewChild('AddPermintaanMutasi') AddPermintaanMutasi: AddPermintaanMutasiComponent;
    FormPermintaanMutasiBedAdditionalInfo: any;

    @ViewChild('BatalkanPermintaanMutasiBed') BatalkanPermintaanMutasiBed: BatalkanPermintaanMutasiComponent;
    TransferBedId: number;

    @ViewChild('ApprovePermintaanMutasiBed') ApprovePermintaanMutasiBed: ApprovePermintaanMutasiComponent;
    FormApprovePermintaanMutasiAdditionalInfo: any;

    @HostListener("window:resize", ['$event'])
    private onResize(event: any) {
        this.onDetectScreenSize(event.srcElement.innerWidth);
    }

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private encryptionService: EncryptionService,
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
                this.onGetDaftarPermintaanMutasiBedByIdRegister(this.id_register.value);
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
            let Person: IPasienTeradmisiHariIniModel = JSON.parse(this.encryptionService.decrypt(this.activatedRoute.snapshot.params['id']));

            this.id_person.setValue(Person['id_person']);
            this.id_register.setValue(Person['id_register']);
            this.nama_pasien.setValue(Person.nama_pasien);
            this.no_rekam_medis.setValue(Person.no_rekam_medis);
            this.no_register.setValue(Person.no_register);
            this.gender.setValue(Person.gender);
            this.umur.setValue(Person.umur);
            this.tgl_admisi.setValue(Person.tgl_admisi);
            this.nama_debitur.setValue(Person.nama_debitur);
            this.id_setup_room.setValue(Person['id_setup_room']);
            this.room_no.setValue(Person['room_no']);
            this.id_setup_bed_room.setValue(Person['id_setup_bed_room']);
            this.bed_no.setValue(Person['bed_no']);
            this.nama_poli.setValue(Person.nama_poli);
            this.nama_kelas.setValue(Person['nama_kelas']);

            this.FormPermintaanMutasiBedAdditionalInfo = this.FormManagementBed.value;

            this.pendaftaranPasienBaruService.onGetLinkFotoPerson(Person['id_person'], false)
                .subscribe((result) => {
                    this.PhotoPasien = result.data;
                });

            this.onGetDaftarPermintaanMutasiBedByIdRegister(this.id_register.value);
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

    handleSelectedTabId(TabId: string): void {
        console.log(TabId);
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
            id_kelas_tujuan: this.GridSelectedData['id_kelas_tujuan'],
            id_setup_room_asal: this.GridSelectedData['id_setup_room_asal'],
            id_setup_bed_room_asal: this.GridSelectedData['id_setup_bed_room_asal'],
            id_setup_room_tujuan: this.GridSelectedData['id_setup_room_tujuan'],
            id_setup_bed_room_tujuan: this.GridSelectedData['id_setup_bed_room_tujuan'],
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
    }

    handleToolbarClickDaftarMutasi(args: any): void {
        let id = args.item.id;

        if (id == "batalkan_mutasi") {

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
        }).then((result) => {
            if (result.isConfirmed) {
                this.managementBedRawatInapService.onPostCancelRequestMutasiBed(FormPembatalanRequestMutasiBed.id_bed_transfer, FormPembatalanRequestMutasiBed.reason_canceled)
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', 'Success', 'Request Mutasi Bed Berhasil Dibatalkan')
                                .then(() => {
                                    this.BatalkanPermintaanMutasiBed.handleCloseModalPembatalanRequestMutasi();

                                    this.onGetDaftarPermintaanMutasiBedByIdRegister(this.id_register.value);
                                });
                        }
                    });
            }
        });
    }

    handleApprovePermintaanMutasiBed(FormApproveMutasiBed: any): void {
        console.log(FormApproveMutasiBed);
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
