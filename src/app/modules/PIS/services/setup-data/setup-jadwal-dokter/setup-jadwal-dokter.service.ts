import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';

import * as API_CONFIG from '../../../../../api/PIS/SETUP_DATA';
import { GetAllSetupHariModel, PostGetAllDokterByIdPoliModel, PostGetAllJadwalDokterByIdDokterAndIdPoliModel } from '../../../models/setup-data/setup_jadwal_dokter.model';

@Injectable({
    providedIn: 'root'
})
export class SetupJadwalDokterService {

    API_JADWAL_DOKTER = API_CONFIG.API_SETUP_DATA.SETUP_JADWAL_DOKTER;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllHari(): Observable<GetAllSetupHariModel> {
        return this.httpOperationService.defaultGetRequest(this.API_JADWAL_DOKTER.GET_ALL_SETUO_HARI);
    }

    onPostGetAllJadwalDokterByIdDokterAndIdPoli(id_dokter: number, id_poli: number): Observable<PostGetAllJadwalDokterByIdDokterAndIdPoliModel> {
        return this.httpOperationService.defaultPostRequest(this.API_JADWAL_DOKTER.POST_GET_ALL_JADWAL_DOKTER_BY_ID_DOKTER_AND_ID_POLI, {
            id_dokter: id_dokter,
            id_poli: id_poli
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            })
        );
    }

    onGetAllDokterByPoliId(PoliId: number): Observable<PostGetAllDokterByIdPoliModel> {
        return this.httpOperationService.defaultPostRequest(this.API_JADWAL_DOKTER.POST_GET_ALL_DOKTER_BY_ID_POLI + PoliId, []).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            })
        );
    }

    onPostSaveJadwalDokter(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_JADWAL_DOKTER.POST_SAVE_JADWAL_DOKTER, Data).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            })
        );
    }

    onDeleteJadwalDokter(JadwalDokterId: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_JADWAL_DOKTER.DELETE_JADWAL_DOKTER_BY_ID_JADWAL_DOKTER + JadwalDokterId).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            })
        );
    }
}
