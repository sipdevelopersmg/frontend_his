import { environment } from "src/environments/environment";

export const GET_PERSON_BY_NO_IDENTITAS = `${environment.webApiPis}` + "Person/CheckPersonByNoIdentitas/";
export const POST_PENDAFTARAN_PASIEN_BARU = `${environment.webApiPis}` + "Person/PendaftaranBaruPasienInsert";
export const POST_UPLOAD_FOTO_PASIEN = `${environment.webApiPis}` + "Person/UploadFotoPerson";
export const GET_PERSON_DETAIL_BY_PERSON_ID = `${environment.webApiPis}` + "Person/GetPersonPasienDetails/";
export const POST_PENDAFTARAN_PASIEN_PERSON_SUDAH_ADA = `${environment.webApiPis}` + "Person/PendaftaranPasienPersonSudahAda";
