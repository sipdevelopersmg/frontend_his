import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/IRNA';
import { GetAllDaftarPemesananTempatTidurModel, IAntrianTppriModel, PostSaveAntrianTppriModel } from '../../../models/IRNA/daftar-pemesanan-tempat-tidur.model';

@Injectable({
    providedIn: 'root'
})
export class DaftarPemesananTempatTidurService {

    API_DAFTAR_PEMESANAN_TEMPAT_TIDUR = API_CONFIG.IRNA.DAFTAR_ANTRIAN_PEMESANAN_BED;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllAntrianPemesananTempatTidur(Parameter: PostRequestByDynamicFiterModel[]): Observable<GetAllDaftarPemesananTempatTidurModel> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_DAFTAR_PEMESANAN_TEMPAT_TIDUR.GET_ALL_ANTRIAN_TPPRI, Parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPostSaveAntrianPemesananTempatTidur(Data: IAntrianTppriModel): Observable<PostSaveAntrianTppriModel> {
        return this.httpOperationService.defaultPostRequest(this.API_DAFTAR_PEMESANAN_TEMPAT_TIDUR.POST_SAVE_ANTRIAN_TPPRI, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
