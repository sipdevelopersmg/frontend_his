import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { GetAllTarifModel, GetByIdTarifModel, PostInsertTarifModel, PutUpdateStatusTarifModel, PutUpdateTarifModel, TarifModel } from '../../../models/setup-data/setup-tarif.model';
import * as API_CONFIG from '../../../../../api/BILLING';

@Injectable({
    providedIn: 'root'
})
export class SetupTarifService {

    API_TARIF = API_CONFIG.API_BILLING.SETUP_DATA.SETUP_TARIF;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
    ) { }

    /**
     * Service Untuk Menampilkan Semua Data Tarif
     * @onGetAll Observable<GetAllTarifModel>
    */
    onGetAll(): Observable<GetAllTarifModel> {
        return this.httpOperationService.defaultGetRequest(this.API_TARIF.GET_ALL_TARIF);
    }

    /**
     * Service Untuk Menampilkan Data Tarif
     * @onGetById Observable<GetByIdTarifModel>
    */
    onGetById(TarifId: number): Observable<GetByIdTarifModel> {
        return this.httpOperationService.defaultGetRequest(this.API_TARIF.GET_TARIF_BY_ID + TarifId);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostInsertTarifModel>
     * @param TarifModel
    */
    onPostSave(Data: TarifModel): Observable<PostInsertTarifModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TARIF.POST_SAVE_TARIF, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdateTarifModel>
     * @param TarifModel
    */
    onPutEdit(Data: TarifModel): Observable<PutUpdateTarifModel> {
        return this.httpOperationService.defaultPutRequest(this.API_TARIF.PUT_UPDATE_TARIF, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengubah Status Active
     * @onPutStatusActive Observable<DeleteKelompokTarifModel>
     * @param id_setup_tarif: number 
     * @param is_active: boolean
    */
    onPutStatusActive(id_setup_tarif: number, is_active: boolean): Observable<PutUpdateStatusTarifModel> {
        return this.httpOperationService.defaultPutRequest(this.API_TARIF.PUT_UPDATE_STATUS_TARIF, {
            id_setup_tarif: id_setup_tarif,
            is_active: is_active
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            })
        );
    }

    /**
     * Service Untuk Mendapatkan Tarif Berlaku Per Kelas
     * @onGetAllNotInTarifBerlakuByKelas Observable<GetAllTarifModel>
     * @param TarifModel
    */
    onGetAllNotInTarifBerlakuByKelas(Data: any): Observable<GetAllTarifModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TARIF.POST_TARIF_GET_ALL_TARIF_BERLAKU_BY_KELAS, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
