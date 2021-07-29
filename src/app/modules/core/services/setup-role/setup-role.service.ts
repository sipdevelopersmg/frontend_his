import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import * as API_CONFIG from '../../../../api/index';

@Injectable({
    providedIn: 'root'
})
export class SetupRoleService {

    CurrentDataRole = new BehaviorSubject([]);

    constructor(private httpOperationService: HttpOperationService) { }

    onGetAllRole(): Observable<any> {
        return this.httpOperationService.defaultGetRequest(API_CONFIG.API.GET_ALL_ROLE);
    }

    onSetCurrentDataRole(DataRole: any): void {
        this.CurrentDataRole.next(DataRole);
    }

    onGetCurrentDataRole(): Observable<any> {
        const DataRoleFromSessionStorage = JSON.parse(sessionStorage.getItem('DataRole'));

        if (DataRoleFromSessionStorage) {
            this.CurrentDataRole.next(DataRoleFromSessionStorage);

            return this.CurrentDataRole.asObservable();
        }
    }
}
