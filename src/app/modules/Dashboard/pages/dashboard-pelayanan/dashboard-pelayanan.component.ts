import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { CardDashboard } from '../../components/card/card-dashboard/card-dashboard.component';
import { FilterComponent } from '../../components/filter/filter.component';

@Component({
    selector: 'app-dashboard-pelayanan',
    templateUrl: './dashboard-pelayanan.component.html',
    styleUrls: ['./dashboard-pelayanan.component.css']
})
export class DashboardPelayananComponent implements OnInit {

    ButtonNav: ButtonNavModel[] = [
        { Id: "filter", Icons1: 'fa-search', Captions: '[F3] Filter' },
    ];

    @ViewChild('FilterDashboardComps') FilterDashboardComps: FilterComponent

    CardDashboard: CardDashboard[] = [];

    ChartKunjunganByCaraBayar: ChartConfiguration['data'];
    ChartRawatJalan: ChartConfiguration['data'];
    ChartRawatInap: ChartConfiguration['data'];
    ChartRawatDarurat: ChartConfiguration['data'];

    ChartKunjunganByJenisPasien: ChartConfiguration['data'] = {
        datasets: [
            {
                label: 'Population',
                type: 'doughnut',
                data: [350, 150],
                backgroundColor: ['#5283ff', '#9f9f9f'],
                borderColor: ['#ffffff', '#ffffff'],
                rotation: Math.PI / 2,
                borderWidth: 0,
                borderJoinStyle: 'round',
                hoverBackgroundColor: ['#5283ff', '#9f9f9f']
            }
        ],
    }

    ChartBedOccupationRate: ChartConfiguration['data'] = {
        datasets: [
            {
                label: 'Population',
                type: 'doughnut',
                data: [500, 150],
                backgroundColor: ['#5283ff', '#9f9f9f'],
                borderColor: ['#ffffff', '#ffffff'],
                rotation: Math.PI / 2,
                borderWidth: 0,
                borderJoinStyle: 'round',
                hoverBackgroundColor: ['#5283ff', '#9f9f9f']
            }
        ],
    }

    constructor() { }

