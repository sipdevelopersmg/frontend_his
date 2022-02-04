import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MM } from 'src/app/api/MM';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Injectable({
  providedIn: 'root'
})
export class SettingStokOpnameService {
  public API = MM.STOK_OPNAME.SETTING_STOK_OPNAME
  public dataSource = new BehaviorSubject([]);

  constructor(
    private notificationService: NotificationService,
    private httpOperationService: HttpOperationService,
    private utilityService: UtilityService
  ) { }

  onInitList(): void{
    this.dataSource.next([]);
  }

  /**
   * Service Untuk Menampilkan data header berdasarkan Id
   * @onGetAll Observable<SetupPabrikModel>
  */
  onGetById(Id): Observable<any> {
      return this.httpOperationService.defaultGetRequest(this.API.GET_BY_ID+'/'+Id);
  }

  
  /**
   * Service Untuk Menampilkan data berdasarkan dinamik filter
   * @onGetAll Observable<Model>
  */
  onGetAllByParams(req: PostRequestByDynamicFiterModel[]): Observable<any> {
      return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_BY_PARAMS,req).pipe(
          catchError((error: HttpErrorResponse): any => {
              this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
      );
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


  getAllJenisSetting():Observable<any> {
      return this.httpOperationService.defaultGetRequest(this.API.GET_ALL_JENIS_SETTING).pipe(
        catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
    );
  }

  getAllBarangByParams(req: PostRequestByDynamicFiterModel[]): Observable<any> {
    return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_ITEM_BY_PARAMS,req).pipe(
        catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
    );
  }
  
  getAllGroupItemByParams(req: PostRequestByDynamicFiterModel[]): Observable<any> {
    return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_GROUP_ITEM_BY_PARAMS,req).pipe(
        catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
    );
  }

  getAllRakItemByParams(req: PostRequestByDynamicFiterModel[]): Observable<any> {
    return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RAK_BY_PARAMS,req).pipe(
        catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })
    );
  }

  insertSettingSemuaItem(data:any): Observable<any>{
    return this.httpOperationService.defaultPostRequest(this.API.INSERT_SETTING_SEMUA_ITEM,data).pipe(
      catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
      })
    );
  }

  insertSettingGroup(data:any): Observable<any>{
    return this.httpOperationService.defaultPostRequest(this.API.INSERT_SETTING_GROUP,data).pipe(
      catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
      })
    );
  }

  insertSettingRak(data:any): Observable<any>{
    return this.httpOperationService.defaultPostRequest(this.API.INSERT_SETTING_RAK,data).pipe(
      catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
      })
    );
  }

  insertSettingItem(data:any): Observable<any>{
    return this.httpOperationService.defaultPostRequest(this.API.INSERT_SETTING_ITEM,data).pipe(
      catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
      })
    );
  }

}
