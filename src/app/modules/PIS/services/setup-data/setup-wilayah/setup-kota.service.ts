import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api';
import { DeleteKotaModel, GetAllKotaModel, KotaModel, PostSaveKotaModel, PutUpdateKotaModel } from '../../../models/setup-data/setup-kota.model';

@Injectable({
    providedIn: 'root'
})
export class SetupKotaService {

    API_KOTA = API_CONFIG.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_KOTA;

    public dataSource = new BehaviorSubject([]); 
    private result :any;
    
    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    /**
     * Service Untuk Mengisi dataScource 
     * @setDataSource Void
     * @param KodeWilayaProvinsi string
    */
     setDataSource(KodeWilayahProvinsi: string):void{
        this.onGetAll(KodeWilayahProvinsi).subscribe((result) => {
          this.dataSource.next(result.data);
        });
      }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllKotaModel>
     * @param KodeWilayaProvinsi string
    */
    onGetAll(KodeWilayahProvinsi: string): Observable<GetAllKotaModel> {
        return this.httpOperationService.defaultGetRequest(this.API_KOTA.GET_ALL_SETUP_KOTA_BY_PROVINSI_ID + KodeWilayahProvinsi);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSaveKotaModel>
     * @param KotaModel
    */
    onPostSave(Data: KotaModel): Observable<PostSaveKotaModel> {
        return this.httpOperationService.defaultPostRequest(this.API_KOTA.POST_SAVE_SETUP_KOTA, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdateKotaModel>
     * @param KotaModel
    */
    onPutEdit(Data: KotaModel): Observable<PutUpdateKotaModel> {
        return this.httpOperationService.defaultPutRequest(this.API_KOTA.PUT_UPDATE_SETUP_KOTA, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
    * Service Untuk Menghapus Data
    * @onDelete Observable<DeleteKotaModel>
    * @param KodeWilayahKota
   */
    onDelete(KodeWilayahKota: string): Observable<DeleteKotaModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_KOTA.DELETE_SETUP_KOTA + KodeWilayahKota)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
