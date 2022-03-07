import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { TrResepDokterIrjaInsert } from 'src/app/modules/dashboard-dokter/models/resep.model';
import { DaftarPasienService } from 'src/app/modules/dashboard-dokter/services/daftar-pasien/daftar-pasien.service';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { TrResepFormulariumDokterIrjaDetailInsert, TrResepFormulariumDokterIrjaDetailRacikanInsert, TrResepFormulariumDokterIrjaInsert } from '../../models/resep-formularium/resep-formularium';

@Injectable({
  providedIn: 'root'
})
export class ResepFormulariumIrdaService {

  public API = PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRDA;

    public dataHistoryResep = new BehaviorSubject([]);

    private readonly _dataDetail = new BehaviorSubject<TrResepFormulariumDokterIrjaDetailInsert[]>([]);
    readonly dataDetail$ = this._dataDetail.asObservable();

    private readonly _dataDetailRacikan = new BehaviorSubject<TrResepFormulariumDokterIrjaDetailRacikanInsert[]>([]);
    readonly dataDetailRacikan$ = this._dataDetailRacikan.asObservable();

    public dataObat = new BehaviorSubject([]);

    get dataDetailRacikan(): TrResepFormulariumDokterIrjaDetailRacikanInsert[] {
        return this._dataDetailRacikan.getValue();
    }
    set dataDetailRacikan(val: TrResepFormulariumDokterIrjaDetailRacikanInsert[]) {
        this._dataDetailRacikan.next(val);
    }

    get dataDetail(): TrResepFormulariumDokterIrjaDetailInsert[] {
        return this._dataDetail.getValue();
    }
    set dataDetail(val: TrResepFormulariumDokterIrjaDetailInsert[]) {
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
      let id_person = this.daftarPasienService.ActivePasien.value.id_register;
      return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_AKTIF_BY_REGISTER+"/"+id_person, req).pipe(
          catchError((error: HttpErrorResponse): any => {
              this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
      );
    }

    onGetByIdRegisterToTrans(id_register: number):  Observable<any> {
        return this.httpOperationService.defaultGetRequest(this.API.GET_RESEP_BY_REGISTER+"/"+id_register).pipe(
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

    addDetail(detail: TrResepFormulariumDokterIrjaDetailInsert): void {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }

    addDetailRacikan(detailRacikan: TrResepFormulariumDokterIrjaDetailRacikanInsert): void {
        this.dataDetailRacikan = [
            ...this.dataDetailRacikan,
            detailRacikan
        ]
    }

    setDetailRacikan(detailRacikan: TrResepFormulariumDokterIrjaDetailRacikanInsert[]):void {
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

    Insert(Data:TrResepFormulariumDokterIrjaInsert,is_simpan_template:number,is_simpan_racikan:number): Observable<any>{
        let id_item = 0 ;
        let urut = 0 ;
        this.dataSourceParentGrid.value.map((e,i)=>{
            e.no_urut = i+1;
            e.racikans = [];
            return e;
        });
        console.log(this.dataSourceChildGrid.value);
        this.dataSourceChildGrid.value.forEach((item)=>{
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter }).indexOf(item.counter);
            
            if(index!=-1){
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item)? 0 : urut;
                id_item =this.dataSourceParentGrid.value[index].id_item;
                urut++
                item.no_urut = urut

                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        })

        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
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

    stopResepRawatInap(data):Observable<any> {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_STOP,data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    ubahResepRawatInap(Data):Observable<any> {
        let id_item = 0 ;
        let urut = 0 ;
        this.dataSourceParentGrid.value.map((e,i)=>{
            e.no_urut = i+1;
            e.racikans = [];
            return e;
        });

        this.dataSourceChildGrid.value.forEach((item)=>{
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter }).indexOf(item.counter);
            if(index!=-1){
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item)? 0 : urut;
                id_item =this.dataSourceParentGrid.value[index].id_item;
                urut++
                item.no_urut = urut
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        })

        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
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

    pulangResepRawatInap(Data,is_simpan_racikan:number):Observable<any> {
        let id_item = 0 ;
        let urut = 0 ;
        this.dataSourceParentGrid.value.map((e,i)=>{
            e.no_urut = i+1;
            e.racikans = [];
            return e;
        });

        this.dataSourceChildGrid.value.forEach((item)=>{
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter }).indexOf(item.counter);
            console.log(index);
            if(index!=-1){
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item)? 0 : urut;
                id_item =this.dataSourceParentGrid.value[index].id_item;
                urut++
                item.no_urut = urut

                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        })

        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        let Body = {
            resep_id_lama : Data.resep_id,
            resep_baru : Data,
            id_register : Data.id_register
        };
        return this.httpOperationService.defaultPutRequest(this.API.BAWA_PULANG+'/'+is_simpan_racikan,Body)
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

    Pulang(Data:TrResepDokterIrjaInsert,is_simpan_template:number,is_simpan_racikan:number): Observable<any>{
        let id_item = 0 ;
        let urut = 0 ;
        this.dataSourceParentGrid.value.map((e,i)=>{
            e.no_urut = i+1;
            e.racikans = [];
            return e;
        });

        this.dataSourceChildGrid.value.forEach((item)=>{
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter }).indexOf(item.counter);
            if(index!=-1){
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item)? 0 : urut;
                id_item =this.dataSourceParentGrid.value[index].id_item;
                urut++
                item.no_urut = urut

                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        })

        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        // console.log(Data);

        let param = {
            id_register : Data.id_register,
            resep_baru : Data
        }

        return this.httpOperationService.defaultPutRequest(this.API.BAWA_PULANG+'/'+is_simpan_racikan, param)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
