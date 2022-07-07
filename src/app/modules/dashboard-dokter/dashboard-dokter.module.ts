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
import { AssesmenAwalComponent } from './pages/assesmen-awal/assesmen-awal.component';
import { DetailRekamMedisComponent } from './components/detail-rekam-medis/detail-rekam-medis.component';
import { KonsulComponent } from './pages/konsul/konsul.component';
import { AlergiComponent } from './pages/alergi/alergi.component';
import { VitalSignComponent } from './pages/vital-sign/vital-sign.component';
import { BankDarahComponent } from './pages/bank-darah/bank-darah.component';
import { InputResepIrnaComponent } from './pages/resep-irna/input-resep-irna/input-resep-irna.component';
import { DaftarResepIrnaComponent } from './pages/resep-irna/daftar-resep-irna/daftar-resep-irna.component';
import { ViewResepIrnaComponent } from './pages/resep-irna/view-resep-irna/view-resep-irna.component';
import { SuratPerintahMondokComponent } from './pages/surat-perintah-mondok/surat-perintah-mondok.component';
import { PulangResepIrnaComponent } from './pages/resep-irna/pulang-resep-irna/pulang-resep-irna.component';
import { DaftarResepIrdaComponent } from './pages/resep-irda/daftar-resep-irda/daftar-resep-irda.component';
import { InputResepIrdaComponent } from './pages/resep-irda/input-resep-irda/input-resep-irda.component';
import { ViewResepIrdaComponent } from './pages/resep-irda/view-resep-irda/view-resep-irda.component';
import { PulangResepIrdaComponent } from './pages/resep-irda/pulang-resep-irda/pulang-resep-irda.component';
import { BaseResepIrdaComponent } from './pages/resep-irda/base-resep-irda/base-resep-irda.component';
import { BaseResepIrnaComponent } from './pages/resep-irna/base-resep-irna/base-resep-irna.component';
import { HtmlEditorService, ImageService, LinkService, RichTextEditorModule, ToolbarService } from "@syncfusion/ej2-angular-richtexteditor";

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
        InputResepIrnaComponent,
        DaftarResepIrnaComponent,
        ViewResepIrnaComponent,
        SuratPerintahMondokComponent,
        PulangResepIrnaComponent,
        DaftarResepIrdaComponent,
        InputResepIrdaComponent,
        ViewResepIrdaComponent,
        PulangResepIrdaComponent,
        BaseResepIrdaComponent,
        BaseResepIrnaComponent,
    ],
    imports: [
        DashboarDokterRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        CoreModule,
        RichTextEditorModule
    ],
    exports: [
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
        InputResepIrnaComponent,
        DaftarResepIrnaComponent,
        ViewResepIrnaComponent,
        SuratPerintahMondokComponent,
        PulangResepIrnaComponent,
        DaftarResepIrdaComponent,
        InputResepIrdaComponent,
        ViewResepIrdaComponent,
        PulangResepIrdaComponent,
        BaseResepIrnaComponent,
        BaseResepIrdaComponent,
    ],
    providers: [
        ToolbarService,
        LinkService,
        ImageService,
        HtmlEditorService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardDokterModule { }