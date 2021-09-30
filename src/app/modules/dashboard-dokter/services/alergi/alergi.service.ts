import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import *  as API_CONFIG from '../../../../api/DASHBOARD-DOKTER';
import { GetAllAlergiModel, IAlergiModel } from '../../models/alergi.model';

@Injectable({
    providedIn: 'root'
})
export class AlergiService {

    API_CONFIG = API_CONFIG.API_DASHBOARD_DOKTER.ALERGI;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllAlergi(RegisterId: number): Observable<GetAllAlergiModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL + RegisterId);
    }

    onPostSaveAlergi(Data: IAlergiModel): Observable<any> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_SAVE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onPutUpdateAlergi(Data: IAlergiModel): Observable<any> {
        return this.httpOperationService.defaultPutRequest(this.API_CONFIG.PUT_UPDATE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
