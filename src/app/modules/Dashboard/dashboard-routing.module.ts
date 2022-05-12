import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { DashboardPelayananComponent } from "./pages/dashboard-pelayanan/dashboard-pelayanan.component";
import { DashboardPendapatanComponent } from "./pages/dashboard-pendapatan/dashboard-pendapatan.component";

const dashboardRoutes: Routes = [
    {
        path: "Pelayanan", component: null, children: [
            {
                path: 'dashboard-pelayanan', component: DashboardPelayananComponent, data: { title: 'Dashboard Pelayanan' },
            },
        ]
    },
    {
        path: "Pendapatan", component: null, children: [
            {
                path: 'dashboard-pendapatan', component: DashboardPendapatanComponent, data: { title: 'Dashboard Pendapatan' },
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }