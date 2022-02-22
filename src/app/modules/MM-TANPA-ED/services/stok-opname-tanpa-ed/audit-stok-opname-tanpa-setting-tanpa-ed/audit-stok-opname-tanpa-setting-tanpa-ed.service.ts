import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MM_TANPA_ED } from 'src/app/api/MM_TANPA_ED';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Injectable({
  providedIn: 'root'
})
export class AuditStokOpnameTanpaSettingTanpaEdService {

  API = MM_TANPA_ED.STOK_OPNAME_TANPA_ED.AUDIT_STOK_OPNAME_TANPA_SETTING_TANPA_ED
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
      return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_STOK_OPNAME_BY_PARAMS,req).pipe(
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

  onGetBatchED(data):Observable<any>{
    return this.httpOperationService.defaultPostRequestWithoutLoading(this.API.GET_ALL_BARANG_BATCH_BY_ID_ITEM_AND_STOCKROOM_AND_WAKTU_CAPTURE,data).pipe(
      catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
      })
    );
  }


  onGetStokroom(id:number):Observable<any>{
    return this.httpOperationService.defaultGetRequest(this.API.GET_ALL_STOKROOM_BY_SETTING_STOK_OPNAME_ID+'/'+id).pipe(
      catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
      })
    );
  }

  onGetRak(data):Observable<any>{
    return this.httpOperationService.defaultPostRequest(this.API.GET_ALL_RAK_BY_STOKROOM_AND_SETTING_STOK_OPNAME,data).pipe(
      catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
      })
    );
  }

  onGetBarang(data):Observable<any>{
    return this.httpOperationService.defaultPostRequest(this.API.GET_ALL_BARANG_BY_ID_RAK_ADN_STOKROOM_AND_WAKTU_CAPTURE,data).pipe(
      catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
      })
    );
  }

  Insert(data):Observable<any>{
    return this.httpOperationService.defaultPostRequest(this.API.INSERT,data).pipe(
      catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
      })
    );
  }

  Finalisasi(data):Observable<any>{
    return this.httpOperationService.defaultPostRequest(this.API.FINALISASI,data).pipe(
      catchError((error: HttpErrorResponse): any => {
          this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
      })
    );
  }
}
