import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MM_TANPA_ED } from 'src/app/api/MM_TANPA_ED';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { TrPenerimaanTanpaEdDetailItemInsert, TrPenerimaanTanpaEdInsert } from '../../models/penerimaan_tanpa_ed/Penerimaan_tanpa_edModel';

@Injectable({
  providedIn: 'root'
})
export class PenerimaanTanpaEdService {

  public API = MM_TANPA_ED.PENERIMAAN_TANPA_ED.TRANSPENERIMAAN_TANPA_ED;
    public dataSource = new BehaviorSubject([]);

    private readonly _dataDetail = new BehaviorSubject<TrPenerimaanTanpaEdDetailItemInsert[]>([]);
    readonly dataDetail$ = this._dataDetail.asObservable();

    get dataDetail(): TrPenerimaanTanpaEdDetailItemInsert[] {
        return this._dataDetail.getValue();
    }

    set dataDetail(val: TrPenerimaanTanpaEdDetailItemInsert[]) {
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

    getDetailPemesanan(id): Observable<any>{
        return this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_PEMESANAN+'/'+id)
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

    addDataDetail(detail: TrPenerimaanTanpaEdDetailItemInsert[]) {
        this.dataDetail = detail;
        this.sum();
    }

    add(data:TrPenerimaanTanpaEdDetailItemInsert){
        console.log(this.dataDetail);
        let index = this.dataDetail.map((item) => { return item.id_item }).indexOf(data.id_item);
        data.qty_satuan_besar = 1;
        data.qty_terima = 1 * data.isi;
        this.dataDetail.insertToIndex(index,data);
    }

    updateFromInline(index: number, data: TrPenerimaanTanpaEdDetailItemInsert, rowData: TrPenerimaanTanpaEdDetailItemInsert) {
        let indexsatuan = data.satuan.findIndex((e) => e.kode_satuan == data.kode_satuan_besar);
        let isi = data.satuan[indexsatuan].isi;
        data.isi = isi;
        data.qty_terima = data.qty_satuan_besar * isi;
        if (data.sub_total != rowData.sub_total) {
            data.harga_satuan = data.sub_total / data.qty_terima;
        } else {
            data.sub_total = data.qty_terima * data.harga_satuan;
        }
        data = this.validasi_detail(data);
        this.dataDetail[index] = data;
        this.sum();
    }

    validasi_detail(data: TrPenerimaanTanpaEdDetailItemInsert){
        let message='';
        // if(data.batch_number){
        //     data.validasi = true;
        //     if(data.expired_date){
        //         data.validasi = true;
        //     }else{
        //         data.validasi = false;
        //         message += ", expired date belum di isi"
        //     }
        // }else{
        //     data.validasi = false;
        //     message += 'bach number belum di isi'
        // }
        data.message = message;
        return data;
    }

    removeDataDetail(index: number) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }

    editBanyak(index: number, banyak: number) {
        this.dataDetail[index].qty_satuan_besar = banyak;
        this.dataDetail[index].qty_terima = banyak * this.dataDetail[index].isi;
        this.dataDetail[index].sub_total = banyak * this.dataDetail[index].isi * this.dataDetail[index].harga_satuan;
        this.sum();
    }

    editHarga(index: number, harga: number) {
        this.dataDetail[index].harga_satuan = harga;
        this.dataDetail[index].sub_total = harga * this.dataDetail[index].qty_terima;
        this.sum();
    }

    editSubtotal(index: number, subtotal: number) {
        this.dataDetail[index].sub_total = subtotal;
        this.dataDetail[index].harga_satuan = subtotal / this.dataDetail[index].qty_terima
        this.sum();
    }

    editSatuan(index: number, satuan: string) {
        let indexsatuan = this.dataDetail[index].satuan.findIndex((e) => e.kode_satuan == this.dataDetail[index].kode_satuan_besar);
        let isi = this.dataDetail[index].satuan[indexsatuan].isi;
        this.dataDetail[index].kode_satuan_besar = satuan;
        this.dataDetail[index].isi = isi;
        this.dataDetail[index].qty_terima = this.dataDetail[index].qty_satuan_besar * isi;
        this.dataDetail[index].sub_total = this.dataDetail[index].qty_terima * this.dataDetail[index].harga_satuan;
        this.sum();
    }

    sum(): void {

        this.sub_total_1 = this.dataDetail.sum('sub_total');
        this.sub_total_2 = this.dataDetail.sum('sub_total');
        this.total_transaksi = this.dataDetail.sum('sub_total');

        this.jumlah_item = this.dataDetail.sum('qty_satuan_besar');
    }

    Insert( Data:TrPenerimaanTanpaEdInsert ): Observable<any>{
        this.dataDetail.map((e,i)=>{
            return e.no_urut = i+1;
        });

        Data.tanggal_penerimaan = this.utilityService.onFixingDatepickerSyncfusion(Data.tanggal_penerimaan)
        Data.tanggal_jatuh_tempo_bayar = this.utilityService.onFixingDatepickerSyncfusion(Data.tanggal_jatuh_tempo_bayar);
        Data.tanggal_surat_jalan_supplier = this.utilityService.onFixingDatepickerSyncfusion(Data.tanggal_surat_jalan_supplier);

        Data.details = this.dataDetail;
        Data.sub_total_1 = this.sub_total_1;
        Data.total_disc = this.total_disc;
        Data.sub_total_2 = this.sub_total_2;
        Data.total_tax = this.total_tax;
        Data.jumlah_item = this.jumlah_item;
        Data.total_transaksi = this.total_transaksi;
        Data.biaya_kirim = 0;
        Data.biaya_asuransi =0;
        Data.biaya_lain = 0;
        Data.potongan_nominal = 0;
        Data.potongan_prosentase = 0;
        Data.total_uang_muka = 0;
        Data.total_tagihan = this.total_transaksi;

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
        return this.httpOperationService.defaultPutRequest(this.API.VALIDASI,{ penerimaan_id : id })
            .pipe(
                catchError((error: HttpErrorResponse):any =>{
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
    
    Cancel(id:number,reason:string): Observable<any>{
        return this.httpOperationService.defaultPutRequest(this.API.CANCEL,{ 
                penerimaan_id : id,
                reason_canceled:reason 
            })
            .pipe(
                catchError((error: HttpErrorResponse):any =>{
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
        );
    }
}
