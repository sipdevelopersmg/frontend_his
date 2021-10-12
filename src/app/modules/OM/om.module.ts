import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContextMenuModule } from "@syncfusion/ej2-angular-navigations";
import { SharedModule } from "../shared/shared.module";
import { VerifikasiOrderLabComponent } from './pages/verifikasi-order-lab/verifikasi-order-lab.component';
import { OrderManagementRoutingModule } from './om-routing.module';
import { VerifikasiOrderRadComponent } from './pages/verifikasi-order-rad/verifikasi-order-rad.component';
import { SetupPetugasComponent } from './pages/setup-data/setup-petugas/setup-petugas.component';
import { InputHasilRadiologiComponent } from './pages/input-hasil-radiologi/input-hasil-radiologi.component';
import { DetailHasilRadiologiComponent } from './pages/input-hasil-radiologi/detail-hasil-radiologi/detail-hasil-radiologi.component';
import { HtmlEditorService, ImageService, LinkService, RichTextEditorModule, ToolbarService } from "@syncfusion/ej2-angular-richtexteditor";

@NgModule({
    declarations: [
        VerifikasiOrderLabComponent,
        VerifikasiOrderRadComponent,
        SetupPetugasComponent,
        InputHasilRadiologiComponent,
        DetailHasilRadiologiComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        ContextMenuModule,
        OrderManagementRoutingModule,
        RichTextEditorModule,
    ],
    providers: [
        ToolbarService,
        LinkService,
        ImageService,
        HtmlEditorService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrderManagementModule { }