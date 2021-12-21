import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { AntrianFarmasiComponent } from './pages/Antrian/antrian-farmasi/antrian-farmasi.component';
import { PharmacyRoutingModule } from "./pharmacy-routing.module";
import { SetupFormulariumComponent } from './pages/setup-formularium/setup-formularium/setup-formularium.component';
import { ResepRacikanComponent } from "./pages/resep-racikan/resep-racikan.component";
import { SetupTipeOutletComponent } from './pages/setup-data/setup-tipe-outlet/setup-tipe-outlet.component';
import { SetupOutletComponent } from './pages/setup-data/setup-outlet/setup-outlet.component';
import { SetupGrupObatComponent } from './pages/setup-data/setup-grup-obat/setup-grup-obat.component';
import { SetupCaraPakaiObatComponent } from './pages/setup-data/setup-cara-pakai-obat/setup-cara-pakai-obat.component';
import { SetupRutePemberianObatComponent } from './pages/setup-data/setup-rute-pemberian-obat/setup-rute-pemberian-obat.component';
import { SetupLabelPemakaianObatComponent } from './pages/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.component';
import { SetupGenerikComponent } from './pages/setup-formularium/setup-formularium/setup-generik/setup-generik.component';
import { TransaksiObatIrnaComponent } from './pages/transaksi-obat/transaksi-obat-irna/transaksi-obat-irna.component';
import { TransaksiObatIrjaComponent } from './pages/transaksi-obat/transaksi-obat-irja/transaksi-obat-irja.component';
import { RefundObatIrjaComponent } from './pages/refund-obat/refund-obat-irja/refund-obat-irja.component';
import { RefundObatIrnaComponent } from './pages/refund-obat/refund-obat-irna/refund-obat-irna.component';
import { ViewResepIrjaComponent } from './pages/transaksi-obat/transaksi-obat-irja/view-resep-irja/view-resep-irja.component';
import { InputResepIrjaComponent } from './pages/transaksi-obat/input-resep-irja/input-resep-irja.component';
import { TransaksiObatIrdaComponent } from './pages/transaksi-obat/transaksi-obat-irda/transaksi-obat-irda.component';
import { RefundObatIrjaDaftarComponent } from './pages/refund-obat/refund-obat-irja-daftar/refund-obat-irja-daftar.component';
import { RefundObatIrjaDetailComponent } from './pages/refund-obat/refund-obat-irja-detail/refund-obat-irja-detail.component';
import { RefundObatIrdaComponent } from './pages/refund-obat/refund-obat-irda/refund-obat-irda.component';
import { RefundObatIrdaDaftarComponent } from './pages/refund-obat/refund-obat-irda-daftar/refund-obat-irda-daftar.component';
import { RefundObatIrdaDetailComponent } from './pages/refund-obat/refund-obat-irda-detail/refund-obat-irda-detail.component';
import { RefundObatIrnaDaftarComponent } from './pages/refund-obat/refund-obat-irna-daftar/refund-obat-irna-daftar.component';
import { RefundObatIrnaDetailComponent } from './pages/refund-obat/refund-obat-irna-detail/refund-obat-irna-detail.component';

@NgModule({
    declarations: [
        AntrianFarmasiComponent,
        SetupFormulariumComponent,
        ResepRacikanComponent,
        SetupTipeOutletComponent,
        SetupOutletComponent,
        SetupGrupObatComponent,
        SetupCaraPakaiObatComponent,
        SetupRutePemberianObatComponent,
        SetupLabelPemakaianObatComponent,
        SetupGenerikComponent,
        TransaksiObatIrnaComponent,
        TransaksiObatIrjaComponent,
        RefundObatIrjaComponent,
        RefundObatIrnaComponent,
        ViewResepIrjaComponent,
        InputResepIrjaComponent,
        TransaksiObatIrdaComponent,
        RefundObatIrjaDaftarComponent,
        RefundObatIrjaDetailComponent,
        RefundObatIrdaComponent,
        RefundObatIrdaDaftarComponent,
        RefundObatIrdaDetailComponent,
        RefundObatIrnaDaftarComponent,
        RefundObatIrnaDetailComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        PharmacyRoutingModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PharmacyModule { }