import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BillingRoutingModule } from "./billing-routing.module";
import { SharedModule } from "../shared/shared.module";
import { ContextMenuModule } from "@syncfusion/ej2-angular-navigations";

import { SetupTarifComponent } from './pages/setup-data/setup-tarif/setup-tarif.component';
import { SetupGrupTarifComponent } from './pages/setup-data/setup-grup-tarif/setup-grup-tarif.component';
import { SetupKelompokTarifComponent } from './pages/setup-data/setup-kelompok-tarif/setup-kelompok-tarif.component';
import { SetupKelasPerawatanComponent } from './pages/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.component';
import { SetupJenisRuanganComponent } from './pages/setup-data/setup-jenis-ruangan/setup-jenis-ruangan.component';
import { SettingTarifBerlakuComponent } from './pages/setting-tarif/setting-tarif-berlaku/setting-tarif-berlaku.component';
import { SetupPoliComponent } from './pages/setup-data/setup-poli/setup-poli.component';
import { SettingTarifBerlakuPoliComponent } from './pages/setting-tarif/setting-tarif-berlaku-poli/setting-tarif-berlaku-poli.component';
import { SetupTarifPaketComponent } from './pages/setup-data/setup-tarif-paket/setup-tarif-paket.component';
import { ScanningComponent } from './pages/transaksi-billing/scanning/scanning.component';
import { InputBillingComponent } from './pages/transaksi-billing/input-billing/input-billing.component';
import { CashComponent } from './pages/transaksi-billing/input-billing/payment-method/cash/cash.component';
import { QrisComponent } from './pages/transaksi-billing/input-billing/payment-method/qris/qris.component';
import { SetupPaymentMethodComponent } from './pages/setup-data/setup-payment-method/setup-payment-method.component';
import { SetupBankPaymentComponent } from './pages/setup-data/setup-bank-payment/setup-bank-payment.component';
import { SetupEdcPaymentComponent } from './pages/setup-data/setup-edc-payment/setup-edc-payment.component';
import { SetupVoucherPaymentComponent } from './pages/setup-data/setup-voucher-payment/setup-voucher-payment.component';
import { VoucherComponent } from './pages/transaksi-billing/input-billing/payment-method/voucher/voucher.component';
import { PaymentDebitIrjaComponent } from './pages/transaksi-billing/input-billing/payment-method/payment-debit-irja/payment-debit-irja.component';
import { PaymentCreditIrjaComponent } from './pages/transaksi-billing/input-billing/payment-method/payment-credit-irja/payment-credit-irja.component';
import { HistoryPembayaranComponent } from './pages/transaksi-billing/input-billing/history-pembayaran/history-pembayaran.component';
import { HistoryInvoiceIrjaComponent } from './pages/transaksi-billing/input-billing/history-invoice-irja/history-invoice-irja.component';
import { SetupBukaKasirIrjaComponent } from './pages/kasir-rawat-jalan/setup-buka-kasir-irja/setup-buka-kasir-irja.component';
import { HistorySemuaPembayaranComponent } from './pages/transaksi-billing/input-billing/history-semua-pembayaran/history-semua-pembayaran.component';
import { SetupSetoranKasirIrjaComponent } from './pages/kasir-rawat-jalan/setup-setoran-kasir-irja/setup-setoran-kasir-irja.component';
import { SetupTambahModalKasirIrjaComponent } from './pages/kasir-rawat-jalan/setup-tambah-modal-kasir-irja/setup-tambah-modal-kasir-irja.component';
import { SetupTutupKasirComponent } from './pages/kasir-rawat-jalan/setup-tutup-kasir/setup-tutup-kasir.component';
import { SetupCroscekTutupKasirComponent } from './pages/kasir-rawat-jalan/setup-croscek-tutup-kasir/setup-croscek-tutup-kasir.component';
import { ModalDetailCrossCheckComponent } from './components/modal-detail-cross-check/modal-detail-cross-check.component';
import { ModalDetailPendapatanSistemComponent } from './components/modal-detail-pendapatan-sistem/modal-detail-pendapatan-sistem.component';
import { HistoryCroscekTutupKasirComponent } from './pages/kasir-rawat-jalan/history-croscek-tutup-kasir/history-croscek-tutup-kasir.component';
import { SetupTarifPemeriksaanComponent } from './pages/setup-data/setup-tarif-pemeriksaan/setup-tarif-pemeriksaan.component';


@NgModule({
    declarations: [
        SetupTarifComponent,
        SetupGrupTarifComponent,
        SetupKelompokTarifComponent,
        SetupKelasPerawatanComponent,
        SetupJenisRuanganComponent,
        SettingTarifBerlakuComponent,
        SetupPoliComponent,
        SettingTarifBerlakuPoliComponent,
        SetupTarifPaketComponent,
        ScanningComponent,
        InputBillingComponent,
        CashComponent,
        QrisComponent,
        SetupPaymentMethodComponent,
        SetupBankPaymentComponent,
        SetupEdcPaymentComponent,
        SetupVoucherPaymentComponent,
        VoucherComponent,
        PaymentDebitIrjaComponent,
        PaymentCreditIrjaComponent,
        HistoryPembayaranComponent,
        HistoryInvoiceIrjaComponent,
        SetupBukaKasirIrjaComponent,
        HistorySemuaPembayaranComponent,
        SetupSetoranKasirIrjaComponent,
        SetupTambahModalKasirIrjaComponent,
        SetupTutupKasirComponent,
        SetupCroscekTutupKasirComponent,
        ModalDetailCrossCheckComponent,
        ModalDetailPendapatanSistemComponent,
        HistoryCroscekTutupKasirComponent,
        SetupTarifPemeriksaanComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BillingRoutingModule,
        SharedModule,
        ContextMenuModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BillingModule { }