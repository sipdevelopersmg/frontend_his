import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/BILLING';
import { GetAllByIdKelasPerawatanModel, GetAllTarifBerlakuModel, GetByIdTarifBerlakuModel, PostInsertTarifBerlakuModel, PutUpdateStatusTarifBerlakuModel, PutUpdateTarifBerlakuModel, TarifBerlakuModel } from '../../../models/setting-tarif/setting-tarif-berlaku.model';
import { GetAllTarifModel } from '../../../models/setup-data/setup-tarif.model';
import { SetupTarifService } from '../../setup-data/setup-tarif/setup-tarif.service';

@Injectable({
    providedIn: 'root'
})
export class SettingTarifBerlakuService {

    API_GRUP_TARIF = API_CONFIG.API_BILLING.SETTING_HARGA_TARIF.SETTING_TARIF_BERLAKU;

    constructor(
        private setupTarifService: SetupTarifService,
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
    ) { }

    /**
     * Service Untuk Menampilkan Semua Data Tarif Berlaku
     * @onGetAll Observable<GetAllTarifBerlakuModel>
    */
    onGetAll(): Observable<GetAllTarifBerlakuModel> {
        return this.httpOperationService.defaultGetRequest(this.API_GRUP_TARIF.GET_ALL_TARIF_BERLAKU);
    }

    /**
     * Service Untuk Menampilkan Data Tarif Berlaku
     * @onGetById Observable<GetByIdTarifBerlakuModel>
    */
    onGetById(TarifBerlakuId: number): Observable<GetByIdTarifBerlakuModel> {
        return this.httpOperationService.defaultGetRequest(this.API_GRUP_TARIF.GET_TARIF_BERLAKU_BY_ID + TarifBerlakuId);
    }

    /**
     * Service Untuk Menampilkan Data Tarif Berlaku By Kelas Perawatan
     * @onGetById Observable<GetAllByIdKelasPerawatanModel>
    */
    onGetAllByIdKelasPerawatan(KelasPerawatanId: number): Observable<GetAllByIdKelasPerawatanModel> {
        return this.httpOperationService.defaultGetRequest(this.API_GRUP_TARIF.GET_ALL_TARIF_BERLAKU_BY_KELAS_PERAWATAN + KelasPerawatanId);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostInsertTarifBerlakuModel>
     * @param GrupTarifModel
    */
    onPostSave(Data: TarifBerlakuModel): Observable<PostInsertTarifBerlakuModel> {
        return this.httpOperationService.defaultPostRequest(this.API_GRUP_TARIF.POST_SAVE_TARIF_BERLAKU, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostInsertTarifBerlakuModel>
     * @param GrupTarifModel
    */
    onPostSaveListOfObject(Data: TarifBerlakuModel[]): Observable<PostInsertTarifBerlakuModel> {
        return this.httpOperationService.defaultPostRequest(this.API_GRUP_TARIF.POST_SAVE_TARIF_BERLAKU_LIST_OF_OBJECT, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdateStatusTarifBerlakuModel>
     * @param TarifBerlakuModel
    */
    onPutEdit(Data: TarifBerlakuModel): Observable<PutUpdateTarifBerlakuModel> {
        return this.httpOperationService.defaultPutRequest(this.API_GRUP_TARIF.PUT_UPDATE_TARIF_BERLAKU, Data).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    /**
     * Service Untuk Mengedit Status Active Data
     * @onPutStatusActiveEdit Observable<PutUpdateStatusTarifBerlakuModel>
     * @param id_tarif_berlaku, is_active
    */
    onPutStatusActiveEdit(id_tarif_berlaku: number, is_active: boolean): Observable<PutUpdateStatusTarifBerlakuModel> {
        return this.httpOperationService.defaultPutRequest(this.API_GRUP_TARIF.PUT_UPDATE_STATUS_TARIF_BERLAKU, {
            id_tarif_berlaku: id_tarif_berlaku,
            is_active: is_active
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onGetAllLookupTarifNotInKelas(parameter: any): Observable<GetAllTarifModel> {
        return this.setupTarifService.onGetAllNotInTarifBerlakuByKelas(parameter);
    }

    onPutKeseluruhanTarif(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPutRequest(this.API_GRUP_TARIF.PUT_UPDATE_KESELURUHAN_TARIF_BERLAKU, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
