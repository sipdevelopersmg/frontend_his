import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../api/BILLING';
import { GetDataBillingModel, IDataBillingModel } from '../../models/trans-billing/trans-billing.model';

@Injectable({
    providedIn: 'root'
})
export class TransBillingRawatInapService {

    API_TRANS_BILLING = API_CONFIG.API_BILLING.TRANS_BILLING_IRNA;

    HeaderBilling = new BehaviorSubject({});
    HeaderBilling$ = this.HeaderBilling.asObservable();

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
}
