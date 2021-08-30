import { environment } from "src/environments/environment";

// ** Setup Dokter
export const GET_PERSON_BY_NO_IDENTITAS = `${environment.webApiPis}` + "Person/CheckPersonByNoIdentitas/";
export const POST_SAVE_SETUP_DOKTER = `${environment.webApiPis}` + `Person/PendaftaranBaruDokterInsert`;
export const POST_UPLOAD_FOTO_DOKTER = `${environment.webApiPis}` + "Person/UploadFotoPerson";
export const GET_PERSON_DETAIL_BY_PERSON_ID = `${environment.webApiPis}` + "Person/GetPersonDokterDetails/";
export const POST_PENDAFTARAN_DOKTER_PERSON_SUDAH_ADA = `${environment.webApiPis}` + "Person/PendaftaranDokterPersonSudahAda";

// ** Data Dokter
export const GET_ALL_DOKTER = `${environment.webApiPis}` + "Person/PersonDokterGetAll";
export const PUT_UPDATE_STATUS_ACTIVE_DOKTER = `${environment.webApiPis}` + "Person/UpdateDokterStatusActive";

// ** Edit Dokter
export const PUT_UPDATE_DOKTER = `${environment.webApiPis}` + "Person/UpdateDokter";
