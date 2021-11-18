import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel, PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/IRDA';

@Injectable({
    providedIn: 'root'
})
export class AdmisiPasienRawatDaruratService {

    API_CONFIG = API_CONFIG.IRDA.ADMISI_PASIEN_RAWAT_DARURAT;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllAdmisiPasienRawatDarurat(parameter: PostRequestByDynamicFiterModel[]): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_CONFIG.GET_ALL_ADMISI_RAWAT_DARURAT, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetAdmisiPasienRawatDaruratByIdRegister(RegisterId: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ADMISI_RAWAT_DARURAT_BY_ID_REGISTER + RegisterId);
    }

    onPostAdmisiRawatDaruratTanpaPenjamin(parameter: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_ADMISI_RAWAT_DARURAT_NON_PENJAMIN, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onPostAdmisiRawatDaruratDenganPenjamin(parameter: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_ADMISI_RAWAT_DARURAT_WITH_PENJAMIN, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetAllAdmisiPasienRawatDaruratTanpaIdentitas(parameter: PostRequestByDynamicFiterModel[]): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_CONFIG.GET_ADMISI_RAWAT_DARURAT_TANPA_IDENTITAS, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
