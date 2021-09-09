import { environment } from "src/environments/environment";

// ** Setup Asal Rujukan
export const GET_ALL_ASAL_RUJUKAN = `${environment.webApiAdmisi}` + 'AsalRujukan/GetAll';
export const GET_ASAL_RUJUKAN_BY_ID = `${environment.webApiAdmisi}` + 'AsalRujukan/GetById/';
export const POST_SAVE_ASAL_RUJUKAN = `${environment.webApiAdmisi}` + 'AsalRujukan/Insert';
export const PUT_UPDATE_ASAL_RUJUKAN = `${environment.webApiAdmisi}` + 'AsalRujukan/Update';

// ** Get All Asal Rujukan For Lookup Admisi
export const GET_ALL_ASAL_RUJUKAN_FOR_LOOKUP_ADMISI = `${environment.webApiAdmisi}` + `Admisi/AsalRujukanGetAllForLookupAdmisi`;