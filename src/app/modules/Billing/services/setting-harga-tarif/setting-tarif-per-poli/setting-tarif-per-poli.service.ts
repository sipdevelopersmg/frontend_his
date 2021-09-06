import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/BILLING';
import { GetAllTarifPerPoliByDynamicFilterModel, GetAllTarifPerPoliModel, GetByIdPoliModel, GetByIdTarifPerPoliModel, PostInsertTarifPerPoliModel, PutUpdateStatusTarifPerPoliModel, TarifPerPoliModel } from '../../../models/setting-tarif/setting-tarif-per-poli.model';

@Injectable({
    providedIn: 'root'
})
export class SettingTarifPerPoliService {

    API_SETTING_TARIF_PER_POLI = API_CONFIG.API_BILLING.SETTING_HARGA_TARIF.SETTING_TARIF_PER_POLI;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
    ) { }

    /**
     * Service Untuk Menampilkan Semua Data Tarif Berlaku Per Poli Per Poli
     * @onGetAll Observable<GetAllTarifPerPoliModel>
    */
    onGetAll(): Observable<GetAllTarifPerPoliModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETTING_TARIF_PER_POLI.GET_ALL_TARIF_BERLAKU_PER_POLI);
    }

    /**
     * Service Untuk Menampilkan Data Tarif Berlaku Per Poli
     * @onGetById Observable<GetByIdTarifBerlakuModel>
    */
    onGetById(TarifBerlakuPoliId: number): Observable<GetByIdTarifPerPoliModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETTING_TARIF_PER_POLI.GET_TARIF_BERLAKU_PER_POLI_BY_ID + TarifBerlakuPoliId);
    }

    /**
     * Service Untuk Menampilkan Data Tarif Berlaku Per Poli
     * @onGetById Observable<GetByIdTarifBerlakuModel>
    */
    onGetAllByIdPoli(PoliId: number): Observable<GetByIdPoliModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETTING_TARIF_PER_POLI.GET_TARIF_BERLAKU_PER_POLI_BY_ID + PoliId);
    }

    onGetAllByDynamicFilter(parameter: any): Observable<GetAllTarifPerPoliByDynamicFilterModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETTING_TARIF_PER_POLI.GET_TARIF_BERLAKU_PER_POLI_BY_DYNAMIC_FILTER_AND_ID_POLI, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostInsertTarifPerPoliModel>
     * @param TarifPerPoliModel
    */
    onPostSave(Data: TarifPerPoliModel): Observable<PostInsertTarifPerPoliModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETTING_TARIF_PER_POLI.POST_SAVE_TARIF_BERLAKU_PER_POLI, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSaveListOfObject Observable<PostInsertTarifBerlakuModel>
     * @param TarifPerPoliModel[]
    */
    onPostSaveListOfObject(Data: TarifPerPoliModel[]): Observable<PostInsertTarifPerPoliModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETTING_TARIF_PER_POLI.POST_SAVE_TARIF_BERLAKU_PER_POLI_LIST, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Status Active Data
     * @onPutStatusActiveEdit Observable<PutUpdateStatusTarifPerPoliModel>
     * @param id_tarif_berlaku_poli, is_active
    */
    onPutStatusActiveEdit(id_tarif_berlaku_poli: number, is_active: boolean): Observable<PutUpdateStatusTarifPerPoliModel> {
        return this.httpOperationService.defaultPutRequest(this.API_SETTING_TARIF_PER_POLI.PUT_UPDATE_STATUS_TARIF_BERLAKU_PER_POLI, {
            id_tarif_berlaku_poli: id_tarif_berlaku_poli,
            is_active: is_active
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }
}
