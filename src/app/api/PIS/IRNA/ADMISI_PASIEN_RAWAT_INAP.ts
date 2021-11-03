import { environment } from "src/environments/environment";

export const GET_ALL_PASIEN_FOR_LOOKUP_ANTRIAN_TPPRI = `${environment.webApiAdmisi}` + "TrAntrianTppri/PersonGetPasienForLookupAntrianTppri";
export const GET_ALL_SURAT_PERINTAH_BY_DYNAMIC_FILTER = `${environment.webApiAdmisi}` + "TrPerintahMondok/GetAllByDynamicFilter";
export const POST_SAVE_ANTRIAN_TPPRI = `${environment.webApiAdmisi}` + "TrAntrianTppri/Insert";
export const GET_ALL_ANTRIAN_TPPRI = `${environment.webApiAdmisi}` + "TrAntrianTppri/GetAllByDynamicFilter";
