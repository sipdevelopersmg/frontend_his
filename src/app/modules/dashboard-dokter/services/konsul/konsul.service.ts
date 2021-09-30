import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import *  as API_CONFIG from '../../../../api/DASHBOARD-DOKTER';

@Injectable({
    providedIn: 'root'
})
export class KonsulService {

    API_CONFIG = API_CONFIG.API_DASHBOARD_DOKTER.KONSUL;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onPostSaveKonsulRawatJalan(Data: any): Observable<any> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_KONSUL_PASIEN_IRJA, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
