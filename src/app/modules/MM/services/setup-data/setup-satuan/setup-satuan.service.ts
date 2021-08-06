import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API } from 'src/app/api';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { ISetupPabrikModel, SetupPabrikModel } from '../../../models/setup-data/setup-pabrik/SetupPabrikModel';
import { API_MM } from 'src/app/api/MM';

@Injectable({
  providedIn: 'root'
})

export class SetupSatuanService {

  API = API_MM.SETUP_DATA.SETUP_SATUAN

  constructor(
    private notificationService: NotificationService,
    private httpOperationService: HttpOperationService) { }
  
  onGetAll(): Observable<SetupPabrikModel> {
    return this.httpOperationService.defaultGetRequest(this.API.GET_ALL);
  }
  
  onPostSave(Data: ISetupPabrikModel): Observable<any> {
    return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
    .pipe(
      catchError((error: HttpErrorResponse): any => {
        this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
      })
    );
  }
  
  onPutEdit(Data: ISetupPabrikModel): Observable<any> {
    return this.httpOperationService.defaultPutRequest(this.API.UPDATE, Data)
      .pipe(
        catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
    );
  }
  
  onPutToActive(Data: ISetupPabrikModel): Observable<any> {
    return this.httpOperationService.defaultPutRequest(this.API.UPDATETOACTIVE, Data)
      .pipe(
        catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
    );
  }
  
  onPutToDeActive(Data: ISetupPabrikModel): Observable<any> {
    return this.httpOperationService.defaultPutRequest(this.API.UPDATETODEACTIVE, Data)
      .pipe(
        catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
      );
  }

}
