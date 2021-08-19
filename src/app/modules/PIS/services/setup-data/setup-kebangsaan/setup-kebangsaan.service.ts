import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api';
import { DeleteKebangsaanModel, GetAllKebangsaanModel, KebangsaanModel, PostSaveKebangsaanModel, PutUpdateKebangsaanModel } from '../../../models/setup-data/setup-kebangsaan.model';

@Injectable({
    providedIn: 'root'
})
export class SetupKebangsaanService {

    API_KEBANGSAAN = API_CONFIG.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_KEBANGSAAN;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<PostSaveKebangsaanModel>
    */
    onGetAll(): Observable<GetAllKebangsaanModel> {
        return this.httpOperationService.defaultGetRequest(this.API_KEBANGSAAN.GET_ALL_SETUP_KEBANGSAAN);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSaveKebangsaanModel>
     * @param KebangsaanModel
    */
    onPostSave(Data: KebangsaanModel): Observable<PostSaveKebangsaanModel> {
        return this.httpOperationService.defaultPostRequest(this.API_KEBANGSAAN.POST_SAVE_SETUP_KEBANGSAAN, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<PutUpdateKebangsaanModel>
     * @param KebangsaanModel
    */
    onPutEdit(Data: KebangsaanModel): Observable<PutUpdateKebangsaanModel> {
        return this.httpOperationService.defaultPutRequest(this.API_KEBANGSAAN.PUT_UPDATE_SETUP_KEBANGSAAN, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onDelete Observable<DeleteKebangsaanModel>
     * @param EducationId
    */
    onDelete(KebangsaanId: number): Observable<DeleteKebangsaanModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_KEBANGSAAN.DELETE_SETUP_KEBANGSAAN + KebangsaanId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
