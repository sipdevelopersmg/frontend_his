import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MM } from 'src/app/api/MM';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { SetupItemModel, ISetupItemModel, ISetActiveItemModel } from '../../../models/setup-data/setup-item/SetupItemModel';

@Injectable({
  providedIn: 'root'
})
export class SetupItemService {

    API = MM.SETUP_DATA.SETUP_ITEM
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
    onGetAll(): Observable<SetupItemModel> {
      return this.httpOperationService.defaultGetRequest(this.API.GET_ALL);
    }

    /**
     * Service Untuk Menampilkan data berdasarkan dinamik filter
     * @onGetAll Void
    */
    onGetAllByParamsSource(req: PostRequestByDynamicFiterModel[]): void {
      this.onGetAllByParams(req).subscribe((result) => {
          if (result) {
              this.dataSource.next(result.data);
          }
      });
    }

    onGetAllByParams(req: PostRequestByDynamicFiterModel[]): Observable<any> {
      return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_BY_PARMS,req).pipe(
          catchError((error: HttpErrorResponse): any => {
              this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
      );
    }

    onGetKartuStockByIdItem(id_item,req: PostRequestByDynamicFiterModel[]): Observable<any> {
      return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_KARTU_STOCK_BY_ID_ITEM+'/'+id_item,req).pipe(
          catchError((error: HttpErrorResponse): any => {
              this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
      );
    }

    onGetEDItem(id_stokroom,id_item):Observable<any>{
      return this.httpOperationService.defaultGetRequest(this.API.GET_ED_ITEM+'/'+id_stokroom+'/'+id_item).pipe(
        catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
      );
    }
  
    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<any>
     * @param ISetupPabrikModel
    */
    onPostSave(Data: ISetupItemModel): Observable<any> {
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
    onPutEdit(Data: ISetupItemModel): Observable<any> {
      return this.httpOperationService.defaultPutRequest(this.API.UPDATE, Data)
        .pipe(
          catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
        );
    }

    // onTambahSatuan(Data:any): Observable<any>{
    //   return this.httpOperationService.defaultGetRequest(this.API>)
    // }
  
    /**
     * Service menubah data menjadi active
     * @onPutToActive Observable<any>
     * @param ISetupPabrikModel
    */
    onPutToActive(Data: ISetActiveItemModel): Observable<any> {
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
    onPutToDeActive(Data: ISetActiveItemModel): Observable<any> {
      return this.httpOperationService.defaultPutRequest(this.API.UPDATETODEACTIVE, Data)
        .pipe(
          catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
        );
    }     

    // ==================== SATUAN

    getSatuanByItem(id_item:number): Observable<any> {
      return this.httpOperationService.defaultGetRequest(this.API.GET_SATUAN_BY_ITEM+'/'+id_item).pipe(
        catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
      );
    }

    insertSatuanByItem(Data:any): Observable<any> {
      return this.httpOperationService.defaultPostRequest(this.API.INSERT_SATUAN_BY_ITEM, Data)
        .pipe(
          catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
        );
    }

    updateSatuanByItem(Data:any): Observable<any> {
      return this.httpOperationService.defaultPutRequest(this.API.UPDATE_SATUAN_BY_ITEM,Data)
        .pipe(
          catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
        );
    }


    deleteSatuanByItem(Data:any): Observable<any> {
      return this.httpOperationService.defaultDeleteRequestWithBody(this.API.DELETE_SATUAN_BY_ITEM,Data)
        .pipe(
          catchError((error:HttpErrorResponse): any =>{
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
        )
    }

    // ==================== URAI
    getUraiByItem(id_item:number): Observable<any> {
      return this.httpOperationService.defaultGetRequest(this.API.GET_URAI_BY_ITEM+'/'+id_item).pipe(
        catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
      );
    }

    insertUraiByItem(Data:any): Observable<any> {
      return this.httpOperationService.defaultPostRequest(this.API.INSERT_URAI_BY_ITEM, Data)
        .pipe(
          catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
        );
    }


    deleteUraiByItem(Data:any): Observable<any> {
      return this.httpOperationService.defaultDeleteRequestWithBody(this.API.DELETE_URAI_BY_ITEM,Data)
        .pipe(
          catchError((error:HttpErrorResponse): any =>{
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
        )
    }

    // ==================== ASSEMBLY
    getAssemblyByItem(id_item:number): Observable<any> {
      return this.httpOperationService.defaultGetRequest(this.API.GET_ASESEMBLY_BY_ITEM+'/'+id_item).pipe(
        catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
      );
    }

    insertAssemblyByItem(Data:any): Observable<any> {
      return this.httpOperationService.defaultPostRequest(this.API.INSERT_ASESEMBLY_BY_ITEM, Data)
        .pipe(
          catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
        );
    }

    deleteAssemblyByItem(Data:any): Observable<any> {
      return this.httpOperationService.defaultDeleteRequestWithBody(this.API.DELETE_ASESEMBLY_BY_ITEM,Data)
        .pipe(
          catchError((error:HttpErrorResponse): any =>{
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
        )
    }


}
