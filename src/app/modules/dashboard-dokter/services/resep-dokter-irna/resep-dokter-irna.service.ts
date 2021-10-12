import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { TrPemesananDetailInsert } from 'src/app/modules/MM/models/penerimaan/pemesanan/PemesananModel';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { TrResepDokterIrjaDetailInsert, TrResepDokterIrjaDetailRacikanInsert, TrResepDokterIrjaInsert } from '../../models/resep.model';

@Injectable({
  providedIn: 'root'
})
export class ResepDokterIrnaService {

    public API = PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRNA;

    public dataHistoryResep = new BehaviorSubject([]);

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }


    onInitList(): void{

    }

    /**
     * Service Untuk Menampilkan data berdasarkan dinamik filter
     * @onGetAll Void
    */
    onGetAllByResepActiveByRegister(req: PostRequestByDynamicFiterModel[]):  Observable<any> {
      let id_person = 1; //this.daftarPasienService.ActivePasien.value.id_register;
      return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_AKTIF_BY_REGISTER+"/"+id_person, req).pipe(
          catchError((error: HttpErrorResponse): any => {
              this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
          })
      );
    }
    
}
