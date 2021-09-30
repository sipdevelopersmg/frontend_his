import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import *  as API_CONFIG from '../../../../api/DASHBOARD-DOKTER';
import { GetAllVitalSignModel, IVitalSignModel } from '../../models/vital_sign.model';

@Injectable({
    providedIn: 'root'
})
export class VitalSignService {

    API_CONFIG = API_CONFIG.API_DASHBOARD_DOKTER.VITAL_SIGN;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllAlergi(RegisterId: number): Observable<GetAllVitalSignModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL + RegisterId);
    }

    onPostSaveAlergi(Data: IVitalSignModel): Observable<any> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_SAVE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onPutUpdateAlergi(Data: IVitalSignModel): Observable<any> {
        return this.httpOperationService.defaultPutRequest(this.API_CONFIG.PUT_UPDATE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
