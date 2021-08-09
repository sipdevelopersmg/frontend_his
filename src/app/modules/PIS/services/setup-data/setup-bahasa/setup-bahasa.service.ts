import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';

import * as API_CONFIG from '../../../../../api/PIS/SETUP_DATA';
import { BahasaModel, DeleteBahasaModel, GetAllBahasaModel, GetByIdBahasaModel, PostSaveBahasaModel, PutUpdateBahasaModel } from '../../../models/setup-data/setup-bahasa.model';

@Injectable({
    providedIn: 'root'
})
export class SetupBahasaService {

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    onGetAllBahasa(): Observable<GetAllBahasaModel> {
        return this.httpOperationService.defaultGetRequest(API_CONFIG.API.SETUP_BAHASA.GET_ALL_SETUP_BAHASA);
    }

    onGetBahasaById(BahasaId: number): Observable<GetByIdBahasaModel> {
        return this.httpOperationService.defaultGetRequest(API_CONFIG.API.SETUP_BAHASA.GET_SETUP_BAHASA_BY_ID, BahasaId);
    }

    onPostSaveSetupBahasa(Data: BahasaModel): Observable<PostSaveBahasaModel> {
        return this.httpOperationService.defaultPostRequest(API_CONFIG.API.SETUP_BAHASA.POST_SAVE_SETUP_BAHASA, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPutUpdateSetupBahasa(Data: BahasaModel): Observable<PutUpdateBahasaModel> {
        return this.httpOperationService.defaultPutRequest(API_CONFIG.API.SETUP_BAHASA.PUT_UPDATE_SETUP_BAHASA, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onDeleteSetupBahasa(BahasaId: number): Observable<DeleteBahasaModel> {
        return this.httpOperationService.defaultDeleteRequest(API_CONFIG.API.SETUP_BAHASA.DELETE_SETUP_BAHASA + BahasaId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
