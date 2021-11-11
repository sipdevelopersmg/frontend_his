import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../../api/PIS/IRNA';
import { GetAllCaraPulangModel, GetAllKondisiPulangModel } from '../../../models/IRNA/surat_pengantar_pembayaran.model';

@Injectable({
    providedIn: 'root'
})
export class SuratPengantarPembayaranService {

    API_CONFIG = API_CONFIG.IRNA.SURAT_PENGANTAR_PEMBAYARAN;

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllCaraPulang(): Observable<GetAllCaraPulangModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL_CARA_PULANG);
    }

    onGetAllKondisiPulang(): Observable<GetAllKondisiPulangModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL_KONDISI_PULANG);
    }
}
