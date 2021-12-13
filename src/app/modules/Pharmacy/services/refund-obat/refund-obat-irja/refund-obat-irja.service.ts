import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MM } from 'src/app/api/MM';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { TrRefundObatIrjaDetailInsert, TrRefundObatIrjaInsert } from '../../../models/refund-obat/refund-obat-irja.model';

@Injectable({
  providedIn: 'root'
})
export class RefundObatIrjaService {

    public API = PHARMACY.RETUR_PENJUALAN.RETUR_PENJUALAN_OBAT_IRJA;
    public dataSource = new BehaviorSubject([]);
    public dataTransaksiObat = new BehaviorSubject([]);

    private readonly _dataDetail = new BehaviorSubject<TrRefundObatIrjaDetailInsert[]>([]);
    readonly dataDetail$ = this._dataDetail.asObservable();

    get dataDetail(): TrRefundObatIrjaDetailInsert[] {
        return this._dataDetail.getValue();
    }

    set dataDetail(val: TrRefundObatIrjaDetailInsert[]) {
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
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_BY_PARAMS,req).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onGetDataTransaksiObat(req: PostRequestByDynamicFiterModel[]): void {
        this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_PENJUALAN_BELUM_TERBAYAR,req).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        ).subscribe((result)=>{
        this.dataTransaksiObat.next(result.data);
        });
    }

    getDetail(id): Observable<any> {
        return this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_PENJUALAN_BY_HEADER_ID+'/'+id);
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

    addDataDetail(detail: TrRefundObatIrjaDetailInsert) {
        this.dataDetail =  [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }

    updateFromInline(index: number, data: TrRefundObatIrjaDetailInsert, rowData: TrRefundObatIrjaDetailInsert) {
        this.dataDetail[index] = data;
        this.sum();
    }

    removeDataDetail(index: number) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }

    editBanyak(index: number, banyak: number) {
        this.dataDetail[index].qty_retur_penjualan_obat = banyak;
    }

    sum(): void {

        this.total_transaksi = 0;
        this.jumlah_item = this.dataDetail.sum('qty_retur_penjualan_obat');
    }

    Insert( Data:TrRefundObatIrjaInsert ): Observable<any>{
        return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
        .pipe(
            catchError((error: HttpErrorResponse): any => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    validasiPersetujuan(Data): Observable<any>{
        return this.httpOperationService.defaultPutRequest(this.API.INSERT, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    Reset(){
        this.dataTransaksiObat.next([]);
    }

    getSatuanDetail(id_item){
        // let index = this.dataDetail.map((item) => { return item.id_item }).indexOf(id_item);
        // return this.dataDetail[index].satuans;
    }

    Validation(id:number): Observable<any>{
        return this.httpOperationService.defaultPutRequest(this.API.VALIDASI,{ retur_penjualan_obat_id : id })
            .pipe(
                catchError((error: HttpErrorResponse):any =>{
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
        }

    Cancel(id:number,reason:string): Observable<any>{
        return this.httpOperationService.defaultPutRequest(this.API.CANCEL,{ 
                retur_penjualan_obat_id : id,
                reason_canceled:reason 
            })
            .pipe(
                catchError((error: HttpErrorResponse):any =>{
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

}
