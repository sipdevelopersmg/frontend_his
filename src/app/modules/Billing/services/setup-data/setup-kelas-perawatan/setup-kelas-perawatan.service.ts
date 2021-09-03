import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/BILLING';
import { DeleteKelasPerawatanModel, GetAllKelasPerawatanModel, GetByIdKelasPerawatanModel, KelasPerawatanModel, PostInsertKelasPerawatanModel, PutUpdateKelasPerawatanModel, PutUpdateStatusKelasPerawatanModel } from '../../../models/setup-data/setup-kelas-perawatan.model';

@Injectable({
    providedIn: 'root'
})
export class SetupKelasPerawatanService {

    API_KELAS_PERAWATAN = API_CONFIG.API_BILLING.SETUP_DATA.SETUP_KELAS_PERAWATAN;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
    * Service Untuk Menampilkan Semua Data Kelas Perawatan
    * @onGetAll Observable<GetAllKelompokTarifModel>
   */
    onGetAll(): Observable<GetAllKelasPerawatanModel> {
        return this.httpOperationService.defaultGetRequest(this.API_KELAS_PERAWATAN.GET_ALL_KELAS_PERAWATAN);
    }

    /**
     * Service Untuk Menampilkan Data Kelas Perawatan
     * @onGetById Observable<GetByIdKelasPerawatanModel>
    */
    onGetById(KelasPerawatanId: number): Observable<GetByIdKelasPerawatanModel> {
        return this.httpOperationService.defaultGetRequest(this.API_KELAS_PERAWATAN.GET_KELAS_PERAWATAN_BY_ID + KelasPerawatanId);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostInsertKelasPerawatanModel>
     * @param KelasPerawatanModel
    */
    onPostSave(Data: KelasPerawatanModel): Observable<PostInsertKelasPerawatanModel> {
        return this.httpOperationService.defaultPostRequest(this.API_KELAS_PERAWATAN.POST_SAVE_KELAS_PERAWATAN, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdateKelasPerawatanModel>
     * @param KelasPerawatanModel
    */
    onPutEdit(Data: KelasPerawatanModel): Observable<PutUpdateKelasPerawatanModel> {
        return this.httpOperationService.defaultPutRequest(this.API_KELAS_PERAWATAN.PUT_UPDATE_KELAS_PERAWATAN, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengubah Status Active
     * @onPutStatusActive Observable<PutUpdateStatusKelasPerawatanModel>
     * @param id_kelas: number 
     * @param is_active: boolean
    */
    onPutStatusActive(id_kelas: number, is_active: boolean): Observable<PutUpdateStatusKelasPerawatanModel> {
        return this.httpOperationService.defaultPutRequest(this.API_KELAS_PERAWATAN.PUT_UPDATE_STATUS_KELAS_PERAWATAN, {
            id_kelas: id_kelas,
            is_active: !is_active
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            })
        );
    }

    /**
     * Service Untuk Menghapus Data
     * @onDelete Observable<DeleteKelasPerawatanModel>
     * @param KelasPerawatanId
    */
    onDelete(KelasPerawatanId: number): Observable<DeleteKelasPerawatanModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_KELAS_PERAWATAN.DELETE_KELAS_PERAWATAN_BY_ID + KelasPerawatanId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
