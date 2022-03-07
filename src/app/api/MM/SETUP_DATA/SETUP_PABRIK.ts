import { environment } from "src/environments/environment";

export const GET_ALL_BY_PARMS = `${environment.webApiMM}` +'SetupPabrik/GetAllByParams';
export const GET_ALL = `${environment.webApiMM}` +'SetupPabrik/GetAll';
export const GET_BY_ID = `${environment.webApiMM}` +'SetupPabrik/GetMMSetupPabrikById';
export const INSERT = `${environment.webApiMM}` +'SetupPabrik/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupPabrik/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupPabrik/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupPabrik/UpdateToDeActive';