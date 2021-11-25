import { environment } from "src/environments/environment";

export const GET_ALL_BY_PARMS = `${environment.webApiMM}` +'SetupGrupItem/GetAllByParams';
export const GET_ALL = `${environment.webApiMM}` +'SetupGrupItem/GetAll';
export const INSERT = `${environment.webApiMM}` +'SetupGrupItem/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupGrupItem/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupGrupItem/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupGrupItem/UpdateToDeActive';