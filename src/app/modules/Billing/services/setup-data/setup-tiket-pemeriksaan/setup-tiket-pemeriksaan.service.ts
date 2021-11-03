import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/BILLING';
import { DeleteTiketPemeriksaanModel, GetAllTiketPemeriksaanModel, GetByIdTiketPemeriksaanModel, ITiketPemeriksaanModel, PostInsertTiketPemeriksaanModel, PutUpdateTiketPemeriksaanModel } from '../../../models/setup-data/setup-tiket-pemeriksaan.model';

@Injectable({
    providedIn: 'root'
})
export class SetupTiketPemeriksaanService {

    API_TIKET_PEMERIKSAAN = API_CONFIG.API_BILLING.SETUP_DATA.SETUP_TIKET_PEMERIKSAAN;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * Service Untuk Menampilkan Semua Data Poli
     * @onGetAll Observable: GetAllTiketPemeriksaanModel
    */
    onGetAll(): Observable<GetAllTiketPemeriksaanModel> {
        return this.httpOperationService.defaultGetRequest(this.API_TIKET_PEMERIKSAAN.GET_ALL);
    }

    /**
     * Service Untuk Menampilkan Data Tiket Pemeriksaan
     * @onGetById Observable: GetByIdTiketPemeriksaanModel
    */
    onGetById(TiketPemeriksaanId: number): Observable<GetByIdTiketPemeriksaanModel> {
        return this.httpOperationService.defaultGetRequest(this.API_TIKET_PEMERIKSAAN.GET_BY_ID + TiketPemeriksaanId);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable PostInsertTiketPemeriksaanModel
     * @param ITiketPemeriksaanModel
    */
    onPostSave(Data: ITiketPemeriksaanModel): Observable<PostInsertTiketPemeriksaanModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TIKET_PEMERIKSAAN.POST_SAVE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable: PutUpdateTiketPemeriksaanModel
     * @param ITiketPemeriksaanModel
    */
    onPutEdit(Data: ITiketPemeriksaanModel): Observable<PutUpdateTiketPemeriksaanModel> {
        return this.httpOperationService.defaultPutRequest(this.API_TIKET_PEMERIKSAAN.PUT_UPDATE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Menghapus Data
     * @onDelete Observable: DeleteTiketPemeriksaanModel
     * @param TiketPemeriksaanId
    */
    onDelete(TiketPemeriksaanId: number): Observable<DeleteTiketPemeriksaanModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_TIKET_PEMERIKSAAN.DELETE + TiketPemeriksaanId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
