import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api';
import { GetAllAgamaModel } from '../../../models/setup-data/agama.model';

@Injectable({
    providedIn: 'root'
})
export class AgamaService {

    API_AGAMA = API_CONFIG.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.AGAMA;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllAgamaModel>
    */
    onGetAll(): Observable<GetAllAgamaModel> {
        return this.httpOperationService.defaultGetRequest(this.API_AGAMA.GET_ALL_AGAMA);
    }
}
