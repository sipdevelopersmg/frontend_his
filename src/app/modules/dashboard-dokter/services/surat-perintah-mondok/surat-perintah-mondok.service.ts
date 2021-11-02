import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import *  as API_CONFIG from '../../../../api/DASHBOARD-DOKTER';
import { DeleteSuratPerintahMondokModel, GetAllSuratPerintahMondokModel, ISuratPerintahMondokModel, PostSaveSuratPerintahMondokModel, PutUpdateSuratPerintahMondokModel } from '../../models/surat-perintah-mondok.model';
import { DaftarPasienService } from '../daftar-pasien/daftar-pasien.service';

@Injectable({
    providedIn: 'root'
})
export class SuratPerintahMondokService {

    API_CONFIG = API_CONFIG.API_DASHBOARD_DOKTER.SURAT_PERINTAH_MONDOK;

    constructor(
        private daftarPasienService: DaftarPasienService,
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAll(): Observable<GetAllSuratPerintahMondokModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL);
    }

    onPostSave(Data: ISuratPerintahMondokModel): Observable<PostSaveSuratPerintahMondokModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_SAVE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onPutUpdate(Data: ISuratPerintahMondokModel): Observable<PutUpdateSuratPerintahMondokModel> {
        return this.httpOperationService.defaultPutRequest(this.API_CONFIG.PUT_UPDATE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onDelete(SuratPerintahMondokId: number): Observable<DeleteSuratPerintahMondokModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_CONFIG.DELETE + SuratPerintahMondokId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
