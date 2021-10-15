import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../api/BILLING';
import { GetDataBillingModel, IDataBillingModel, IResepBillingSubDetailModel } from '../../models/trans-billing/trans-billing.model';

@Injectable({
    providedIn: 'root'
})
export class TransBillingService {

    API_TRANS_BILLING = API_CONFIG.API_BILLING.TRANS_BILLING;

    ResepChildDatasource = new BehaviorSubject<IResepBillingSubDetailModel[]>([]);
    ResepChildDatasource$ = this.ResepChildDatasource.asObservable();

    HeaderBilling = new BehaviorSubject({});
    HeaderBilling$ = this.HeaderBilling.asObservable();

    HistoryInvoicePaid = new BehaviorSubject([]);

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onScanNoRegister(NoRegister: string): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_TRANS_BILLING.GET_SCAN_BILLING_IRJA_BY_NO_REGISTER + NoRegister)
    }

    /**
     * Service Untuk Menampilkan Semua Data Billing By No Register
     * @onGetAll Observable<GetDataBillingModel>
    */
    onGetAll(RegisterNo: string): Observable<GetDataBillingModel> {
        return this.httpOperationService.defaultGetRequest(this.API_TRANS_BILLING.GET_DATA_BILLING_IRJA_BY_NO_REGISTER + RegisterNo)
            .pipe(
                tap((result) => {
                    let result_data: IDataBillingModel = result.data;

                    let resep_child: IResepBillingSubDetailModel[] = [];

                    result_data.resep.detail.forEach((item) => {
                        resep_child.push(...item.details);
                    });

                    setTimeout(() => {
                        this.ResepChildDatasource.next(resep_child);
                    }, 1000);
                })
            )
    }

    onGetSaldoKlaim(RegisterId: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_TRANS_BILLING.GET_SALDO_KLAIM_BY_NO_REGISTER + RegisterId)
    }

    onPostSaveSaldoKlaim(id_register: number, jumlah_klaim: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_SALDO_KLAIM, {
            id_register: id_register,
            jumlah_klaim: jumlah_klaim
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onPostSaveInvoiceWithoutPayment(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_INVOICE_TANPA_PAYMENT, Data).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onGetHistoryInvoiceWithoutPayment(RegisterId: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_TRANS_BILLING.GET_HISTORY_INVOICE_TANPA_PAYMENT + RegisterId)
    }

    onPostSaveInvoiceWithPayment(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_INVOICE_DENGAN_PAYMENT, Data).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onGetSaldoDeposit(RegisterId: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_TRANS_BILLING.GET_SALDO_DEPOSIT_BY_NO_REGISTER + RegisterId)
    }

    onPostSaveDeposit(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_DEPOSIT, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onPostPaymentWithExistingInvoice(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_PAYMENT_WITH_EXISTING_INVOICE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onPostRestitusi(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_RESTITUSI, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetAllHistoryInvoicePaid(JenisPembayaran: string, RegisterId: number): void {
        this.httpOperationService.defaultGetRequest(this.API_TRANS_BILLING.GET_HISTORY_INVOICE_PAID + RegisterId)
            .pipe(
                map((result) => {
                    return result.data[JenisPembayaran];
                })
            )
            .subscribe((result) => {
                this.HistoryInvoicePaid.next(result);
            });
    }

    onPostPostingBillingRawatJalan(RegisterId: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_POSTING_BILLING_IRJA + RegisterId, null)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onCancelPostingBillingRawatJalan(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_CANCEL_POSTING_BILLING_IRJA, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
