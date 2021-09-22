import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PENERIMAAN } from 'src/app/api/MM/PENERIMAAN';
import { UtilityHelperService } from 'src/app/helpers/utility/utility-helper.service';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { TrSethargaOrderDetailInsert, TrSethargaOrderInsert } from '../../../models/penerimaan/set-harga-order/SethargaOrder';

@Injectable({
  providedIn: 'root'
})
export class SetHargaOrderService {

  public API = PENERIMAAN.SETHARGA_ORDER;
    public dataSource = new BehaviorSubject([]);

    private readonly _dataDetail = new BehaviorSubject<TrSethargaOrderDetailInsert[]>([]);
    readonly dataDetail$ = this._dataDetail.asObservable();

    get dataDetail(): TrSethargaOrderDetailInsert[] {
        return this._dataDetail.getValue();
    }

    set dataDetail(val: TrSethargaOrderDetailInsert[]) {
        this._dataDetail.next(val);
    }

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
        private utilityHelperService:UtilityHelperService,

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
    onGetAllByParams(req: PostRequestByDynamicFiterModel[],id_supplier): Observable<any> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_DETAIL_BY_SUPPLIER+'/'+id_supplier,req).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    /**
     * Service Untuk Menampilkan data berdasarkan dinamik filter
     * @onGetAll Void
    */
    onGetDetailByParamsSource(req: PostRequestByDynamicFiterModel[],id_supplier): void {
        let detail : TrSethargaOrderDetailInsert[]=[];

        this.onGetAllByParams(req,id_supplier).subscribe((result) => {
            if (result) {

                result.data.forEach(element => {
                    detail.push({
                        no_urut           : 0,
                        id_item           : element.id_item,
                        kode_item         : element.nama_item,
                        nama_item         : element.nama_item,
                        satuan            : element.kode_satuan,
                        harga_order_lama       : 0,
                        disc_prosentase_1_lama : 0,
                        disc_prosentase_2_lama : 0,
                        harga_order_netto_lama : 0,
                        harga_order       : 0,
                        disc_prosentase_1 : 0,
                        disc_prosentase_2 : 0,
                        harga_order_netto : 0,
                    })
                });

                this.addDataDetail(detail);
            }
        });
    }
    
    /**
     * Service Untuk Menampilkan data detail Item
     * @setDetail Void
    */
    setDetail(id): void{
        this.getDetail(id).subscribe((result) => {
            this.dataDetail = result.data
        });
    }

    getDetail(id): Observable<any>{
        return this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_BY_ID+'/'+id)
    }

    addDataDetail(detail: TrSethargaOrderDetailInsert[]) {
        this.dataDetail = [
            ...this.dataDetail,
            ...detail
        ];
        console.log(this.dataDetail)
        // this.sum();
    }

    updateFromInline(index: number, data: TrSethargaOrderDetailInsert, rowData: TrSethargaOrderDetailInsert) {

        // let indexsatuan = data.satuan.findIndex((e) => e.kode_satuan == data.kode_satuan_besar);
        // let isi = data.satuan[indexsatuan].isi;
        // data.isi = isi;
        // data.qty_pesan = data.qty_satuan_besar * isi;

        // if (data.sub_total_pesan != rowData.sub_total_pesan) {
        //     data.harga_satuan = data.sub_total_pesan / data.qty_pesan;
        // } else {
            // data.sub_total_pesan = data.qty_pesan * data.harga_satuan;
        // }

        let diskon1 = data.harga_order - this.utilityHelperService.getDiskon(data.harga_order,data.disc_prosentase_1)
        data.harga_order_netto =  diskon1 - this.utilityHelperService.getDiskon(diskon1,data.disc_prosentase_2)

        
        this.dataDetail[index] = data;
        // this.sum();
    }

    removeDataDetail(index: number) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }

    editBanyak(index: number, banyak: number) {
        // this.dataDetail[index].qty_satuan_besar = banyak;
        // this.dataDetail[index].qty_pesan = banyak * this.dataDetail[index].isi;
        // this.dataDetail[index].sub_total_pesan = banyak * this.dataDetail[index].isi * this.dataDetail[index].harga_satuan;
    }

    editHarga(index: number, harga: number) {
        // this.dataDetail[index].harga_satuan = harga;
        // this.dataDetail[index].sub_total_pesan = harga * this.dataDetail[index].qty_pesan;
    }

    editSubtotal(index: number, subtotal: number) {
        // this.dataDetail[index].sub_total_pesan = subtotal;
        // this.dataDetail[index].harga_satuan = subtotal / this.dataDetail[index].qty_pesan
    }

    editSatuan(index: number, satuan: string) {
        // let indexsatuan = this.dataDetail[index].satuan.findIndex((e) => e.kode_satuan == this.dataDetail[index].kode_satuan_besar);
        // let isi = this.dataDetail[index].satuan[indexsatuan].isi;
        // this.dataDetail[index].kode_satuan_besar = satuan;
        // this.dataDetail[index].isi = isi;
        // this.dataDetail[index].qty_pesan = this.dataDetail[index].qty_satuan_besar * isi;
        // this.dataDetail[index].sub_total_pesan = this.dataDetail[index].qty_pesan * this.dataDetail[index].harga_satuan;

    }

    sum(): void {

        // this.sub_total_1 = this.dataDetail.sum('sub_total_pesan');
        // this.sub_total_2 = this.dataDetail.sum('sub_total_pesan');
        // this.total_transaksi_pesan = this.dataDetail.sum('sub_total_pesan');

        // this.jumlah_item_pesan = this.dataDetail.sum('qty_satuan_besar');
    }

    Insert( Data:TrSethargaOrderInsert ): Observable<any>{
        this.dataDetail.map((e,i)=>{
            return e.no_urut = i+1;
        });
        Data.details = this.dataDetail;

        return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    Reset(){
        this.dataDetail = [] ; 
    }
}
