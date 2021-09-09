import { environment } from "src/environments/environment";

export const GET_ALL_KELAS_PERAWATAN = `${environment.webApiBilling}` + `tarif/KelasPerawatan/GetAll`;
export const GET_KELAS_PERAWATAN_BY_ID = `${environment.webApiBilling}` + `tarif/KelasPerawatan/GetById/`;
export const POST_SAVE_KELAS_PERAWATAN = `${environment.webApiBilling}` + `tarif/KelasPerawatan/Insert`;
export const PUT_UPDATE_KELAS_PERAWATAN = `${environment.webApiBilling}` + `tarif/KelasPerawatan/Update`;
export const PUT_UPDATE_STATUS_KELAS_PERAWATAN = `${environment.webApiBilling}` + `tarif/KelasPerawatan/UpdateStatusActive`;
export const DELETE_KELAS_PERAWATAN_BY_ID = `${environment.webApiBilling}` + `tarif/KelasPerawatan/Delete/`;

// ** Kelas Perawatan For Admisi IRJA
export const GET_ALL_KELAS_PERAWATAN_FOR_LOOKUP_ADMISI_IRJA = `${environment.webApiAdmisi}` + `Admisi/KelasPerawatanGetAllForLookupAdmisi_IRJA`;