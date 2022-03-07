import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MM } from 'src/app/api/MM';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { SetupRakStorageModel, ISetupRakStorageModel } from '../../../models/setup-data/setup-rak-storage/SetupRakStorage';

@Injectable({
  providedIn: 'root'
})

export class SetupRakStorageService {

    API = MM.SETUP_DATA.SETUP_RAK_STORAGE;
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
    onGetAll(): Observable<SetupRakStorageModel> {
      return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_BY_PARAM,[]);
    }
  
    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<any>
     * @param ISetupPabrikModel
    */
    onPostSave(Data: ISetupRakStorageModel): Observable<any> {
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
    onPutEdit(Data: ISetupRakStorageModel): Observable<any> {
      return this.httpOperationService.defaultPutRequest(this.API.UPDATE, Data)
        .pipe(
          catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
        );
    }

    /**
     * Service Untuk Menampilkan data berdasarkan dinamik filter
     * @onGetAll Observable<Model>
    */
      onGetAllItemByIdRak(req: PostRequestByDynamicFiterModel[],id_rak:number): Observable<any> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_ITEM_BY_RAK_ID+'/'+id_rak, req).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
      }
      onGetAllItemBelumRak(req: PostRequestByDynamicFiterModel[]): Observable<any> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_ITEM_BELUM_RAK_BY_PARAM, req).pipe(
          catchError((error: HttpErrorResponse): any => {
              this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
        );
      }

      onHapusItemRak(id_item:number): Observable<any>{
        return this.httpOperationService.defaultDeleteRequest(this.API.HAPUS_RAK_FROM_BARANG+'/'+id_item).pipe(
          catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
        )
      }

      onTambahItemRak(id_item:number,id_rak_storage:number): Observable<any>{
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE_RAK_BARANG,{
          "id_item"         : id_item,
          "id_rak_storage"  : id_rak_storage
        }).pipe(
          catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
        )
      }  
}
