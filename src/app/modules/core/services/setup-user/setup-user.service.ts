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

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    onGetAllActiveUser(): Observable<any> {
        return this.httpOperationService.defaultGetRequest(API_CONFIG.API.GET_ALL_USER_ACTIVE);
    }

    onInsertUser(DataUser: PostSetupUserModel): Observable<any> {
        return this.httpOperationService.defaultPostRequest(API_CONFIG.API.POST_INSERT_USER, DataUser)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
