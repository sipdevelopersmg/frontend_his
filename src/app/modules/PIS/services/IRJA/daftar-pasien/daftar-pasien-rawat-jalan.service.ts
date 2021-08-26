import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { GetAllPasienIRJAModel } from '../../../models/IRJA/daftar-pasien.model';
import * as API_CONFIG from '../../../../../api';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

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
     * @onGetAllPasienIrja Method untuk Get All Pasien IRJA 
    */
    onGetAllPasienIrja(): void {
        this.httpOperationService.defaultGetRequest(this.API_DAFTAR_PASIEN_IRJA.GET_ALL_PASIEN_IRJA)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            ).subscribe((result) => {
                if (result) {
                    this.GridDaftarPasienIrja.next(result.data);
                }
            });
    }
}
