import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PENERIMAAN } from 'src/app/api/MM/PENERIMAAN';
import { TrKontrakSpjbDetailItemInsert, TrKontrakSpjbInsert } from 'src/app/modules/MM/models/penerimaan/kontrak-pengadaan/KontrakPengadaanModel';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import 'src/app/prototype/ArrPrototype';

@Injectable({
    providedIn: 'root'
})

export class InputKontrakPengadaanService {

    public API = PENERIMAAN.TRANSKONTRAKSPJB;

    dataSource = new BehaviorSubject([]);

    public _dataDetail = new BehaviorSubject<TrKontrakSpjbDetailItemInsert[]>([]);
    readonly dataDetail$ = this._dataDetail.asObservable();

    get dataDetail(): TrKontrakSpjbDetailItemInsert[] {
        return this._dataDetail.getValue();
    }

    set dataDetail(val: TrKontrakSpjbDetailItemInsert[]) {
        this._dataDetail.next(val);
    }

    public total: Number = 0;
    public jumlahItem: Number = 0;

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
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_BY_PARAMS, req)
            .pipe(
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
        // this.onGetAllByParams(req).subscribe((result) => {
        //     this.dataSource.next(result.data);

        //     console.log(result);

        //     console.log(this.dataSource.value);
        // });

        this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_BY_PARAMS, req)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            ).subscribe((result) => {
                this.dataSource.next(result.data);
            })
    }

    /**
     * Service Untuk Menampilkan data detail Item
     * @setDetail Void
    */
    setDetail(id): void {
        this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_BY_ID + '/' + id).subscribe((result) => {
            this.dataDetail = result.data
        });
    }

    addDataDetail(detail: TrKontrakSpjbDetailItemInsert) {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }

    updateFromInline(index: number, data: TrKontrakSpjbDetailItemInsert, rowData: TrKontrakSpjbDetailItemInsert) {
        let indexsatuan = data.satuan.findIndex((e) => e.kode_satuan == data.kode_satuan_besar);
        let isi = data.satuan[indexsatuan].isi;
        data.isi = isi;
        data.qty_kontrak = data.qty_kontrak_satuan_besar * isi;

        if (data.sub_total_kontrak != rowData.sub_total_kontrak) {
            data.harga_satuan = data.sub_total_kontrak / data.qty_kontrak;
        } else {
            data.sub_total_kontrak = data.qty_kontrak * data.harga_satuan;
        }

        data = this.validasi_detail(data);

        this.dataDetail[index] = data;
        this.sum();
    }

    validasi_detail(data: TrKontrakSpjbDetailItemInsert){
        if(data.tanggal_maksimal_expired_date){
            data.validasi = true;
        }else{
            data.validasi = false;
        }
        return data;
    }

    removeDataDetail(index: number) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }

    editBanyak(index: number, banyak: number) {
        this.dataDetail[index].qty_kontrak_satuan_besar = banyak;
        this.dataDetail[index].qty_kontrak = banyak * this.dataDetail[index].isi;
        this.dataDetail[index].sub_total_kontrak = banyak * this.dataDetail[index].isi * this.dataDetail[index].harga_satuan;
    }

    editExpired(index: number, expired: string) {
        this.dataDetail[index].tanggal_maksimal_expired_date = expired;
    }

    editHarga(index: number, harga: number) {
        this.dataDetail[index].harga_satuan = harga;
        this.dataDetail[index].sub_total_kontrak = harga * this.dataDetail[index].qty_kontrak;
    }

    editSubtotal(index: number, subtotal: number) {
        this.dataDetail[index].sub_total_kontrak = subtotal;
        this.dataDetail[index].harga_satuan = subtotal / this.dataDetail[index].qty_kontrak
    }

    editSatuan(index: number, satuan: string) {
        let indexsatuan = this.dataDetail[index].satuan.findIndex((e) => e.kode_satuan == this.dataDetail[index].kode_satuan_besar);
        let isi = this.dataDetail[index].satuan[indexsatuan].isi;
        this.dataDetail[index].kode_satuan_besar = satuan;
        this.dataDetail[index].isi = isi;
        this.dataDetail[index].qty_kontrak = this.dataDetail[index].qty_kontrak_satuan_besar * isi;
        this.dataDetail[index].sub_total_kontrak = this.dataDetail[index].qty_kontrak * this.dataDetail[index].harga_satuan;

    }

    sum(): void {
        this.total = this.dataDetail.sum('sub_total_kontrak');
        this.jumlahItem = this.dataDetail.sum('qty_kontrak_satuan_besar');
    }

    Insert(Data: TrKontrakSpjbInsert): Observable<any> {
        this.dataDetail.map((e, i) => {
            return e.no_urut = i + 1;
        });
        Data.details = this.dataDetail;
        Data.jumlah_item_kontrak = this.jumlahItem;
        Data.total_transaksi_kontrak = this.total;

        return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    Reset() {
        this.dataDetail = [];
        this.total = 0;
        this.jumlahItem = 0;
    }

}
