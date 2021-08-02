import { environment } from "src/environments/environment";

export const POST_AUTHENTICATION = `${environment.webApiPis}` + 'Auth/Login';
export const POST_LOGOUT = `${environment.webApiPis}` + 'Auth/SetLogoutTime/';