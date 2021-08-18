import { environment } from "src/environments/environment";

// ** Setup Dokter
export const GET_PERSON_BY_NO_IDENTITAS = `${environment.webApiPis}` + "Person/CheckPersonByNoIdentitas/";
export const POST_SAVE_SETUP_DOKTER = `${environment.webApiPis}` + `Person/PendaftaranBaruDokterInsert`;
