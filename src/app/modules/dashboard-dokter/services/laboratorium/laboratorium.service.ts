import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { GetAllOrderPenunjangLaboratoriumModel } from '../../models/laboratorium.model';
import *  as API_CONFIG from '../../../../api/DASHBOARD-DOKTER';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LaboratoriumService {

    API_CONFIG = API_CONFIG.API_DASHBOARD_DOKTER.LABORATORIUM;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllOrderPenunjang(): Observable<GetAllOrderPenunjangLaboratoriumModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL_DATA_PENUNJANG);
    }

    onPostSaveOrderPenunjang(Data: any): Observable<any> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_SAVE_ORDER_LAB, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetRiwayatOrderLab(RegisterId: number): Observable<any> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_RIWAYAT_ORDER_LAB + RegisterId);
    }

    onGetDetailRiwayatOrderLab(OrderPenunjangId: number): Observable<any> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_DETAIL_RIWAYAT_ORDER_LAB + OrderPenunjangId);
    }
}
