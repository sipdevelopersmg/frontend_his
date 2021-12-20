import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import * as API_CONFIG from '../../../../../api';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';

@Injectable({
    providedIn: 'root'
})
export class DaftarPasienRawatJalanService {

    API_DAFTAR_PASIEN_IRJA = API_CONFIG.API.PIS.API_PIS.IRJA.IRJA.DAFTAR_PASIEN_IRJA;

    private GridDaftarPasienIrja = new BehaviorSubject([]);
    public GridDaftarPasienIrja$ = this.GridDaftarPasienIrja.asObservable();

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * @onGetAllPasienIrja Method untuk Get All Pasien 
    */
    onGetAllPasienIrja(): void {
        this.httpOperationService.defaultGetRequest(this.API_DAFTAR_PASIEN_IRJA.GET_ALL_PASIEN_IRJA)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            )
            .subscribe(
                (result) => {
                    if (result) {
                        this.GridDaftarPasienIrja.next(result.data);
                    }
                }, (error) => {
                    console.warn(error)
                }
            );
    }

    onDeletePasienIrja(id_person: number, is_active: boolean): Observable<any> {
        return this.httpOperationService.defaultPutRequest(
            this.API_DAFTAR_PASIEN_IRJA.PUT_UPDATE_STATUS_ACTIVE_PERSON,
            {
                id_person: id_person,
                is_active: is_active
            }
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    /**
     * @onGetAllPasienIrjaByDynamicFilter Method untuk Get All Pasien By Dynamic Filter
    */
    onGetAllPasienIrjaByDynamicFilter(req: PostRequestByDynamicFiterModel[]): void {
        this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_DAFTAR_PASIEN_IRJA.POST_GET_PASIEN_BY_DYNAMIC_FILTER, req)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            )
            .subscribe(
                (result) => {
                    this.GridDaftarPasienIrja.next(result.data)
                }, (error) => {
                    console.warn(error);
                }
            );
    }
}
