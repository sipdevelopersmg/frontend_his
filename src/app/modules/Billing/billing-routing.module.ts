import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SettingTarifBerlakuPoliComponent } from "./pages/setting-tarif/setting-tarif-berlaku-poli/setting-tarif-berlaku-poli.component";
import { SettingTarifBerlakuComponent } from "./pages/setting-tarif/setting-tarif-berlaku/setting-tarif-berlaku.component";
import { SetupJenisRuanganComponent } from "./pages/setup-data/setup-jenis-ruangan/setup-jenis-ruangan.component";
import { SetupKelasPerawatanComponent } from "./pages/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.component";
import { SetupKelompokTarifComponent } from "./pages/setup-data/setup-kelompok-tarif/setup-kelompok-tarif.component";
import { SetupPoliComponent } from "./pages/setup-data/setup-poli/setup-poli.component";
import { SetupTarifPaketComponent } from "./pages/setup-data/setup-tarif-paket/setup-tarif-paket.component";
import { SetupTarifComponent } from "./pages/setup-data/setup-tarif/setup-tarif.component";

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
        ]
    },
    { path: "setting-tarif-berlaku", component: SettingTarifBerlakuComponent, data: { title: 'Setting Tarif Berlaku' } },
    { path: "setting-tarif-berlaku-per-poli", component: SettingTarifBerlakuPoliComponent, data: { title: 'Setting Tarif Berlaku Per Poli' } },
];

@NgModule({
    imports: [RouterModule.forChild(billingRoutes)],
    exports: [RouterModule]
})
export class BillingRoutingModule { }