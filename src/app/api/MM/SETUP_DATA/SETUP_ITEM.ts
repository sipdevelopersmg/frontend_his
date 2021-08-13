import { environment } from "src/environments/environment";

export const GET_ALL_BY_PARMS = `${environment.webApiMM}` +'SetupItem/GetAllByParams';   
export const GET_ALL = `${environment.webApiMM}` +'SetupItem/GetAll';
export const GET_BY_ID = `${environment.webApiMM}` +'SetupItem/GetMMSetupItemById';
export const INSERT = `${environment.webApiMM}` +'SetupItem/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupItem/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupItem/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupItem/UpdateToDeActive';