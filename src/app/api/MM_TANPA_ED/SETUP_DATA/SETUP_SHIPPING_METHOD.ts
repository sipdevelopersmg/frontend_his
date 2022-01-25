import { environment } from "src/environments/environment";

export const GET_ALL_BY_PARMS = `${environment.webApiMM}` +'SetupShippingMethod/GetAllByParams';
export const GET_ALL = `${environment.webApiMM}` +'SetupShippingMethod/GetAll';
export const GET_BY_ID = `${environment.webApiMM}` +'SetupShippingMethod/GetAkunSetupCoaById';
export const INSERT = `${environment.webApiMM}` +'SetupShippingMethod/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupShippingMethod/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupShippingMethod/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupShippingMethod/UpdateToDeActive';