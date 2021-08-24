import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { SetupCoaModel, ISetupCoaModel, ISetActiveSetupCoaModel } from '../../../models/setup-data/setup-coa/SetupGroupCoaModel';

import { MM } from 'src/app/api/MM'

@Injectable({
  providedIn: 'root'
})
export class SetupCoaService {

  API = MM.SETUP_DATA.SETUP_COA

  constructor(
    private notificationService: NotificationService,
    private httpOperationService: HttpOperationService) { }

  /**
   * Service Untuk Menampilkan Semua data
   * @onGetAll Observable<SetupPabrikModel>
  */
  onGetAll(): Observable<SetupCoaModel> {
    return this.httpOperationService.defaultGetRequest(this.API.GET_ALL);
  }

  /**
   * Service Untuk Manyimpan data baru
   * @onPostSave Observable<any>
   * @param ISetupPabrikModel
  */
  onPostSave(Data: ISetupCoaModel): Observable<any> {
    return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
      .pipe(
        catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
      );
  }

  /**
   * Service Untuk Manyimpan data baru
   * @onPutEdit Observable<any>
   * @param ISetupPabrikModel
  */
  onPutEdit(Data: ISetupCoaModel): Observable<any> {
    return this.httpOperationService.defaultPutRequest(this.API.UPDATE, Data)
      .pipe(
        catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
      );
  }

  /**
   * Service menubah data menjadi active
   * @onPutToActive Observable<any>
   * @param ISetupPabrikModel
  */
  onPutToActive(Data: ISetActiveSetupCoaModel): Observable<any> {
    return this.httpOperationService.defaultPutRequest(this.API.UPDATETOACTIVE, Data)
      .pipe(
        catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
      );
  }

  /**
   * Service Untuk mwngubah data menjadi tidak aktif
   * @onPutToDeActive Observable<any>
   * @param ISetupPabrikModel
  */
  onPutToDeActive(Data: ISetActiveSetupCoaModel): Observable<any> {
    return this.httpOperationService.defaultPutRequest(this.API.UPDATETODEACTIVE, Data)
      .pipe(
        catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
      );
  }
}
