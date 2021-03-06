import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api';
import { DeleteJobTypeModel, GetAllJobTypeModel, JobTypeModel, PostSaveJobTypeModel, PutUpdateJobTypeModel } from '../../../models/setup-data/setup-job-type.model';

@Injectable({
    providedIn: 'root'
})
export class SetupJobTypeService {

    API_JOB_TYPE = API_CONFIG.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_JOB_TYPE;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<SetupPabrikModel>
    */
    onGetAll(): Observable<GetAllJobTypeModel> {
        return this.httpOperationService.defaultGetRequest(this.API_JOB_TYPE.GET_ALL_SETUP_JOB_TYPE);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSaveJobTypeModel>
     * @param JobTypeModel
    */
    onPostSave(Data: JobTypeModel): Observable<PostSaveJobTypeModel> {
        return this.httpOperationService.defaultPostRequest(this.API_JOB_TYPE.POST_SAVE_SETUP_JOB_TYPE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<PutUpdateJobTypeModel>
     * @param JobTypeModel
    */
    onPutEdit(Data: JobTypeModel): Observable<PutUpdateJobTypeModel> {
        return this.httpOperationService.defaultPutRequest(this.API_JOB_TYPE.PUT_UPDATE_SETUP_JOB_TYPE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onDelete Observable<DeleteJobTypeModel>
     * @param JobTypeId
    */
    onDelete(JobTypeId: number): Observable<DeleteJobTypeModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_JOB_TYPE.DELETE_SETUP_JOB_TYPE + JobTypeId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
