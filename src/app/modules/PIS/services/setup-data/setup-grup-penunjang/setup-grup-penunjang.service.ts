import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/SETUP_DATA';
import { DeleteGrupPenunjangModel, GetAllGrupPenunjangModel, GetByIdGrupPenunjangModel, GrupPenunjangModel, PostSaveGrupPenunjangModel, UpdateGrupPenunjangModel } from '../../../models/setup-data/setup_grup_penunjang.model';

@Injectable({
    providedIn: 'root'
})
export class SetupGrupPenunjangService {

    API_ORDER_PENUNJANG = API_CONFIG.API_SETUP_DATA.SETUP_ORDER_PENUNJANG;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAll(): Observable<GetAllGrupPenunjangModel> {
        return this.httpOperationService.defaultGetRequest(this.API_ORDER_PENUNJANG.GET_ALL_SETUP_GRUP_PENUNJANG);
    }

    onGetById(GrupPenunjangId: string): Observable<GetByIdGrupPenunjangModel> {
        return this.httpOperationService.defaultGetRequest(this.API_ORDER_PENUNJANG.GET_BY_ID_SETUP_GRUP_PENUNJANG + GrupPenunjangId);
    }

    onPostSave(Data: GrupPenunjangModel): Observable<PostSaveGrupPenunjangModel> {
        return this.httpOperationService.defaultPostRequest(this.API_ORDER_PENUNJANG.POST_SAVE_SETUP_GRUP_PENUNJANG, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPutUpdate(Data: GrupPenunjangModel): Observable<UpdateGrupPenunjangModel> {
        return this.httpOperationService.defaultPutRequest(this.API_ORDER_PENUNJANG.PUT_UPDATE_SETUP_GRUP_PENUNJANG, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onDelete(GrupPenunjangId: string): Observable<DeleteGrupPenunjangModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_ORDER_PENUNJANG.DELETE_SETUP_GRUP_PENUNJANG + GrupPenunjangId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
