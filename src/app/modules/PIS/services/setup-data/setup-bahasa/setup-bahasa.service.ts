import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { ISetupBahasaModel,SetupBahasaModel } from 'src/app/modules/PIS/models/setup-data/setupBahasa.model';

import * as API from './../../../../../api/PIS/SETUP_DATA';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SetupBahasaService {

  constructor(
    private notificationService: NotificationService,
    private httpOperationService: HttpOperationService) { }

  onGetAllBahasa(): Observable<SetupBahasaModel> {
    return this.httpOperationService.defaultGetRequest(API.GET_ALL_SETUP_BAHASA);
  }

  onGetBahasaById(BahasaId: number): Observable<any> {
    return this.httpOperationService.defaultGetRequest(API.GET_SETUP_BAHASA_BY_ID + BahasaId);
  }

  onPostSaveSetupBahasa(Data: ISetupBahasaModel): Observable<any> {
    return this.httpOperationService.defaultPostRequest(API.POST_SAVE_SETUP_BAHASA, Data)
        .pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            })
        );
  }

  onTestError(): Observable<any> {
    return this.httpOperationService.onTestingError()
      .pipe(
          catchError((error: HttpErrorResponse): any => {
              this.notificationService.onShowToast(error.statusText, error.message, {}, true);
          })
      );
  }
}
