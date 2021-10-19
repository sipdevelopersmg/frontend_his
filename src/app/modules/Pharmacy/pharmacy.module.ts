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