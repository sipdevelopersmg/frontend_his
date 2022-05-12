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
