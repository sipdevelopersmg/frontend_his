import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardDokterComponent } from "./dashboard-dokter.component";
import { BerandaDokterComponent } from "./pages/beranda-dokter/beranda-dokter.component";
import { DaftarPasienPerDokterComponent } from "./pages/daftar-pasien-per-dokter/daftar-pasien-per-dokter.component";
import { DiagnosaComponent } from "./pages/diagnosa/diagnosa.component";
import { InputOrderBaruLabComponent } from "./pages/laboratorium/input-order-baru/input-order-baru.component";
import { LaboratoriumComponent } from "./pages/laboratorium/laboratorium.component";
import { RiwayatPemeriksaanLabComponent } from "./pages/laboratorium/riwayat-pemeriksaan/riwayat-pemeriksaan.component";
import { InputOrderBaruRadComponent } from "./pages/radiologi/input-order-baru/input-order-baru.component";
import { RadiologiComponent } from "./pages/radiologi/radiologi.component";
import { RiwayatPemeriksaanRadComponent } from "./pages/radiologi/riwayat-pemeriksaan/riwayat-pemeriksaan.component";
import { ResepComponent } from "./pages/resep/resep.component";

const dashboarDokterRoutes: Routes = [
    {
        path: "", component: DashboardDokterComponent, data: { title: "Dashboard Dokter" },
        children: [
            { path: "beranda", component: BerandaDokterComponent, data: { title: "Beranda Dokter" } },
            { path: "daftar-pasien", component: DaftarPasienPerDokterComponent, data: { title: "Daftar Pasien" } },
            { path: "diagnosa", component: DiagnosaComponent, data: { title: "Diagnosa Pasien" } },
            {
                path: "radiologi", component: RadiologiComponent, data: { title: "Pemeriksaan Radiologi Pasien" },
                children: [
                    { path: "riwayat-pemeriksaan", component: RiwayatPemeriksaanRadComponent, data: { title: "Riwayat Pemeriksaan Radiologi" } },
                    { path: "input-order-pemeriksaan", component: InputOrderBaruRadComponent, data: { title: "Input Order Radiologi Baru" } },
                ]
            },
            {
                path: "laboratorium", component: LaboratoriumComponent, data: { title: "Pemeriksaan Laboratorium Pasien" },
                children: [
                    { path: "riwayat-pemeriksaan", component: RiwayatPemeriksaanLabComponent, data: { title: "Riwayat Pemeriksaan Laboratorium" } },
                    { path: "input-order-pemeriksaan", component: InputOrderBaruLabComponent, data: { title: "Input Order Laboratorium Baru" } },
                ]
            },
            {
                path: "resep", component: ResepComponent, data: { title: "Resep Pasien" },
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(dashboarDokterRoutes)],
    exports: [RouterModule]
})
export class DashboarDokterRoutingModule { }