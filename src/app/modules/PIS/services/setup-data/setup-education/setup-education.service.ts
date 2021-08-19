import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api';
import { DeleteEducationModel, EducationModel, GetAllEducationModel, PostSaveEducationModel, PutUpdateEducationModel } from '../../../models/setup-data/setup-education.model';

@Injectable({
    providedIn: 'root'
})
export class SetupEducationService {

    API_EDUCATION = API_CONFIG.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_EDUCATION;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllEducationModel>
    */
    onGetAll(): Observable<GetAllEducationModel> {
        return this.httpOperationService.defaultGetRequest(this.API_EDUCATION.GET_ALL_SETUP_EDUCATION);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSaveEducationModel>
     * @param EducationModel
    */
    onPostSave(Data: EducationModel): Observable<PostSaveEducationModel> {
        return this.httpOperationService.defaultPostRequest(this.API_EDUCATION.POST_SAVE_SETUP_EDUCATION, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<PutUpdateEducationModel>
     * @param EducationModel
    */
    onPutEdit(Data: EducationModel): Observable<PutUpdateEducationModel> {
        return this.httpOperationService.defaultPutRequest(this.API_EDUCATION.PUT_UPDATE_SETUP_EDUCATION, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onDelete Observable<DeleteEducationModel>
     * @param EducationId
    */
    onDelete(EducationId: number): Observable<DeleteEducationModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_EDUCATION.DELETE_SETUP_EDUCATION + EducationId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
