import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DaftarResepFormulariumIrdaComponent } from "../Pharmacy/pages/resep-formularium/resep-formularium-irda/daftar-resep-formularium-irda/daftar-resep-formularium-irda.component";
import { InputResepFormulariumIrdaComponent } from "../Pharmacy/pages/resep-formularium/resep-formularium-irda/input-resep-formularium-irda/input-resep-formularium-irda.component";
import { PulangResepFormulariumIrdaComponent } from "../Pharmacy/pages/resep-formularium/resep-formularium-irda/pulang-resep-formularium-irda/pulang-resep-formularium-irda.component";
import { ViewResepFormulariumIrdaComponent } from "../Pharmacy/pages/resep-formularium/resep-formularium-irda/view-resep-formularium-irda/view-resep-formularium-irda.component";
import { InputResepFormulariumIrjaComponent } from "../Pharmacy/pages/resep-formularium/resep-formularium-irja/input-resep-formularium-irja/input-resep-formularium-irja.component";
import { DaftarResepFormulariumIrnaComponent } from "../Pharmacy/pages/resep-formularium/resep-formularium-irna/daftar-resep-formularium-irna/daftar-resep-formularium-irna.component";
import { InputResepFormulariumComponent } from "../Pharmacy/pages/resep-formularium/resep-formularium-irna/input-resep-formularium/input-resep-formularium.component";
import { PulangResepFormulariumIrnaComponent } from "../Pharmacy/pages/resep-formularium/resep-formularium-irna/pulang-resep-formularium-irna/pulang-resep-formularium-irna.component";
import { ViewResepFormulariumIrnaComponent } from "../Pharmacy/pages/resep-formularium/resep-formularium-irna/view-resep-formularium-irna/view-resep-formularium-irna.component";
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
                    { path: "pulang-resep-irna", component: PulangResepIrnaComponent, data: { title: "Form Resep Pulang Rawat Inap" } },
                ]
            },
            {
                path: "resep-irda", component: null, data: { title: "Resep Irda" },
                children: [
                    { path: "daftar-resep-irda", component: DaftarResepIrdaComponent, data: { title: "Daftar Resep Active" } },
                    { path: "input-resep-irda", component: InputResepIrdaComponent, data: { title: "Form Resep Rawat Darurat" } },
                    { path: "view-resep-irda/:id/:key", component: ViewResepIrdaComponent, data: { title: "Detail Resep Rawat Darurat" } },
                    { path: "ubah-resep-irda/:id/:key", component: InputResepIrdaComponent, data: { title: "Ubah Resep Rawat Darurat" } },
                    { path: "pulang-resep-irda", component: PulangResepIrdaComponent, data: { title: "Form Resep Rawat Darurat" } },
                ]
            },
            {
                path: "resep-formularium-irja", component: null, data: { title: "Resep Formularium IRJA" },
                    children: [
                        { path: "input-resep-formularium-irja",component: InputResepFormulariumIrjaComponent, data: { title: "Input Resep Formularium Rawat Jalan" } },
                    ]
                },
            {
                path: "resep-formularium-irna", component: null, data: { title: "Resep Formularium IRNA" },
                    children: [
                        { path: "daftar-resep-formularium-irna",component: DaftarResepFormulariumIrnaComponent, data: { title: "Daftar Resep Formularium Rawat Inap" } },
                        { path: "input-resep-formularium-irna",component: InputResepFormulariumComponent, data: { title: "Input Resep Formularium Rawat Inap" } },
                        { path: "view-resep-formularium-irna/:id/:key",component: ViewResepFormulariumIrnaComponent, data: { title: "View Resep Formularium Rawat Inap" } },
                        { path: "ubah-resep-formularium-irna/:id/:key",component: InputResepFormulariumComponent, data: { title: "Ubah Resep Formularium Rawat Inap" } },
                        { path: "pulang-resep-formularium-irna",component: PulangResepFormulariumIrnaComponent, data: { title: "Resep Pulang Formularium Rawat Inap" } },
                ]
            },
            {
                path: "resep-formularium-irda", component: null, data: { title: "Resep Formularium IRDA" },
                    children: [
                        { path: "daftar-resep-formularium-irda",component: DaftarResepFormulariumIrdaComponent, data: { title: "Daftar Resep Formularium Rawat Darurat" } },
                        { path: "input-resep-formularium-irda",component: InputResepFormulariumIrdaComponent, data: { title: "Input Resep Formularium Rawat Darurat" } },
                        { path: "view-resep-formularium-irda/:id/:key",component: ViewResepFormulariumIrdaComponent, data: { title: "View Resep Formularium Rawat Darurat" } },
                        { path: "ubah-resep-formularium-irda/:id/:key",component: InputResepFormulariumIrdaComponent, data: { title: "Ubah Resep Formularium Rawat Darurat" } },
                        { path: "pulang-resep-formularium-irda",component: PulangResepFormulariumIrdaComponent, data: { title: "Resep Pulang Formularium Rawat Darurat" } },
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