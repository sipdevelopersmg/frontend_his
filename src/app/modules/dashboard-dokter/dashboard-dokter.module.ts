import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { DashboarDokterRoutingModule } from "./dashboard-dokter-routing.module";

import { DashboardDokterComponent } from './dashboard-dokter.component';
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
import { BerandaDokterComponent } from './pages/beranda-dokter/beranda-dokter.component';
import { CoreModule } from "../core/core.module";
import { DaftarPasienPerDokterComponent } from './pages/daftar-pasien-per-dokter/daftar-pasien-per-dokter.component';
import { CommandColumnService, EditService } from "@syncfusion/ej2-angular-grids";
import { AssesmenAwalComponent } from './pages/assesmen-awal/assesmen-awal.component';
import { DetailRekamMedisComponent } from './components/detail-rekam-medis/detail-rekam-medis.component';
import { KonsulComponent } from './pages/konsul/konsul.component';
import { AlergiComponent } from './pages/alergi/alergi.component';
import { VitalSignComponent } from './pages/vital-sign/vital-sign.component';
import { BankDarahComponent } from './pages/bank-darah/bank-darah.component';

@NgModule({
    declarations: [
        DashboardDokterComponent,
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
        HistoryResepComponent,
        BerandaDokterComponent,
        DaftarPasienPerDokterComponent,
        AssesmenAwalComponent,
        DetailRekamMedisComponent,
        KonsulComponent,
        AlergiComponent,
        VitalSignComponent,
        BankDarahComponent,
    ],
    imports: [
        DashboarDokterRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        CoreModule,
    ],
    exports: [
        InformasiPasienComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardDokterModule { }