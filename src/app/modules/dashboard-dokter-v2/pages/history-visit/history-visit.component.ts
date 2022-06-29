import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDaftarPasienIRJAModel } from 'src/app/modules/dashboard-dokter/models/daftar_pasien.model';
import { DaftarPasienService } from 'src/app/modules/dashboard-dokter/services/daftar-pasien/daftar-pasien.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';

export interface ITimelineHistory {
    id: number;
    time: Date;
    kategori: string;
    dpjp: string;
    title: string;
    sub_title: string;
    hasil_lab_rad?: any[];
    diagnosa?: any[];
    resep?: any[];
}

@Component({
    selector: 'app-history-visit',
    templateUrl: './history-visit.component.html',
    styleUrls: ['./history-visit.component.css']
})
export class HistoryVisitComponent implements OnInit, AfterViewInit {

    ButtonNav: ButtonNavModel[];

    ActivePasien: IDaftarPasienIRJAModel;

    Timeline: ITimelineHistory[];

    SelectedLabRad: any[];

    SelectedResep: any[];

    constructor(
        private router: Router,
        private daftarPasienService: DaftarPasienService,
    ) {
        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];

        this.daftarPasienService.ActivePasien
            .subscribe((result) => {
                this.ActivePasien = result;
            });

        this.Timeline = [
            {
                id: 1,
                time: new Date('04-02-2022'),
                kategori: 'IRJA',
                dpjp: 'dr. Lalisa Manobal',
                title: 'Covid 19',
                sub_title: ` Test result: Negative
                <br>
                Test date: 02 Apr 2022
                <br>
                Status: Self-isolating
                <br>
                Risk Level: Low`,
            },
            {
                id: 2,
                time: new Date('05-02-2022'),
                kategori: 'IRJA',
                dpjp: 'dr. Lalisa Manobal',
                title: 'Drugs Screening Test',
                sub_title: ` Test result: Negative
                <br>
                Test date: 02 May 2022`,
                hasil_lab_rad: [
                    {
                        id: 1,
                        nama_pemeriksaan: 'AMPHETAMIN',
                        dokter_pemeriksa: 'dr. Lalisa Manoban',
                        tanggal: new Date('05-02-2022'),
                        deskripsi: ` Pada pengujian / analisis saat ini didapatkan hasil adalah
                        Negatif (-), benar tidak mengandung narkoba. Pengujian / analisis
                        golongan narkoba terdiri dari : Opiat, THC, Amfetamin, Metamfetamin,
                        Benzodiazepin dan Cocain.`,
                    }
                ]
            },
            {
                id: 3,
                time: new Date(),
                kategori: 'IRNA',
                dpjp: 'dr. Peter Parker',
                title: 'Malaria, unspecified',
                sub_title: `  Headaches
                <br>
                4 Days
                <br>
                Fever (38 C)
                <br>
                Sore Throat
                <br>
                Body aches`,
                diagnosa: [
                    { kode_icd: 'P37.3', nama_icd: 'Congenital falciparum malaria' },
                    { kode_icd: 'P37.3', nama_icd: 'Other congenital malaria' },
                ],
                resep: [
                    {
                        id: 1,
                        nama_obat: 'Artemisinin-based combination therapies (ACT)',
                        nama_rute_pemberian_obat: 'Oral',
                        qty: 1,
                        satuan: 'BIJI',
                        tambahan_aturan_pakai: 'Sebelum Makan'
                    },
                    {
                        id: 2,
                        nama_obat: 'Klorokuin',
                        nama_rute_pemberian_obat: 'Oral',
                        qty: 1,
                        satuan: 'BIJI',
                        tambahan_aturan_pakai: 'Sebelum Makan'
                    },
                    {
                        id: 3,
                        nama_obat: 'Paracetamol 500 mg',
                        nama_rute_pemberian_obat: 'Oral',
                        qty: 1,
                        satuan: 'BIJI',
                        tambahan_aturan_pakai: 'Sebelum Makan'
                    }
                ]
            },
        ]
    }

    ngOnInit(): void {
        console.log(this.ActivePasien)
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.Timeline.forEach((item) => {
                const subTitleEl = document.getElementById(`${item.id}_sub_title`) as HTMLElement;
                subTitleEl ? subTitleEl.innerHTML = item.sub_title : '';
            });
        }, 100);
    }

    handleClickButtonNav(id: string): void {
        switch (id) {
            case 'Back':
                this.router.navigateByUrl('visit-pasien');
                break;
            default:
                break;
        }
    }

    toggleSelectedData(type: string, data: any): void {
        switch (type) {
            case 'resep':
                this.SelectedLabRad = null;
                this.SelectedResep = data;
                break;
            case 'lab_rad':
                this.SelectedResep = null;
                this.SelectedLabRad = data;
                break;
            default:
                break;
        }
    }
}
