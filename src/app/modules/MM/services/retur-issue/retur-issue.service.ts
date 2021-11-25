import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MM } from 'src/app/api/MM';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { TrReturPemakaianInternalDetailInsert, TrReturPemakaianInternalInsert } from '../../models/issue/retur_issue';

@Injectable({
  providedIn: 'root'
})
export class ReturIssueService {

  public API = MM.PEMAKAIAN_INTERNAL.TRANSRETURPEMAKAIANINTERNAL;
  public dataSource = new BehaviorSubject([]);

  private readonly _dataDetail = new BehaviorSubject<TrReturPemakaianInternalDetailInsert[]>([]);
  readonly dataDetail$ = this._dataDetail.asObservable();

  get dataDetail(): TrReturPemakaianInternalDetailInsert[] {
      return this._dataDetail.getValue();
  }

  set dataDetail(val: TrReturPemakaianInternalDetailInsert[]) {
      this._dataDetail.next(val);
  }

  public sub_total_1: number = 0;
  public total_disc: number = 0;
  public sub_total_2: number = 0;
  public total_tax: number = 0;
  public total_transaksi: number = 0;

  public jumlah_item: number = 0;

  constructor(
      private notificationService: NotificationService,
      private httpOperationService: HttpOperationService
  ) { }

  /**
   * Service Untuk Menampilkan Semua data
   * @onGetAll Observable<SetupPabrikModel>
  */
  // onGetAll(): Observable<any> {
  //     return this.httpOperationService.defaultGetRequest(this.API.GET_ALL);
  // }
  
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
      return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_HEADER_BY_PARAMS,req).pipe(
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
  
  /**
   * Service Untuk Menampilkan data detail Item
   * @setDetail Void
  */
  setDetail(id): void{
      this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_BY_ID+'/'+id).subscribe((result) => {
          this.dataDetail = result.data
      });
  }

  addDataDetail(detail: TrReturPemakaianInternalDetailInsert) {
      this.dataDetail =  [
        ...this.dataDetail,
        detail
      ];
      this.sum();
  }

  updateFromInline(index: number, data: TrReturPemakaianInternalDetailInsert, rowData: TrReturPemakaianInternalDetailInsert) {
      let indexsatuan = data.satuan.findIndex((e) => e.kode_satuan == data.kode_satuan_besar_retur_pemakaian_internal);
      let isi = data.satuan[indexsatuan].isi;
      data.isi_retur_pemakaian_internal = isi;
      data.qty_retur_pemakaian_internal = data.qty_satuan_besar_retur_pemakaian_internal * isi;

      this.dataDetail[index] = data;
      this.sum();
  }

  removeDataDetail(index: number) {
      this.dataDetail.splice(index, 1);
      this.sum();
  }

  editBanyak(index: number, banyak: number) {
      this.dataDetail[index].qty_satuan_besar_retur_pemakaian_internal = banyak;
      this.dataDetail[index].qty_retur_pemakaian_internal = banyak * this.dataDetail[index].isi_retur_pemakaian_internal;
  }


  editSatuan(index: number, satuan: string) {
      let indexsatuan = this.dataDetail[index].satuan.findIndex((e) => e.kode_satuan == this.dataDetail[index].kode_satuan_besar_retur_pemakaian_internal);
      let isi = this.dataDetail[index].satuan[indexsatuan].isi;
      this.dataDetail[index].kode_satuan_besar_retur_pemakaian_internal = satuan;
      this.dataDetail[index].isi_retur_pemakaian_internal = isi;
      this.dataDetail[index].qty_retur_pemakaian_internal = this.dataDetail[index].qty_satuan_besar_retur_pemakaian_internal * isi;
  }

  sum(): void {

      this.total_transaksi = this.dataDetail.sum('qty_satuan_besar_retur_pemakaian_internal');
      this.jumlah_item = this.dataDetail.sum('qty_satuan_besar_retur_pemakaian_internal');
      
  }

  Insert( Data:TrReturPemakaianInternalInsert ): Observable<any>{
      
    this.dataDetail.map((e,i)=>{
        e.no_urut = i + 1;
        e.nominal_retur_pemakaian_internal = e.qty_retur_pemakaian_internal*e.hpp_satuan;
        return e
    });

    Data.details = this.dataDetail;
    Data.jumlah_item = this.dataDetail.length;
    Data.total_transaksi = this.dataDetail.sum('nominal_retur_pemakaian_internal');

    return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
        .pipe(
            catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
  }

  Reset(){
      this.dataDetail = [] ;
      this.total_transaksi = 0 ;
      this.jumlah_item = 0 ; 
  }

    Validation(id:number): Observable<any>{
        return this.httpOperationService.defaultPutRequest(this.API.VALIDASI,{ retur_pemakaian_internal_id : id })
            .pipe(
                catchError((error: HttpErrorResponse):any =>{
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    Cancel(id:number,reason:string): Observable<any>{
        return this.httpOperationService.defaultPutRequest(this.API.CANCEL,{ 
                retur_pemakaian_internal_id : id,
                reason_canceled:reason 
            })
            .pipe(
                catchError((error: HttpErrorResponse):any =>{
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

}
