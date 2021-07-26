import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CoreRoutingModule } from "./core-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BerandaComponent } from "./pages/beranda/beranda.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { ExmpleMasterComponent } from "./pages/exmple-master/exmple-master.component";

import { AtmTreeviewMenuComponent } from "./components/sidebar/treeview-menu/atm-treeview-menu.component";
import { AtmNavbarComponent } from "./components/navbar/navbar.component";
import { AtmSingleMenuComponent } from "./components/main-menu/single-menu/single-menu.component";

import { MolTopMenuComponent } from "./components/top-menu/top-menu.component";
import { MolSidebarComponent } from "./components/sidebar/sidebar.component";
import { MolMainMenuComponent } from "./components/main-menu/main-menu.component";

@NgModule({
    declarations: [
        DashboardComponent,
        BerandaComponent,
        PageNotFoundComponent,
        ExmpleMasterComponent,
        AtmNavbarComponent,
        AtmTreeviewMenuComponent,
        AtmSingleMenuComponent,
        MolSidebarComponent,
        MolTopMenuComponent,
        MolMainMenuComponent
    ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }