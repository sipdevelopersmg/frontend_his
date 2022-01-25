import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiMM}` +'SetupStockroom/GetAll';
export const GET_BY_ID = `${environment.webApiMM}` +'SetupItem/GetMMSetupStockroomById';
export const INSERT = `${environment.webApiMM}` +'SetupStockroom/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupStockroom/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupStockroom/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupStockroom/UpdateToDeActive';