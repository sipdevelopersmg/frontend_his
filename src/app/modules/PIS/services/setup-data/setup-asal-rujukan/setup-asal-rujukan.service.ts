import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api';
import { AsalRujukanModel, GetAllAsalRujukanModel, GetByIdAsalRujukanModel, PostSaveAsalRujukanModel, PutUpdateAsalRujukanModel } from '../../../models/setup-data/setup-asal-rujukan';

@Injectable({
    providedIn: 'root'
})
export class SetupAsalRujukanService {

    API_ASAL_RUJUKAN = API_CONFIG.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_ASAL_RUJUKAN;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAll(): Observable<GetAllAsalRujukanModel> {
        return this.httpOperationService.defaultGetRequest(this.API_ASAL_RUJUKAN.GET_ALL_ASAL_RUJUKAN);
    }

    onGetById(AsalRujukanId: number): Observable<GetByIdAsalRujukanModel> {
        return this.httpOperationService.defaultGetRequest(this.API_ASAL_RUJUKAN.GET_ASAL_RUJUKAN_BY_ID, AsalRujukanId);
    }

    onPostSave(Data: AsalRujukanModel): Observable<PostSaveAsalRujukanModel> {
        return this.httpOperationService.defaultPostRequest(this.API_ASAL_RUJUKAN.POST_SAVE_ASAL_RUJUKAN, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPutUpdate(Data: AsalRujukanModel): Observable<PutUpdateAsalRujukanModel> {
        return this.httpOperationService.defaultPutRequest(this.API_ASAL_RUJUKAN.PUT_UPDATE_ASAL_RUJUKAN, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
