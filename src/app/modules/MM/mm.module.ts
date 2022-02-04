import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { MaterialManagementRoutingModule } from "./mm-routing.module";
import { SetupGrupItemComponent } from './pages/setup-data/setup-grup-item/setup-grup-item.component';
import { SetupPabrikComponent } from './pages/setup-data/setup-pabrik/setup-pabrik.component';
import { InputKontrakPengadaanComponent } from './pages/pemasukan/kontrak-pengadaan/input-kontrak-pengadaan/input-kontrak-pengadaan.component';
import { InputPenerimaanComponent } from './pages/pemasukan/penerimaan/input-penerimaan/input-penerimaan.component';
import { InputReturPembelianComponent } from './pages/retur/input-retur/input-retur.component';
import { SetupSatuanComponent } from './pages/setup-data/setup-satuan/setup-satuan.component';
import { SetupGroupCoaComponent } from './pages/setup-data/setup-group-coa/setup-group-coa.component';
import { SetupCoaComponent } from './pages/setup-data/setup-coa/setup-coa.component';
import { SetupPerencanaanKategoriComponent } from './pages/setup-data/setup-perencanaan-kategori/setup-perencanaan-kategori.component';
import { SetupTipeSupplierComponent } from './pages/setup-data/setup-tipe-supplier/setup-tipe-supplier.component';
import { SetupTipeStockroomComponent } from './pages/setup-data/setup-tipe-stockroom/setup-tipe-stockroom.component';
import { SetupTipeItemComponent } from './pages/setup-data/setup-tipe-item/setup-tipe-item.component';
import { SetupTemperaturItemComponent } from './pages/setup-data/setup-temperatur-item/setup-temperatur-item.component';
import { SetupSupplierComponent } from './pages/setup-data/setup-supplier/setup-supplier.component';
import { SetupItemComponent } from './pages/setup-data/setup-item/setup-item.component';
import { ListKontrakPengadaanComponent } from './pages/pemasukan/kontrak-pengadaan/list-kontrak-pengadaan/list-kontrak-pengadaan.component';
import { SetupStockroomComponent } from './pages/setup-data/setup-stockroom/setup-stockroom.component';
import { ViewKontrakPengadaanComponent } from './pages/pemasukan/kontrak-pengadaan/view-kontrak-pengadaan/view-kontrak-pengadaan.component';
import { InputPemesananComponent } from './pages/pemasukan/pemesanan/input-pemesanan/input-pemesanan.component';
import { DaftarPemesananComponent } from './pages/pemasukan/pemesanan/daftar-pemesanan/daftar-pemesanan.component';
import { ViewPemesananComponent } from './pages/pemasukan/pemesanan/view-pemesanan/view-pemesanan.component';
import { DaftarPenerimaanComponent } from './pages/pemasukan/penerimaan/daftar-penerimaan/daftar-penerimaan.component';
import { ViewPenerimaanComponent } from './pages/pemasukan/penerimaan/view-penerimaan/view-penerimaan.component';
import { SetHargaOrderComponent } from './pages/pemasukan/set-harga-order/set-harga-order.component';
import { InputPermintaanMutasiComponent } from './pages/mutasi/permintaan-mutasi/input-permintaan-mutasi/input-permintaan-mutasi.component';
import { DaftarPermintaanMutasiComponent } from './pages/mutasi/permintaan-mutasi/daftar-permintaan-mutasi/daftar-permintaan-mutasi.component';
import { ViewPermintaanMutasiComponent } from './pages/mutasi/permintaan-mutasi/view-permintaan-mutasi/view-permintaan-mutasi.component';
import { DaftarPersetujuanMutasiComponent } from './pages/mutasi/persetujuan-mutasi/daftar-persetujuan-mutasi/daftar-persetujuan-mutasi.component';
import { ViewPersetujuanMutasiComponent } from './pages/mutasi/persetujuan-mutasi/view-persetujuan-mutasi/view-persetujuan-mutasi.component';
import { DaftarReturPembelianComponent } from './pages/retur/daftar-retur-pembelian/daftar-retur-pembelian.component';
import { ViewReturPembelianComponent } from './pages/retur/view-retur-pembelian/view-retur-pembelian.component';
import { InputIssueComponent } from './pages/issue/input-issue/input-issue.component';
import { DaftarIssueComponent } from './pages/issue/daftar-issue/daftar-issue.component';
import { ViewIssueComponent } from './pages/issue/view-issue/view-issue.component';
import { InputReturIssueComponent } from './pages/retur_issue/input-retur-issue/input-retur-issue.component';
import { DaftarReturIssueComponent } from './pages/retur_issue/daftar-retur-issue/daftar-retur-issue.component';
import { ViewReturIssueComponent } from './pages/retur_issue/view-retur-issue/view-retur-issue.component';
import { DaftarIssueValidationComponent } from './pages/issue_validation/daftar-issue-validation/daftar-issue-validation.component';
import { ViewIssueValidationComponent } from './pages/issue_validation/view-issue-validation/view-issue-validation.component';
import { SetupItemDetailComponent } from './pages/setup-data/setup-item/detail/setup-item-detail/setup-item-detail.component';
import { DaftarRepackingComponent } from './pages/repacking/daftar-repacking/daftar-repacking.component';
import { InputRepackingComponent } from './pages/repacking/input-repacking/input-repacking.component';
import { ViewRepackingComponent } from './pages/repacking/view-repacking/view-repacking.component';
import { InputAssemblyComponent } from './pages/assembly/input-assembly/input-assembly.component';
import { DaftarAssemblyComponent } from './pages/assembly/daftar-assembly/daftar-assembly.component';
import { ViewAssemblyComponent } from './pages/assembly/view-assembly/view-assembly.component';
import { SetupPenanggungJawabRakStorageComponent } from './pages/setup-data/setup-penanggung-jawab-rak-storage/setup-penanggung-jawab-rak-storage.component';
import { SetupRakStorageComponent } from './pages/setup-data/setup-rak-storage/setup-rak-storage.component';
import { DaftarPemusnahanComponent } from './pages/pemusnahan/daftar-pemusnahan/daftar-pemusnahan.component';
import { InputPemusnahanComponent } from './pages/pemusnahan/input-pemusnahan/input-pemusnahan.component';
import { ViewPemusnahanComponent } from './pages/pemusnahan/view-pemusnahan/view-pemusnahan.component';
import { InputSettingStokOpnameComponent } from "./pages/stok_opname/setting_stok_opname/input-setting-stok-opname/input-setting-stok-opname.component";
import { DaftarAuditStokOpnameComponent } from './pages/stok_opname/audit-stok-opname/daftar-audit-stok-opname/daftar-audit-stok-opname.component';
import { InputAuditStokOpnameComponent } from './pages/stok_opname/audit-stok-opname/input-audit-stok-opname/input-audit-stok-opname.component';
import { DaftarSettingStokOpnameComponent } from './pages/stok_opname/setting_stok_opname/daftar-setting-stok-opname/daftar-setting-stok-opname.component';
import { ViewSettingStokOpnameComponent } from './pages/stok_opname/setting_stok_opname/view-setting-stok-opname/view-setting-stok-opname.component';
import { ViewAuditStokOpnameComponent } from './pages/stok_opname/audit-stok-opname/view-audit-stok-opname/view-audit-stok-opname.component';
import { DaftarAuditStokOpnameTanpaSettingComponent } from './pages/stok_opname/audit-stok-opname-tanpa-setting/daftar-audit-stok-opname-tanpa-setting/daftar-audit-stok-opname-tanpa-setting.component';
import { InputAuditStokOpnameTanpaSettingComponent } from './pages/stok_opname/audit-stok-opname-tanpa-setting/input-audit-stok-opname-tanpa-setting/input-audit-stok-opname-tanpa-setting.component';
import { ViewAuditStokOpnameTanpaSettingComponent } from './pages/stok_opname/audit-stok-opname-tanpa-setting/view-audit-stok-opname-tanpa-setting/view-audit-stok-opname-tanpa-setting.component';

