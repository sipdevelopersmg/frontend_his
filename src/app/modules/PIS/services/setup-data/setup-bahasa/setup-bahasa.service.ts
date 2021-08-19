import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { BahasaModel, DeleteBahasaModel, GetAllBahasaModel, GetByIdBahasaModel, PostSaveBahasaModel, PutUpdateBahasaModel } from '../../../models/setup-data/setup-bahasa.model';
import * as API_CONFIG from '../../../../../api';

@Injectable({
    providedIn: 'root'
})
export class SetupBahasaService {

    API_BAHASA = API_CONFIG.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_BAHASA;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    onGetAllBahasa(): Observable<GetAllBahasaModel> {
        return this.httpOperationService.defaultGetRequest(this.API_BAHASA.GET_ALL_SETUP_BAHASA);
    }

    onGetBahasaById(BahasaId: number): Observable<GetByIdBahasaModel> {
        return this.httpOperationService.defaultGetRequest(this.API_BAHASA.GET_SETUP_BAHASA_BY_ID, BahasaId);
    }

    onPostSaveSetupBahasa(Data: BahasaModel): Observable<PostSaveBahasaModel> {
        return this.httpOperationService.defaultPostRequest(this.API_BAHASA.POST_SAVE_SETUP_BAHASA, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPutUpdateSetupBahasa(Data: BahasaModel): Observable<PutUpdateBahasaModel> {
        return this.httpOperationService.defaultPutRequest(this.API_BAHASA.PUT_UPDATE_SETUP_BAHASA, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onDeleteSetupBahasa(BahasaId: number): Observable<DeleteBahasaModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_BAHASA.DELETE_SETUP_BAHASA + BahasaId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
