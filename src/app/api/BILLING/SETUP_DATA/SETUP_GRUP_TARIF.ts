import { environment } from "src/environments/environment";

export const GET_ALL_GRUP_TARIF = `${environment.webApiBilling}` + `tarif/SetupGrupTarif/GetAllRecursive`;
export const GET_GRUP_TARIF_BY_ID = `${environment.webApiBilling}` + `tarif/SetupGrupTarif/GetById/`;
export const POST_SAVE_GRUP_TARIF = `${environment.webApiBilling}` + `tarif/SetupGrupTarif/Insert`;
export const PUT_UPDATE_GRUP_TARIF = `${environment.webApiBilling}` + `tarif/SetupGrupTarif/Update`;
export const DELETE_GRUP_TARIF_BY_ID = `${environment.webApiBilling}` + `tarif/SetupGrupTarif/Delete/`;