@NgModule({
    declarations: [
        SetupGrupItemComponent,
        SetupPabrikComponent,
        InputKontrakPengadaanComponent,
        InputPenerimaanComponent,
        InputReturPembelianComponent,
        SetupSatuanComponent,
        SetupGroupCoaComponent,
        SetupCoaComponent,
        SetupPerencanaanKategoriComponent,
        SetupTipeSupplierComponent,
        SetupTipeStockroomComponent,
        SetupTipeItemComponent,
        SetupTemperaturItemComponent,
        SetupSupplierComponent,
        SetupItemComponent,
        ListKontrakPengadaanComponent,
        SetupStockroomComponent,
        ViewKontrakPengadaanComponent,
        InputPemesananComponent,
        DaftarPemesananComponent,
        ViewPemesananComponent,
        DaftarPenerimaanComponent,
        ViewPenerimaanComponent,
        SetHargaOrderComponent,
        InputPermintaanMutasiComponent,
        DaftarPermintaanMutasiComponent,
        ViewPermintaanMutasiComponent,
        DaftarPersetujuanMutasiComponent,
        ViewPersetujuanMutasiComponent,
        DaftarReturPembelianComponent,
        ViewReturPembelianComponent,
        InputIssueComponent,
        DaftarIssueComponent,
        ViewIssueComponent,
        InputReturIssueComponent,
        DaftarReturIssueComponent,
        ViewReturIssueComponent,
        DaftarIssueValidationComponent,
        ViewIssueValidationComponent,
        SetupItemDetailComponent,
        DaftarRepackingComponent,
        InputRepackingComponent,
        ViewRepackingComponent,
        InputAssemblyComponent,
        DaftarAssemblyComponent,
        ViewAssemblyComponent,
        SetupPenanggungJawabRakStorageComponent,
        SetupRakStorageComponent,
        DaftarPemusnahanComponent,
        InputPemusnahanComponent,
        ViewPemusnahanComponent,
        InputSettingStokOpnameComponent,
        DaftarAuditStokOpnameComponent,
        InputAuditStokOpnameComponent,
        DaftarSettingStokOpnameComponent,
        ViewSettingStokOpnameComponent,
        ViewAuditStokOpnameComponent,
        DaftarAuditStokOpnameTanpaSettingComponent,
        InputAuditStokOpnameTanpaSettingComponent,
        ViewAuditStokOpnameTanpaSettingComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        MaterialManagementRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialManagementModule { }