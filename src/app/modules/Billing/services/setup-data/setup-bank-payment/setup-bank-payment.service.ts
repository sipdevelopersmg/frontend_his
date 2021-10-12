import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/BILLING';
import { DeleteBankPaymentModel, GetAllBankPaymentModel, GetByIdBankPaymentModel, IBankPaymentModel, PostInsertBankPaymentModel, PutUpdateBankPaymentModel } from '../../../models/setup-data/setup-bank-payment.model';

@Injectable({
    providedIn: 'root'
})
export class SetupBankPaymentService {

    API_BANK_PAYMENT = API_CONFIG.API_BILLING.SETUP_DATA.SETUP_BANK_PAYMENT;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * Service Untuk Menampilkan Semua Data Bank Payment
     * @onGetAll Observable<GetAllBankPaymentModel>
    */
    onGetAll(): Observable<GetAllBankPaymentModel> {
        return this.httpOperationService.defaultGetRequest(this.API_BANK_PAYMENT.GET_ALL);
    }

    /**
     * Service Untuk Menampilkan Data Bank Payment
     * @onGetById Observable<GetByIdBankPaymentModel>
    */
    onGetById(BankPaymentId: number): Observable<GetByIdBankPaymentModel> {
        return this.httpOperationService.defaultGetRequest(this.API_BANK_PAYMENT.GET_BY_ID + BankPaymentId);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostInsertBankPaymentModel>
     * @param IBankPaymentModel
    */
    onPostSave(Data: IBankPaymentModel): Observable<PostInsertBankPaymentModel> {
        return this.httpOperationService.defaultPostRequest(this.API_BANK_PAYMENT.POST_SAVE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdateBankPaymentModel>
     * @param IBankPaymentModel
    */
    onPutEdit(Data: IBankPaymentModel): Observable<PutUpdateBankPaymentModel> {
        return this.httpOperationService.defaultPutRequest(this.API_BANK_PAYMENT.PUT_UPDATE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Menghapus Data
     * @onDelete Observable<DeleteBankPaymentModel>
     * @param BankPaymentId
    */
    onDelete(BankPaymentId: number): Observable<DeleteBankPaymentModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_BANK_PAYMENT.DELETE + BankPaymentId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
