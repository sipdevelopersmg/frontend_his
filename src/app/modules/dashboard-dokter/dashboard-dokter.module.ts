import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { DashboarDokterRoutingModule } from "./dashboard-dokter-routing.module";

import { LayoutComponent } from './pages/layout/layout.component';
import { InformasiPasienComponent } from './components/informasi-pasien/informasi-pasien.component';
import { DiagnosaComponent } from './pages/diagnosa/diagnosa.component';

@NgModule({
    declarations: [
        LayoutComponent,
        InformasiPasienComponent,
        DiagnosaComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        DashboarDokterRoutingModule
    ],
    exports: [
        InformasiPasienComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardDokterModule { }