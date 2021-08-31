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
import { SetupSatuanComponent } from './pages/setup-data/setup-satuan/setup-satuan.component';
import { SetupGroupCoaComponent } from './pages/setup-data/setup-group-coa/setup-group-coa.component';
import { SetupCoaComponent } from './pages/setup-data/setup-coa/setup-coa.component';
import { SetupPerencanaanKategoriComponent } from './pages/setup-data/setup-perencanaan-kategori/setup-perencanaan-kategori.component';
import { SetupTipeSupplierComponent } from './pages/setup-data/setup-tipe-supplier/setup-tipe-supplier.component';
import { SetupTipeStockroomComponent } from './pages/setup-data/setup-tipe-stockroom/setup-tipe-stockroom.component';
import { SetupTipeItemComponent } from './pages/setup-data/setup-tipe-item/setup-tipe-item.component';
import { SetupTemperaturItemComponent } from './pages/setup-data/setup-temperatur-item/setup-temperatur-item.component';
import { SetupSupplierComponent } from './pages/setup-data/setup-supplier/setup-supplier.component';
import { SetupItemComponent } from './pages/setup-data/setup-item/setup-item.component';
import { ListKontrakPengadaanComponent } from './pages/pemasukan/kontrak-pengadaan/list-kontrak-pengadaan/list-kontrak-pengadaan.component';

@NgModule({
    declarations: [
        SetupGrupItemComponent,
        SetupPabrikComponent,
        InputKontrakPengadaanComponent,
        InputPOComponent,
        InputPenerimaanComponent,
        InputReturComponent,
        SetupSatuanComponent,
        SetupGroupCoaComponent,
        SetupCoaComponent,
        SetupPerencanaanKategoriComponent,
        SetupTipeSupplierComponent,
        SetupTipeStockroomComponent,
        SetupTipeItemComponent,
        SetupTemperaturItemComponent,
        SetupSupplierComponent,
        SetupItemComponent,
        ListKontrakPengadaanComponent,
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