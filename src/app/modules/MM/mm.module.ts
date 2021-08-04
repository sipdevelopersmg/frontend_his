import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { MaterialManagementRoutingModule } from "./mm-routing.module";
import { SetupGrupItemComponent } from './pages/setup-data/setup-grup-item/setup-grup-item.component';
import { SetupPabrikComponent } from './pages/setup-data/setup-pabrik/setup-pabrik.component';
import { InputKontrakPengadaanComponent } from './pages/kontrak-pengadaan/input-kontrak-pengadaan/input-kontrak-pengadaan.component';

@NgModule({
    declarations: [
        SetupGrupItemComponent,
        SetupPabrikComponent,
        InputKontrakPengadaanComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        MaterialManagementRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialManagementModule { }