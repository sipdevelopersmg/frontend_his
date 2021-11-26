import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardDokterComponent } from "./dashboard-dokter.component";
import { AlergiComponent } from "./pages/alergi/alergi.component";
import { AssesmenAwalComponent } from "./pages/assesmen-awal/assesmen-awal.component";
import { BerandaDokterComponent } from "./pages/beranda-dokter/beranda-dokter.component";
import { DaftarPasienPerDokterComponent } from "./pages/daftar-pasien-per-dokter/daftar-pasien-per-dokter.component";
import { DiagnosaComponent } from "./pages/diagnosa/diagnosa.component";
import { KonsulComponent } from "./pages/konsul/konsul.component";
import { InputOrderBaruLabComponent } from "./pages/laboratorium/input-order-baru/input-order-baru.component";
import { LaboratoriumComponent } from "./pages/laboratorium/laboratorium.component";
import { RiwayatPemeriksaanLabComponent } from "./pages/laboratorium/riwayat-pemeriksaan/riwayat-pemeriksaan.component";
import { InputOrderBaruRadComponent } from "./pages/radiologi/input-order-baru/input-order-baru.component";
import { RadiologiComponent } from "./pages/radiologi/radiologi.component";
import { RiwayatPemeriksaanRadComponent } from "./pages/radiologi/riwayat-pemeriksaan/riwayat-pemeriksaan.component";
import { DaftarResepIrdaComponent } from "./pages/resep-irda/daftar-resep-irda/daftar-resep-irda.component";
import { InputResepIrdaComponent } from "./pages/resep-irda/input-resep-irda/input-resep-irda.component";
import { PulangResepIrdaComponent } from "./pages/resep-irda/pulang-resep-irda/pulang-resep-irda.component";
import { ViewResepIrdaComponent } from "./pages/resep-irda/view-resep-irda/view-resep-irda.component";
import { DaftarResepIrnaComponent } from "./pages/resep-irna/daftar-resep-irna/daftar-resep-irna.component";
import { InputResepIrnaComponent } from "./pages/resep-irna/input-resep-irna/input-resep-irna.component";
import { PulangResepIrnaComponent } from "./pages/resep-irna/pulang-resep-irna/pulang-resep-irna.component";
import { ViewResepIrnaComponent } from "./pages/resep-irna/view-resep-irna/view-resep-irna.component";
import { ResepComponent } from "./pages/resep/resep.component";
import { SuratPerintahMondokComponent } from "./pages/surat-perintah-mondok/surat-perintah-mondok.component";
import { VitalSignComponent } from "./pages/vital-sign/vital-sign.component";

const dashboarDokterRoutes: Routes = [
    {
        path: "", component: DashboardDokterComponent, data: { title: "Dashboard Dokter" },
        children: [
            { path: "beranda", component: BerandaDokterComponent, data: { title: "Beranda Dokter" } },
            { path: "daftar-pasien", component: DaftarPasienPerDokterComponent, data: { title: "Daftar Pasien" } },
            { path: "asesmen-awal", component: AssesmenAwalComponent, data: { title: "Riwayat Pemeriksaan Pasien" } },
            { path: "konsul", component: KonsulComponent, data: { title: "Konsul Pasien" } },
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
            },
            {
                path: "resep-irna", component: null, data: { title: "Pemeriksaan Laboratorium Pasien" },
                children: [
                    { path: "daftar-resep-irna", component: DaftarResepIrnaComponent, data: { title: "Daftar Resep Active" } },
                    { path: "input-resep-irna", component: InputResepIrnaComponent, data: { title: "Form Resep Rawat Inap" } },
                    { path: "view-resep-irna/:id/:key", component: ViewResepIrnaComponent, data: { title: "Detail Resep Rawat Inap" } },
                    { path: "ubah-resep-irna/:id/:key", component: InputResepIrnaComponent, data: { title: "Ubah Resep Rawat Inap" } },
                    { path: "pulang-resep-irna", component: PulangResepIrnaComponent, data: { title: "Form Resep Rawat Inap" } },
                ]
            },
            {
                path: "resep-irda", component: null, data: { title: "Resep Irda" },
                children: [
                    { path: "daftar-resep-irda", component: DaftarResepIrdaComponent, data: { title: "Daftar Resep Active" } },
                    { path: "input-resep-irda", component: InputResepIrdaComponent, data: { title: "Form Resep Rawat Inap" } },
                    { path: "view-resep-irda/:id/:key", component: ViewResepIrdaComponent, data: { title: "Detail Resep Rawat Inap" } },
                    { path: "ubah-resep-irda/:id/:key", component: InputResepIrdaComponent, data: { title: "Ubah Resep Rawat Inap" } },
                    { path: "pulang-resep-irda", component: PulangResepIrdaComponent, data: { title: "Form Resep Rawat Inap" } },
                ]
            },
            {
                path: "alergi", component: AlergiComponent, data: { title: "Alergi Pasien" },
            },
            {
                path: "vital-sign", component: VitalSignComponent, data: { title: "Vital Sign Pasien" },
            },
            {
                path: "surat-perintah-mondok", component: SuratPerintahMondokComponent, data: { title: "Surat Perintah Mondok" },
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(dashboarDokterRoutes)],
    exports: [RouterModule]
})
export class DashboarDokterRoutingModule { }