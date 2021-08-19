import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api';
import { GetAllMaritalStatusModel } from '../../../models/setup-data/marital_status.model';

@Injectable({
    providedIn: 'root'
})
export class MaritalStatusService {

    API_MARITAL_STATUS = API_CONFIG.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.MARITAL_STATUS;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllMaritalStatusModel>
    */
    onGetAll(): Observable<GetAllMaritalStatusModel> {
        return this.httpOperationService.defaultGetRequest(this.API_MARITAL_STATUS.GET_ALL_MARITAL_STATUS);
    }

}
