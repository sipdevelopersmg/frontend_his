import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DaftarSettingStokOpnameComponent } from "../MM/pages/stok_opname/setting_stok_opname/daftar-setting-stok-opname/daftar-setting-stok-opname.component";
import { DaftarAssemblyTanpaEdComponent } from "./pages/assembly/daftar-assembly-tanpa-ed/daftar-assembly-tanpa-ed.component";
import { InputAssemblyTanpaEdComponent } from "./pages/assembly/input-assembly-tanpa-ed/input-assembly-tanpa-ed.component";
import { ViewAssemblyTanpaEdComponent } from "./pages/assembly/view-assembly-tanpa-ed/view-assembly-tanpa-ed.component";
import { DaftarPermintaanMutasiTanpaEdComponent } from "./pages/mutasi/pemintaan-mutasi/daftar-permintaan-mutasi-tanpa-ed/daftar-permintaan-mutasi-tanpa-ed.component";
import { InputPermintaanMutasiTanpaEdComponent } from "./pages/mutasi/pemintaan-mutasi/input-permintaan-mutasi-tanpa-ed/input-permintaan-mutasi-tanpa-ed.component";
import { ViewPermintaanMutasiTanpaEdComponent } from "./pages/mutasi/pemintaan-mutasi/view-permintaan-mutasi-tanpa-ed/view-permintaan-mutasi-tanpa-ed.component";
import { DaftarPersetujuanMutasiTanpaEdComponent } from "./pages/mutasi/persetujuan-mutasi/daftar-persetujuan-mutasi-tanpa-ed/daftar-persetujuan-mutasi-tanpa-ed.component";
import { ViewPersetujuanMutasiTanpaEdComponent } from "./pages/mutasi/persetujuan-mutasi/view-persetujuan-mutasi-tanpa-ed/view-persetujuan-mutasi-tanpa-ed.component";
import { DaftarPemakaianInternalTanpaEdComponent } from "./pages/pemakaian-internal/daftar-pemakaian-internal-tanpa-ed/daftar-pemakaian-internal-tanpa-ed.component";
import { DaftarPemakaianInternalValidasiTanpaEdComponent } from "./pages/pemakaian-internal/daftar-pemakaian-internal-validasi-tanpa-ed/daftar-pemakaian-internal-validasi-tanpa-ed.component";
import { InputPemakaianInternalTanpaEdComponent } from "./pages/pemakaian-internal/input-pemakaian-internal-tanpa-ed/input-pemakaian-internal-tanpa-ed.component";
import { ViewPemakaianInternalTanpaEdComponent } from "./pages/pemakaian-internal/view-pemakaian-internal-tanpa-ed/view-pemakaian-internal-tanpa-ed.component";
import { ViewPemakaianInternalValidasiTanpaEdComponent } from "./pages/pemakaian-internal/view-pemakaian-internal-validasi-tanpa-ed/view-pemakaian-internal-validasi-tanpa-ed.component";
import { DaftarPemusnahanTanpaEdComponent } from "./pages/pemusnahan/daftar-pemusnahan-tanpa-ed/daftar-pemusnahan-tanpa-ed.component";
import { InputPemusnahanTanpaEdComponent } from "./pages/pemusnahan/input-pemusnahan-tanpa-ed/input-pemusnahan-tanpa-ed.component";
import { ViewPemusnahanTanpaEdComponent } from "./pages/pemusnahan/view-pemusnahan-tanpa-ed/view-pemusnahan-tanpa-ed.component";
import { DaftarPenerimaanTanpaEdComponent } from "./pages/penerimaan/daftar-penerimaan-tanpa-ed/daftar-penerimaan-tanpa-ed.component";
import { InputPenerimaanTanpaEdComponent } from "./pages/penerimaan/input-penerimaan-tanpa-ed/input-penerimaan-tanpa-ed.component";
import { ViewPenerimaanTanpaEdComponent } from "./pages/penerimaan/view-penerimaan-tanpa-ed/view-penerimaan-tanpa-ed.component";
import { DaftarRepackingTanpaEdComponent } from "./pages/repacking/daftar-repacking-tanpa-ed/daftar-repacking-tanpa-ed.component";
import { InputRepackingTanpaEdComponent } from "./pages/repacking/input-repacking-tanpa-ed/input-repacking-tanpa-ed.component";
import { ViewRepackingTanpaEdComponent } from "./pages/repacking/view-repacking-tanpa-ed/view-repacking-tanpa-ed.component";
import { DaftarReturPemakaianInternalComponent } from "./pages/retur-pemakaian-internal/daftar-retur-pemakaian-internal/daftar-retur-pemakaian-internal.component";
import { InputReturPemakaianInternalComponent } from "./pages/retur-pemakaian-internal/input-retur-pemakaian-internal/input-retur-pemakaian-internal.component";
import { ViewReturPemakaianInternalComponent } from "./pages/retur-pemakaian-internal/view-retur-pemakaian-internal/view-retur-pemakaian-internal.component";
import { DaftarReturTanpaEdComponent } from "./pages/retur/daftar-retur-tanpa-ed/daftar-retur-tanpa-ed.component";
import { InputReturTanpaEdComponent } from "./pages/retur/input-retur-tanpa-ed/input-retur-tanpa-ed.component";
import { ViewReturTanpaEdComponent } from "./pages/retur/view-retur-tanpa-ed/view-retur-tanpa-ed.component";
import { DaftarAuditStokOpnameTanpaSettingTanpaEdComponent } from "./pages/stok_opname/audit-stok-opname-tanpa-setting/daftar-audit-stok-opname-tanpa-setting-tanpa-ed/daftar-audit-stok-opname-tanpa-setting-tanpa-ed.component";
import { InputAuditStokOpnameTanpaSettingTanpaEdComponent } from "./pages/stok_opname/audit-stok-opname-tanpa-setting/input-audit-stok-opname-tanpa-setting-tanpa-ed/input-audit-stok-opname-tanpa-setting-tanpa-ed.component";
import { ViewAuditStokOpnameTanpaSettingTanpaEdComponent } from "./pages/stok_opname/audit-stok-opname-tanpa-setting/view-audit-stok-opname-tanpa-setting-tanpa-ed/view-audit-stok-opname-tanpa-setting-tanpa-ed.component";
import { DaftarAuditStokOpnameTanpaEdComponent } from "./pages/stok_opname/audit-stok-opname/daftar-audit-stok-opname-tanpa-ed/daftar-audit-stok-opname-tanpa-ed.component";
import { InputAuditStokOpnameTanpaEdComponent } from "./pages/stok_opname/audit-stok-opname/input-audit-stok-opname-tanpa-ed/input-audit-stok-opname-tanpa-ed.component";
import { ViewAuditStokOpnameTanpaEdComponent } from "./pages/stok_opname/audit-stok-opname/view-audit-stok-opname-tanpa-ed/view-audit-stok-opname-tanpa-ed.component";
import { DaftarSettingStokOpnameTanpaEdComponent } from "./pages/stok_opname/setting-stok-opname/daftar-setting-stok-opname-tanpa-ed/daftar-setting-stok-opname-tanpa-ed.component";
import { InputSettingStokOpnameTanpaEdComponent } from "./pages/stok_opname/setting-stok-opname/input-setting-stok-opname-tanpa-ed/input-setting-stok-opname-tanpa-ed.component";
import { ViewSettingStokOpnameTanpaEdComponent } from "./pages/stok_opname/setting-stok-opname/view-setting-stok-opname-tanpa-ed/view-setting-stok-opname-tanpa-ed.component";