    ngOnInit(): void {
        this.CardDashboard = [
            {
                id: 1,
                title: 'Total Kunjungan',
                value: '500',
                satuan: 'Pasien'
            },
            {
                id: 2,
                title: 'Kunjungan Rawat Jalan',
                value: '250',
                satuan: 'Pasien'
            },
            {
                id: 3,
                title: 'Kunjungan Rawat Inap',
                value: '150',
                satuan: 'Pasien'
            },
            {
                id: 4,
                title: 'Kunjungan Rawat Darurat',
                value: '50',
                satuan: 'Pasien'
            },
        ];

        this.ChartKunjunganByCaraBayar = {
            datasets: [
                {
                    label: 'BPJS',
                    data: [380],
                    borderRadius: 5,
                },
                {
                    label: 'UMUM',
                    data: [120],
                    borderRadius: 5,
                }
            ],
            labels: ['']
        }
        this.ChartRawatJalan = {
            datasets: [
                {
                  data: [150],
                  label : "VCT",
                  borderRadius: 5,
                },
                {
                  data: [200], 
                  label : "TB DOTS",
                  borderRadius: 5,
                },
                {
                  data: [100],
                  label : "DALAM",
                  borderRadius: 5,
                  
                },
                {
                 
                  data: [50],
                  label : "KANDUNGAN",
                  borderRadius: 5,
                  
                },
                {
                 
                  data: [180],
                  label : "SARAF",
                  borderRadius: 5,
                  
                },
                {
                  data: [120],
                  label : "ANAK",
                  borderRadius: 5,
                },
                {
                  data: [18],
                  
                  label : "GIZI",
                  borderRadius: 5,
                  
                },
                {
                 
                  data: [1],
                  
                  label : "RENCANA OBTRADKOMPLEMENTER",
                  borderRadius: 5,
                  
                },
                {
                 
                  data: [15],
                  
                  label : "CDC",
                  borderRadius: 5,
                  
                },
                {
                 
                  data: [6],
                  
                  label : "TRANSIT KEMOTERAPI",
                  borderRadius: 5,
                  
                },
                {
                 
                  data: [3],
                  
                  label : "JANTUNG",
                  borderRadius: 5,
                  
                },
                {
                 
                  data: [20],
                  
                  label : "PENYAKIT DALAM KHUSUS",
                  borderRadius: 5,
                  
                },
                {
                 
                  data: [60],
                  
                  label : "GIGI PRIVAT",
                  borderRadius: 5,
                  
                },
                {
                 
                  data: [100],
                  
                  label : "GIGI DAN MULUT",
                  borderRadius: 5,
                  
                },
                {
                 
                  data: [130],
                  
                  label : "KULIT & KELAMIN",
                  borderRadius: 5,
                  
                },
                {
                 
                  data: [60],
                  
                  label : "KLINIK KOSMETIK MEDIK",
                  borderRadius: 5,
                  
                },
                {
                  data: [15],
                  label : "MATA",
                  borderRadius: 5,
                },
                {
                  data: [100],
                  label : "POLI UNTI TPKP",
                  borderRadius: 5,
                  
                }
              ],
            labels: ['']
        }
        this.ChartRawatInap ={
            datasets: [
                {
                    data: [11],
                    label : "P.RAJAWALI 2B - BEDAH PRIA",
                    borderRadius: 5,
                    
                  },
                  {
                    label : "P.RAJAWALI 3A - NON BEDAH NON INFEKSI WANITA",
                    borderRadius: 5,
                    data: [130],
                    
                  },
                  {
                    label : "RAJAWALI",
                    borderRadius: 5,
                    data: [40],
                    
                  },
                  {
                    label : "BEDAH PRIA",
                    borderRadius: 5,
                    data: [50],
                    
                  },
                  {
                    label : "MATA",
                    borderRadius: 5,
                    data: [17],
                    
                  },
                  {
                    
                    label : "EMERGING INF. DESEASE",
                    borderRadius: 5,
                    data: [11],
                    
                  },
                  {
                    
                    label : "P.RAJAWALI 1A - HCU",
                    borderRadius: 5,
                    data: [19],
                    
                  },
                  {
                    
                    label : "P.RAJAWALI 1B - BEDAH PRIA",
                    borderRadius: 5,
                    data: [40],
                    
                  },
                  {
                    
                    label : "P.RAJAWALI 1A - TINDAKAN",
                    borderRadius: 5,
                    data: [12],
                    
                  },
                  {
                   
                    label : "P.RAJAWALI 2A - BEDAH WANITA",
                    borderRadius: 5,
                    data: [5],
                    
                  },
                  {
                    
                    label : "P.RAJAWALI 3B - NON BEDAH NON INFEKSI PRIA",
                    borderRadius: 5,
                    data: [43],
                    
                  },
                  {
                    
                    label : "P.RAJAWALI 4A - KANKER WANITA",
                    borderRadius: 5,
                    data: [3],
                    
                  },
                  {
                    
                    label : "P.RAJAWALI 4B - KANKER WANITA",
                    borderRadius: 5,
                    data: [18],
                    
                  },
                  {
                    
                    label : "P.RAJAWALI 5A - KANKER PRIA",
                    borderRadius: 5,
                    data: [80],
                    
                  },
                  {
                    
                    label : "P.RAJAWALI 5B - KANKER WANITA",
                    borderRadius: 5,
                    data: [15],
                  },
                  {
                    label : "P.RAJAWALI 6A - NON BEDAH INFEKSI WANITA",
                    borderRadius: 5,
                    data: [33],
                  },
                  {
                    label : "P.RAJAWALI 6B - NON BEDAH INFEKSI PRIA",
                    borderRadius: 5,
                    data: [81],
                  }
            ],
            labels: ['']
        }
        this.ChartRawatDarurat ={
            datasets: [
                {
                    data: [11],
                    label : "IRDA ANAK",
                    borderRadius: 100,
                    
                },
                {
                    label : "IRDA BEDAH",
                    borderRadius: 5,
                    data: [130],
                
                },
                {
                    label : "IRDA MATA",
                    borderRadius: 5,
                    data: [40],
                
                }
            ],
            labels: ['']
        }
    }

    handleClickButtonNav(args: any): void {
        if (args == 'filter') {
            this.FilterDashboardComps.handleOpenFilter();
        }
    }

    handlePencarianFilter(args: any): void {
        console.log(args);
    }
}
