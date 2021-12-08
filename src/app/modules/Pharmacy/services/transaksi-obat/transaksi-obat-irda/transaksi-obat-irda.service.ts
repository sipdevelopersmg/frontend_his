import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class TransaksiObatIrdaService {

  private API = PHARMACY.TRANSAKSI_OBAT.TRANSAKSI_OBAT_IRDA
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
  
  setResep(Data:any): void{
    this.dataResep.next(Data)
  }

  onGetPasienIrda(dynamicFilter:PostRequestByDynamicFiterModel[]): Observable<any> {
    return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_PASIEN_IRDA,dynamicFilter)
      .pipe(
        catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
      );
  }
}
