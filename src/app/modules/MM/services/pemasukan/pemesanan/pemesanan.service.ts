import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PENERIMAAN } from 'src/app/api/MM/PENERIMAAN';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { TrPemesananDetailInsert,TrPemesananInsert } from '../../../models/penerimaan/pemesanan/PemesananModel';

@Injectable({
  providedIn: 'root'
})
export class PemesananService {

    public API = PENERIMAAN.TRANSPEMESANAN;
    public dataSource = new BehaviorSubject([]);

    private readonly _dataDetail = new BehaviorSubject<TrPemesananDetailInsert[]>([]);
    readonly dataDetail$ = this._dataDetail.asObservable();

    get dataDetail(): TrPemesananDetailInsert[] {
        return this._dataDetail.getValue();
    }

    set dataDetail(val: TrPemesananDetailInsert[]) {
        this._dataDetail.next(val);
    }

    public sub_total_1: Number = 0;
    public total_disc: Number = 0;
    public sub_total_2: Number = 0;
    public total_tax: Number = 0;
    public total_transaksi_pesan: Number = 0;

    public jumlah_item_pesan: Number = 0;

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

    addDataDetail(detail: TrPemesananDetailInsert) {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }

    updateFromInline(index: number, data: TrPemesananDetailInsert, rowData: TrPemesananDetailInsert) {
        let indexsatuan = data.satuan.findIndex((e) => e.kode_satuan == data.kode_satuan_besar);
        let isi = data.satuan[indexsatuan].isi;
        data.isi = isi;
        data.qty_pesan = data.qty_satuan_besar * isi;

        if (data.sub_total_pesan != rowData.sub_total_pesan) {
            data.harga_satuan = data.sub_total_pesan / data.qty_pesan;
        } else {
            data.sub_total_pesan = data.qty_pesan * data.harga_satuan;
        }

        this.dataDetail[index] = data;
        this.sum();
    }

    removeDataDetail(index: number) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }

    editBanyak(index: number, banyak: number) {
        this.dataDetail[index].qty_satuan_besar = banyak;
        this.dataDetail[index].qty_pesan = banyak * this.dataDetail[index].isi;
        this.dataDetail[index].sub_total_pesan = banyak * this.dataDetail[index].isi * this.dataDetail[index].harga_satuan;
    }



    editHarga(index: number, harga: number) {
        this.dataDetail[index].harga_satuan = harga;
        this.dataDetail[index].sub_total_pesan = harga * this.dataDetail[index].qty_pesan;
    }

    editSubtotal(index: number, subtotal: number) {
        this.dataDetail[index].sub_total_pesan = subtotal;
        this.dataDetail[index].harga_satuan = subtotal / this.dataDetail[index].qty_pesan
    }

    editSatuan(index: number, satuan: string) {
        let indexsatuan = this.dataDetail[index].satuan.findIndex((e) => e.kode_satuan == this.dataDetail[index].kode_satuan_besar);
        let isi = this.dataDetail[index].satuan[indexsatuan].isi;
        this.dataDetail[index].kode_satuan_besar = satuan;
        this.dataDetail[index].isi = isi;
        this.dataDetail[index].qty_pesan = this.dataDetail[index].qty_satuan_besar * isi;
        this.dataDetail[index].sub_total_pesan = this.dataDetail[index].qty_pesan * this.dataDetail[index].harga_satuan;

    }

    sum(): void {
        this.total_transaksi_pesan = this.dataDetail.sum('sub_total_pesan');
        this.jumlah_item_pesan = this.dataDetail.sum('qty_satuan_besar');
    }

    Insert( Data:TrPemesananInsert ): Observable<any>{
        this.dataDetail.map((e,i)=>{
            return e.no_urut = i+1;
        });
        // Data.detailItem = this.dataDetail;
        // Data.jumlah_item_kontrak = this.jumlahItem;
        // Data.total_transaksi_kontrak = this.total;

        return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    Reset(){
        this.dataDetail = [] ;
        this.total_transaksi_pesan = 0 ;
        this.jumlah_item_pesan = 0 ; 
    }
}
