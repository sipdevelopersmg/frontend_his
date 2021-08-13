import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/SETUP_DATA';
import { DeleteProvinsiModel, GetAllProvinsiModel, PostSaveProvinsiModel, ProvinsiModel, PutUpdateProvinsiModel } from '../../../models/setup-data/setup-provinsi.model';

@Injectable({
    providedIn: 'root'
})
export class SetupProvinsiService {

    API = API_CONFIG.API.SETUP_PROVINSI;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllProvinsiModel>
    */
    onGetAll(): Observable<GetAllProvinsiModel> {
        return this.httpOperationService.defaultGetRequest(this.API.GET_ALL_SETUP_PROVINSI);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSaveProvinsiModel>
     * @param ProvinsiModel
    */
    onPostSave(Data: ProvinsiModel): Observable<PostSaveProvinsiModel> {
        return this.httpOperationService.defaultPostRequest(this.API.POST_SAVE_SETUP_PROVINSI, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<PutUpdateProvinsiModel>
     * @param ProvinsiModel
    */
    onPutEdit(Data: ProvinsiModel): Observable<PutUpdateProvinsiModel> {
        return this.httpOperationService.defaultPutRequest(this.API.PUT_UPDATE_SETUP_PROVINSI, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
    * Service Untuk Menghapus Data
    * @onDelete Observable<DeleteProvinsiModel>
    * @param KodeWilayahProvinsi
   */
    onDelete(KodeWilayahProvinsi: string): Observable<DeleteProvinsiModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API.DELETE_SETUP_PROVINSI + KodeWilayahProvinsi)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
