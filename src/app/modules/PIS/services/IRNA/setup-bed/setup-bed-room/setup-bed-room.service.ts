import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GetAllBedModel, GetByIdBedModel, IBedModel, PostSaveBedModel, PutUpdateBedModel, PutUpdateStatusBedModel } from 'src/app/modules/PIS/models/IRNA/setup-bed.model';
import { HttpResponseModel, PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../../api/PIS/IRNA';

@Injectable({
    providedIn: 'root'
})
export class SetupBedRoomService {

    API_SETUP_BED = API_CONFIG.IRNA.SETUP_BED_IRNA;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllBedRoom(): Observable<GetAllBedModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_BED.GET_ALL_BED_ROOM);
    }

    onGetAllBedRoomByDynamicFilter(Parameter: PostRequestByDynamicFiterModel[]): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_SETUP_BED.GET_ALL_BED_ROOM_BY_DYNAMIC_FILTER, Parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onGetBedRoomById(BedRoomId: number): Observable<GetByIdBedModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_BED.GET_BY_ID_BED_ROOM, BedRoomId);
    }

    onPostSaveBedRoom(Data: IBedModel): Observable<PostSaveBedModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETUP_BED.POST_SAVE_BED_ROOM, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPutUpdateBedRoom(Data: IBedModel): Observable<PutUpdateBedModel> {
        return this.httpOperationService.defaultPutRequest(this.API_SETUP_BED.PUT_UPDATE_BED_ROOM, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPutUpdateStatusBedRoom(id_setup_bed_room: number, is_active: boolean): Observable<PutUpdateStatusBedModel> {
        return this.httpOperationService.defaultPutRequest(this.API_SETUP_BED.PUT_UPDATE_STATUS_BED_ROOM, {
            id_setup_bed_room: id_setup_bed_room,
            is_active: !is_active
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            })
        );
    }
}
