import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class TransaksiObatIrjaService {
  private API = PHARMACY.TRANSAKSI_OBAT.TRANSAKSI_OBAT_IRJA
  constructor(
    private httpOperationService: HttpOperationService,
    private notificationService: NotificationService,
  ) { }

  Insert(Data:any): Observable<any>{
    return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
        .pipe(
            catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
  }

  obatDiserahakan(Id:number): Observable<any>{
    return this.httpOperationService.defaultPutRequest(this.API.UPDATEPENYERAHAN,{'penjualan_obat_id':Id})
        .pipe(
            catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
  }
}
