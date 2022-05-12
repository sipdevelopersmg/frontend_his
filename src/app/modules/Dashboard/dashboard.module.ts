import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardPelayananComponent } from './pages/dashboard-pelayanan/dashboard-pelayanan.component';
import { DashboardPendapatanComponent } from './pages/dashboard-pendapatan/dashboard-pendapatan.component';
import { CardDashboardComponent } from './components/card/card-dashboard/card-dashboard.component';
import { FilterComponent } from './components/filter/filter.component';
import { BarChartComponent } from './components/chart/bar-chart/bar-chart.component';
import { NgChartsModule } from "ng2-charts";
import { ProgressChartComponent } from './components/chart/progress-chart/progress-chart.component';

@NgModule({
    declarations: [
        DashboardPelayananComponent,
        DashboardPendapatanComponent,
        CardDashboardComponent,
        FilterComponent,
        BarChartComponent,
        ProgressChartComponent
    ],
    imports: [
        DashboardRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        CoreModule,
        NgChartsModule,
    ],
    exports: [
        NgChartsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }