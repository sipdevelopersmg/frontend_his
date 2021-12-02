import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent, EditSettingsModel, IEditCell, GridModel, CommandModel, SelectionSettingsModel, QueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';
import { NumericTextBox } from '@syncfusion/ej2-angular-inputs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';
import { SidebarChildMenuModel } from 'src/app/modules/core/models/navigation/menu.model';
import { ICaraPulangModel, IKondisiPulangModel } from 'src/app/modules/PIS/models/IRNA/surat_pengantar_pembayaran.model';
import SuratPengantarPembayaranService from 'src/app/modules/PIS/services/IRNA/surat-pengantar-pembayaran/surat-pengantar-pembayaran.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { IPaymentMethodModel } from '../../../models/setup-data/setup-payment-method.model';
import { IInformasiPasienModel } from '../../../models/trans-billing/trans-billing.model';
import { SetupPaymentMethodService } from '../../../services/setup-data/setup-payment-method/setup-payment-method.service';
import { TransBillingRawatDaruratService } from '../../../services/trans-billing-rawat-darurat/trans-billing-rawat-darurat.service';
import { TransBillingRawatInapService } from '../../../services/trans-billing-rawat-inap/trans-billing-rawat-inap.service';
import { TransBillingService } from '../../../services/trans-billing/trans-billing.service';
import { HistoryPembayaranComponent } from '../../transaksi-billing/input-billing/history-pembayaran/history-pembayaran.component';
import { AkomodasiRawatInapComponent } from '../akomodasi-rawat-inap/akomodasi-rawat-inap/akomodasi-rawat-inap.component';

@Component({
    selector: 'app-input-billing-rawat-inap',
    templateUrl: './input-billing-rawat-inap.component.html',
    styleUrls: ['./input-billing-rawat-inap.component.css']
})
export class InputBillingRawatInapComponent implements OnInit, AfterViewInit {

    HeaderRibbon: string = "Input Billing Pasien";

    ButtonNav: ButtonNavModel[] = [
        { Id: 'Baru', Icons1: 'fa-copy fa-sm', Captions: '[F3] Baru' },
        { Id: 'Restitusi', Icons1: 'fa-exchange-alt fa-sm', Captions: 'Restitusi' },
        { Id: 'Deposit', Icons1: 'fa-hand-holding-usd fa-sm', Captions: 'Deposit' },
        { Id: 'Save_Draft', Icons1: 'fa-save fa-sm', Captions: 'Save Draft' },
        { Id: 'Akomodasi', Icons1: 'fa-bed fa-sm', Captions: 'Akomodasi' },
        { Id: 'Create_Invoice', Icons1: 'fa-user-check fa-sm', Captions: '[F5] Buat Invoice' },
        { Id: 'Cetak_Rincian_Biaya', Icons1: 'fa-print fa-sm', Captions: 'Print Rincian Biaya' },
        { Id: 'Info_Kunjungan', Icons1: 'fa-info fa-sm', Captions: 'Info Kunjungan' },
    ];

    InformasiPasien: IInformasiPasienModel;

    InformasiUser = JSON.parse(localStorage.getItem('UserData'));

    @ViewChild('DropdownCaraPulang') DropdownCaraPulang: DropDownListComponent;
    DropdownCaraPulangDatasource: ICaraPulangModel[];
    DropdownCaraPulangField: any;

    CaraPulangMeninggal: boolean;

    @ViewChild('DropdownKondisiPulang') DropdownKondisiPulang: DropDownListComponent;
    DropdownKondisiPulangDatasource: IKondisiPulangModel[];
    DropdownKondisiPulangField: any;

    BillingItem: any[] = [];
    SelectedBillingItem: any;

    // ** ====== GRID DATA TIKET ======
    @ViewChild('GridDataTiket') GridDataTiket: GridComponent;
    GridDataTiketSelectionSettings: SelectionSettingsModel = { type: 'Single' };
    GridDataTiketEditSettings: EditSettingsModel = { allowEditing: true, allowEditOnDblClick: true };
    GridDataTiketContainsNotOpen: boolean = false;

    AsuransiTiketParams: IEditCell;
    AsuransiTiketElem: HTMLElement;
    AsuransiTiketObj: NumericTextBox;

    SubsidiTiketParams: IEditCell;
    SubsidiTiketElem: HTMLElement;
    SubsidiTiketObj: NumericTextBox;

    IurBiayaTiketParams: IEditCell;
    IurBiayaTiketElem: HTMLElement;
    IurBiayaTiketObj: NumericTextBox;

    TotalAmountTiket = new BehaviorSubject(0);

    // ** ====== GRID DATA TDMK ======
    @ViewChild('GridDataTDMK') GridDataTDMK: GridComponent;
    GridDataTDMKSelectionSettings: SelectionSettingsModel = { type: 'Single' };
    GridDataTDMKContainsNotOpen: boolean = false;
    GridDataTDMKEditSettings: EditSettingsModel = { allowEditing: true, allowEditOnDblClick: true };

    AsuransiTDMKParams: IEditCell;
    AsuransiTDMKElem: HTMLElement;
    AsuransiTDMKObj: NumericTextBox;

    SubsidiTDMKParams: IEditCell;
    SubsidiTDMKElem: HTMLElement;
    SubsidiTDMKObj: NumericTextBox;

    IurBiayaTDMKParams: IEditCell;
    IurBiayaTDMKElem: HTMLElement;
    IurBiayaTDMKObj: NumericTextBox;

    TotalAmountTDMK = new BehaviorSubject(0);

    // ** ====== GRID DATA TDLAB ======
    @ViewChild('GridDataTDLAB') GridDataTDLAB: GridComponent;
    GridDataTDLABSelectionSettings: SelectionSettingsModel = { type: 'Single' };
    GridDataTDLABContainsNotOpen: boolean = false;
    GridDataTDLABEditSettings: EditSettingsModel = { allowEditing: true, allowEditOnDblClick: true };

    AsuransiTDLABParams: IEditCell;
    AsuransiTDLABElem: HTMLElement;
    AsuransiTDLABObj: NumericTextBox;

    SubsidiTDLABParams: IEditCell;
    SubsidiTDLABElem: HTMLElement;
    SubsidiTDLABObj: NumericTextBox;

    IurBiayaTDLABParams: IEditCell;
    IurBiayaTDLABElem: HTMLElement;
    IurBiayaTDLABObj: NumericTextBox;

    TotalAmountTDLAB = new BehaviorSubject(0);

    // ** ====== GRID DATA TDRAD ======
    @ViewChild('GridDataTDRAD') GridDataTDRAD: GridComponent;
    GridDataTDRADSelectionSettings: SelectionSettingsModel = { type: 'Single' };
    GridDataTDRADContainsNotOpen: boolean = false;
    GridDataTDRADEditSettings: EditSettingsModel = { allowEditing: true, allowEditOnDblClick: true };

    AsuransiTDRADParams: IEditCell;
    AsuransiTDRADElem: HTMLElement;
    AsuransiTDRADObj: NumericTextBox;

