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

@NgModule({
    declarations: [
    InputPenerimaanTanpaEdComponent,
    DaftarPenerimaanTanpaEdComponent,
    ViewPenerimaanTanpaEdComponent,
    InputReturTanpaEdComponent,
    DaftarReturTanpaEdComponent,
    ViewReturTanpaEdComponent
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