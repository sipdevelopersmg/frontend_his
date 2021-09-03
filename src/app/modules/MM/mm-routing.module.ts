import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InputKontrakPengadaanComponent } from "./pages/pemasukan/kontrak-pengadaan/input-kontrak-pengadaan/input-kontrak-pengadaan.component";
import { InputPenerimaanComponent } from "./pages/pemasukan/penerimaan/input-penerimaan/input-penerimaan.component";
import { InputPOComponent } from "./pages/pemasukan/PO/input-po/input-po.component";
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
        ],
    },
    {
        path: "PO", component: null, data: { title: "Input PO" },
        children: [
            { path: "input-PO", component: InputPOComponent, data: { title: "Input Pesanan PO" } },
        ],
    },
    {
        path: "pemasukan", component: null, data: { title: "Input PO" },
        children: [
            { path: "input-pemasukan", component: InputPenerimaanComponent, data: { title: "Input Penerimaan" } },
        ],
    },
    {
        path: "retur", component: null, data: { title: "Input PO" },
        children: [
            { path: "input-pemasukan", component: InputPenerimaanComponent, data: { title: "Input Penerimaan" } },
        ],
    }
]

@NgModule({
    imports: [RouterModule.forChild(mmRoutes)],
    exports: [RouterModule]
})

export class MaterialManagementRoutingModule { }