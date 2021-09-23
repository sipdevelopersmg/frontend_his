import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { PoliModel } from 'src/app/modules/Billing/models/setup-data/setup-poli.model';
import { PemasukanRawatJalanService } from '../../../services/IRJA/pemasukan-rawat-jalan/pemasukan-rawat-jalan.service';
import { OrgInputLookUpStaticFilterComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-static-filter/org-input-look-up-static-filter.component';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import * as Config from './json/pemasukan-rawat-jalan.config.json';
import * as API_CONFIG from '../../../../../api/PIS/IRJA/index';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-pemasukan-rawat-jalan',
    templateUrl: './pemasukan-rawat-jalan.component.html',
    styleUrls: ['./pemasukan-rawat-jalan.component.css']
})
export class PemasukanRawatJalanComponent implements OnInit {

    ButtonNav: ButtonNavModel[] = [
        { Id: 'Save', Icons1: 'fas fa-save fa-sm', Captions: 'Save' }
    ];

    /**
     * @PemasukanConfig Config Lookup dan Grid 
    */
    PemasukanConfig = Config;

    /**
     * @API_PEMASUKAN_IRJA Config Endpoint API_PEMASUKAN_IRJA
    */
    API_PEMASUKAN_IRJA = API_CONFIG.IRJA.PEMASUKAN_RAWAT_JALAN;

    /**
     * @LookupNoReg ViewChild OrgInputLookUpComponent
    */
    @ViewChild('LookupNoReg') LookupNoReg: OrgInputLookUpComponent;

    /**
     * @UrlLookupNoReg Endpoint Url Lookup No Register Pasien
    */
    UrlLookupNoReg: string = this.API_PEMASUKAN_IRJA.POST_GET_PASIEN_IRJA_FOR_LOOKUP;

    /**
     * @PoliTindakanDropdown ViewChild DropDownListComponent
    */
    @ViewChild('PoliTindakanDropdown') PoliTindakanDropdown: DropDownListComponent;

    /**
     * @PoliTindakanDatasource Dropdown Poli Datasource
     * @Type PoliModel[]
    */
    PoliTindakanDatasource: PoliModel[] = [];

    /**
     * @PoliTindakanFields Dropdown Poli Fields
     * @Value { text: 'nama_poli', value: 'id_poli' };
    */
    PoliTindakanFields: object = { text: 'nama_poli', value: 'id_poli' };

    SelectedPoli: string;

