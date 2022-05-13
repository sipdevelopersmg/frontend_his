import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartConfiguration } from 'chart.js';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';

@Component({
    selector: 'app-detail-section',
    templateUrl: './detail-section.component.html',
    styleUrls: ['./detail-section.component.css']
})
export class DetailSectionComponent implements OnInit {

    Title: string;

    Data: ChartConfiguration['data'];

    ButtonNav: ButtonNavModel[] = [
        { Id: "back", Icons1: 'fa-chevron-left', Captions: 'Back' },
    ];

    IsKunjungan = false;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.paramMap
            .subscribe((result) => {
                this.Title = result.get('jenis');

                this.IsKunjungan = result.get('jenis').includes('Kunjungan');

                this.Data = JSON.parse(localStorage.getItem('CardDashboardData'));
            });
    }

    handleClickButtonNav(args: any): void {
        if (args == 'back') {
            if (this.IsKunjungan) {
                this.router.navigateByUrl('dashboard/Dashboard/Pelayanan/dashboard-pelayanan');
            } else {
                this.router.navigateByUrl('dashboard/Dashboard/Pendapatan/dashboard-pendapatan');
            }
        }
    }
}
