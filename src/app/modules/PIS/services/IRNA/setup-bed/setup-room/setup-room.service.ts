import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../../api/PIS/IRNA';
import { DeleteKamarModel, GetAllKamarModel, GetByIdKamarModel, IKamarModel, PostSaveKamarModel, PutUpdateKamarModel, PutUpdateStatusKamarModel } from 'src/app/modules/PIS/models/IRNA/setup-kamar.model';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

@Injectable({
    providedIn: 'root'
})
export class SetupRoomService {

    API_SETUP_BED = API_CONFIG.IRNA.SETUP_BED_IRNA;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllRoom(): Observable<GetAllKamarModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_BED.GET_ALL_ROOM);
    }

    onGetAllRoomByDynamicFilter(body: PostRequestByDynamicFiterModel[]): Observable<GetAllKamarModel> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_SETUP_BED.GET_ALL_ROOM_BY_DYNAMIC_FILTER, body);
    }

    onGetRoomById(RoomId: number): Observable<GetByIdKamarModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_BED.GET_BY_ID_ROOM, RoomId);
    }

    onPostSaveRoom(Data: IKamarModel): Observable<PostSaveKamarModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETUP_BED.POST_SAVE_ROOM, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPutUpdateRoom(Data: IKamarModel): Observable<PutUpdateKamarModel> {
        return this.httpOperationService.defaultPutRequest(this.API_SETUP_BED.PUT_UPDATE_ROOM, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPutUpdateStatusRoom(id_setup_room: number, is_active: boolean): Observable<PutUpdateStatusKamarModel> {
        return this.httpOperationService.defaultPutRequest(this.API_SETUP_BED.PUT_UPDATE_STATUS_ROOM, {
            id_setup_room: id_setup_room,
            is_active: !is_active
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            })
        );
    }

    onDeleteRoom(RoomId: number): Observable<DeleteKamarModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_SETUP_BED.DELETE_ROOM + RoomId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
