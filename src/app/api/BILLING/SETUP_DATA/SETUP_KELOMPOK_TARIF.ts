import { environment } from "src/environments/environment";

export const GET_ALL_KELOMPOK_TARIF = `${environment.webApiBilling}` + `tarif/SetupKelompokTarif/GetAll`;
export const GET_KELOMPOK_TARIF_BY_ID = `${environment.webApiBilling}` + `tarif/SetupKelompokTarif/GetById/`;
export const POST_SAVE_KELOMPOK_TARIF = `${environment.webApiBilling}` + `tarif/SetupKelompokTarif/Insert`;
export const PUT_UPDATE_KELOMPOK_TARIF = `${environment.webApiBilling}` + `tarif/SetupKelompokTarif/Update`;
export const DELETE_KELOMPOK_TARIF_BY_ID = `${environment.webApiBilling}` + `tarif/SetupKelompokTarif/Delete/`;