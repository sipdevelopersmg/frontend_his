import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { DashboarDokterRoutingModule } from "./dashboard-dokter-routing.module";

import { InformasiPasienComponent } from './components/informasi-pasien/informasi-pasien.component';
import { DiagnosaComponent } from './pages/diagnosa/diagnosa.component';
import { RadiologiComponent } from './pages/radiologi/radiologi.component';

@NgModule({
    declarations: [
        InformasiPasienComponent,
        DiagnosaComponent,
        RadiologiComponent
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