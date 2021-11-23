import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HistoryCroscekTutupKasirComponent } from "./pages/kasir-rawat-jalan/history-croscek-tutup-kasir/history-croscek-tutup-kasir.component";
import { SetupBukaKasirIrjaComponent } from "./pages/kasir-rawat-jalan/setup-buka-kasir-irja/setup-buka-kasir-irja.component";
import { SetupCroscekTutupKasirComponent } from "./pages/kasir-rawat-jalan/setup-croscek-tutup-kasir/setup-croscek-tutup-kasir.component";
import { SetupSetoranKasirIrjaComponent } from "./pages/kasir-rawat-jalan/setup-setoran-kasir-irja/setup-setoran-kasir-irja.component";
import { SetupTutupKasirComponent } from "./pages/kasir-rawat-jalan/setup-tutup-kasir/setup-tutup-kasir.component";
import { SettingTarifBerlakuPoliComponent } from "./pages/setting-tarif/setting-tarif-berlaku-poli/setting-tarif-berlaku-poli.component";
import { SettingTarifBerlakuComponent } from "./pages/setting-tarif/setting-tarif-berlaku/setting-tarif-berlaku.component";
import { SetupBankPaymentComponent } from "./pages/setup-data/setup-bank-payment/setup-bank-payment.component";
import { SetupEdcPaymentComponent } from "./pages/setup-data/setup-edc-payment/setup-edc-payment.component";
import { SetupJenisRuanganComponent } from "./pages/setup-data/setup-jenis-ruangan/setup-jenis-ruangan.component";
import { SetupKelasPerawatanComponent } from "./pages/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.component";
import { SetupKelompokTarifComponent } from "./pages/setup-data/setup-kelompok-tarif/setup-kelompok-tarif.component";
import { SetupPaymentMethodComponent } from "./pages/setup-data/setup-payment-method/setup-payment-method.component";
import { SetupPoliComponent } from "./pages/setup-data/setup-poli/setup-poli.component";
import { SetupTarifPaketComponent } from "./pages/setup-data/setup-tarif-paket/setup-tarif-paket.component";
import { SetupTarifPemeriksaanComponent } from "./pages/setup-data/setup-tarif-pemeriksaan/setup-tarif-pemeriksaan.component";
import { SetupTarifComponent } from "./pages/setup-data/setup-tarif/setup-tarif.component";
import { SetupVoucherPaymentComponent } from "./pages/setup-data/setup-voucher-payment/setup-voucher-payment.component";
import { InputBillingRawatDaruratComponent } from "./pages/transaksi-billing-rawat-darurat/input-billing-rawat-darurat/input-billing-rawat-darurat.component";
import { InputBillingRawatInapComponent } from "./pages/transaksi-billing-rawat-inap/input-billing-rawat-inap/input-billing-rawat-inap.component";
import { InputBillingComponent } from "./pages/transaksi-billing/input-billing/input-billing.component";
import { ScanningComponent } from "./pages/transaksi-billing/scanning/scanning.component";

const billingRoutes: Routes = [
    {
        path: 'setup-data', component: null, data: { title: 'Setup Data' },
        children: [
            { path: "setup-tarif", component: SetupTarifComponent, data: { title: 'Setup Tarif' } },
            { path: "setup-kelompok-tarif", component: SetupKelompokTarifComponent, data: { title: 'Setup Kelompok Tarif' } },
            { path: "setup-kelas-perawatan", component: SetupKelasPerawatanComponent, data: { title: 'Setup Kelas Perawatan' } },
            { path: "setup-jenis-ruangan", component: SetupJenisRuanganComponent, data: { title: 'Setup Jenis Ruangan' } },
            { path: "setup-poli", component: SetupPoliComponent, data: { title: 'Setup Poliklinik' } },
            { path: "setup-tarif-paket", component: SetupTarifPaketComponent, data: { title: 'Setup Tarif Paket' } },
            { path: "setup-bank-payment", component: SetupBankPaymentComponent, data: { title: 'Setup Bank Payment' } },
            { path: "setup-edc-payment", component: SetupEdcPaymentComponent, data: { title: 'Setup EDC Payment' } },
            { path: "setup-voucher-payment", component: SetupVoucherPaymentComponent, data: { title: 'Setup Voucher Payment' } },
            { path: "setup-payment-method", component: SetupPaymentMethodComponent, data: { title: 'Setup Payment Method' } },
            { path: "setup-buka-kasir", component: SetupBukaKasirIrjaComponent, data: { title: 'Setup Buka Kasir' } },
            { path: "setup-setoran-kasir", component: SetupSetoranKasirIrjaComponent, data: { title: 'Setup Setoran Kasir' } },
            { path: "setup-tutup-kasir", component: SetupTutupKasirComponent, data: { title: 'Setup Tutup Kasir' } },
            { path: "setup-tarif-pemeriksaan", component: SetupTarifPemeriksaanComponent, data: { title: 'Setup Tarif Pemeriksaan' } },
        ]
    },
    { path: "cross-check-tutup-kasir", component: SetupCroscekTutupKasirComponent, data: { title: 'Cross Check Tutup Kasir' } },
    { path: "history-cross-check-tutup-kasir", component: HistoryCroscekTutupKasirComponent, data: { title: 'History Cross Check Tutup Kasir' } },
    { path: "setting-tarif-berlaku", component: SettingTarifBerlakuComponent, data: { title: 'Setting Tarif Berlaku' } },
    { path: "setting-tarif-berlaku-per-poli", component: SettingTarifBerlakuPoliComponent, data: { title: 'Setting Tarif Berlaku Per Poli' } },
    {
        path: "transaksi-billing-rawat-jalan", component: null, data: { title: 'Transaksi Billing' },
        children: [
            { path: "scan-billing-pasien-rawat-jalan", component: ScanningComponent, data: { title: 'Billing Rawat Jalan - Scan No Register' } },
            { path: "input-billing-pasien/:no_register/:key", component: InputBillingComponent, data: { title: 'Input Billing Pasien Rawat Jalan' } },
        ]
    },
    {
        path: "transaksi-billing-rawat-darurat", component: null, data: { title: 'Transaksi Billing' },
        children: [
            { path: "scan-billing-pasien-rawat-darurat", component: ScanningComponent, data: { title: 'Billing Rawat Darurat - Scan No Register' } },
            { path: "input-billing-pasien/:no_register/:key", component: InputBillingRawatDaruratComponent, data: { title: 'Input Billing Pasien Rawat Darurat' } },
        ]
    },
    {
        path: "transaksi-billing-rawat-inap", component: null, data: { title: 'Transaksi Billing' },
        children: [
            { path: "scan-billing-pasien-rawat-inap", component: ScanningComponent, data: { title: 'Billing Rawat Inap - Scan No Register' } },
            { path: "input-billing-pasien/:no_register/:key", component: InputBillingRawatInapComponent, data: { title: 'Input Billing Pasien Rawat Inap' } },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(billingRoutes)],
    exports: [RouterModule]
})
export class BillingRoutingModule { }