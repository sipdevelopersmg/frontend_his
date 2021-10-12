import { Injectable } from '@angular/core';
import { IBankDarahModel, PostSaveBankDarahModel } from '../../models/bank_darah.model';
import *  as API_CONFIG from '../../../../api/DASHBOARD-DOKTER';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';

@Injectable({
    providedIn: 'root'
})
export class BankDarahService {

    API_CONFIG = API_CONFIG.API_DASHBOARD_DOKTER.BANK_DARAH;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
    ) { }

    onPostSaveBankDarah(Data: IBankDarahModel): Observable<PostSaveBankDarahModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_SAVE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
