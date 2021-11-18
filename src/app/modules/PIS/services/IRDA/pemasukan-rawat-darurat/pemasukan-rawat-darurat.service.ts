import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/IRDA';

@Injectable({
    providedIn: 'root'
})
export class PemasukanRawatDaruratService {

    API_CONFIG = API_CONFIG.IRDA.PEMASUKAN_RAWAT_DARURAT;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onPostSavePemasukanRawatDarurat(parameter: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_SAVE_PEMASUKAN_RAWAT_DARURAT, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onPostCancelPemasukanRawatDarurat(parameter: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_CANCEL_PEMASUKAN_RAWAT_DARURAT, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetHistoryPemasukanRawatDarurat(RegisterId: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_HISTORY_PEMASUKAN_RAWAT_DARURAT + RegisterId);
    }
}
