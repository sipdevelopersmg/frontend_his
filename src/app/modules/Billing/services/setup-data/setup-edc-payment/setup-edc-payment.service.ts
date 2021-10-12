import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/BILLING';
import { DeleteEdcPaymentModel, GetAllEdcPaymentModel, GetByIdEdcPaymentModel, IEdcPaymentModel, PostInsertEdcPaymentModel, PutUpdateEdcPaymentModel } from '../../../models/setup-data/setup-edc-payment.model';

@Injectable({
    providedIn: 'root'
})
export class SetupEdcPaymentService {

    API_EDC_PAYMENT = API_CONFIG.API_BILLING.SETUP_DATA.SETUP_EDC_PAYMENT;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * Service Untuk Menampilkan Semua Data Bank Payment
     * @onGetAll Observable<GetAllVoucherPaymentModel>
    */
    onGetAll(): Observable<GetAllEdcPaymentModel> {
        return this.httpOperationService.defaultGetRequest(this.API_EDC_PAYMENT.GET_ALL);
    }

    /**
     * Service Untuk Menampilkan Data Bank Payment
     * @onGetById Observable<GetByIdBankPaymentModel>
    */
    onGetById(EdcPaymentId: number): Observable<GetByIdEdcPaymentModel> {
        return this.httpOperationService.defaultGetRequest(this.API_EDC_PAYMENT.GET_BY_ID + EdcPaymentId);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostInsertBankPaymentModel>
     * @param IEdcPaymentModel
    */
    onPostSave(Data: IEdcPaymentModel): Observable<PostInsertEdcPaymentModel> {
        return this.httpOperationService.defaultPostRequest(this.API_EDC_PAYMENT.POST_SAVE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdateVoucherPaymentModel>
     * @param IEdcPaymentModel
    */
    onPutEdit(Data: IEdcPaymentModel): Observable<PutUpdateEdcPaymentModel> {
        return this.httpOperationService.defaultPutRequest(this.API_EDC_PAYMENT.PUT_UPDATE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Menghapus Data
     * @onDelete Observable<DeleteVoucherPaymentModel>
     * @param EdcPaymentId
    */
    onDelete(EdcPaymentId: number): Observable<DeleteEdcPaymentModel> {
        return this.httpOperationService.defaultDeleteRequest(this.API_EDC_PAYMENT.DELETE + EdcPaymentId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
