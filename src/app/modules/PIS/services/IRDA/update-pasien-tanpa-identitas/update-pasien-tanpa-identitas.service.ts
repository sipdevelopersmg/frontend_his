import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/IRDA';
import { IUpdatePasienRawatDaruratAnonimModel, PutUpdateDataPasienRawatDaruratAnonimModel } from '../../../models/IRDA/update_pasien_tanpa_identitas.model';

@Injectable({
    providedIn: 'root'
})
export class UpdatePasienTanpaIdentitasService {

    API_CONFIG = API_CONFIG.IRDA.UPDATE_PASIEN_TANPA_IDENTITAS;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onPutUpdateDataPasienRawatDaruratAnonim(parameter: IUpdatePasienRawatDaruratAnonimModel): Observable<PutUpdateDataPasienRawatDaruratAnonimModel> {
        return this.httpOperationService.defaultPutRequest(this.API_CONFIG.PUT_UPDATE_DATA_ANONIM, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
