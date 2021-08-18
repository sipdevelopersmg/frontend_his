import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { MaterialManagementRoutingModule } from "./mm-routing.module";
import { SetupGrupItemComponent } from './pages/setup-data/setup-grup-item/setup-grup-item.component';
import { SetupPabrikComponent } from './pages/setup-data/setup-pabrik/setup-pabrik.component';
import { InputKontrakPengadaanComponent } from './pages/pemasukan/kontrak-pengadaan/input-kontrak-pengadaan/input-kontrak-pengadaan.component';
import { InputPOComponent } from './pages/pemasukan/PO/input-po/input-po.component';
import { InputPenerimaanComponent } from './pages/pemasukan/penerimaan/input-penerimaan/input-penerimaan.component';
import { InputReturComponent } from './pages/retur/input-retur/input-retur.component';
import { SetupSupplierComponent } from './pages/setup-data/setup-supplier/setup-supplier.component';
import { SetupSatuanComponent } from './pages/setup-data/setup-satuan/setup-satuan.component';
import { SetupGroupCoaComponent } from './pages/setup-data/setup-group-coa/setup-group-coa.component';

@NgModule({
    declarations: [
        SetupGrupItemComponent,
        SetupPabrikComponent,
        InputKontrakPengadaanComponent,
        InputPOComponent,
        InputPenerimaanComponent,
        InputReturComponent,
        SetupSupplierComponent,
        SetupSatuanComponent,
        SetupGroupCoaComponent,
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