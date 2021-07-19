import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './modules/core/pages/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: "",
        loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule),
    },
    {
        path: "dashboard",
        loadChildren: () => import("./modules/core/core.module").then(m => m.CoreModule),
    },
    { path: "**", component: PageNotFoundComponent, data: { title: 'Page Not Found' } },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
