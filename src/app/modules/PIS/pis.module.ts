import { CommonModule, DatePipe, TitleCasePipe } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, Injectable, NgModule } from "@angular/core";
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
import { AntrianPasienRawatJalanComponent } from './pages/IRJA/antrian-pasien-rawat-jalan/antrian-pasien-rawat-jalan.component';
import { DaftarUlangPasienComponent } from './pages/IRJA/daftar-ulang-pasien/daftar-ulang-pasien.component';
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
import { SetupCutiDokterComponent } from './pages/setup-data/setup-cuti-dokter/setup-cuti-dokter.component';
import { SetupMappingTarifOrderPenunjangComponent } from './pages/setup-data/setup-mapping-tarif-order-penunjang/setup-mapping-tarif-order-penunjang.component';
import { SetupGrupPenunjangComponent } from './pages/setup-data/setup-grup-penunjang/setup-grup-penunjang.component';
import { AdmisiPasienRawatInapComponent } from './pages/IRNA/admisi-pasien-rawat-inap/admisi-pasien-rawat-inap.component';
import { PelayananPasienRawatInapComponent } from './pages/IRNA/admisi-pasien-rawat-inap/pelayanan-pasien-rawat-inap/pelayanan-pasien-rawat-inap.component';
import { ListPasienRawatInapComponent } from './pages/IRNA/admisi-pasien-rawat-inap/list-pasien-rawat-inap/list-pasien-rawat-inap.component';
import { SetupKategoriKamarComponent } from './pages/IRNA/setup-bed/setup-kategori-kamar/setup-kategori-kamar.component';
import { SetupKamarComponent } from './pages/IRNA/setup-bed/setup-kamar/setup-kamar.component';
import { SetupBedComponent } from './pages/IRNA/setup-bed/setup-bed/setup-bed.component';
import { SetupStatusBedComponent } from './pages/IRNA/setup-bed/setup-status-bed/setup-status-bed.component';
import { AntrianPemesananTempatTidurComponent } from './pages/IRNA/daftar-pemesanan-tempat-tidur/antrian-pemesanan-tempat-tidur/antrian-pemesanan-tempat-tidur.component';
import { AddAntrianTppriComponent } from './pages/IRNA/daftar-pemesanan-tempat-tidur/add-antrian-tppri/add-antrian-tppri.component';
import { CariPasienAntrianTppriComponent } from './pages/IRNA/admisi-pasien-rawat-inap/cari-pasien-antrian-tppri/cari-pasien-antrian-tppri.component';
import { ManagementBedRawatInapComponent } from './pages/IRNA/management-bed-rawat-inap/management-bed-rawat-inap.component';
import { AddPermintaanMutasiComponent } from './pages/IRNA/management-bed-rawat-inap/add-permintaan-mutasi/add-permintaan-mutasi.component';
import { ApprovePermintaanMutasiComponent } from './pages/IRNA/management-bed-rawat-inap/approve-permintaan-mutasi/approve-permintaan-mutasi.component';
import { BatalkanPermintaanMutasiComponent } from './pages/IRNA/management-bed-rawat-inap/batalkan-permintaan-mutasi/batalkan-permintaan-mutasi.component';
import { BatalkanMutasiComponent } from './pages/IRNA/management-bed-rawat-inap/batalkan-mutasi/batalkan-mutasi.component';
import { PemasukanRawatInapComponent } from './pages/IRNA/pemasukan-rawat-inap/pemasukan-rawat-inap.component';
import { UpdateStatusBedComponent } from './pages/IRNA/setup-bed/update-status-bed/update-status-bed.component';
import { RencanaPulangPasienComponent } from './pages/IRNA/rencana-pulang-pasien/rencana-pulang-pasien.component';
import { SuratPengantarPembayaranComponent } from './pages/IRNA/surat-pengantar-pembayaran/surat-pengantar-pembayaran.component';
import { DetailInfoKematianComponent } from './pages/IRNA/surat-pengantar-pembayaran/detail-info-kematian/detail-info-kematian.component';
import { BatalkanPengantarPembayaranComponent } from './pages/IRNA/surat-pengantar-pembayaran/batalkan-pengantar-pembayaran/batalkan-pengantar-pembayaran.component';
import { AdmisiPasienRawatDaruratComponent } from './pages/IRDA/admisi-pasien-rawat-darurat/admisi-pasien-rawat-darurat.component';
import { ListPasienRawatDaruratComponent } from './pages/IRDA/admisi-pasien-rawat-darurat/list-pasien-rawat-darurat/list-pasien-rawat-darurat.component';
import { PelayananPasienRawatDaruratComponent } from './pages/IRDA/admisi-pasien-rawat-darurat/pelayanan-pasien-rawat-darurat/pelayanan-pasien-rawat-darurat.component';
import { ListPasienRawatDaruratAnonimComponent } from './pages/IRDA/list-pasien-rawat-darurat-anonim/list-pasien-rawat-darurat-anonim.component';
import { PemasukanRawatDaruratComponent } from './pages/IRDA/pemasukan-rawat-darurat/pemasukan-rawat-darurat.component';
import { UpdatePasienTanpaIdentitasComponent } from './pages/IRDA/update-pasien-tanpa-identitas/update-pasien-tanpa-identitas.component';
import { TransferTagihanIrdaIrnaComponent } from './pages/IRDA/transfer-tagihan-irda-irna/transfer-tagihan-irda-irna.component';
import { TransferTagihanIrjaIrnaComponent } from './pages/IRJA/transfer-tagihan-irja-irna/transfer-tagihan-irja-irna.component';
import { InputAntrianRegulerComponent } from './pages/IRNA/antrian-reguler-rawat-inap/input-antrian-reguler/input-antrian-reguler.component';
import { UpdateAntrianRegulerComponent } from './pages/IRNA/antrian-reguler-rawat-inap/update-antrian-reguler/update-antrian-reguler.component';
import { DialogUpdateStatusTerjadwalComponent } from './pages/IRNA/antrian-reguler-rawat-inap/update-antrian-reguler/dialog-update-status-terjadwal/dialog-update-status-terjadwal.component';
import { DialogUpdateStatusBatalComponent } from './pages/IRNA/antrian-reguler-rawat-inap/update-antrian-reguler/dialog-update-status-batal/dialog-update-status-batal.component';
import { InputAntrianTerprogramComponent } from './pages/IRNA/antrian-terprogram-rawat-inap/input-antrian-terprogram/input-antrian-terprogram.component';
import { UpdateAntrianTerprogramComponent } from './pages/IRNA/antrian-terprogram-rawat-inap/update-antrian-terprogram/update-antrian-terprogram.component';
import { DialogUpdateStatusConfirmedComponent } from './pages/IRNA/antrian-terprogram-rawat-inap/update-antrian-terprogram/dialog-update-status-confirmed/dialog-update-status-confirmed.component';
import { DialogUpdateStatusCancelComponent } from './pages/IRNA/antrian-terprogram-rawat-inap/update-antrian-terprogram/dialog-update-status-cancel/dialog-update-status-cancel.component';
import { ListAntrianTerprogramComponent } from './pages/IRNA/antrian-terprogram-rawat-inap/list-antrian-terprogram/list-antrian-terprogram.component';
import { AgendaService, DayService, MonthAgendaService, MonthService, ScheduleModule, TimelineMonthService, TimelineViewsService, WeekService, WorkWeekService } from "@syncfusion/ej2-angular-schedule";
import { SocketIoConfig, SocketIoModule } from "ngx-socket-io";
import { webApi } from "src/environments/environment";
import { ListAntrianRegulerComponent } from './pages/IRNA/antrian-reguler-rawat-inap/list-antrian-reguler/list-antrian-reguler.component';

