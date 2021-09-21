import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel, PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/SETUP_DATA';

@Injectable({
    providedIn: 'root'
})
export class SetupCutiDokterService {

    API_CONFIG = API_CONFIG.API_SETUP_DATA.SETUP_CUTI_DOKTER;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<PostSaveKebangsaanModel>
    */
    onGetAll(): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL_SETUP_CUTI_DOKTER);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSaveKebangsaanModel>
    */
    onPostSave(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_SAVE_SETUP_CUTI_DOKTER, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<PutUpdateKebangsaanModel>
    */
    onPutEdit(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPutRequest(this.API_CONFIG.PUT_UPDATE_SETUP_CUTI_DOKTER, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<PutUpdateKebangsaanModel>
    */
    onPutEditStatus(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPutRequest(this.API_CONFIG.PUT_UPDATE_STATUS_SETUP_CUTI_DOKTER, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetAllByDynamicFilter(Data: PostRequestByDynamicFiterModel[]): Observable<any> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_CONFIG.GET_ALL_BY_DYNAMIC_FILTER_SETUP_CUTI_DOKTER, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            )
    }
}
