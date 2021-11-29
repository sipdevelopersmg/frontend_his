import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostRequestByDynamicFiterModel, HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../api/BILLING';
import { IGetAllPostingBillingModel, ISaveBatalPostingBillingModel, ISavePostingBillingModel } from '../../models/posting-billing/posting-billing.model';

@Injectable({
    providedIn: 'root'
})
export class PostingBillingService {

    API_TRANS_BILLING = API_CONFIG.API_BILLING.POSTING_BILLING;

    DataForPostingBilling = new BehaviorSubject<IGetAllPostingBillingModel[]>([]);

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllDataForPostingBilling(parameter: PostRequestByDynamicFiterModel[], tipe_pasien: string): void {
        this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_TRANS_BILLING.POST_GET_ALL_DAFTAR_POSTING + tipe_pasien, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            ).subscribe((result) => {
                if (result) {
                    this.DataForPostingBilling.next(result.data);
                }
            });
    }

    onSavePostingBillingIRDA(parameter: ISavePostingBillingModel): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_SAVE_POSTING_BILLING_IRDA, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onBatalPostingBillingIRDA(parameter: ISaveBatalPostingBillingModel): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TRANS_BILLING.POST_BATAL_POSTING_BILLING_IRDA, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
