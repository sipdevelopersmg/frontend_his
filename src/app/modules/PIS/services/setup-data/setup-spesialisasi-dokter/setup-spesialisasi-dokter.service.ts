import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { DeleteSpesialisasiDokterModel, GetAllSpesialisasiDokterModel, GetByIdSpesialisasiDokterModel, PostSaveSpesialisasiDokterModel, PutUpdateSpesialisasiDokterModel, SpesialisasiDokterModel } from '../../../models/setup-data/setup-spesialiasi-dokter.model';
import * as API_CONFIG from '../../../../../api';

@Injectable({
    providedIn: 'root'
})
export class SetupSpesialisasiDokterService {

    API_SPESIALISASI_DOKTER = API_CONFIG.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_SPESIALISASI_DOKTER;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllSpesialisasiDokterModel>
    */
    onGetAll(): Observable<GetAllSpesialisasiDokterModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SPESIALISASI_DOKTER.GET_ALL_SETUP_SPESIALISASI_DOKTER);
    }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllSpesialisasiDokterModel>
    */
    onGetById(SpesialisasiId: number): Observable<GetByIdSpesialisasiDokterModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SPESIALISASI_DOKTER.GET_BY_ID_SETUP_SPESIALISASI_DOKTER + SpesialisasiId);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSaveSmfModel>
     * @param SmfModel
    */
    onPostSave(Data: SpesialisasiDokterModel): Observable<PostSaveSpesialisasiDokterModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SPESIALISASI_DOKTER.POST_SAVE_SETUP_SPESIALISASI_DOKTER, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<PutUpdateSpesialisasiDokterModel>
     * @param SpesialisasiDokterModel
    */
    onPutEdit(Data: SpesialisasiDokterModel): Observable<PutUpdateSpesialisasiDokterModel> {
        return this.httpOperationService.defaultPutRequest(this.API_SPESIALISASI_DOKTER.PUT_UPDATE_SETUP_SPESIALISASI_DOKTER, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onDelete Observable<DeleteSpesialisasiDokterModel>
     * @param SpesialisasiDokterId
    */
    onDelete(SpesialisasiDokterId: number): Observable<DeleteSpesialisasiDokterModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_SPESIALISASI_DOKTER.DELETE_SETUP_SPESIALISASI_DOKTER + SpesialisasiDokterId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
