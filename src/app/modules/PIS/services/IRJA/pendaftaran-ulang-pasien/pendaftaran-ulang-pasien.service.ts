import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

import * as CONFIG from "../../../../../api/index";

export interface DataPendaftaranUlangPasienModel {
    MrNo: string;
    NamaPasien: string;
    Alamat: string;
    NamaDokter: string;
    Specialist: string;
    NoAntrian: string;
    WaktuDaftar: string;
}

@Injectable({
    providedIn: 'root'
})
export class PendaftaranUlangPasienService {

    constructor(private httpOperationService: HttpOperationService) { }

    onGetDataPasienByNoAntrian(NoAntrian: string) {
        return this.httpOperationService.defaultPostRequestWithoutLoading(CONFIG.API.GET_DATA_PASIEN_BY_NO_ANTRIAN, JSON.stringify(NoAntrian))
            .pipe(
                map((_result) => {
                    return _result.data[0];
                })
            );
    }

    onKonfirmasiPendaftaranUlang(MrNo: string) {
        return this.httpOperationService.defaultPostRequest(CONFIG.API.POST_KONFIRMASI_PENDAFTARAN_ULANG, JSON.stringify(MrNo));

    }
}
