import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import * as Config from './json/pemasukan-rawat-inap.config.json';
import * as API_CONFIG from '../../../../../api/PIS/IRJA';
import * as API_CONFIG_PIS from '../../../../../api/PIS/IRNA';
import * as API_CONFIG_BILLING from '../../../../../api/BILLING';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';
import { PoliModel } from 'src/app/modules/Billing/models/setup-data/setup-poli.model';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { PemasukanRawatInapService } from '../../../services/IRNA/pemasukan-rawat-inap/pemasukan-rawat-inap.service';

@Component({
    selector: 'app-pemasukan-rawat-inap',
    templateUrl: './pemasukan-rawat-inap.component.html',
    styleUrls: ['./pemasukan-rawat-inap.component.css']
})
export class PemasukanRawatInapComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    PemasukanConfig = Config;

    API_PEMASUKAN_IRJA = API_CONFIG.IRJA.PEMASUKAN_RAWAT_JALAN;

    API_PIS = API_CONFIG_PIS.IRNA;

    API_BILLING = API_CONFIG_BILLING;

    API_POLI_IRNA = this.API_BILLING.API_BILLING.SETUP_DATA.SETUP_POLI;

    @ViewChild("LookupNoReg") LookupNoReg: OrgInputLookUpComponent;
    UrlLookupNoReg: string = this.API_PIS.ADMISI_PASIEN_RAWAT_INAP.GET_ADMISI_PASIEN_IRNA_FOR_INPUT_TRANS;

    @ViewChild("LookupPoli") LookupPoli: OrgInputLookUpComponent;
    UrlLookupPoli: string = this.API_POLI_IRNA.GET_ALL_POLI_FOR_LOOKUP_RAWAT_INAP;

    @ViewChild('PoliTindakanDropdown') PoliTindakanDropdown: DropDownListComponent;
    PoliTindakanDatasource: PoliModel[] = [];
    PoliTindakanFields: object = { text: 'nama_poli', value: 'id_poli' };
    SelectedPoli: string;

    GridDatasource: any[] = [];
    GridData: MolGridComponent = null;
    GridDataToolbar: any[];
    GridSelectedData: any;
    GridSelectedIndex: number;

    modalRef: BsModalRef;
    @ViewChild('modalPemasukanRawatInap') modalPemasukanRawatInap: TemplateRef<any>;

    /**
     * @FormSavePemasukanRawatInap Form Untuk Mengirim Request Post Save Trans Pemasukan IRJA
    */
    FormSavePemasukanRawatInap: FormGroup;

    /**
     * @FormPemasukanRawatInap Form Untuk Menyimpan Tarif Berlaku Poli di Modal [F1] Add
    */
    FormPemasukanRawatInap: FormGroup;

    /**
     * @FormPemasukanRawatInapState Form Menyimpan Tarif Berlaku Poli di Modal [F1] Add State
    */
    FormPemasukanRawatInapState = 'Insert';

    @ViewChild("DatepickerTanggalTindakan") DatepickerTanggalTindakan: DatePickerComponent;
    Today = new Date();

    /**
     * @LookupTarifBerlaku ViewChild OrgInputLookUpComponent
    */
    @ViewChild('LookupTarifBerlaku') LookupTarifBerlaku: OrgInputLookUpComponent;

    /**
     * @UrlLookupTarifBerlaku Endpoint Url Lookup Tarif Berlaku
    */
    UrlLookupTarifBerlaku: string = this.API_BILLING.API_BILLING.SETTING_HARGA_TARIF.SETTING_TARIF_BERLAKU.GET_ALL_TARIF_BERLAKU_FOR_TRANS_IRNA;

    /**
     * @LookupDokter ViewChild OrgInputLookUpComponent
    */
    @ViewChild('LookupDokter') LookupDokter: OrgInputLookUpComponent;

    /**
     * @LookupDokter ViewChild OrgInputLookUpComponent
    */
    @ViewChild('LookupDokterAnastesi') LookupDokterAnastesi: OrgInputLookUpComponent;

    /**
     * @UrlLookupDokter Endpoint Url Lookup Dokter Periksa dan Dokter Anastesi
    */
    UrlLookupDokter: string = this.API_PEMASUKAN_IRJA.POST_GET_ALL_DOKTER_FOR_LOOKUP;

    /**
     * @GridHistoryDatasource Grid Untuk Menampung Transaksi Record
    */
    GridHistoryDatasource: any[] = [];
    GridHistory: GridComponent;
    GridHistoryDataToolbar: any[] = [
        { text: 'Batalkan Transaksi', tooltipText: 'Batalkan Transaksi', prefixIcon: 'fas fa-ban fa-sm', id: 'cancel' },
        "Search"
    ];
    GridHistorySelectedData: any;

    FormPembatalanTransPemasukanRawatInap: FormGroup;

    modalPembatalanRef: BsModalRef;
    @ViewChild('modalPembatalan') modalPembatalan: TemplateRef<any>;

    DiskonDokter = new BehaviorSubject(0);
    QtyTarif = new BehaviorSubject(0);

    @HostListener('document:keydown', ['$event'])
    onKeyDownHandler(event: KeyboardEvent) {
        // ** Key Code F1
        if (event.keyCode === 112) {
            event.preventDefault();
            this.handleOpenModalPemasukanRawatInap('Insert')
        }

        // ** Key Code F3
        if (event.keyCode === 114) {
            event.preventDefault();
            (<HTMLElement>document.getElementById('btnOffcanvasBottom')).click();
        }

        // ** Key Code F8
        if (event.keyCode === 119) {
            event.preventDefault();
            let btnInputGroupinputGroupno_register = document.getElementById("btnInputGroupinputGroupno_register") as HTMLElement;
            btnInputGroupinputGroupno_register.click();
        }
    }

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        private utilityService: UtilityService,
        private pemasukanRawatInapService: PemasukanRawatInapService
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: 'Save', Icons1: 'fas fa-save fa-sm', Captions: 'Save' }
        ];

        this.GridDataToolbar = [
            { text: '[F1] Add', tooltipText: '[F1] Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            "Search"
        ];

        this.onSetFormPemasukanRawatInapAttributes();

        this.onSetFormSavePemasukanRawatInapAttributes();

        this.FormPembatalanTransPemasukanRawatInap = this.formBuilder.group({
            id_register: [0, []],
            id_transaksi: [0, []],
            total_amount: [0, []],
            reason_canceled: ["", []]
        });
    }

    handleClickButtonNav(args: any): void {
        switch (args) {
            case "Save":
                this.onSubmitTransPemasukanRawatInap();
                break;
            default:
                break;
        }
    }

    onSetFormSavePemasukanRawatInapAttributes(): void {

        const today = this.utilityService.onFormatDate(new Date(), "Do/MM/yyyy");

        this.FormSavePemasukanRawatInap = this.formBuilder.group({
            id_register: [0, [Validators.required]],
            id_person: [0, [Validators.required]],
            no_register: ["", [Validators.required]],
            no_rekam_medis: ["", [Validators.required]],
            tgl_masuk: ["", [Validators.required]],
            nama_pasien: ["", [Validators.required]],
            gender: ["", [Validators.required]],
            id_kelas_rawat: [0, [Validators.required]],
            nama_kelas: ["", [Validators.required]],
            bed_no: ["", [Validators.required]],
            room_no: ["", [Validators.required]],
            id_poli: [0, [Validators.required]],
            nama_poli: [0, [Validators.required]],
            id_debitur: [0, [Validators.required]],
            nama_debitur: ["", [Validators.required]],
            tgl_transaksi: [today, [Validators.required]],
        });
    }

    onSetFormPemasukanRawatInapAttributes(): void {
        this.FormPemasukanRawatInap = this.formBuilder.group({
            tgl_transaksi: ["", [Validators.required]],
            id_tarif_berlaku: [0, [Validators.required]],
            id_setup_tarif: [0, [Validators.required]],
            kode_setup_tarif: ["", [Validators.required]],
            nama_setup_tarif: ["", [Validators.required]],
            qty: [0, [Validators.required]],
            id_dokter: [0, [Validators.required]],
            nama_dokter: ["", [Validators.required]],
            id_doct_anas: [0, [Validators.required]],
            nama_doct_anas: ["", [Validators.required]],
            doct_fee: [0, [Validators.required]],
            medical_fee: [0, [Validators.required]],
            hos_fee: [0, [Validators.required]],
            com_fee: [0, [Validators.required]],
            anas_fee: [0, [Validators.required]],
            nominal_tarif: [0, [Validators.required]],
            total_tarif: [0, [Validators.required]],
            id_poli: [0, [Validators.required]],
            id_kelas_pelayanan: [0, [Validators.required]],
        });
    }

    handleSelectedLookupPasien(args: any): void {
        args.tgl_transaksi = this.utilityService.onFormatDate(new Date(), "Do/MM/yyyy");

        this.FormSavePemasukanRawatInap.setValue(args);

        let poli_tindakan_lookup = document.getElementById("inputGroupnama_poli") as HTMLInputElement;
        poli_tindakan_lookup.value = args.nama_poli;

        this.onGetHistoryTransPemasukanRawatInapByIdRegister(args.id_register);
    }

    handleSelectedLookupPoli(args: any): void {
        console.log(args);
    }

    onGetAllPoliByIdRegisterPasien(RegisterId: number): void {
        // this.pemasukanRawatInapService.onGetAllPoliByIdRegister(RegisterId)
        //     .subscribe((result) => {
        //         this.PoliTindakanDatasource = result.data;
        //     });
    }

    onGetHistoryTransPemasukanRawatInapByIdRegister(RegisterId: number): void {
        this.pemasukanRawatInapService.onGetHistoryTransPemasukanRawatInap(RegisterId)
            .subscribe((result) => {
                this.GridHistoryDatasource = result.data;
            });
    }

    handleSelectedRow(args: any): void {
        this.GridSelectedData = args.data;

        this.GridSelectedIndex = args.rowIndex;
    }

    handleToolbarClick(args: any): void {
        switch (args.item.id) {
            case "add":
                this.handleOpenModalPemasukanRawatInap('Insert');
                break;
            case "edit":
                this.handleOpenModalPemasukanRawatInap('Edit');
                break;
            case "delete":
                this.GridDatasource.splice(this.GridSelectedIndex, 1);

                this.GridData.Grid.refresh();
                break;
            default:
                break;
        }
    }

    InitalizedGrid(component: MolGridComponent): void {
        this.GridData = component;
    }

    handleActionComplete(args: any): void {
    }

    handleOpenModalPemasukanRawatInap(State: string): void {
        this.FormPemasukanRawatInapState = State;

        this.modalRef = this.bsModalService.show(
            this.modalPemasukanRawatInap,
            Object.assign({}, { class: 'modal-lg' })
        );

        if (State == "Edit") {
            setTimeout(() => {
                this.onResetFormPemasukanRawatInap();

                this.onFillFormPemasukanRawatInap(this.GridSelectedData);
            }, 750);
        } else {
            this.onResetFormPemasukanRawatInap();
        }

        setTimeout(() => {
            this.id_poli_tarif.setValue(this.FormSavePemasukanRawatInap.value.id_poli);
            this.id_kelas_pelayanan.setValue(this.FormSavePemasukanRawatInap.value.id_kelas_rawat);
        }, 750);
    }

    onFillFormPemasukanRawatInap(Data: any): void {
        this.FormPemasukanRawatInap.setValue(Data);

        this.tgl_transaksi_tarif.setValue(Data.tgl_transaksi);
        this.id_tarif_berlaku.setValue(Data.id_tarif_berlaku);
        this.id_setup_tarif.setValue(Data.id_setup_tarif);
        this.kode_setup_tarif.setValue(Data.kode_setup_tarif);
        this.nama_setup_tarif.setValue(Data.nama_setup_tarif);
        this.qty.setValue(Data.qty);
        this.id_dokter.setValue(Data.id_dokter);
        this.nama_dokter.setValue(Data.nama_dokter);
        this.id_doct_anas.setValue(Data.id_doct_anas);
        this.nama_doct_anas.setValue(Data.nama_doct_anas);
        this.doct_fee.setValue(Data.doct_fee);
        this.medical_fee.setValue(Data.medical_fee);
        this.hos_fee.setValue(Data.hos_fee);
        this.com_fee.setValue(Data.com_fee);
        this.anas_fee.setValue(Data.anas_fee);
        this.nominal_tarif.setValue(Data.nominal_tarif);
        this.total_tarif.setValue(Data.total_tarif);

        (<HTMLInputElement>document.getElementById('inputGroupkode_setup_tarif')).value = Data.kode_setup_tarif;

        let el_dokter_periksa = document.querySelectorAll('#inputGroupfull_name')[0] as HTMLInputElement;
        el_dokter_periksa.value = Data.nama_dokter;

        let el_dokter_anastesi = document.querySelectorAll('#inputGroupfull_name')[1] as HTMLInputElement;
        el_dokter_anastesi.value = Data.nama_doct_anas;
    }

    handleSelectedTarifBerlaku(args: any): void {
        this.id_tarif_berlaku.setValue(args.id_tarif_berlaku);
        this.id_setup_tarif.setValue(args.id_setup_tarif);
        this.kode_setup_tarif.setValue(args.kode_setup_tarif);
        this.nama_setup_tarif.setValue(args.nama_setup_tarif);
        this.doct_fee.setValue(args.doct_fee);
        this.medical_fee.setValue(args.medical_fee);
        this.hos_fee.setValue(args.hos_fee);
        this.anas_fee.setValue(args.anas_fee);
        this.nominal_tarif.setValue(args.nominal_tarif);
        this.qty.setValue(args.qty);
        this.QtyTarif.next(args.qty);

        this.onHitungTotalTarif();
    }

    handleSelectedDokterPeriksa(args: any): void {
        this.id_dokter.setValue(args.id_dokter);
        this.nama_dokter.setValue(args.full_name);
    }

    handleSelectedDokterAnastesi(args: any): void {
        this.id_doct_anas.setValue(args.id_dokter);
        this.nama_doct_anas.setValue(args.full_name);
    }

    handleChangeQtyTarif(QtyTarif: number): void {
        this.QtyTarif.next(QtyTarif);

        this.onHitungTotalTarif();
    }

    handleChangeDiscDoctor(DiscDoctor: number): void {
        this.DiskonDokter.next(DiscDoctor);

        this.onHitungTotalTarif();
    }

    onHitungTotalTarif(): void {
        let total_tarif = (this.nominal_tarif.value * this.QtyTarif.value) - this.DiskonDokter.value;

        this.total_tarif.setValue(total_tarif);
    }

    handleSimpanModalPemasukanRawatInap(FormPemasukanRawatInap: any): void {
        this.GridDatasource.push(FormPemasukanRawatInap);

        this.GridData.Grid.refresh();

        setTimeout(() => {
            this.handleCloseModalPemasukanRawatInap();

            this.onResetFormPemasukanRawatInap();
        }, 100);
    }

    handleUpdateModalPemasukanRawatInap(FormPemasukanRawatInap: any): void {
        this.GridDatasource[this.GridSelectedIndex] = FormPemasukanRawatInap;

        this.GridData.Grid.refresh();

        setTimeout(() => {
            this.handleCloseModalPemasukanRawatInap();

            this.onResetFormPemasukanRawatInap();
        }, 100);
    }

    handleCloseModalPemasukanRawatInap(): void {
        this.modalRef.hide();
    }

    onResetFormPemasukanRawatInap(): void {
        this.FormPemasukanRawatInap.reset();

        this.tgl_transaksi_tarif.setValue("");
        this.id_tarif_berlaku.setValue(0);
        this.id_setup_tarif.setValue(0);
        this.kode_setup_tarif.setValue("");
        this.nama_setup_tarif.setValue("");
        this.qty.setValue(0);
        this.id_dokter.setValue(0);
        this.nama_dokter.setValue("");
        this.id_doct_anas.setValue(0);
        this.nama_doct_anas.setValue("");
        this.doct_fee.setValue(0);
        this.medical_fee.setValue(0);
        this.hos_fee.setValue(0);
        this.com_fee.setValue(0);
        this.anas_fee.setValue(0);
        this.nominal_tarif.setValue(0);
        this.total_tarif.setValue(0);
        this.QtyTarif.next(0);
        this.DiskonDokter.next(0);
    }

    onResetFormSavePemasukanRawatInap(): void {
        const today = this.utilityService.onFormatDate(new Date(), "Do/MM/yyyy");

        this.FormSavePemasukanRawatInap.reset();

        (<HTMLInputElement>document.getElementById('inputGroupno_register')).value = "";
        this.id_person.setValue(0);
        this.id_register.setValue(0);
        this.no_register.setValue("");
        this.no_rekam_medis.setValue("");
        this.tgl_masuk.setValue("");
        this.nama_pasien.setValue("");
        this.gender.setValue("");
        this.id_kelas_rawat.setValue(0);
        this.nama_kelas.setValue("");
        this.bed_no.setValue("");
        this.room_no.setValue("");
        this.id_poli.setValue(0);
        this.nama_poli.setValue("");
        this.id_debitur.setValue(0);
        this.nama_debitur.setValue("");
        this.tgl_transaksi.setValue(today);
    }

    onSubmitTransPemasukanRawatInap(): void {
        let grid_datasource = [];

        this.GridDatasource.forEach((item) => {
            grid_datasource.push({
                'tgl_transaksi': this.utilityService.onFixingDatepickerSyncfusion(item.tgl_transaksi),
                'id_doct_anas': item.id_doct_anas,
                'id_dokter': item.id_dokter,
                'id_kelas_pelayanan': item.id_kelas_pelayanan,
                'id_poli': item.id_poli,
                'id_setup_tarif': item.id_setup_tarif,
                'id_tarif_berlaku': item.id_tarif_berlaku,
                'qty': item.qty,
            });
        });

        const parameter = {
            id_register: this.id_register.value,
            item_transaksi: [
                ...grid_datasource
            ]
        };

        this.pemasukanRawatInapService.onPostSaveTransPemasukanRawatInap(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Transaksi Pemasukan IRNA Berhasil Disimpan')
                        .then(() => {
                            this.GridDatasource = [];

                            this.onGetHistoryTransPemasukanRawatInapByIdRegister(this.id_register.value);

                            (<HTMLElement>document.getElementById('btnOffcanvasBottom')).click();

                            this.onResetFormSavePemasukanRawatInap();
                        });
                }
            });
    }

    handleSelectedRowHistory(args: any): void {
        this.GridHistorySelectedData = args.data;
    }

    handleToolbarClickHistory(args: any): void {
        switch (args.item.id) {
            case 'cancel':
                this.handleOpenModalPembatalan();
                break;
            default:
                break;
        }
    }

    handleOpenModalPembatalan(): void {
        (<HTMLElement>document.getElementById('btnOffcanvasBottom')).click();

        setTimeout(() => {
            this.onResetFormPembatalan();

            this.id_register_batal.setValue(this.GridHistorySelectedData.id_register);
            this.id_transaksi_batal.setValue(this.GridHistorySelectedData.id_transaksi);
            this.total_amount.setValue(this.GridHistorySelectedData.total);

            this.modalPembatalanRef = this.bsModalService.show(this.modalPembatalan);
        }, 500);
    }

    handleCloseModalPembatalan(): void {
        this.modalPembatalanRef.hide();

        (<HTMLElement>document.getElementById('btnOffcanvasBottom')).click();
    }

    onResetFormPembatalan(): void {
        this.FormPembatalanTransPemasukanRawatInap.reset();

        this.id_register_batal.setValue(0);
        this.id_transaksi_batal.setValue(0);
        this.total_amount.setValue(0);
        this.reason_canceled.setValue("");
    }

    handleSubmitModalPembatalan(FormPembatalanTransPemasukanRawatInap: any): void {
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
                this.pemasukanRawatInapService.onPostCancelTransPemasukanRawatInap(
                    {
                        id_register: FormPembatalanTransPemasukanRawatInap.value.id_register,
                        id_transaksi: FormPembatalanTransPemasukanRawatInap.value.id_transaksi,
                        total_amount: FormPembatalanTransPemasukanRawatInap.value.total_amount,
                        reason_canceled: FormPembatalanTransPemasukanRawatInap.value.reason_canceled,
                    }).subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', "Success", `Pembatalan Transaksi Berhasil`)
                                .then(() => {
                                    this.handleCloseModalPembatalan();

                                    setTimeout(() => {
                                        this.onGetHistoryTransPemasukanRawatInapByIdRegister(FormPembatalanTransPemasukanRawatInap.value.id_register);
                                    }, 300);
                                });
                        }
                    });
            }
        });
    }

    get id_register(): AbstractControl { return this.FormSavePemasukanRawatInap.get('id_register'); }
    get id_person(): AbstractControl { return this.FormSavePemasukanRawatInap.get('id_person'); }
    get no_register(): AbstractControl { return this.FormSavePemasukanRawatInap.get('no_register'); }
    get no_rekam_medis(): AbstractControl { return this.FormSavePemasukanRawatInap.get('no_rekam_medis'); }
    get tgl_masuk(): AbstractControl { return this.FormSavePemasukanRawatInap.get('tgl_masuk'); }
    get nama_pasien(): AbstractControl { return this.FormSavePemasukanRawatInap.get('nama_pasien'); }
    get gender(): AbstractControl { return this.FormSavePemasukanRawatInap.get('gender'); }
    get id_kelas_rawat(): AbstractControl { return this.FormSavePemasukanRawatInap.get('id_kelas'); }
    get nama_kelas(): AbstractControl { return this.FormSavePemasukanRawatInap.get('nama_kelas'); }
    get bed_no(): AbstractControl { return this.FormSavePemasukanRawatInap.get('bed_no'); }
    get room_no(): AbstractControl { return this.FormSavePemasukanRawatInap.get('room_no'); }
    get id_poli(): AbstractControl { return this.FormSavePemasukanRawatInap.get('id_poli'); }
    get nama_poli(): AbstractControl { return this.FormSavePemasukanRawatInap.get('nama_poli'); }
    get id_debitur(): AbstractControl { return this.FormSavePemasukanRawatInap.get('id_debitur'); }
    get nama_debitur(): AbstractControl { return this.FormSavePemasukanRawatInap.get('nama_debitur'); }
    get tgl_transaksi(): AbstractControl { return this.FormSavePemasukanRawatInap.get('tgl_transaksi'); }

    get tgl_transaksi_tarif(): AbstractControl { return this.FormPemasukanRawatInap.get('tgl_transaksi'); }
    get id_tarif_berlaku(): AbstractControl { return this.FormPemasukanRawatInap.get('id_tarif_berlaku'); }
    get id_setup_tarif(): AbstractControl { return this.FormPemasukanRawatInap.get('id_setup_tarif'); }
    get kode_setup_tarif(): AbstractControl { return this.FormPemasukanRawatInap.get('kode_setup_tarif'); }
    get nama_setup_tarif(): AbstractControl { return this.FormPemasukanRawatInap.get('nama_setup_tarif'); }
    get qty(): AbstractControl { return this.FormPemasukanRawatInap.get('qty'); }
    get id_dokter(): AbstractControl { return this.FormPemasukanRawatInap.get('id_dokter'); }
    get nama_dokter(): AbstractControl { return this.FormPemasukanRawatInap.get('nama_dokter'); }
    get id_doct_anas(): AbstractControl { return this.FormPemasukanRawatInap.get('id_doct_anas'); }
    get nama_doct_anas(): AbstractControl { return this.FormPemasukanRawatInap.get('nama_doct_anas'); }
    get doct_fee(): AbstractControl { return this.FormPemasukanRawatInap.get('doct_fee'); }
    get medical_fee(): AbstractControl { return this.FormPemasukanRawatInap.get('medical_fee'); }
    get hos_fee(): AbstractControl { return this.FormPemasukanRawatInap.get('hos_fee'); }
    get com_fee(): AbstractControl { return this.FormPemasukanRawatInap.get('com_fee'); }
    get anas_fee(): AbstractControl { return this.FormPemasukanRawatInap.get('anas_fee'); }
    get nominal_tarif(): AbstractControl { return this.FormPemasukanRawatInap.get('nominal_tarif'); }
    get total_tarif(): AbstractControl { return this.FormPemasukanRawatInap.get('total_tarif'); }
    get id_poli_tarif(): AbstractControl { return this.FormPemasukanRawatInap.get('id_poli'); }
    get id_kelas_pelayanan(): AbstractControl { return this.FormPemasukanRawatInap.get('id_kelas_pelayanan'); }

    get id_register_batal(): AbstractControl { return this.FormPembatalanTransPemasukanRawatInap.get('id_register'); }
    get id_transaksi_batal(): AbstractControl { return this.FormPembatalanTransPemasukanRawatInap.get('id_transaksi'); }
    get total_amount(): AbstractControl { return this.FormPembatalanTransPemasukanRawatInap.get('total_amount'); }
    get reason_canceled(): AbstractControl { return this.FormPembatalanTransPemasukanRawatInap.get('reason_canceled'); }
}
