import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/BILLING';
import { DeletePoliModel, GetAllPoliModel, GetByIdJenisRuanganModel, GetByIdPoliModel, PoliModel, PostInsertPoliModel, PutUpdatePoliModel, PutUpdateStatusPoliModel } from '../../../models/setup-data/setup-poli.model';

@Injectable({
    providedIn: 'root'
})
export class SetupPoliService {

    API_POLI = API_CONFIG.API_BILLING.SETUP_DATA.SETUP_POLI;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * Service Untuk Menampilkan Semua Data Poli
     * @onGetAll Observable<GetAllGrupTarifModel>
    */
    onGetAll(): Observable<GetAllPoliModel> {
        return this.httpOperationService.defaultGetRequest(this.API_POLI.GET_ALL_POLI);
    }

    /**
     * Service Untuk Menampilkan Data Poli
     * @onGetById Observable<GetByIdPoliModel>
    */
    onGetById(PoliId: number): Observable<GetByIdPoliModel> {
        return this.httpOperationService.defaultGetRequest(this.API_POLI.GET_POLI_BY_ID + PoliId);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostInsertPoliModel>
     * @param PoliModel
    */
    onPostSave(Data: PoliModel): Observable<PostInsertPoliModel> {
        return this.httpOperationService.defaultPostRequest(this.API_POLI.POST_SAVE_POLI, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdatePoliModel>
     * @param PoliModel
    */
    onPutEdit(Data: PoliModel): Observable<PutUpdatePoliModel> {
        return this.httpOperationService.defaultPutRequest(this.API_POLI.PUT_UPDATE_POLI, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdatePoliModel>
     * @param PoliModel
    */
    onPutStatusEdit(id_poli: number, is_active: boolean): Observable<PutUpdateStatusPoliModel> {
        return this.httpOperationService.defaultPutRequest(this.API_POLI.PUT_UPDATE_STATUS_POLI, {
            id_poli: id_poli,
            is_active: is_active
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    /**
     * Service Untuk Menghapus Data
     * @onDelete Observable<DeletePoliModel>
     * @param PoliId
    */
    onDelete(PoliId: number): Observable<DeletePoliModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_POLI.DELETE_POLI_BY_ID + PoliId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    /**
    * Service Untuk Menampilkan Data Poli Per Ruangan
    * @onGetAllByIdJenisRuangan Observable<GetByIdJenisRuanganModel>
   */
    onGetAllByIdJenisRuangan(JenisRuanganId: number): Observable<GetByIdJenisRuanganModel> {
        return this.httpOperationService.defaultGetRequest(this.API_POLI.GET_ALL_BY_ID_JENIS_RUANGAN + JenisRuanganId);
    }

}
