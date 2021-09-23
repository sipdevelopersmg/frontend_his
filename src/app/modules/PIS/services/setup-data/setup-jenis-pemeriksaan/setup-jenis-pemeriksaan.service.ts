import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/SETUP_DATA';
import { CheckIsUsedJenisPemeriksaanModel, GetAllJenisPemeriksaanModel, GetByIdJenisPemeriksaanModel, JenisPemeriksaanModel, PostSaveJenisPemeriksaanModel, UpdateJenisPemeriksaanModel, UpdateStatusJenisPemeriksaanModel } from '../../../models/setup-data/setup_jenis_pemeriksaan.model';

@Injectable({
    providedIn: 'root'
})
export class SetupJenisPemeriksaanService {

    API_SETUP_JENIS_PEMERIKSAAN = API_CONFIG.API_SETUP_DATA.SETUP_JENIS_PEMERIKSAAN;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
    ) { }

    onGetAll(GrupPenunjang: string): Observable<GetAllJenisPemeriksaanModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_JENIS_PEMERIKSAAN.GET_ALL_KELOMPOK_BY_GRUP_PENUNJANG + GrupPenunjang);
    }

    onGetById(KodeKelompok: string): Observable<GetByIdJenisPemeriksaanModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_JENIS_PEMERIKSAAN.GET_BY_KODE_KELOMPOK + KodeKelompok);
    }

    onPostSave(Data: JenisPemeriksaanModel): Observable<PostSaveJenisPemeriksaanModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETUP_JENIS_PEMERIKSAAN.POST_SAVE_KODE_KELOMPOK, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPutUpdate(Data: JenisPemeriksaanModel): Observable<UpdateJenisPemeriksaanModel> {
        return this.httpOperationService.defaultPutRequest(this.API_SETUP_JENIS_PEMERIKSAAN.PUT_UPDATE_KODE_KELOMPOK, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPutUpdateStatus(Data: JenisPemeriksaanModel): Observable<UpdateStatusJenisPemeriksaanModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETUP_JENIS_PEMERIKSAAN.PUT_UPDATE_STATUS_KODE_KELOMPOK, {
            kode_kelompok: Data.kode_kelompok,
            parent_kode_kelompok: Data.parent_kode_kelompok,
            is_active: !Data.is_active
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            })
        );
    }

    onCheckIsUsed(KodeKelompok: string): Observable<CheckIsUsedJenisPemeriksaanModel> {

        console.log(KodeKelompok);

        return this.httpOperationService.defaultGetRequest(this.API_SETUP_JENIS_PEMERIKSAAN.CHECK_USED_KODE_KELOMPOK + KodeKelompok);
    }

    onDelete(KodeKelompok: string): Observable<CheckIsUsedJenisPemeriksaanModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_SETUP_JENIS_PEMERIKSAAN.DELETE_KODE_KELOMPOK + KodeKelompok)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
