import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailSectionComponent } from "./components/detail-section/detail-section.component";
import { DashboardPelayananComponent } from "./pages/dashboard-pelayanan/dashboard-pelayanan.component";
import { DashboardPendapatanComponent } from "./pages/dashboard-pendapatan/dashboard-pendapatan.component";

const dashboardRoutes: Routes = [
    {
        path: "Pelayanan", component: null, children: [
            {
                path: 'dashboard-pelayanan', component: DashboardPelayananComponent, data: { title: 'Dashboard Pelayanan' },
            },
            {
                path: 'detail-pelayanan/:jenis', component: DetailSectionComponent, data: { title: 'Detail Pelayanan' },
            },
        ]
    },
    {
        path: "Pendapatan", component: null, children: [
            {
                path: 'dashboard-pendapatan', component: DashboardPendapatanComponent, data: { title: 'Dashboard Pendapatan' },
            },
            {
                path: 'detail-pendapatan/:jenis', component: DetailSectionComponent, data: { title: 'Detail Pendapatan' },
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }