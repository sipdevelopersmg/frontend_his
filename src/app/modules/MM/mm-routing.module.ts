import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DaftarIssueComponent } from "./pages/issue/daftar-issue/daftar-issue.component";
import { InputIssueComponent } from "./pages/issue/input-issue/input-issue.component";
import { ViewIssueComponent } from "./pages/issue/view-issue/view-issue.component";
import { DaftarIssueValidationComponent } from "./pages/issue_validation/daftar-issue-validation/daftar-issue-validation.component";
import { ViewIssueValidationComponent } from "./pages/issue_validation/view-issue-validation/view-issue-validation.component";
import { DaftarPermintaanMutasiComponent } from "./pages/mutasi/permintaan-mutasi/daftar-permintaan-mutasi/daftar-permintaan-mutasi.component";
import { InputPermintaanMutasiComponent } from "./pages/mutasi/permintaan-mutasi/input-permintaan-mutasi/input-permintaan-mutasi.component";
import { ViewPermintaanMutasiComponent } from "./pages/mutasi/permintaan-mutasi/view-permintaan-mutasi/view-permintaan-mutasi.component";
import { DaftarPersetujuanMutasiComponent } from "./pages/mutasi/persetujuan-mutasi/daftar-persetujuan-mutasi/daftar-persetujuan-mutasi.component";
import { ViewPersetujuanMutasiComponent } from "./pages/mutasi/persetujuan-mutasi/view-persetujuan-mutasi/view-persetujuan-mutasi.component";
import { InputKontrakPengadaanComponent } from "./pages/pemasukan/kontrak-pengadaan/input-kontrak-pengadaan/input-kontrak-pengadaan.component";
import { ListKontrakPengadaanComponent } from "./pages/pemasukan/kontrak-pengadaan/list-kontrak-pengadaan/list-kontrak-pengadaan.component";
import { ViewKontrakPengadaanComponent } from "./pages/pemasukan/kontrak-pengadaan/view-kontrak-pengadaan/view-kontrak-pengadaan.component";
import { DaftarPemesananComponent } from "./pages/pemasukan/pemesanan/daftar-pemesanan/daftar-pemesanan.component";
import { InputPemesananComponent } from "./pages/pemasukan/pemesanan/input-pemesanan/input-pemesanan.component";
import { ViewPemesananComponent } from "./pages/pemasukan/pemesanan/view-pemesanan/view-pemesanan.component";
import { DaftarPenerimaanComponent } from "./pages/pemasukan/penerimaan/daftar-penerimaan/daftar-penerimaan.component";
import { InputPenerimaanComponent } from "./pages/pemasukan/penerimaan/input-penerimaan/input-penerimaan.component";
import { ViewPenerimaanComponent } from "./pages/pemasukan/penerimaan/view-penerimaan/view-penerimaan.component";
import { SetHargaOrderComponent } from "./pages/pemasukan/set-harga-order/set-harga-order.component";
import { DaftarReturPembelianComponent } from "./pages/retur/daftar-retur-pembelian/daftar-retur-pembelian.component";
import { InputReturPembelianComponent } from "./pages/retur/input-retur/input-retur.component";
import { ViewReturPembelianComponent } from "./pages/retur/view-retur-pembelian/view-retur-pembelian.component";
import { DaftarReturIssueComponent } from "./pages/retur_issue/daftar-retur-issue/daftar-retur-issue.component";
import { InputReturIssueComponent } from "./pages/retur_issue/input-retur-issue/input-retur-issue.component";
import { ViewReturIssueComponent } from "./pages/retur_issue/view-retur-issue/view-retur-issue.component";
import { SetupCoaComponent } from "./pages/setup-data/setup-coa/setup-coa.component";
import { SetupGroupCoaComponent } from "./pages/setup-data/setup-group-coa/setup-group-coa.component";
import { SetupGrupItemComponent } from "./pages/setup-data/setup-grup-item/setup-grup-item.component";
import { SetupItemComponent } from "./pages/setup-data/setup-item/setup-item.component";
import { SetupPabrikComponent } from "./pages/setup-data/setup-pabrik/setup-pabrik.component";
import { SetupPerencanaanKategoriComponent } from "./pages/setup-data/setup-perencanaan-kategori/setup-perencanaan-kategori.component";
import { SetupSatuanComponent } from "./pages/setup-data/setup-satuan/setup-satuan.component";
import { SetupStockroomComponent } from "./pages/setup-data/setup-stockroom/setup-stockroom.component";
import { SetupSupplierComponent } from "./pages/setup-data/setup-supplier/setup-supplier.component";
import { SetupTemperaturItemComponent } from "./pages/setup-data/setup-temperatur-item/setup-temperatur-item.component";
import { SetupTipeItemComponent } from "./pages/setup-data/setup-tipe-item/setup-tipe-item.component";
import { SetupTipeStockroomComponent } from "./pages/setup-data/setup-tipe-stockroom/setup-tipe-stockroom.component";
import { SetupTipeSupplierComponent } from "./pages/setup-data/setup-tipe-supplier/setup-tipe-supplier.component";

