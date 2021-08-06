import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { DashboarDokterRoutingModule } from "./dashboard-dokter-routing.module";

import { InformasiPasienComponent } from './components/informasi-pasien/informasi-pasien.component';
import { DiagnosaComponent } from './pages/diagnosa/diagnosa.component';
import { RadiologiComponent } from './pages/radiologi/radiologi.component';
import { RiwayatPemeriksaanRadComponent } from './pages/radiologi/riwayat-pemeriksaan/riwayat-pemeriksaan.component';
import { InputOrderBaruRadComponent } from './pages/radiologi/input-order-baru/input-order-baru.component';
import { LaboratoriumComponent } from './pages/laboratorium/laboratorium.component';
import { RiwayatPemeriksaanLabComponent } from "./pages/laboratorium/riwayat-pemeriksaan/riwayat-pemeriksaan.component";
import { InputOrderBaruLabComponent } from "./pages/laboratorium/input-order-baru/input-order-baru.component";
import { ResepComponent } from './pages/resep/resep.component';
import { InputResepComponent } from './pages/resep/input-resep/input-resep.component';
import { HistoryResepComponent } from './pages/resep/history-resep/history-resep.component';

@NgModule({
    declarations: [
        InformasiPasienComponent,
        DiagnosaComponent,
        RadiologiComponent,
        RiwayatPemeriksaanRadComponent,
        InputOrderBaruRadComponent,
        LaboratoriumComponent,
        RiwayatPemeriksaanLabComponent,
        InputOrderBaruLabComponent,
        ResepComponent,
        InputResepComponent,
        HistoryResepComponent
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