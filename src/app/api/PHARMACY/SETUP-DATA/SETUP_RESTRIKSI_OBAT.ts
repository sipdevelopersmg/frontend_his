import { environment } from "src/environments/environment";

export const GET_ALL_BY_PARAMS = `${environment.webApiPHARMACY}` +'SetupRestriksiObat/GetAllByParams';
export const GET_ALL = `${environment.webApiPHARMACY}` +'SetupRestriksiObat/GetAll';
export const INSERT = `${environment.webApiPHARMACY}` +'SetupRestriksiObat/Insert';
export const UPDATE = `${environment.webApiPHARMACY}` +'SetupRestriksiObat/Update';
export const DELETE = `${environment.webApiPHARMACY}` +'SetupRestriksiObat/Delete';
export const UPDATETOACTIVE = `${environment.webApiPHARMACY}` +'SetupRestriksiObat/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiPHARMACY}` +'SetupRestriksiObat/UpdateToDeActive';