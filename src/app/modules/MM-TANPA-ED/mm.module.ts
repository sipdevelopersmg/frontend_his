import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { MaterialManagementTanpaEDRoutingModule } from "./mm-routing.module";
import { InputPenerimaanTanpaEdComponent } from './pages/penerimaan/input-penerimaan-tanpa-ed/input-penerimaan-tanpa-ed.component';
import { DaftarPenerimaanTanpaEdComponent } from './pages/penerimaan/daftar-penerimaan-tanpa-ed/daftar-penerimaan-tanpa-ed.component';
import { ViewPenerimaanTanpaEdComponent } from './pages/penerimaan/view-penerimaan-tanpa-ed/view-penerimaan-tanpa-ed.component';
import { InputReturTanpaEdComponent } from './pages/retur/input-retur-tanpa-ed/input-retur-tanpa-ed.component';
import { DaftarReturTanpaEdComponent } from './pages/retur/daftar-retur-tanpa-ed/daftar-retur-tanpa-ed.component';
import { ViewReturTanpaEdComponent } from './pages/retur/view-retur-tanpa-ed/view-retur-tanpa-ed.component';
import { DaftarPermintaanMutasiTanpaEdComponent } from './pages/mutasi/pemintaan-mutasi/daftar-permintaan-mutasi-tanpa-ed/daftar-permintaan-mutasi-tanpa-ed.component';
import { InputPermintaanMutasiTanpaEdComponent } from './pages/mutasi/pemintaan-mutasi/input-permintaan-mutasi-tanpa-ed/input-permintaan-mutasi-tanpa-ed.component';
import { ViewPermintaanMutasiTanpaEdComponent } from './pages/mutasi/pemintaan-mutasi/view-permintaan-mutasi-tanpa-ed/view-permintaan-mutasi-tanpa-ed.component';
import { DaftarPersetujuanMutasiTanpaEdComponent } from './pages/mutasi/persetujuan-mutasi/daftar-persetujuan-mutasi-tanpa-ed/daftar-persetujuan-mutasi-tanpa-ed.component';
import { ViewPersetujuanMutasiTanpaEdComponent } from './pages/mutasi/persetujuan-mutasi/view-persetujuan-mutasi-tanpa-ed/view-persetujuan-mutasi-tanpa-ed.component';
import { InputPemakaianInternalTanpaEdComponent } from './pages/pemakaian-internal/input-pemakaian-internal-tanpa-ed/input-pemakaian-internal-tanpa-ed.component';
import { DaftarPemakaianInternalTanpaEdComponent } from './pages/pemakaian-internal/daftar-pemakaian-internal-tanpa-ed/daftar-pemakaian-internal-tanpa-ed.component';
import { ViewPemakaianInternalTanpaEdComponent } from './pages/pemakaian-internal/view-pemakaian-internal-tanpa-ed/view-pemakaian-internal-tanpa-ed.component';
import { InputReturPemakaianInternalComponent } from './pages/retur-pemakaian-internal/input-retur-pemakaian-internal/input-retur-pemakaian-internal.component';
import { DaftarReturPemakaianInternalComponent } from './pages/retur-pemakaian-internal/daftar-retur-pemakaian-internal/daftar-retur-pemakaian-internal.component';
import { ViewReturPemakaianInternalComponent } from './pages/retur-pemakaian-internal/view-retur-pemakaian-internal/view-retur-pemakaian-internal.component';
import { InputAssemblyTanpaEdComponent } from './pages/assembly/input-assembly-tanpa-ed/input-assembly-tanpa-ed.component';
import { ViewAssemblyTanpaEdComponent } from './pages/assembly/view-assembly-tanpa-ed/view-assembly-tanpa-ed.component';
import { DaftarAssemblyTanpaEdComponent } from './pages/assembly/daftar-assembly-tanpa-ed/daftar-assembly-tanpa-ed.component';
import { InputRepackingTanpaEdComponent } from './pages/repacking/input-repacking-tanpa-ed/input-repacking-tanpa-ed.component';
import { DaftarRepackingTanpaEdComponent } from './pages/repacking/daftar-repacking-tanpa-ed/daftar-repacking-tanpa-ed.component';
import { ViewRepackingTanpaEdComponent } from './pages/repacking/view-repacking-tanpa-ed/view-repacking-tanpa-ed.component';
import { DaftarPemakaianInternalValidasiTanpaEdComponent } from './pages/pemakaian-internal/daftar-pemakaian-internal-validasi-tanpa-ed/daftar-pemakaian-internal-validasi-tanpa-ed.component';
import { ViewPemakaianInternalValidasiTanpaEdComponent } from './pages/pemakaian-internal/view-pemakaian-internal-validasi-tanpa-ed/view-pemakaian-internal-validasi-tanpa-ed.component';
import { InputPemusnahanTanpaEdComponent } from './pages/pemusnahan/input-pemusnahan-tanpa-ed/input-pemusnahan-tanpa-ed.component';
import { DaftarPemusnahanTanpaEdComponent } from './pages/pemusnahan/daftar-pemusnahan-tanpa-ed/daftar-pemusnahan-tanpa-ed.component';
import { ViewPemusnahanTanpaEdComponent } from './pages/pemusnahan/view-pemusnahan-tanpa-ed/view-pemusnahan-tanpa-ed.component';

@NgModule({
    declarations: [
    InputPenerimaanTanpaEdComponent,
    DaftarPenerimaanTanpaEdComponent,
    ViewPenerimaanTanpaEdComponent,
    InputReturTanpaEdComponent,
    DaftarReturTanpaEdComponent,
    ViewReturTanpaEdComponent,
    DaftarPermintaanMutasiTanpaEdComponent,
    InputPermintaanMutasiTanpaEdComponent,
    ViewPermintaanMutasiTanpaEdComponent,
    DaftarPersetujuanMutasiTanpaEdComponent,
    ViewPersetujuanMutasiTanpaEdComponent,
    InputPemakaianInternalTanpaEdComponent,
    DaftarPemakaianInternalTanpaEdComponent,
    ViewPemakaianInternalTanpaEdComponent,
    InputReturPemakaianInternalComponent,
    DaftarReturPemakaianInternalComponent,
    ViewReturPemakaianInternalComponent,
    InputAssemblyTanpaEdComponent,
    ViewAssemblyTanpaEdComponent,
    DaftarAssemblyTanpaEdComponent,
    InputRepackingTanpaEdComponent,
    DaftarRepackingTanpaEdComponent,
    ViewRepackingTanpaEdComponent,
    DaftarPemakaianInternalValidasiTanpaEdComponent,
    ViewPemakaianInternalValidasiTanpaEdComponent,
    InputPemusnahanTanpaEdComponent,
    DaftarPemusnahanTanpaEdComponent,
    ViewPemusnahanTanpaEdComponent
  ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        MaterialManagementTanpaEDRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialManagementTanpaEDModule { }