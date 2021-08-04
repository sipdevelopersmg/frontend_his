import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DiagnosaComponent } from "./pages/diagnosa/diagnosa.component";
import { InputOrderBaruComponent } from "./pages/radiologi/input-order-baru/input-order-baru.component";
import { RadiologiComponent } from "./pages/radiologi/radiologi.component";
import { RiwayatPemeriksaanComponent } from "./pages/radiologi/riwayat-pemeriksaan/riwayat-pemeriksaan.component";

const dashboarDokterRoutes: Routes = [
    {
        path: "", component: null, data: { title: "Dashboard Dokter" },
        children: [
            { path: "diagnosa", component: DiagnosaComponent, data: { title: "Diagnosa Pasien" } },
            {
                path: "radiologi", component: RadiologiComponent, data: { title: "Pemeriksaan Radiologi Pasien" },
                children: [
                    { path: "riwayat-pemeriksaan", component: RiwayatPemeriksaanComponent, data: { title: "Riwayat Pemeriksaan Radiologi" } },
                    { path: "input-order-pemeriksaan", component: InputOrderBaruComponent, data: { title: "Input Order Radiologi Baru" } },
                ]
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(dashboarDokterRoutes)],
    exports: [RouterModule]
})
export class DashboarDokterRoutingModule { }