import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BerandaComponent } from "./pages/beranda/beranda.component";
import { ChangePasswordComponent } from "./pages/change-password/change-password.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { SetupRoleMenuComponent } from "./pages/setup-role-menu/setup-role-menu.component";
import { SetupRoleComponent } from "./pages/setup-role/setup-role.component";
import { SetupUserComponent } from "./pages/setup-user/setup-user.component";

const coreRoutes: Routes = [
    {
        path: "", component: DashboardComponent, children: [
            { path: "beranda", component: BerandaComponent, data: { title: "Beranda" } },
            { path: "setup-user", component: SetupUserComponent, data: { title: "Setup User" } },
            { path: "setup-role", component: SetupRoleComponent, data: { title: "Setup Role" } },
            { path: "setup-role-menu", component: SetupRoleMenuComponent, data: { title: "Setup Roles Menu" } },
            { path: "ganti-password", component: ChangePasswordComponent, data: { title: "Ganti Password" } },
            {
                path: "PIS",
                loadChildren: () => import("../PIS/pis.module").then(m => m.PisModule),
            },
            {
                path: "MM",
                loadChildren: () => import("../MM/mm.module").then(m => m.MaterialManagementModule),
            },
            {
                path: "MM_TE",
                loadChildren: () => import("../MM-TANPA-ED/mm.module").then(m => m.MaterialManagementTanpaEDModule),
            },
            {
                path: "Pharmacy",
                loadChildren: () => import("../Pharmacy/pharmacy.module").then(m => m.PharmacyModule),
            },
            {
                path: "Billing",
                loadChildren: () => import("../Billing/billing.module").then(m => m.BillingModule)
            },
            {
                path: "OM",
                loadChildren: () => import("../OM/om.module").then(m => m.OrderManagementModule)
            },
            {
                path: "Dashboard",
                loadChildren: () => import("../Dashboard/dashboard.module").then(m => m.DashboardModule)
            },
        ]
    },
    { path: "**", component: PageNotFoundComponent, data: { title: 'Page Not Found' } },
]

@NgModule({
    imports: [RouterModule.forChild(coreRoutes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }