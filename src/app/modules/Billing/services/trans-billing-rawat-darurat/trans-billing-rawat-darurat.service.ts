import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../api/BILLING';
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
}
