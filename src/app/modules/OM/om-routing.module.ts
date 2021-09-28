import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VerifikasiOrderLabComponent } from "./pages/verifikasi-order-lab/verifikasi-order-lab.component";

const orderManagementRoutes: Routes = [
    {
        path: "verifikasi-order-laboratorium", component: VerifikasiOrderLabComponent, data: { title: 'Verifikasi Order Laboratorium' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(orderManagementRoutes)],
    exports: [RouterModule]
})
export class OrderManagementRoutingModule { }