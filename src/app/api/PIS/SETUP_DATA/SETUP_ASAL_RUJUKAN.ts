import { environment } from "src/environments/environment";

// ** Setup Bahasa
export const GET_ALL_ASAL_RUJUKAN = `${environment.webApiPis}` + 'Bahasa/GetAll';
export const GET_ASAL_RUJUKAN_BY_ID = `${environment.webApiPis}` + 'Bahasa/GetById';
export const POST_SAVE_ASAL_RUJUKAN = `${environment.webApiPis}` + 'Bahasa/Insert';
export const PUT_UPDATE_ASAL_RUJUKAN = `${environment.webApiPis}` + 'Bahasa/Update';
