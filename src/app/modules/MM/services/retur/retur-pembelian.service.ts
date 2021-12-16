import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MM } from 'src/app/api/MM';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { TrReturPembelianDetailInsert, TrReturPembelianInsert } from '../../models/retur/retur-pembelian';

@Injectable({
  providedIn: 'root'
})
export class ReturPembelianService {

  public API = MM.RETUR.RETUR_PEMBELIAN;
  public dataSource = new BehaviorSubject([]);

  private readonly _dataDetail = new BehaviorSubject<TrReturPembelianDetailInsert[]>([]);
  readonly dataDetail$ = this._dataDetail.asObservable();

  get dataDetail(): TrReturPembelianDetailInsert[] {
      return this._dataDetail.getValue();
  }

  set dataDetail(val: TrReturPembelianDetailInsert[]) {
      this._dataDetail.next(val);
  }


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
  onGetAll(): Observable<any> {
      return this.httpOperationService.defaultGetRequest(this.API.GET_ALL);
  }
  
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

  addDataDetail(detail: TrReturPembelianDetailInsert) {
    this.dataDetail = [
        ...this.dataDetail,
        detail
    ];
    this.sum();
  }

  updateFromInline(index: number, data: TrReturPembelianDetailInsert, rowData: TrReturPembelianDetailInsert) {
      let indexsatuan = data.satuan.findIndex((e) => e.kode_satuan == data.kode_satuan_besar);
      let isi = data.satuan[indexsatuan].isi;
      data.isi = isi;
      data.qty_retur = data.qty_satuan_besar * isi;
      data.sub_total = data.harga_satuan_retur * data.qty_retur;
      data = this.validasi_detail(data);
      this.dataDetail[index] = data;
      this.sum();
  }

  validasi_detail(data: TrReturPembelianDetailInsert){
    let message = ''
    if(data.expired_date){
        data.validasi = true;
        if(data.batch_number){
            data.validasi = true;
        }else{
            data.validasi = false;
            message = ', bach number belum di isi'
        }
    }else{
        data.validasi = false;
        message = 'expired date belum di isi';
    }
    data.message;
    return data;
}

  removeDataDetail(index: number) {
      this.dataDetail.splice(index, 1);
      this.sum();
  }

  editBanyak(index: number, banyak: number) {
      this.dataDetail[index].qty_satuan_besar = banyak;
      this.dataDetail[index].qty_retur = banyak * this.dataDetail[index].isi;
      this.dataDetail[index].sub_total = banyak * this.dataDetail[index].isi * this.dataDetail[index].harga_satuan_retur;
      this.sum();
    }

  editHarga(index: number, harga: number) {
      this.dataDetail[index].harga_satuan_retur = harga;
      this.dataDetail[index].sub_total = harga * this.dataDetail[index].qty_retur;
      this.sum();
  }

  editSubtotal(index: number, subtotal: number) {
      this.dataDetail[index].sub_total = subtotal;
      this.dataDetail[index].harga_satuan_retur = subtotal / this.dataDetail[index].qty_retur
      this.sum();
  }

  editSatuan(index: number, satuan: string) {
      let indexsatuan = this.dataDetail[index].satuan.findIndex((e) => e.kode_satuan == this.dataDetail[index].kode_satuan_besar);
      let isi = this.dataDetail[index].satuan[indexsatuan].isi;
      this.dataDetail[index].kode_satuan_besar = satuan;
      this.dataDetail[index].isi = isi;
      this.dataDetail[index].qty_retur = this.dataDetail[index].qty_satuan_besar * isi;
      this.dataDetail[index].sub_total = this.dataDetail[index].qty_retur * this.dataDetail[index].harga_satuan_retur;
      this.sum();
    }

  sum(): void {

      this.total_transaksi = this.dataDetail.sum('sub_total');
      this.jumlah_item = this.dataDetail.sum('qty_satuan_besar');
  }

    Insert( Data:TrReturPembelianInsert ): Observable<any>{
        this.dataDetail.map((e,i)=>{
            return e.no_urut = i+1;
        });
        Data.details = this.dataDetail;
        Data.jumlah_item_retur = this.jumlah_item;
        Data.total_transaksi_retur = this.total_transaksi;

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
        return this.httpOperationService.defaultPutRequest(this.API.VALIDASI,{ retur_pembelian_id : id })
            .pipe(
                catchError((error: HttpErrorResponse):any =>{
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
  
    Cancel(id:number,reason:string): Observable<any>{
        return this.httpOperationService.defaultPutRequest(this.API.CANCEL,{ 
                retur_pembelian_id : id,
                reason_canceled:reason 
            })
            .pipe(
                catchError((error: HttpErrorResponse):any =>{
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
        );
    }
  
}
