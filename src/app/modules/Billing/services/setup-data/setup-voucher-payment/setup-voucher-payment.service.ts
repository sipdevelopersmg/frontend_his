import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/BILLING';
import { DeleteVoucherPaymentModel, GetAllVoucherPaymentModel, GetByIdVoucherPaymentModel, IVoucherPaymentModel, PostInsertVoucherPaymentModel, PutUpdateVoucherPaymentModel } from '../../../models/setup-data/setup-voucher-payment.model';

@Injectable({
    providedIn: 'root'
})
export class SetupVoucherPaymentService {

    API_VOUCHER_PAYMENT = API_CONFIG.API_BILLING.SETUP_DATA.SETUP_VOUCHER_PAYMENT;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * Service Untuk Menampilkan Semua Data Bank Payment
     * @onGetAll Observable<GetAllVoucherPaymentModel>
    */
    onGetAll(): Observable<GetAllVoucherPaymentModel> {
        return this.httpOperationService.defaultGetRequest(this.API_VOUCHER_PAYMENT.GET_ALL);
    }

    /**
     * Service Untuk Menampilkan Data Bank Payment
     * @onGetById Observable<GetByIdBankPaymentModel>
    */
    onGetById(VoucherPaymentId: number): Observable<GetByIdVoucherPaymentModel> {
        return this.httpOperationService.defaultGetRequest(this.API_VOUCHER_PAYMENT.GET_BY_ID + VoucherPaymentId);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostInsertBankPaymentModel>
     * @param IBankPaymentModel
    */
    onPostSave(Data: IVoucherPaymentModel): Observable<PostInsertVoucherPaymentModel> {
        return this.httpOperationService.defaultPostRequest(this.API_VOUCHER_PAYMENT.POST_SAVE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdateVoucherPaymentModel>
     * @param IVoucherPaymentModel
    */
    onPutEdit(Data: IVoucherPaymentModel): Observable<PutUpdateVoucherPaymentModel> {
        return this.httpOperationService.defaultPutRequest(this.API_VOUCHER_PAYMENT.PUT_UPDATE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Menghapus Data
     * @onDelete Observable<DeleteVoucherPaymentModel>
     * @param VoucherPaymentId
    */
    onDelete(VoucherPaymentId: number): Observable<DeleteVoucherPaymentModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_VOUCHER_PAYMENT.DELETE + VoucherPaymentId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdateVoucherPaymentModel>
     * @param IVoucherPaymentModel
    */
    onPutCancel(id_voucher: number, reason_canceled: string): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPutRequest(this.API_VOUCHER_PAYMENT.CANCEL, {
            id_voucher: id_voucher,
            reason_canceled: reason_canceled
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }
}
