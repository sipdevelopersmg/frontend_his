import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/SETUP_DATA';
import { DeleteStatusDokterModel, GetAllStatusDokterModel, PostSaveStatusDokterModel, PutUpdateStatusDokterModel, StatusDokterModel } from '../../../models/setup-data/setup-status-dokter.model';

@Injectable({
    providedIn: 'root'
})
export class SetupStatusDokterService {

    API = API_CONFIG.API.SETUP_STATUS_DOKTER;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllStatusDokterModel>
    */
    onGetAll(): Observable<GetAllStatusDokterModel> {
        return this.httpOperationService.defaultGetRequest(this.API.GET_ALL_SETUP_STATUS_DOKTER);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSaveStatusDokterModel>
     * @param StatusDokterModel
    */
    onPostSave(Data: StatusDokterModel): Observable<PostSaveStatusDokterModel> {
        return this.httpOperationService.defaultPostRequest(this.API.POST_SAVE_SETUP_STATUS_DOKTER, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<PutUpdateStatusDokterModel>
     * @param StatusDokterModel
    */
    onPutEdit(Data: StatusDokterModel): Observable<PutUpdateStatusDokterModel> {
        return this.httpOperationService.defaultPutRequest(this.API.PUT_UPDATE_SETUP_STATUS_DOKTER, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onDelete Observable<DeleteStatusDokterModel>
     * @param StatusDokterId
    */
    onDelete(StatusDokterId: number): Observable<DeleteStatusDokterModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API.DELETE_SETUP_STATUS_DOKTER + StatusDokterId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
