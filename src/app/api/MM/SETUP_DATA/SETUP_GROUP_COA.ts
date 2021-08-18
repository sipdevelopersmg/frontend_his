import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiMM}` +'SetupGrupCoa/GetAll';
export const GET_BY_ID = `${environment.webApiMM}` +'SetupGrupCoa/GetAkunSetupGrupCoaById';
export const INSERT = `${environment.webApiMM}` +'SetupGrupCoa/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupGrupCoa/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupGrupCoa/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupGrupCoa/UpdateToDeActive';