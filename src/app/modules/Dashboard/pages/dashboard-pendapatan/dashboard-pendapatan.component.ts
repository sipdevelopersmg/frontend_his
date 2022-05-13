import { formatNumber } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration } from 'chart.js';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { CardDashboard } from '../../components/card/card-dashboard/card-dashboard.component';
import { FilterComponent } from '../../components/filter/filter.component';

@Component({
    selector: 'app-dashboard-pendapatan',
    templateUrl: './dashboard-pendapatan.component.html',
    styleUrls: ['./dashboard-pendapatan.component.css']
})
export class DashboardPendapatanComponent implements OnInit {

    ButtonNav: ButtonNavModel[] = [
        { Id: "filter", Icons1: 'fa-search', Captions: '[F3] Filter' },
    ];

    @ViewChild('FilterDashboardComps') FilterDashboardComps: FilterComponent

    CardDashboard: CardDashboard[] = [];

    ChartPendapatanByCaraBayar: ChartConfiguration['data'];

    ChartPendapatanByJenisBayar: ChartConfiguration['data'];

    ChartRawatJalan: ChartConfiguration['data'];

    ChartRawatInap: ChartConfiguration['data'];

    ChartRawatDarurat: ChartConfiguration['data'];

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        this.CardDashboard = [
            {
                id: 1,
                title: 'Pendapatan Total',
                value: formatNumber(311553000, 'EN', ''),
                satuan: 'Rupiah'
            },
            {
                id: 2,
                title: 'Pendapatan Rawat Jalan',
                value: formatNumber(48851000, 'EN', ''),
                satuan: 'Rupiah'
            },
            {
                id: 3,
                title: 'Pendapatan Rawat Inap',
                value: formatNumber(153851000, 'EN', ''),
                satuan: 'Rupiah'
            },
            {
                id: 4,
                title: 'Pendapatan Rawat Darurat',
                value: formatNumber(108851000, 'EN', ''),
                satuan: 'Rupiah'
            },
        ];

        this.ChartPendapatanByCaraBayar = {
            datasets: [
                {
                    label: 'BPJS',
                    data: [207702000],
                    borderRadius: 5,
                },
                {
                    label: 'UMUM',
                    data: [103851000],
                    borderRadius: 5,
                }
            ],
            labels: ['']
        };

        this.ChartPendapatanByJenisBayar = {
            datasets: [
                {
                    label: 'AKOMODASI DAN KONSULTASI',
                    data: [207702000],
                    borderRadius: 5,
                },
                {
                    label: 'PELAYANAN RAWAT DARURAT',
                    data: [108851000],
                    borderRadius: 5,
                },
                {
                    label: 'RAWAT JALAN',
                    data: [48851000],
                    borderRadius: 5,
                },
                {
                    label: 'PENJUALAN RESEP',
                    data: [56801333],
                    borderRadius: 5,
                },
                {
                    label: 'RADIOTERAPI',
                    data: [6801333],
                    borderRadius: 5,
                },
                {
                    label: 'PERSALINAN DAN KURETASE',
                    data: [10801333],
                    borderRadius: 5,
                },
            ],
            labels: ['']
        };

        this.ChartRawatJalan = {
            datasets: [
                {
                    label: 'KONSULTASI',
                    data: [7702000],
                    borderRadius: 5,
                },
                {
                    label: 'RAWAT JALAN',
                    data: [48851000],
                    borderRadius: 5,
                },
                {
                    label: 'PENJUALAN RESEP',
                    data: [10801333],
                    borderRadius: 5,
                },
            ],
            labels: ['']
        };

        this.ChartRawatInap = {
            datasets: [
                {
                    label: 'AKOMODASI DAN KONSULTASI',
                    data: [10702000],
                    borderRadius: 5,
                },
                {
                    label: 'RADIOTERAPI',
                    data: [48851000],
                    borderRadius: 5,
                },
                {
                    label: 'PERSALINAN DAN KURETASE',
                    data: [10801333],
                    borderRadius: 5,
                },
            ],
            labels: ['']
        };

        this.ChartRawatDarurat = {
            datasets: [
                {
                    label: 'PELAYANAN RAWAT DARURAT',
                    data: [108851000],
                    borderRadius: 5,
                },
                {
                    label: 'PENJUALAN RESEP',
                    data: [56801333],
                    borderRadius: 5,
                },
            ],
            labels: ['']
        };
    }

    handleClickButtonNav(args: any): void {
        if (args == 'filter') {
            this.FilterDashboardComps.handleOpenFilter();
        }
    }

    handlePencarianFilter(args: any): void {
        console.log(args);
    }

    handleClickCard(args: CardDashboard): void {
        let data: any = {};

        switch (args.title) {
            case 'Pendapatan Total':
                break;
            case 'Pendapatan Rawat Jalan':
                data = this.ChartRawatJalan;
                break;
            case 'Pendapatan Rawat Inap':
                data = this.ChartRawatInap;
                break;
            case 'Pendapatan Rawat Darurat':
                data = this.ChartRawatDarurat;
                break;
        }

        if (args.title !== 'Pendapatan Total') {
            localStorage.setItem('CardDashboardData', JSON.stringify(data));
            this.router.navigate(['dashboard/Dashboard/Pendapatan/detail-pendapatan', args.title]);
        }
    }
}
