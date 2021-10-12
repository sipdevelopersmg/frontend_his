import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommandModel, GridComponent, GridModel, SelectionService, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { BehaviorSubject } from 'rxjs';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';
import { IPaymentMethodModel } from '../../../models/setup-data/setup-payment-method.model';
import { IInformasiPasienModel, IResepBillingSubDetailModel } from '../../../models/trans-billing/trans-billing.model';
import { SetupPaymentMethodService } from '../../../services/setup-data/setup-payment-method/setup-payment-method.service';
import { TransBillingService } from '../../../services/trans-billing/trans-billing.service';
import { HistoryInvoiceIrjaComponent } from './history-invoice-irja/history-invoice-irja.component';
import { HistoryPembayaranComponent } from './history-pembayaran/history-pembayaran.component';

@Component({
    selector: 'app-input-billing',
    templateUrl: './input-billing.component.html',
    styleUrls: ['./input-billing.component.css'],
    providers: [SelectionService]
})
export class InputBillingComponent implements OnInit, AfterViewInit {

    HeaderRibbon: string = "Input Billing Pasien";

    ButtonNav: ButtonNavModel[] = [
        { Id: 'Daftar_Invoice', Icons1: 'fa-file-invoice fa-sm', Captions: 'Daftar Invoice' },
        { Id: 'Baru', Icons1: 'fa-copy fa-sm', Captions: '[F3] Baru' },
        { Id: 'Create_Invoice', Icons1: 'fa-user-check fa-sm', Captions: '[F5] Buat Invoice' },
    ];

    InformasiPasien: IInformasiPasienModel;

    BillingItem: any[] = [];
    SelectedBillingItem: any;

    @ViewChild('GridDataTiket') GridDataTiket: GridComponent;
    GridDataTiketSelectionSettings: SelectionSettingsModel = { type: 'Multiple', mode: 'Row', checkboxMode: 'Default' };
    TotalAmountTiket = new BehaviorSubject(0);

    @ViewChild('GridDataTDMK') GridDataTDMK: GridComponent;
    GridDataTDMKSelectionSettings = { persistSelection: true }
    TotalAmountTDMK = new BehaviorSubject(0);

    @ViewChild('GridDataTDLAB') GridDataTDLAB: GridComponent;
    TotalAmountTDLAB = new BehaviorSubject(0);

    @ViewChild('GridDataTDRAD') GridDataTDRAD: GridComponent;
    TotalAmountTDRAD = new BehaviorSubject(0);

    @ViewChild('GridDataResep') GridDataResep: GridComponent;
    GridResepResizeSettings = { mode: 'Auto' };
    ChildResepDatasource: IResepBillingSubDetailModel[] = [];
    ChildGridResep: GridModel = {};
    TotalAmountResep = new BehaviorSubject(0);

    OffcanvasRiwayatTitle: string;
    @ViewChild('HistoryPembayaranBillingRawatJalan') HistoryPembayaranBillingRawatJalan: HistoryPembayaranComponent;

    PaymentMethod: IPaymentMethodModel[] = [];
    SelectedHeader: any = {};

    // ** Modal Pembayaran
    ModalPembayaranTitle: string = "Pembayaran Uang Cash";
    PembayaranState: string = "CASH";

    FormInputInvoice: FormGroup;

    FormInputKlaimDebitur: FormGroup;

    // ** Grid Pembayaran
    @ViewChild('GridDataPembayaran') GridDataPembayaran: GridComponent;
    GridDataPembayaranDatasource: any[] = [];
    CommandPembayaran: CommandModel[] = [
        { buttonOption: { iconCss: 'fas fa-times fa-sm' } }
    ];

    TotalTransaksiPembayaran = 0;
    BiayaBankPembayaran = 0;
    GrandTotalTransaksiPembayaran = 0;
    JumlahBayarPembayaran = 0;
    KurangBayarPembayaran = 0;

