import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../../api/PIS/IRNA';
import { DeleteKategoriKamarModel, GetAllKategoriKamarModel, GetByIdKategoriKamarModel, IKategoriKamarModel, PostSaveKategoriKamarModel, PutUpdateKategoriKamarModel, PutUpdateStatusKategoriKamarModel } from '../../../../models/IRNA/setup-kategori-kamar.model';

@Injectable({
    providedIn: 'root'
})
export class SetupRoomCategoryService {

    API_SETUP_BED = API_CONFIG.IRNA.SETUP_BED_IRNA;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllRoomCategory(): Observable<GetAllKategoriKamarModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_BED.GET_ALL_ROOM_CATEGORY);
    }

    onGetRoomCategoryById(RoomCategoryId: number): Observable<GetByIdKategoriKamarModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_BED.GET_BY_ID_ROOM_CATEGORY, RoomCategoryId);
    }

    onPostSaveRoomCategory(Data: IKategoriKamarModel): Observable<PostSaveKategoriKamarModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETUP_BED.POST_SAVE_ROOM_CATEGORY, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPutUpdateRoomCategory(Data: IKategoriKamarModel): Observable<PutUpdateKategoriKamarModel> {
        return this.httpOperationService.defaultPutRequest(this.API_SETUP_BED.PUT_UPDATE_ROOM_CATEGORY, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPutUpdateStatusRoomCategory(id_setup_room_category: number, is_active: boolean): Observable<PutUpdateStatusKategoriKamarModel> {
        return this.httpOperationService.defaultPutRequest(this.API_SETUP_BED.PUT_UPDATE_STATUS_ROOM_CATEGORY, {
            id_setup_room_category: id_setup_room_category,
            is_active: !is_active
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            })
        );
    }

    onDeleteRoomCategory(RoomCategoryId: number): Observable<DeleteKategoriKamarModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_SETUP_BED.DELETE_ROOM_CATEGORY + RoomCategoryId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
