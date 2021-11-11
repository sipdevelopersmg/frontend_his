import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdmisiPasienRawatJalanComponent } from "./pages/IRJA/admisi-pasien-rawat-jalan/admisi-pasien-rawat-jalan.component";
import { PelayananPasienRawatJalanComponent } from "./pages/IRJA/admisi-pasien-rawat-jalan/pelayanan-pasien-rawat-jalan/pelayanan-pasien-rawat-jalan.component";
import { AntrianPasienRawatJalanComponent } from "./pages/IRJA/antrian-pasien-rawat-jalan/antrian-pasien-rawat-jalan.component";
import { DaftarPasienComponent } from "./pages/IRJA/daftar-pasien/daftar-pasien.component";
import { DaftarUlangPasienComponent } from "./pages/IRJA/daftar-ulang-pasien/daftar-ulang-pasien.component";
import { PemasukanRawatJalanComponent } from "./pages/IRJA/pemasukan-rawat-jalan/pemasukan-rawat-jalan.component";
import { EditPasienIRJAComponent } from "./pages/IRJA/pendaftaran-pasien-baru/edit-pasien/edit-pasien.component";
import { PendaftaranPasienBaruComponent } from "./pages/IRJA/pendaftaran-pasien-baru/input-pasien/pendaftaran-pasien-baru.component";
import { AdmisiPasienRawatInapComponent } from "./pages/IRNA/admisi-pasien-rawat-inap/admisi-pasien-rawat-inap.component";
import { CariPasienAntrianTppriComponent } from "./pages/IRNA/admisi-pasien-rawat-inap/cari-pasien-antrian-tppri/cari-pasien-antrian-tppri.component";
import { PelayananPasienRawatInapComponent } from "./pages/IRNA/admisi-pasien-rawat-inap/pelayanan-pasien-rawat-inap/pelayanan-pasien-rawat-inap.component";
import { AntrianPemesananTempatTidurComponent } from "./pages/IRNA/daftar-pemesanan-tempat-tidur/antrian-pemesanan-tempat-tidur/antrian-pemesanan-tempat-tidur.component";
import { ManagementBedRawatInapComponent } from "./pages/IRNA/management-bed-rawat-inap/management-bed-rawat-inap.component";
import { PemasukanRawatInapComponent } from "./pages/IRNA/pemasukan-rawat-inap/pemasukan-rawat-inap.component";
import { RencanaPulangPasienComponent } from "./pages/IRNA/rencana-pulang-pasien/rencana-pulang-pasien.component";
import { SetupBedComponent } from "./pages/IRNA/setup-bed/setup-bed/setup-bed.component";
import { SetupKamarComponent } from "./pages/IRNA/setup-bed/setup-kamar/setup-kamar.component";
import { SetupKategoriKamarComponent } from "./pages/IRNA/setup-bed/setup-kategori-kamar/setup-kategori-kamar.component";
import { SetupStatusBedComponent } from "./pages/IRNA/setup-bed/setup-status-bed/setup-status-bed.component";
import { UpdateStatusBedComponent } from "./pages/IRNA/setup-bed/update-status-bed/update-status-bed.component";
import { SuratPengantarPembayaranComponent } from "./pages/IRNA/surat-pengantar-pembayaran/surat-pengantar-pembayaran.component";
import { SetupAsalRujukanComponent } from "./pages/setup-data/setup-asal-rujukan/setup-asal-rujukan.component";
import { SetupBahasaComponent } from "./pages/setup-data/setup-bahasa/setup-bahasa.component";
import { SetupCutiDokterComponent } from "./pages/setup-data/setup-cuti-dokter/setup-cuti-dokter.component";
import { SetupDebiturComponent } from "./pages/setup-data/setup-debitur/setup-debitur.component";
import { DataDokterComponent } from "./pages/setup-data/setup-dokter/data-dokter/data-dokter.component";
import { EditDokterComponent } from "./pages/setup-data/setup-dokter/edit-dokter/edit-dokter.component";
import { InputDokterComponent } from "./pages/setup-data/setup-dokter/input-dokter/input-dokter.component";
import { SetupEducationComponent } from "./pages/setup-data/setup-education/setup-education.component";
import { SetupEtnisComponent } from "./pages/setup-data/setup-etnis/setup-etnis.component";
import { SetupGrupPenunjangComponent } from "./pages/setup-data/setup-grup-penunjang/setup-grup-penunjang.component";
import { SetupIcdDiagnosaComponent } from "./pages/setup-data/setup-icd-diagnosa/setup-icd-diagnosa.component";
import { SetupJadwalDokterComponent } from "./pages/setup-data/setup-jadwal-dokter/setup-jadwal-dokter.component";
import { SetupJobTypeComponent } from "./pages/setup-data/setup-job-type/setup-job-type.component";
import { SetupKebangsaanComponent } from "./pages/setup-data/setup-kebangsaan/setup-kebangsaan.component";
import { SetupMappingTarifOrderPenunjangComponent } from "./pages/setup-data/setup-mapping-tarif-order-penunjang/setup-mapping-tarif-order-penunjang.component";
import { SetupSmfDokterComponent } from "./pages/setup-data/setup-smf-dokter/setup-smf-dokter.component";
import { SetupSpesialiasiDokterComponent } from "./pages/setup-data/setup-spesialiasi-dokter/setup-spesialiasi-dokter.component";
import { SetupStatusDokterComponent } from "./pages/setup-data/setup-status-dokter/setup-status-dokter.component";
import { SetupKodeTarifComponent } from "./pages/setup-data/setup-tarif/setup-kode-tarif/setup-kode-tarif.component";
import { SetupKecamatanComponent } from "./pages/setup-data/setup-wilayah/setup-kecamatan/setup-kecamatan.component";
import { SetupKotaComponent } from "./pages/setup-data/setup-wilayah/setup-kota/setup-kota.component";
import { SetupProvinsiComponent } from "./pages/setup-data/setup-wilayah/setup-provinsi/setup-provinsi.component";