    @ViewChild('HistoryInvoiceRawatJalan') HistoryInvoiceRawatJalan: HistoryInvoiceIrjaComponent;

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private encryptionService: EncryptionService,
        private transBillingService: TransBillingService,
        private setupPaymentMethodService: SetupPaymentMethodService,
    ) { }

    ngOnInit(): void {
        this.FormInputInvoice = this.formBuilder.group({
            total_amount: [0, []],
            total_tagihan: [0, []],
            claim_amount: [0, []],
            deposit_amount: [0, []],
            paid_amount: [0, []],
        });

        this.FormInputKlaimDebitur = this.formBuilder.group({
            jumlah_klaim: [0, []],
            saldo_klaim_digunakan: [0, []],
            saldo_klaim_sisa: [0, []],
        });

        this.onGetDataPaymentMethod();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["no_register"]);

            this.onGetDataBillingByNoRegister(NoRegister);
        }, 1);
    }

    onGetDataBillingByNoRegister(RegisterNo: string): void {
        this.transBillingService.onGetAll(RegisterNo)
            .subscribe((result) => {

                this.InformasiPasien = result.data.informasi_pasien;

                if (result.data.tiket) {
                    this.BillingItem.push({ ...result.data.tiket });
                }

                if (result.data.tdmk) {
                    this.BillingItem.push({ ...result.data.tdmk });
                }

                if (result.data.tdlab) {
                    this.BillingItem.push({ ...result.data.tdlab });
                }

                if (result.data.tdrad) {
                    this.BillingItem.push({ ...result.data.tdrad });
                }

                if (result.data.resep) {
                    this.BillingItem.push({ ...result.data.resep });
                }

                this.handleGetSaldoKlaim(this.InformasiPasien.id_register);

                this.total_tagihan.setValue(this.InformasiPasien.total_biaya);

                this.HeaderRibbon = `Input Billing Pasien ${this.InformasiPasien.nama_pasien}`;
            });
    }

    onGetDataPaymentMethod(): void {
        this.setupPaymentMethodService.onGetAll()
            .subscribe((result) => {
                this.PaymentMethod = result.data;
            });
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Daftar_Invoice':
                this.HistoryInvoiceRawatJalan.handleOpenHistoryInvoice();
                break;
            case 'Create_Invoice':
                this.handleOpenModalPembayaran();
                // this.onCreateInvoice();
                break;
            default:
                break;
        }
    }

    handleChangeSlipTagihanCheck(): void {
        let daftar_slip_tagihan_check = document.getElementById('daftar_slip_tagihan_check') as HTMLInputElement;

        this.BillingItem.forEach((item) => {
            let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;

            daftar_slip_tagihan_check.checked == true ? check.checked = true : check.checked = false;

            this.handleChangeItemBillingCheck(item);
        });
    }

    handleTogglingCardDetailItem(item: any): void {
        let icon = document.getElementById('icon_' + item.jenis_transaksi) as HTMLElement;

        let card_body = document.getElementById('card_body_' + item.jenis_transaksi) as HTMLElement;

        // ** Change Icon class
        if (icon.classList.contains('fa-chevron-down')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');

            card_body.removeAttribute("hidden");
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');

            card_body.setAttribute("hidden", "true");
        }
    }

    handleChangeItemBillingCheck(item: any): void {
        let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;

        if (check.checked == true) {
            this.onTogglingGridSelectedRow(true, item);
        };

        if (check.checked == false) {
            this.onTogglingGridSelectedRow(false, item);

            let daftar_slip_tagihan_check = document.getElementById('daftar_slip_tagihan_check') as HTMLInputElement;
            daftar_slip_tagihan_check.checked = false;
        };
    }

    onTogglingGridSelectedRow(check: boolean, item: any): void {
        if (check) {
            switch (item.jenis_transaksi) {
                case 'TKT':
                    this.GridDataTiket.selectRowsByRange(0, this.GridDataTiket.dataSource['length'] - 1);
                    break;
                case 'TDMK':
                    this.GridDataTDMK.selectRowsByRange(0, this.GridDataTDMK.dataSource['length'] - 1);
                    break;
                case 'TDLAB':
                    this.GridDataTDLAB.selectRowsByRange(0, this.GridDataTDLAB.dataSource['length'] - 1);
                    break;
                case 'TDRAD':
                    this.GridDataTDRAD.selectRowsByRange(0, this.GridDataTDRAD.dataSource['length'] - 1);
                    break;
                case 'RESEP':
                    this.GridDataResep.selectRowsByRange(0, this.GridDataResep.dataSource['length'] - 1);
                    break;
                default:
                    break;
            };
        }
        else {
            switch (item.jenis_transaksi) {
                case 'TKT':
                    this.GridDataTiket.clearSelection();
                    break;
                case 'TDMK':
                    this.GridDataTDMK.clearSelection();
                    break;
                case 'TDLAB':
                    this.GridDataTDLAB.clearSelection();
                    break;
                case 'TDRAD':
                    this.GridDataTDRAD.clearSelection();
                    break;
                case 'RESEP':
                    this.GridDataResep.clearSelection();
                    break;
                default:
                    break;
            };
        }
    }

    onCheckIfAllGridChecked(): void {
        let jenis_transaksi = [];

        this.BillingItem.filter((item) => {
            if (item.detail.length > 0) {
                jenis_transaksi.push(item);
            }
        });

        let is_checked_all = [];

        for (let i = 0; i < jenis_transaksi.length; i++) {
            let check = document.getElementById(jenis_transaksi[i].jenis_transaksi + '_check') as HTMLInputElement;

            is_checked_all.push(check.checked);
        }

        let found = false;

        for (let i = 0; i < is_checked_all.length; i++) {
            if (is_checked_all[i] === false) {
                found = false;
                break;
            }
        }

        console.log(found);
    }

    // ** TIKET ==============
    handleSelectedRowDataTiket(args: any, item: any): void {
        let selected_records = this.GridDataTiket.getSelectedRecords();

        if (args.data.status_bayar != "OPEN") {
            args.cancel = true;

            let index = selected_records.map((item) => { return item['id_transaksi'] }).indexOf(args.data.id_transaksi);

            selected_records.splice(index, 1);

            this.GridDataTiket.refresh();
        }

        let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;

        if (selected_records.length == this.GridDataTiket.dataSource['length']) {
            check.checked = true;
        }

        if (selected_records.length == 0) {
            check.checked = false;
        }

        this.onCountTotalDataTiket();
    }

    handleDeselectedRowDataTiket(args: any, item: any): void {
        let selected_records = this.GridDataTiket.getSelectedRecords();

        if (selected_records.length < this.GridDataTiket.dataSource['length']) {
            let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;
            check.checked = false;
        }

        this.onCountTotalDataTiket();
    }

    onCountTotalDataTiket(): void {
        let total_amount = 0;

        let selected_records = this.GridDataTiket.getSelectedRecords();

        selected_records.forEach((item) => {
            total_amount += item['total_amount'];
        });

        this.TotalAmountTiket.next(total_amount);

        setTimeout(() => {
            this.onCountTotalBiaya();
        }, 1000);
    }

    // ** TDMK ===============
    handleSelectedRowDataTDMK(args: any, item: any): void {
        let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;

        let selected_records = this.GridDataTDMK.getSelectedRecords();

        let contains_not_open = selected_records.some((item) => { return item['status_bayar'] !== "OPEN" });

        if (contains_not_open) {
            this.GridDataTDMK.clearSelection();
            this.GridDataTDMK.refresh();
            check.checked = false;
        } else {
            if (selected_records.length == this.GridDataTDMK.dataSource['length']) {
                check.checked = true;
            }
        }

        this.onCountTotalDataTDMK();
    }

    handleDeselectedRowDataTDMK(args: any, item: any): void {
        let selected_records = this.GridDataTDMK.getSelectedRecords();

        if (selected_records.length < this.GridDataTDMK.dataSource['length']) {
            let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;
            check.checked = false;
        }

        this.onCountTotalDataTDMK();
    }

    onCountTotalDataTDMK(): void {
        let total_amount = 0;

        let selected_records = this.GridDataTDMK.getSelectedRecords();

        selected_records.forEach((item: any) => {
            total_amount += item['total_amount'];
        });

        this.TotalAmountTDMK.next(total_amount);

        setTimeout(() => {
            this.onCountTotalBiaya();
        }, 1000);
    }

    // ** TDLAB =============
    handleSelectedRowDataTDLAB(args: any, item: any): void {
        let selected_records = this.GridDataTDLAB.getSelectedRecords();

        if (selected_records.length == this.GridDataTDLAB.dataSource['length']) {
            let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;
            check.checked = true;
        }

        this.onCountTotalDataTDLAB();
    }

    handleDeselectedRowDataTDLAB(args: any, item: any): void {
        let selected_records = this.GridDataTDLAB.getSelectedRecords();

        if (selected_records.length < this.GridDataTDLAB.dataSource['length']) {
            let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;
            check.checked = false;
        }

        this.onCountTotalDataTDLAB();
    }

    onCountTotalDataTDLAB(): void {
        let total_amount = 0;

        let selected_records = this.GridDataTDLAB.getSelectedRecords();

        selected_records.forEach((item) => {
            total_amount += item['total_amount'];
        });

        this.TotalAmountTDLAB.next(total_amount);

        setTimeout(() => {
            this.onCountTotalBiaya();
        }, 1000);
    }

    // ** TDRAD =============
    handleSelectedRowDataTDRAD(args: any, item: any): void {
        let selected_records = this.GridDataTDRAD.getSelectedRecords();

        if (selected_records.length == this.GridDataTDRAD.dataSource['length']) {
            let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;
            check.checked = true;
        }

        this.onCountTotalDataTDRAD();
    }

    handleDeselectedRowDataTDRAD(args: any, item: any): void {
        let selected_records = this.GridDataTDRAD.getSelectedRecords();

        if (selected_records.length < this.GridDataTDRAD.dataSource['length']) {
            let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;
            check.checked = false;
        }

        this.onCountTotalDataTDRAD();
    }

    onCountTotalDataTDRAD(): void {
        let total_amount = 0;

        let selected_records = this.GridDataTDRAD.getSelectedRecords();

        selected_records.forEach((item) => {
            total_amount += item['total_amount'];
        });

        this.TotalAmountTDRAD.next(total_amount);

        setTimeout(() => {
            this.onCountTotalBiaya();
        }, 1000);
    }

    // ** RESEP ==============
    handleSelectedRowDataResep(args: any, item: any): void {
        let selected_records = this.GridDataTDRAD.getSelectedRecords();

        if (selected_records.length == this.GridDataTDRAD.dataSource['length']) {
            let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;
            check.checked = true;
        }

        this.onCountTotalDataResep();
    }

    handleDeselectedRowDataResep(args: any, item: any): void {
        let selected_records = this.GridDataTDRAD.getSelectedRecords();

        if (selected_records.length < this.GridDataTDRAD.dataSource['length']) {
            let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;
            check.checked = false;
        }

        this.onCountTotalDataResep();
    }

    handleLoadDataResep(args: any): void {
        this.transBillingService.ResepChildDatasource$
            .subscribe((result) => {
                if (result.length > 0) {
                    this.ChildGridResep = {
                        dataSource: result,
                        queryString: 'penjualan_obat_id',
                        rowHeight: 30,
                        allowResizing: true,
                        columns: [
                            { field: 'no_urut', headerText: 'NO', textAlign: 'Center', headerTextAlign: 'Center', width: 50 },
                            { field: 'nama_obat', headerText: 'NAMA OBAT', textAlign: 'Left', headerTextAlign: 'Left', width: 150, format: 'N2' },
                            { field: 'harga_satuan', headerText: 'HARGA SATUAN', textAlign: 'Right', headerTextAlign: 'Right', width: 100, format: 'N2' },
                            { field: 'qty_jual', headerText: 'QTY', textAlign: 'Right', headerTextAlign: 'Right', width: 70, format: 'N2' },
                            { field: 'sub_total', headerText: 'SUBTOTAL', textAlign: 'Right', headerTextAlign: 'Right', width: 150, format: 'N2' },
                        ]
                    };
                }
            });
    }

    handleDataBoundDataResep(): void {
        this.GridDataResep.autoFitColumns();
    }

    onCountTotalDataResep(): void {
        let total_amount = 0;

        let selected_records = this.GridDataResep.getSelectedRecords();

        selected_records.forEach((item) => {
            total_amount += item['total_transaksi'];
        });

        this.TotalAmountResep.next(total_amount);

        setTimeout(() => {
            this.onCountTotalBiaya();
        }, 1000);
    }

    // ** ROW DATA BOUND ================
    handleRowDataBound(args: any): void {
        if (args.data['status_bayar'] !== "OPEN") {
            args.row.classList.add('e-disabled');
        };
    }

    // ** HITUNG TOTAL BIAYA ==================
    onCountTotalBiaya(): void {
        let total_biaya =
            this.TotalAmountTiket.value +
            this.TotalAmountTDMK.value +
            this.TotalAmountTDLAB.value +
            this.TotalAmountTDRAD.value +
            this.TotalAmountResep.value;

        this.total_amount.setValue(total_biaya);

        this.onCountSisaTagihan();
    }

    // ** SALDO KLAIM =========================
    handleGetSaldoKlaim(RegisterId: number): void {

        this.onResetFormKlaimDebitur();

        this.transBillingService.onGetSaldoKlaim(RegisterId)
            .subscribe((result) => {
                if (result.responseResult) {
                    this.jumlah_klaim.setValue(result.data.jumlah_klaim);
                    this.saldo_klaim_digunakan.setValue(result.data.saldo_klaim_digunakan);
                    this.saldo_klaim_sisa.setValue(result.data.saldo_klaim_sisa);
                    this.claim_amount.setValue(result.data.saldo_klaim_sisa);

                    this.onCountSisaTagihan();
                };
            });
    }

    handleChangeJumlahKlaim(JumlahKlaim: number): void {
        this.saldo_klaim_sisa.setValue(JumlahKlaim - this.saldo_klaim_digunakan.value);
    }

    handleSubmitFormInputKlaimDebitur(FormInputKlaimDebitur: any): void {
        let id_register = this.InformasiPasien.id_register;
        let jumlah_klaim = FormInputKlaimDebitur.jumlah_klaim;

        this.transBillingService.onPostSaveSaldoKlaim(id_register, jumlah_klaim)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Saldo Klaim Berhasil Disimpan')
                        .then(() => {
                            let btnCloseKlaim = document.getElementById('btnCloseKlaim') as HTMLElement;
                            btnCloseKlaim.click();

                            this.onResetFormKlaimDebitur();

                            this.claim_amount.setValue(FormInputKlaimDebitur.saldo_klaim_sisa);
                        })
                }
            })
    }

    onResetFormKlaimDebitur(): void {
        this.FormInputKlaimDebitur.reset();
        this.jumlah_klaim.setValue(0);
        this.saldo_klaim_digunakan.setValue(0);
        this.saldo_klaim_sisa.setValue(0);
    }

    // ** HITUNG SISA TAGIHAN =================
    onCountSisaTagihan(): void {
        // this.paid_amount.setValue(this.total_amount.value - (this.disc_dokter_amount.value + this.claim_amount.value + this.deposit_amount.value));
        this.paid_amount.setValue(this.total_amount.value - (this.claim_amount.value + this.deposit_amount.value));
    }

    // ** CREATE INVOICE ======================
    onCreateInvoice(): void {
        Swal.fire({
            title: 'Invoice Baru Akan Dibuat',
            text: "Apakah Anda Yakin Ingin Melanjutkan ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya, Saya Yakin',
            cancelButtonText: 'Tidak',
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {

                let trans_header = {
                    id_register: this.InformasiPasien.id_register,
                    total_amount: this.FormInputInvoice.value.total_amount,
                    // disc_dokter_amount: this.FormInputInvoice.value.disc_dokter_amount,
                    claim_amount: this.FormInputInvoice.value.claim_amount,
                    deposit_amount: this.FormInputInvoice.value.deposit_amount,
                    paid_amount: this.FormInputInvoice.value.paid_amount
                };

                let trans_detail = [
                    ...this.GridDataTiket.getSelectedRecords(),
                    ...this.GridDataTDMK.getSelectedRecords(),
                    ...this.GridDataTDLAB.getSelectedRecords(),
                    ...this.GridDataTDRAD.getSelectedRecords(),
                    ...this.GridDataResep.getSelectedRecords(),
                ];

                this.transBillingService.onPostSaveInvoiceWithoutPayment({ trans_header: trans_header, trans_detail: trans_detail })
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', 'Success', 'Invoice Berhasil Dibuat')
                                .then(() => {
                                    let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["no_register"]);

                                    this.BillingItem = [];

                                    this.onGetDataBillingByNoRegister(NoRegister);
                                })
                        }
                    })

            }
        });
    }

    // ** HISTORY PEMBAYARAN ITEM =============
    handleClickHistoryItem(item: any): void {
        this.HistoryPembayaranBillingRawatJalan.handleOpenRiwayatPembayaran();

        this.OffcanvasRiwayatTitle = `${'Riwayat Pembayaran ' + item.jenis_transaksi}`;
    }

    // ** MODAL PEMBAYARAN ====================
    handleOpenModalPembayaran(): void {
        let btnModalPembayaran = document.getElementById('btnModalPembayaran') as HTMLElement;
        btnModalPembayaran.click();

        this.GridDataPembayaranDatasource = [];

        let header = {
            id_register: this.InformasiPasien.id_register,
            total_amount: this.FormInputInvoice.value.total_amount,
            claim_amount: this.FormInputInvoice.value.claim_amount,
            deposit_amount: this.FormInputInvoice.value.deposit_amount,
            paid_amount: this.FormInputInvoice.value.paid_amount,
            belum_lunas: this.FormInputInvoice.value.paid_amount,
        };

        this.TotalTransaksiPembayaran = header.paid_amount;

        this.GrandTotalTransaksiPembayaran = header.paid_amount - this.BiayaBankPembayaran;

        this.transBillingService.HeaderBilling.next(header);
    }

    handleCloseModalPembayaran(): void {
        this.onCreateInvoice();
    }

    onChangeMetodePembayaran(State: string): void {
        this.PembayaranState = State;
    }

    handleClickButtonPaymentMethod(item: IPaymentMethodModel): void {
        this.PembayaranState = (item.payment_method).replace(" ", "_");

        this.ModalPembayaranTitle = `Pembayaran ${item.payment_method}`;
    }

    onSendPaymentCash(args: any): void {
        args.no_urut = this.GridDataPembayaranDatasource.length + 1;

        this.GridDataPembayaranDatasource.push(args);

        this.GridDataPembayaran.refresh();

        this.onCountTotalPembayaran();
    }

    onSendPaymentQRIS(args: any): void {
        args.no_urut = this.GridDataPembayaranDatasource.length + 1;

        this.GridDataPembayaranDatasource.push(args);

        this.GridDataPembayaran.refresh();

        this.onCountTotalPembayaran();
    }

    onSendPaymentVoucher(args: any): void {
        args.no_urut = this.GridDataPembayaranDatasource.length + 1;

        this.GridDataPembayaranDatasource.push(args);

        this.GridDataPembayaran.refresh();

        this.onCountTotalPembayaran();
    }

    onSendPaymentDebit(args: any): void {
        args.no_urut = this.GridDataPembayaranDatasource.length + 1;

        this.GridDataPembayaranDatasource.push(args);

        this.GridDataPembayaran.refresh();

        this.onCountTotalPembayaran();
    }

    onSendPaymentCredit(args: any): void {
        args.no_urut = this.GridDataPembayaranDatasource.length + 1;

        this.GridDataPembayaranDatasource.push(args);

        this.GridDataPembayaran.refresh();

        this.onCountTotalPembayaran();
    }

    onCountTotalPembayaran(): void {
        this.JumlahBayarPembayaran = 0;

        for (let i = 0; i < this.GridDataPembayaranDatasource.length; i++) {
            this.JumlahBayarPembayaran += this.GridDataPembayaranDatasource[i].jumlah_bayar;
        }

        this.KurangBayarPembayaran = this.GrandTotalTransaksiPembayaran - this.JumlahBayarPembayaran;

        let header = {
            id_register: this.InformasiPasien.id_register,
            total_amount: this.FormInputInvoice.value.total_amount,
            claim_amount: this.FormInputInvoice.value.claim_amount,
            deposit_amount: this.FormInputInvoice.value.deposit_amount,
            paid_amount: this.FormInputInvoice.value.paid_amount,
            belum_lunas: this.KurangBayarPembayaran,
        };

        this.transBillingService.HeaderBilling.next(header);
    }

    handleCommandClickPembayaran(args: any): void {
        let no_urut = args.rowData.no_urut;

        let index = this.GridDataPembayaranDatasource.map((item) => { return item.no_urut }).indexOf(no_urut);

        if (index > -1) {
            this.GridDataPembayaranDatasource.splice(index, 1);

            this.GridDataPembayaran.refresh();

            this.onCountTotalPembayaran();
        }
    }

    handleClickSubmitPembayaran(): void {

    }

    get total_amount(): AbstractControl { return this.FormInputInvoice.get('total_amount'); }
    get total_tagihan(): AbstractControl { return this.FormInputInvoice.get('total_tagihan'); }
    // get disc_dokter_amount(): AbstractControl { return this.FormInputInvoice.get('disc_dokter_amount'); }
    get claim_amount(): AbstractControl { return this.FormInputInvoice.get('claim_amount'); }
    get deposit_amount(): AbstractControl { return this.FormInputInvoice.get('deposit_amount'); }
    get paid_amount(): AbstractControl { return this.FormInputInvoice.get('paid_amount'); }

    get jumlah_klaim(): AbstractControl { return this.FormInputKlaimDebitur.get('jumlah_klaim'); }
    get saldo_klaim_sisa(): AbstractControl { return this.FormInputKlaimDebitur.get('saldo_klaim_sisa'); }
    get saldo_klaim_digunakan(): AbstractControl { return this.FormInputKlaimDebitur.get('saldo_klaim_digunakan'); }
}