    SubsidiTDRADParams: IEditCell;
    SubsidiTDRADElem: HTMLElement;
    SubsidiTDRADObj: NumericTextBox;

    IurBiayaTDRADParams: IEditCell;
    IurBiayaTDRADElem: HTMLElement;
    IurBiayaTDRADObj: NumericTextBox;

    TotalAmountTDRAD = new BehaviorSubject(0);

    // ** ====== GRID DATA RESEP ======
    @ViewChild('GridDataResep') GridDataResep: GridComponent;
    GridDataResepSelectionSettings: SelectionSettingsModel = { type: 'Single' };
    GridDataResepContainsNotOpen: boolean = false;
    GridResepResizeSettings = { mode: 'Auto' };
    ChildResepDatasource: any[] = [];
    ChildGridResep: GridModel = {};
    GridDataResepEditSettings: EditSettingsModel = { allowEditing: true, allowEditOnDblClick: true };

    AsuransiResepParams: IEditCell;
    AsuransiResepElem: HTMLElement;
    AsuransiResepObj: NumericTextBox;

    SubsidiResepParams: IEditCell;
    SubsidiResepElem: HTMLElement;
    SubsidiResepObj: NumericTextBox;

    IurBiayaResepParams: IEditCell;
    IurBiayaResepElem: HTMLElement;
    IurBiayaResepObj: NumericTextBox;

    TotalAmountResep = new BehaviorSubject(0);

    AllGridEditedData: any[] = [];

    OffcanvasRiwayatTitle: string;
    @ViewChild('HistoryPembayaranBillingRawatJalan') HistoryPembayaranBillingRawatJalan: HistoryPembayaranComponent;

    PaymentMethod: IPaymentMethodModel[] = [];
    SelectedHeader: any = {};

    // ** Modal Pembayaran
    ModalPembayaranTitle: string = "Pembayaran Uang Cash";
    PembayaranState: string = "CASH";

    FormInputInvoice: FormGroup;

    // ** Grid Pembayaran
    @ViewChild('GridDataPembayaran') GridDataPembayaran: GridComponent;
    GridDataPembayaranDatasource: any[] = [];
    CommandPembayaran: CommandModel[] = [
        { buttonOption: { iconCss: 'fas fa-times fa-sm' } }
    ];

    ModalPembayaranState = "Invoice";

    TotalTransaksiPembayaran = 0;
    BiayaBankPembayaran = 0;
    GrandTotalTransaksiPembayaran = 0;
    JumlahBayarPembayaran = 0;
    KurangBayarPembayaran = 0;

    DataFinalisasiPembayaran = new BehaviorSubject([]);
    DataFinalisasiPembayaran$ = this.DataFinalisasiPembayaran.asObservable();

    FormPembatalan: FormGroup;
    FormPembatalanState: string = "Batal_Posting";
    ModalPembatalanTitle: string = "Posting";

    screenWidth: number;

    RincianTotalCaptionCssClass: string;
    RincianTotalInputCssClass: string;

