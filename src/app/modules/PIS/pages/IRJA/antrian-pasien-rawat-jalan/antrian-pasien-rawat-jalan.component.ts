import { TitleCasePipe } from '@angular/common';
import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { EditSettingsModel } from '@syncfusion/ej2-grids';
import { PoliModel } from 'src/app/modules/Billing/models/setup-data/setup-poli.model';
import { SetupPoliService } from 'src/app/modules/Billing/services/setup-data/setup-poli/setup-poli.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { IPasienTeradmisiHariIniModel } from '../../../models/IRJA/admisi-pasien-rawat-jalan.model';
import { IAntrianRawatJalanModel } from '../../../models/IRJA/antrian-pasien-rawat-jalan.model';
import { AntrianPasienRawatJalanService } from '../../../services/IRJA/antrian-pasien-rawat-jalan/antrian-pasien-rawat-jalan.service';
import * as API_PIS_SETUP_DATA from '../../../../../api/PIS/SETUP_DATA';
import Config from './json/antrian-pasien-rawat-jalan.config.json';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-antrian-pasien-rawat-jalan',
    templateUrl: './antrian-pasien-rawat-jalan.component.html',
    styleUrls: ['./antrian-pasien-rawat-jalan.component.css'],
})
export class AntrianPasienRawatJalanComponent implements OnInit {

    Config = Config;

    API_PIS_SETUP_DATA = API_PIS_SETUP_DATA.API_SETUP_DATA;

    HeaderRibbon: string;

    ButtonNav: ButtonNavModel[] = [
        { Id: 'Cari', Icons1: 'fa-search fa-sm', Captions: '[F1] Pencarian' }
    ];

    AntrianPasienRawatJalan: IAntrianRawatJalanModel[] = [];

    GridData: MolGridComponent = null;
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDatasource: IPasienTeradmisiHariIniModel[] = [];
    GridContextMenuItems: MenuItemModel[] = [
        { id: 'konsul', iconCss: 'fas fa-user-edit fa-sm', text: 'Konsul' },
        { id: 'riwayat_pemeriksaan', iconCss: 'fas fa-history fa-sm', text: 'Riwayat Pemeriksaan' },
    ];

    SelectedDataDokter: string;

    SelectedDataPasien: any;

    @ViewChild('DropdownPoli') DropdownPoli: DropDownListComponent;
    DropdownPoliDatasource: PoliModel[] = [];
    DropdownPoliFields: object = { text: 'nama_poli', value: 'id_poli' };

    SelectedPoli: any;

    FormKonsul: FormGroup;

    @ViewChild('DropdownPoliKonsul') DropdownPoliKonsul: DropDownListComponent;

    @ViewChild('LookupKodeDokter') LookupKodeDokter: OrgInputLookUpKodeComponent;
    urlDokter = "";

    @ViewChild('GridDataKonsul') GridDataKonsul: GridComponent;
    GridKonsulDatasource: any[] = [];
    GridKonsulToolbar: any[] = [
        { text: 'Hapus', tooltipText: 'Hapus', prefixIcon: 'fas fa-ban fa-sm', id: 'hapus' },
        "Search"
    ];
    GridKonsulRowIndex: number = 0;

    @ViewChild('GridRiwayatPeriksa') GridRiwayatPeriksa: GridComponent;
    GridRiwayatDatasource: any[] = [];
    GridRiwayatToolbar: any[] = [
        { text: 'Batalkan Konsul', tooltipText: 'Batalkan Konsul', prefixIcon: 'fas fa-ban fa-sm', id: 'batalkan_konsul' },
        "Search"
    ];
    GridRiwayatSelectedRow: any;

    FormPembatalanKonsul: FormGroup;

    modalRef: BsModalRef;
    @ViewChild('modalPembatalanKonsul') modalPembatalanKonsul: TemplateRef<any>;

    constructor(
        private formBuilder: FormBuilder,
        private titleCasePipe: TitleCasePipe,
        private bsModalService: BsModalService,
        private utilityService: UtilityService,
        private setupPoliService: SetupPoliService,
        private antrianRawatJalanService: AntrianPasienRawatJalanService,
    ) { }

