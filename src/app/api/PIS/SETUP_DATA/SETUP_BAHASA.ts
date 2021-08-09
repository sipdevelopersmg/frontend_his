import { environment } from "src/environments/environment";

// ** Setup Bahasa
export const GET_ALL_SETUP_BAHASA = `${environment.webApiPis}` + 'Bahasa/GetAll';
export const GET_SETUP_BAHASA_BY_ID = `${environment.webApiPis}` + 'Bahasa/GetById';
export const POST_SAVE_SETUP_BAHASA = `${environment.webApiPis}` + 'Bahasa/Insert';
export const PUT_UPDATE_SETUP_BAHASA = `${environment.webApiPis}` + 'Bahasa/Update';
export const DELETE_SETUP_BAHASA = `${environment.webApiPis}` + 'Bahasa/Delete/';
