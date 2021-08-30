import { environment } from "src/environments/environment";

// ** Setup Spesialisasi Dokter
export const GET_ALL_SETUP_SPESIALISASI_DOKTER = `${environment.webApiPis}` + `SpesialisasiDokter/GetAll`;
export const GET_BY_ID_SETUP_SPESIALISASI_DOKTER = `${environment.webApiPis}` + `SpesialisasiDokter/GetById/`;
export const POST_SAVE_SETUP_SPESIALISASI_DOKTER = `${environment.webApiPis}` + `SpesialisasiDokter/Insert`;
export const DELETE_SETUP_SPESIALISASI_DOKTER = `${environment.webApiPis}` + `SpesialisasiDokter/Delete/`;
export const PUT_UPDATE_SETUP_SPESIALISASI_DOKTER = `${environment.webApiPis}` + `SpesialisasiDokter/Update`;