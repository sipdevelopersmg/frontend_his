import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiMM}` +'SetupTipeItem/GetAll';
export const GET_BY_ID = `${environment.webApiMM}` +'SetupTipeItem/GetMMSetupTipeItemById';
export const INSERT = `${environment.webApiMM}` +'SetupTipeItem/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupTipeItem/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupTipeItem/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupTipeItem/UpdateToDeActive';