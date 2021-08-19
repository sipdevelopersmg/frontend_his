import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api';
import { DeleteEtnisModel, EtnisModel, GetAllEtnisModel, PostSaveEtnisModel, PutUpdateEtnisModel } from '../../../models/setup-data/setup-etnis.model';

@Injectable({
    providedIn: 'root'
})
export class SetupEtnisService {

    API_ETNIS = API_CONFIG.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_ETNIS;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllEtnisModel>
    */
    onGetAll(): Observable<GetAllEtnisModel> {
        return this.httpOperationService.defaultGetRequest(this.API_ETNIS.GET_ALL_SETUP_ETNIS)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSaveEtnisModel>
     * @param EtnisModel
    */
    onPostSave(Data: EtnisModel): Observable<PostSaveEtnisModel> {
        return this.httpOperationService.defaultPostRequest(this.API_ETNIS.POST_SAVE_SETUP_ETNIS, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<PutUpdateEtnisModel>
     * @param EtnisModel
    */
    onPutEdit(Data: EtnisModel): Observable<PutUpdateEtnisModel> {
        return this.httpOperationService.defaultPutRequest(this.API_ETNIS.PUT_UPDATE_SETUP_ETNIS, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onDelete Observable<DeleteEtnisModel>
     * @param EtnisId
    */
    onDelete(EtnisId: number): Observable<DeleteEtnisModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_ETNIS.DELETE_SETUP_ETNIS + EtnisId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

}
