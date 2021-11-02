import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DeleteBedStatusModel, GetAllBedStatusModel, GetByIdBedStatusModel, IBedStatusModel, PostSaveBedStatusModel, PutUpdateBedStatusModel } from 'src/app/modules/PIS/models/IRNA/setup-status-bed.model';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../../api/PIS/IRNA';

@Injectable({
    providedIn: 'root'
})
export class SetupStatusBedService {

    API_SETUP_BED = API_CONFIG.IRNA.SETUP_BED_IRNA;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllBedStatus(): Observable<GetAllBedStatusModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_BED.GET_ALL_STATUS_BED_ROOM);
    }

    onGetBedStatusById(BedStatusId: number): Observable<GetByIdBedStatusModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_BED.GET_BY_ID_STATUS_BED_ROOM, BedStatusId);
    }

    onPostSaveBedStatus(Data: IBedStatusModel): Observable<PostSaveBedStatusModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETUP_BED.POST_SAVE_STATUS_BED_ROOM, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPutUpdateBedStatus(Data: IBedStatusModel): Observable<PutUpdateBedStatusModel> {
        return this.httpOperationService.defaultPutRequest(this.API_SETUP_BED.PUT_UPDATE_BED_ROOM_STATUS, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onDeleteBedStatus(BedStatusId: number): Observable<DeleteBedStatusModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_SETUP_BED.DELETE_BED_ROOM_STATUS + BedStatusId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