const mmRoutes: Routes = [
    {
        path: "penerimaan-tanpa-ed", component: null, data: { title: "Input Penerimaan Tanpa ED" },
        children: [
            { path: "input-penerimaan-tanpa-ed", component: InputPenerimaanTanpaEdComponent, data: { title: "Input Penerimaan Tanpa ED" } },
            { path: "daftar-penerimaan-tanpa-ed", component: DaftarPenerimaanTanpaEdComponent, data: { title: "Daftar Penerimaan Tanpa ED" } },
            { path: "view-penerimaan-tanpa-ed/:id/:key", component: ViewPenerimaanTanpaEdComponent, data: { title: "View Penerimaan Tanpa ED" } },
        ],
    },
    {
        path: "permintaan-mutasi-tanpa-ed", component: null, data: { title: "Input PO" },
        children: [
            { path: "daftar-permintaan-mutasi-tanpa-ed", component: DaftarPermintaanMutasiTanpaEdComponent, data: { title: "Permintaan Mutasi" } },
            { path: "input-permintaan-mutasi-tanpa-ed", component: InputPermintaanMutasiTanpaEdComponent, data: { title: "Input Permintaan Mutasi" } },
            { path: "view-permintaan-mutasi-tanpa-ed/:id/:key", component: ViewPermintaanMutasiTanpaEdComponent, data: { title: "View Permintaaan Mutasi" } },
        ],
    },
    {
        path: "persetujuan-mutasi-tanpa-ed", component: null, data: { title: "Persetujuan Mutasi" },
        children: [
            { path: "daftar-persetujuan-mutasi-tanpa-ed", component: DaftarPersetujuanMutasiTanpaEdComponent, data: { title: "Persetujuan Mutasi" } },
            { path: "proses-persetujuan-mutasi-tanpa-ed/:id/:key", component: ViewPersetujuanMutasiTanpaEdComponent, data: { title: "Proses Persetujuan Mutasi" } },
        ],
    },
    {
        path: "retur-pembelian-tanpa-ed", component: null, data: { title: "Input Retur Pembelian Tanpa ED" },
        children: [
            { path: "daftar-retur-pembelian-tanpa-ed", component: DaftarReturTanpaEdComponent, data: { title: "Daftar Retur Pembelian Tanpa ED" } },
            { path: "input-retur-pembelian-tanpa-ed", component: InputReturTanpaEdComponent, data: { title: "Input Retur Pembelian Tanpa ED" } },
            { path: "view-retur-pembelian-tanpa-ed/:id/:key", component: ViewReturTanpaEdComponent, data: { title: "View Retur Pembelian Tanpa ED" } },

        ],
    },
    {
        path: "pemakaian-internal-tanpa-ed", component: null, data: { title: "Issue" },
        children: [
            { path: "daftar-pemakaian-internal-tanpa-ed", component: DaftarPemakaianInternalTanpaEdComponent, data: { title: "Daftar Pemakaian Internal" } },
            { path: "input-pemakaian-internal-tanpa-ed", component: InputPemakaianInternalTanpaEdComponent, data: { title: "Input Pemakaian Internal" } },
            { path: "view-pemakaian-internal-tanpa-ed/:id/:key", component: ViewPemakaianInternalTanpaEdComponent, data: { title: "View Pemakaian Internal" } },

        ],
    },
    {
        path: "pemakaian-internal-validation-tanpa-ed", component: null, data: { title: "Input Issue Validation" },
        children: [
            { path: "daftar-pemakaian-internal-validation-tanpa-ed", component: DaftarPemakaianInternalValidasiTanpaEdComponent, data: { title: "Daftar Validasi Pemakaian Internal" } },
            { path: "view-pemakaian-internal-validation-tanpa-ed/:id/:key", component: ViewPemakaianInternalValidasiTanpaEdComponent, data: { title: "View Validasi Pemakaian Internal" } },
        ],
    },
    {
        path: "retur-pemakaian-internal-tanpa-ed", component: null, data: { title: "Input Retur Issue" },
        children: [
            { path: "daftar-retur-pemakian-internal-tanpa-ed", component: DaftarReturPemakaianInternalComponent, data: { title: "Daftar Retur Pemakaian Internal" } },
            { path: "input-retur-pemakaian-internal-tanpa-ed", component: InputReturPemakaianInternalComponent, data: { title: "Input Retur Pemakaian Internal" } },
            { path: "view-retur-pemakaian-internal-tanpa-ed/:id/:key", component: ViewReturPemakaianInternalComponent, data: { title: "View Retur Pemakaian Internal" } },
        ],
    },
    {
        path: "repacking-tanpa-ed", component: null, data: { title: "Input Repacking Tanpa Ed" },
        children: [
            { path: "daftar-repacking-tanpa-ed", component: DaftarRepackingTanpaEdComponent, data: { title: "Daftar Repacking Tanpa Ed" } },
            { path: "input-repacking-tanpa-ed", component: InputRepackingTanpaEdComponent, data: { title: "Input Repacking Tanpa Ed" } },
            { path: "view-repacking-tanpa-ed/:id/:key", component: ViewRepackingTanpaEdComponent, data: { title: "View Repacking Tanpa Ed" } },
        ],
    },
    {
        path: "assembly-tanpa-ed", component: null, data: { title: "Input Assembly" },
        children: [
            { path: "daftar-assembly-tanpa-ed", component: DaftarAssemblyTanpaEdComponent, data: { title: "Daftar Assembly Tanpa Ed" } },
            { path: "input-assembly-tanpa-ed", component: InputAssemblyTanpaEdComponent, data: { title: "Input Assembly Tanpa Ed" } },
            { path: "view-assembly-tanpa-ed/:id/:key", component: ViewAssemblyTanpaEdComponent, data: { title: "View Assembly Tanpa Ed" } },
        ],
    },
    {
        path: "pemusnahan-stok-tanpa-ed", component: null, data: { title: "Input PO" },
        children: [
            { path: "daftar-pemusnahan-stok-tanpa-ed", component: DaftarPemusnahanTanpaEdComponent, data: { title: "Pemusnahan Stok" } },
            { path: "input-pemusnahan-stok-tanpa-ed", component: InputPemusnahanTanpaEdComponent, data: { title: "Input Pemusnahan Stok" } },
            { path: "view-pemusnahan-stok-tanpa-ed/:id/:key", component: ViewPemusnahanTanpaEdComponent, data: { title: "View Pemusnahan Stok" } },
        ],
    },
    {
        path:"stok-opname",component:null,data:{title:'Stock Opname'},
        children: [
            { path: "setting-stok-opname",component:null,data:{title:"Setting Stok Opname"},
                children:[
                  {  path: 'input-setting-stok-opname-tanpa-ed',component:InputSettingStokOpnameTanpaEdComponent, data:{ title:"Input Setting Stok Opname Tanpa ED"}},
                  {  path: 'daftar-setting-stok-opname-tanpa-ed',component:DaftarSettingStokOpnameTanpaEdComponent, data:{ title:"Daftar Setting Stok Opname Tanpa ED"}},
                  {  path: 'view-setting-stok-opname-tanpa-ed/:id/:key',component:ViewSettingStokOpnameTanpaEdComponent, data:{ title:"View Setting Stok Opname Tanpa ED"}}
                ]
            },
            { path: "audit-stok-opname",component:null,data:{title:"Audit Stok Opname"},
                children:[
                  {  path: 'daftar-stok-opname-tanpa-ed',component:DaftarAuditStokOpnameTanpaEdComponent, data:{ title:"Daftar Audit Stok Opname"}},
                  {  path: 'input-stok-opname-tanpa-ed',component:InputAuditStokOpnameTanpaEdComponent, data:{ title:"Input Audit Stok Opname"}},
                  {  path: 'view-stok-opname-tanpa-ed/:id/:key',component:ViewAuditStokOpnameTanpaEdComponent, data:{ title:"View Audit Stok Opname"}}
                ]
            },
            { path: "audit-stok-opname-tanpa-setting",component:null,data:{title:"Audit Stok Opname"},
                children:[
                  {  path: 'daftar-stok-opname-tanpa-setting-tanpa-ed',component:DaftarAuditStokOpnameTanpaSettingTanpaEdComponent, data:{ title:"Daftar Audit Stok Opname Tanpa Setting"}},
                  {  path: 'input-stok-opname-tanpa-setting-tanpa-ed',component:InputAuditStokOpnameTanpaSettingTanpaEdComponent, data:{ title:"Input Audit Stok Opname Tanpa Setting"}},
                  {  path: 'view-stok-opname-tanpa-setting-tanpa-ed/:id/:key',component:ViewAuditStokOpnameTanpaSettingTanpaEdComponent, data:{ title:"View Audit Stok Opname Tanpa Setting"}}
                ]
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(mmRoutes)],
    exports: [RouterModule]
})

export class MaterialManagementTanpaEDRoutingModule { }