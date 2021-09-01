import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { BillingRoutingModule } from "./billing-routing.module";
import { SetupTarifComponent } from './pages/setup-data/setup-tarif/setup-tarif.component';
import { SetupGrupTarifComponent } from './pages/setup-data/setup-grup-tarif/setup-grup-tarif.component';
import { SetupKelompokTarifComponent } from './pages/setup-data/setup-kelompok-tarif/setup-kelompok-tarif.component';

@NgModule({
    declarations: [
        SetupTarifComponent,
        SetupGrupTarifComponent,
        SetupKelompokTarifComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        BillingRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BillingModule { }