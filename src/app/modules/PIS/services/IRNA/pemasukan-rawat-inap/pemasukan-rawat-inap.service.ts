import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/';

@Injectable({
    providedIn: 'root'
})
export class PemasukanRawatInapService {

    API_PEMASUKAN_RAWAT_INAP = API_CONFIG.API_PIS.IRNA.IRNA.PEMASUKAN_RAWAT_INAP;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
    ) { }

    onPostSaveTransPemasukanRawatInap(parameter: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_PEMASUKAN_RAWAT_INAP.POST_SAVE_TRANSAKSI_PEMASUKAN_IRNA, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onPostCancelTransPemasukanRawatInap(parameter: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_PEMASUKAN_RAWAT_INAP.POST_CANCEL_TRANSAKSI_PEMASUKAN_IRNA, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetHistoryTransPemasukanRawatInap(RegisterId: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_PEMASUKAN_RAWAT_INAP.GET_HISTORY_TRANSAKSI_PEMASUKAN_IRNA + RegisterId);
    }
}
