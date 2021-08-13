import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/SETUP_DATA';
import { GetAllMaritalStatusModel } from '../../../models/setup-data/marital_status.model';

@Injectable({
    providedIn: 'root'
})
export class MaritalStatusService {

    API = API_CONFIG.API.MARITAL_STATUS;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllMaritalStatusModel>
    */
    onGetAll(): Observable<GetAllMaritalStatusModel> {
        return this.httpOperationService.defaultGetRequest(this.API.GET_ALL_MARITAL_STATUS);
    }

}
