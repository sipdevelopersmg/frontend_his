import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import * as API_CONFIG from '../../../../api/index';

@Injectable({
    providedIn: 'root'
})
export class SetupRoleMenuService {

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService
    ) { }

    // ** ============== Main Menu Services ===============
    onGetAllMainMenuByRoleId(RoleId: number): Observable<any> {
        return this.httpOperationService.defaultGetRequest(API_CONFIG.API.GET_MAIN_MENU_FOR_MAPPING + RoleId);
    }

    onGetAllMainMenuNotInRoleByRoleId(RoleId: number): Observable<any> {
        return this.httpOperationService.defaultGetRequest(API_CONFIG.API.GET_MAIN_MENU_NOT_IN_ROLE + RoleId);
    }

    onInsertMainMenuToRole(RoleId: number, MenuId: number): Observable<any> {
        return this.httpOperationService.defaultPostRequest(
            API_CONFIG.API.POST_MAIN_MENU_TO_ROLE, { "id_role": RoleId, "id_menu": MenuId }
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onRemoveMainMenuFromRole(RoleId: number, MenuId: number): Observable<any> {
        return this.httpOperationService.defaultPutRequest(
            API_CONFIG.API.PUT_DELETE_MAIN_MENU_FROM_ROLE, { "id_role": RoleId, "id_menu": MenuId }
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    // ** ============== Sidebar Menu Services ==============
    onGetSidebarMenuByMenuIdAndRoleId(MenuId: number, RoleId: number): Observable<any> {
        return this.httpOperationService.defaultPostRequestWithoutLoading(
            API_CONFIG.API.POST_SIDEBAR_MENU_FOR_MAPPING,
            { id_menu: MenuId, id_role: RoleId }
        );
    }

    onInsertSidebarMenuToRole(RoleId: number, SidebarMenuId: number): Observable<any> {
        return this.httpOperationService.defaultPostRequest(
            API_CONFIG.API.POST_SIDEBAR_MENU_TO_ROLE, { "id_role": RoleId, "id_menu_sidebar": SidebarMenuId }
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onRemoveSidebarMenuFromRole(RoleId: number, SidebarMenuId: number): Observable<any> {
        return this.httpOperationService.defaultPutRequest(
            API_CONFIG.API.PUT_DELETE_SIDEBAR_MENU_FROM_ROLE, { "id_role": RoleId, "id_menu_sidebar": SidebarMenuId }
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    // ** ============== Field Grid Services ==============
    onGetFieldGridBySidebarMenuIdAndRoleId(SidebarMenuId: number, RoleId: number): Observable<any> {
        return this.httpOperationService.defaultPostRequestWithoutLoading(
            API_CONFIG.API.POST_FIELD_GRID_MENU_FOR_MAPPING,
            { id_menu_sidebar: SidebarMenuId, id_role: RoleId }
        );
    }

    onInsertFieldGridToRole(RoleId: number, SidebarMenuId: number, FieldGridId: number): Observable<any> {
        return this.httpOperationService.defaultPostRequest(
            API_CONFIG.API.POST_FIELD_GRID_TO_ROLE,
            {
                "id_role": RoleId,
                "id_menu_sidebar": SidebarMenuId,
                "id_field_grid": FieldGridId
            }
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onRemoveFieldGridFromRole(RoleId: number, SidebarMenuId: number, FieldGridId: number): Observable<any> {
        return this.httpOperationService.defaultPutRequest(
            API_CONFIG.API.PUT_DELETE_FIELD_GRID_FROM_ROLE,
            {
                "id_role": RoleId,
                "id_menu_sidebar": SidebarMenuId,
                "id_field_grid": FieldGridId
            }
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    // ** ============== Button Services ==============
    onGetButtonSidebarMenuIdAndRoleId(SidebarMenuId: number, RoleId: number): Observable<any> {
        return this.httpOperationService.defaultPostRequestWithoutLoading(
            API_CONFIG.API.POST_BUTTON_MENU_FOR_MAPPING,
            { "id_menu_sidebar": SidebarMenuId, "id_role": RoleId }
        );
    }

    onInsertButtonToRole(RoleId: number, SidebarMenuId: number, ButtonId: number): Observable<any> {
        return this.httpOperationService.defaultPostRequest(
            API_CONFIG.API.POST_BUTTON_TO_ROLE,
            {
                "id_role": RoleId,
                "id_menu_sidebar": SidebarMenuId,
                "id_button": ButtonId
            }
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    onRemoveButtonFromRole(RoleId: number, SidebarMenuId: number, ButtonId: number): Observable<any> {
        return this.httpOperationService.defaultPutRequest(
            API_CONFIG.API.PUT_DELETE_BUTTON_FROM_ROLE,
            {
                "id_role": RoleId,
                "id_menu_sidebar": SidebarMenuId,
                "id_button": ButtonId
            }
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }
}
