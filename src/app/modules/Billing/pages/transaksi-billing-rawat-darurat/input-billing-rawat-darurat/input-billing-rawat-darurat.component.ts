import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommandModel, EditSettingsModel, GridComponent, GridModel, IEditCell, QueryCellInfoEventArgs, SelectionService, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { IInformasiPasienModel, IResepBillingSubDetailModel } from '../../../models/trans-billing/trans-billing.model';
import { HistoryPembayaranComponent } from '../../transaksi-billing/input-billing/history-pembayaran/history-pembayaran.component';
import { IPaymentMethodModel } from '../../../models/setup-data/setup-payment-method.model';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupPaymentMethodService } from '../../../services/setup-data/setup-payment-method/setup-payment-method.service';
import { TransBillingService } from '../../../services/trans-billing/trans-billing.service';
import { SidebarChildMenuModel } from 'src/app/modules/core/models/navigation/menu.model';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { TransBillingRawatDaruratService } from '../../../services/trans-billing-rawat-darurat/trans-billing-rawat-darurat.service';

@Component({
    selector: 'app-input-billing-rawat-darurat',
    templateUrl: './input-billing-rawat-darurat.component.html',
    styleUrls: ['./input-billing-rawat-darurat.component.css']
})
export class InputBillingRawatDaruratComponent implements OnInit, AfterViewInit {

    HeaderRibbon: string = "Input Billing Pasien";

    ButtonNav: ButtonNavModel[] = [
        { Id: 'Baru', Icons1: 'fa-copy fa-sm', Captions: '[F3] Baru' },
        { Id: 'Save_Draft', Icons1: 'fa-save fa-sm', Captions: 'Save Draft' },
        { Id: 'Daftar_Payment', Icons1: 'fa-book fa-sm', Captions: 'Daftar Payment' },
        { Id: 'Create_Invoice', Icons1: 'fa-user-check fa-sm', Captions: '[F5] Buat Invoice' },
        { Id: 'Cetak_Rincian_Biaya', Icons1: 'fa-print fa-sm', Captions: 'Print Rincian Biaya' },
        { Id: 'Info_Kunjungan', Icons1: 'fa-info fa-sm', Captions: 'Info Kunjungan' },
    ];

    InformasiPasien: IInformasiPasienModel;

