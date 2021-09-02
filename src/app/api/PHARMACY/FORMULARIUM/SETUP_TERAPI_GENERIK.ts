import { environment } from "src/environments/environment";

export const GET_ALL_BY_PARAMS = `${environment.webApiPHARMACY}` +'SetupTerapiGenerik/GetAllByParams';
export const GET_BY_ID_TERAPI = `${environment.webApiPHARMACY}` +'SetupTerapiGenerik/GetByIdTerapi';
export const GET_ALL = `${environment.webApiPHARMACY}` +'SetupTerapiGenerik/GetAll';
export const INSERT = `${environment.webApiPHARMACY}` +'SetupTerapiGenerik/Insert';
export const UPDATE = `${environment.webApiPHARMACY}` +'SetupTerapiGenerik/Update';
export const DELETE = `${environment.webApiPHARMACY}` +'SetupTerapiGenerik/Delete';
export const UPDATETOACTIVE = `${environment.webApiPHARMACY}` +'SetupTerapiGenerik/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiPHARMACY}` +'SetupTerapiGenerik/UpdateToDeActive';
