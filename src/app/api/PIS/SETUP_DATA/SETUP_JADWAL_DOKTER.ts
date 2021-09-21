import { environment } from "src/environments/environment";

// ** Setup Jadwal Dokter
export const GET_ALL_SETUO_HARI = `${environment.webApiPis}` + `JadwalDokter/SetupHariGetAll`;
export const POST_GET_ALL_DOKTER_FOR_LOOKUP = `${environment.webApiPis}` + `JadwalDokter/DokterGetAllForLookup`;
export const POST_GET_ALL_JADWAL_DOKTER_BY_ID_DOKTER_AND_ID_POLI = `${environment.webApiPis}` + `JadwalDokter/GetAllByIdDokterAndIdPoli`;
export const POST_GET_ALL_DOKTER_BY_ID_POLI = `${environment.webApiPis}` + `JadwalDokter/DokterGetAllForLookupByIdPoli/`;
export const POST_SAVE_JADWAL_DOKTER = `${environment.webApiPis}` + `JadwalDokter/Insert`;
export const DELETE_JADWAL_DOKTER_BY_ID_JADWAL_DOKTER = `${environment.webApiPis}` + `JadwalDokter/Delete/`;
