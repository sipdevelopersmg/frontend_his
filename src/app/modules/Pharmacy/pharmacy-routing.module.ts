import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AntrianFarmasiComponent } from "./pages/Antrian/antrian-farmasi/antrian-farmasi.component";
import { ResepRacikanComponent } from "./pages/resep-racikan/resep-racikan.component";

const pharmacyRoutes: Routes = [
    { path: "", component: null, data: { title: "Pharmacy" } },
    { path: "antrian-farmasi", component: AntrianFarmasiComponent, data: { title: "Antrian Pharmacy" } },
    { path: "resep-racikan", component: ResepRacikanComponent, data: { title: "Resep Racikan" } },
]

@NgModule({
    imports: [RouterModule.forChild(pharmacyRoutes)],
    exports: [RouterModule]
})
export class PharmacyRoutingModule { }