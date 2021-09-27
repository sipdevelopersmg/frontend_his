import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { TrResepDokterIrjaDetailInsert, TrResepDokterIrjaDetailRacikanInsert } from '../../models/resep.model';

@Injectable({
    providedIn: 'root'
})
export class ResepDokterService {

    private API = PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA;

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
        private notificationService: NotificationService
    ) { }

    /**
      * Service Untuk Mengisi dataScource
      * @setDataSource Void
      */
    setDataObat(req: PostRequestByDynamicFiterModel[]): void {
        this.onGetAllByParams(req).subscribe((result) => {
            this.dataObat.next(result.data);
        });
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

    sum(): void {
        this.jumlah_item = this.dataDetail.sum('qty_resep');
    }

}
