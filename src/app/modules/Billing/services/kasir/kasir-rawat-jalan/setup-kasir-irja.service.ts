import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/BILLING';

@Injectable({
    providedIn: 'root'
})
export class SetupKasirIrjaService {

    API_SETUP_KASIR_IRJA = API_CONFIG.API_BILLING.KASIR.API_KASIR.KASIR_RAWAT_JALAN;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
    ) { }

    onPostSaveBukaKasir(modal_awal: number, id_user_kasir: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETUP_KASIR_IRJA.POST_SAVE_BUKA_KASIR, {
            modal_awal: modal_awal,
            id_user_kasir: id_user_kasir
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }
}