const pisRoutes: Routes = [
    { path: "", component: null, data: { title: "Pendaftaran Pasien Baru" }, },
    { path: "pendaftaran-pasien-baru", component: PendaftaranPasienBaruComponent, data: { title: 'Pendaftaran Pasien Baru' } },
    { path: "daftar-pasien", component: DaftarPasienComponent, data: { title: "Daftar Pasien" }, },
    { path: "edit-pasien/:id/:key", component: EditPasienIRJAComponent, data: { title: "Edit Pasien" } },
    {
        path: "setup-data", component: null, data: { title: "Setup Data" },
        children: [
            { path: "setup-etnis", component: SetupEtnisComponent, data: { title: "Setup Etnis" } },
            { path: "setup-bahasa", component: SetupBahasaComponent, data: { title: "Setup Bahasa" } },
            { path: "setup-job-type", component: SetupJobTypeComponent, data: { title: "Setup Job Type" } },
            { path: "setup-kebangsaan", component: SetupKebangsaanComponent, data: { title: "Setup Kebangsaan" } },
            { path: "setup-education", component: SetupEducationComponent, data: { title: "Setup Education" } },
            { path: "setup-smf-dokter", component: SetupSmfDokterComponent, data: { title: "Setup SMF Dokter" } },
            { path: "setup-spesialisasi-dokter", component: SetupSpesialiasiDokterComponent, data: { title: "Setup Spesialisasi Dokter" } },
            { path: "setup-status-dokter", component: SetupStatusDokterComponent, data: { title: "Setup Status Dokter" } },
            {
                path: "setup-tarif", component: null, data: { title: "Setup Tarif" },
                children: [
                    { path: "setup-kode-tarif", component: SetupKodeTarifComponent, data: { title: "Setup Kode Tarif" } }
                ]
            },
            {
                path: "setup-dokter", component: null, data: { title: "Setup Dokter" },
                children: [
                    { path: "input-dokter", component: InputDokterComponent, data: { title: "Input Dokter" } },
                    { path: "daftar-dokter", component: DataDokterComponent, data: { title: "Daftar Dokter" } },
                    { path: "edit-dokter/:id/:key", component: EditDokterComponent, data: { title: "Edit Dokter" } },
                    { path: "setup-jadwal-dokter", component: SetupJadwalDokterComponent, data: { title: "Setup Jadwal Dokter" } },
                    { path: "setup-cuti-dokter", component: SetupCutiDokterComponent, data: { title: "Setup Cuti Dokter" } },
                ]
            },
            { path: "setup-provinsi", component: SetupProvinsiComponent, data: { title: "Setup Provinsi" } },
            { path: "setup-kota", component: SetupKotaComponent, data: { title: "Setup Kota" } },
            { path: "setup-kecamatan", component: SetupKecamatanComponent, data: { title: "Setup Kecamatan" } },
            { path: "setup-debitur", component: SetupDebiturComponent, data: { title: "Setup Debitur" } },
            { path: "setup-asal-rujukan", component: SetupAsalRujukanComponent, data: { title: "Setup Asal Rujukan" } },
            { path: "setup-icd-diagnosa-awal", component: SetupIcdDiagnosaComponent, data: { title: "Setup Diagnosa Awal" } },
            { path: "setup-mapping-order-tarif-penunjang", component: SetupMappingTarifOrderPenunjangComponent, data: { title: "Mapping Order Tarif Penunjang" } },
            { path: "setup-grup-penunjang", component: SetupGrupPenunjangComponent, data: { title: "Setup Grup Order Tarif Penunjang" } },
        ]
    },
    {
        path: "IRJA", component: null, data: { title: "IRJA" },
        children: [
            { path: "antrian-pasien-rawat-jalan", component: AntrianPasienRawatJalanComponent, data: { title: "Antrian Pasien Rawat Jalan" }, },
            { path: "pendaftaran-ulang-pasien", component: DaftarUlangPasienComponent, data: { title: "Pendaftaran Ulang Pasien" }, },
            { path: "pelayanan-pasien-rawat-jalan", component: AdmisiPasienRawatJalanComponent, data: { title: "Pelayanan Pasien Rawat Jalan" }, },
            { path: "admisi-pasien-rawat-jalan", component: PelayananPasienRawatJalanComponent, data: { title: "Admisi Pasien Rawat Jalan" }, },
            { path: "admisi-pasien-rawat-jalan/:id/:key", component: PelayananPasienRawatJalanComponent, data: { title: "Admisi Pasien Rawat Jalan" }, },
            { path: "transaksi-pemasukan-rawat-jalan", component: PemasukanRawatJalanComponent, data: { title: "Transaksi Pemasukan Rawat Jalan" }, },
        ]
    },
    {
        path: "IRNA", component: null, data: { title: "IRNA" },
        children: [
            { path: "setup-kategori-kamar", component: SetupKategoriKamarComponent, data: { title: "Setup Kategori Kamar Rawat Inap" } },
            { path: "setup-kamar", component: SetupKamarComponent, data: { title: "Setup Kamar Rawat Inap" } },
            { path: "setup-bed", component: SetupBedComponent, data: { title: "Setup Bed Rawat Inap" } },
            { path: "setup-status-bed", component: SetupStatusBedComponent, data: { title: "Setup Status Bed" } },
            { path: "update-status-bed", component: UpdateStatusBedComponent, data: { title: "Update Status Bed" } },
            { path: "pencarian-pasien-rawat-inap", component: CariPasienAntrianTppriComponent, data: { title: "Pencarian Pasien Terdaftar Pada TPPRI" } },
            { path: "pelayanan-pasien-rawat-inap", component: AdmisiPasienRawatInapComponent, data: { title: "Pelayanan Pasien Rawat Inap" } },
            { path: "admisi-pasien-rawat-inap", component: PelayananPasienRawatInapComponent, data: { title: "Admisi Pasien Rawat Inap" } },
            { path: "admisi-pasien-rawat-inap/:id/:key", component: PelayananPasienRawatInapComponent, data: { title: "Admisi Pasien Rawat Inap" } },
            { path: "antrian-pemesanan-tempat-tidur", component: AntrianPemesananTempatTidurComponent, data: { title: "Antrian Pemesanan Tempat Tidur" } },
            { path: "management-bed-rawat-inap/:id/:key", component: ManagementBedRawatInapComponent, data: { title: "Management Bed Rawat Inap" } },
            { path: "rencana-pulang-pasien/:id/:key", component: RencanaPulangPasienComponent, data: { title: "Rencana Pulang Pasien Rawat Inap" } },
            { path: "surat-pengantar-pembayaran/:id/:key", component: SuratPengantarPembayaranComponent, data: { title: "Surat Pengantar Pembayaran Rawat Inap" } },
            { path: "transaksi-pemasukan-rawat-inap", component: PemasukanRawatInapComponent, data: { title: "Transaksi Pemasukan Rawat Inap" }, },]
    }
]

@NgModule({
    imports: [RouterModule.forChild(pisRoutes)],
    exports: [RouterModule]
})
export class PisRoutingModule { }
