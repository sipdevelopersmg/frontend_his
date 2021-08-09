import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdmisiPasienRawatJalanComponent } from "./pages/IRJA/admisi-pasien-rawat-jalan/admisi-pasien-rawat-jalan.component";
import { AntrianPasienRawatJalanComponent } from "./pages/IRJA/antrian-pasien-rawat-jalan/antrian-pasien-rawat-jalan.component";
import { DaftarPasienComponent } from "./pages/IRJA/daftar-pasien/daftar-pasien.component";
import { DaftarUlangPasienComponent } from "./pages/IRJA/daftar-ulang-pasien/daftar-ulang-pasien.component";
import { PendaftaranPasienBaruComponent } from "./pages/IRJA/pendaftaran-pasien-baru/input-pasien/pendaftaran-pasien-baru.component";
import { ListPasienComponent } from "./pages/IRJA/pendaftaran-pasien-baru/list-pasien/list-pasien.component";
import { PelayananPasienIrnaComponent } from "./pages/IRNA/pelayanan-pasien-irna/pelayanan-pasien-irna.component";
import { PendaftaranPasienBaruIrnaComponent } from "./pages/IRNA/pendaftaran-pasien-baru-irna/pendaftaran-pasien-baru-irna.component";
import { SetupBahasaComponent } from "./pages/setup-data/setup-bahasa/setup-bahasa.component";
import { DataDokterComponent } from "./pages/setup-data/setup-dokter/data-dokter/data-dokter.component";
import { SetupEtnisComponent } from "./pages/setup-data/setup-etnis/setup-etnis.component";
import { SetupKodeTarifComponent } from "./pages/setup-data/setup-tarif/setup-kode-tarif/setup-kode-tarif.component";

const pisRoutes: Routes = [
    { path: "", component: PendaftaranPasienBaruComponent, data: { title: "Pendaftaran Pasien Baru" }, },
    {
        path: "setup-data", component: null, data: { title: "Setup Data" },
        children: [
            { path: "setup-etnis", component: SetupEtnisComponent, data: { title: "Setup Etnis" } },
            { path: "setup-bahasa", component: SetupBahasaComponent, data: { title: "Setup Bahasa" } },
            {
                path: "setup-tarif", component: null, data: { title: "Setup Tarif" },
                children: [
                    { path: "setup-kode-tarif", component: SetupKodeTarifComponent, data: { title: "Setup Kode Tarif" } }
                ]
            },
            {
                path: "setup-dokter", component: null, data: { title: "Setup Dokter" },
                children: [
                    { path: "data-dokter", component: DataDokterComponent, data: { title: "Data Dokter" } }
                ]
            }
        ]
    },
    {
        path: "IRJA", component: null, data: { title: "IRJA" },
        children: [
            { path: "pendaftaran-pasien-baru", component: PendaftaranPasienBaruComponent, data: { title: "Pendaftaran Pasien Baru Rawat Jalan" }, },
            { path: "antrian-pasien-rawat-jalan", component: AntrianPasienRawatJalanComponent, data: { title: "Antrian Pasien Rawat Jalan" }, },
            { path: "pendaftaran-ulang-pasien", component: DaftarUlangPasienComponent, data: { title: "Pendaftaran Ulang Pasien Rawat Jalan" }, },
            { path: "daftar-pasien", component: DaftarPasienComponent, data: { title: "Daftar Pasien Rawat Jalan" }, },
            { path: "pelayanan-pasien-irja", component: AdmisiPasienRawatJalanComponent, data: { title: "Pelayanan Pasien Rawat Jalan" }, },
        ]
    },
    {
        path: "IRNA", component: null, data: { title: "IRNA" },
        children: [
            { path: "pelayanan-pasien-irna", component: PelayananPasienIrnaComponent, data: { title: "Pelayanan Pasien Rawat Inap" } },
            { path: "pendaftaran-pasien-baru", component: PendaftaranPasienBaruIrnaComponent, data: { title: "Pendaftaran Pasien Baru Rawat Inap" } }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(pisRoutes)],
    exports: [RouterModule]
})
export class PisRoutingModule { }
