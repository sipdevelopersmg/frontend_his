import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { IAlamatPersonModel, IDebiturPasienModel, IDetailPersonModel, IKontakPersonModel, PostDeleteDebiturPerson, PostInsertAlamatPerson, PostInsertDebiturPerson, PostInsertKontakPerson, PutUpdateAlamatPerson, PutUpdateDetailPerson, PutUpdateKontakPerson } from '../../../models/IRJA/edit-pasien.model';
import * as API_CONFIG from '../../../../../api';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

@Injectable({
    providedIn: 'root'
})
export class EditPasienService {

    API_EDIT_PASIEN = API_CONFIG.API.PIS.API_PIS.IRJA.IRJA.EDIT_PASIEN;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * @onUpdateDetailPerson Method Obervable untuk mengupdate Detail Person
     * @param DetailPerson IDetailPersonModel
    */
    onUpdateDetailPerson(DetailPerson: IDetailPersonModel): Observable<PutUpdateDetailPerson> {
        return this.httpOperationService.defaultPutRequest(this.API_EDIT_PASIEN.PUT_UPDATE_DETAIL_PERSON, DetailPerson)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * @onUpdateAlamatPerson Method Obervable untuk mengupdate Alamat Person
     * @param AlamatPerson IAlamatPersonModel
    */
    onUpdateAlamatPerson(AlamatPerson: IAlamatPersonModel): Observable<PutUpdateAlamatPerson> {
        return this.httpOperationService.defaultPutRequest(this.API_EDIT_PASIEN.PUT_UPDATE_ALAMAT_PERSON, AlamatPerson)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * @onUpdateKontakPerson Method Obervable untuk mengupdate Kontak Person
     * @param KontakPerson IKontakPersonModel
    */
    onUpdateKontakPerson(KontakPerson: IKontakPersonModel): Observable<PutUpdateKontakPerson> {
        return this.httpOperationService.defaultPutRequest(this.API_EDIT_PASIEN.PUT_UPDATE_KONTAK_PERSON, KontakPerson)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * @onUpdateDebiturPerson Method Obervable untuk mengupdate Debitur Pasien
     * @param KontakPerson IKontakPersonModel
    */
    onUpdateDebiturPerson(DebiturPasien: IDebiturPasienModel): Observable<PutUpdateKontakPerson> {
        return this.httpOperationService.defaultPutRequest(this.API_EDIT_PASIEN.PUT_UPDATE_DEBITUR_PASIEN, DebiturPasien)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * @onUpdateStatusActiveAlamatPerson Method Obervable untuk mengupdate Status Active Alamat Person
     * @param id_person number
     * @param id_alamat_person number
     * @param is_active boolean
    */
    onUpdateStatusActiveAlamatPerson(id_person: number, id_alamat_person: number, is_active: boolean): Observable<HttpResponseModel> {
        const params = {
            id_person,
            id_alamat_person,
            is_active
        };

        return this.httpOperationService.defaultPutRequest(this.API_EDIT_PASIEN.PUT_UPDATE_STATUS_ACTIVE_ALAMAT_PERSON, params)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * @onUpdateStatusActiveKontakPerson Method Obervable untuk mengupdate Status Active Kontak Person
     * @param id_person number
     * @param id_kontak_person number
     * @param is_active boolean
    */
    onUpdateStatusActiveKontakPerson(id_person: number, id_kontak_person: number, is_active: boolean): Observable<HttpResponseModel> {
        const params = {
            id_person,
            id_kontak_person,
            is_active
        };

        return this.httpOperationService.defaultPutRequest(this.API_EDIT_PASIEN.PUT_UPDATE_STATUS_ACTIVE_KONTAK_PERSON, params)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * @onUpdateStatusActiveDebiturPasien Method Obervable untuk mengupdate Status Active Debitur Pasien
     * @param id_person number
     * @param id_debitur number
     * @param is_active boolean
    */
    onUpdateStatusActiveDebiturPasien(id_person: number, id_debitur: number, is_active: boolean): Observable<HttpResponseModel> {
        const params = {
            id_person,
            id_debitur,
            is_active
        };

        return this.httpOperationService.defaultPutRequest(this.API_EDIT_PASIEN.PUT_UPDATE_STATUS_ACTIVE_DEBITUR_PASIEN, params)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
    * @onInsertAlamatPerson Method Obervable untuk menambahkan Alamat Person
    * @param AlamatPerson IAlamatPersonModel
   */
    onInsertAlamatPerson(AlamatPerson: IAlamatPersonModel): Observable<PostInsertAlamatPerson> {
        return this.httpOperationService.defaultPostRequest(this.API_EDIT_PASIEN.POST_INSERT_ALAMAT_PERSON, AlamatPerson)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * @onInsertKontakPerson Method Obervable untuk menambahkan Kontak Person
     * @param KontakPerson IKontakPersonModel
    */
    onInsertKontakPerson(KontakPerson: IKontakPersonModel): Observable<PostInsertKontakPerson> {
        return this.httpOperationService.defaultPostRequest(this.API_EDIT_PASIEN.POST_INSERT_KONTAK_PERSON, KontakPerson)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * @onInsertDebiturPerson Method Obervable untuk menambahkan Debitur Person
     * @param DebiturPasien IDebiturPasienModel
    */
    onInsertDebiturPerson(DebiturPasien: IDebiturPasienModel): Observable<PostInsertDebiturPerson> {
        return this.httpOperationService.defaultPostRequest(this.API_EDIT_PASIEN.POST_INSERT_DEBITUR_PASIEN, DebiturPasien)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * @onDeleteDebiturPerson Method Obervable untuk menghapus Debitur Person
     * @param : id_person: number, id_debitur: number
    */
    onDeleteDebiturPerson(id_person: number, id_debitur: number): Observable<PostDeleteDebiturPerson> {
        return this.httpOperationService.defaultPostRequest(
            this.API_EDIT_PASIEN.POST_DELETE_DEBITUR_PASIEN,
            {
                id_person: id_person,
                id_debitur: id_debitur
            })
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }


}
