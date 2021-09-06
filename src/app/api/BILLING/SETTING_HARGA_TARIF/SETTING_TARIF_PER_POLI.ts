import { environment } from "src/environments/environment";

export const GET_ALL_TARIF_BERLAKU_PER_POLI = `${environment.webApiBilling}` + `tarif/TarifBerlakuPoli/GetAll`;
export const GET_TARIF_BERLAKU_PER_POLI_BY_ID = `${environment.webApiBilling}` + `tarif/TarifBerlakuPoli/GetById/`;
export const GET_TARIF_BERLAKU_PER_POLI_BY_POLI_ID = `${environment.webApiBilling}` + `tarif/TarifBerlakuPoli/GetByIdPoli/`;
export const GET_TARIF_BERLAKU_PER_POLI_BY_DYNAMIC_FILTER_AND_ID_POLI = `${environment.webApiBilling}` + `tarif/TarifBerlakuPoli/GetAllByDynamic_NotInTarifBerlakuPoli_ByPoli`;
export const POST_SAVE_TARIF_BERLAKU_PER_POLI = `${environment.webApiBilling}` + `tarif/TarifBerlakuPoli/Insert`;
export const POST_SAVE_TARIF_BERLAKU_PER_POLI_LIST = `${environment.webApiBilling}` + `tarif/TarifBerlakuPoli/InsertListOfObjects`;
export const PUT_UPDATE_STATUS_TARIF_BERLAKU_PER_POLI = `${environment.webApiBilling}` + `tarif/TarifBerlakuPoli/UpdateStatusActive`;
