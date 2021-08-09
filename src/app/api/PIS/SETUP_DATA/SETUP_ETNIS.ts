import { environment } from "src/environments/environment";

// ** Setup Etnis
export const GET_ALL_SETUP_ETNIS = `${environment.webApiPis}` + 'Etnis/GetAll';
export const GET_BY_ID_SETUP_ETNIS = `${environment.webApiPis}` + 'Etnis/GetById';
export const POST_SAVE_SETUP_ETNIS = `${environment.webApiPis}` + 'Etnis/Insert';
export const DELETE_SETUP_ETNIS = `${environment.webApiPis}` + 'Etnis/Delete/';
export const PUT_UPDATE_SETUP_ETNIS = `${environment.webApiPis}` + `Etnis/Update`;