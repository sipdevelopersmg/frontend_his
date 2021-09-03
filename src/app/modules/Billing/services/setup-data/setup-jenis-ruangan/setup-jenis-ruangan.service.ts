import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/BILLING';
import { DeleteJenisRuanganModel, GetAllJenisRuanganModel, GetByIdJenisRuanganModel, JenisRuanganModel, PostInsertJenisRuanganModel, PutUpdateJenisRuanganModel } from '../../../models/setup-data/setup-jenis-ruangan.model';

@Injectable({
    providedIn: 'root'
})
export class SetupJenisRuanganService {

    API_JENIS_RUANGAN = API_CONFIG.API_BILLING.SETUP_DATA.SETUP_JENIS_RUANGAN;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * Service Untuk Menampilkan Semua Data Jenis Ruangan
     * @onGetAll Observable<GetAllJenisRuanganModel>
    */
    onGetAll(): Observable<GetAllJenisRuanganModel> {
        return this.httpOperationService.defaultGetRequest(this.API_JENIS_RUANGAN.GET_ALL_JENIS_RUANGAN);
    }

    /**
     * Service Untuk Menampilkan Data Jenis Ruangan
     * @onGetById Observable<GetByIdJenisRuanganModel>
    */
    onGetById(JenisRuanganId: number): Observable<GetByIdJenisRuanganModel> {
        return this.httpOperationService.defaultGetRequest(this.API_JENIS_RUANGAN.GET_JENIS_RUANGAN_BY_ID + JenisRuanganId);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostInsertJenisRuanganModel>
     * @param JenisRuanganModel
    */
    onPostSave(Data: JenisRuanganModel): Observable<PostInsertJenisRuanganModel> {
        return this.httpOperationService.defaultPostRequest(this.API_JENIS_RUANGAN.POST_SAVE_JENIS_RUANGAN, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdateJenisRuanganModel>
     * @param JenisRuanganModel
    */
    onPutEdit(Data: JenisRuanganModel): Observable<PutUpdateJenisRuanganModel> {
        return this.httpOperationService.defaultPutRequest(this.API_JENIS_RUANGAN.PUT_UPDATE_JENIS_RUANGAN, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Menghapus Data
     * @onDelete Observable<DeleteJenisRuanganModel>
     * @param JenisRuanganId
    */
    onDelete(JenisRuanganId: number): Observable<DeleteJenisRuanganModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_JENIS_RUANGAN.DELETE_JENIS_RUANGAN_BY_ID + JenisRuanganId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
