import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api';
import { DebiturModel, DeleteDebiturModel, GetAllDebiturModel, PostSaveDebiturModel, PutUpdateDebiturModel } from '../../../models/setup-data/setup-debitur.model';

@Injectable({
    providedIn: 'root'
})
export class SetupDebiturService {

    API_DEBITUR = API_CONFIG.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_DEBITUR;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllDebiturModel>
    */
    onGetAll(): Observable<GetAllDebiturModel> {
        return this.httpOperationService.defaultGetRequest(this.API_DEBITUR.GET_ALL_SETUP_DEBITUR);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSaveDebiturModel>
     * @param DebiturModel
    */
    onPostSave(Data: DebiturModel): Observable<PostSaveDebiturModel> {
        return this.httpOperationService.defaultPostRequest(this.API_DEBITUR.POST_SAVE_SETUP_DEBITUR, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdateDebiturModel>
     * @param DebiturModel
    */
    onPutEdit(Data: DebiturModel): Observable<PutUpdateDebiturModel> {
        return this.httpOperationService.defaultPutRequest(this.API_DEBITUR.PUT_UPDATE_SETUP_DEBITUR, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Menghapus Data
     * @onDelete Observable<DeleteDebiturModel>
     * @param DebiturId
    */
    onDelete(DebiturId: number): Observable<DeleteDebiturModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_DEBITUR.DELETE_SETUP_DEBITUR + DebiturId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

}
