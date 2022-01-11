import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MM } from 'src/app/api/MM';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { repackingDetailModel, repackingModel } from '../../models/repacking/repackingModel';

@Injectable({
  providedIn: 'root'
})

export class RepackingService {

    public API = MM.REPACK.REPACKING;
    public dataSource = new BehaviorSubject([]);

    private readonly _dataDetail = new BehaviorSubject<repackingDetailModel[]>([]);
    readonly dataDetail$ = this._dataDetail.asObservable();

    get dataDetail(): repackingDetailModel[] {
        return this._dataDetail.getValue();
    }

    set dataDetail(val: repackingDetailModel[]) {
        this._dataDetail.next(val);
    }

    public jumlah_item: number = 0;
    public total_transaksi : number = 0;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onInitList(): void {
        this.dataSource.next([]);
    }

    /**
     * Service Untuk Menampilkan data header berdasarkan Id
     * @onGetAll Observable<SetupPabrikModel>
    */
    onGetById(Id): Observable<any> {
        return this.httpOperationService.defaultGetRequest(this.API.GET_BY_ID + '/' + Id);
    }

    /**
     * Service Untuk Menampilkan data berdasarkan dinamik filter
     * @onGetAll Observable<Model>
    */
    onGetAllByParams(req: PostRequestByDynamicFiterModel[]): Observable<any> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_HEADER_BY_PARAMS, req).pipe(
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
    setDetail(id:number): void {
        this.getDetail(id).subscribe((result) => {
            this.dataDetail = result.data;
            this.sum();
        });
    }

    getDetail(id): Observable<any> {
        return this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_BY_ID + '/' + id)
    }

    addDataDetail(detail: repackingDetailModel) {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }

    updateFromInline(index: number, data: repackingDetailModel, rowData: repackingDetailModel) {
       
        data.qty = data.qty;
        data.sub_total = data.qty * data.hpp_satuan;

        this.dataDetail[index] = data;
        data = this.validasi_detail(data);
        this.sum();
    }

    validasi_detail(data: repackingDetailModel){
        let message='';
        if(data.batch_number){
            data.validasi = true;
            if(data.expired_date){
                data.validasi = true;
            }else{
                data.validasi = false;
                message += ", expired date belum di isi"
            }
        }else{
            data.validasi = false;
            message += 'bach number belum di isi'
        }
        data.message = message;
        return data;
    }

    removeDataDetail(index: number) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }

    editBanyak(index: number, banyak: number) {
        this.dataDetail[index].qty = banyak;
        this.dataDetail[index].sub_total = banyak * this.dataDetail[index].hpp_satuan;
        this.sum();
    }

    

    // editHarga(index: number, harga: number) {
    //     this.dataDetail[index].harga_satuan = harga;
    //     this.dataDetail[index].sub_total_pesan = harga * this.dataDetail[index].qty_pesan;
    //     this.sum();
    // }

    // editSubtotal(index: number, subtotal: number) {
    //     this.dataDetail[index].sub_total_pesan = subtotal;
    //     this.dataDetail[index].harga_satuan = subtotal / this.dataDetail[index].qty_pesan
    //     this.sum();
    // }

    // editSatuan(index: number, satuan: string) {
    //     let indexsatuan = this.dataDetail[index].satuan.findIndex((e) => e.kode_satuan == this.dataDetail[index].kode_satuan_besar);
    //     let isi = this.dataDetail[index].satuan[indexsatuan].isi;
    //     this.dataDetail[index].kode_satuan_besar = satuan;
    //     this.dataDetail[index].isi = isi;
    //     this.dataDetail[index].qty_pesan = this.dataDetail[index].qty_satuan_besar * isi;
    //     this.dataDetail[index].sub_total_pesan = this.dataDetail[index].qty_pesan * this.dataDetail[index].harga_satuan;
    //     this.sum();
    // }

    sum(): void {

        // this.sub_total_1 = this.dataDetail.sum('sub_total_pesan');
        // this.sub_total_2 = this.dataDetail.sum('sub_total_pesan');
        // this.total_transaksi_pesan = this.dataDetail.sum('sub_total_pesan');
        this.jumlah_item = this.dataDetail.sum('qty');
    }

    Insert(Data: repackingModel): Observable<any> {
        this.dataDetail.map((e, i) => {
            return e.no_urut = i + 1;
        });
        Data.details = this.dataDetail;
        Data.jumlah_item = this.dataDetail.sum('qty');
        Data.total_nominal = Data.hpp_satuan * Data.qty;
        Data.total_transaksi = this.dataDetail.sum('sub_total');

        return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    

    Reset() {
        this.dataDetail = [];
        this.jumlah_item = 0;
        this.total_transaksi = 0;
    }

    Validation(id: number): Observable<any> {
        return this.httpOperationService.defaultPutRequest(this.API.VALIDASI, { repacking_id: id })
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    Cancel(id: number, reason: string): Observable<any> {
        return this.httpOperationService.defaultPutRequest(this.API.CANCEL, {
          repacking_id: id,
          reason_canceled: reason
        })
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
