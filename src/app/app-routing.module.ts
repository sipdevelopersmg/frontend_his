import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule),
    },
    {
        path: "dashboard",
        loadChildren: () => import("./modules/core/core.module").then(m => m.CoreModule),
    },
    {
        path: "Dokter",
        loadChildren: () => import("./modules/dashboard-dokter/dashboard-dokter.module").then(m => m.DashboardDokterModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
