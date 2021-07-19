import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { slideInAnimation } from './helpers/animations/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [slideInAnimation]
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'DASHBOARD-TEMPLATE';

    constructor(
        private router: Router,
        private titleService: Title,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // ... Untuk mensetting Page Title berdasarkan parameter {data} di app-routing.module
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
        ).subscribe(() => {
            const routeData = this.getChild(this.activatedRoute);

            routeData.data.subscribe((data: any) => {
                localStorage.setItem('PageTitle', data.title);

                this.titleService.setTitle(data.title);
            })
        });

        sessionStorage.setItem('tes', '123');
    }

    getChild(activatedRoute: ActivatedRoute): any {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        } else {
            return activatedRoute;
        }
    }

    prepareRoute(outlet: RouterOutlet): any {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }

    ngOnDestroy(): void {
        localStorage.clear();
        sessionStorage.clear();
    }
}
