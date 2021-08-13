import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { GetAllJenisIdentitasModel } from '../../../models/setup-data/jenis-identitas.model';
import * as API_CONFIG from '../../../../../api/PIS/SETUP_DATA';

@Injectable({
    providedIn: 'root'
})
export class JenisIdentitasService {

    API = API_CONFIG.API.JENIS_IDENTITAS;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllEducationModel>
    */
    onGetAll(): Observable<GetAllJenisIdentitasModel> {
        return this.httpOperationService.defaultGetRequest(this.API.GET_ALL_JENIS_IDENTITAS);
    }
}
