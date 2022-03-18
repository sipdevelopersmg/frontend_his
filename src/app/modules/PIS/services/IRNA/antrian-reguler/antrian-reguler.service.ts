import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel, PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/IRNA';
import { CheckAntrianIsTerjadwalModel, GetAllAntrianRegulerPemesananBedModel, IPostSaveAntrianRegulerPemesananBedModel } from '../../../models/IRNA/antrian-reguler-pemesanan-bed.model';

@Injectable({
    providedIn: 'root'
})
export class AntrianRegulerService {

    API_CONFIG = API_CONFIG;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onCheckIsPersonTerjadwal(no_rekam_medis: string): Observable<CheckAntrianIsTerjadwalModel> {
        return this.httpOperationService.defaultGetRequest(`${this.API_CONFIG.IRNA.ANTRIAN_REGULER.GET_CHECK_IS_PERSON_TERJADWAL}${no_rekam_medis}`)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPostSaveAntrianReguler(Data: IPostSaveAntrianRegulerPemesananBedModel): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.IRNA.ANTRIAN_REGULER.INSERT_ANTRIAN_REGULER, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onGetAllAntrianReguler(Parameter: PostRequestByDynamicFiterModel[]): Observable<GetAllAntrianRegulerPemesananBedModel> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_CONFIG.IRNA.ANTRIAN_REGULER.GET_ALL_ANTRIAN_REGULER, Parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPostUpdateStatusTerjadwal(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.IRNA.ANTRIAN_REGULER.POST_UPDATE_STATUS_TERJADWAL, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPostUpdateStatusCanceled(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.IRNA.ANTRIAN_REGULER.POST_UPDATE_STATUS_BATAL, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
