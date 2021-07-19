import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';

import * as CONFIG from '../../../../../api/index';

@Injectable({
    providedIn: 'root'
})
export class PendaftaranPasienBaruService {

    constructor(private httpOperationService: HttpOperationService) { }

    onGetAllJenisKelamin() {
        return this.httpOperationService.defaultPostRequestWithoutLoading(CONFIG.API.GET_ALL_SEX, [])
            .pipe(
                map((_result) => {
                    return _result.result;
                })
            )
    }

    onGetGolonganDarah() {
        return this.httpOperationService.defaultPostRequestWithoutLoading(CONFIG.API.GET_ALL_GOL_DARAH, [])
            .pipe(
                map((_result) => {
                    return _result.result;
                })
            )
    }

    onGetKeterbatasan() {
        return this.httpOperationService.defaultPostRequestWithoutLoading(CONFIG.API.GET_ALL_KETERBATASAN, [])
            .pipe(
                map((_result) => {
                    return _result.result;
                })
            )
    }

    onGetBahasa() {
        return this.httpOperationService.defaultPostRequestWithoutLoading(CONFIG.API.GET_ALL_BAHASA, [])
            .pipe(
                map((_result) => {
                    return _result.result;
                })
            )
    }
}