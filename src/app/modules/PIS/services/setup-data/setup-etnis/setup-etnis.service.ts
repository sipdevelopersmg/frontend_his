import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SetActiveModel } from 'src/app/modules/MM/models/setup-data/setup-satuan/SetupSatuanModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/SETUP_DATA/index';
import { DeleteEtnisModel, EtnisModel, GetAllEtnisModel, PostSaveEtnisModel, PutUpdateEtnisModel } from '../../../models/setup-data/setup-etnis.model';

@Injectable({
    providedIn: 'root'
})
export class SetupEtnisService {

    API = API_CONFIG.API.SETUP_ETNIS;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllEtnisModel>
    */
    onGetAll(): Observable<GetAllEtnisModel> {
        return this.httpOperationService.defaultGetRequest(this.API.GET_ALL_SETUP_ETNIS)
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
        return this.httpOperationService.defaultPostRequest(this.API.POST_SAVE_SETUP_ETNIS, Data)
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
        return this.httpOperationService.defaultPutRequest(this.API.PUT_UPDATE_SETUP_ETNIS, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<DeleteEtnisModel>
     * @param EtnisId
    */
    onDelete(EtnisId: number): Observable<DeleteEtnisModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API.DELETE_SETUP_ETNIS + EtnisId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

}
