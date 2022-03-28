import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/IRNA';
import { PostAdmisiRawatJalanWithPenjaminModel } from '../../../models/IRJA/admisi-pasien-rawat-jalan.model';
import { GetAdmisiPasienRawatInapByIdRegisterModel, GetAllAdmisiPasienRawatInapModel, IAdmisiPasienRawatInapModel, IAdmisiPasienRawatInapNonTPPRIModel, PostAdmisiRawatInapNonPenjaminNonTPPRIModel, PostAdmisiRawatInapWithPenjaminNonTPPRIModel, PostAdmisiRawatInapWithPenjaminTPRRIModel, PostAdmisiRawatJalanWithNonPenjaminTPRRIModel, PutUpdateAdmisiRawatInapDifferentBedModel } from '../../../models/IRNA/admisi-pasien-rawat-inap.model';

@Injectable({
    providedIn: 'root'
})
export class AdmisiPasienRawatInapService {

    API_CONFIG = API_CONFIG.IRNA.ADMISI_PASIEN_RAWAT_INAP;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * onGetAllAdmisiPasienRawatInap
    */
    onGetAllAdmisiPasienRawatInap(parameter: PostRequestByDynamicFiterModel[]): Observable<GetAllAdmisiPasienRawatInapModel> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_CONFIG.GET_ALL_ADMISI_PASIEN_IRNA, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetAdmisiPasienRawatInapByIdRegister(RegisterId: number): Observable<GetAdmisiPasienRawatInapByIdRegisterModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ADMISI_PASIEN_IRNA_BY_ID_REGISTER + RegisterId);
    }

    /**
     * onPostAdmisiRawatJalanTanpaPenjamin
    */
    onPostAdmisiRawatJalanTanpaPenjaminTPPRI(parameter: IAdmisiPasienRawatInapModel): Observable<PostAdmisiRawatJalanWithNonPenjaminTPRRIModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_ADMISI_RAWAT_INAP_NON_PENJAMIN_TPPRI, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * onPostAdmisiRawatJalanWithPenjaminTPPRI
    */
    onPostAdmisiRawatJalanWithPenjaminTPPRI(parameter: IAdmisiPasienRawatInapModel): Observable<PostAdmisiRawatInapWithPenjaminTPRRIModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_ADMISI_RAWAT_INAP_WITH_PENJAMIN_TPPRI, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * onPostAdmisiRawatJalanTanpaPenjamin
    */
    onPostAdmisiRawatJalanTanpaPenjamin(parameter: IAdmisiPasienRawatInapNonTPPRIModel): Observable<PostAdmisiRawatInapNonPenjaminNonTPPRIModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_ADMISI_RAWAT_INAP_NON_PENJAMIN, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * onPostAdmisiRawatJalanWithPenjaminTPPRI
    */
    onPostAdmisiRawatJalanWithPenjamin(parameter: IAdmisiPasienRawatInapNonTPPRIModel): Observable<PostAdmisiRawatInapWithPenjaminNonTPPRIModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_ADMISI_RAWAT_INAP_WITH_PENJAMIN, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * onPutUpdateAdmisiRawatInapDifferentBed
    */
    onPutUpdateAdmisiRawatInapDifferentBed(id_antrian_tppri: number, reason_different_bed: string): Observable<PutUpdateAdmisiRawatInapDifferentBedModel> {
        return this.httpOperationService.defaultPutRequest(this.API_CONFIG.PUT_UPDATE_DIFFERENT_BED, {
            id_antrian_tppri: id_antrian_tppri,
            reason_different_bed: reason_different_bed
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onGetPasienByPoli(id_poli): Observable<any> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_CONFIG.GET_PASIEN_BY_POLI + '/' + id_poli, [])
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
