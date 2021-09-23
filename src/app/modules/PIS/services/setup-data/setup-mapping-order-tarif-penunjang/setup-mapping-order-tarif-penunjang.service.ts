import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { GrupPenunjangModel } from '../../../models/setup-data/setup_grup_penunjang.model';
import { GetAllJenisPemeriksaanModel } from '../../../models/setup-data/setup_jenis_pemeriksaan.model';
import { SetupGrupPenunjangService } from '../setup-grup-penunjang/setup-grup-penunjang.service';
import { SetupJenisPemeriksaanService } from '../setup-jenis-pemeriksaan/setup-jenis-pemeriksaan.service';
import * as API_CONFIG from '../../../../../api/PIS/SETUP_DATA/MAPPING_ORDER_TARIF_PENUNJANG';
import { DeleteMappingTarifPenunjangModel, GetAllMappingTarifPenunjangModel, MappingTarifPenunjangModel, PostSaveMappingTarifPenunjangModel, UpdateMappingTarifPenunjangModel } from '../../../models/setup-data/setup_mapping_tarif_penunjang.model';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SetupMappingOrderTarifPenunjangService {

    API_MMAPING_ORDER_TARIF_PENUNJANG = API_CONFIG;

    JenisPenunjang = new BehaviorSubject<GrupPenunjangModel[]>([]);

    KelompokJenisPemeriksaan = new BehaviorSubject<any>([]);
    KelompokJenisPemeriksaan$ = this.KelompokJenisPemeriksaan.asObservable();

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
        private setupGrupPenunjangService: SetupGrupPenunjangService,
        private setupJenisPemeriksaanService: SetupJenisPemeriksaanService,
    ) { }

    onGetJenisPenunjang(): void {
        this.setupGrupPenunjangService.onGetAll()
            .subscribe((result) => {
                this.JenisPenunjang.next(result.data);
            });
    };

    onGetJenisPemeriksaanByGrupPenunjang(GrupPenunjang: string): Observable<GetAllJenisPemeriksaanModel> {
        return this.setupJenisPemeriksaanService.onGetAll(GrupPenunjang);
    };

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllMappingTarifPenunjangModel>
    */
    onGetAll(): Observable<GetAllMappingTarifPenunjangModel> {
        return this.httpOperationService.defaultGetRequest(this.API_MMAPING_ORDER_TARIF_PENUNJANG.GET_ALL_MAPPING_TARIF_PENUNJANG);
    }

    onGetAllMappingTarifOrderByKodeKelompokAndKelasPerawatan(kode_kelompok: string, id_kelas: number): Observable<GetAllMappingTarifPenunjangModel> {
        return this.httpOperationService.defaultPostRequest(this.API_MMAPING_ORDER_TARIF_PENUNJANG.GET_ALL_BY_KODE_KELOMPOK_AND_KELAS_PERAWATAN, {
            kode_kelompok: kode_kelompok,
            id_kelas: id_kelas
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSaveMappingTarifPenunjangModel>
     * @param MappingTarifPenunjangModel
    */
    onPostSave(Data: MappingTarifPenunjangModel[]): Observable<PostSaveMappingTarifPenunjangModel> {
        return this.httpOperationService.defaultPostRequest(this.API_MMAPING_ORDER_TARIF_PENUNJANG.POST_SAVE_MAPPING_TARIF_PENUNJANG, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<UpdateMappingTarifPenunjangModel>
     * @param MappingTarifPenunjangModel
    */
    onPutEdit(Data: MappingTarifPenunjangModel): Observable<UpdateMappingTarifPenunjangModel> {
        return this.httpOperationService.defaultPutRequest(this.API_MMAPING_ORDER_TARIF_PENUNJANG.PUT_UPDATE_MAPPING_TARIF_PENUNJANG, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onDelete Observable<DeleteMappingTarifPenunjangModel>
     * @param MappingTarifPenunjangId
    */
    onDelete(MappingTarifPenunjangId: number[]): Observable<DeleteMappingTarifPenunjangModel> {
        return this.httpOperationService.defaultDeleteRequestWithBody(this.API_MMAPING_ORDER_TARIF_PENUNJANG.DELETE_MAPPING_TARIF_PENUNJANG, MappingTarifPenunjangId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
                })
            );
    }
}
