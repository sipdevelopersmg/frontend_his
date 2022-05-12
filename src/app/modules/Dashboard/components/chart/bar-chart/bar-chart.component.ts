import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

    @Input('Datasource') Datasource: ChartConfiguration['data'];

    Type: any = 'bar';

    Options: ChartConfiguration['options'] = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2
            }
        },
        scales: {
            x: {},
            y: { min: 10 }
        },
        plugins: {
            legend: { display: true, position: 'bottom' },
        },
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1
    }

    constructor() { }

    ngOnInit(): void {
    }

}
