import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { DeleteSmfModel, GetAllSmfModel, PostSaveSmfModel, PutUpdateSmfModel, SmfModel } from '../../../models/setup-data/setup-smf-dokter.model';
import * as API_CONFIG from '../../../../../api';

@Injectable({
    providedIn: 'root'
})
export class SetupSmfDokterService {

    API_SMF_DOKTER = API_CONFIG.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_SMF_DOKTER;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllSmfModel>
    */
    onGetAll(): Observable<GetAllSmfModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SMF_DOKTER.GET_ALL_SETUP_SMF);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSaveSmfModel>
     * @param SmfModel
    */
    onPostSave(Data: SmfModel): Observable<PostSaveSmfModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SMF_DOKTER.POST_SAVE_SETUP_SMF, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<PutUpdateSmfModel>
     * @param SmfModel
    */
    onPutEdit(Data: SmfModel): Observable<PutUpdateSmfModel> {
        return this.httpOperationService.defaultPutRequest(this.API_SMF_DOKTER.PUT_UPDATE_SETUP_SMF, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onDelete Observable<DeleteSmfModel>
     * @param SmfId
    */
    onDelete(SmfId: number): Observable<DeleteSmfModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_SMF_DOKTER.DELETE_SETUP_SMF + SmfId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