    @HostListener('document:keydown', ['$event'])
    onKeyDownHandler(event: KeyboardEvent) {
        if (event.keyCode === 112) {
            event.preventDefault();
            this.handleClickButtonNav('Cari')
        }
    }

    ngOnInit(): void {
        const today = this.utilityService.onFormatDate(new Date(), "dddd, Do MMM yyyy");

        this.HeaderRibbon = `Antrian Pasien Rawat Jalan - ${today}`;

        this.onGetAllPoliklinik();

        this.handlePencarianAntrianPoliklinik(164, "DALAM");

        this.onSetFormKonsulAttributes();
    }

    onSetFormKonsulAttributes(): void {
        this.FormKonsul = this.formBuilder.group({
            id_register: [0, []],
            id_poli: [0, []],
            nama_poli: ["", []],
            id_dokter_asal: [0, []],
            nama_dokter_asal: ["", []],
            id_jadwal_dokter: [0, []],
            jadwal_dokter: ["", []],
            id_dokter_pemeriksa: [0, []],
            nama_dokter_pemeriksa: [0, []],
            catatan_konsul: ["", []],
        });

        this.FormPembatalanKonsul = this.formBuilder.group({
            id_register: [0, []],
            id_dokter: [0, []],
            id_jadwal_dokter: [0, []],
            reason_canceled: ["", []]
        });
    }

    handlePencarianAntrianPoliklinik(PoliklinikId: number, NamaPoliklinik: string): void {
        this.SelectedPoli = {
            id_poli: PoliklinikId,
            nama_poli: NamaPoliklinik
        };

        const today = this.utilityService.onFormatDate(new Date(), "dddd, Do MMM yyyy");

        this.HeaderRibbon = `Antrian Pasien Rawat Jalan Poli ${this.titleCasePipe.transform(NamaPoliklinik)} - ${today}`;

        this.onGetAllAntrianRawatJalan(PoliklinikId);

        setTimeout(() => {
            (<HTMLElement>document.getElementById('btnCloseFilter')).click();
        }, 200);
    }

    handleClickButtonNav(args: string): void {
        switch (args) {
            case 'Cari':
                (<HTMLElement>document.getElementById('btnOpenCariPoli')).click();
                break;
            default:
                break;
        }
    }

    onGetAllPoliklinik(): void {
        this.setupPoliService.onGetAll()
            .subscribe((result) => {
                this.DropdownPoliDatasource = result.data;
            });
    }

    onGetAllAntrianRawatJalan(id_poli: number): void {
        this.antrianRawatJalanService.onGetAllDataAntrianRawatJalanByIdPoli(id_poli)
            .subscribe((result) => {
                this.AntrianPasienRawatJalan = result.data;
            })
    }

    handleSelectedRow(args: any, GridId: string): void {
        this.SelectedDataPasien = args.data;

        this.id_register.setValue(this.SelectedDataPasien.id_register);
        this.id_dokter_asal.setValue(this.SelectedDataPasien.id_dokter);
        this.nama_dokter_asal.setValue(this.SelectedDataPasien.nama_dokter);

        const grid_el: GridComponent = (<any>document.getElementById(GridId)).ej2_instances[0];

        setTimeout(() => {
            grid_el.clearSelection();
        }, 200);
    }

    handleDataBound(args: any): void {
        let status_terlayani = args.data.status_terlayani;

        if (status_terlayani == "sudah terlayani") {
            args.row.classList.add('e-activecolor-background');
        }
    }

    handleSelectGridContextMenu(args: any, Data: any): void {
        let id = args.item.id;

        if (id == "konsul") {
            this.handleOpenModalKonsul();
        };

        if (id == "riwayat_pemeriksaan") {
            this.handleOpenModalRiwayatPemeriksaan();
        }
    }

    togglingCardDokter(ElementId: string): void {
        let icon = document.getElementById('icon' + ElementId) as HTMLElement;
        let card_body = document.getElementById('card_body' + ElementId) as HTMLElement;

        if (icon.classList.contains('fa-window-minimize')) {
            icon.classList.remove('fa-window-minimize');
            icon.classList.add('fa-window-maximize');

            card_body.classList.remove('show-card-dokter');
            card_body.classList.add('hide-card-dokter');

        } else {
            icon.classList.add('fa-window-minimize');
            icon.classList.remove('fa-window-maximize');

            card_body.classList.add('show-card-dokter');
            card_body.classList.remove('hide-card-dokter');
        }
    }

