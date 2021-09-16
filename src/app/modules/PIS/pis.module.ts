import { CommonModule, DatePipe, TitleCasePipe } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { PisRoutingModule } from "./pis-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContextMenuModule } from "@syncfusion/ej2-angular-navigations";
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';

import { PendaftaranPasienBaruComponent } from "./pages/IRJA/pendaftaran-pasien-baru/input-pasien/pendaftaran-pasien-baru.component";
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
import { EditPasienIRJAComponent } from './pages/IRJA/pendaftaran-pasien-baru/edit-pasien/edit-pasien.component';
import { SetupJobTypeComponent } from './pages/setup-data/setup-job-type/setup-job-type.component';
import { SetupEducationComponent } from './pages/setup-data/setup-education/setup-education.component';
import { SetupSmfDokterComponent } from './pages/setup-data/setup-smf-dokter/setup-smf-dokter.component';
import { SetupStatusDokterComponent } from './pages/setup-data/setup-status-dokter/setup-status-dokter.component';
import { SetupSpesialiasiDokterComponent } from './pages/setup-data/setup-spesialiasi-dokter/setup-spesialiasi-dokter.component';
import { SetupKotaComponent } from './pages/setup-data/setup-wilayah/setup-kota/setup-kota.component';
import { SetupKecamatanComponent } from './pages/setup-data/setup-wilayah/setup-kecamatan/setup-kecamatan.component';
import { SetupProvinsiComponent } from "./pages/setup-data/setup-wilayah/setup-provinsi/setup-provinsi.component";
import { SetupDebiturComponent } from './pages/setup-data/setup-debitur/setup-debitur.component';
import { InputDokterComponent } from './pages/setup-data/setup-dokter/input-dokter/input-dokter.component';
import { EditDokterComponent } from './pages/setup-data/setup-dokter/edit-dokter/edit-dokter.component';
import { ListPasienRawatJalanComponent } from './pages/IRJA/admisi-pasien-rawat-jalan/list-pasien-rawat-jalan/list-pasien-rawat-jalan.component';
import { PelayananPasienRawatJalanComponent } from './pages/IRJA/admisi-pasien-rawat-jalan/pelayanan-pasien-rawat-jalan/pelayanan-pasien-rawat-jalan.component';
import { SetupAsalRujukanComponent } from './pages/setup-data/setup-asal-rujukan/setup-asal-rujukan.component';
import { SetupIcdDiagnosaComponent } from './pages/setup-data/setup-icd-diagnosa/setup-icd-diagnosa.component';
import { PemasukanRawatJalanComponent } from './pages/IRJA/pemasukan-rawat-jalan/pemasukan-rawat-jalan.component';
import { SetupJadwalDokterComponent } from './pages/setup-data/setup-jadwal-dokter/setup-jadwal-dokter.component';

const ngWizardConfig: NgWizardConfig = {
    theme: THEME.dots
};

@NgModule({
    declarations: [
        PendaftaranPasienBaruComponent,
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
        EditPasienIRJAComponent,
        SetupJobTypeComponent,
        SetupEducationComponent,
        SetupSmfDokterComponent,
        SetupStatusDokterComponent,
        SetupSpesialiasiDokterComponent,
        SetupProvinsiComponent,
        SetupKotaComponent,
        SetupKecamatanComponent,
        SetupDebiturComponent,
        InputDokterComponent,
        EditDokterComponent,
        ListPasienRawatJalanComponent,
        PelayananPasienRawatJalanComponent,
        SetupAsalRujukanComponent,
        SetupIcdDiagnosaComponent,
        PemasukanRawatJalanComponent,
        SetupJadwalDokterComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PisRoutingModule,
        SharedModule,
        ContextMenuModule,
        NgWizardModule.forRoot(ngWizardConfig)
    ],
    providers: [
        DatePipe,
        TitleCasePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PisModule { }
