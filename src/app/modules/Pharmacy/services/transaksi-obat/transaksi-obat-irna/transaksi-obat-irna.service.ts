import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class TransaksiObatIrnaService {
  private API = PHARMACY.TRANSAKSI_OBAT.TRANSAKSI_OBAT_IRNA
  public dataResep = new BehaviorSubject([]);
  constructor(
    private httpOperationService: HttpOperationService,
    private notificationService: NotificationService,
  ) { }

  Insert(resep_id:number): Observable<any>{
    return this.httpOperationService.defaultPostRequest(this.API.INSERT+'/'+resep_id,[])
        .pipe(
            catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
  }

  InsertFormularium(Data:any): Observable<any>{
    return this.httpOperationService.defaultPostRequest(this.API.INSERT_FORMULARIUM, Data)
        .pipe(
            catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
  }

  setResep(Data:any): void{
    this.dataResep.next(Data)
  }
}
