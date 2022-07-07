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
    vital_sign?: any;
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

    SelectedVitalSign: any;

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
                vital_sign: {
                    id_vital_sign: 15,
                    tinggi_badan_cm: 160,
                    berat_badan_kg: 50,
                    suhu_badan_celcius: 36.5,
                    tekanan_darah_atas: 110,
                    tekanan_darah_bawah: 90,
                    saturasi_oksigen: 90,
                    denyut_nadi_per_menit: 90,
                    respirasi_nafas_per_menit: 120,
                    keterangan: "SEHAT",
                    tanggal_periksa: new Date('04-02-2022')
                },
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
                ],
                vital_sign: {
                    id_vital_sign: 15,
                    tinggi_badan_cm: 160,
                    berat_badan_kg: 50,
                    suhu_badan_celcius: 38.5,
                    tekanan_darah_atas: 112,
                    tekanan_darah_bawah: 95,
                    saturasi_oksigen: 95,
                    denyut_nadi_per_menit: 90,
                    respirasi_nafas_per_menit: 120,
                    keterangan: "SEHAT",
                    tanggal_periksa: new Date('05-02-2022')
                },
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
                ],
                vital_sign: {
                    id_vital_sign: 15,
                    tinggi_badan_cm: 160,
                    berat_badan_kg: 50,
                    suhu_badan_celcius: 35,
                    tekanan_darah_atas: 105,
                    tekanan_darah_bawah: 80,
                    saturasi_oksigen: 95,
                    denyut_nadi_per_menit: 90,
                    respirasi_nafas_per_menit: 120,
                    keterangan: "",
                    tanggal_periksa: new Date()
                },
            },
        ];
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
                this.router.navigateByUrl('Dokter/visit-pasien');
                break;
            default:
                break;
        }
    }

    toggleSelectedData(type: string, data: ITimelineHistory): void {
        switch (type) {
            case 'all':
                this.SelectedLabRad = data.hasil_lab_rad ? data.hasil_lab_rad : null;
                this.SelectedResep = data.resep ? data.resep : null;
                this.SelectedVitalSign = data.vital_sign ? data.vital_sign : null;
                break;
            case 'resep':
                this.SelectedLabRad = null;
                this.SelectedResep = data.resep;
                this.SelectedVitalSign = data.vital_sign ? data.vital_sign : null;
                break;
            case 'lab_rad':
                this.SelectedResep = null;
                this.SelectedLabRad = data.hasil_lab_rad;
                this.SelectedVitalSign = data.vital_sign ? data.vital_sign : null;
                break;
            default:
                break;
        };

        this.changeStateActive(data);
    }

    changeStateActive(data: ITimelineHistory): void {
        const elemTimelineCircle = document.getElementById(`${data.id}_timeline_circle`) as HTMLElement;
        const elemTextDate = document.getElementById(`${data.id}_text_date`) as HTMLElement;
        const elemTimelineCardContent = document.getElementById(`${data.id}_timeline_card_content`) as HTMLElement;

        this.Timeline.forEach((item) => {
            if (item.id != data.id) {
                const otherTimelineCircleEl = document.getElementById(`${item.id}_timeline_circle`) as HTMLElement;
                const otherTextDateEl = document.getElementById(`${item.id}_text_date`) as HTMLElement;
                const otherTimelineCardContentEl = document.getElementById(`${item.id}_timeline_card_content`) as HTMLElement;

                if (otherTimelineCircleEl.classList.contains('active')) {
                    otherTimelineCircleEl.classList.remove('active');
                };

                if (otherTextDateEl.classList.contains('active')) {
                    otherTextDateEl.classList.remove('active');
                };

                if (otherTimelineCardContentEl.classList.contains('active')) {
                    otherTimelineCardContentEl.classList.remove('active');
                };

            } else {
                elemTimelineCircle.classList.add('active');
                elemTextDate.classList.add('active');
                elemTimelineCardContent.classList.add('active');
            }
        });
    }
}
