import { environment } from "src/environments/environment";

export const GET_ALL_POLI = `${environment.webApiBilling}` + `tarif/Poli/GetAllRecursive`;
export const GET_POLI_BY_ID = `${environment.webApiBilling}` + `tarif/Poli/GetById/`;
export const POST_SAVE_POLI = `${environment.webApiBilling}` + `tarif/Poli/Insert`;
export const PUT_UPDATE_POLI = `${environment.webApiBilling}` + `tarif/Poli/Update`;
export const DELETE_POLI_BY_ID = `${environment.webApiBilling}` + `tarif/Poli/Delete/`;
export const PUT_UPDATE_STATUS_POLI = `${environment.webApiBilling}` + `tarif/Poli/UpdateStatusActive`;