import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-progress-chart',
    templateUrl: './progress-chart.component.html',
    styleUrls: ['./progress-chart.component.css']
})
export class ProgressChartComponent implements OnInit {

    @ViewChild(BaseChartDirective) Chart: BaseChartDirective;

    @Input('Datasource') Datasource: ChartConfiguration['data'];

    @Input('Caption') Caption: string = "Kunjungan";

    Type: ChartConfiguration['type'] = "doughnut";

    Options: any = {
        cutout: 80,
        maintainAspectRatio: false,
        responsive: true,
        aspectRatio: 1,
        plugins: {
            tooltip: {
                filter: tooltipItem => tooltipItem['index'] == 0
            },
            legend: {
                display: false
            },
        }
    };

    Plugins: ChartConfiguration['plugins'] = [
        {
            id: 'plugin1',
            beforeInit: (chart) => {
                const dataset = chart.data.datasets[0];
                chart.data.labels = [dataset.label];
                let total = parseInt(dataset.data[0] as any) + parseInt(dataset.data[1] as any);
                dataset.data = [total - (dataset.data[0] as any), total - (dataset.data[1] as any)];
            },
            beforeDraw: (chart) => {
                let width = chart.width;
                let height = chart.height;
                let ctx = chart.ctx;

                ctx.restore();

                let fontSize = 1;
                ctx.font = fontSize + "em sans-serif";
                ctx.fillStyle = "#9b9b9b";
                ctx.textBaseline = "middle";

                let total: any;

                if (this.Caption !== 'Kunjungan') {
                    total = Math.round(((chart.data.datasets[0].data[1] as any) / (chart.data.datasets[0].data[0] as any)) * 100);

                    let text = total + ' ' + this.Caption,
                        textX = Math.round((width - ctx.measureText(text).width) / 2),
                        textY = height / 2;
                    ctx.fillText(text, textX, textY);
                    ctx.save();
                } else {

                    total = (chart.data.datasets[0].data[0] as any) + (chart.data.datasets[0].data[1] as any);

                    let text = total.toString(),
                        textX = Math.round((width - ctx.measureText(text).width) / 2),
                        textY = height / 2.2;
                    ctx.fillText(text, textX, textY);

                    let text2 = "Kunjungan",
                        text2X = Math.round((width - ctx.measureText(text2).width) / 2),
                        text2Y = height / 1.8;
                    ctx.fillText('Kunjungan', text2X, text2Y);
                    ctx.save();
                }
            },
        }
    ];

    screenWidth: any;

    @HostListener("window:resize", ['$event'])
    private onResize(event: any) {
        this.onDetectScreenSize(event.srcElement.innerWidth);
    }

    constructor() { }

    ngOnInit(): void {
        this.onDetectScreenSize(window.innerWidth);
    }

    onDetectScreenSize(screenWidth: any): void {
        this.screenWidth = screenWidth;

        if (screenWidth >= 1920) {
            this.Options.cutout = 100;
        } else {
            this.Options.cutout = 80;
        };

        setTimeout(() => {
            this.Chart.options['cutout'] = this.Options.cutout;
            this.Chart.ngOnChanges({});
        }, 250);
    }
}
