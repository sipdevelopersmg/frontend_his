import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DashboardDokterService } from '../dashboard-dokter/services/dashboard-dokter.service';

@Component({
    selector: 'app-dashboard-dokter-v2',
    templateUrl: './dashboard-dokter-v2.component.html',
    styleUrls: ['./dashboard-dokter-v2.component.css']
})
export class DashboardDokterV2Component implements OnInit {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private dashboardDokterService: DashboardDokterService,
    ) { }

    ngOnInit(): void {
    }

    componentAdded(args: any): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            const routeData = this.getChild(this.activatedRoute);

            // ** Header Ribbon Hide ketika di halaman Beranda
            routeData.data.subscribe((data: any) => {
                if (data.title === 'Beranda Dokter' || data.title === "Daftar Pasien") {
                    this.dashboardDokterService.ShowInformasiPasien.next(true);
                } else {
                    this.dashboardDokterService.ShowInformasiPasien.next(false);
                }
            });
        })
    }

    getChild(activatedRoute: ActivatedRoute): any {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        }
        else {
            return activatedRoute;
        }
    }
}
