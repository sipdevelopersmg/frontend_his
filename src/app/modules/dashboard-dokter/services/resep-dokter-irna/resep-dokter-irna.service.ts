import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { TrPemesananDetailInsert } from 'src/app/modules/MM/models/penerimaan/pemesanan/PemesananModel';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { TrResepDokterIrjaDetailInsert, TrResepDokterIrjaDetailRacikanInsert, TrResepDokterIrjaInsert } from '../../models/resep.model';
import { DaftarPasienService } from '../daftar-pasien/daftar-pasien.service';

@Injectable({
  providedIn: 'root'
})
export class ResepDokterIrnaService {

    public API = PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRNA;

    public dataHistoryResep = new BehaviorSubject([]);

    private readonly _dataDetail = new BehaviorSubject<TrResepDokterIrjaDetailInsert[]>([]);
    readonly dataDetail$ = this._dataDetail.asObservable();

    private readonly _dataDetailRacikan = new BehaviorSubject<TrResepDokterIrjaDetailRacikanInsert[]>([]);
    readonly dataDetailRacikan$ = this._dataDetailRacikan.asObservable();

    public dataObat = new BehaviorSubject([]);

    get dataDetailRacikan(): TrResepDokterIrjaDetailRacikanInsert[] {
        return this._dataDetailRacikan.getValue();
    }
    set dataDetailRacikan(val: TrResepDokterIrjaDetailRacikanInsert[]) {
        this._dataDetailRacikan.next(val);
    }

    get dataDetail(): TrResepDokterIrjaDetailInsert[] {
        return this._dataDetail.getValue();
    }
    set dataDetail(val: TrResepDokterIrjaDetailInsert[]) {
        this._dataDetail.next(val);
    }

    public dataSourceParentGrid = new BehaviorSubject([]);
    public dataSourceChildGrid = new BehaviorSubject([]);
    public dataSelectRacikan = new BehaviorSubject({});

    public jumlah_item: number = 0;
    private counter: number = 0;


    constructor(
      private httpOperationService: HttpOperationService,
      private notificationService: NotificationService,
      public daftarPasienService: DaftarPasienService
    ) { }


    onInitList(): void{

    }

    /**
     * Service Untuk Menampilkan data berdasarkan dinamik filter
     * @onGetAll Void
    */
    onGetAllByResepActiveByRegister(req: PostRequestByDynamicFiterModel[]):  Observable<any> {
      let id_person = 1; //this.daftarPasienService.ActivePasien.value.id_register;
      return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_AKTIF_BY_REGISTER+"/"+id_person, req).pipe(
          catchError((error: HttpErrorResponse): any => {
              this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
      );
    }


    /**
      * Service Untuk Mengisi dataScource
      * @setDataSource Void
      */
    setDataObat(req: PostRequestByDynamicFiterModel[]): void {
        this.onGetAllByParams(req).subscribe((result) => {
            this.dataObat.next(result.data);
        });
    }

    setDataResep(req: PostRequestByDynamicFiterModel[]): void {
        this.onGetAllByRegister(req).subscribe((result) =>{
            this.dataHistoryResep.next(result.data);
        })
    }

    /**
    * Service Untuk Menampilkan data berdasarkan dinamik filter
    * @onGetAll Observable<Model>
    */
    onGetAllByParams(req: PostRequestByDynamicFiterModel[]): Observable<any> {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_OBAT, req).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

        /**
     * Service Untuk Menampilkan data header berdasarkan Id
     * @onGetAll Observable<SetupPabrikModel>
     */
    onGetById(Id): Observable<any> {
        return this.httpOperationService.defaultGetRequest(this.API.GET_BY_ID+'/'+Id);
    }

    onGetAllByRegister(req: PostRequestByDynamicFiterModel[]): Observable<any> {
        let id_register = 1; //this.daftarPasienService.ActivePasien.value.id_register;
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_BY_REGISTER+"/"+id_register, req).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    addDetail(detail: TrResepDokterIrjaDetailInsert): void {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }

    addDetailRacikan(detailRacikan: TrResepDokterIrjaDetailRacikanInsert): void {
        this.dataDetailRacikan = [
            ...this.dataDetailRacikan,
            detailRacikan
        ]
    }

    setDetailRacikan(detailRacikan: TrResepDokterIrjaDetailRacikanInsert[]):void {
        this.dataDetailRacikan = detailRacikan
    }

    editDetail(index: number, data) {
        this.dataDetail[index] = data;
        this.sum();
    }

    removeDataDetail(index: number) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }

    saveResep(){
        console.log('parent',this.dataDetail)
        console.log('child',this.dataSourceChildGrid.value)
    }

    Insert(Data:TrResepDokterIrjaInsert,is_simpan_template:number,is_simpan_racikan:number): Observable<any>{
        let id_item = 0 ;
        let urut = 0 ;
        this.dataDetail.map((e,i)=>{
            e.no_urut = i+1;
            e.racikans = [];
            return e;
        });

        this.dataSourceChildGrid.value.forEach((item)=>{
            let index = this.dataDetail.map((e) => { return e.counter }).indexOf(item.counter);
            
            urut = (this.dataDetail[index].id_item != id_item)? 0 : urut;
            id_item =this.dataDetail[index].id_item;
            urut++
            item.no_urut = urut

            this.dataDetail[index].racikans.push(item);
        })

        Data.details = this.dataDetail;
        Data.jumlah_item = this.jumlah_item;
        // console.log(Data);
        return this.httpOperationService.defaultPostRequest(this.API.INSERT_RESEP+'/'+is_simpan_template+'/'+is_simpan_racikan, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    sum(): void {
        this.jumlah_item = this.dataDetail.sum('qty_resep');
    }

    reset():void {
        this.dataSourceChildGrid.next([])
        this.dataDetail = []
    }

    stopResepRawatInap(id_resep:number):Observable<any> {
        return this.httpOperationService.defaultPutRequestWithoutParams(this.API.UPDATE_TO_STOP+'/'+ id_resep)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    ubahResepRawatInap(Data):Observable<any> {
        let id_item = 0 ;
        let urut = 0 ;
        this.dataDetail.map((e,i)=>{
            e.no_urut = i+1;
            e.racikans = [];
            return e;
        });

        this.dataSourceChildGrid.value.forEach((item)=>{
            let index = this.dataDetail.map((e) => { return e.counter }).indexOf(item.counter);
            
            urut = (this.dataDetail[index].id_item != id_item)? 0 : urut;
            id_item =this.dataDetail[index].id_item;
            urut++
            item.no_urut = urut

            this.dataDetail[index].racikans.push(item);
        })

        Data.details = this.dataDetail;
        Data.jumlah_item = this.jumlah_item;
        let Body = {
            resep_id_lama : Data.resep_id,
            resep_baru : Data
        };
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_UBAH+'/'+0,Body)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
        );
    }

    lanjutakanResepRawatInap(Body:any):Observable<any>{
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_LANJUT,Body)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }
    
}
