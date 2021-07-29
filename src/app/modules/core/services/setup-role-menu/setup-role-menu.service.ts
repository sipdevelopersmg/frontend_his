import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as API_CONFIG from '../../../../api/index';

@Injectable({
    providedIn: 'root'
})
export class SetupRoleMenuService {

    constructor(
        private utilityService: UtilityService,
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllMainMenuByRoleId(RoleId: number): Observable<any> {
        return this.httpOperationService.defaultGetRequest(API_CONFIG.API.GET_MAIN_MENU_FOR_MAPPING + RoleId);
    }

    onGetSidebarMenuByMenuIdAndRoleId(MenuId: number, RoleId: number): Observable<any> {
        return this.httpOperationService.defaultPostRequestWithoutLoading(
            API_CONFIG.API.POST_SIDEBAR_MENU_FOR_MAPPING,
            { id_menu: MenuId, id_role: RoleId }
        );
    }

    onGetFieldGridBySidebarMenuIdAndRoleId(SidebarMenuId: number, RoleId: number): Observable<any> {
        return this.httpOperationService.defaultPostRequestWithoutLoading(
            API_CONFIG.API.POST_FIELD_GRID_MENU_FOR_MAPPING,
            { id_menu_sidebar: SidebarMenuId, id_role: RoleId }
        );
    }

    onGetButtonSidebarMenuIdAndRoleId(SidebarMenuId: number, RoleId: number): Observable<any> {
        return this.httpOperationService.defaultPostRequestWithoutLoading(
            API_CONFIG.API.POST_BUTTON_MENU_FOR_MAPPING,
            { id_menu_sidebar: SidebarMenuId, id_role: RoleId }
        );
    }
}
