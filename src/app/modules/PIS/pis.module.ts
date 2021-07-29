import { CommonModule, DatePipe } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { PisRoutingModule } from "./pis-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContextMenuModule } from "@syncfusion/ej2-angular-navigations";
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';

import { InfoComponent } from "./pages/IRJA/pendaftaran-pasien-baru/info/info.component";
import { OrangtuaComponent } from "./pages/IRJA/pendaftaran-pasien-baru/orangtua/orangtua.component";
import { PendaftaranPasienBaruComponent } from "./pages/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.component";
import { PribadiComponent } from "./pages/IRJA/pendaftaran-pasien-baru/pribadi/pribadi.component";
import { DaftarPasienComponent } from './pages/IRJA/daftar-pasien/daftar-pasien.component';
import { AdmisiPasienRawatJalanComponent } from './pages/IRJA/admisi-pasien-rawat-jalan/admisi-pasien-rawat-jalan.component';
import { SetupKodeTarifComponent } from './pages/setup-data/setup-tarif/setup-kode-tarif/setup-kode-tarif.component';
import { GroupComponent } from './pages/setup-data/setup-tarif/setup-kode-tarif/group/group.component';
import { SubgroupComponent } from './pages/setup-data/setup-tarif/setup-kode-tarif/subgroup/subgroup.component';
import { TarifComponent } from './pages/setup-data/setup-tarif/setup-kode-tarif/tarif/tarif.component';
import { DataDokterComponent } from './pages/setup-data/setup-dokter/data-dokter/data-dokter.component';
import { PelayananPasienIrnaComponent } from './pages/IRNA/pelayanan-pasien-irna/pelayanan-pasien-irna.component';
import { AntrianPasienRawatJalanComponent } from './pages/IRJA/antrian-pasien-rawat-jalan/antrian-pasien-rawat-jalan.component';
import { DaftarUlangPasienComponent } from './pages/IRJA/daftar-ulang-pasien/daftar-ulang-pasien.component';
import { PendaftaranPasienBaruIrnaComponent } from './pages/IRNA/pendaftaran-pasien-baru-irna/pendaftaran-pasien-baru-irna.component';
import { SetupBahasaComponent } from './pages/setup-data/setup-bahasa/setup-bahasa.component';
import { SetupKebangsaanComponent } from './pages/setup-data/setup-kebangsaan/setup-kebangsaan.component';
import { SetupEtnisComponent } from './pages/setup-data/setup-etnis/setup-etnis.component';

const ngWizardConfig: NgWizardConfig = {
    theme: THEME.dots
};


@NgModule({
    declarations: [
        PendaftaranPasienBaruComponent,
        InfoComponent,
        OrangtuaComponent,
        PribadiComponent,
        DaftarPasienComponent,
        AdmisiPasienRawatJalanComponent,
        SetupKodeTarifComponent,
        GroupComponent,
        SubgroupComponent,
        TarifComponent,
        DataDokterComponent,
        PelayananPasienIrnaComponent,
        AntrianPasienRawatJalanComponent,
        DaftarUlangPasienComponent,
        PendaftaranPasienBaruIrnaComponent,
        SetupBahasaComponent,
        SetupKebangsaanComponent,
        SetupEtnisComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PisRoutingModule,
        SharedModule,
        ContextMenuModule,
        NgWizardModule.forRoot(ngWizardConfig),
    ],
    providers: [DatePipe],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PisModule { }
