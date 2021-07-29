import { environment } from "src/environments/environment";

// ** SETUP ROLE
export const GET_ALL_ROLE = `${environment.webApiPis}` + 'Role/GetRoleAll';

// ** SETUP ROLE MENU
export const GET_MAIN_MENU_FOR_MAPPING = `${environment.webApiPis}` + 'User/GetMainMenuForMapping/';
export const POST_SIDEBAR_MENU_FOR_MAPPING = `${environment.webApiPis}` + 'User/GetSidebarMenuForMapping';
export const POST_FIELD_GRID_MENU_FOR_MAPPING = `${environment.webApiPis}` + 'User/GetFieldGridForMapping';
export const POST_BUTTON_MENU_FOR_MAPPING = `${environment.webApiPis}` + 'User/GetButtonForMapping';