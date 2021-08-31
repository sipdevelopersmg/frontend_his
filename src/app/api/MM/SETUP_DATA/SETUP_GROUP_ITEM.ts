import { environment } from "src/environments/environment";

export const GET_ALL_BY_PARMS = `${environment.webApiMM}` +'SetupGroupItem/GetAllByParams';
export const GET_ALL = `${environment.webApiMM}` +'SetupGroupItem/GetAll';
export const INSERT = `${environment.webApiMM}` +'SetupGroupItem/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupGroupItem/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupGroupItem/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupGroupItem/UpdateToDeActive';