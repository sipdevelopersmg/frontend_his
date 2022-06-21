import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPasienComponent } from './pages/detail-pasien/detail-pasien.component';
import { HistoryVisitComponent } from './pages/history-visit/history-visit.component';
import { DashboardDokterModule } from '../dashboard-dokter/dashboard-dokter.module';
import { ListPasienComponent } from './pages/list-pasien/list-pasien.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardDokterV2Component } from './dashboard-dokter-v2.component';
import { DashboardDokterV2RoutingModule } from './dashboard-dokter-v2-routing.module';
import { CoreModule } from '../core/core.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PharmacyModule } from '../Pharmacy/pharmacy.module';

@NgModule({
    declarations: [
        DetailPasienComponent,
        HistoryVisitComponent,
        ListPasienComponent,
        DashboardDokterV2Component
    ],
    imports: [
        DashboardDokterV2RoutingModule,
        CommonModule,
        DashboardDokterModule,
        PharmacyModule,
        SharedModule,
        CoreModule,
        AccordionModule.forRoot(),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardDokterV2Module { }
