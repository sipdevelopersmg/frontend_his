import { environment } from "src/environments/environment";
// ** SETUP PABRIK
export const GET_ALL = `${environment.webApiMM}` +'SetupSatuan/GetAll';
export const INSERT = `${environment.webApiMM}` +'SetupSatuan/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupSatuan/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupSatuan/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupSatuan/UpdateToDeActive';