    InformasiUser = JSON.parse(localStorage.getItem('UserData'));

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
    ChildResepDatasource: IResepBillingSubDetailModel[] = [];
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

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private navigationService: NavigationService,
        private encryptionService: EncryptionService,
        private transBillingService: TransBillingService,
        private setupPaymentMethodService: SetupPaymentMethodService,
        private transBillingRawatDaruratService: TransBillingRawatDaruratService,
    ) { }

    ngOnInit(): void {
        this.onGetButtonSidebarMenu();

        this.FormInputInvoice = this.formBuilder.group({
            total_amount: [0, []],
            asuransi_amount: [0, []],
            subsidi_amount: [0, []],
            total_tagihan: [0, []],
            claim_amount: [0, []],
            deposit_amount: [0, []],
            paid_amount: [0, []],
        });

        this.FormPembatalan = this.formBuilder.group({
            id_register: [0, []],
            id_payment: [0, []],
            id_invoice: [0, []],
            reason_canceled: ["", []],
        });

        this.onGetDataPaymentMethod();
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

                // this.onCountTotalTagihan(result.data.tiket.detail, result.data.tdmk.detail, result.data.tdlab.detail, result.data.tdrad.detail, result.data.resep.detail);
            });
    }

    onCountTotalTagihan(tiket: any[], tdmk: any[], tdlab: any[], tdrad: any[], resep: any[]): void {

        // ** ===== TIKET =======
        this.GridDataTiketContainsNotOpen = tiket.some((item) => { return item.status_bayar != "OPEN" });

        let total_tagihan_tiket = 0;

        tiket.filter((item) => {
            if (item.status_bayar == "OPEN") {
                return total_tagihan_tiket += item.total_amount;
            }
        });

        // ** ===== TDMK ======
        let total_tagihan_tdmk = 0;

        this.GridDataTDMKContainsNotOpen = tdmk.some((item) => { return item.status_bayar != "OPEN" });

        tdmk.filter((item) => {
            if (item.status_bayar == "OPEN") {
                return total_tagihan_tdmk += item.total_amount;
            }
        });

        // ** ===== TDLAB =====
        let total_tagihan_tdlab = 0;

        this.GridDataTDLABContainsNotOpen = tdlab.some((item) => { return item.status_bayar != "OPEN" });

        tdlab.filter((item) => {
            if (item.status_bayar == "OPEN") {
                return total_tagihan_tdlab += item.total_amount;
            }
        });

        // ** ===== TDRAD =====
        let total_tagihan_tdrad = 0;

        this.GridDataTDRADContainsNotOpen = tdrad.some((item) => { return item.status_bayar != "OPEN" });

        tdrad.filter((item) => {
            if (item.status_bayar == "OPEN") {
                return total_tagihan_tdrad += item.total_amount;
            }
        });

        // ** ===== RESEP =====
        let total_tagihan_resep = 0;

        this.GridDataResepContainsNotOpen = resep.some((item) => { return item.status_bayar != "OPEN" });

        resep.filter((item) => {
            if (item.status_bayar == "OPEN") {
                return total_tagihan_resep += item.total_amount;
            }
        });

        let total_tagihan = total_tagihan_tiket + total_tagihan_tdmk + total_tagihan_tdlab + total_tagihan_tdrad + total_tagihan_resep;

        this.total_tagihan.setValue(total_tagihan);
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
    }

    handleActionCompletedDataTiket(args: any): void {
        let requestType = args.requestType;

        if (requestType == "save") {
            if (args.data !== args.previousData) {
                if (this.AllGridEditedData.length > 0) {
                    let current_data = this.AllGridEditedData.map((item) => { return item.id_transaksi }).indexOf(args.data.id_transaksi);

                    if (current_data > -1) {
                        this.AllGridEditedData.splice(current_data, 1);

                        this.AllGridEditedData.push(args.data);
                    } else {
                        this.AllGridEditedData.push(args.data);
                    }
                } else {
                    this.AllGridEditedData.push(args.data);
                }

                console.log(this.AllGridEditedData);
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
                    change: function (args: any) {
                        let formEle = this.GridDataTiket.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.SubsidiTiketObj.value;

                        this.SubsidiTiketObj.value = total_amount_ele.value - tagihan_ele.value;
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
        };

        console.log(tagihan);

        return tagihan;
    }

    //** === TDMK ===
    handleSelectedRowDataTDMK(args: any): void {

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

                        tagihan_ele.value = this.SubsidiTDMKObj.value;

                        this.SubsidiTDMKObj.value = total_amount_ele.value - tagihan_ele.value;
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
        };

        console.log(tagihan);

        return tagihan;
    }

    //** === TDLAB ===
    handleSelectedRowDataTDLAB(args: any): void {

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

                        tagihan_ele.value = this.SubsidiTDLABObj.value;

                        this.SubsidiTDLABObj.value = total_amount_ele.value - tagihan_ele.value;
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
        };

        console.log(tagihan);

        return tagihan;
    }

    //** === TDRAD ===
    handleSelectedRowDataTDRAD(args: any): void {

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

                        tagihan_ele.value = this.SubsidiTDRADObj.value;

                        this.SubsidiTDRADObj.value = total_amount_ele.value - tagihan_ele.value;
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
        };

        console.log(tagihan);

        return tagihan;
    }

    //** === RESEP ===
    handleSelectedRowDataResep(args: any): void {

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

                        this.SubsidiResepObj.value = total_amount_ele.value - tagihan_ele.value;
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
        };

        console.log(tagihan);

        return tagihan;
    }

    get total_amount(): AbstractControl { return this.FormInputInvoice.get('total_amount'); }
    get asuransi_amount(): AbstractControl { return this.FormInputInvoice.get('asuransi_amount'); }
    get subsidi_amount(): AbstractControl { return this.FormInputInvoice.get('subsidi_amount'); }
    get total_tagihan(): AbstractControl { return this.FormInputInvoice.get('total_tagihan'); }
    get claim_amount(): AbstractControl { return this.FormInputInvoice.get('claim_amount'); }
    get deposit_amount(): AbstractControl { return this.FormInputInvoice.get('deposit_amount'); }
    get paid_amount(): AbstractControl { return this.FormInputInvoice.get('paid_amount'); }

    get id_register(): AbstractControl { return this.FormPembatalan.get('id_register'); }
    get id_payment(): AbstractControl { return this.FormPembatalan.get('id_payment'); }
    get id_invoice(): AbstractControl { return this.FormPembatalan.get('id_invoice'); }
    get reason_canceled(): AbstractControl { return this.FormPembatalan.get('reason_canceled'); }
}