    // *** ===================== Konsul Section ========================
    handleOpenModalKonsul(): void {
        let btnKonsulPasien = document.getElementById('btnKonsulPasien') as HTMLElement;

        btnKonsulPasien.click();

        this.onResetFormKonsul();
    }

    handleChangePoli(args: any): void {
        if (args) {
            this.id_poli.setValue(args.itemData.id_poli);
            this.nama_poli.setValue(args.itemData.nama_poli);

            console.log(this.FormKonsul.value);

            this.urlDokter = this.API_PIS_SETUP_DATA.SETUP_DOKTER.POST_GET_ALL_DOKTER_FOR_LOOKUP_ADMISI + this.id_poli.value;
        }
    }

    handleSelectedDokter(args: any): void {
        this.id_jadwal_dokter.setValue(args.id_jadwal_dokter);
        this.jadwal_dokter.setValue(`${args.nama_hari}, ${args.jam_mulai} - ${args.jam_selesai}`);
        this.id_dokter_pemeriksa.setValue(args.id_dokter);
        this.nama_dokter_pemeriksa.setValue(args.full_name);
    }

    handleSaveFormKonsul(FormKonsul: any): void {
        this.GridKonsulDatasource.push(FormKonsul);

        this.GridDataKonsul.refresh();

        this.onResetFormKonsul();
    }

    handleSelectedRowKonsul(args: any): void {
        this.GridKonsulRowIndex = args.rowIndex;
    }

    handleToolbarClickKonsul(args: any): void {
        let id = args.item.id;

        switch (id) {
            case 'hapus':
                this.GridKonsulDatasource.splice(this.GridKonsulRowIndex);
                this.GridDataKonsul.refresh();
                break;
            default:
                break;
        }
    }

    handleCloseModalKonsul(): void {
        let btnCloseModal = document.getElementById('btnCloseModal') as HTMLElement;

        btnCloseModal.click();
    }

