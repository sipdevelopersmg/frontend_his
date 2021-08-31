import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MM } from 'src/app/api/MM';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { SetupTipeStockroomModel, ISetupTipeStockroomModel } from '../../../models/setup-data/setup-tipe-stockroom/SetupTipeStockroom';

@Injectable({
  providedIn: 'root'
})
export class SetupTipeStockroomService {

    API = MM.SETUP_DATA.SETUP_TIPE_STOCKROOM
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
    onGetAll(): Observable<SetupTipeStockroomModel> {
      return this.httpOperationService.defaultGetRequest(this.API.GET_ALL);
    }
  
    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<any>
     * @param ISetupPabrikModel
    */
    onPostSave(Data: ISetupTipeStockroomModel): Observable<any> {
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
    onPutEdit(Data: ISetupTipeStockroomModel): Observable<any> {
      return this.httpOperationService.defaultPutRequest(this.API.UPDATE, Data)
        .pipe(
          catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
        );
    }
}
