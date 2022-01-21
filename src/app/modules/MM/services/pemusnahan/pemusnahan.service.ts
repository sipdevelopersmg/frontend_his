import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MM } from 'src/app/api/MM';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { pemusnahanDetailmodel, pemusnahanModel } from '../../models/pemusnahan/pemusnahanModel';

@Injectable({
  providedIn: 'root'
})
export class PemusnahanService {

  public API = MM.PEMUSNAHAN.PEMUSNAHAN_MODEL;
    public dataSource = new BehaviorSubject([]);

    private readonly _dataDetail = new BehaviorSubject<pemusnahanDetailmodel[]>([]);
    readonly dataDetail$ = this._dataDetail.asObservable();

    get dataDetail(): pemusnahanDetailmodel[] {
        return this._dataDetail.getValue();
    }

    set dataDetail(val: pemusnahanDetailmodel[]) {
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
        private httpOperationService: HttpOperationService,
        private utilityService: UtilityService
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

    // getDetailPemesanan(id): Observable<any>{
    //     return this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_PEMESANAN+'/'+id)
    // }

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

    addDataDetail(detail: pemusnahanDetailmodel) {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }

    updateFromInline(index: number, data: pemusnahanDetailmodel, rowData: pemusnahanDetailmodel) {
        data.sub_total = data.hpp_satuan * data.qty
        this.dataDetail[index] = data;
        this.sum();
    }

    removeDataDetail(index: number) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }

    editBanyak(index: number, banyak: number) {
        this.dataDetail[index].qty = banyak;
        this.sum();
    }

    sum(): void {
        this.total_transaksi = this.dataDetail.sum('sub_total');
        this.jumlah_item = this.dataDetail.sum('qty');
    }

    Insert( Data:pemusnahanModel ): Observable<any>{

        this.dataDetail.map((e,i)=>{
            e.no_urut = i+1;
            e.sub_total = e.qty * e.hpp_satuan;
            return e
        });

        Data.details = this.dataDetail
        Data.tanggal_pemusnahan_stok = this.utilityService.onFixingDatepickerSyncfusion(Data.tanggal_pemusnahan_stok)
        Data.total_transaksi = this.dataDetail.sum('sub_total');
        Data.jumlah_item = this.dataDetail.sum('qty');

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
        return this.httpOperationService.defaultPutRequest(this.API.VALIDASI,{ pemusnahan_stok_id : id })
            .pipe(
                catchError((error: HttpErrorResponse):any =>{
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
    
    Batal(id:number,reason:string): Observable<any>{
        return this.httpOperationService.defaultPutRequest(this.API.BATAL,{ 
              pemusnahan_stok_id : id,
              reason_canceled:reason 
            })
            .pipe(
                catchError((error: HttpErrorResponse):any =>{
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
        );
    }
}
