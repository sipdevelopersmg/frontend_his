import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PendaftaranPasienBaruService } from 'src/app/modules/PIS/services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import { SetupDokterService } from 'src/app/modules/PIS/services/setup-data/setup-dokter/setup-dokter.service';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import *  as API_CONFIG from '../../../../api/DASHBOARD-DOKTER';
import { GetAllPasienIRJAByDokterModel, IDaftarPasienIRJAModel } from '../../models/daftar_pasien.model';

@Injectable({
    providedIn: 'root'
})
export class DaftarPasienService {

    API_CONFIG = API_CONFIG.API_DASHBOARD_DOKTER.DAFTAR_PASIEN;

    ActivePasien = new BehaviorSubject<IDaftarPasienIRJAModel>({});

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
        private pendaftaranPasienBaruService: PendaftaranPasienBaruService,
    ) { }

    onSetActivePasien(Data: IDaftarPasienIRJAModel): void {
        const current_dokter = JSON.parse(localStorage.getItem('UserData'));
        Data.dpjp = current_dokter['full_name'];

        this.pendaftaranPasienBaruService.onGetLinkFotoPerson(Data.id_person)
            .subscribe((result) => {
                Data['photo_url'] = result.data;
            }, (error) => {
                console.log(error);
            }, () => {
                localStorage.setItem("ActivePasien", JSON.stringify(Data));

                this.ActivePasien.next(Data);
            });
    };

    onGetActivePasien(): void {
        const active_pasien = JSON.parse(localStorage.getItem("ActivePasien"));

        this.ActivePasien.next(active_pasien);
    };

    onGetAllDaftarPasienIRJA(DokterId: number): Observable<GetAllPasienIRJAByDokterModel> {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL_PASIEN_IRJA_BY_ID_DOKTER + DokterId);
    }
}
