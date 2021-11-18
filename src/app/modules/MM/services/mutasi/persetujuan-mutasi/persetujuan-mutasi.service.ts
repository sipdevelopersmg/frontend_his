import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MM } from 'src/app/api/MM';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { TrPersetujuanMutasiDetailInsert, TrPersetujuanMutasiInsert } from '../../../models/mutasi/persetujuan-mutasi';

@Injectable({
  providedIn: 'root'
})
export class PersetujuanMutasiService {

  public API = MM.MUTASI.PENGAJUAN_MUTASI;
    public dataSource = new BehaviorSubject([]);

    private readonly _dataDetail = new BehaviorSubject<TrPersetujuanMutasiDetailInsert[]>([]);
    readonly dataDetail$ = this._dataDetail.asObservable();

    get dataDetail(): TrPersetujuanMutasiDetailInsert[] {
        return this._dataDetail.getValue();
    }

    set dataDetail(val: TrPersetujuanMutasiDetailInsert[]) {
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

    getDetail(id): Observable<any> {
        return this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_BY_ID+'/'+id);
    }

    addDataDetail(detail: TrPersetujuanMutasiDetailInsert) {
        this.dataDetail =  [
          ...this.dataDetail,
          detail
        ];
        this.sum();
    }

    updateFromInline(index: number, data: TrPersetujuanMutasiDetailInsert, rowData: TrPersetujuanMutasiDetailInsert) {
        let indexsatuan = data.satuans.findIndex((e) => e.kode_satuan == data.kode_satuan_besar_mutasi);
        let isi = data.satuans[indexsatuan].isi;
        data.isi_mutasi = isi;
        data.qty_mutasi = data.qty_satuan_besar_mutasi * isi;

        this.dataDetail[index] = data;
        this.sum();
    }

    removeDataDetail(index: number) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }

    editBanyak(index: number, banyak: number) {
        this.dataDetail[index].qty_satuan_besar_mutasi = banyak;
        this.dataDetail[index].qty_mutasi = banyak * this.dataDetail[index].isi_mutasi;
    }


    editSatuan(index: number, satuan: string) {
        let indexsatuan = this.dataDetail[index].satuans.findIndex((e) => e.kode_satuan == this.dataDetail[index].kode_satuan_besar_mutasi);
        let isi = this.dataDetail[index].satuans[indexsatuan].isi;
        this.dataDetail[index].kode_satuan_besar_mutasi = satuan;
        this.dataDetail[index].isi_mutasi = isi;
        this.dataDetail[index].qty_mutasi = this.dataDetail[index].qty_satuan_besar_mutasi * isi;
    }

    sum(): void {

        this.total_transaksi = this.dataDetail.sum('nominal_mutasi');
        this.jumlah_item = this.dataDetail.sum('qty_satuan_besar');
    }

    Insert( Data:TrPersetujuanMutasiInsert ): Observable<any>{
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

    validasiPersetujuan(Data): Observable<any>{
        return this.httpOperationService.defaultPostRequest(this.API.INSERT_PERSETUJUAN, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
