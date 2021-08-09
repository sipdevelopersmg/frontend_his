import { environment } from "src/environments/environment";

// ** SETUP USER
export const POST_INSERT_USER = `${environment.webApiPis}` + 'User/InsertUser';
export const GET_ALL_USER_ACTIVE = `${environment.webApiPis}` + 'User/GetUserActiveAll';

// ** SETUP ROLE
export const GET_ALL_ROLE = `${environment.webApiPis}` + 'Role/GetRoleAll';
export const GET_ALL_ROLE_ACTIVE = `${environment.webApiPis}` + 'Role/GetRoleActiveAll';

// ** SETUP ROLE MENU
export const GET_MAIN_MENU_FOR_MAPPING = `${environment.webApiPis}` + 'Menu/GetMainMenuForMapping/';
export const GET_MAIN_MENU_NOT_IN_ROLE = `${environment.webApiPis}` + 'Menu/GetMainMenuForMappingNotInRole/';
export const PUT_DELETE_MAIN_MENU_FROM_ROLE = `${environment.webApiPis}` + 'Menu/DeleteMenuFromRole';
export const POST_MAIN_MENU_TO_ROLE = `${environment.webApiPis}` + 'Menu/InsertMainMenuToRole';

export const POST_SIDEBAR_MENU_FOR_MAPPING = `${environment.webApiPis}` + 'Menu/GetSidebarMenuForMapping';
export const PUT_DELETE_SIDEBAR_MENU_FROM_ROLE = `${environment.webApiPis}` + 'Menu/DeleteSideBarMenuFromRole';
export const POST_SIDEBAR_MENU_TO_ROLE = `${environment.webApiPis}` + 'Menu/InsertSideBarMenuToRole';

export const POST_FIELD_GRID_MENU_FOR_MAPPING = `${environment.webApiPis}` + 'FieldGrid/GetFieldGridForMapping';
export const PUT_DELETE_FIELD_GRID_FROM_ROLE = `${environment.webApiPis}` + 'FieldGrid/DeleteFieldGridFromRole';
export const POST_FIELD_GRID_TO_ROLE = `${environment.webApiPis}` + 'FieldGrid/InsertFieldGridToRole';

export const POST_BUTTON_MENU_FOR_MAPPING = `${environment.webApiPis}` + 'Button/GetButtonForMapping';
export const PUT_DELETE_BUTTON_FROM_ROLE = `${environment.webApiPis}` + 'Button/DeleteButtonFromRole';
export const POST_BUTTON_TO_ROLE = `${environment.webApiPis}` + 'Button/InsertButtonToRole';
