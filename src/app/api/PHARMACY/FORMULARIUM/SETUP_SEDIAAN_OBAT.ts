import { environment } from "src/environments/environment";

export const GET_ALL_BY_PARAMS = `${environment.webApiPHARMACY}` +'SetupSediaanObat/GetAllByParams';
export const GET_ALL = `${environment.webApiPHARMACY}` +'SetupSediaanObat/GetAll';
export const INSERT = `${environment.webApiPHARMACY}` +'SetupSediaanObat/Insert';
export const UPDATE = `${environment.webApiPHARMACY}` +'SetupSediaanObat/Update';
export const DELETE = `${environment.webApiPHARMACY}` +'SetupSediaanObat/Delete';
export const UPDATETOACTIVE = `${environment.webApiPHARMACY}` +'SetupSediaanObat/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiPHARMACY}` +'SetupSediaanObat/UpdateToDeActive';