import { environment } from "src/environments/environment";

export const GET_ALL_TARIF = `${environment.webApiBilling}` + `tarif/SetupTarif/GetAll`;
export const GET_TARIF_BY_ID = `${environment.webApiBilling}` + `tarif/SetupTarif/GetById/`;
export const POST_SAVE_TARIF = `${environment.webApiBilling}` + `tarif/SetupTarif/Insert`;
export const PUT_UPDATE_TARIF = `${environment.webApiBilling}` + `tarif/SetupTarif/Update`;
export const PUT_UPDATE_STATUS_TARIF = `${environment.webApiBilling}` + `tarif/SetupTarif/UpdateStatusActive`;
export const POST_TARIF_GET_ALL_TARIF_BERLAKU_BY_KELAS = `${environment.webApiBilling}` + `tarif/SetupTarif/GetAllByDynamic_NotInTarifBerlaku_ByKelas`;
export const GET_ALL_BY_GRUP_TARIF = `${environment.webApiBilling}` + `tarif/SetupTarif/GetAllByGroupTarif/`;
