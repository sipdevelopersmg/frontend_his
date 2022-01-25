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
    ViewPemakaianInternalTanpaEdComponent
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