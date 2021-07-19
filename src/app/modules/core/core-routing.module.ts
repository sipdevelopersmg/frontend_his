import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { BerandaComponent } from "./pages/beranda/beranda.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ExmpleMasterComponent } from "./pages/exmple-master/exmple-master.component";

const coreRoutes: Routes = [
    {
        path: "", component: DashboardComponent, children: [
            { path: "beranda", component: BerandaComponent, data: { title: "Beranda" } },
            { path: "example", component: ExmpleMasterComponent, data: { title: "Example" } },
            { path: "about", component: AboutComponent, data: { title: "About" } },
            {
                path: "PIS",
                loadChildren: () => import("../PIS/pis.module").then(m => m.PisModule),
            },
            {
                path: "MM",
                loadChildren: () => import("../MM/mm.module").then(m => m.MaterialManagementModule),
            },
            {
                path: "Pharmacy",
                loadChildren: () => import("../Pharmacy/pharmacy.module").then(m => m.PharmacyModule),
            }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(coreRoutes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }