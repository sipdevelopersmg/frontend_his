import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { GetAllChildByIdParentModel, GetAllTarifPaketParentModel, PostDeleteTarifPaketModel, PostInsertTarifPaketModel, PutUpdateStatusTarifPaketModel, TarifPaketChildrenModel } from '../../../models/setup-data/setup-tarif-paket.model';
import { GetAllTarifModel } from '../../../models/setup-data/setup-tarif.model';
import * as API_CONFIG from '../../../../../api/BILLING';

@Injectable({
    providedIn: 'root'
})
export class SetupTarifPaketService {

    API_TARIF_PAKET = API_CONFIG.API_BILLING.SETUP_DATA.SETUP_TARIF_PAKET;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
    ) { }

    /**
     * Service Untuk Menampilkan Semua Data Tarif Paket Parent
     * @onGetAllTarifPaketParent Observable<GetAllTarifPaketParentModel>
    */
    onGetAllTarifPaketParent(): Observable<GetAllTarifPaketParentModel> {
        return this.httpOperationService.defaultGetRequest(this.API_TARIF_PAKET.GET_ALL_TARIF_PAKET_PARENT);
    }

    /**
     * Service Untuk Menampilkan Semua Data Tarif Paket Child By Parent Id
     * @onGetAllTarifPaketChildByParentId Observable<GetAllChildByIdParentModel>
    */
    onGetAllTarifPaketChildByParentId(ParentId: number): Observable<GetAllChildByIdParentModel> {
        return this.httpOperationService.defaultGetRequest(this.API_TARIF_PAKET.GET_ALL_TARIF_PAKET_CHILD_BY_PARENT_ID + ParentId);
    }

    onGetAllTarifChildForLookup(): Observable<GetAllTarifModel> {
        return this.httpOperationService.defaultGetRequest(this.API_TARIF_PAKET.GET_ALL_TARIF_PAKET_CHILD_FOR_LOOKUP);
    }

    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostInsertTarifPaketModel>
     * @param TarifPaketChildrenModel[]
    */
    onPostSave(Data: TarifPaketChildrenModel[]): Observable<PostInsertTarifPaketModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TARIF_PAKET.POST_SAVE_TARIF_PAKET, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * Service Untuk Menghapus Data
     * @onPostDelete Observable<PostDeleteTarifPaketModel>
     * @param id_setup_tarif_parent number
     * @param id_setup_tarif_child number
    */
    onPostDelete(id_setup_tarif_parent: number, id_setup_tarif_child: number): Observable<PostDeleteTarifPaketModel> {
        return this.httpOperationService.defaultPostRequest(this.API_TARIF_PAKET.POST_DELETE_TARIF_PAKET, {
            id_setup_tarif_parent: id_setup_tarif_parent,
            id_setup_tarif_child: id_setup_tarif_child
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    /**
    * Service Untuk Mengubah Status Active
    * @onPutStatusActive Observable<DeleteKelompokTarifModel>
    * @param id_setup_tarif_parent: number 
    * @param id_setup_tarif_child: number 
    * @param is_active: boolean
   */
    onPutStatusActive(id_setup_tarif_parent: number, id_setup_tarif_child: number, is_active: boolean): Observable<PutUpdateStatusTarifPaketModel> {
        return this.httpOperationService.defaultPutRequest(this.API_TARIF_PAKET.PUT_UPDATE_STATUS_TARIF_PAKET, {
            id_setup_tarif_parent: id_setup_tarif_parent,
            id_setup_tarif_child: id_setup_tarif_child,
            is_active: is_active
        }).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            })
        );
    }
}
