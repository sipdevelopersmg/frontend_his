import { environment } from "src/environments/environment";

// ** Setup ICD Diagnosa
export const GET_ALL_DIAGNOSA_AWAL = `${environment.webApiAdmisi}` + 'Diagnosa/GetAll';
export const GET_DIAGNOSA_AWAL_BY_ID = `${environment.webApiAdmisi}` + 'Diagnosa/GetById/';
export const POST_SAVE_DIAGNOSA_AWAL = `${environment.webApiAdmisi}` + 'Diagnosa/Insert';
export const PUT_UPDATE_DIAGNOSA_AWAL = `${environment.webApiAdmisi}` + 'Diagnosa/Update';
export const PUT_UPDATE_STATUS_DIAGNOSA_AWAL = `${environment.webApiAdmisi}` + 'Diagnosa/UpdateStatusActive';

// ** Get All ICD For Lookup Admisi
export const GET_ALL_DIAGNOSA_FOR_LOOKUP_ADMISI = `${environment.webApiAdmisi}` + `Admisi/DiagnosaGetAllForLookupAdmisi`;