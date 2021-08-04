import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DiagnosaComponent } from "./pages/diagnosa/diagnosa.component";
import { RadiologiComponent } from "./pages/radiologi/radiologi.component";

const dashboarDokterRoutes: Routes = [
    {
        path: "", component: null, data: { title: "Dashboard Dokter" },
        children: [
            { path: "diagnosa", component: DiagnosaComponent, data: { title: "Diagnosa Pasien" } },
            { path: "radiologi", component: RadiologiComponent, data: { title: "Pemeriksaan Radiologi Pasien" } },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(dashboarDokterRoutes)],
    exports: [RouterModule]
})
export class DashboarDokterRoutingModule { }