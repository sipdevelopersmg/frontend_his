import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../api/OM';

@Injectable({
    providedIn: 'root'
})
export class InputHasilRadiologiService {

    API_CONFIG = API_CONFIG.API_ORDER_MANAGEMENT.HASIL_RADIOLOGI;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAll(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.GET_ALL, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetDetailById(OrderPenunjangId: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_DETAIL_BY_ID + OrderPenunjangId);
    }

    onPostSave(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_SAVE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetRiwayatHasilRadiologi(id_order_penunjang_detail: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL_RIWAYAT + id_order_penunjang_detail);
    }

    onUpdate(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_UPDATE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onPublish(id_hasil_radiologi: number, id_order_penunjang_detail: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_PUBLISH, {
            id_hasil_radiologi: id_hasil_radiologi,
            id_order_penunjang_detail: id_order_penunjang_detail
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }
}
