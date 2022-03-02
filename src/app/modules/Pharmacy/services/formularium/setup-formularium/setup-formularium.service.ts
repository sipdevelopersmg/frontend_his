import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { SetupFormulariumModel, ISetupFormulariumModel, ISetActiveSetupFormulariumModel } from '../../../models/formularium/SetupFormularium';

@Injectable({
  providedIn: 'root'
})
export class SetupFormulariumService {

    API = PHARMACY.FORMULARIUM.SETUP_FORMULARIUM
    public dataSource = new BehaviorSubject([]);
    public dataSource_obat = new BehaviorSubject([]);
  
    constructor(
      private notificationService: NotificationService,
      private httpOperationService: HttpOperationService) { }
    
    /**
    * Service Untuk Mengisi dataScource
    * @setDataSource Void
    */
    setDataSource(id_generik):void{
      this.onGetAll(id_generik).subscribe((result) => {
        this.dataSource.next(result.data);
      });
    }
    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<SetupPabrikModel>
    */
    onGetAll(id_generik): Observable<SetupFormulariumModel> {
      return this.httpOperationService.defaultGetRequest(this.API.GET_BY_ID_GENERIK+'/'+id_generik);
    }
  
    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<any>
     * @param ISetupPabrikModel
    */
    onPostSave(Data: ISetupFormulariumModel): Observable<any> {
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
    onPutEdit(Data: ISetupFormulariumModel): Observable<any> {
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
    onPutToActive(Data: ISetActiveSetupFormulariumModel): Observable<any> {
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
    onPutToDeActive(Data: ISetActiveSetupFormulariumModel): Observable<any> {
      return this.httpOperationService.defaultPutRequest(this.API.UPDATETODEACTIVE, Data)
        .pipe(
          catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
        );
    }

    getFormulariumObat(id_formularium){
      this.httpOperationService.defaultGetRequest(this.API.OBAT_GET_BY_ID_FORMULARIUM+"/"+id_formularium).subscribe((result)=>{
        this.dataSource_obat.next(result.data);
      })
    }

    insertFormulariumObat(data): Observable<any>{
      return this.httpOperationService.defaultPostRequest(this.API.OBAT_INSERT,data).pipe(
        catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
      );
    }

    deleteFormulariumObat(data): Observable<any>{
      return this.httpOperationService.defaultPostRequest(this.API.OBAT_DELETE,data).pipe(
        catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
      );
    }
}
