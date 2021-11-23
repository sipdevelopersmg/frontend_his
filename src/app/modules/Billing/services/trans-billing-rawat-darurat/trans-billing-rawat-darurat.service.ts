import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../api/BILLING';
import { IPostSavePelunasanBillingRawatDaruratModel, IPostSavePulangBillingRawatDaruratModel, IPostSaveReprosesBillingRawatDaruratModel, PostSavePelunasanBillingRawatDaruratModel, PostSavePulangBillingRawatDaruratModel, PostSaveReprosesBillingRawatDaruratModel } from '../../models/trans-billing-rawat-darurat/trans-billing-rawat-darurat.model';
import { GetDataBillingModel, IDataBillingModel, IResepBillingSubDetailModel } from '../../models/trans-billing/trans-billing.model';

@Injectable({
    providedIn: 'root'
})
export class TransBillingRawatDaruratService {

    API_TRANS_BILLING = API_CONFIG.API_BILLING.TRANS_BILLING_IRDA;

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
        return this.httpOperationService.defaultGetRequest(this.API_TRANS_BILLING.GET_SCAN_BILLING_IRDA_BY_NO_REGISTER + NoRegister)
    }

    onGetAll(RegisterNo: string): Observable<GetDataBillingModel> {
        return this.httpOperationService.defaultGetRequest(this.API_TRANS_BILLING.GET_DATA_BILLING_IRDA_BY_NO_REGISTER + RegisterNo)
            .pipe(
                tap((result) => {
                    let result_data: IDataBillingModel = result.data;

                    let resep_child: IResepBillingSubDetailModel[] = [];

                    result_data.resep ? result_data.resep.detail.forEach((item) => { resep_child.push(...item.details) }) : resep_child = [];

                    setTimeout(() => {
                        this.ResepChildDatasource.next(resep_child);
                    }, 1000);
                })
            )
    }

    onSaveDraft(parameter: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_DRAF_BILLING_IRDA, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onSavePulang(parameter: IPostSavePulangBillingRawatDaruratModel): Observable<PostSavePulangBillingRawatDaruratModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_PULANG_BILLING_IRDA, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onBatalPulang(id_register: number, reason_canceled: string): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_BATAL_PULANG_BILLING_IRDA,
            {
                id_register: id_register,
                reason_canceled: reason_canceled,
            }
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onSavePelunasan(parameter: IPostSavePelunasanBillingRawatDaruratModel): Observable<PostSavePelunasanBillingRawatDaruratModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_PELUNASAN_BILLING_IRDA, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onSaveReproses(parameter: IPostSaveReprosesBillingRawatDaruratModel): Observable<PostSaveReprosesBillingRawatDaruratModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_REPROSES_BILLING_IRDA, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
