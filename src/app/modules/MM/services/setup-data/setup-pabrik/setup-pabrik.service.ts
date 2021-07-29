import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { ISetupPabrikModel,SetupPabrikModel } from '../../../models/setup-data/setup-pabrik/SetupPabrikModel';

import * as API_SETUP_PABRIK from './../../../../../api/MM/SETUP_PABRIK';

@Injectable({
    providedIn: 'root'
})
export class SetupPabrikService {

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    onGetAllPabrik(): Observable<SetupPabrikModel> {
        return this.httpOperationService.defaultGetRequest(API_SETUP_PABRIK.GET_ALL_SETUP_PABRIK);
    }

    onGetPabrikById(PabrikId: number): Observable<any> {
        return this.httpOperationService.defaultGetRequest(API_SETUP_PABRIK.GET_SETUP_PABRIK_BY_ID + PabrikId);
    }

    onPostSaveSetupPabrik(Data: ISetupPabrikModel): Observable<any> {
        return this.httpOperationService.defaultPostRequest(API_SETUP_PABRIK.POST_SAVE_SETUP_PABRIK, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onTestError(): Observable<any> {
        return this.httpOperationService.onTestingError()
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
