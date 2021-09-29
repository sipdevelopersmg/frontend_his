import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SidebarMenuModel } from '../../core/models/navigation/menu.model';
import { HttpOperationService } from '../../shared/services/http-operation.service';
import { NavigationService } from '../../shared/services/navigation.service';
import { DaftarPasienService } from './daftar-pasien/daftar-pasien.service';
import * as API_CONFIG from '../../../api/DASHBOARD-DOKTER';
import { NotificationService } from '../../shared/services/notification.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponseModel } from '../../shared/models/Http-Operation/HttpResponseModel';

@Injectable({
    providedIn: 'root'
})
export class DashboardDokterService {

    API_CONFIG = API_CONFIG;

    ShowInformasiPasien = new BehaviorSubject(false);
    ShowInformasiPasien$ = this.ShowInformasiPasien.asObservable();

    constructor(
        private navigationService: NavigationService,
        private notificationService: NotificationService,
        private daftarPasienService: DaftarPasienService,
        private httpOperationService: HttpOperationService
    ) { }

    onSetSidebarMenuForDashboardDokter(): void {
        const sidebarMenu: SidebarMenuModel[] = [
            {
                button: [],
                caption: "Kembali",
                fieldgrid: [],
                icon: "fas fa-chevron-left",
                id_menu_sidebar: 0,
                id_menu_sidebar_parent: 0,
                id_top_menu: 0,
                is_parent: true,
                childSidebarMenu: [],
                url: "Dokter/daftar-pasien"
            },
            {
                button: [],
                caption: "Konsul",
                fieldgrid: [],
                icon: "fas fa-user-edit",
                id_menu_sidebar: 0,
                id_menu_sidebar_parent: 0,
                id_top_menu: 0,
                is_parent: true,
                childSidebarMenu: [],
                url: "Dokter/diagnosa"
            },
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
            {
                button: [],
                caption: "Alergi",
                fieldgrid: [],
                icon: "fas fa-allergies",
                id_menu_sidebar: 0,
                id_menu_sidebar_parent: 0,
                id_top_menu: 0,
                is_parent: true,
                childSidebarMenu: [],
                url: "Dokter/laboratorium/riwayat-pemeriksaan"
            },
            {
                button: [],
                caption: "Riwayat Visit",
                fieldgrid: [],
                icon: "fas fa-file-medical",
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

    onDestroySidebarMenuWhenNavigateToDaftarPasien(): void {
        localStorage.removeItem('ActiveSidebarMenu');

        this.navigationService.onSetActiveSidebarMenuSubject([]);
    }

    onPeriksaPasien(): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPutRequestWithoutParams(this.API_CONFIG.API_DASHBOARD_DOKTER.API_PERIKSA_PASIEN + this.daftarPasienService.ActivePasien.value.id_register)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );

    }
}
