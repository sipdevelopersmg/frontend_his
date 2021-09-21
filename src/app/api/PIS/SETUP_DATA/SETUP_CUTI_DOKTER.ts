import { environment } from "src/environments/environment";

// ** Setup Cuti Dokter
export const GET_ALL_SETUP_CUTI_DOKTER = `${environment.webApiPis}` + `CutiDokter/GetAll`;
export const GET_BY_ID_SETUP_CUTI_DOKTER = `${environment.webApiPis}` + `CutiDokter/GetById/`;
export const POST_SAVE_SETUP_CUTI_DOKTER = `${environment.webApiPis}` + `CutiDokter/Insert`;
export const PUT_UPDATE_SETUP_CUTI_DOKTER = `${environment.webApiPis}` + `CutiDokter/Update`;
export const PUT_UPDATE_STATUS_SETUP_CUTI_DOKTER = `${environment.webApiPis}` + `CutiDokter/UpdateStatus`;
export const GET_ALL_BY_DYNAMIC_FILTER_SETUP_CUTI_DOKTER = `${environment.webApiPis}` + `CutiDokter/GetAllByDynamicFilter`;