    /**
     * @GridDatasource Grid Untuk Menampung Tarif Berlaku Poli
    */
    GridDatasource: any[] = [];
    GridData: MolGridComponent = null;
    GridDataToolbar: any[] = [
        { text: '[F1] Add', tooltipText: '[F1] Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
        { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
        { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
        "Search"
    ];
    GridSelectedData: any;
    GridSelectedIndex: number;

    modalRef: BsModalRef;
    @ViewChild('modalPemasukanRawatJalan') modalPemasukanRawatJalan: TemplateRef<any>;

    /**
     * @FormSavePemasukanRawatJalan Form Untuk Mengirim Request Post Save Trans Pemasukan IRJA
    */
    FormSavePemasukanRawatJalan: FormGroup;

    /**
     * @FormPemasukanRawatJalan Form Untuk Menyimpan Tarif Berlaku Poli di Modal [F1] Add
    */
    FormPemasukanRawatJalan: FormGroup;

    /**
     * @FormPemasukanRawatJalanState Form Menyimpan Tarif Berlaku Poli di Modal [F1] Add State
    */
    FormPemasukanRawatJalanState = 'Insert';

    /**
     * @LookupTarifBerlaku ViewChild OrgInputLookUpComponent
    */
    @ViewChild('LookupTarifBerlaku') LookupTarifBerlaku: OrgInputLookUpStaticFilterComponent;

    /**
     * @UrlLookupTarifBerlaku Endpoint Url Lookup Tarif Berlaku
    */
    UrlLookupTarifBerlaku: string = this.API_PEMASUKAN_IRJA.POST_GET_ALL_TARIF_BERLAKU_POLI_BY_ID_POLI_AND_ID_KELAS;

    /**
     * @ParamaterTambahanLookupTarifBerlaku Parameter Tambahan Url Lookup Tarif Berlaku
    */
    ParamaterTambahanLookupTarifBerlaku: any;

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

    FormPembatalanTransPemasukanRawatJalan: FormGroup;

    modalPembatalanRef: BsModalRef;
    @ViewChild('modalPembatalan') modalPembatalan: TemplateRef<any>;

    @HostListener('document:keydown', ['$event'])
    onKeyDownHandler(event: KeyboardEvent) {
        if (event.keyCode === 112) {
            event.preventDefault();
            this.handleOpenModalPemasukanRawatJalan('Insert')
        }

        if (event.keyCode === 114) {
            event.preventDefault();
            (<HTMLElement>document.getElementById('btnOffcanvasBottom')).click();
        }
    }

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        private utilityService: UtilityService,
        private pemasukanRawatJalanService: PemasukanRawatJalanService
    ) { }

    ngOnInit(): void {
        this.onSetFormPemasukanRawatJalanAttributes();

        this.onSetFormSavePemasukanRawatJalanAttributes();

        this.FormPembatalanTransPemasukanRawatJalan = this.formBuilder.group({
            id_register: [0, []],
            id_transaksi: [0, []],
            total_amount: [0, []],
            reason_canceled: ["", []]
        });
    }

    handleClickButtonNav(args: any): void {
        switch (args) {
            case "Save":
                this.onSubmitTransPemasukanRawatJalan();
                break;
            default:
                break;
        }
    }

    onSetFormSavePemasukanRawatJalanAttributes(): void {

        const today = this.utilityService.onFormatDate(new Date(), "Do/MM/yyyy");

        this.FormSavePemasukanRawatJalan = this.formBuilder.group({
            id_register: [0, [Validators.required]],
            no_register: ["", [Validators.required]],
            no_rekam_medis: ["", [Validators.required]],
            nama_pasien: ["", [Validators.required]],
            tgl_masuk: ["", [Validators.required]],
            tgl_admisi: ["", [Validators.required]],
            nama_debitur: ["", [Validators.required]],
            id_kelas: [0, [Validators.required]],
            nama_kelas: ["", [Validators.required]],
            tgl_transaksi: [today, [Validators.required]],
            id_poli: [0, [Validators.required]],
            id_dokter: [0, [Validators.required]],
            nama_dokter: ["", [Validators.required]]
        });
    }

    onSetFormPemasukanRawatJalanAttributes(): void {
        this.FormPemasukanRawatJalan = this.formBuilder.group({
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
        args.tgl_masuk = this.utilityService.onFormatDate(args.tgl_masuk, "Do/MM/yyyy");
        args.id_poli = null;

        delete args.gender;
        delete args.umur;

        this.FormSavePemasukanRawatJalan.setValue(args);

        this.onGetAllPoliByIdRegisterPasien(args.id_register);

        this.onGetHistoryTransPemasukanRawatJalanByIdRegister(args.id_register);
    }

    onGetAllPoliByIdRegisterPasien(RegisterId: number): void {
        this.pemasukanRawatJalanService.onGetAllPoliByIdRegister(RegisterId)
            .subscribe((result) => {
                this.PoliTindakanDatasource = result.data;
            });
    }

    onGetHistoryTransPemasukanRawatJalanByIdRegister(RegisterId: number): void {
        this.pemasukanRawatJalanService.onGetHistoryTransPemasukanRawatJalan(RegisterId)
            .subscribe((result) => {
                this.GridHistoryDatasource = result.data;
            });
    }

    handleChangePoliTindakan(args: any): void {
        const data: PoliModel = args.itemData;

        this.SelectedPoli = data.nama_poli;
    }

    handleSelectedRow(args: any): void {
        this.GridSelectedData = args.data;

        this.GridSelectedIndex = args.rowIndex;
    }

    handleToolbarClick(args: any): void {
        switch (args.item.id) {
            case "add":
                this.handleOpenModalPemasukanRawatJalan('Insert');
                break;
            case "edit":
                this.handleOpenModalPemasukanRawatJalan('Edit');
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

    handleOpenModalPemasukanRawatJalan(State: string): void {
        this.FormPemasukanRawatJalanState = State;

        this.modalRef = this.bsModalService.show(
            this.modalPemasukanRawatJalan,
            Object.assign({}, { class: 'modal-lg' })
        );

        this.ParamaterTambahanLookupTarifBerlaku = {
            id_poli: this.id_poli.value,
            id_kelas: this.id_kelas.value
        };

        if (State == "Edit") {
            setTimeout(() => {
                this.onFillFormPemasukanRawatJalan(this.GridSelectedData);
            }, 500);
        } else {
            setTimeout(() => {
                let el_dokter_periksa = document.querySelectorAll('#inputGroupfull_name')[0] as HTMLInputElement;
                el_dokter_periksa.value = this.nama_dokter_save.value;

                this.id_dokter.setValue(this.id_dokter_save.value);
                this.nama_dokter.setValue(this.nama_dokter_save.value);

                console.log(this.FormPemasukanRawatJalan.value);
            }, 500);
        }

        setTimeout(() => {
            this.id_poli_tarif.setValue(this.ParamaterTambahanLookupTarifBerlaku.id_poli);
            this.id_kelas_pelayanan.setValue(this.ParamaterTambahanLookupTarifBerlaku.id_kelas);
        }, 500);

        this.onResetFormPemasukanRawatJalan();
    }

    onFillFormPemasukanRawatJalan(Data: any): void {
        this.FormPemasukanRawatJalan.setValue(Data);

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

        this.onHitungTotalTarif(args.qty);
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
        this.onHitungTotalTarif(QtyTarif);
    }

    onHitungTotalTarif(QtyTarif: number): void {
        this.total_tarif.setValue(this.nominal_tarif.value * QtyTarif);
    }

    handleSimpanModalPemasukanRawatJalan(FormPemasukanRawatJalan: any): void {
        this.GridDatasource.push(FormPemasukanRawatJalan);

        this.GridData.Grid.refresh();

        setTimeout(() => {
            this.handleCloseModalPemasukanRawatJalan();

            this.onResetFormPemasukanRawatJalan();
        }, 100);
    }

    handleUpdateModalPemasukanRawatJalan(FormPemasukanRawatJalan: any): void {
        this.GridDatasource[this.GridSelectedIndex] = FormPemasukanRawatJalan;

        this.GridData.Grid.refresh();

        setTimeout(() => {
            this.handleCloseModalPemasukanRawatJalan();

            this.onResetFormPemasukanRawatJalan();
        }, 100);
    }

    handleCloseModalPemasukanRawatJalan(): void {
        this.modalRef.hide();
    }

    onResetFormPemasukanRawatJalan(): void {
        this.FormPemasukanRawatJalan.reset();

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
    }

    onResetFormSavePemasukanRawatJalan(): void {
        const today = this.utilityService.onFormatDate(new Date(), "Do/MM/yyyy");

        this.FormSavePemasukanRawatJalan.reset();

        (<HTMLInputElement>document.getElementById('inputGroupno_register')).value = "";
        this.id_register.setValue(0);
        this.no_register.setValue("");
        this.no_rekam_medis.setValue("");
        this.nama_pasien.setValue("");
        this.tgl_masuk.setValue(0);
        this.tgl_admisi.setValue(0);
        this.nama_debitur.setValue("");
        this.id_kelas.setValue(0);
        this.nama_kelas.setValue("");
        this.tgl_transaksi.setValue(today);
        this.id_poli.setValue(0);
        this.PoliTindakanDropdown.value = null;
        this.nama_dokter_save.setValue("");
    }

    onSubmitTransPemasukanRawatJalan(): void {
        let grid_datasource = [];

        this.GridDatasource.forEach((item) => {
            grid_datasource.push({
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
        }

        this.pemasukanRawatJalanService.onPostSaveTransPemasukanRawatJalan(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Transaksi Pemasukan IRJA Berhasil Disimpan')
                        .then(() => {
                            this.GridDatasource = [];

                            this.onGetHistoryTransPemasukanRawatJalanByIdRegister(this.id_register.value);

                            (<HTMLElement>document.getElementById('btnOffcanvasBottom')).click();

                            this.onResetFormSavePemasukanRawatJalan();
                        });
                }
            })
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
        this.FormPembatalanTransPemasukanRawatJalan.reset();

        this.id_register_batal.setValue(0);
        this.id_transaksi_batal.setValue(0);
        this.total_amount.setValue(0);
        this.reason_canceled.setValue("");
    }

    handleSubmitModalPembatalan(FormPembatalanTransPemasukanRawatJalan: any): void {
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
                this.pemasukanRawatJalanService.onPostCancelTransPemasukanRawatJalan(
                    {
                        id_register: FormPembatalanTransPemasukanRawatJalan.value.id_register,
                        id_transaksi: FormPembatalanTransPemasukanRawatJalan.value.id_transaksi,
                        total_amount: FormPembatalanTransPemasukanRawatJalan.value.total_amount,
                        reason_canceled: FormPembatalanTransPemasukanRawatJalan.value.reason_canceled,
                    }).subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', "Success", `Pembatalan Transaksi Berhasil`)
                                .then(() => {
                                    this.handleCloseModalPembatalan();

                                    setTimeout(() => {
                                        this.onGetHistoryTransPemasukanRawatJalanByIdRegister(FormPembatalanTransPemasukanRawatJalan.value.id_register);
                                    }, 300);
                                });
                        }
                    });
            }
        });
    }

    get id_register(): AbstractControl { return this.FormSavePemasukanRawatJalan.get('id_register'); }
    get no_register(): AbstractControl { return this.FormSavePemasukanRawatJalan.get('no_register'); }
    get no_rekam_medis(): AbstractControl { return this.FormSavePemasukanRawatJalan.get('no_rekam_medis'); }
    get nama_pasien(): AbstractControl { return this.FormSavePemasukanRawatJalan.get('nama_pasien'); }
    get tgl_masuk(): AbstractControl { return this.FormSavePemasukanRawatJalan.get('tgl_masuk'); }
    get tgl_admisi(): AbstractControl { return this.FormSavePemasukanRawatJalan.get('tgl_admisi'); }
    get nama_debitur(): AbstractControl { return this.FormSavePemasukanRawatJalan.get('nama_debitur'); }
    get id_kelas(): AbstractControl { return this.FormSavePemasukanRawatJalan.get('id_kelas'); }
    get nama_kelas(): AbstractControl { return this.FormSavePemasukanRawatJalan.get('nama_kelas'); }
    get tgl_transaksi(): AbstractControl { return this.FormSavePemasukanRawatJalan.get('tgl_transaksi'); }
    get id_poli(): AbstractControl { return this.FormSavePemasukanRawatJalan.get('id_poli'); }
    get id_dokter_save(): AbstractControl { return this.FormSavePemasukanRawatJalan.get('id_dokter'); }
    get nama_dokter_save(): AbstractControl { return this.FormSavePemasukanRawatJalan.get('nama_dokter'); }

    get id_tarif_berlaku(): AbstractControl { return this.FormPemasukanRawatJalan.get('id_tarif_berlaku'); }
    get id_setup_tarif(): AbstractControl { return this.FormPemasukanRawatJalan.get('id_setup_tarif'); }
    get kode_setup_tarif(): AbstractControl { return this.FormPemasukanRawatJalan.get('kode_setup_tarif'); }
    get nama_setup_tarif(): AbstractControl { return this.FormPemasukanRawatJalan.get('nama_setup_tarif'); }
    get qty(): AbstractControl { return this.FormPemasukanRawatJalan.get('qty'); }
    get id_dokter(): AbstractControl { return this.FormPemasukanRawatJalan.get('id_dokter'); }
    get nama_dokter(): AbstractControl { return this.FormPemasukanRawatJalan.get('nama_dokter'); }
    get id_doct_anas(): AbstractControl { return this.FormPemasukanRawatJalan.get('id_doct_anas'); }
    get nama_doct_anas(): AbstractControl { return this.FormPemasukanRawatJalan.get('nama_doct_anas'); }
    get doct_fee(): AbstractControl { return this.FormPemasukanRawatJalan.get('doct_fee'); }
    get medical_fee(): AbstractControl { return this.FormPemasukanRawatJalan.get('medical_fee'); }
    get hos_fee(): AbstractControl { return this.FormPemasukanRawatJalan.get('hos_fee'); }
    get com_fee(): AbstractControl { return this.FormPemasukanRawatJalan.get('com_fee'); }
    get anas_fee(): AbstractControl { return this.FormPemasukanRawatJalan.get('anas_fee'); }
    get nominal_tarif(): AbstractControl { return this.FormPemasukanRawatJalan.get('nominal_tarif'); }
    get total_tarif(): AbstractControl { return this.FormPemasukanRawatJalan.get('total_tarif'); }
    get id_poli_tarif(): AbstractControl { return this.FormPemasukanRawatJalan.get('id_poli'); }
    get id_kelas_pelayanan(): AbstractControl { return this.FormPemasukanRawatJalan.get('id_kelas_pelayanan'); }

    get id_register_batal(): AbstractControl { return this.FormPembatalanTransPemasukanRawatJalan.get('id_register'); }
    get id_transaksi_batal(): AbstractControl { return this.FormPembatalanTransPemasukanRawatJalan.get('id_transaksi'); }
    get total_amount(): AbstractControl { return this.FormPembatalanTransPemasukanRawatJalan.get('total_amount'); }
    get reason_canceled(): AbstractControl { return this.FormPembatalanTransPemasukanRawatJalan.get('reason_canceled'); }
}
