import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { AntrianFarmasiComponent } from './pages/Antrian/antrian-farmasi/antrian-farmasi.component';
import { PharmacyRoutingModule } from "./pharmacy-routing.module";

@NgModule({
    declarations: [
        AntrianFarmasiComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        PharmacyRoutingModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PharmacyModule { }