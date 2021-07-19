import { Injectable } from '@angular/core';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';

import * as CONFIG from '../../../../../api/index';

@Injectable({
    providedIn: 'root'
})
export class AntrianPasienRawatJalanService {

    constructor(private httpOperationService: HttpOperationService) { }

    onGetAllDataAntrianRawatJalanByPoliCode(PolyCode: any) {
        let SearchParameter = [
            {
                "columnName": "irj.PolyCode",
                "filter": "like",
                "searchText": PolyCode,
                "searchText2": ""
            }
        ];

        return this.httpOperationService.defaultPostRequest(CONFIG.API.GET_ALL_ANTRIAN_RAWAT_JALAN, SearchParameter);
    }

    onGetAllDataAntrianRawatJalan() {
        return this.httpOperationService.defaultPostRequest(CONFIG.API.GET_ALL_ANTRIAN_FROM_PENDAFTARAN_ULANG, []);
    }
}
