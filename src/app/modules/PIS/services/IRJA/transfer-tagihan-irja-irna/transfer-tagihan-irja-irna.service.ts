import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel, PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/IRJA';

@Injectable({
    providedIn: 'root'
})
export class TransferTagihanIrjaIrnaService {

    API_CONFIG = API_CONFIG.IRJA.TRANSFER_TAGIHAN_IRJA_IRNA;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetHistoryTransferTagihanRawatJalan(parameter: PostRequestByDynamicFiterModel[]): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_CONFIG.POST_HISTORY_TRANSFER_TAGIHAN_IRJA, parameter);
    }

    onGetAdmisiPasienRawatInap(no_rekam_medis: string): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(`${this.API_CONFIG.GET_ADMISI_PASIEN_IRNA}${no_rekam_medis}`);
    }

    onPostTransferTagihanRawatJalan(param: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_TRANSFER_TAGIHAN_IRJA, param)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
