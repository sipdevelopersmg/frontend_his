import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api';
import { DeleteKecamatanModel, GetAllKecamatanModel, KecamatanModel, PostSaveKecamatanModel, PutUpdateKecamatanModel } from '../../../models/setup-data/setup-kecamatan.model';

@Injectable({
    providedIn: 'root'
})
export class SetupKecamatanService {

    API_KECAMATAN = API_CONFIG.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_KECAMATAN;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllKecamatanModel>
     * @param KodeWilayahKota string
    */
    onGetAll(KodeWilayahKota: string): Observable<GetAllKecamatanModel> {
        return this.httpOperationService.defaultGetRequest(this.API_KECAMATAN.GET_ALL_SETUP_KECAMATAN_BY_KOTA_ID + KodeWilayahKota);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSaveKecamatanModel>
     * @param KecamatanModel
    */
    onPostSave(Data: KecamatanModel): Observable<PostSaveKecamatanModel> {
        return this.httpOperationService.defaultPostRequest(this.API_KECAMATAN.POST_SAVE_SETUP_KECAMATAN, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdateKecamatanModel>
     * @param KecamatanModel
    */
    onPutEdit(Data: KecamatanModel): Observable<PutUpdateKecamatanModel> {
        return this.httpOperationService.defaultPutRequest(this.API_KECAMATAN.PUT_UPDATE_SETUP_KECAMATAN, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
    * Service Untuk Menghapus Data
    * @onDelete Observable<DeleteKecamatanModel>
    * @param KodeWilayahKecamatan
   */
    onDelete(KodeWilayahKecamatan: string): Observable<DeleteKecamatanModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_KECAMATAN.DELETE_SETUP_KECAMATAN + KodeWilayahKecamatan)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
