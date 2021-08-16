import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { PostSetupUserModel } from '../../models/setup-user/setup-user.model';
import * as API_CONFIG from '../../../../api/index';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';

@Injectable({
    providedIn: 'root'
})
export class SetupUserService {

    API = API_CONFIG.API.CORE;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    onGetAllActiveUser(): Observable<any> {
        return this.httpOperationService.defaultGetRequest(this.API.GET_ALL_USER_ACTIVE);
    }

    onInsertUser(DataUser: PostSetupUserModel): Observable<any> {
        return this.httpOperationService.defaultPostRequest(this.API.POST_INSERT_USER, DataUser)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
