import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MM } from 'src/app/api/MM';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class SettingHargaJualService {
   API = MM.SETUP_DATA.SETTING_HARGA_JUAL;
  constructor(
    private httpOperationService:HttpOperationService,
    private notificationService:NotificationService
  ) { }

  getItemByParams(req: PostRequestByDynamicFiterModel[]): Observable<any> {
    return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_BARANG, req).pipe(
        catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
    );
  }

  onGetDetailHargaJual(id): Observable<any> {
    return this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL+"/"+id).pipe(
      catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
      })
    );
  }

  insert(data): Observable<any> {
    return this.httpOperationService.defaultPostRequest(this.API.INSERT,data).pipe(
      catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
      })
    );
  }

  update(data): Observable<any> {
    return this.httpOperationService.defaultPutRequest(this.API.UPDATE,data).pipe(
      catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
      })
    );
  }
}
