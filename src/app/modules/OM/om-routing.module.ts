import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailHasilRadiologiComponent } from "./pages/input-hasil-radiologi/detail-hasil-radiologi/detail-hasil-radiologi.component";
import { InputHasilRadiologiComponent } from "./pages/input-hasil-radiologi/input-hasil-radiologi.component";
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
    {
        path: "input-hasil-radiologi", component: InputHasilRadiologiComponent, data: { title: 'Input Hasil Order Radiologi' },
    },
    {
        path: "detail-hasil-radiologi/:id/:key", component: DetailHasilRadiologiComponent, data: { title: 'Hasil Order Radiologi' },
    }
];

@NgModule({
    imports: [RouterModule.forChild(orderManagementRoutes)],
    exports: [RouterModule]
})
export class OrderManagementRoutingModule { }