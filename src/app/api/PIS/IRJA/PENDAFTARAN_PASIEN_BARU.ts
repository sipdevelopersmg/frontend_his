import { environment } from "src/environments/environment";

export const GET_PERSON_BY_NO_IDENTITAS = `${environment.webApiPis}` + "Person/CheckPersonByNoIdentitas/";
export const POST_PENDAFTARAN_PASIEN_BARU = `${environment.webApiPis}` + "Person/PendaftaranBaruPasienInsert";
