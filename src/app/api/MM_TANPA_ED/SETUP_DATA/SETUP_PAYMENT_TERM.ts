import { environment } from "src/environments/environment";

export const GET_ALL_BY_PARMS = `${environment.webApiMM}` +'SetupPaymentTerm/GetAllByParams';
export const GET_ALL = `${environment.webApiMM}` +'SetupPaymentTerm/GetAll';
export const GET_BY_ID = `${environment.webApiMM}` +'SetupPaymentTerm/GetAkunSetupCoaById';
export const INSERT = `${environment.webApiMM}` +'SetupPaymentTerm/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupPaymentTerm/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupPaymentTerm/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupPaymentTerm/UpdateToDeActive';