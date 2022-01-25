import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DaftarPenerimaanTanpaEdComponent } from "./pages/penerimaan/daftar-penerimaan-tanpa-ed/daftar-penerimaan-tanpa-ed.component";
import { InputPenerimaanTanpaEdComponent } from "./pages/penerimaan/input-penerimaan-tanpa-ed/input-penerimaan-tanpa-ed.component";
import { ViewPenerimaanTanpaEdComponent } from "./pages/penerimaan/view-penerimaan-tanpa-ed/view-penerimaan-tanpa-ed.component";
import { DaftarReturTanpaEdComponent } from "./pages/retur/daftar-retur-tanpa-ed/daftar-retur-tanpa-ed.component";
import { InputReturTanpaEdComponent } from "./pages/retur/input-retur-tanpa-ed/input-retur-tanpa-ed.component";
import { ViewReturTanpaEdComponent } from "./pages/retur/view-retur-tanpa-ed/view-retur-tanpa-ed.component";

const mmRoutes: Routes = [
    // {
    //     path: "kontrak-pengadaan", component: null, data: { title: "Input Kontrak Pengadaan" },
    //     children: [
    //         { path: "input-kontrak-pengadaan", component: InputKontrakPengadaanComponent, data: { title: "Input Kontrak Pengadaan" } },
    //         { path: "daftar-kontrak-pengadaan", component: ListKontrakPengadaanComponent, data: { title: "Daftar Kontrak Pengadaan" } },
    //         { path: "view-kontrak-pengadaan/:id/:key", component: ViewKontrakPengadaanComponent, data: { title: "View Kontrak Pengadaan" } },
    //     ],
    // },
    // {
    //     path: "pemesanan", component: null, data: { title: "Input PO" },
    //     children: [
    //         { path: "input-pemesanan", component: InputPemesananComponent, data: { title: "Input Pemesanan" } },
    //         { path: "daftar-pemesanan", component: DaftarPemesananComponent, data: { title: "Daftar Pemesanan" } },
    //         { path: "view-pemesanan/:id/:key", component: ViewPemesananComponent, data: { title: "View Pemesanan" } },
    //     ],
    // },
    {
        path: "penerimaan-tanpa-ed", component: null, data: { title: "Input Penerimaan Tanpa ED" },
        children: [
            { path: "input-penerimaan-tanpa-ed", component: InputPenerimaanTanpaEdComponent, data: { title: "Input Penerimaan Tanpa ED" } },
            { path: "daftar-penerimaan-tanpa-ed", component: DaftarPenerimaanTanpaEdComponent, data: { title: "Daftar Penerimaan Tanpa ED" } },
            { path: "view-penerimaan-tanpa-ed/:id/:key", component: ViewPenerimaanTanpaEdComponent, data: { title: "View Penerimaan Tanpa ED" } },
        ],
    },
    // {
    //     path: "setharga-order", component: null, data: { title: "Input PO" },
    //     children: [
    //         { path: "input-setharga-order", component: SetHargaOrderComponent, data: { title: "Set Harga Order" } },
    //     ],

    // },
    // {
    //     path: "permintaan-mutasi", component: null, data: { title: "Input PO" },
    //     children: [
    //         { path: "daftar-permintaan-mutasi", component: DaftarPermintaanMutasiComponent, data: { title: "Permintaan Mutasi" } },
    //         { path: "input-permintaan-mutasi", component: InputPermintaanMutasiComponent, data: { title: "Input Permintaan Mutasi" } },
    //         { path: "view-permintaan-mutasi/:id/:key", component: ViewPermintaanMutasiComponent, data: { title: "View Permintaaan Mutasi" } },
    //     ],
    // },
    // {
    //     path: "persetujuan-mutasi", component: null, data: { title: "Persetujuan Mutasi" },
    //     children: [
    //         { path: "daftar-persetujuan-mutasi", component: DaftarPersetujuanMutasiComponent, data: { title: "Persetujuan Mutasi" } },
    //         { path: "proses-persetujuan-mutasi/:id/:key", component: ViewPersetujuanMutasiComponent, data: { title: "Proses Persetujuan Mutasi" } },
    //     ],
    // },
    {
        path: "retur-pembelian-tanpa-ed", component: null, data: { title: "Input Retur Pembelian Tanpa ED" },
        children: [
            { path: "daftar-retur-pembelian-tanpa-ed", component: DaftarReturTanpaEdComponent, data: { title: "Daftar Retur Pembelian Tanpa ED" } },
            { path: "input-retur-pembelian-tanpa-ed", component: InputReturTanpaEdComponent, data: { title: "Input Retur Pembelian Tanpa ED" } },
            { path: "view-retur-pembelian-tanpa-ed/:id/:key", component: ViewReturTanpaEdComponent, data: { title: "View Retur Pembelian Tanpa ED" } },

        ],
    },
    // {
    //     path: "issue", component: null, data: { title: "Issue" },
    //     children: [
    //         { path: "daftar-issue", component: DaftarIssueComponent, data: { title: "Daftar Issue" } },
    //         { path: "input-issue", component: InputIssueComponent, data: { title: "Input Issue" } },
    //         { path: "view-issue/:id/:key", component: ViewIssueComponent, data: { title: "View Issue" } },

    //     ],
    // },
    // {
    //     path: "issue-validation", component: null, data: { title: "Input Issue Validation" },
    //     children: [
    //         { path: "daftar-issue-validation", component: DaftarIssueValidationComponent, data: { title: "Daftar Issue" } },
    //         { path: "view-issue-validation/:id/:key", component: ViewIssueValidationComponent, data: { title: "View Issue" } },
    //     ],
    // },
    // {
    //     path: "retur-issue", component: null, data: { title: "Input Retur Issue" },
    //     children: [
    //         { path: "daftar-retur-issue", component: DaftarReturIssueComponent, data: { title: "Daftar Retur Issue" } },
    //         { path: "input-retur-issue", component: InputReturIssueComponent, data: { title: "Input Retur Issue" } },
    //         { path: "view-retur-issue/:id/:key", component: ViewReturIssueComponent, data: { title: "View Retur Issue" } },

    //     ],
    // },
    // {
    //     path: "repacking", component: null, data: { title: "Input Repacking" },
    //     children: [
    //         { path: "daftar-repacking", component: DaftarRepackingComponent, data: { title: "Daftar Repacking" } },
    //         { path: "input-repacking", component: InputRepackingComponent, data: { title: "Input Repacking" } },
    //         { path: "view-repacking/:id/:key", component: ViewRepackingComponent, data: { title: "View Repacking" } },
    //     ],
    // },
    // {
    //     path: "assembly", component: null, data: { title: "Input Assembly" },
    //     children: [
    //         { path: "daftar-assembly", component: DaftarAssemblyComponent, data: { title: "Daftar Assembly" } },
    //         { path: "input-assembly", component: InputAssemblyComponent, data: { title: "Input Assembly" } },
    //         { path: "view-assembly/:id/:key", component: ViewAssemblyComponent, data: { title: "View Assembly" } },
    //     ],
    // },
    // {
    //     path: "pemusnahan-stok", component: null, data: { title: "Input PO" },
    //     children: [
    //         { path: "daftar-pemusnahan-stok", component: DaftarPemusnahanComponent, data: { title: "Pemusnahan Stok" } },
    //         { path: "input-pemusnahan-stok", component: InputPemusnahanComponent, data: { title: "Input Pemusnahan Stok" } },
    //         { path: "view-pemusnahan-stok/:id/:key", component: ViewPemusnahanComponent, data: { title: "View Pemusnahan Stok" } },
    //     ],
    // },
    // {
    //     path:"stok-opname",component:null,data:{title:'Stock Opname'},
    //     children: [
    //         { path: "setting-stok-opname",component:null,data:{title:"Setting Stok Opname"},
    //             children:[
    //               {  path: 'input-setting-stok-opname',component:InputSettingStokOpnameComponent, data:{ title:"Input Setting Stok Opname"}},
    //               {  path: 'daftar-setting-stok-opname',component:DaftarSettingStokOpnameComponent, data:{ title:"Daftar Setting Stok Opname"}},
    //               {  path: 'view-setting-stok-opname/:id/:key',component:ViewSettingStokOpnameComponent, data:{ title:"View Setting Stok Opname"}}
    //             ]
    //         },
    //         { path: "audit-stok-opname",component:null,data:{title:"Audit Stok Opname"},
    //             children:[
    //               {  path: 'daftar-stok-opname',component:DaftarAuditStokOpnameComponent, data:{ title:"Daftar Audit Stok Opname"}},
    //               {  path: 'input-stok-opname',component:InputAuditStokOpnameComponent, data:{ title:"Input Audit Stok Opname"}},
    //               {  path: 'view-stok-opname/:id/:key',component:ViewAuditStokOpnameComponent, data:{ title:"View Audit Stok Opname"}}
    //             ]
    //         },
    //         { path: "audit-stok-opname-tanpa-setting",component:null,data:{title:"Audit Stok Opname"},
    //             children:[
    //               {  path: 'daftar-stok-opname-tanpa-setting',component:DaftarAuditStokOpnameTanpaSettingComponent, data:{ title:"Daftar Audit Stok Opname Tanpa Setting"}},
    //               {  path: 'input-stok-opname-tanpa-setting',component:InputAuditStokOpnameTanpaSettingComponent, data:{ title:"Input Audit Stok Opname Tanpa Setting"}},
    //               {  path: 'view-stok-opname-tanpa-setting/:id/:key',component:ViewAuditStokOpnameTanpaSettingComponent, data:{ title:"View Audit Stok Opname Tanpa Setting"}}
    //             ]
    //         },
    //     ]
    // }
]

@NgModule({
    imports: [RouterModule.forChild(mmRoutes)],
    exports: [RouterModule]
})

export class MaterialManagementTanpaEDRoutingModule { }