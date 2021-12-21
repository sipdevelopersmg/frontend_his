import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AntrianFarmasiComponent } from "./pages/Antrian/antrian-farmasi/antrian-farmasi.component";
import { RefundObatIrdaDaftarComponent } from "./pages/refund-obat/refund-obat-irda-daftar/refund-obat-irda-daftar.component";
import { RefundObatIrdaDetailComponent } from "./pages/refund-obat/refund-obat-irda-detail/refund-obat-irda-detail.component";
import { RefundObatIrdaComponent } from "./pages/refund-obat/refund-obat-irda/refund-obat-irda.component";
import { RefundObatIrjaDaftarComponent } from "./pages/refund-obat/refund-obat-irja-daftar/refund-obat-irja-daftar.component";
import { RefundObatIrjaDetailComponent } from "./pages/refund-obat/refund-obat-irja-detail/refund-obat-irja-detail.component";
import { RefundObatIrjaComponent } from "./pages/refund-obat/refund-obat-irja/refund-obat-irja.component";
import { RefundObatIrnaDaftarComponent } from "./pages/refund-obat/refund-obat-irna-daftar/refund-obat-irna-daftar.component";
import { RefundObatIrnaDetailComponent } from "./pages/refund-obat/refund-obat-irna-detail/refund-obat-irna-detail.component";
import { RefundObatIrnaComponent } from "./pages/refund-obat/refund-obat-irna/refund-obat-irna.component";
import { ResepRacikanComponent } from "./pages/resep-racikan/resep-racikan.component";
import { SetupCaraPakaiObatComponent } from "./pages/setup-data/setup-cara-pakai-obat/setup-cara-pakai-obat.component";
import { SetupGrupObatComponent } from "./pages/setup-data/setup-grup-obat/setup-grup-obat.component";
import { SetupLabelPemakaianObatComponent } from "./pages/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.component";
import { SetupOutletComponent } from "./pages/setup-data/setup-outlet/setup-outlet.component";
import { SetupRutePemberianObatComponent } from "./pages/setup-data/setup-rute-pemberian-obat/setup-rute-pemberian-obat.component";
import { SetupTipeOutletComponent } from "./pages/setup-data/setup-tipe-outlet/setup-tipe-outlet.component";
import { SetupFormulariumComponent } from "./pages/setup-formularium/setup-formularium/setup-formularium.component";
import { InputResepIrjaComponent } from "./pages/transaksi-obat/input-resep-irja/input-resep-irja.component";
import { TransaksiObatIrdaComponent } from "./pages/transaksi-obat/transaksi-obat-irda/transaksi-obat-irda.component";
import { TransaksiObatIrjaComponent } from "./pages/transaksi-obat/transaksi-obat-irja/transaksi-obat-irja.component";
import { ViewResepIrjaComponent } from "./pages/transaksi-obat/transaksi-obat-irja/view-resep-irja/view-resep-irja.component";
import { TransaksiObatIrnaComponent } from "./pages/transaksi-obat/transaksi-obat-irna/transaksi-obat-irna.component";

const pharmacyRoutes: Routes = [
    { path: "", component: null, data: { title: "Pharmacy" } },
    { path: "antrian-farmasi", component: AntrianFarmasiComponent, data: { title: "Antrian Pharmacy" } },
    { path: "setup-formularium", component: SetupFormulariumComponent, data: { title: "Setup Formularium" } },
    { path: "resep-racikan", component: ResepRacikanComponent, data: { title: "Resep Racikan" } },
    
    {
        path: "setup-data", component: null, data: { title: "Setup Data" },
        children: [
            { path: "setup-tipe-outlet", component: SetupTipeOutletComponent, data: { title: "Setup Tipe Outlet" } },
            { path: "setup-outlet", component: SetupOutletComponent, data: { title: "Setup Outlet" } },
            { path: "setup-grup-obat", component: SetupGrupObatComponent, data: { title: "Setup Grup Obat" } },
            { path: "setup-cara-pakai-obat", component: SetupCaraPakaiObatComponent, data: { title: "Setup Cara Pakai Obat" } },
            { path: "setup-rute-pemberian-obat", component: SetupRutePemberianObatComponent, data: { title: "Setup rute Pemberian Obat" } },
            { path: "setup-label-pemakaian-obat", component: SetupLabelPemakaianObatComponent, data: { title: "Setup Label Pemakaian Obat" } },
        ]
    },
    {
        path: "transaksi-obat", component: null, data: { title: "Transaksi Obat" },
        children: [
            { path: "view-obat-irja/:id/:key", component: ViewResepIrjaComponent, data: { title: "View Resep Rawat Jalan" } },
            { path: "transaksi-obat-irja/:id/:key", component: TransaksiObatIrjaComponent, data: { title: "Transaksi Obat Rawat Jalan" } },
            { path: "transaksi-obat-irna", component: TransaksiObatIrnaComponent, data: { title: "Transaksi Obat Rawat Inap" } },
            { path: "transaksi-obat-irda", component: TransaksiObatIrdaComponent, data: { title: "Transaksi Obat Rawat Darurat" } },
            { path: "input-resep-irja", component: InputResepIrjaComponent, data: { title: "Input Resep Irja" } },
        ]
    },
    {
        path: "refund-obat", component: null, data: { title: "Refund Obat" },
        children: [
            { path: "refund-obat-irja", component: RefundObatIrjaComponent, data: { title: "Input Retur Penjualan Obat Rawat Jalan" } },
            { path: "refund-obat-irja-daftar", component: RefundObatIrjaDaftarComponent, data: { title: "Daftar Retur Penjualan Obat Rawat Jalan" } },
            { path: "refund-obat-irja-detail/:id/:key", component: RefundObatIrjaDetailComponent, data: { title: "Detail Retur Penjualan Obat Rawat Jalan" } },
            { path: "refund-obat-irda", component: RefundObatIrdaComponent, data: { title: "Input Retur Penjualan Obat Rawat Darurat" } },
            { path: "refund-obat-irda-daftar", component: RefundObatIrdaDaftarComponent, data: { title: "Daftar Retur Penjualan Obat Rawat Darurat" } },
            { path: "refund-obat-irda-detail/:id/:key", component: RefundObatIrdaDetailComponent, data: { title: "Detail Retur Penjualan Obat Rawat Darurat" } },
            { path: "refund-obat-irna", component: RefundObatIrnaComponent, data: { title: "Input Retur Penjualan Obat Rawat Inap" } },
            { path: "refund-obat-irna-daftar", component: RefundObatIrnaDaftarComponent, data: { title: "Daftar Retur Penjualan Obat Rawat Inap" } },
            { path: "refund-obat-irna-detail/:id/:key", component: RefundObatIrnaDetailComponent, data: { title: "Detail Retur Penjualan Obat Rawat Inap" } },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(pharmacyRoutes)],
    exports: [RouterModule]
})
export class PharmacyRoutingModule { }