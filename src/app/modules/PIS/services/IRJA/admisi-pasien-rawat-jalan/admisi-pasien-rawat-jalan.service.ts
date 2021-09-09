import { Injectable } from '@angular/core';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';

@Injectable({
    providedIn: 'root'
})
export class AdmisiPasienRawatJalanService {

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    postAdmisiPasienRawatJalan(requset: Object) {
        // return this.httpOperationService.defaultPostRequest(API.IRJA.POST_ADMISI_RAWAT_JALAN, requset)
    }

}