const ngWizardConfig: NgWizardConfig = {
    theme: THEME.dots
};

const SocketPIS: SocketIoConfig = {
    url: `${webApi}:4444`, options: {
        "transports": ["websocket"]
    }
}

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
        AntrianPasienRawatJalanComponent,
        DaftarUlangPasienComponent,
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
        SetupCutiDokterComponent,
        SetupMappingTarifOrderPenunjangComponent,
        SetupGrupPenunjangComponent,
        AdmisiPasienRawatInapComponent,
        PelayananPasienRawatInapComponent,
        ListPasienRawatInapComponent,
        SetupKategoriKamarComponent,
        SetupKamarComponent,
        SetupBedComponent,
        SetupStatusBedComponent,
        AntrianPemesananTempatTidurComponent,
        AddAntrianTppriComponent,
        CariPasienAntrianTppriComponent,
        ManagementBedRawatInapComponent,
        AddPermintaanMutasiComponent,
        ApprovePermintaanMutasiComponent,
        BatalkanPermintaanMutasiComponent,
        BatalkanMutasiComponent,
        PemasukanRawatInapComponent,
        UpdateStatusBedComponent,
        RencanaPulangPasienComponent,
        SuratPengantarPembayaranComponent,
        DetailInfoKematianComponent,
        BatalkanPengantarPembayaranComponent,
        AdmisiPasienRawatDaruratComponent,
        ListPasienRawatDaruratComponent,
        PelayananPasienRawatDaruratComponent,
        ListPasienRawatDaruratAnonimComponent,
        PemasukanRawatDaruratComponent,
        UpdatePasienTanpaIdentitasComponent,
        TransferTagihanIrdaIrnaComponent,
        TransferTagihanIrjaIrnaComponent,
        InputAntrianRegulerComponent,
        UpdateAntrianRegulerComponent,
        DialogUpdateStatusTerjadwalComponent,
        DialogUpdateStatusBatalComponent,
        InputAntrianTerprogramComponent,
        UpdateAntrianTerprogramComponent,
        DialogUpdateStatusConfirmedComponent,
        DialogUpdateStatusCancelComponent,
        ListAntrianTerprogramComponent,
        ListAntrianRegulerComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PisRoutingModule,
        SharedModule,
        ContextMenuModule,
        NgWizardModule.forRoot(ngWizardConfig),
        ScheduleModule,
        SocketIoModule.forRoot(SocketPIS),
    ],
    providers: [
        DatePipe,
        TitleCasePipe,
        DayService,
        WeekService,
        WorkWeekService,
        MonthService,
        AgendaService,
        MonthAgendaService,
        TimelineViewsService,
        TimelineMonthService,

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PisModule { }
