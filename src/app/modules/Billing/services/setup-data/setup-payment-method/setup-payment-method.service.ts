import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/BILLING';
import { DeletePaymentMethodDetailModel, GetAllPaymentMethodModel, GetByIdPaymentMethodDetailModel, IPaymentMethodDetailModel, IPaymentMethodModel, PostInsertPaymentMethodDetailModel, PutUpdatePaymentMethodDetailModel } from '../../../models/setup-data/setup-payment-method.model';

@Injectable({
    providedIn: 'root'
})
export class SetupPaymentMethodService {

    API_PAYMENT_METHOD = API_CONFIG.API_BILLING.SETUP_DATA.SETUP_PAYMENT_METHOD;

    private PaymentMethodSubject = new BehaviorSubject<IPaymentMethodModel[]>([]);
    public PaymentMethod$ = this.PaymentMethodSubject.asObservable();

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onSetPaymentMethodSubject(): void {
        this.onGetAll()
            .subscribe((result) => {
                this.PaymentMethodSubject.next(result.data);
            });
    }

    onGetAll(): Observable<GetAllPaymentMethodModel> {
        return this.httpOperationService.defaultGetRequest(this.API_PAYMENT_METHOD.GET_ALL_PAYMENT_METHOD);
    }

    onGetAllPaymentMethodByName(PaymentMethod: string): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_PAYMENT_METHOD.GET_ALL_PAYMENT_METHOD_BY_NAME + PaymentMethod);
    }

    onGetAllByIdPaymentMethod(PaymentMethodId: number): Observable<GetAllPaymentMethodModel> {
        return this.httpOperationService.defaultGetRequest(this.API_PAYMENT_METHOD.GET_BY_ID_PAYMENT_METHOD + PaymentMethodId);
    }

    /**
    * Service Untuk Menampilkan Data Bank Payment
    * @onGetById Observable<GetByIdBankPaymentModel>
   */
    onGetById(PaymentMethodDetailId: number): Observable<GetByIdPaymentMethodDetailModel> {
        return this.httpOperationService.defaultGetRequest(this.API_PAYMENT_METHOD.GET_BY_ID + PaymentMethodDetailId);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostInsertPaymentMethodDetailModel>
     * @param IPaymentMethodDetailModel
    */
    onPostSave(Data: IPaymentMethodDetailModel): Observable<PostInsertPaymentMethodDetailModel> {
        return this.httpOperationService.defaultPostRequest(this.API_PAYMENT_METHOD.POST_SAVE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdatePaymentMethodDetailModel>
     * @param IPaymentMethodDetailModel
    */
    onPutEdit(Data: IPaymentMethodDetailModel): Observable<PutUpdatePaymentMethodDetailModel> {
        return this.httpOperationService.defaultPutRequest(this.API_PAYMENT_METHOD.PUT_UPDATE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Menghapus Data
     * @onDelete Observable<DeletePaymentMethodDetailModel>
     * @param PaymentMethodDetailId
    */
    onDelete(PaymentMethodDetailId: number): Observable<DeletePaymentMethodDetailModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_PAYMENT_METHOD.DELETE + PaymentMethodDetailId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
