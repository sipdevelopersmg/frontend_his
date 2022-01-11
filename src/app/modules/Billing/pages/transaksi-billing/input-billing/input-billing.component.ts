import { AfterViewInit, Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommandModel, GridComponent, GridModel, SelectionService, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { BehaviorSubject } from 'rxjs';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { IPaymentMethodModel } from '../../../models/setup-data/setup-payment-method.model';
import { IInformasiPasienModel } from '../../../models/trans-billing/trans-billing.model';
import { SetupPaymentMethodService } from '../../../services/setup-data/setup-payment-method/setup-payment-method.service';
import { TransBillingService } from '../../../services/trans-billing/trans-billing.service';
import { HistoryInvoiceIrjaComponent } from './history-invoice-irja/history-invoice-irja.component';
import { HistoryPembayaranComponent } from './history-pembayaran/history-pembayaran.component';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { SidebarChildMenuModel } from 'src/app/modules/core/models/navigation/menu.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HistorySemuaPembayaranComponent } from './history-semua-pembayaran/history-semua-pembayaran.component';
import Swal from 'sweetalert2';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';

@Component({
    selector: 'app-input-billing',
    templateUrl: './input-billing.component.html',
    styleUrls: ['./input-billing.component.css'],
    providers: [SelectionService]
})
export class InputBillingComponent implements OnInit, AfterViewInit {

    HeaderRibbon = 'Input Billing Pasien';

    ButtonNav: ButtonNavModel[] = [];

    InformasiPasien: IInformasiPasienModel;

    InformasiUser = JSON.parse(localStorage.getItem('UserData'));

    BillingItem: any[] = [];
    SelectedBillingItem: any;

    @ViewChild('GridDataTiket') GridDataTiket: GridComponent;
    GridDataTiketSelectionSettings: SelectionSettingsModel = { type: 'Multiple' };
    GridDataTiketContainsNotOpen = false;
    TotalAmountTiket = new BehaviorSubject(0);

    @ViewChild('GridDataTDMK') GridDataTDMK: GridComponent;
    GridDataTDMKSelectionSettings: SelectionSettingsModel = { type: 'Multiple' };
    GridDataTDMKContainsNotOpen = false;
    TotalAmountTDMK = new BehaviorSubject(0);

    @ViewChild('GridDataTDLAB') GridDataTDLAB: GridComponent;
    GridDataTDLABSelectionSettings: SelectionSettingsModel = { type: 'Multiple' };
    GridDataTDLABContainsNotOpen = false;
    TotalAmountTDLAB = new BehaviorSubject(0);

    @ViewChild('GridDataTDRAD') GridDataTDRAD: GridComponent;
    GridDataTDRADSelectionSettings: SelectionSettingsModel = { type: 'Multiple' };
    GridDataTDRADContainsNotOpen = false;
    TotalAmountTDRAD = new BehaviorSubject(0);

    @ViewChild('GridDataResep') GridDataResep: GridComponent;
    GridDataResepSelectionSettings: SelectionSettingsModel = { type: 'Multiple' };
    GridDataResepContainsNotOpen = false;
    GridResepResizeSettings = { mode: 'Auto' };
    ChildResepDatasource: any[] = [];
    ChildGridResep: GridModel = {};
    TotalAmountResep = new BehaviorSubject(0);

    OffcanvasRiwayatTitle: string;
    @ViewChild('HistoryPembayaranBillingRawatJalan') HistoryPembayaranBillingRawatJalan: HistoryPembayaranComponent;

    PaymentMethod: IPaymentMethodModel[] = [];
    SelectedHeader: any = {};

    // ** Modal Pembayaran
    ModalPembayaranTitle = 'Pembayaran Uang Cash';
    PembayaranState = 'CASH';

    FormInputInvoice: FormGroup;

    FormInputKlaimDebitur: FormGroup;

    // ** Grid Pembayaran
    @ViewChild('GridDataPembayaran') GridDataPembayaran: GridComponent;
    GridDataPembayaranDatasource: any[] = [];
    CommandPembayaran: CommandModel[] = [
        { buttonOption: { iconCss: 'fas fa-times fa-sm' } }
    ];

    ModalPembayaranState = 'Invoice';

    TotalTransaksiPembayaran = 0;
    BiayaBankPembayaran = 0;
    GrandTotalTransaksiPembayaran = 0;
    JumlahBayarPembayaran = 0;
    KurangBayarPembayaran = 0;

    DataFinalisasiPembayaran = new BehaviorSubject([]);
    DataFinalisasiPembayaran$ = this.DataFinalisasiPembayaran.asObservable();

    @ViewChild('HistoryInvoiceRawatJalan') HistoryInvoiceRawatJalan: HistoryInvoiceIrjaComponent;
    SelectedInvoiceRawatJalan: number[];

    @ViewChild('HistorySemuaPembayaranRawatJalan') HistorySemuaPembayaranRawatJalan: HistorySemuaPembayaranComponent;

    modalRef: BsModalRef;
    @ViewChild('modalPembatalan') modalPembatalan: TemplateRef<any>;

    FormPembatalan: FormGroup;
    FormPembatalanState = 'Batal_Posting';
    ModalPembatalanTitle = 'Posting';

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private navigationService: NavigationService,
        private encryptionService: EncryptionService,
        private transBillingService: TransBillingService,
        private setupPaymentMethodService: SetupPaymentMethodService,
    ) { }

    @HostListener('document:keydown', ['$event'])
    onKeyDownHandler(event: KeyboardEvent) {
        if (event.keyCode === 114) {
            event.preventDefault();
            this.handleClickButtonNav('Baru')
        }

        if (event.keyCode === 116) {
            event.preventDefault();
            this.handleClickButtonNav('Create_Invoice');
        }
    }

    ngOnInit(): void {
        this.FormInputInvoice = this.formBuilder.group({
            total_amount: [0, []],
            total_tagihan: [0, []],
            claim_amount: [0, []],
            deposit_amount: [0, []],
            paid_amount: [0, []],
            charge_amount: [0, []],
            total_payment: [0, []],
        });

        this.FormInputKlaimDebitur = this.formBuilder.group({
            jumlah_klaim: [0, []],
            saldo_klaim_digunakan: [0, []],
            saldo_klaim_sisa: [0, []],
        });

        this.FormPembatalan = this.formBuilder.group({
            id_register: [0, []],
            id_payment: [0, []],
            id_invoice: [0, []],
            reason_canceled: ['', []],
        });

        this.onGetDataPaymentMethod();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            const NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params['no_register']);

            this.onGetDataBillingByNoRegister(NoRegister);
        }, 1);
    }

    onGetButtonSidebarMenu(): void {
        const SidebarMenu: SidebarChildMenuModel = JSON.parse(localStorage.getItem('ActiveSidebarMenu'))[0];

        const Button = SidebarMenu.button;

        let UserData: IAuthenticationResponseModel = JSON.parse(localStorage.getItem('UserData'));

        if (Button.length < 1 && (UserData.id_role === 5 || UserData.nama_role === "pengawas kasir")) {
            // Button.forEach((item) => {
            //     if (item.caption !== 'Batal Payment') {
            //         this.ButtonNav.push({
            //             Id: (item.caption).replace(' ', '_'),
            //             Icons1: item.icon,
            //             Icons2: item.icon2,
            //             StackIcon: JSON.parse(item.stack_icon),
            //             Captions: item.caption
            //         });
            //     }
            // });

            this.ButtonNav.push({
                Id: 'Batal_Posting',
                Icons1: 'fa-file-import fa-sm',
                Icons2: 'fa-ban fa-sm text-danger',
                StackIcon: true,
                Captions: 'Batal Posting'
            });
        }

        if (Button.length < 1 && (UserData.id_role === 4 || UserData.nama_role === "kasir")) {
            this.ButtonNav.push({
                Id: 'Posting',
                Icons1: 'fa-file-import fa-sm',
                Captions: 'Posting'
            });
        }
    }

    onGetDataBillingByNoRegister(RegisterNo: string): void {
        this.transBillingService.onGetAll(RegisterNo)
            .subscribe((result) => {
                this.InformasiPasien = result.data.informasi_pasien;

                this.total_payment.setValue(this.InformasiPasien.total_payment);

                this.id_register.setValue(this.InformasiPasien.id_register);

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

                this.onCheckBillingItemStatusBayar(this.BillingItem);

                this.handleGetSaldoKlaim(this.InformasiPasien.id_register);

                this.onGetSaldoDeposit(this.InformasiPasien.id_register);

                this.onCountTotalTagihan(result.data.tiket.detail, result.data.tdmk.detail, result.data.tdlab.detail, result.data.tdrad.detail, result.data.resep.detail);

                this.HeaderRibbon = `Input Billing Pasien ${this.InformasiPasien.nama_pasien}`;
            });
    }

    onCheckBillingItemStatusBayar(BillingItem: any[]): void {
        let all_detail = [];

        BillingItem.forEach((item) => {
            all_detail.push(...item.detail);
        });

        let UserData: IAuthenticationResponseModel = JSON.parse(localStorage.getItem('UserData'));

        let is_open = all_detail.some((item) => { return item.status_bayar === "OPEN" })

        let is_closed = all_detail.some((item) => { return item.status_bayar === "CLOSED" });

        let is_paid = all_detail.some((item) => { return item.status_bayar === "PAID" });

        // if (this.InformasiPasien.status_billing === "OPEN") {
        //     if (is_open) {
        //         this.ButtonNav = [
        //             { Id: 'Baru', Icons1: 'fa-copy fa-sm', Captions: '[F3] Baru' },
        //             { Id: 'Restitusi', Icons1: 'fa-exchange-alt fa-sm', Captions: 'Restitusi' },
        //             { Id: 'Deposit', Icons1: 'fa-hand-holding-usd fa-sm', Captions: 'Deposit' },
        //             { Id: 'Daftar_Invoice', Icons1: 'fa-file-invoice fa-sm', Captions: 'Input Payment' },
        //             { Id: 'Daftar_Payment', Icons1: 'fa-book fa-sm', Captions: 'Daftar Payment' },
        //             { Id: 'Create_Invoice', Icons1: 'fa-user-check fa-sm', Captions: '[F5] Buat Invoice' },
        //             { Id: 'Cetak_Rincian_Biaya', Icons1: 'fa-print fa-sm', Captions: 'Print Rincian Biaya' },
        //         ];
        //     };

        //     if (is_closed) {
        //         this.ButtonNav = [
        //             { Id: 'Baru', Icons1: 'fa-copy fa-sm', Captions: '[F3] Baru' },
        //             { Id: 'Restitusi', Icons1: 'fa-exchange-alt fa-sm', Captions: 'Restitusi' },
        //             { Id: 'Deposit', Icons1: 'fa-hand-holding-usd fa-sm', Captions: 'Deposit' },
        //             { Id: 'Daftar_Invoice', Icons1: 'fa-file-invoice fa-sm', Captions: 'Input Payment' },
        //             { Id: 'Daftar_Payment', Icons1: 'fa-book fa-sm', Captions: 'Daftar Payment' },
        //             { Id: 'Cetak_Rincian_Biaya', Icons1: 'fa-print fa-sm', Captions: 'Print Rincian Biaya' },
        //         ];
        //     };

        //     if (is_paid && (UserData.id_role === 4 || UserData.nama_role === "kasir")) {
        //         if (UserData.id_role === 4 || UserData.nama_role === "kasir") {
        //             this.ButtonNav = [
        //                 { Id: 'Baru', Icons1: 'fa-copy fa-sm', Captions: '[F3] Baru' },
        //                 { Id: 'Restitusi', Icons1: 'fa-exchange-alt fa-sm', Captions: 'Restitusi' },
        //                 { Id: 'Deposit', Icons1: 'fa-hand-holding-usd fa-sm', Captions: 'Deposit' },
        //                 { Id: 'Daftar_Invoice', Icons1: 'fa-file-invoice fa-sm', Captions: 'Input Payment' },
        //                 { Id: 'Daftar_Payment', Icons1: 'fa-book fa-sm', Captions: 'Daftar Payment' },
        //                 { Id: 'Cetak_Rincian_Biaya', Icons1: 'fa-print fa-sm', Captions: 'Print Rincian Biaya' },
        //                 { Id: 'Posting', Icons1: 'fa-file-import fa-sm', Captions: 'Posting' }
        //             ];
        //         };

        //         if (UserData.id_role === 5 || UserData.nama_role === "pengawas kasir") {
        //             this.ButtonNav = [
        //                 { Id: 'Baru', Icons1: 'fa-copy fa-sm', Captions: '[F3] Baru' },
        //                 { Id: 'Restitusi', Icons1: 'fa-exchange-alt fa-sm', Captions: 'Restitusi' },
        //                 { Id: 'Deposit', Icons1: 'fa-hand-holding-usd fa-sm', Captions: 'Deposit' },
        //                 { Id: 'Daftar_Invoice', Icons1: 'fa-file-invoice fa-sm', Captions: 'Input Payment' },
        //                 { Id: 'Daftar_Payment', Icons1: 'fa-book fa-sm', Captions: 'Daftar Payment' },
        //                 { Id: 'Cetak_Rincian_Biaya', Icons1: 'fa-print fa-sm', Captions: 'Print Rincian Biaya' },
        //             ];
        //         };
        //     };
        // }

        this.ButtonNav = [
            { Id: 'Baru', Icons1: 'fa-copy fa-sm', Captions: '[F3] Baru' },
            { Id: 'Restitusi', Icons1: 'fa-exchange-alt fa-sm', Captions: 'Restitusi' },
            { Id: 'Deposit', Icons1: 'fa-hand-holding-usd fa-sm', Captions: 'Deposit' },
            { Id: 'Daftar_Invoice', Icons1: 'fa-file-invoice fa-sm', Captions: 'Input Payment' },
            { Id: 'Daftar_Payment', Icons1: 'fa-book fa-sm', Captions: 'Daftar Payment' },
            { Id: 'Create_Invoice', Icons1: 'fa-user-check fa-sm', Captions: '[F5] Buat Invoice' },
            { Id: 'Cetak_Rincian_Biaya', Icons1: 'fa-print fa-sm', Captions: 'Print Rincian Biaya' },
            { Id: 'Posting', Icons1: 'fa-file-import fa-sm', Captions: 'Posting' }
        ];

        if (this.InformasiPasien.status_billing === "CLOSED" && (UserData.id_role === 5 || UserData.nama_role === "pengawas kasir")) {
            this.ButtonNav = [
                { Id: 'Baru', Icons1: 'fa-copy fa-sm', Captions: '[F3] Baru' },
                { Id: 'Restitusi', Icons1: 'fa-exchange-alt fa-sm', Captions: 'Restitusi' },
                { Id: 'Deposit', Icons1: 'fa-hand-holding-usd fa-sm', Captions: 'Deposit' },
                { Id: 'Daftar_Invoice', Icons1: 'fa-file-invoice fa-sm', Captions: 'Input Payment' },
                { Id: 'Daftar_Payment', Icons1: 'fa-book fa-sm', Captions: 'Daftar Payment' },
                { Id: 'Cetak_Rincian_Biaya', Icons1: 'fa-print fa-sm', Captions: 'Print Rincian Biaya' },
                { Id: 'Batal_Posting', Icons1: 'fa-file-import fa-sm', Icons2: 'fa-ban fa-sm text-danger', StackIcon: true, Captions: 'Batal Posting' }
            ];
        };
    }

    onGetSaldoDeposit(RegisterId: number): void {
        this.transBillingService.onGetSaldoDeposit(RegisterId)
            .subscribe((result) => {
                if (result.responseResult) {
                    this.deposit_amount.setValue(result.data.saldo_deposit_sisa);

                    this.onCountSisaTagihan();
                }
            });
    }

    onCountTotalTagihan(tiket: any[], tdmk: any[], tdlab: any[], tdrad: any[], resep: any[]): void {

        // ** ===== TIKET =======
        this.GridDataTiketContainsNotOpen = tiket.some((item) => item.status_bayar !== 'OPEN');

        let total_tagihan_tiket = 0;

        tiket.filter((item) => {
            if (item.status_bayar === 'OPEN') {
                return total_tagihan_tiket += item.total_amount;
            }
        });

        // ** ===== TDMK ======
        let total_tagihan_tdmk = 0;

        this.GridDataTDMKContainsNotOpen = tdmk.some((item) => { return item.status_bayar != 'OPEN' });

        tdmk.filter((item) => {
            if (item.status_bayar == 'OPEN') {
                return total_tagihan_tdmk += item.total_amount;
            }
        });

        // ** ===== TDLAB =====
        let total_tagihan_tdlab = 0;

        this.GridDataTDLABContainsNotOpen = tdlab.some((item) => { return item.status_bayar != 'OPEN' });

        tdlab.filter((item) => {
            if (item.status_bayar == 'OPEN') {
                return total_tagihan_tdlab += item.total_amount;
            }
        });

        // ** ===== TDRAD =====
        let total_tagihan_tdrad = 0;

        this.GridDataTDRADContainsNotOpen = tdrad.some((item) => { return item.status_bayar != 'OPEN' });

        tdrad.filter((item) => {
            if (item.status_bayar == 'OPEN') {
                return total_tagihan_tdrad += item.total_amount;
            }
        });

        // ** ===== RESEP =====
        let total_tagihan_resep = 0;

        this.GridDataResepContainsNotOpen = resep.some((item) => { return item.status_bayar != 'OPEN' });

        resep.filter((item) => {
            if (item.status_bayar == 'OPEN') {
                return total_tagihan_resep += item.total_amount;
            }
        });

        let total_tagihan = total_tagihan_tiket + total_tagihan_tdmk + total_tagihan_tdlab + total_tagihan_tdrad + total_tagihan_resep;

        this.total_tagihan.setValue(total_tagihan);
    }

    onGetDataPaymentMethod(): void {
        this.setupPaymentMethodService.onGetAll()
            .subscribe((result) => {
                this.PaymentMethod = result.data;
            });
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Baru':
                this.handleClearSelectionAllGrid();
                const NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params['no_register']);
                this.BillingItem = [];
                this.onGetDataBillingByNoRegister(NoRegister);
                break;
            case 'Restitusi':
                if (this.deposit_amount.value > 0) {
                    this.handleOpenModalPembayaran('Restitusi');
                } else {
                    this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Saldo Deposit Rp. 0');
                }
                break;
            case 'Deposit':
                if (this.InformasiPasien && this.InformasiPasien.status_billing == 'OPEN') {
                    this.handleOpenModalPembayaran('Deposit');
                } else {
                    this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Billing Sudah Diposting');
                }
                break;
            case 'Daftar_Invoice':
                let header = {
                    id_register: this.InformasiPasien.id_register,
                    total_amount: 0,
                    claim_amount: this.FormInputInvoice.value.claim_amount,
                    deposit_amount: this.FormInputInvoice.value.deposit_amount,
                    paid_amount: 0,
                    belum_lunas: 0,
                    charge_amount: 0,
                };
                this.transBillingService.HeaderBilling.next(header);
                this.HistoryInvoiceRawatJalan.handleOpenHistoryInvoice();
                break;
            case 'Create_Invoice':
                if (this.total_amount.value > 0) {
                    this.handleOpenModalPembayaran('Invoice');
                } else {
                    this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Total Biaya Rp. 0');
                }
                break;
            case 'Posting':
                this.handlePostingBillingRawatJalan();
                break;
            case 'Batal_Posting':
                if (this.InformasiPasien && this.InformasiPasien.status_billing == 'OPEN') {
                    this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Billing Belum Diposting');
                } else {
                    this.ModalPembayaranTitle = 'Posting';
                    this.handleOpenModalPembatalan('Batal_Posting');
                }
                break;
            case 'Daftar_Payment':
                this.HistorySemuaPembayaranRawatJalan.handleOpenHistoryAllPayment();
                break;
            case 'Cetak_Rincian_Biaya':
                this.onPrintRincianBiayaBilling(this.id_register.value);
                break;
            default:
                break;
        }
    }

    handleChangeSlipTagihanCheck(): void {
        let daftar_slip_tagihan_check = document.getElementById('daftar_slip_tagihan_check') as HTMLInputElement;

        this.BillingItem.forEach((item) => {
            let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;

            let contains_not_open = item.detail.some((el) => { return el.status_bayar != 'OPEN' });

            if (daftar_slip_tagihan_check && !contains_not_open) {
                check.checked = true;
            };

            if (!daftar_slip_tagihan_check) {
                check.checked = false;
            }

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

            card_body.removeAttribute('hidden');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');

            card_body.setAttribute('hidden', 'true');
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
                    let tiket_contains_open = [];
                    for (let i = 0; i < this.GridDataTiket.dataSource['length']; i++) {
                        if (this.GridDataTiket.dataSource[i].status_bayar === 'OPEN') {
                            tiket_contains_open.push(i);
                        };
                    };
                    this.GridDataTiket.selectRows(tiket_contains_open);
                    break;
                case 'TDMK':
                    let tdmk_contains_open = [];
                    for (let i = 0; i < this.GridDataTDMK.dataSource['length']; i++) {
                        if (this.GridDataTDMK.dataSource[i].status_bayar === 'OPEN') {
                            tdmk_contains_open.push(i);
                        };
                    };
                    this.GridDataTDMK.selectRows(tdmk_contains_open);
                    break;
                case 'TDLAB':
                    let tdlab_contains_open = [];
                    for (let i = 0; i < this.GridDataTDLAB.dataSource['length']; i++) {
                        if (this.GridDataTDLAB.dataSource[i].status_bayar === 'OPEN') {
                            tdlab_contains_open.push(i);
                        };
                    };
                    this.GridDataTDLAB.selectRows(tdlab_contains_open);
                    break;
                case 'TDRAD':
                    let tdrad_contains_open = [];
                    for (let i = 0; i < this.GridDataTDRAD.dataSource['length']; i++) {
                        if (this.GridDataTDRAD.dataSource[i].status_bayar === 'OPEN') {
                            tdrad_contains_open.push(i);
                        };
                    };
                    this.GridDataTDRAD.selectRows(tdrad_contains_open);
                    break;
                case 'RESEP':
                    let resep_contains_open = [];
                    for (let i = 0; i < this.GridDataResep.dataSource['length']; i++) {
                        if (this.GridDataResep.dataSource[i].status_bayar === 'OPEN') {
                            resep_contains_open.push(i);
                        };
                    };
                    this.GridDataResep.selectRows(resep_contains_open);
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

    handleClearSelectionAllGrid(): void {
        this.GridDataTiket.clearSelection();
        this.GridDataTDMK.clearSelection();
        this.GridDataTDLAB.clearSelection();
        this.GridDataTDRAD.clearSelection();
        this.GridDataResep.clearSelection();

        setTimeout(() => {
            this.onCountTotalDataTiket();
            this.onCountTotalDataTDMK();
            this.onCountTotalDataTDLAB();
            this.onCountTotalDataTDRAD();
            this.onCountTotalDataResep();
        }, 500);

        let daftar_slip_tagihan_check = document.getElementById('daftar_slip_tagihan_check') as HTMLInputElement;

        if (daftar_slip_tagihan_check.checked) {
            daftar_slip_tagihan_check.checked = false;
        }
    }

    // ** TIKET ==============
    handleSelectingRowDataTiket(args: any): void {
        let status_bayar = args.data.status_bayar;

        if (status_bayar !== 'OPEN') {
            args.cancel = true;

            let removedIndexLength = 0;

            if (args.row.length >= 0) {
                args.rowIndexes.filter((rowIndex) => {
                    if (this.GridDataTiket.getRowByIndex(rowIndex).classList.contains('e-disabled')) {
                        args.rowIndexes.splice(rowIndex + removedIndexLength, 1);
                        removedIndexLength--;
                    }
                });
            };
        };
    }

    handleSelectedRowDataTiket(args: any, item: any): void {
        let selected_records = this.GridDataTiket.getSelectedRecords();

        if (selected_records.length == this.GridDataTiket.dataSource['length']) {
            let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;
            check.checked = true;
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
    handleSelectingRowDataTDMK(args: any): void {
        let status_bayar = args.data.status_bayar;

        if (status_bayar !== 'OPEN') {
            args.cancel = true;

            let removedIndexLength = 0;

            if (args.row.length >= 0) {
                args.rowIndexes.filter((rowIndex) => {
                    if (this.GridDataTDMK.getRowByIndex(rowIndex).classList.contains('e-disabled')) {
                        args.rowIndexes.splice(rowIndex + removedIndexLength, 1);
                        removedIndexLength--;
                    }
                });
            };
        };
    }

    handleSelectedRowDataTDMK(args: any, item: any): void {
        let selected_records = this.GridDataTDMK.getSelectedRecords();

        if (selected_records.length == this.GridDataTDMK.dataSource['length']) {
            let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;
            check.checked = true;
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
    handleSelectingRowDataTDLAB(args: any): void {
        let status_bayar = args.data.status_bayar;

        if (status_bayar !== 'OPEN') {
            args.cancel = true;

            let removedIndexLength = 0;

            if (args.row.length >= 0) {
                args.rowIndexes.filter((rowIndex) => {
                    if (this.GridDataTDLAB.getRowByIndex(rowIndex).classList.contains('e-disabled')) {
                        args.rowIndexes.splice(rowIndex + removedIndexLength, 1);
                        removedIndexLength--;
                    }
                });
            };
        }
    }

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
    handleSelectingRowDataTDRAD(args: any): void {
        let status_bayar = args.data.status_bayar;

        if (status_bayar !== 'OPEN') {
            args.cancel = true;

            let removedIndexLength = 0;

            if (args.row.length >= 0) {
                args.rowIndexes.filter((rowIndex) => {
                    if (this.GridDataTDRAD.getRowByIndex(rowIndex).classList.contains('e-disabled')) {
                        args.rowIndexes.splice(rowIndex + removedIndexLength, 1);
                        removedIndexLength--;
                    }
                });
            };
        }
    }

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
    handleSelectingRowDataResep(args: any): void {
        let status_bayar = args.data.status_bayar;

        if (status_bayar !== 'OPEN') {
            args.cancel = true;

            let removedIndexLength = 0;

            if (args.row.length >= 0) {
                args.rowIndexes.filter((rowIndex) => {
                    if (this.GridDataResep.getRowByIndex(rowIndex).classList.contains('e-disabled')) {
                        args.rowIndexes.splice(rowIndex + removedIndexLength, 1);
                        removedIndexLength--;
                    }
                });
            };
        }
    }

    handleSelectedRowDataResep(args: any, item: any): void {
        let selected_records = this.GridDataResep.getSelectedRecords();

        if (selected_records.length == this.GridDataResep.dataSource['length']) {
            let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;
            check.checked = true;
        }

        if (!this.GridDataResepContainsNotOpen) {
            this.onCountTotalDataResep();
        }
    }

    handleDeselectedRowDataResep(args: any, item: any): void {
        let selected_records = this.GridDataResep.getSelectedRecords();

        if (selected_records.length < this.GridDataResep.dataSource['length']) {
            let check = document.getElementById(item.jenis_transaksi + '_check') as HTMLInputElement;
            check.checked = false;
        }

        this.onCountTotalDataResep();
    }

    handleDataBoundDataResep(): void {
        this.GridDataResep.autoFitColumns();
    }

    onCountTotalDataResep(): void {
        let total_amount = 0;

        let selected_records = this.GridDataResep.getSelectedRecords();

        selected_records.forEach((item) => {
            total_amount += item['total_amount'];
        });

        this.TotalAmountResep.next(total_amount);

        setTimeout(() => {
            this.onCountTotalBiaya();
        }, 1000);
    }

    // ** ROW DATA BOUND ================
    handleRowDataBound(args: any): void {
        if (args.data['status_bayar'] !== 'OPEN') {
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

                            this.onCountSisaTagihan();
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
        if (this.total_amount.value < (this.claim_amount.value + this.deposit_amount.value)) {
            this.paid_amount.setValue(0);
            this.charge_amount.setValue(0);
        } else {
            this.paid_amount.setValue(this.total_amount.value - (this.claim_amount.value + this.deposit_amount.value));
            this.charge_amount.setValue(this.total_amount.value - (this.claim_amount.value + this.deposit_amount.value));
        }
    }

    // ** CREATE INVOICE ======================
    onCreateInvoice(): void {
        Swal.fire({
            title: 'Invoice Tanpa Payment Akan Dibuat',
            text: 'Apakah Anda Yakin Ingin Melanjutkan ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya, Saya Yakin',
            cancelButtonText: 'Tidak',
            focusCancel: true,
            customClass: { popup: 'swal-wide' }
        }).then((result) => {
            if (result.isConfirmed) {

                let trans_header = {
                    id_register: this.InformasiPasien.id_register,
                    total_amount: this.FormInputInvoice.value.total_amount,
                    claim_amount: this.FormInputInvoice.value.claim_amount,
                    deposit_amount: this.FormInputInvoice.value.deposit_amount,
                    paid_amount: this.FormInputInvoice.value.paid_amount,
                    charge_amount: this.FormInputInvoice.value.charge_amount,
                };

                let trans_detail = [
                    ...this.GridDataTiket.getSelectedRecords(),
                    ...this.GridDataTDMK.getSelectedRecords(),
                    ...this.GridDataTDLAB.getSelectedRecords(),
                    ...this.GridDataTDRAD.getSelectedRecords(),
                ];

                let resep_detail = [
                    ...this.GridDataResep.getSelectedRecords(),
                ];

                let parameter = {
                    trans_header: trans_header,
                    trans_detail: trans_detail,
                    resep_detail: resep_detail,
                }

                this.transBillingService.onPostSaveInvoiceWithoutPayment(parameter)
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', 'Success', 'Invoice Berhasil Dibuat')
                                .then(() => {
                                    let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params['no_register']);

                                    this.BillingItem = [];

                                    this.onGetDataBillingByNoRegister(NoRegister);

                                    this.handleClearSelectionAllGrid()

                                    this.handleEmptyBillingHeader();
                                });
                        } else {
                            let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params['no_register']);

                            this.BillingItem = [];

                            this.onGetDataBillingByNoRegister(NoRegister);

                            this.handleClearSelectionAllGrid()

                            this.handleEmptyBillingHeader();
                        }
                    });
            }
        });
    }

    // ** HISTORY PEMBAYARAN ITEM =============
    handleClickHistoryItem(item: any): void {
        let jenis_transaksi = '';

        switch (item.jenis_transaksi) {
            case 'TKT':
                jenis_transaksi = 'tiket';
                break;
            case 'TDMK':
                jenis_transaksi = 'tdmk';
                break;
            case 'TDLAB':
                jenis_transaksi = 'tdlab';
                break;
            case 'TDRAD':
                jenis_transaksi = 'tdrad';
                break;
            case 'RESEP':
                jenis_transaksi = 'resep';
                break;
            default:
                break;
        };

        this.transBillingService.onGetAllHistoryInvoicePaid(jenis_transaksi, this.InformasiPasien.id_register);

        this.HistoryPembayaranBillingRawatJalan.handleOpenRiwayatPembayaran();

        this.OffcanvasRiwayatTitle = `${'Riwayat Pembayaran ' + item.jenis_transaksi}`;
    }

    // ** MODAL PEMBAYARAN ====================
    handleOpenModalPembayaran(ModalPembayaranState: string): void {
        let btnModalPembayaran = document.getElementById('btnModalPembayaran') as HTMLElement;
        btnModalPembayaran.click();

        this.GridDataPembayaranDatasource = [];

        this.ModalPembayaranState = ModalPembayaranState;

        if (ModalPembayaranState == 'Invoice') {
            let header = {
                id_register: this.InformasiPasien.id_register,
                total_amount: this.FormInputInvoice.value.total_amount,
                claim_amount: this.FormInputInvoice.value.claim_amount,
                deposit_amount: this.FormInputInvoice.value.deposit_amount,
                paid_amount: this.FormInputInvoice.value.paid_amount,
                belum_lunas: this.FormInputInvoice.value.paid_amount,
                charge_amount: this.FormInputInvoice.value.charge_amount,
            };

            this.TotalTransaksiPembayaran = header.charge_amount;

            this.GrandTotalTransaksiPembayaran = header.charge_amount - this.BiayaBankPembayaran;

            this.transBillingService.HeaderBilling.next(header);
        };

        if (ModalPembayaranState == 'Existing_Invoice') {
            this.TotalTransaksiPembayaran = this.transBillingService.HeaderBilling.value['charge_amount'];

            this.GrandTotalTransaksiPembayaran = this.transBillingService.HeaderBilling.value['charge_amount'] - this.BiayaBankPembayaran;
        };

        if (ModalPembayaranState == 'Restitusi') {
            let header = {
                id_register: this.InformasiPasien.id_register,
                total_amount: 0,
                claim_amount: 0,
                deposit_amount: 0,
                paid_amount: this.deposit_amount.value,
                belum_lunas: this.deposit_amount.value,
                charge_amount: this.deposit_amount.value,
            };

            this.transBillingService.HeaderBilling.next(header);

            this.TotalTransaksiPembayaran = this.deposit_amount.value;

            this.GrandTotalTransaksiPembayaran = this.deposit_amount.value;
        };
    }

    handleCloseModalPembayaran(): void {
        this.onCreateInvoice();
    }

    onChangeMetodePembayaran(State: string): void {
        this.PembayaranState = State;
    }

    handleClickButtonPaymentMethod(item: IPaymentMethodModel): void {
        this.PembayaranState = (item.payment_method).replace(' ', '_');

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
        // ** Hitung Kurang Pembayaran
        this.JumlahBayarPembayaran = 0;

        for (let i = 0; i < this.GridDataPembayaranDatasource.length; i++) {
            this.JumlahBayarPembayaran += this.GridDataPembayaranDatasource[i].jumlah_bayar;
        }

        if (this.JumlahBayarPembayaran > this.GrandTotalTransaksiPembayaran) {
            this.KurangBayarPembayaran = 0;
        } else {
            this.KurangBayarPembayaran = this.GrandTotalTransaksiPembayaran - this.JumlahBayarPembayaran;
        }

        if (this.ModalPembayaranState == 'Invoice') {

            // ** Set Header Parameter
            let header = {
                id_register: this.InformasiPasien.id_register,
                total_amount: this.FormInputInvoice.value.total_amount,
                claim_amount: this.FormInputInvoice.value.claim_amount,
                deposit_amount: this.FormInputInvoice.value.deposit_amount,
                paid_amount: this.FormInputInvoice.value.paid_amount,
                belum_lunas: this.KurangBayarPembayaran,
                charge_amount: this.FormInputInvoice.value.charge_amount,
            };

            // ** Insert Into HeaderBilling BehaviorSubject
            this.transBillingService.HeaderBilling.next(header);
        }

        // ** Create Data Finalisasi Bayar
        let data_finalisasi_bayar = [
            { jenis_pembayaran: 'TOTAL TRANSAKSI', jumlah_pembayaran: this.GrandTotalTransaksiPembayaran },
        ];

        // ** Insert Into Data Finalisasi Bayar
        this.GridDataPembayaranDatasource.filter((item) => {
            data_finalisasi_bayar.push({
                jenis_pembayaran: item['jenis_pembayaran'],
                jumlah_pembayaran: item['jumlah_bayar'],
            });
        });

        let total_pembayaran_pasien = 0;

        for (let i = 1; i < data_finalisasi_bayar.length; i++) {
            total_pembayaran_pasien += data_finalisasi_bayar[i].jumlah_pembayaran;
        };

        let kembalian = { jenis_pembayaran: 'KEMBALIAN', jumlah_pembayaran: total_pembayaran_pasien - data_finalisasi_bayar[0].jumlah_pembayaran };

        data_finalisasi_bayar.push(kembalian);

        this.DataFinalisasiPembayaran.next(data_finalisasi_bayar);
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
        let trans_header = this.transBillingService.HeaderBilling.value;

        let trans_detail = [
            ...this.GridDataTiket.getSelectedRecords(),
            ...this.GridDataTDMK.getSelectedRecords(),
            ...this.GridDataTDLAB.getSelectedRecords(),
            ...this.GridDataTDRAD.getSelectedRecords(),
        ];

        let resep_detail = [
            ...this.GridDataResep.getSelectedRecords()
        ];

        let payment = {
            jumlah_payment: trans_header['charge_amount'],
            keterangan: (<HTMLInputElement>document.getElementById('keterangan')).value,
            pembayar: (<HTMLInputElement>document.getElementById('pembayar')).value,
        };

        let payment_detail = this.GridDataPembayaranDatasource;

        let parameter = {
            trans_header: trans_header,
            trans_detail: trans_detail,
            resep_detail: resep_detail,
            payment: payment,
            payment_detail: payment_detail,
        };

        let btnCloseModalPembayaran = document.getElementById('btnCloseModalPembayaran') as HTMLElement;

        let btnCloseModalFinalisasiPembayaran = document.getElementById('btnCloseModalFinalisasiPembayaran') as HTMLElement;

        this.transBillingService.onPostSaveInvoiceWithPayment(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Payment Berhasil Disimpan')
                        .then(() => {
                            btnCloseModalFinalisasiPembayaran.click();

                            setTimeout(() => {
                                btnCloseModalPembayaran.click();
                            }, 250);

                            setTimeout(() => {
                                let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params['no_register']);

                                this.BillingItem = [];

                                this.onGetDataBillingByNoRegister(NoRegister);

                                this.handleClearSelectionAllGrid()

                                this.handleEmptyBillingHeader();
                            }, 500);
                        })
                } else {
                    btnCloseModalFinalisasiPembayaran.click();

                    setTimeout(() => {
                        btnCloseModalPembayaran.click();
                    }, 250);

                    setTimeout(() => {
                        let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params['no_register']);

                        this.BillingItem = [];

                        this.onGetDataBillingByNoRegister(NoRegister);

                        this.handleClearSelectionAllGrid()

                        this.handleEmptyBillingHeader();
                    }, 500);
                }
            });
    }

    handleClickSubmitDeposit(): void {
        let payment = {
            jumlah_payment: this.JumlahBayarPembayaran,
            keterangan: (<HTMLInputElement>document.getElementById('keterangan')).value,
            pembayar: (<HTMLInputElement>document.getElementById('pembayar')).value,
        };

        let payment_detail = this.GridDataPembayaranDatasource;

        let deposit = {
            id_register: this.InformasiPasien.id_register,
            jumlah_deposit: this.JumlahBayarPembayaran,
        };

        let parameter = {
            payment: payment,
            payment_detail: payment_detail,
            deposit: deposit
        };

        let btnCloseModalPembayaran = document.getElementById('btnCloseModalPembayaran') as HTMLElement;

        this.transBillingService.onPostSaveDeposit(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Deposit Berhasil Disimpan')
                        .then(() => {
                            btnCloseModalPembayaran.click();

                            setTimeout(() => {
                                let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params['no_register']);

                                this.BillingItem = [];

                                this.onGetDataBillingByNoRegister(NoRegister);

                                this.handleClearSelectionAllGrid()

                                this.handleEmptyBillingHeader();
                            }, 250);
                        })
                }
            });
    }

    handleSendPaymentWithExistingInvoice(args: any): void {
        this.SelectedInvoiceRawatJalan = args;

        this.handleOpenModalPembayaran('Existing_Invoice');
    }

    handleClickSubmitPaymentWithExisitingInvoice(): void {
        let payment_detail = this.GridDataPembayaranDatasource;

        let jumlah_payment = 0;

        payment_detail.forEach((item) => {
            jumlah_payment += item['belum_lunas'];
        });

        let payment = {
            jumlah_payment: jumlah_payment,
            keterangan: (<HTMLInputElement>document.getElementById('keterangan')).value,
            pembayar: (<HTMLInputElement>document.getElementById('pembayar')).value,
        };

        let parameter = {
            id_register: this.InformasiPasien.id_register,
            item_invoice: this.SelectedInvoiceRawatJalan,
            payment: payment,
            payment_detail: payment_detail,
        };

        let btnCloseModalPembayaran = document.getElementById('btnCloseModalPembayaran') as HTMLElement;

        let btnCloseModalFinalisasiPembayaran = document.getElementById('btnCloseModalFinalisasiPembayaran') as HTMLElement;

        this.transBillingService.onPostPaymentWithExistingInvoice(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Payment Berhasil Disimpan')
                        .then(() => {
                            btnCloseModalFinalisasiPembayaran.click();

                            setTimeout(() => {
                                btnCloseModalPembayaran.click();
                            }, 250);

                            setTimeout(() => {
                                let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params['no_register']);

                                this.BillingItem = [];

                                this.onGetDataBillingByNoRegister(NoRegister);

                                this.handleClearSelectionAllGrid();

                                this.SelectedInvoiceRawatJalan = [];

                                this.handleEmptyBillingHeader();
                            }, 500);
                        })
                }
            });
    }

    handleClickSubmitRestitusi(): void {
        let payment = {
            jumlah_payment: this.JumlahBayarPembayaran,
            keterangan: (<HTMLInputElement>document.getElementById('keterangan')).value,
            pembayar: (<HTMLInputElement>document.getElementById('pembayar')).value,
        };

        let payment_detail = this.GridDataPembayaranDatasource;

        let parameter = {
            id_register: this.InformasiPasien.id_register,
            payment: payment,
            payment_detail: payment_detail,
        };

        let btnCloseModalPembayaran = document.getElementById('btnCloseModalPembayaran') as HTMLElement;

        let btnCloseModalFinalisasiPembayaran = document.getElementById('btnCloseModalFinalisasiPembayaran') as HTMLElement;

        this.transBillingService.onPostRestitusi(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Restitusi Berhasil Disimpan')
                        .then(() => {
                            btnCloseModalFinalisasiPembayaran.click();

                            setTimeout(() => {
                                btnCloseModalPembayaran.click();
                            }, 250);

                            setTimeout(() => {
                                let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params['no_register']);

                                this.BillingItem = [];

                                this.onGetDataBillingByNoRegister(NoRegister);

                                this.handleClearSelectionAllGrid();

                                this.SelectedInvoiceRawatJalan = [];

                                this.handleEmptyBillingHeader();
                            }, 500);
                        })
                }
            });
    }

    handlePostingBillingRawatJalan(): void {
        if (this.InformasiPasien.status_billing == 'OPEN') {
            Swal.fire({
                title: 'Billing Pasien Akan Diposting',
                text: 'Apakah Anda Yakin Ingin Melanjutkan ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Iya, Saya Yakin',
                cancelButtonText: 'Tidak',
                focusCancel: true,
                customClass: { popup: 'swal-wide' }
            }).then((result) => {
                if (result.isConfirmed) {
                    this.transBillingService.onPostPostingBillingRawatJalan(this.InformasiPasien.id_register)
                        .subscribe((result) => {
                            if (result) {
                                this.utilityService.onShowingCustomAlert('success', 'Success', `Billing Pasien ${this.InformasiPasien.nama_pasien} Telah Diposting`)
                                    .then(() => {
                                        let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params['no_register']);

                                        this.BillingItem = [];

                                        this.onGetDataBillingByNoRegister(NoRegister);
                                    });
                            } else {
                                let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params['no_register']);

                                this.BillingItem = [];

                                this.onGetDataBillingByNoRegister(NoRegister);
                            }
                        });
                }
            });
        } else {
            this.utilityService.onShowingCustomAlert('warning', 'Oops', `Billing Pasien ${this.InformasiPasien.nama_pasien} Sudah Diposting`);
        }
    }

    handleEmptyBillingHeader(): void {
        let header = {
            id_register: this.InformasiPasien.id_register,
            total_amount: 0,
            claim_amount: 0,
            deposit_amount: 0,
            paid_amount: 0,
            belum_lunas: 0,
            charge_amount: 0,
        };

        this.transBillingService.HeaderBilling.next(header);

        this.TotalTransaksiPembayaran = 0;
        this.BiayaBankPembayaran = 0;
        this.GrandTotalTransaksiPembayaran = 0;
        this.JumlahBayarPembayaran = 0;
        this.KurangBayarPembayaran = 0;
    }

    handleOpenModalPembatalan(FormPembatalanState: string): void {
        this.FormPembatalanState = FormPembatalanState;

        // this.handleResetFormPembatalan();

        this.modalRef = this.bsModalService.show(this.modalPembatalan);
    }

    handleCloseModalPembatalan(): void {
        this.modalRef.hide();
    }

    handleSubmitModalPembatalan(): void {
        let parameter = {};

        switch (this.FormPembatalanState) {
            case 'Batal_Posting':
                parameter = {
                    id_register: this.FormPembatalan.value.id_register,
                    reason_canceled: this.FormPembatalan.value.reason_canceled,
                };
                this.transBillingService.onCancelPostingBillingRawatJalan(parameter)
                    .subscribe((result) => {
                        if (result.responseResult) {
                            this.utilityService.onShowingCustomAlert('success', 'Success', 'Billing Berhasil Dibatalkan')
                                .then(() => {
                                    this.handleCloseModalPembatalan();

                                    setTimeout(() => {
                                        this.BillingItem = [];

                                        let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params['no_register']);

                                        this.onGetDataBillingByNoRegister(NoRegister);
                                    }, 250);
                                })
                        }
                    });
                break;
            case 'Batal_Payment':
                parameter = {
                    id_register: this.FormPembatalan.value.id_register,
                    id_payment: this.FormPembatalan.value.id_payment,
                    reason_canceled: this.FormPembatalan.value.reason_canceled,
                };
                this.transBillingService.onCancelPaymentBillingRawatJalan(parameter)
                    .subscribe((result) => {
                        if (result.responseResult) {
                            this.utilityService.onShowingCustomAlert('success', 'Success', 'Payment Berhasil Dibatalkan')
                                .then(() => {
                                    this.handleCloseModalPembatalan();

                                    setTimeout(() => {
                                        this.BillingItem = [];

                                        let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params['no_register']);

                                        this.onGetDataBillingByNoRegister(NoRegister);
                                    }, 250);
                                })
                        }
                    });
                break;
            case 'Batal_Invoice':
                parameter = {
                    id_register: this.FormPembatalan.value.id_register,
                    id_invoice: this.FormPembatalan.value.id_invoice,
                    reason_canceled: this.FormPembatalan.value.reason_canceled,
                };

                this.transBillingService.onCancelInvoiceBillingRawatJalan(parameter)
                    .subscribe((result) => {
                        if (result.responseResult) {
                            this.utilityService.onShowingCustomAlert('success', 'Success', 'Invoice Berhasil Dibatalkan')
                                .then(() => {
                                    this.handleCloseModalPembatalan();

                                    setTimeout(() => {
                                        this.BillingItem = [];

                                        let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params['no_register']);

                                        this.onGetDataBillingByNoRegister(NoRegister);
                                    }, 250);
                                })
                        }
                    });

                break;
            default:
                break;
        }

        this.handleResetFormPembatalan();
    }

    handleResetFormPembatalan(): void {
        this.FormPembatalan.reset();

        this.id_register.setValue(this.InformasiPasien.id_register);
        this.id_payment.setValue(0);
        this.id_invoice.setValue(0);
        this.reason_canceled.setValue('');
    }

    onSendBatalPayment(args: any): void {
        this.id_register.setValue(args.id_register);
        this.id_payment.setValue(args.id_payment);

        this.HistorySemuaPembayaranRawatJalan.handleCloseHistoryAllPayment();

        setTimeout(() => {
            this.ModalPembatalanTitle = 'Payment';
            this.handleOpenModalPembatalan('Batal_Payment');
        }, 500);
    }

    handleCloseModalPembatalanPayment(): void {
        this.handleCloseModalPembatalan();

        setTimeout(() => {
            this.HistorySemuaPembayaranRawatJalan.handleOpenHistoryAllPayment();
        }, 500);
    }

    onSendBatalInvoice(args: any): void {
        this.id_register.setValue(args.id_register);
        this.id_invoice.setValue(args.id_invoice);

        this.HistoryInvoiceRawatJalan.handleCloseHistoryInvoice();

        setTimeout(() => {
            this.ModalPembatalanTitle = 'Invoice';
            this.handleOpenModalPembatalan('Batal_Invoice');
        }, 500);
    }

    handleCloseModalPembatalanInvoice(): void {
        this.handleCloseModalPembatalan();

        setTimeout(() => {
            this.HistoryInvoiceRawatJalan.handleOpenHistoryInvoice();
        }, 500);
    }

    onPrintRincianBiayaBilling(id_register: number): void {
        this.transBillingService.onPrintRincianBiayaBilling(id_register);
    }

    get total_amount(): AbstractControl { return this.FormInputInvoice.get('total_amount'); }
    get total_tagihan(): AbstractControl { return this.FormInputInvoice.get('total_tagihan'); }
    get claim_amount(): AbstractControl { return this.FormInputInvoice.get('claim_amount'); }
    get deposit_amount(): AbstractControl { return this.FormInputInvoice.get('deposit_amount'); }
    get paid_amount(): AbstractControl { return this.FormInputInvoice.get('paid_amount'); }
    get charge_amount(): AbstractControl { return this.FormInputInvoice.get('charge_amount'); }
    get total_payment(): AbstractControl { return this.FormInputInvoice.get('total_payment'); }

    get jumlah_klaim(): AbstractControl { return this.FormInputKlaimDebitur.get('jumlah_klaim'); }
    get saldo_klaim_sisa(): AbstractControl { return this.FormInputKlaimDebitur.get('saldo_klaim_sisa'); }
    get saldo_klaim_digunakan(): AbstractControl { return this.FormInputKlaimDebitur.get('saldo_klaim_digunakan'); }

    get id_register(): AbstractControl { return this.FormPembatalan.get('id_register'); }
    get id_payment(): AbstractControl { return this.FormPembatalan.get('id_payment'); }
    get id_invoice(): AbstractControl { return this.FormPembatalan.get('id_invoice'); }
    get reason_canceled(): AbstractControl { return this.FormPembatalan.get('reason_canceled'); }
}
