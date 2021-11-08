import { environment } from "src/environments/environment";

export const GET_ALL_POLI = `${environment.webApiBilling}` + `tarif/Poli/GetAllRecursive`;
export const GET_POLI_BY_ID = `${environment.webApiBilling}` + `tarif/Poli/GetById/`;
export const POST_SAVE_POLI = `${environment.webApiBilling}` + `tarif/Poli/Insert`;
export const PUT_UPDATE_POLI = `${environment.webApiBilling}` + `tarif/Poli/Update`;
export const DELETE_POLI_BY_ID = `${environment.webApiBilling}` + `tarif/Poli/Delete/`;
export const PUT_UPDATE_STATUS_POLI = `${environment.webApiBilling}` + `tarif/Poli/UpdateStatusActive`;
export const GET_ALL_BY_ID_JENIS_RUANGAN = `${environment.webApiBilling}` + `tarif/Poli/GetByIdJenisRuangan/`;
export const GET_ALL_POLI_FOR_LOOKUP_ADMISI = `${environment.webApiAdmisi}` + `Admisi/PoliGetAllForLookupAdmisi/`;
export const GET_ALL_POLI_FOR_LOOKUP_RAWAT_INAP = `${environment.webApiBilling}` + `tarif/Poli/PoliLookup_IRNA`;
export const GET_ALL_POLI_FOR_LOOKUP_ADMISI_RAWAT_INAP = `${environment.webApiBilling}` + `tarif/Poli/PoliLookup_IRNA_ByJenisRuangan/`;