    @ViewChild('AkomodasiRawatInap') AkomodasiRawatInap: AkomodasiRawatInapComponent;

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private navigationService: NavigationService,
        private encryptionService: EncryptionService,
        private transBillingService: TransBillingService,
        private setupPaymentMethodService: SetupPaymentMethodService,
        private transBillingRawatInapService: TransBillingRawatInapService,
        private transBillingRawatDaruratService: TransBillingRawatDaruratService,
        private suratPengantaranPembayaranPasienService: SuratPengantarPembayaranService,
    ) { }

    @HostListener("window:resize", ['$event'])
    private onResize(event: any) {
        this.onDetectScreenSize(event.srcElement.innerWidth);
    }

    ngOnInit(): void {
        this.onDetectScreenSize(window.innerWidth);

        // this.onGetButtonSidebarMenu();

        this.FormInputInvoice = this.formBuilder.group({
            total_amount: [0, []],
            asuransi_amount: [0, []],
            subsidi_amount: [0, []],
            total_tagihan: [0, []],
            claim_amount: [0, []],
            deposit_amount: [0, []],
            paid_amount: [0, []],
            id_cara_pulang: [0, []],
            id_kondisi_pulang: [0, []],
        });

        this.FormPembatalan = this.formBuilder.group({
            id_register: [0, []],
            id_payment: [0, []],
            id_invoice: [0, []],
            reason_canceled: ["", []],
        });

        this.onGetDataPaymentMethod();

        this.onGetCaraPulangAndKondisiPulang();
    }

    onDetectScreenSize(screenWidth: any): void {
        this.screenWidth = screenWidth;

        if (this.screenWidth <= 1366) {
            this.RincianTotalCaptionCssClass = 'col-lg-5 col-md-5 col-sm-5 col-xs-5';
            this.RincianTotalInputCssClass = 'col-lg-7 col-md-7 col-sm-7 col-xs-7';
        }

        if (this.screenWidth > 1366) {
            this.RincianTotalCaptionCssClass = 'col-lg-4 col-md-4 col-sm-4 col-xs-4';
            this.RincianTotalInputCssClass = 'col-lg-8 col-md-8 col-sm-8 col-xs-8';
        }
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["no_register"]);

            this.onGetDataBillingByNoRegister(NoRegister);
        }, 1);

        setTimeout(() => {
            this.handleSetGridDataTiketParams();

            this.handleSetGridDataTDMKParams();

            this.handleSetGridDataTDLABParams();

            this.handleSetGridDataTDRADParams();

            this.handleSetGridDataResepParams();
        }, 1000);
    }

    onGetButtonSidebarMenu(): void {
        let SidebarMenu: SidebarChildMenuModel = JSON.parse(localStorage.getItem('ActiveSidebarMenu'))[0];

        let Button = SidebarMenu.button;

        if (Button.length > 0) {
            Button.forEach((item) => {
                if (item.caption !== "Batal Payment") {
                    this.ButtonNav.push({
                        Id: (item.caption).replace(" ", "_"),
                        Icons1: item.icon,
                        Icons2: item.icon2,
                        StackIcon: JSON.parse(item.stack_icon),
                        Captions: item.caption
                    });
                };
            });
        };
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
                this.BillingItem = [];
                let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["no_register"]);
                this.onGetDataBillingByNoRegister(NoRegister);
                break;
            case 'Restitusi':
                this.handleOpenModalPembayaran("Restitusi");
                // if (this.deposit_amount.value > 0) {
                // } else {
                //     this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Saldo Deposit Rp. 0');
                // }
                break;
            case 'Deposit':
                this.handleOpenModalPembayaran("Deposit");
                // if (this.InformasiPasien && this.InformasiPasien.status_billing == "OPEN") {
                // } else {
                //     this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Billing Sudah Diposting');
                // }
                break;
            case 'Akomodasi':
                this.AkomodasiRawatInap.handleOpenAkomodasiRawatInap();
                break;
            case 'Save_Draft':
                this.handleSaveDraft(this.AllGridEditedData);
                break;
            case 'Create_Invoice':
                this.handleOpenModalPembayaran("Invoice");
                break;
            case 'Info_Kunjungan':
                // this.InfoKunjungan.handleOpenInfoKunjungan();
                break;
            default:
                break;
        }
    }

    onGetCaraPulangAndKondisiPulang(): void {
        this.suratPengantaranPembayaranPasienService.onGetAllCaraPulang()
            .subscribe((result) => {
                if (result) {
                    this.DropdownCaraPulangDatasource = result.data;

                    this.DropdownCaraPulangField = { text: 'cara_pulang', value: 'id_cara_pulang' };
                }
            });

        this.suratPengantaranPembayaranPasienService.onGetAllKondisiPulang()
            .subscribe((result) => {
                if (result) {
                    this.DropdownKondisiPulangDatasource = result.data;

                    this.DropdownKondisiPulangField = { text: 'kondisi_pulang', value: 'id_kondisi_pulang' };
                }
            });
    }

    handleChangeDropdownCaraPulang(args: any): void {
        let data = args.itemData;

        this.CaraPulangMeninggal = data.cara_pulang == "MENINGGAL" ? true : false;
    }

    onGetDataBillingByNoRegister(RegisterNo: string): void {
        this.transBillingRawatDaruratService.onGetAll(RegisterNo)
            .subscribe((result) => {
                this.InformasiPasien = result.data.informasi_pasien;

                this.HeaderRibbon = `Input Billing Pasien ${this.InformasiPasien.nama_pasien}`;

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

                this.onSumTotalBiayaFromAllGrid(this.BillingItem);

                this.onGetPengantarPembayaran(this.id_register.value);

                this.AllGridEditedData = [];
            });
    }

    onGetPengantarPembayaran(RegisterId: number): void {
        this.suratPengantaranPembayaranPasienService.onGetPengantarPembayaranByIdRegister(RegisterId)
            .subscribe((result) => {
                if (result.responseResult) {
                    this.id_cara_pulang.setValue(result.data.id_cara_pulang);
                    this.id_kondisi_pulang.setValue(result.data.id_kondisi_pulang);

                    this.DropdownCaraPulang.value = result.data.id_cara_pulang;
                    this.DropdownKondisiPulang.value = result.data.id_kondisi_pulang;
                };
            });
    }

    onCountTotalTagihan(tiket: any[], tdmk: any[], tdlab: any[], tdrad: any[], resep: any[]): void {

        // ** ===== TIKET =======
        let total_amount_tiket = 0;

        tiket.filter((item) => {
            if (item.status_bayar == "OPEN") {
                return total_amount_tiket += item.total_amount;
            }
        });

        // ** ===== TDMK ======
        let total_amount_tdmk = 0;

        tdmk.filter((item) => {
            if (item.status_bayar == "OPEN") {
                return total_amount_tdmk += item.total_amount;
            }
        });

        // ** ===== TDLAB =====
        let total_amount_tdlab = 0;

        tdlab.filter((item) => {
            if (item.status_bayar == "OPEN") {
                return total_amount_tdlab += item.total_amount;
            }
        });

        // ** ===== TDRAD =====
        let total_amount_tdrad = 0;


        tdrad.filter((item) => {
            if (item.status_bayar == "OPEN") {
                return total_amount_tdrad += item.total_amount;
            }
        });

        // ** ===== RESEP =====
        let total_amount_resep = 0;

        resep.filter((item) => {
            if (item.status_bayar == "OPEN") {
                return total_amount_resep += item.total_amount;
            }
        });

        let total_amount = total_amount_tiket + total_amount_tdmk + total_amount_tdlab + total_amount_tdrad + total_amount_resep;

        this.total_tagihan.setValue(total_amount);
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

    handleQueryCellInfo(args: QueryCellInfoEventArgs): void {
        if (args.column.field === "comp_fee" || args.column.field === "subsidi" || args.column.field === "iur_biaya") {
            args.cell.classList.add("e-pink-editable-background");
        }
    }

    //** === TIKET ===
    handleSelectedRowDataTiket(args: any): void {
        // console.log(args);
    }

    handleRecordDoubleClickDataTiket(args: any): void {
        let asuransi_column_index = this.GridDataTiket.columns.map((item) => { return item.field }).indexOf('comp_fee');

        let subsidi_column_index = this.GridDataTiket.columns.map((item) => { return item.field }).indexOf('subsidi');

        let iur_biaya_column_index = this.GridDataTiket.columns.map((item) => { return item.field }).indexOf('iur_biaya');

        let clicked_column = args.column.field;

        if (clicked_column === "comp_fee") {
            this.GridDataTiket.columns[asuransi_column_index]['allowEditing'] = true;
            this.GridDataTiket.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDataTiket.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiTiketObj.enabled = true;
                this.SubsidiTiketObj.enabled = false;
                this.IurBiayaTiketObj.enabled = false;
            }, 250);
        };

        if (clicked_column === "subsidi") {
            this.GridDataTiket.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDataTiket.columns[subsidi_column_index]['allowEditing'] = true;
            this.GridDataTiket.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiTiketObj.enabled = false;
                this.SubsidiTiketObj.enabled = true;
                this.IurBiayaTiketObj.enabled = false;
            }, 250);
        };

        if (clicked_column === "iur_biaya") {
            this.GridDataTiket.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDataTiket.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDataTiket.columns[iur_biaya_column_index]['allowEditing'] = true;

            setTimeout(() => {
                this.AsuransiTiketObj.enabled = false;
                this.SubsidiTiketObj.enabled = false;
                this.IurBiayaTiketObj.enabled = true;
            }, 250);
        };

        if (clicked_column !== "comp_fee" && clicked_column !== "subsidi" && clicked_column !== "iur_biaya") {
            this.GridDataTiket.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDataTiket.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDataTiket.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiTiketObj.enabled = false;
                this.SubsidiTiketObj.enabled = false;
                this.IurBiayaTiketObj.enabled = false;
            }, 100);
        }
    }

    handleActionCompletedDataTiket(args: any): void {
        let requestType = args.requestType;

        if (requestType == "save") {
            if (args.data !== args.previousData) {
                this.onAllGridEditedEventMethod(args.data);
            }
        };
    }

    handleSetGridDataTiketParams(): void {
        this.AsuransiTiketParams = {
            create: () => {
                this.AsuransiTiketElem = document.createElement('input');
                return this.AsuransiTiketElem;
            },
            read: () => {
                return this.AsuransiTiketObj.value;
            },
            destroy: () => {
                this.AsuransiTiketObj.destroy();
            },
            write: args => {
                this.AsuransiTiketObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    format: 'N2',
                    value: args.rowData[args.column.field],
                    change: function (args) {
                        let formEle = this.GridDataTiket.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        this.SubsidiTiketObj.value = total_amount_ele.value - this.AsuransiTiketObj.value;

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.onCountTotalTagihanPerBarisGridTiket(total_amount_ele.value, tagihan_ele.value);
                    }.bind(this)
                });
                this.AsuransiTiketObj.appendTo(this.AsuransiTiketElem);
            }
        };

        this.SubsidiTiketParams = {
            create: () => {
                this.SubsidiTiketElem = document.createElement('input');
                return this.SubsidiTiketElem;
            },
            read: () => {
                return this.SubsidiTiketObj.value;
            },
            destroy: () => {
                this.SubsidiTiketObj.destroy();
            },
            write: args => {
                this.SubsidiTiketObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    value: args.rowData[args.column.field],
                    format: 'N2',
                    change: function (args: any) {
                        let formEle = this.GridDataTiket.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.onCountTotalTagihanPerBarisGridTiket(total_amount_ele.value, tagihan_ele.value);
                    }.bind(this),

                });
                this.SubsidiTiketObj.appendTo(this.SubsidiTiketElem);
            }
        };

        this.IurBiayaTiketParams = {
            create: () => {
                this.IurBiayaTiketElem = document.createElement('input');
                return this.IurBiayaTiketElem;
            },
            read: () => {
                return this.IurBiayaTiketObj.value;
            },
            destroy: () => {
                this.IurBiayaTiketObj.destroy();
            },
            write: args => {
                this.IurBiayaTiketObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    value: args.rowData[args.column.field],
                    format: 'N2',
                    change: function (args) {
                        let formEle = this.GridDataTiket.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.IurBiayaTiketObj.value;

                        this.SubsidiTiketObj.value = total_amount_ele.value - tagihan_ele.value - this.AsuransiTiketObj.value;
                    }.bind(this),
                });
                this.IurBiayaTiketObj.appendTo(this.IurBiayaTiketElem);
            }
        };
    }

    onCountTotalTagihanPerBarisGridTiket(total_amount: any, tagihan: any): void {
        let total_asuransi_plus_subsidi = this.AsuransiTiketObj.value + this.SubsidiTiketObj.value;

        if (total_asuransi_plus_subsidi > total_amount) {
            this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Ass/Ttg P + Subsidi Tidak Boleh > Jml Tarif');
        } else {
            tagihan = total_amount - total_asuransi_plus_subsidi;

            if (this.IurBiayaTiketObj.value > 0) {
                this.IurBiayaTiketObj.value = tagihan;
            }
        };

        return tagihan;
    }

    //** === TDMK ===
    handleSelectedRowDataTDMK(args: any): void {

    }

    handleActionCompletedDataTDMK(args: any): void {
        let requestType = args.requestType;

        if (requestType == "save") {
            if (args.data !== args.previousData) {
                this.onAllGridEditedEventMethod(args.data);
            }
        };
    }

    handleRecordDoubleClickDataTDMK(args: any): void {
        let asuransi_column_index = this.GridDataTDMK.columns.map((item) => { return item.field }).indexOf('comp_fee');

        let subsidi_column_index = this.GridDataTDMK.columns.map((item) => { return item.field }).indexOf('subsidi');

        let iur_biaya_column_index = this.GridDataTDMK.columns.map((item) => { return item.field }).indexOf('iur_biaya');

        let clicked_column = args.column.field;

        if (clicked_column === "comp_fee") {
            this.GridDataTDMK.columns[asuransi_column_index]['allowEditing'] = true;
            this.GridDataTDMK.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDataTDMK.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiTDMKObj.enabled = true;
                this.SubsidiTDMKObj.enabled = false;
                this.IurBiayaTDMKObj.enabled = false;
            }, 250);
        };

        if (clicked_column === "subsidi") {
            this.GridDataTDMK.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDataTDMK.columns[subsidi_column_index]['allowEditing'] = true;
            this.GridDataTDMK.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiTDMKObj.enabled = false;
                this.SubsidiTDMKObj.enabled = true;
                this.IurBiayaTDMKObj.enabled = false;
            }, 250);
        };

        if (clicked_column === "iur_biaya") {
            this.GridDataTDMK.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDataTDMK.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDataTDMK.columns[iur_biaya_column_index]['allowEditing'] = true;

            setTimeout(() => {
                this.AsuransiTDMKObj.enabled = false;
                this.SubsidiTDMKObj.enabled = false;
                this.IurBiayaTDMKObj.enabled = true;
            }, 250);
        };

        if (clicked_column !== "comp_fee" && clicked_column !== "subsidi" && clicked_column !== "iur_biaya") {
            this.GridDataTDMK.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDataTDMK.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDataTDMK.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiTDMKObj.enabled = false;
                this.SubsidiTDMKObj.enabled = false;
                this.IurBiayaTDMKObj.enabled = false;
            }, 100);
        }
    }

    handleSetGridDataTDMKParams(): void {
        this.AsuransiTDMKParams = {
            create: () => {
                this.AsuransiTDMKElem = document.createElement('input');
                return this.AsuransiTDMKElem;
            },
            read: () => {
                return this.AsuransiTDMKObj.value;
            },
            destroy: () => {
                this.AsuransiTDMKObj.destroy();
            },
            write: args => {
                this.AsuransiTDMKObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    format: 'N2',
                    value: args.rowData[args.column.field],
                    change: function (args) {
                        let formEle = this.GridDataTDMK.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        this.SubsidiTDMKObj.value = total_amount_ele.value - this.AsuransiTDMKObj.value;

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.onCountTotalTagihanPerBarisGridTDMK(total_amount_ele.value, tagihan_ele.value);
                    }.bind(this)
                });
                this.AsuransiTDMKObj.appendTo(this.AsuransiTDMKElem);
            }
        };

        this.SubsidiTDMKParams = {
            create: () => {
                this.SubsidiTDMKElem = document.createElement('input');
                return this.SubsidiTDMKElem;
            },
            read: () => {
                return this.SubsidiTDMKObj.value;
            },
            destroy: () => {
                this.SubsidiTDMKObj.destroy();
            },
            write: args => {
                this.SubsidiTDMKObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    value: args.rowData[args.column.field],
                    format: 'N2',
                    change: function (args: any) {
                        let formEle = this.GridDataTDMK.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.onCountTotalTagihanPerBarisGridTDMK(total_amount_ele.value, tagihan_ele.value);
                    }.bind(this),

                });
                this.SubsidiTDMKObj.appendTo(this.SubsidiTDMKElem);
            }
        };

        this.IurBiayaTDMKParams = {
            create: () => {
                this.IurBiayaTDMKElem = document.createElement('input');
                return this.IurBiayaTDMKElem;
            },
            read: () => {
                return this.IurBiayaTDMKObj.value;
            },
            destroy: () => {
                this.IurBiayaTDMKObj.destroy();
            },
            write: args => {
                this.IurBiayaTDMKObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    value: args.rowData[args.column.field],
                    format: 'N2',
                    change: function (args: any) {
                        let formEle = this.GridDataTDMK.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.IurBiayaTDMKObj.value;

                        this.SubsidiTDMKObj.value = total_amount_ele.value - tagihan_ele.value - this.AsuransiTDMKObj.value;
                    }.bind(this),
                });
                this.IurBiayaTDMKObj.appendTo(this.IurBiayaTDMKElem);
            }
        };
    }

    onCountTotalTagihanPerBarisGridTDMK(total_amount: any, tagihan: any): void {
        let total_asuransi_plus_subsidi = this.AsuransiTDMKObj.value + this.SubsidiTDMKObj.value;

        if (total_asuransi_plus_subsidi > total_amount) {
            this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Ass/Ttg P + Subsidi Tidak Boleh > Jml Tarif');
        } else {
            tagihan = total_amount - total_asuransi_plus_subsidi;

            if (this.IurBiayaTDMKObj.value > 0) {
                this.IurBiayaTDMKObj.value = tagihan;
            }
        };

        return tagihan;
    }

    //** === TDLAB ===
    handleSelectedRowDataTDLAB(args: any): void {

    }

    handleActionCompletedDataTDLAB(args: any): void {
        let requestType = args.requestType;

        if (requestType == "save") {
            if (args.data !== args.previousData) {
                this.onAllGridEditedEventMethod(args.data);
            }
        };
    }

    handleRecordDoubleClickDataTDLAB(args: any): void {
        let asuransi_column_index = this.GridDataTDLAB.columns.map((item) => { return item.field }).indexOf('comp_fee');

        let subsidi_column_index = this.GridDataTDLAB.columns.map((item) => { return item.field }).indexOf('subsidi');

        let iur_biaya_column_index = this.GridDataTDLAB.columns.map((item) => { return item.field }).indexOf('iur_biaya');

        let clicked_column = args.column.field;

        if (clicked_column === "comp_fee") {
            this.GridDataTDLAB.columns[asuransi_column_index]['allowEditing'] = true;
            this.GridDataTDLAB.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDataTDLAB.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiTDLABObj.enabled = true;
                this.SubsidiTDLABObj.enabled = false;
                this.IurBiayaTDLABObj.enabled = false;
            }, 250);
        };

        if (clicked_column === "subsidi") {
            this.GridDataTDLAB.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDataTDLAB.columns[subsidi_column_index]['allowEditing'] = true;
            this.GridDataTDLAB.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiTDLABObj.enabled = false;
                this.SubsidiTDLABObj.enabled = true;
                this.IurBiayaTDLABObj.enabled = false;
            }, 250);
        };

        if (clicked_column === "iur_biaya") {
            this.GridDataTDLAB.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDataTDLAB.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDataTDLAB.columns[iur_biaya_column_index]['allowEditing'] = true;

            setTimeout(() => {
                this.AsuransiTDLABObj.enabled = false;
                this.SubsidiTDLABObj.enabled = false;
                this.IurBiayaTDLABObj.enabled = true;
            }, 250);
        };

        if (clicked_column !== "comp_fee" && clicked_column !== "subsidi" && clicked_column !== "iur_biaya") {
            this.GridDataTDLAB.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDataTDLAB.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDataTDLAB.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiTDLABObj.enabled = false;
                this.SubsidiTDLABObj.enabled = false;
                this.IurBiayaTDLABObj.enabled = false;
            }, 100);
        }
    }

    handleSetGridDataTDLABParams(): void {
        this.AsuransiTDLABParams = {
            create: () => {
                this.AsuransiTDLABElem = document.createElement('input');
                return this.AsuransiTDLABElem;
            },
            read: () => {
                return this.AsuransiTDLABObj.value;
            },
            destroy: () => {
                this.AsuransiTDLABObj.destroy();
            },
            write: args => {
                this.AsuransiTDLABObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    format: 'N2',
                    value: args.rowData[args.column.field],
                    change: function (args) {
                        let formEle = this.GridDataTDLAB.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        this.SubsidiTDLABObj.value = total_amount_ele.value - this.AsuransiTDLABObj.value;

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.onCountTotalTagihanPerBarisGridTDLAB(total_amount_ele.value, tagihan_ele.value);
                    }.bind(this)
                });
                this.AsuransiTDLABObj.appendTo(this.AsuransiTDLABElem);
            }
        };

        this.SubsidiTDLABParams = {
            create: () => {
                this.SubsidiTDLABElem = document.createElement('input');
                return this.SubsidiTDLABElem;
            },
            read: () => {
                return this.SubsidiTDLABObj.value;
            },
            destroy: () => {
                this.SubsidiTDLABObj.destroy();
            },
            write: args => {
                this.SubsidiTDLABObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    value: args.rowData[args.column.field],
                    format: 'N2',
                    change: function (args: any) {
                        let formEle = this.GridDataTDLAB.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.onCountTotalTagihanPerBarisGridTDLAB(total_amount_ele.value, tagihan_ele.value);
                    }.bind(this),

                });
                this.SubsidiTDLABObj.appendTo(this.SubsidiTDLABElem);
            }
        };

        this.IurBiayaTDLABParams = {
            create: () => {
                this.IurBiayaTDLABElem = document.createElement('input');
                return this.IurBiayaTDLABElem;
            },
            read: () => {
                return this.IurBiayaTDLABObj.value;
            },
            destroy: () => {
                this.IurBiayaTDLABObj.destroy();
            },
            write: args => {
                this.IurBiayaTDLABObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    value: args.rowData[args.column.field],
                    format: 'N2',
                    change: function (args: any) {
                        let formEle = this.GridDataTDLAB.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.IurBiayaTDLABObj.value;

                        this.SubsidiTDLABObj.value = total_amount_ele.value - tagihan_ele.value - this.AsuransiTDLABObj.value;
                    }.bind(this),

                });
                this.IurBiayaTDLABObj.appendTo(this.IurBiayaTDLABElem);
            }
        };
    }

    onCountTotalTagihanPerBarisGridTDLAB(total_amount: any, tagihan: any): void {
        let total_asuransi_plus_subsidi = this.AsuransiTDLABObj.value + this.SubsidiTDLABObj.value;

        if (total_asuransi_plus_subsidi > total_amount) {
            this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Ass/Ttg P + Subsidi Tidak Boleh > Jml Tarif');
        } else {
            tagihan = total_amount - total_asuransi_plus_subsidi;

            if (this.IurBiayaTDLABObj.value > 0) {
                this.IurBiayaTDLABObj.value = tagihan;
            }
        };

        return tagihan;
    }

    //** === TDRAD ===
    handleSelectedRowDataTDRAD(args: any): void {

    }

    handleActionCompleteDataTDRAD(args: any): void {
        let requestType = args.requestType;

        if (requestType == "save") {
            if (args.data !== args.previousData) {
                this.onAllGridEditedEventMethod(args.data);
            }
        };
    }

    handleRecordDoubleClickDataTDRAD(args: any): void {
        let asuransi_column_index = this.GridDataTDRAD.columns.map((item) => { return item.field }).indexOf('comp_fee');

        let subsidi_column_index = this.GridDataTDRAD.columns.map((item) => { return item.field }).indexOf('subsidi');

        let iur_biaya_column_index = this.GridDataTDRAD.columns.map((item) => { return item.field }).indexOf('iur_biaya');

        let clicked_column = args.column.field;

        if (clicked_column === "comp_fee") {
            this.GridDataTDRAD.columns[asuransi_column_index]['allowEditing'] = true;
            this.GridDataTDRAD.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDataTDRAD.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiTDRADObj.enabled = true;
                this.SubsidiTDRADObj.enabled = false;
                this.IurBiayaTDRADObj.enabled = false;
            }, 250);
        };

        if (clicked_column === "subsidi") {
            this.GridDataTDRAD.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDataTDRAD.columns[subsidi_column_index]['allowEditing'] = true;
            this.GridDataTDRAD.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiTDRADObj.enabled = false;
                this.SubsidiTDRADObj.enabled = true;
                this.IurBiayaTDRADObj.enabled = false;
            }, 250);
        };

        if (clicked_column === "iur_biaya") {
            this.GridDataTDRAD.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDataTDRAD.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDataTDRAD.columns[iur_biaya_column_index]['allowEditing'] = true;

            setTimeout(() => {
                this.AsuransiTDRADObj.enabled = false;
                this.SubsidiTDRADObj.enabled = false;
                this.IurBiayaTDRADObj.enabled = true;
            }, 250);
        };

        if (clicked_column !== "comp_fee" && clicked_column !== "subsidi" && clicked_column !== "iur_biaya") {
            this.GridDataTDRAD.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDataTDRAD.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDataTDRAD.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiTDRADObj.enabled = false;
                this.AsuransiTDRADObj.enabled = false;
                this.AsuransiTDRADObj.enabled = false;
            }, 100);
        }
    }

    handleSetGridDataTDRADParams(): void {
        this.AsuransiTDRADParams = {
            create: () => {
                this.AsuransiTDRADElem = document.createElement('input');
                return this.AsuransiTDRADElem;
            },
            read: () => {
                return this.AsuransiTDRADObj.value;
            },
            destroy: () => {
                this.AsuransiTDRADObj.destroy();
            },
            write: args => {
                this.AsuransiTDRADObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    format: 'N2',
                    value: args.rowData[args.column.field],
                    change: function (args) {
                        let formEle = this.GridDataTDRAD.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        this.SubsidiTDRADObj.value = total_amount_ele.value - this.AsuransiTDRADObj.value;

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.onCountTotalTagihanPerBarisGridTDRAD(total_amount_ele.value, tagihan_ele.value);
                    }.bind(this)
                });
                this.AsuransiTDRADObj.appendTo(this.AsuransiTDRADElem);
            }
        };

        this.SubsidiTDRADParams = {
            create: () => {
                this.SubsidiTDRADElem = document.createElement('input');
                return this.SubsidiTDRADElem;
            },
            read: () => {
                return this.SubsidiTDRADObj.value;
            },
            destroy: () => {
                this.SubsidiTDRADObj.destroy();
            },
            write: args => {
                this.SubsidiTDRADObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    value: args.rowData[args.column.field],
                    format: 'N2',
                    change: function (args: any) {
                        let formEle = this.GridDataTDRAD.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.onCountTotalTagihanPerBarisGridTDRAD(total_amount_ele.value, tagihan_ele.value);
                    }.bind(this),

                });
                this.SubsidiTDRADObj.appendTo(this.SubsidiTDRADElem);
            }
        };

        this.IurBiayaTDRADParams = {
            create: () => {
                this.IurBiayaTDRADElem = document.createElement('input');
                return this.IurBiayaTDRADElem;
            },
            read: () => {
                return this.IurBiayaTDRADObj.value;
            },
            destroy: () => {
                this.IurBiayaTDRADObj.destroy();
            },
            write: args => {
                this.IurBiayaTDRADObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    value: args.rowData[args.column.field],
                    format: 'N2',
                    change: function (args: any) {
                        let formEle = this.GridDataTDRAD.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.IurBiayaTDRADObj.value;

                        this.SubsidiTDRADObj.value = total_amount_ele.value - tagihan_ele.value - this.AsuransiTDRADObj.value;
                    }.bind(this),

                });
                this.IurBiayaTDRADObj.appendTo(this.IurBiayaTDRADElem);
            }
        };
    }

    onCountTotalTagihanPerBarisGridTDRAD(total_amount: any, tagihan: any): void {
        let total_asuransi_plus_subsidi = this.AsuransiTDRADObj.value + this.SubsidiTDRADObj.value;

        if (total_asuransi_plus_subsidi > total_amount) {
            this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Ass/Ttg P + Subsidi Tidak Boleh > Jml Tarif');
        } else {
            tagihan = total_amount - total_asuransi_plus_subsidi;

            if (this.IurBiayaTDRADObj.value > 0) {
                this.IurBiayaTDRADObj.value = tagihan;
            }
        };

        return tagihan;
    }

    //** === RESEP ===
    handleSelectedRowDataResep(args: any): void {

    }

    handleActionCompleteDataResep(args: any): void {
        let requestType = args.requestType;

        if (requestType == "save") {
            if (args.data !== args.previousData) {
                this.onAllGridEditedEventMethod(args.data);
            }
        };
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

    handleRecordDoubleClickDataResep(args: any): void {
        let asuransi_column_index = this.GridDataResep.columns.map((item) => { return item.field }).indexOf('comp_fee');

        let subsidi_column_index = this.GridDataResep.columns.map((item) => { return item.field }).indexOf('subsidi');

        let iur_biaya_column_index = this.GridDataResep.columns.map((item) => { return item.field }).indexOf('iur_biaya');

        let clicked_column = args.column.field;

        if (clicked_column === "comp_fee") {
            this.GridDataResep.columns[asuransi_column_index]['allowEditing'] = true;
            this.GridDataResep.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDataResep.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiResepObj.enabled = true;
                this.SubsidiResepObj.enabled = false;
                this.IurBiayaResepObj.enabled = false;
            }, 250);
        };

        if (clicked_column === "subsidi") {
            this.GridDataResep.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDataResep.columns[subsidi_column_index]['allowEditing'] = true;
            this.GridDataResep.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiResepObj.enabled = false;
                this.SubsidiResepObj.enabled = true;
                this.IurBiayaResepObj.enabled = false;
            }, 250);
        };

        if (clicked_column === "iur_biaya") {
            this.GridDataResep.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDataResep.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDataResep.columns[iur_biaya_column_index]['allowEditing'] = true;

            setTimeout(() => {
                this.AsuransiResepObj.enabled = false;
                this.SubsidiResepObj.enabled = false;
                this.IurBiayaResepObj.enabled = true;
            }, 250);
        };

        if (clicked_column !== "comp_fee" && clicked_column !== "subsidi" && clicked_column !== "iur_biaya") {
            this.GridDataResep.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDataResep.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDataResep.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiResepObj.enabled = false;
                this.SubsidiResepObj.enabled = false;
                this.IurBiayaResepObj.enabled = false;
            }, 100);
        }
    }

    handleSetGridDataResepParams(): void {
        this.AsuransiResepParams = {
            create: () => {
                this.AsuransiResepElem = document.createElement('input');
                return this.AsuransiResepElem;
            },
            read: () => {
                return this.AsuransiResepObj.value;
            },
            destroy: () => {
                this.AsuransiResepObj.destroy();
            },
            write: args => {
                this.AsuransiResepObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    format: 'N2',
                    value: args.rowData[args.column.field],
                    change: function (args) {
                        let formEle = this.GridDataResep.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        this.SubsidiResepObj.value = total_amount_ele.value - this.AsuransiResepObj.value;

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.onCountTotalTagihanPerBarisGridResep(total_amount_ele.value, tagihan_ele.value);
                    }.bind(this)
                });
                this.AsuransiResepObj.appendTo(this.AsuransiResepElem);
            }
        };

        this.SubsidiResepParams = {
            create: () => {
                this.SubsidiResepElem = document.createElement('input');
                return this.SubsidiResepElem;
            },
            read: () => {
                return this.SubsidiResepObj.value;
            },
            destroy: () => {
                this.SubsidiResepObj.destroy();
            },
            write: args => {
                this.SubsidiResepObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    value: args.rowData[args.column.field],
                    format: 'N2',
                    change: function (args: any) {
                        let formEle = this.GridDataResep.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.onCountTotalTagihanPerBarisGridResep(total_amount_ele.value, tagihan_ele.value);
                    }.bind(this),

                });
                this.SubsidiResepObj.appendTo(this.SubsidiResepElem);
            }
        };

        this.IurBiayaResepParams = {
            create: () => {
                this.IurBiayaResepElem = document.createElement('input');
                return this.IurBiayaResepElem;
            },
            read: () => {
                return this.IurBiayaResepObj.value;
            },
            destroy: () => {
                this.IurBiayaResepObj.destroy();
            },
            write: args => {
                this.IurBiayaResepObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    value: args.rowData[args.column.field],
                    format: 'N2',
                    change: function (args: any) {
                        let formEle = this.GridDataResep.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.SubsidiResepObj.value;

                        this.SubsidiResepObj.value = total_amount_ele.value - tagihan_ele.value - this.AsuransiResepObj.value;
                    }.bind(this),

                });
                this.IurBiayaResepObj.appendTo(this.IurBiayaResepElem);
            }
        };
    }

    onCountTotalTagihanPerBarisGridResep(total_amount: any, tagihan: any): void {
        let total_asuransi_plus_subsidi = this.AsuransiResepObj.value + this.SubsidiResepObj.value;

        if (total_asuransi_plus_subsidi > total_amount) {
            this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Ass/Ttg P + Subsidi Tidak Boleh > Jml Tarif');
        } else {
            tagihan = total_amount - total_asuransi_plus_subsidi;

            if (this.IurBiayaResepObj.value > 0) {
                this.IurBiayaResepObj.value = tagihan;
            }
        };

        return tagihan;
    }

    onAllGridEditedEventMethod(data: any): void {
        if (this.AllGridEditedData.length > 0) {
            let current_data = this.AllGridEditedData.map((item) => { return item.id_transaksi }).indexOf(data.id_transaksi);

            if (current_data > -1) {
                this.AllGridEditedData.splice(current_data, 1);

                this.AllGridEditedData.push(data);
            } else {
                this.AllGridEditedData.push(data);
            }
        } else {
            this.AllGridEditedData.push(data);
        };

        this.onSumTotalAsuransiFromAllGrid(this.AllGridEditedData);

        this.onSumTotalAsuransiFromAllGrid(this.AllGridEditedData);

        this.onSumTotalSubsidiFromAllGrid(this.AllGridEditedData);

        this.onSumTotalTagihanFromAllGrid(this.AllGridEditedData);
    }

    onSumTotalBiayaFromAllGrid(data: any[]): void {
        let all_detail = [];

        data.forEach((item) => {
            all_detail.push(...item.detail);
        });

        let total_amount = 0;

        all_detail.forEach((item) => {
            total_amount += item.total_amount;
        });

        this.total_amount.setValue(total_amount);

        this.onSumTotalAsuransiFromAllGrid(all_detail);

        this.onSumTotalAsuransiFromAllGrid(all_detail);

        this.onSumTotalSubsidiFromAllGrid(all_detail);

        this.onSumTotalTagihanFromAllGrid(all_detail);
    }

    onSumTotalAsuransiFromAllGrid(data: any[]): void {
        let comp_fee = 0;

        data.forEach((item) => {
            comp_fee += item.comp_fee;
        });

        this.asuransi_amount.setValue(comp_fee);
    }

    onSumTotalSubsidiFromAllGrid(data: any[]): void {
        let subsidi = 0;

        data.forEach((item) => {
            subsidi += item.subsidi;
        });

        this.subsidi_amount.setValue(subsidi);
    }

    onSumTotalTagihanFromAllGrid(data: any[]): void {
        let tagihan = 0;

        data.forEach((item) => {
            tagihan += item.tagihan;
        });

        this.total_tagihan.setValue(tagihan);
    }

    onMoveAllGridTagihanIntoSubsidi(): any {
        let all_detail: any = [];

        all_detail = this.BillingItem.filter((item) => {
            item.detail.filter((detail_item) => {
                if (detail_item.subsidi > 0) {
                    detail_item.subsidi = detail_item.tagihan + detail_item.subsidi;

                    detail_item.tagihan = 0;

                    detail_item.iur_biaya = 0;
                } else {
                    detail_item.subsidi = detail_item.tagihan;

                    detail_item.tagihan = 0;

                    detail_item.iur_biaya = 0;
                }
                this.onAllGridEditedEventMethod(detail_item);

                return detail_item;
            });
            return item;
        });

        this.BillingItem = [];

        this.BillingItem = all_detail;

        this.GridDataTiket.refresh();

        this.GridDataTDMK.refresh();

        this.GridDataTDLAB.refresh();

        this.GridDataTDRAD.refresh();

        // this.GridDataResep.refresh();

        this.onSumTotalBiayaFromAllGrid(this.BillingItem);

        console.log(this.AllGridEditedData);
    }

    handleSaveDraft(data: any): void {
        let item_transaksi = [];

        data.filter((item) => {
            let total_amount_is_matched = item.total_amount == item.tagihan + item.subsidi + item.comp_fee ? true : false;

            if (total_amount_is_matched) {
                item_transaksi.push({
                    id_transaksi: item.id_transaksi,
                    comp_fee: item.comp_fee,
                    iur_biaya: item.iur_biaya,
                    subsidi: item.subsidi,
                    tagihan: item.tagihan,
                });
            }
        });

        let parameter = {
            id_register: this.id_register.value,
            item_transaksi: item_transaksi
        };

        // this.transBillingRawatDaruratService.onSaveDraft(parameter)
        //     .subscribe((result) => {
        //         if (result) {
        //             this.utilityService.onShowingCustomAlert('success', 'Success', 'Draft Billing Rawat Darurat Berhasil Disimpan')
        //                 .then(() => {
        //                     let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["no_register"]);

        //                     this.BillingItem = [];

        //                     this.onGetDataBillingByNoRegister(NoRegister);
        //                 });
        //         }
        //     });
    }

    // ** PEMBAYARAN    
    // ** Pembayaran Billing IRDA ada 2 Method 
    // ** Create Invoice Tunggal dan Pelunasan (Pulang)
    // ** Setelah Melakukan Pelunasan, maka tombol Buat Invoice hilang diganti Reprocess
    // !! Tombol Reprocess Belum Dibuat 
    handleOpenModalPembayaran(ModalPembayaranState: string): void {
        let btnModalPembayaran = document.getElementById('btnModalPembayaran') as HTMLElement;
        btnModalPembayaran.click();

        this.GridDataPembayaranDatasource = [];

        this.ModalPembayaranState = ModalPembayaranState;

        if (ModalPembayaranState == "Invoice") {
            let header = {
                id_register: this.InformasiPasien.id_register,
                total_amount: this.FormInputInvoice.value.total_amount,
                asuransi_amount: this.FormInputInvoice.value.asuransi_amount,
                subsidi_amount: this.FormInputInvoice.value.subsidi_amount,
                total_tagihan: this.FormInputInvoice.value.total_tagihan,
                claim_amount: this.FormInputInvoice.value.claim_amount,
                deposit_amount: this.FormInputInvoice.value.deposit_amount,
                paid_amount: this.FormInputInvoice.value.paid_amount,
            };

            this.TotalTransaksiPembayaran = header.total_tagihan;

            this.GrandTotalTransaksiPembayaran = header.total_tagihan - this.BiayaBankPembayaran;

            this.transBillingRawatInapService.HeaderBilling.next(header);

            // console.log(this.transBillingRawatInapService.HeaderBilling.value);
        };

        if (ModalPembayaranState == "Restitusi") {
            let header = {
                id_register: this.InformasiPasien.id_register,
                total_amount: 0,
                asuransi_amount: this.FormInputInvoice.value.asuransi_amount,
                subsidi_amount: this.FormInputInvoice.value.subsidi_amount,
                total_tagihan: this.FormInputInvoice.value.total_tagihan,
                claim_amount: 0,
                deposit_amount: 0,
                paid_amount: this.deposit_amount.value,
                belum_lunas: this.deposit_amount.value,
            };

            this.transBillingRawatInapService.HeaderBilling.next(header);

            this.TotalTransaksiPembayaran = this.deposit_amount.value;

            this.GrandTotalTransaksiPembayaran = this.deposit_amount.value;
        }
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

        // this.transBillingService.onPostSaveDeposit(parameter)
        //     .subscribe((result) => {
        //         if (result) {
        //             this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Deposit Berhasil Disimpan')
        //                 .then(() => {
        //                     btnCloseModalPembayaran.click();

        //                     setTimeout(() => {
        //                         let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["no_register"]);

        //                         this.BillingItem = [];

        //                         this.onGetDataBillingByNoRegister(NoRegister);

        //                         this.handleClearSelectionAllGrid()

        //                         this.handleEmptyBillingHeader();
        //                     }, 250);
        //                 })
        //         }
        //     });
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

        // this.transBillingService.onPostRestitusi(parameter)
        //     .subscribe((result) => {
        //         if (result) {
        //             this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Restitusi Berhasil Disimpan')
        //                 .then(() => {
        //                     btnCloseModalFinalisasiPembayaran.click();

        //                     setTimeout(() => {
        //                         btnCloseModalPembayaran.click();
        //                     }, 250);

        //                     setTimeout(() => {
        //                         let NoRegister = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["no_register"]);

        //                         this.BillingItem = [];

        //                         this.onGetDataBillingByNoRegister(NoRegister);

        //                         this.handleClearSelectionAllGrid();

        //                         this.SelectedInvoiceRawatJalan = [];

        //                         this.handleEmptyBillingHeader();
        //                     }, 500);
        //                 })
        //         }
        //     });
    }

    handleCloseModalPembayaran(): void {
        let btnCloseModalPembayaran = document.getElementById('btnCloseModalPembayaran') as HTMLElement;
        btnCloseModalPembayaran.click();
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

    handleCommandClickPembayaran(args: any): void {
        let no_urut = args.rowData.no_urut;

        let index = this.GridDataPembayaranDatasource.map((item) => { return item.no_urut }).indexOf(no_urut);

        if (index > -1) {
            this.GridDataPembayaranDatasource.splice(index, 1);

            this.GridDataPembayaran.refresh();

            this.onCountTotalPembayaran();
        }
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

        if (this.ModalPembayaranState == "Invoice") {

            // ** Set Header Parameter
            let header = {
                id_register: this.InformasiPasien.id_register,
                total_amount: this.FormInputInvoice.value.total_amount,
                asuransi_amount: this.FormInputInvoice.value.asuransi_amount,
                subsidi_amount: this.FormInputInvoice.value.subsidi_amount,
                total_tagihan: this.FormInputInvoice.value.total_tagihan,
                claim_amount: this.FormInputInvoice.value.claim_amount,
                deposit_amount: this.FormInputInvoice.value.deposit_amount,
                paid_amount: this.FormInputInvoice.value.paid_amount,
            };

            // ** Insert Into HeaderBilling BehaviorSubject
            this.transBillingRawatInapService.HeaderBilling.next(header);
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

        console.log(this.DataFinalisasiPembayaran.value);
    }

    handleClickSubmitPembayaran(): void {

    }

    handleBatalPayment(data: any): void {
        console.log(data);
    }

    get total_amount(): AbstractControl { return this.FormInputInvoice.get('total_amount'); }
    get asuransi_amount(): AbstractControl { return this.FormInputInvoice.get('asuransi_amount'); }
    get subsidi_amount(): AbstractControl { return this.FormInputInvoice.get('subsidi_amount'); }
    get total_tagihan(): AbstractControl { return this.FormInputInvoice.get('total_tagihan'); }
    get claim_amount(): AbstractControl { return this.FormInputInvoice.get('claim_amount'); }
    get deposit_amount(): AbstractControl { return this.FormInputInvoice.get('deposit_amount'); }
    get paid_amount(): AbstractControl { return this.FormInputInvoice.get('paid_amount'); }
    get id_cara_pulang(): AbstractControl { return this.FormInputInvoice.get('id_cara_pulang'); }
    get id_kondisi_pulang(): AbstractControl { return this.FormInputInvoice.get('id_kondisi_pulang'); }

    get id_register(): AbstractControl { return this.FormPembatalan.get('id_register'); }
    get id_payment(): AbstractControl { return this.FormPembatalan.get('id_payment'); }
    get id_invoice(): AbstractControl { return this.FormPembatalan.get('id_invoice'); }
    get reason_canceled(): AbstractControl { return this.FormPembatalan.get('reason_canceled'); }
}
