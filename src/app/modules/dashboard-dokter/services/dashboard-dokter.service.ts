import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SidebarMenuModel } from '../../core/models/navigation/menu.model';
import { NavigationService } from '../../shared/services/navigation.service';

@Injectable({
    providedIn: 'root'
})
export class DashboardDokterService {

    ShowInformasiPasien = new BehaviorSubject(false);
    ShowInformasiPasien$ = this.ShowInformasiPasien.asObservable();

    constructor(private navigationService: NavigationService) { }

    onSetSidebarMenuForDashboardDokter(): void {
        const sidebarMenu: SidebarMenuModel[] = [
            {
                button: [],
                caption: "Diagnosa (Dx)",
                fieldgrid: [],
                icon: "fas fa-diagnoses",
                id_menu_sidebar: 0,
                id_menu_sidebar_parent: 0,
                id_top_menu: 0,
                is_parent: true,
                childSidebarMenu: [],
                url: "Dokter/diagnosa"
            },
            {
                button: [],
                caption: "Resep (Rx)",
                fieldgrid: [],
                icon: "fas fa-file-prescription",
                id_menu_sidebar: 0,
                id_menu_sidebar_parent: 0,
                id_top_menu: 0,
                is_parent: true,
                childSidebarMenu: [],
                url: "Dokter/resep"
            },
            {
                button: [],
                caption: "Radiologi",
                fieldgrid: [],
                icon: "fas fa-binoculars",
                id_menu_sidebar: 0,
                id_menu_sidebar_parent: 0,
                id_top_menu: 0,
                is_parent: true,
                childSidebarMenu: [],
                url: "Dokter/radiologi/riwayat-pemeriksaan"
            },
            {
                button: [],
                caption: "Laboratorium",
                fieldgrid: [],
                icon: "fas fa-flask",
                id_menu_sidebar: 0,
                id_menu_sidebar_parent: 0,
                id_top_menu: 0,
                is_parent: true,
                childSidebarMenu: [],
                url: "Dokter/laboratorium/riwayat-pemeriksaan"
            },
        ];

        localStorage.setItem('ActiveSidebarMenu', JSON.stringify(sidebarMenu));

        this.navigationService.onSetActiveSidebarMenuSubject(JSON.parse(localStorage.getItem('ActiveSidebarMenu')));
    }

    onSetSidebarMenuTitle(): void {
        this.navigationService.onSetMainMenuTitle('Dashboard Dokter')
    }
}
