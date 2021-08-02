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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
