import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import *  as API_CONFIG from '../../../../api/DASHBOARD-DOKTER';
import { GetAllOrderPenunjangRadiologiModel, GetTarifRadiologiDetailModel } from '../../models/radiologi.model';

@Injectable({
    providedIn: 'root'
})
export class RadiologiService {

    API_CONFIG = API_CONFIG.API_DASHBOARD_DOKTER.RADIOLOGI;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllOrderPenunjang(): Observable<GetAllOrderPenunjangRadiologiModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL_DATA_PENUNJANG);
    }

    onGetTarifRadiologiDetail(Data: any): Observable<GetTarifRadiologiDetailModel> {
        return this.httpOperationService.defaultPostRequestWithoutLoading(this.API_CONFIG.POST_GET_TARIF_RAD, Data);
    }

    onPostSaveOrderPenunjang(Data: any): Observable<any> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_SAVE_ORDER_RAD, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
