import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as CONFIG from '../../../../../api/PIS/IRJA';
import { GetAllAntrianRawatJalanModel } from '../../../models/IRJA/antrian-pasien-rawat-jalan.model';

@Injectable({
    providedIn: 'root'
})
export class AntrianPasienRawatJalanService {

    API_CONFIG = CONFIG;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllDataAntrianRawatJalanByIdPoli(IdPoli: number): Observable<GetAllAntrianRawatJalanModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.IRJA.ANTRIAN_PASIEN_RAWAT_JALAN.GET_ANTRIAN_PASIEN_BY_DOKTER_PER_POLI + IdPoli);
    }

    onGetAllDataAntrianRawatJalan() {
        // return this.httpOperationService.defaultPostRequest(CONFIG.API.IRJA.GET_ALL_ANTRIAN_FROM_PENDAFTARAN_ULANG, []);
    }

    onPostSaveKonsulAntrianRawatJalan(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.IRJA.ANTRIAN_PASIEN_RAWAT_JALAN.POST_SAVE_KONSUL_ANTRIAN_PASIEN_IRJA, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetRiwayatPemeriksaanPasienRawatJalan(RegisterId: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.IRJA.ANTRIAN_PASIEN_RAWAT_JALAN.GET_RIWAYAT_KONSUL_ANTRIAN_PASIEN_IRJA + RegisterId);
    }

    onPostCancelKonsulRawatJalan(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.IRJA.ANTRIAN_PASIEN_RAWAT_JALAN.POST_CANCEL_KONSUL_ANTRIAN_PASIEN_IRJA, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
