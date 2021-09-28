import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContextMenuModule } from "@syncfusion/ej2-angular-navigations";
import { SharedModule } from "../shared/shared.module";
import { VerifikasiOrderLabComponent } from './pages/verifikasi-order-lab/verifikasi-order-lab.component';
import { OrderManagementRoutingModule } from './om-routing.module';
import { VerifikasiOrderRadComponent } from './pages/verifikasi-order-rad/verifikasi-order-rad.component';

@NgModule({
    declarations: [
        VerifikasiOrderLabComponent,
        VerifikasiOrderRadComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        ContextMenuModule,
        OrderManagementRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrderManagementModule { }