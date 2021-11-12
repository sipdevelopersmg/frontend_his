import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/IRNA';
import { GetAllCaraPulangModel, GetAllKondisiPulangModel, GetInfoKematianByIdRegisterModel, GetPengantarPembayaranByIdRegisterModel, IInfoKematianModel, IPengantarPembayaranModel, PostCancelPengantarPembayaranModel, PostSaveInfoKematianModel, PostSavePengantarPembayaranModel } from '../../../models/IRNA/surat_pengantar_pembayaran.model';

@Injectable({
    providedIn: 'root'
})
export default class SuratPengantarPembayaranService {

    API_CONFIG = API_CONFIG.IRNA.SURAT_PENGANTAR_PEMBAYARAN;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllCaraPulang(): Observable<GetAllCaraPulangModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL_CARA_PULANG);
    }

    onGetAllKondisiPulang(): Observable<GetAllKondisiPulangModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL_KONDISI_PULANG);
    }

    onPostSaveInfoKematian(parameter: IInfoKematianModel): Observable<PostSaveInfoKematianModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_SAVE_INFO_KEMATIAN, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onGetInfoKematianByIdRegister(RegisterId: number): Observable<GetInfoKematianByIdRegisterModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_INFO_KEMATIAN_BY_ID_REGISTER + RegisterId);
    }

    onPostSavePengantarPembayaran(parameter: IPengantarPembayaranModel): Observable<PostSavePengantarPembayaranModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_SAVE_PENGANTAR_PEMBAYARAN, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    onCancelPengantarPembayaran(id_register: number, reason_canceled: string): Observable<PostCancelPengantarPembayaranModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_CANCEL_PENGANTAR_PEMBAYARAN, {
            id_register: id_register,
            reason_canceled: reason_canceled
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            })
        );
    }

    onGetPengantarPembayaranByIdRegister(RegisterId: number): Observable<GetPengantarPembayaranByIdRegisterModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_PENGANTAR_PEMBAYARAN_BY_ID_REGISTER + RegisterId);
    }
}
