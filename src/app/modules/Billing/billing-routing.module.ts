import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SetupKelompokTarifComponent } from "./pages/setup-data/setup-kelompok-tarif/setup-kelompok-tarif.component";
import { SetupTarifComponent } from "./pages/setup-data/setup-tarif/setup-tarif.component";

const billingRoutes: Routes = [
    {
        path: 'setup-data', component: null, data: { title: 'Setup Data' },
        children: [
            { path: "setup-tarif", component: SetupTarifComponent, data: { title: 'Setup Tarif' } },
            { path: "setup-kelompok-tarif", component: SetupKelompokTarifComponent, data: { title: 'Setup Kelompok Tarif' } },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(billingRoutes)],
    exports: [RouterModule]
})
export class BillingRoutingModule { }