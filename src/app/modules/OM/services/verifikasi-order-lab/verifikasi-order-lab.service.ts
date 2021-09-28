import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import *  as API_CONFIG from '../../../../api/OM';

@Injectable({
    providedIn: 'root'
})
export class VerifikasiOrderLabService {

    API_CONFIG = API_CONFIG.API_ORDER_MANAGEMENT.VERIFIKASI_ORDER_LAB;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetListOrderForVerifikasi(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.GET_LIST_ORDER_FOR_VERIFIKASI_LAB, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetDetailOrderForVerifikasi(id_order_penunjang: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.GET_DETAIL_ORDER_FOR_VERIFIKASI_LAB, {
            id_order_penunjang: id_order_penunjang,
            kode_grup_penunjang: "LAB"
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }
}
