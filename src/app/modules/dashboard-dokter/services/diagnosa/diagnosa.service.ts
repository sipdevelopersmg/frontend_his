import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import *  as API_CONFIG from '../../../../api/DASHBOARD-DOKTER';
import { IDiagnosaPasienModel } from '../../models/diagnosa-pasien.model';
import { DaftarPasienService } from '../daftar-pasien/daftar-pasien.service';

@Injectable({
    providedIn: 'root'
})
export class DiagnosaService {

    API_CONFIG = API_CONFIG.API_DASHBOARD_DOKTER.DIAGNOSA;

    constructor(
        private daftarPasienService: DaftarPasienService,
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    handleGetAllDiagnosa(): Observable<HttpResponseModel> {
        let id_register = this.daftarPasienService.ActivePasien.value.id_register;

        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL_BY_ID_REGISTER + id_register);
    }

    handlePostSaveDiagnosa(Data: IDiagnosaPasienModel): Observable<HttpResponseModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_SAVE, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}