    handleSubmitKonsul(): void {
        this.antrianRawatJalanService.onPostSaveKonsulAntrianRawatJalan(this.GridKonsulDatasource)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Konsul Pasien Berhasil Disimpan')
                        .then(() => {
                            this.handleCloseModalKonsul();

                            this.GridKonsulDatasource = [];

                            this.onResetFormKonsul();

                            this.handlePencarianAntrianPoliklinik(this.SelectedPoli.id_poli, this.SelectedPoli.nama_poli);
                        });
                }
            })
    }

    onResetFormKonsul(): void {
        // this.FormKonsul.reset();

        // this.id_register.setValue(0);
        // this.id_poli.setValue(0);
        // this.nama_poli.setValue("");
        // this.id_dokter_asal.setValue(0);
        // this.nama_dokter_asal.setValue("");

        this.id_jadwal_dokter.setValue(0);
        this.jadwal_dokter.setValue("");
        this.id_dokter_pemeriksa.setValue(0);
        this.nama_dokter_pemeriksa.setValue("");
        this.DropdownPoliKonsul.value = null;
        // (<HTMLInputElement>document.getElementById('inputGroupfull_name')).value = "";
        this.catatan_konsul.setValue("");
    }

    // *** ===================== Riwayat Pemeriksaan Section ========================
    handleOpenModalRiwayatPemeriksaan(): void {
        let btnRiwayatPemeriksaan = document.getElementById('btnRiwayatPemeriksaan') as HTMLElement;

        btnRiwayatPemeriksaan.click();

        this.handleResetRiwayatPemeriksaan();

        this.onFillRiwayatPemeriksaanPasien(this.SelectedDataPasien);
    }

    onFillRiwayatPemeriksaanPasien(Data: any): void {
        (document.getElementById('no_rekam_medis_riwayat') as HTMLInputElement).value = Data.no_rekam_medis;
        (document.getElementById('no_register_riwayat') as HTMLInputElement).value = Data.no_register;
        (document.getElementById('nama_pasien_riwayat') as HTMLInputElement).value = Data.nama_pasien;

        this.antrianRawatJalanService.onGetRiwayatPemeriksaanPasienRawatJalan(Data.id_register)
            .subscribe((result) => {
                this.GridRiwayatDatasource = result.data;

                this.GridRiwayatPeriksa.refresh();
            });
    }

    handleSelectedRowRiwayat(args: any): void {
        this.GridRiwayatSelectedRow = args.data;

        console.log(this.GridRiwayatSelectedRow);
    }

    handleToolbarClickRiwayat(args: any): void {
        let id = args.item.id;

        if (id == "batalkan_konsul") {
            this.handleOpenModalPembatalanKonsul();
        }
    }

    handleCloseModalRiwayatPemeriksaan(): void {
        let btnCloseModalRiwayat = document.getElementById('btnCloseModalRiwayat') as HTMLElement;

        btnCloseModalRiwayat.click();
    }

    handleResetRiwayatPemeriksaan(): void {
        (document.getElementById('no_rekam_medis_riwayat') as HTMLInputElement).value = "";
        (document.getElementById('no_register_riwayat') as HTMLInputElement).value = "";
        (document.getElementById('nama_pasien_riwayat') as HTMLInputElement).value = "";

        this.GridRiwayatDatasource = [];
    }

    // *** =============== Pembatalan Konsul Section ==================
    handleOpenModalPembatalanKonsul(): void {
        this.onResetFormPembatalanKonsul();

        this.id_register_batal.setValue(this.SelectedDataPasien.id_register);
        this.id_jadwal_dokter_batal.setValue(this.GridRiwayatSelectedRow.id_jadwal_dokter);
        this.id_dokter.setValue(this.GridRiwayatSelectedRow.id_dokter_pemeriksa);

        this.modalRef = this.bsModalService.show(this.modalPembatalanKonsul);
    }

    handleCloseModalPembatalanKonsul(): void {
        this.modalRef.hide();
    }

    handleSubmitModalPembatalanKonsul(FormPembatalanKonsul: any): void {
        Swal.fire({
            title: 'Apakah Anda Yakin?',
            text: "Data yang Telah Dibatalkan Tidak Dapat Diubah",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya, Saya Yakin',
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {
                this.antrianRawatJalanService.onPostCancelKonsulRawatJalan(FormPembatalanKonsul)
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', "Success", `Pembatalan Konsul ${this.SelectedDataPasien.nama_pasien} Berhasil`)
                                .then(() => {
                                    this.handleCloseModalPembatalanKonsul();

                                    this.onFillRiwayatPemeriksaanPasien(this.SelectedDataPasien);
                                });
                        }
                    });
            }
        });
    }

    onResetFormPembatalanKonsul(): void {
        this.FormPembatalanKonsul.reset();

        this.id_register_batal.setValue(0);
        this.id_dokter.setValue(0);
        this.id_jadwal_dokter_batal.setValue(0);
        this.reason_canceled.setValue("");
    }

    get id_register(): AbstractControl { return this.FormKonsul.get('id_register') }
    get id_poli(): AbstractControl { return this.FormKonsul.get('id_poli') }
    get nama_poli(): AbstractControl { return this.FormKonsul.get('nama_poli') }
    get id_dokter_asal(): AbstractControl { return this.FormKonsul.get('id_dokter_asal') }
    get nama_dokter_asal(): AbstractControl { return this.FormKonsul.get('nama_dokter_asal') }
    get id_jadwal_dokter(): AbstractControl { return this.FormKonsul.get('id_jadwal_dokter') }
    get jadwal_dokter(): AbstractControl { return this.FormKonsul.get('jadwal_dokter') }
    get id_dokter_pemeriksa(): AbstractControl { return this.FormKonsul.get('id_dokter_pemeriksa') }
    get nama_dokter_pemeriksa(): AbstractControl { return this.FormKonsul.get('nama_dokter_pemeriksa') }
    get catatan_konsul(): AbstractControl { return this.FormKonsul.get('catatan_konsul') }

    get id_register_batal(): AbstractControl { return this.FormPembatalanKonsul.get('id_register'); }
    get id_dokter(): AbstractControl { return this.FormPembatalanKonsul.get('id_dokter'); }
    get id_jadwal_dokter_batal(): AbstractControl { return this.FormPembatalanKonsul.get('id_jadwal_dokter'); }
    get reason_canceled(): AbstractControl { return this.FormPembatalanKonsul.get('reason_canceled'); }
}
