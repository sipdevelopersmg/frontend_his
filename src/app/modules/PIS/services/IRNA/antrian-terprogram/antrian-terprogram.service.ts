import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel, PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/IRNA';
import { GetAllAntrianTerprogramPemesananBedModel, GetPersonTerjadwalForApproveModel, IPostSaveAntrianTerprogramPemesananBedModel } from '../../../models/IRNA/antrian-terprogram-pemesanan-bed.model';

@Injectable({
    providedIn: 'root'
})
export class AntrianTerprogramService {

    API_CONFIG = API_CONFIG;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onPostSaveAntrianTerprogram(Data: IPostSaveAntrianTerprogramPemesananBedModel): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.IRNA.ANTRIAN_TERPROGRAM.INSERT_ANTRIAN_TERPROGRAM, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onGetAllAntrianTerprogram(Parameter: PostRequestByDynamicFiterModel[]): Observable<GetAllAntrianTerprogramPemesananBedModel> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_CONFIG.IRNA.ANTRIAN_TERPROGRAM.GET_ALL_ANTRIAN_TERPROGRAM, Parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onGetPersonTerjadwalForApprove(id_setup_bed_room: number): Observable<GetPersonTerjadwalForApproveModel> {
        return this.httpOperationService.defaultGetRequest(`${this.API_CONFIG.IRNA.ANTRIAN_TERPROGRAM.GET_PERSON_TERJADWAL_FOR_APPROVE}${id_setup_bed_room}`);
    }

    onPostUpdateStatusApprove(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.IRNA.ANTRIAN_TERPROGRAM.POST_UPDATE_STATUS_APPROVE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onPostUpdateStatusCanceled(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.IRNA.ANTRIAN_TERPROGRAM.POST_UPDATE_STATUS_BATAL, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
