import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/IRNA';
import { IAntrianTppriModel, PostSaveAntrianTppriModel } from '../../../models/IRNA/daftar-pemesanan-tempat-tidur.model';

@Injectable({
    providedIn: 'root'
})
export class DaftarPemesananTempatTidurService {

    API_DAFTAR_PEMESANAN_TEMPAT_TIDUR = API_CONFIG.IRNA.DAFTAR_ANTRIAN_PEMESANAN_BED;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onPostSaveAntrianPemesananTempatTidur(Data: IAntrianTppriModel): Observable<PostSaveAntrianTppriModel> {
        return this.httpOperationService.defaultPostRequest(this.API_DAFTAR_PEMESANAN_TEMPAT_TIDUR.POST_SAVE_ANTRIAN_TPPRI, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
