import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { ISetupPabrikModel, SetupPabrikModel } from '../../../models/setup-data/setup-pabrik/SetupPabrikModel';

import * as API_SETUP_PABRIK from 'src/app/api/MM/SETUP_DATA/SETUP_PABRIK';

@Injectable({
    providedIn: 'root'
})
export class SetupPabrikService {
    
    public dataSource = new BehaviorSubject([]); 

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService) { }

            /**
     * Service Untuk Mengisi dataScource 
     * @setDataSource Void
    */
    setDataSource():void{
        this.onGetAll().subscribe((result) => {
          this.dataSource.next(result.data);
        });
    }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<SetupPabrikModel>
    */
    onGetAll(): Observable<SetupPabrikModel> {
        return this.httpOperationService.defaultGetRequest(API_SETUP_PABRIK.GET_ALL);
    }


    onGetAllPabrik(): Observable<SetupPabrikModel> {
        return this.httpOperationService.defaultGetRequest(API_SETUP_PABRIK.GET_ALL);
    }

    onGetPabrikById(PabrikId: number): Observable<any> {
        return this.httpOperationService.defaultGetRequest(API_SETUP_PABRIK.GET_BY_ID + PabrikId);
    }

    onPostSaveSetupPabrik(Data: ISetupPabrikModel): Observable<any> {
        return this.httpOperationService.defaultPostRequest(API_SETUP_PABRIK.INSERT, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
