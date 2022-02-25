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
import { environment,isFormularium } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DashboardDokterService {

    API_CONFIG = API_CONFIG;

    ShowInformasiPasien = new BehaviorSubject(false);
    ShowInformasiPasien$ = this.ShowInformasiPasien.asObservable();

    JenisRawat = new BehaviorSubject("");
    JenisRawat$ = this.JenisRawat.asObservable();

    constructor(
        private navigationService: NavigationService,
        private notificationService: NotificationService,
        private daftarPasienService: DaftarPasienService,
        private httpOperationService: HttpOperationService
    ) { }

    onSetSidebarMenuForDashboardDokter(): void {
        this.onSetJenisRawatForDashboardDokter();

        let urlResep = "";
        let urlformularium = "";

        switch (this.JenisRawat.value) {
            case 'IRJA':
                urlResep = 'Dokter/resep';
                urlformularium = "Dokter/resep-formularium-irna/input-resep-formularium-irja"
                break;
            case 'IRNA':
                urlResep = 'Dokter/resep-irna/daftar-resep-irna';
                urlformularium = "Dokter/resep-formularium-irna/daftar-resep-formularium-irna"
                break;
            case 'IRDA':
                urlResep = 'Dokter/resep-irda/daftar-resep-irda';
                urlformularium = "Dokter/resep-formularium-irda/daftar-resep-formularium-irda"
                break;
        };

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
                sidebarChild: [],
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
                sidebarChild: [],
                url: "Dokter/konsul"
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
                sidebarChild: [],
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
                sidebarChild: [],
                url: (isFormularium)? urlformularium : urlResep  
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
                sidebarChild: [],
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
                sidebarChild: [],
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
                sidebarChild: [],
                url: "Dokter/alergi"
            },
            {
                button: [],
                caption: "Vital Sign",
                fieldgrid: [],
                icon: "fas fa-file-medical",
                id_menu_sidebar: 0,
                id_menu_sidebar_parent: 0,
                id_top_menu: 0,
                is_parent: true,
                sidebarChild: [],
                url: "Dokter/vital-sign"
            },
            {
                button: [],
                caption: "Surat Perintah Mondok",
                fieldgrid: [],
                icon: "fas fa-file-medical",
                id_menu_sidebar: 0,
                id_menu_sidebar_parent: 0,
                id_top_menu: 0,
                is_parent: true,
                sidebarChild: [],
                url: "Dokter/surat-perintah-mondok"
            },
        ];

        localStorage.setItem('ActiveSidebarMenu', JSON.stringify(sidebarMenu));

        this.navigationService.onSetActiveSidebarMenuSubject(JSON.parse(localStorage.getItem('ActiveSidebarMenu')));
    }

    onSetSidebarMenuTitle(): void {
        this.navigationService.onSetMainMenuTitle('Dashboard Dokter')
    }

    onSetJenisRawatForDashboardDokter(): void {
        let ActivePasien = JSON.parse(localStorage.getItem("ActivePasien"));

        if (ActivePasien) {
            if (ActivePasien.jenis_rawat) {
                this.JenisRawat.next(ActivePasien.jenis_rawat);
            }
        };
    }

    onDestroySidebarMenuWhenNavigateToDaftarPasien(): void {
        localStorage.removeItem('ActiveSidebarMenu');

        this.navigationService.onSetActiveSidebarMenuSubject([]);
    }

    onPeriksaPasien(): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPutRequest(this.API_CONFIG.API_DASHBOARD_DOKTER.API_PERIKSA_PASIEN, {
            id_register: this.daftarPasienService.ActivePasien.value.id_register,
            id_poli: this.daftarPasienService.ActivePasien.value.id_poli
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );

    }
}
