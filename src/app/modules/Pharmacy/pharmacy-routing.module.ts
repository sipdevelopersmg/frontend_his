import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AntrianFarmasiComponent } from "./pages/Antrian/antrian-farmasi/antrian-farmasi.component";
import { ResepRacikanComponent } from "./pages/resep-racikan/resep-racikan.component";
import { SetupCaraPakaiObatComponent } from "./pages/setup-data/setup-cara-pakai-obat/setup-cara-pakai-obat.component";
import { SetupGrupObatComponent } from "./pages/setup-data/setup-grup-obat/setup-grup-obat.component";
import { SetupLabelPemakaianObatComponent } from "./pages/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.component";
import { SetupOutletComponent } from "./pages/setup-data/setup-outlet/setup-outlet.component";
import { SetupRutePemberianObatComponent } from "./pages/setup-data/setup-rute-pemberian-obat/setup-rute-pemberian-obat.component";
import { SetupTipeOutletComponent } from "./pages/setup-data/setup-tipe-outlet/setup-tipe-outlet.component";
import { SetupFormulariumComponent } from "./pages/setup-formularium/setup-formularium/setup-formularium.component";

const pharmacyRoutes: Routes = [
    { path: "", component: null, data: { title: "Pharmacy" } },
    { path: "antrian-farmasi", component: AntrianFarmasiComponent, data: { title: "Antrian Pharmacy" } },
    { path: "setup-formularium", component: SetupFormulariumComponent, data: { title: "Setup Formularium" } },
    { path: "resep-racikan", component: ResepRacikanComponent, data: { title: "Resep Racikan" } },
    {
        path: "setup-data", component: null, data: { title: "Setup Data" },
        children: [
            { path: "setup-tipe-outlet", component: SetupTipeOutletComponent, data: { title: "Setup Tipe Outlet" } },
            { path: "setup-outlet", component: SetupOutletComponent, data: { title: "Setup Outlet" } },
            { path: "setup-grup-obat", component: SetupGrupObatComponent, data: { title: "Setup Grup Obat" } },
            { path: "setup-cara-pakai-obat", component: SetupCaraPakaiObatComponent, data: { title: "Setup Cara Pakai Obat" } },
            { path: "setup-rute-pemberian-obat", component: SetupRutePemberianObatComponent, data: { title: "Setup rute Pemberian Obat" } },
            { path: "setup-label-pemakaian-obat", component: SetupLabelPemakaianObatComponent, data: { title: "Setup Label Pemakaian Obat" } },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(pharmacyRoutes)],
    exports: [RouterModule]
})
export class PharmacyRoutingModule { }