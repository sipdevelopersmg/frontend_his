import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { DeleteGrupTarifModel, GetAllGrupTarifModel, GetByIdGrupTarifModel, GrupTarifModel, PostInsertGrupTarifModel, PutUpdateGrupTarifModel } from '../../../models/setup-data/setup-grup-tarif.model';
import * as API_CONFIG from '../../../../../api/BILLING';

@Injectable({
    providedIn: 'root'
})
export class SetupGrupTarifService {

    API_GRUP_TARIF = API_CONFIG.API_BILLING.SETUP_DATA.SETUP_GRUP_TARIF;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * Service Untuk Menampilkan Semua Data Grup Tarif
     * @onGetAll Observable<GetAllGrupTarifModel>
    */
    onGetAll(): Observable<GetAllGrupTarifModel> {
        return this.httpOperationService.defaultGetRequest(this.API_GRUP_TARIF.GET_ALL_GRUP_TARIF);
    }

    /**
     * Service Untuk Menampilkan Data Grup Tarif
     * @onGetById Observable<GetByIdGrupTarifModel>
    */
    onGetById(GrupTarifId: number): Observable<GetByIdGrupTarifModel> {
        return this.httpOperationService.defaultGetRequest(this.API_GRUP_TARIF.GET_GRUP_TARIF_BY_ID + GrupTarifId);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostInsertGrupTarifModel>
     * @param GrupTarifModel
    */
    onPostSave(Data: GrupTarifModel): Observable<PostInsertGrupTarifModel> {
        return this.httpOperationService.defaultPostRequest(this.API_GRUP_TARIF.POST_SAVE_GRUP_TARIF, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdateGrupTarifModel>
     * @param GrupTarifModel
    */
    onPutEdit(Data: GrupTarifModel): Observable<PutUpdateGrupTarifModel> {
        return this.httpOperationService.defaultPutRequest(this.API_GRUP_TARIF.PUT_UPDATE_GRUP_TARIF, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Menghapus Data
     * @onDelete Observable<DeleteGrupTarifModel>
     * @param GrupTarifId
    */
    onDelete(GrupTarifId: number): Observable<DeleteGrupTarifModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_GRUP_TARIF.DELETE_GRUP_TARIF_BY_ID + GrupTarifId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
