import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiMM}` +'SetupMekanismeRetur/GetAll';
export const GET_BY_ID = `${environment.webApiMM}` +'SetupMekanismeRetur/GetMMSetupPabrikById';
export const INSERT = `${environment.webApiMM}` +'SetupMekanismeRetur/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupMekanismeRetur/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupMekanismeRetur/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupMekanismeRetur/UpdateToDeActive';