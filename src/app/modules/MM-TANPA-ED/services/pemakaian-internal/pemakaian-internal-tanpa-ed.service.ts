import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MM_TANPA_ED } from 'src/app/api/MM_TANPA_ED';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { TrPemakaianInternalTanpaEdDetailInsert, TrPemakaianInternalTanpaEdInsert } from '../../models/pemakaian-internal/pemakain-internal-tanpa-ed';

@Injectable({
  providedIn: 'root'
})
export class PemakaianInternalTanpaEdService {

  public API = MM_TANPA_ED.PEMAKAIAN_INTERNAL_TANPA_ED.TRANSPEMAKAIANINTERNAL_TANPA_ED;
    public dataSource = new BehaviorSubject([]);
    public dataOpenSource = new BehaviorSubject([]);

    private readonly _dataDetail = new BehaviorSubject<TrPemakaianInternalTanpaEdDetailInsert[]>([]);
    readonly dataDetail$ = this._dataDetail.asObservable();

    get dataDetail(): TrPemakaianInternalTanpaEdDetailInsert[] {
        return this._dataDetail.getValue();
    }

    set dataDetail(val: TrPemakaianInternalTanpaEdDetailInsert[]) {
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
     * @onGetAll Observable<Model>
    */
     onGetAllOpenByParams(req: PostRequestByDynamicFiterModel[]): void {
        this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_HEADER_OPEN_BY_PARAMS,req).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        ).subscribe((result)=>{
            this.dataOpenSource.next(result.data);
        })
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

    addDataDetail(detail: TrPemakaianInternalTanpaEdDetailInsert) {
        this.dataDetail =  [
          ...this.dataDetail,
          detail
        ];
        this.sum();
    }

    updateFromInline(index: number, data: TrPemakaianInternalTanpaEdDetailInsert, rowData: TrPemakaianInternalTanpaEdDetailInsert) {
        let indexsatuan = data.satuans.findIndex((e) => e.kode_satuan == data.kode_satuan_besar_pemakaian_internal);
        let isi = data.satuans[indexsatuan].isi;
        data.isi_pemakaian_internal = isi;
        data.qty_pemakaian_internal = data.qty_satuan_besar_pemakaian_internal * isi;

        this.dataDetail[index] = data;
        this.sum();
    }

    removeDataDetail(index: number) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }

    editBanyak(index: number, banyak: number) {
        this.dataDetail[index].qty_satuan_besar_pemakaian_internal = banyak;
        this.dataDetail[index].qty_pemakaian_internal = banyak * this.dataDetail[index].isi_pemakaian_internal;
    }


    editSatuan(index: number, satuan: string) {
        let indexsatuan = this.dataDetail[index].satuans.findIndex((e) => e.kode_satuan == this.dataDetail[index].kode_satuan_besar_pemakaian_internal);
        let isi = this.dataDetail[index].satuans[indexsatuan].isi;
        this.dataDetail[index].kode_satuan_besar_pemakaian_internal = satuan;
        this.dataDetail[index].isi_pemakaian_internal = isi;
        this.dataDetail[index].qty_pemakaian_internal = this.dataDetail[index].qty_satuan_besar_pemakaian_internal * isi;
    }

    sum(): void {

        this.total_transaksi = 0;
        this.jumlah_item = this.dataDetail.sum('qty_satuan_besar_pemakaian_internal');
    }

    Insert( Data:TrPemakaianInternalTanpaEdInsert ): Observable<any>{
        this.dataDetail.map((e,i)=>{
            return e.no_urut = i+1;
        });
        Data.details = this.dataDetail;
        Data.jumlah_item = this.jumlah_item;
        Data.total_transaksi = this.total_transaksi;

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

    getSatuanDetail(id_item):any[]{
        let index = this.dataDetail.map((item) => { return item.id_item }).indexOf(id_item);
        return this.dataDetail[index].satuans;
    }

    getDetail(id): Observable<any> {
        return this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_BY_ID+'/'+id);
    }

    validasiPersetujuan(Data): Observable<any>{
        return this.httpOperationService.defaultPutRequest(this.API.VALIDASI, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    Cancel(id:number,reason:string): Observable<any>{
        return this.httpOperationService.defaultPutRequest(this.API.CANCEL,{ 
                pemakaian_internal_id : id,
                reason_canceled:reason 
            })
            .pipe(
                catchError((error: HttpErrorResponse):any =>{
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
