import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiMM}` +'SetupTemperaturItem/GetAll';
export const GET_BY_ID = `${environment.webApiMM}` +'SetupTemperaturItem/GetMMSetupTremperaturItemById';
export const INSERT = `${environment.webApiMM}` +'SetupTemperaturItem/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupTemperaturItem/Update';
export const DELETE = `${environment.webApiMM}` +'SetupTemperaturItem/Delete';

