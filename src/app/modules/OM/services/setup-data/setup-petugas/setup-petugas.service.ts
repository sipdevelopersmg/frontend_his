import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/OM';
import { DeletePetugasModel, GetAllPetugasModel, PetugasModel, PostSavePetugasModel, PutUpdatePetugasModel } from '../../../models/setup-data/setup-petugas.model';

@Injectable({
    providedIn: 'root'
})
export class SetupPetugasService {

    API_EDUCATION = API_CONFIG.API_ORDER_MANAGEMENT.SETUP_DATA.SETUP_PETUGAS;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * Service Untuk Menampilkan Semua data by dynamic filter
     * @onGetAllByDynamicFilter Observable<GetAllPetugasModel>
    */
    onGetAllByDynamicFilter(Data: any): Observable<GetAllPetugasModel> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_EDUCATION.GET_ALL_BY_DYNAMIC_FILTER, Data);
    }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllPetugasModel>
    */
    onGetAll(): Observable<GetAllPetugasModel> {
        return this.httpOperationService.defaultGetRequest(this.API_EDUCATION.GET_ALL);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSavePetugasModel>
     * @param PetugasModel
    */
    onPostSave(Data: PetugasModel): Observable<PostSavePetugasModel> {
        return this.httpOperationService.defaultPostRequest(this.API_EDUCATION.POST_SAVE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<PutUpdatePetugasModel>
     * @param PetugasModel
    */
    onPutEdit(Data: PetugasModel): Observable<PutUpdatePetugasModel> {
        return this.httpOperationService.defaultPutRequest(this.API_EDUCATION.UPDATE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onDelete Observable<DeletePetugasModel>
     * @param PetugasId
    */
    onDelete(PetugasId: number): Observable<DeletePetugasModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_EDUCATION.DELETE + PetugasId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
