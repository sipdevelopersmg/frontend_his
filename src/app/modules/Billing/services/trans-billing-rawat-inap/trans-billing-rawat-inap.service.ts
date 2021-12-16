import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import * as API_CONFIG from '../../../../api/BILLING';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { IDepositBillingRawatInapModel } from '../../models/trans-billing-rawat-inap/trans-billing-rawat-inap.model';
import { AkomodasiDetailModel, GetDataBillingModel, IDataBillingModel } from '../../models/trans-billing/trans-billing.model';

@Injectable({
    providedIn: 'root'
})
export class TransBillingRawatInapService {

    API_TRANS_BILLING = API_CONFIG.API_BILLING.TRANS_BILLING_IRNA;

    HeaderBilling = new BehaviorSubject({});
    HeaderBilling$ = this.HeaderBilling.asObservable();

    DetailAkomodasiBillingEdited = new BehaviorSubject<AkomodasiDetailModel[]>([]);

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onScanNoRegister(NoRegister: string): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_TRANS_BILLING.GET_SCAN_BILLING_IRNA_BY_NO_REGISTER + NoRegister)
    }

    onGetAll(RegisterNo: string): Observable<GetDataBillingModel> {
        return this.httpOperationService.defaultGetRequest(this.API_TRANS_BILLING.GET_DATA_BILLING_IRNA_BY_NO_REGISTER + RegisterNo)
            .pipe(
                tap((result) => {
                    let result_data: IDataBillingModel = result.data;
                })
            )
    }

    onSaveDraft(parameter: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_DRAF_BILLING_IRNA, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onSavePulang(parameter: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_PULANG_BILLING_IRNA, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onBatalPulang(id_register: number, reason_canceled: string): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_BATAL_PULANG_BILLING_IRNA,
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

    onSaveDeposit(parameter: IDepositBillingRawatInapModel): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_DEPOSIT, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetSaldoDeposit(RegisterId: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_TRANS_BILLING.GET_DEPOSIT_BY_ID_REGISTER + RegisterId)
    }

    onSaveRestitusi(parameter: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_RESTITUSI, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onSavePelunasan(parameter: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_PELUNASAN, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onBatalPelunasan(id_register: number, reason_canceled: string): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_BATAL_PELUNASAN,
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

    onSaveReproses(parameter: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_REPROSES, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onEkstrakBed(id_register: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPutRequestWithoutParams(this.API_TRANS_BILLING.PUT_EKSTRAK_BED + id_register)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onSaveAddAkomodasiManual(parameter: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_AKOMODASI_MANUAL, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onDeleteAkomodasiManual(parameter: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPutRequest(this.API_TRANS_BILLING.PUT_DELETE_AKOMODASI_MANUAL, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
