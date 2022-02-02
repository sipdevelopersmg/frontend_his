import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api';
import { DiagnosaAwalModel, GetAllDiagnosaAwalModel, GetByIdDiagnosaAwalModel, PostSaveDiagnosaAwalModel, PutUpdateDiagnosaAwalModel, PutUpdateStatusDiagnosaAwalModel } from '../../../models/setup-data/setup-icd-diagnosa.model';

@Injectable({
    providedIn: 'root'
})
export class SetupIcdDiagnosaService {

    API_ASAL_RUJUKAN = API_CONFIG.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_ICD_DIAGNOSA;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAll(): Observable<GetAllDiagnosaAwalModel> {
        return this.httpOperationService.defaultGetRequestWithLoading(this.API_ASAL_RUJUKAN.GET_ALL_DIAGNOSA_AWAL);
    }

    onGetById(DiagnosaAwalId: number): Observable<GetByIdDiagnosaAwalModel> {
        return this.httpOperationService.defaultGetRequestWithLoading(this.API_ASAL_RUJUKAN.GET_DIAGNOSA_AWAL_BY_ID, DiagnosaAwalId);
    }

    onPostSave(Data: DiagnosaAwalModel): Observable<PostSaveDiagnosaAwalModel> {
        return this.httpOperationService.defaultPostRequest(this.API_ASAL_RUJUKAN.POST_SAVE_DIAGNOSA_AWAL, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPutUpdate(Data: DiagnosaAwalModel): Observable<PutUpdateDiagnosaAwalModel> {
        return this.httpOperationService.defaultPutRequest(this.API_ASAL_RUJUKAN.PUT_UPDATE_DIAGNOSA_AWAL, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPutUpdateStatus(Data: DiagnosaAwalModel): Observable<PutUpdateStatusDiagnosaAwalModel> {
        return this.httpOperationService.defaultPutRequest(this.API_ASAL_RUJUKAN.PUT_UPDATE_STATUS_DIAGNOSA_AWAL, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
