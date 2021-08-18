import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiMM}` +'SetupCoa/GetAll';
export const GET_BY_ID = `${environment.webApiMM}` +'SetupCoa/GetAkunSetupCoaById';
export const INSERT = `${environment.webApiMM}` +'SetupCoa/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupCoa/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupCoa/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupCoa/UpdateToDeActive';