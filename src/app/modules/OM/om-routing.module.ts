import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SetupPetugasComponent } from "./pages/setup-data/setup-petugas/setup-petugas.component";
import { VerifikasiOrderLabComponent } from "./pages/verifikasi-order-lab/verifikasi-order-lab.component";
import { VerifikasiOrderRadComponent } from "./pages/verifikasi-order-rad/verifikasi-order-rad.component";

const orderManagementRoutes: Routes = [
    {
        path: "setup-data", component: null, children: [
            {
                path: "setup-petugas", component: SetupPetugasComponent, data: { title: 'Setup Petugas' },
            }
        ]
    },
    {
        path: "verifikasi-order-laboratorium", component: VerifikasiOrderLabComponent, data: { title: 'Verifikasi Order Laboratorium' },
    },
    {
        path: "verifikasi-order-radiologi", component: VerifikasiOrderRadComponent, data: { title: 'Verifikasi Order Radiologi' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(orderManagementRoutes)],
    exports: [RouterModule]
})
export class OrderManagementRoutingModule { }