import { environment } from "src/environments/environment";

export const POST_AUTHENTICATION = `${environment.webApiPis}` + 'Auth/Login';
export const POST_LOGOUT = `${environment.webApiPis}` + 'Auth/SetLogoutTime/';
export const PUT_RESET_PASSWORD = `${environment.webApiPis}` + 'Auth/ResetPassword/';
export const PUT_CHANGE_PASSWORD = `${environment.webApiPis}` + 'Auth/ChangePassword';