import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { BAWA_PULANG } from 'src/app/api/PHARMACY/RESEP-DOKTER/RESEP_DOKTER_IRNA';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { TrResepDokterIrjaDetailInsert, TrResepDokterIrjaDetailRacikanInsert, TrResepDokterIrjaInsert } from '../../models/resep.model';
import { DaftarPasienService } from '../daftar-pasien/daftar-pasien.service';

@Injectable({
    providedIn: 'root'
})
export class ResepDokterService {

    private API = PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA;
    private API_PULANG_IRNA = BAWA_PULANG
    public dataHistoryResep = new BehaviorSubject([]);

    private readonly _dataDetail = new BehaviorSubject<TrResepDokterIrjaDetailInsert[]>([]);
    readonly dataDetail$ = this._dataDetail.asObservable();

    private readonly _dataDetailRacikan = new BehaviorSubject<TrResepDokterIrjaDetailRacikanInsert[]>([]);
    readonly dataDetailRacikan$ = this._dataDetailRacikan.asObservable();

    public dataObat = new BehaviorSubject([]);

    public dataAntrianIrja = new BehaviorSubject([]);

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

    generadeNoAntrian(NoRegister): Observable<any> {
        return this.httpOperationService.defaultGetRequest(this.API.GENERADE_NO_ANTRIAN+"/"+NoRegister).pipe(
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

    onGetAllByRegister(req: PostRequestByDynamicFiterModel[]): Observable<any> {
        let id_person = this.daftarPasienService.ActivePasien.value.id_person;
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_BY_REGISTER+"/"+id_person, req).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onGetAntrian(): void{
        this.httpOperationService.defaultPostRequestWithoutLoading(this.API.GET_ANTRIAN,[])
        .pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        )
        .subscribe((result)=>{
            // console.log('TEST DATA LOAD BARU',result.data);
            this.dataAntrianIrja.next(result.data);
        })
    }

    onGetById(Id): Observable<any> {
        return this.httpOperationService.defaultGetRequest(this.API.GET_BY_ID+'/'+Id);
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
        let nama_obat = '' ;
        let urut = 0 ;
        this.dataSourceParentGrid.value.map((e,i)=>{
            e.no_urut = i+1;
            e.racikans = [];
            return e;
        });

        console.log('dataSourceChildGrid',this.dataSourceChildGrid.value);
        console.log('dataSourceParentGrid',this.dataSourceParentGrid.value);
        
        this.dataSourceChildGrid.value.forEach((item)=>{
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter }).indexOf(item.counter);
            console.log(index);
            if(index!=-1){
                urut = (this.dataSourceParentGrid.value[index].nama_obat != nama_obat)? 0 : urut;
                nama_obat =this.dataSourceParentGrid.value[index].nama_obat;
                urut++
                item.no_urut = urut
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });

        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');

        console.log('Data', Data);

        return this.httpOperationService.defaultPostRequest(this.API.INSERT_RESEP_IRJA+'/'+is_simpan_template+'/'+is_simpan_racikan, Data)
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
            
            urut = (this.dataSourceParentGrid.value[index].id_item != id_item)? 0 : urut;
            id_item =this.dataSourceParentGrid.value[index].id_item;
            urut++
            item.no_urut = urut

            this.dataSourceParentGrid.value[index].racikans.push(item);
        })

        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        // console.log(Data);

        let param = {
            id_register : Data.id_register,
            resep_baru : Data
        }

        return this.httpOperationService.defaultPutRequest(this.API_PULANG_IRNA+'/'+is_simpan_racikan, param)
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
        this.dataSourceChildGrid.next([]);
        this.dataSourceParentGrid.next([]);
    }

}
