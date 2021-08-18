import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { GetAllRoleActiveModel } from '../../models/setup-role/setup-role.model';
import * as API_CONFIG from '../../../../api/CORE/CORE';

@Injectable({
    providedIn: 'root'
})
export class SetupRoleService {

    CurrentDataRole = new BehaviorSubject([]);

    constructor(private httpOperationService: HttpOperationService) { }

    onGetAllRole(): Observable<any> {
        return this.httpOperationService.defaultGetRequest(API_CONFIG.GET_ALL_ROLE);
    }

    onGetAllRoleActive(): Observable<GetAllRoleActiveModel> {
        return this.httpOperationService.defaultGetRequest(API_CONFIG.GET_ALL_ROLE_ACTIVE);
    }

    onSetCurrentDataRole(DataRole: any): void {
        this.CurrentDataRole.next(DataRole);
    }

    onGetCurrentDataRole(): Observable<any> {
        const DataRoleFromSessionStorage = JSON.parse(localStorage.getItem('DataRole'));

        if (DataRoleFromSessionStorage) {
            this.CurrentDataRole.next(DataRoleFromSessionStorage);

            return this.CurrentDataRole.asObservable();
        }
    }
}
