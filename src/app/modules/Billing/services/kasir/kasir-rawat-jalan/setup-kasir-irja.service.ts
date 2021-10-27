import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel, PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/BILLING';

@Injectable({
    providedIn: 'root'
})
export class SetupKasirIrjaService {

    API_SETUP_KASIR_IRJA = API_CONFIG.API_BILLING.KASIR.API_KASIR.KASIR_RAWAT_JALAN;

    SelectedDataBukaKasir = new BehaviorSubject({});

    DataBukaKasir = new BehaviorSubject([]);
    DataBukaKasir$ = this.DataBukaKasir.asObservable();

    HeaderPendapatanVersiSistem = new BehaviorSubject([]);

    HistoryCrossCheckTutupKasir = new BehaviorSubject({});

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
    ) { }

    onGetHistoryBukaKasir(): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_KASIR_IRJA.GET_HISTORY_BUKA_KASIR);
    }

    onGetHistoryBukaKasirBySubject(): void {
        this.httpOperationService.defaultGetRequest(this.API_SETUP_KASIR_IRJA.GET_HISTORY_BUKA_KASIR)
            .subscribe((result) => {
                this.DataBukaKasir.next(result.data);
            });
    }

    onPostSaveBukaKasir(user_kasir: number, jumlah_modal_awal: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETUP_KASIR_IRJA.POST_SAVE_BUKA_KASIR_BY_PENGAWAS, {
            user_kasir: user_kasir,
            jumlah_modal_awal: jumlah_modal_awal,
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onGetHistoryTambahModalKasir(SaldoKasirId: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_KASIR_IRJA.GET_HISTORY_TAMBAH_MODAL_BY_ID_SALDO_KASIR + SaldoKasirId);
    }

    onPostSaveTambahModalKasir(user_kasir: number, tambahan_modal: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETUP_KASIR_IRJA.POST_SAVE_TAMBAH_MODAL_BY_PENGAWAS, {
            user_kasir: user_kasir,
            tambahan_modal: tambahan_modal,
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onPostSaveSetoranKasir(tambahan_setoran: number, keterangan_setoran: string): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETUP_KASIR_IRJA.POST_SAVE_SETORAN_KASIR, {
            tambahan_setoran: tambahan_setoran,
            keterangan_setoran: keterangan_setoran,
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onGetSaldoKasirForSetoran(): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_KASIR_IRJA.GET_SALDO_KASIR_FOR_SETORAN);
    }

    onGetHistorySetoranKasir(): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_KASIR_IRJA.GET_HISTORY_SETORAN_KASIR);
    }

    onPostSaveTutupKasir(Data: any): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETUP_KASIR_IRJA.POST_SAVE_TUTUP_KASIR, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onPostCancelTutupKasir(SaldoKasirId: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETUP_KASIR_IRJA.POST_CANCEL_TUTUP_KASIR + SaldoKasirId, null)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetHistoryTutupKasir(parameter: PostRequestByDynamicFiterModel[]): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_SETUP_KASIR_IRJA.GET_HISTORY_TUTUP_KASIR, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetPendapatanVersiKasir(SaldoKasirId: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_KASIR_IRJA.GET_PENDAPATAN_VERSI_KASIR + SaldoKasirId);
    }

    onGetPendapatanVersiSistem(SaldoKasirId: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_KASIR_IRJA.GET_PENDAPATAN_VERSI_SISTEM + SaldoKasirId);
    }

    onGetDaftarPaymentForDetailPendapatanVersiSistem(id_saldo_kasir: number, id_payment_method: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETUP_KASIR_IRJA.GET_DETAIL_PENDAPATAN_VERSI_SISTEM, {
            id_saldo_kasir: id_saldo_kasir,
            id_payment_method: id_payment_method
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onPostValidasiCrossCheckTutupKasir(id_saldo_kasir: number, keterangan_validasi: string): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_SETUP_KASIR_IRJA.POST_VALIDASI_CROSS_CHECK_TUTUP_KASIR, {
            id_saldo_kasir: id_saldo_kasir,
            keterangan_validasi: keterangan_validasi
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onGetHistoryCrossCheckTutupKasir(parameter: PostRequestByDynamicFiterModel[]): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_SETUP_KASIR_IRJA.GET_HISTORY_CROSS_CHECK_TUTUP_KASIR, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetDetailHistoryCrossCheckTutupKasir(SaldoKasirId: number): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultGetRequest(this.API_SETUP_KASIR_IRJA.GET_DETAIL_HISTORY_CROSS_CHECK_TUTUP_KASIR + SaldoKasirId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onPrintDetailPendapatanVersiSistem(SaldoKasirId: number): void {
        this.httpOperationService.defaultGetPrintRequest(this.API_SETUP_KASIR_IRJA.GET_LAPORAN_PENDAPATAN_VERSI_SYSTEM, { ID_SALDO_KASIR: SaldoKasirId }, "DETAIL PENDAPATAN KASIR VERSI SISTEM")
    }

    onPreviewDetailPendapatanVersiSistem(SaldoKasirId: number): Observable<any> {
        return this.httpOperationService.defaultGetPrintOnlyPreview(this.API_SETUP_KASIR_IRJA.GET_PREVIEW_LAPORAN_PENDAPATAN_VERSI_SYSTEM, { ID_SALDO_KASIR: SaldoKasirId }, "DETAIL PENDAPATAN KASIR VERSI SISTEM")
    }
}
