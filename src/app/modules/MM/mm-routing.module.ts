import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InputKontrakPengadaanComponent } from "./pages/pemasukan/kontrak-pengadaan/input-kontrak-pengadaan/input-kontrak-pengadaan.component";
import { InputPenerimaanComponent } from "./pages/pemasukan/penerimaan/input-penerimaan/input-penerimaan.component";
import { InputPOComponent } from "./pages/pemasukan/PO/input-po/input-po.component";
import { SetupGrupItemComponent } from "./pages/setup-data/setup-grup-item/setup-grup-item.component";
import { SetupPabrikComponent } from "./pages/setup-data/setup-pabrik/setup-pabrik.component";
import { SetupSatuanComponent } from "./pages/setup-data/setup-satuan/setup-satuan.component";
import { SetupSupplierComponent } from "./pages/setup-data/setup-supplier/setup-supplier.component";

const mmRoutes: Routes = [
    {
        path: "setup-data", component: null, data: { title: "Setup Data" },
        children: [
            { path: "setup-grup-item", component: SetupGrupItemComponent, data: { title: "Setup Grup Item" } },
            { path: "setup-pabrik", component: SetupPabrikComponent, data: { title: "Setup Pabrik" } },
            { path: "setup-satuan", component: SetupSatuanComponent, data: { title: "Setup Pabrik" } },
        ],
    },
    {
        path: "kontrak-pengadaan", component: null, data: {title:"Input Kontrak Pengadaan"},
        children:[
            { path: "input-kontrak-pengadaan", component: InputKontrakPengadaanComponent, data: { title: "Input Kontrak Pengadaan" } },
        ],
    },
    {
        path: "PO", component: null, data: {title:"Input PO"},
        children:[
            { path: "input-PO", component: InputPOComponent, data: { title: "Input Pesanan PO" } },
        ],
    },
    {
        path: "pemasukan", component: null, data: {title:"Input PO"},
        children:[
            { path: "input-pemasukan", component: InputPenerimaanComponent, data: { title: "Input Penerimaan" } },
        ],
    },
    {
        path: "retur", component: null, data: {title:"Input PO"},
        children:[
            { path: "input-pemasukan", component: InputPenerimaanComponent, data: { title: "Input Penerimaan" } },
        ],
    }
]

@NgModule({
    imports: [RouterModule.forChild(mmRoutes)],
    exports: [RouterModule]
})

export class MaterialManagementRoutingModule { }