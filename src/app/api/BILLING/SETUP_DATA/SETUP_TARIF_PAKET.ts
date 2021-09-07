import { environment } from "src/environments/environment";

export const GET_ALL_TARIF_PAKET_PARENT = `${environment.webApiBilling}` + `tarif/SetupTarif/GetAllForPaketTarifParent`;
export const GET_ALL_TARIF_PAKET_CHILD_BY_PARENT_ID = `${environment.webApiBilling}` + `tarif/SetupTarifPaket/GetAllChildByParent/`;
export const GET_ALL_TARIF_PAKET_CHILD_FOR_LOOKUP = `${environment.webApiBilling}` + `tarif/SetupTarif/GetAllForPaketTarifChildLookup`;
export const POST_SAVE_TARIF_PAKET = `${environment.webApiBilling}` + `tarif/SetupTarifPaket/InsertListOfObjects`;
export const POST_DELETE_TARIF_PAKET = `${environment.webApiBilling}` + `tarif/SetupTarifPaket/Delete`;
export const PUT_UPDATE_STATUS_TARIF_PAKET = `${environment.webApiBilling}` + `tarif/SetupTarifPaket/UpdateStatusActive`;
