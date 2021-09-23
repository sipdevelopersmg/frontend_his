import { environment } from "src/environments/environment";

export const GET_ALL_BY_PARAMS = `${environment.webApiPHARMACY}` +'SetupMetodeRacikan/GetAllByParams';
export const GET_ALL = `${environment.webApiPHARMACY}` +'SetupMetodeRacikan/GetAll';
export const INSERT = `${environment.webApiPHARMACY}` +'SetupMetodeRacikan/Insert';
export const UPDATE = `${environment.webApiPHARMACY}` +'SetupMetodeRacikan/Update';
export const DELETE = `${environment.webApiPHARMACY}` +'SetupMetodeRacikan/Delete';
export const UPDATETOACTIVE = `${environment.webApiPHARMACY}` +'SetupMetodeRacikan/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiPHARMACY}` +'SetupMetodeRacikan/UpdateToDeActive';