const mmRoutes: Routes = [
    {
        path: "setup-data", component: null, data: { title: "Setup Data" },
        children: [
            { path: "setup-stockroom", component: SetupStockroomComponent, data: { title: "Setup Stockroom" } },
            { path: "setup-item", component: SetupItemComponent, data: { title: "Setup Item" } },
            { path: "setup-grup-item", component: SetupGrupItemComponent, data: { title: "Setup Grup Item" } },
            { path: "setup-data-coa", component: SetupCoaComponent, data: { title: "Setup COA" } },
            { path: "setup-perencanaan-kategori", component: SetupPerencanaanKategoriComponent, data: { title: "Setup Perencanaan Kategori" } },
            { path: "setup-tipe-supplier", component: SetupTipeSupplierComponent, data: { title: "Setup Tipe Supplier" } },
            { path: "setup-tipe-stockroom", component: SetupTipeStockroomComponent, data: { title: "Setup Tipe Stockroom" } },
            { path: "setup-tipe-item", component: SetupTipeItemComponent, data: { title: "Setup Tipe Item" } },
            { path: "setup-temperatur-item", component: SetupTemperaturItemComponent, data: { title: "Setup Temperatur Item" } },
            { path: "setup-pabrik", component: SetupPabrikComponent, data: { title: "Setup Pabrik" } },
            { path: "setup-satuan", component: SetupSatuanComponent, data: { title: "Setup Satuan" } },
            { path: "setup-supplier", component: SetupSupplierComponent, data: { title: "Setup Supplier" } },
            { path: "setup-group-coa", component: SetupGroupCoaComponent, data: { title: "Setup Group COA" } },

        ],
    },
    {
        path: "kontrak-pengadaan", component: null, data: { title: "Input Kontrak Pengadaan" },
        children: [
            { path: "input-kontrak-pengadaan", component: InputKontrakPengadaanComponent, data: { title: "Input Kontrak Pengadaan" } },
            { path: "daftar-kontrak-pengadaan", component: ListKontrakPengadaanComponent, data: { title: "Daftar Kontrak Pengadaan" } },
            { path: "view-kontrak-pengadaan/:id/:key", component: ViewKontrakPengadaanComponent, data: { title: "View Kontrak Pengadaan" } },
        ],
    },
    {
        path: "pemesanan", component: null, data: { title: "Input PO" },
        children: [
            { path: "input-pemesanan", component: InputPemesananComponent, data: { title: "Input Pemesanan" } },
            { path: "daftar-pemesanan", component: DaftarPemesananComponent, data: { title: "Daftar Pemesanan" } },
            { path: "view-pemesanan/:id/:key", component: ViewPemesananComponent, data: { title: "View Pemesanan" } },
        ],
    },
    {
        path: "penerimaan", component: null, data: { title: "Input Penerimaan" },
        children: [
            { path: "input-penerimaan", component: InputPenerimaanComponent, data: { title: "Input Penerimaan" } },
            { path: "daftar-penerimaan", component: DaftarPenerimaanComponent, data: { title: "Daftar Penerimaan" } },
            { path: "view-penerimaan/:id/:key", component: ViewPenerimaanComponent, data: { title: "View Penerimaan" } },
        ],
    },
    {
        path: "setharga-order", component: null, data: { title: "Input PO" },
        children: [
            { path: "input-setharga-order", component: SetHargaOrderComponent, data: { title: "Set Harga Order" } },
        ],

    },
    {
        path: "permintaan-mutasi", component: null, data: { title: "Input PO" },
        children: [
            { path: "daftar-permintaan-mutasi", component: DaftarPermintaanMutasiComponent, data: { title: "Permintaan Mutasi" } },
            { path: "input-permintaan-mutasi", component: InputPermintaanMutasiComponent, data: { title: "Input Permintaan Mutasi" } },
            { path: "view-permintaan-mutasi/:id/:key", component: ViewPermintaanMutasiComponent, data: { title: "View Permintaaan Mutasi" } },
        ],
    },
    {
        path: "persetujuan-mutasi", component: null, data: { title: "Input PO" },
        children: [
            { path: "daftar-persetujuan-mutasi", component: DaftarPersetujuanMutasiComponent, data: { title: "Persetujuan Mutasi" } },
            { path: "proses-persetujuan-mutasi/:id/:key", component: ViewPersetujuanMutasiComponent, data: { title: "Proses Persetujuan Mutasi" } },
        ],
    },
    {
        path: "retur-pembelian", component: null, data: { title: "Input PO" },
        children: [
            { path: "daftar-retur-pembelian", component: DaftarReturPembelianComponent, data: { title: "Daftar Retur Pembelian" } },
            { path: "input-retur-pembelian", component: InputReturPembelianComponent, data: { title: "Input Retur Pembelian" } },
            { path: "view-retur-pembelian/:id/:key", component: ViewReturPembelianComponent, data: { title: "View Retur Pembelian" } },

        ],
    },
    {
        path: "issue", component: null, data: { title: "Input PO" },
        children: [
            { path: "daftar-issue", component: DaftarIssueComponent, data: { title: "Daftar Issue" } },
            { path: "input-issue", component: InputIssueComponent, data: { title: "Input Issue" } },
            { path: "view-issue/:id/:key", component: ViewIssueComponent, data: { title: "View Issue" } },

        ],
    },
    {
        path: "issue-validation", component: null, data: { title: "Input PO" },
        children: [
            { path: "daftar-issue-validation", component: DaftarIssueValidationComponent, data: { title: "Daftar Issue" } },
            { path: "view-issue-validation/:id/:key", component: ViewIssueValidationComponent, data: { title: "View Issue" } },
        ],
    },
    {
        path: "retur-issue", component: null, data: { title: "Input PO" },
        children: [
            { path: "daftar-retur-issue", component: DaftarReturIssueComponent, data: { title: "Daftar Retur Issue" } },
            { path: "input-retur-issue", component: InputReturIssueComponent, data: { title: "Input Retur Issue" } },
            { path: "view-retur-issue/:id/:key", component: ViewReturIssueComponent, data: { title: "View Retur Issue" } },

        ],
    }
]

@NgModule({
    imports: [RouterModule.forChild(mmRoutes)],
    exports: [RouterModule]
})

export class MaterialManagementRoutingModule { }