import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/IRNA';
import { GetDaftarPermintaanMutasiByIdRegisterModel, IRequestMutasiBedModel, PostCancelRequestMutasiBedModel, PostSaveRequestMutasiBedModel } from '../../../models/IRNA/management_bed_rawat_inap.model';

@Injectable({
    providedIn: 'root'
})
export class ManagementBedRawatInapService {

    API_CONFIG = API_CONFIG.IRNA.MANAGEMENT_BED_IRNA;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetDaftarPermintaanMutasiBedByIdRegister(RegisterId: number): Observable<GetDaftarPermintaanMutasiByIdRegisterModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL_BED_TRANSFER_BY_ID_REGISTER + RegisterId);
    }

    onPostSaveRequestMutasiBed(parameter: IRequestMutasiBedModel): Observable<PostSaveRequestMutasiBedModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_SAVE_REQUEST_MUTASI, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onPostCancelRequestMutasiBed(id_bed_transfer: number, reason_canceled: string): Observable<PostCancelRequestMutasiBedModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_CANCEL_REQUEST_MUTASI, {
            id_bed_transfer: id_bed_transfer,
            reason_canceled: reason_canceled
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }
}
