import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { SetupSatuanAturanPakaiModel, ISetupSatuanAturanPakaiModel } from '../../../models/setup-data/SetupSatuanAturanPakaiModel';

@Injectable({
  providedIn: 'root'
})
export class SetupSatuanAturanPakaiService {

    API = PHARMACY.SETUP_DATA.SETUP_SATUAN_ATURAN_PAKAI
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
    onGetAll(): Observable<SetupSatuanAturanPakaiModel> {
      return this.httpOperationService.defaultGetRequest(this.API.GET_ALL);
    }
  
    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<any>
     * @param ISetupPabrikModel
    */
    onPostSave(Data: ISetupSatuanAturanPakaiModel): Observable<any> {
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
    onPutEdit(Data: ISetupSatuanAturanPakaiModel): Observable<any> {
      return this.httpOperationService.defaultPutRequest(this.API.UPDATE, Data)
        .pipe(
          catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
        );
    }
  
    // /**
    //  * Service menubah data menjadi active
    //  * @onPutToActive Observable<any>
    //  * @param ISetupPabrikModel
    // */
    // onPutToActive(Data: ISetActiveSetupSatuanAturanPakaiModel): Observable<any> {
    //   return this.httpOperationService.defaultPutRequest(this.API.UPDATETOACTIVE, Data)
    //     .pipe(
    //       catchError((error: HttpErrorResponse): any => {
    //         this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
    //       })
    //     );
    // }
  
    // /**
    //  * Service Untuk mwngubah data menjadi tidak aktif
    //  * @onPutToDeActive Observable<any>
    //  * @param ISetupPabrikModel
    // */
    // onPutToDeActive(Data: ISetActiveSetupSatuanAturanPakaiModel): Observable<any> {
    //   return this.httpOperationService.defaultPutRequest(this.API.UPDATETODEACTIVE, Data)
    //     .pipe(
    //       catchError((error: HttpErrorResponse): any => {
    //         this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
    //       })
    //     );
    // }
}
