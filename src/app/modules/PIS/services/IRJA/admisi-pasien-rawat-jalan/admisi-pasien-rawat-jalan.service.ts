import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel, PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import Swal from 'sweetalert2';
import * as API_CONFIG from '../../../../../api/PIS/IRJA';
import { GetAllPasienForLookupAdmisiRawatJalanModel, GetAllPasienForSearchingAdmisiRawatJalanModel, GetAllPasienTeradmisiHariIni, PostAdmisiRawatJalanNonPenjaminModel, PostAdmisiRawatJalanWithPenjaminModel } from '../../../models/IRJA/admisi-pasien-rawat-jalan.model';

@Injectable({
    providedIn: 'root'
})
export class AdmisiPasienRawatJalanService {

    API_CONFIG = API_CONFIG.IRJA.PELAYANAN_RAWAT_JALAN;

    GridAdmisiHariIni = new BehaviorSubject([]);
    GridAdmisiHariIni$ = this.GridAdmisiHariIni.asObservable();

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * onGetAllPasienRawatJalanTeradmisiHariIni
    */
    onGetAllPasienRawatJalanTeradmisiHariIni(parameter: PostRequestByDynamicFiterModel[]): Observable<GetAllPasienTeradmisiHariIni> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_CONFIG.POST_GET_PASIEN_ADMISI_HARI_INI, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * onGetAllPasienForSearching
    */
    onGetAllPasienForSearching(parameter: PostRequestByDynamicFiterModel[]): Observable<GetAllPasienForSearchingAdmisiRawatJalanModel> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_CONFIG.POST_GET_PASIEN_FOR_SEARCHING, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * onGetAllPasienForLookupAdmisiRawatJalan
    */
    onGetAllPasienForLookupAdmisiRawatJalan(parameter: PostRequestByDynamicFiterModel[]): Observable<GetAllPasienForLookupAdmisiRawatJalanModel> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_CONFIG.POST_GET_PASIEN_FOR_LOOKUP_ADMISI, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * onPostAdmisiRawatJalanTanpaPenjamin
    */
    onPostAdmisiRawatJalanTanpaPenjamin(data: any): Observable<PostAdmisiRawatJalanNonPenjaminModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_ADMISI_RAWAT_JALAN_NON_PENJAMIN, data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * onPostAdmisiRawatJalanDenganPenjamin
    */
    onPostAdmisiRawatJalanDenganPenjamin(data: any): Observable<PostAdmisiRawatJalanWithPenjaminModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_ADMISI_RAWAT_JALAN_WITH_PENJAMIN, data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * onPostCancelAdmisiRawatJalan
    */
    onPostCancelAdmisiRawatJalan(id_register: number, reason_canceled: string): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_CANCEL_ADMISI_RAWAT_JALAN,
            {
                id_register: id_register,
                reason_canceled: reason_canceled
            }
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }
}
