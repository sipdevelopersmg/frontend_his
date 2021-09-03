import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/BILLING';
import { DeleteKelompokTarifModel, GetAllKelompokTarifModel, GetByIdKelompokTarifModel, KelompokTarifModel, PostInsertKelompokTarifModel, PutUpdateKelompokTarifModel } from '../../../models/setup-data/setup-kelompok-tarif.model';

@Injectable({
    providedIn: 'root'
})
export class SetupKelompokTarifService {

    API_KELOMPOK_TARIF = API_CONFIG.API_BILLING.SETUP_DATA.SETUP_KELOMPOK_TARIF;

    public KelompokTarifSubject = new BehaviorSubject([]);

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onSetKelompokTarifSubject(): void {
        this.onGetAll()
            .subscribe((result) => {
                this.KelompokTarifSubject.next(result.data);
            });
    }

    /**
     * Service Untuk Menampilkan Semua Data Kelompok Tarif
     * @onGetAll Observable<GetAllKelompokTarifModel>
    */
    onGetAll(): Observable<GetAllKelompokTarifModel> {
        return this.httpOperationService.defaultGetRequest(this.API_KELOMPOK_TARIF.GET_ALL_KELOMPOK_TARIF);
    }

    /**
     * Service Untuk Menampilkan Data Kelompok Tarif
     * @onGetById Observable<GetByIdKelompokTarifModel>
    */
    onGetById(KelompokTarifId: number): Observable<GetByIdKelompokTarifModel> {
        return this.httpOperationService.defaultGetRequest(this.API_KELOMPOK_TARIF.GET_KELOMPOK_TARIF_BY_ID + KelompokTarifId);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostInsertKelompokTarifModel>
     * @param KelompokTarifModel
    */
    onPostSave(Data: KelompokTarifModel): Observable<PostInsertKelompokTarifModel> {
        return this.httpOperationService.defaultPostRequest(this.API_KELOMPOK_TARIF.POST_SAVE_KELOMPOK_TARIF, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdateKelompokTarifModel>
     * @param GrupTarifModel
    */
    onPutEdit(Data: KelompokTarifModel): Observable<PutUpdateKelompokTarifModel> {
        return this.httpOperationService.defaultPutRequest(this.API_KELOMPOK_TARIF.PUT_UPDATE_KELOMPOK_TARIF, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Menghapus Data
     * @onDelete Observable<DeleteKelompokTarifModel>
     * @param KelompokTarifId
    */
    onDelete(KelompokTarifId: number): Observable<DeleteKelompokTarifModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_KELOMPOK_TARIF.DELETE_KELOMPOK_TARIF_BY_ID + KelompokTarifId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
