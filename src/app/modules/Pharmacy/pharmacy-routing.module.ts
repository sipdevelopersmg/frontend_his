import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AntrianFarmasiComponent } from "./pages/Antrian/antrian-farmasi/antrian-farmasi.component";

const pharmacyRoutes: Routes = [
    { path: "", component: null, data: { title: "Pharmacy" } },
    { path: "antrian-farmasi", component: AntrianFarmasiComponent, data: { title: "Antrian Pharmacy" } },
]

@NgModule({
    imports: [RouterModule.forChild(pharmacyRoutes)],
    exports: [RouterModule]
})
export class PharmacyRoutingModule { }