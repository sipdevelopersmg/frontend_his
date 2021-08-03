import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DiagnosaComponent } from "./pages/diagnosa/diagnosa.component";
import { LayoutComponent } from "./pages/layout/layout.component";

const dashboarDokterRoutes: Routes = [
    {
        path: "", component: null, data: { title: "Dashboard Dokter" }, children: [
            { path: "diagnosa", component: DiagnosaComponent, data: { title: "Diagnosa" } }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(dashboarDokterRoutes)],
    exports: [RouterModule]
})
export class DashboarDokterRoutingModule { }