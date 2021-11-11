import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/IRNA';
import { GetRencanaPulangPasienModel, IPostSaveRencanaPulangModel, PostSaveRencanaPulangPasienModel } from '../../../models/IRNA/rencana-pulang-pasien.model';

@Injectable({
    providedIn: 'root'
})
export class RencanaPulangPasienService {

    API_CONFIG = API_CONFIG.IRNA.RENCANA_PULANG_PASIEN;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onPostSaveRencanaPulangPasien(parameter: IPostSaveRencanaPulangModel): Observable<PostSaveRencanaPulangPasienModel> {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_SAVE_RENCANA_PULANG_PASIEN, parameter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onGetRencanaPulangPasienByIdRegister(RegisterId: number): Observable<GetRencanaPulangPasienModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_RENCANA_PULANG_BY_ID_REGISTER + RegisterId);
    }
}
