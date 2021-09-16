import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { GetAllHistoryTransaksiPemasukanRawatJalanModel, GetAllPoliByIdRegisterModel, PostCancelTransaksiPemasukanRawatJalanModel, PostInsertTransaksiPemasukanRawatJalanModel } from '../../../models/IRJA/pemasukan-rawat-jalan.model';
import * as API_CONFIG from '../../../../../api/PIS/';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PemasukanRawatJalanService {

    API_PEMASUKAN_RAWAT_JALAN = API_CONFIG.API_PIS.IRJA.IRJA.PEMASUKAN_RAWAT_JALAN;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
    ) { }

    /**
     * @onGetAllPoliByIdRegister Method Obervable untuk Get All Pasien IRJA
     * @param Person PersonModel
    */
    onGetAllPoliByIdRegister(RegisterId: number): Observable<GetAllPoliByIdRegisterModel> {
        return this.httpOperationService.defaultGetRequest(this.API_PEMASUKAN_RAWAT_JALAN.GET_ALL_POLI_BY_ID_REGISTER + RegisterId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * @onPostSaveTransPemasukanRawatJalan Method Obervable untuk Post Save Transaksi Pemasukan Rawat Jalan
     * @param Person PersonModel
    */
    onPostSaveTransPemasukanRawatJalan(Data: any): Observable<PostInsertTransaksiPemasukanRawatJalanModel> {
        return this.httpOperationService.defaultPostRequest(this.API_PEMASUKAN_RAWAT_JALAN.POST_SAVE_TRANSAKSI_PEMASUKAN_IRJA, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * @onPostCancelTransPemasukanRawatJalan Method Obervable untuk Post Cancel Transaksi Pemasukan Rawat Jalan
     * @param Person PersonModel
    */
    onPostCancelTransPemasukanRawatJalan(Data: any): Observable<PostCancelTransaksiPemasukanRawatJalanModel> {
        return this.httpOperationService.defaultPostRequest(this.API_PEMASUKAN_RAWAT_JALAN.POST_CANCEL_TRANSAKSI_PEMASUKAN_IRJA, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetHistoryTransPemasukanRawatJalan(RegisterId: number): Observable<GetAllHistoryTransaksiPemasukanRawatJalanModel> {
        return this.httpOperationService.defaultGetRequest(this.API_PEMASUKAN_RAWAT_JALAN.GET_HISTORY_TRANSAKSI_PEMASUKAN_IRJA + RegisterId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
