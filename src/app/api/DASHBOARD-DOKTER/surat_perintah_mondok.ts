import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiAdmisi}` + 'TrPerintahMondok/GetAll';
export const GET_BY_ID = `${environment.webApiAdmisi}` + 'TrPerintahMondok/GetById/';
export const POST_SAVE = `${environment.webApiAdmisi}` + 'TrPerintahMondok/Insert';
export const DELETE = `${environment.webApiAdmisi}` + 'TrPerintahMondok/Delete/';
export const PUT_UPDATE = `${environment.webApiAdmisi}` + 'TrPerintahMondok/Update';