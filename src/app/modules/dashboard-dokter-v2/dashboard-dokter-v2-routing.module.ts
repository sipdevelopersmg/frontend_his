import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardDokterV2Component } from "./dashboard-dokter-v2.component";
import { DetailPasienComponent } from "./pages/detail-pasien/detail-pasien.component";
import { HistoryVisitComponent } from "./pages/history-visit/history-visit.component";
import { ListPasienComponent } from "./pages/list-pasien/list-pasien.component";

export const route: Routes = [
    {
        path: "", component: DashboardDokterV2Component, children: [
            {
                path: 'daftar-pasien', component: ListPasienComponent, data: { title: 'Daftar Pasien' },
            },
            {
                path: 'visit-pasien', component: DetailPasienComponent, data: { title: 'Visit Pasien' },
            },
            {
                path: 'history-visit', component: HistoryVisitComponent, data: { title: 'History Visit' },
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class DashboardDokterV2RoutingModule { }