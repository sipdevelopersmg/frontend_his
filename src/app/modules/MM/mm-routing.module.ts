import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InputKontrakPengadaanComponent } from "./pages/kontrak-pengadaan/input-kontrak-pengadaan/input-kontrak-pengadaan.component";
import { SetupGrupItemComponent } from "./pages/setup-data/setup-grup-item/setup-grup-item.component";
import { SetupPabrikComponent } from "./pages/setup-data/setup-pabrik/setup-pabrik.component";

const mmRoutes: Routes = [
    {
        path: "setup-data", component: null, data: { title: "Setup Data" },
        children: [
            { path: "setup-grup-item", component: SetupGrupItemComponent, data: { title: "Setup Grup Item" } },
            { path: "setup-pabrik", component: SetupPabrikComponent, data: { title: "Setup Pabrik" } },
        ],
    },
    {
        path: "kontrak-pengadaan", component: null, data: {title:"Input Kontrak Pengadaan"},
        children:[
            { path: "input-kontrak-pengadaan", component: InputKontrakPengadaanComponent, data: { title: "Input Kontrak Pengadaan" } },
        ],
    }
]

@NgModule({
    imports: [RouterModule.forChild(mmRoutes)],
    exports: [RouterModule]
})
export class MaterialManagementRoutingModule { }