import { environment } from "src/environments/environment";

// ** Setup Debitur
export const GET_ALL_SETUP_DEBITUR = `${environment.webApiPis}` + 'SetupDebitur/GetAll';
export const GET_SETUP_DEBITUR_BY_ID = `${environment.webApiPis}` + 'SetupDebitur/GetById/';
export const POST_SAVE_SETUP_DEBITUR = `${environment.webApiPis}` + 'SetupDebitur/Insert';
export const PUT_UPDATE_SETUP_DEBITUR = `${environment.webApiPis}` + 'SetupDebitur/Update';
export const DELETE_SETUP_DEBITUR = `${environment.webApiPis}` + 'SetupDebitur/Delete/';

// ** Get All Debitur By Person Id For Lookup Admisi
export const GET_ALL_DEBITUR_FOR_LOOKUP_ADMISI = `${environment.webApiAdmisi}` + 'Admisi/DebiturPasienGetByIdPersonForLookupAdmisi/';