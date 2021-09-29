import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { DashboardDokterService } from '../../services/dashboard-dokter.service';

@Component({
    selector: 'app-assesmen-awal',
    templateUrl: './assesmen-awal.component.html',
    styleUrls: ['./assesmen-awal.component.css']
})
export class AssesmenAwalComponent implements OnInit, AfterViewInit {

    StepperDatasource: any[];

    constructor(
        private navigationService: NavigationService,
        private dashboardDokterService: DashboardDokterService,
    ) { }

    ngOnInit(): void {
        this.dashboardDokterService.onSetSidebarMenuForDashboardDokter();

        this.onSetStepperDatasource();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.navigationService.ButtonSidebarMenuState.next(true);
        }, 1);
    }

    onSetStepperDatasource(): void {
        this.StepperDatasource = [
            {
                id: 1,
                tgl_riwayat_pemeriksaan: new Date('09/10/2021'),
                riwayat_penyakit: {
                    value: 'RIWAYAT PENYAKIT 1'
                },
                riwayat_penyakit_lain: {
                    value: 'RIWAYAT PENYAKIT LAIN 1'
                },
                riwayat_operasi: {
                    value: 'RIWAYAT OPERASI 1'
                },
                rekonsiliasi_obat: {
                    value: 'REKONSILIASI OBAT 1'
                },
                pemeriksaan_penunjang: {
                    value: 'PEMERIKSAAN PENUNJANG 1'
                },
                pemeriksaan_fisik: {
                    value: 'PEMERIKSAAN FISIK 1'
                },
                informasi_tambahan: {
                    value: 'INFORMASI TAMBAHAN 1'
                },
                daftar_masalah_medis: {
                    value: 'DAFTAR MASALAH MEDIS 1'
                },
            },
            {
                id: 2,
                tgl_riwayat_pemeriksaan: new Date('09/13/2021'),
                riwayat_penyakit: {
                    value: 'RIWAYAT PENYAKIT 2'
                },
                riwayat_penyakit_lain: {
                    value: 'RIWAYAT PENYAKIT LAIN 2'
                },
                riwayat_operasi: {
                    value: 'RIWAYAT OPERASI 2'
                },
                rekonsiliasi_obat: {
                    value: 'REKONSILIASI OBAT 2'
                },
                pemeriksaan_penunjang: {
                    value: 'PEMERIKSAAN PENUNJANG 2'
                },
                pemeriksaan_fisik: {
                    value: 'PEMERIKSAAN FISIK 2'
                },
                informasi_tambahan: {
                    value: 'INFORMASI TAMBAHAN 2'
                },
                daftar_masalah_medis: {
                    value: 'DAFTAR MASALAH MEDIS 2'
                },
            },
        ]
    }
}
