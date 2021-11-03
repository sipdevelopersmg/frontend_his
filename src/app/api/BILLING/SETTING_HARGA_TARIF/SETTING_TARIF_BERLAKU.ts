import { environment } from "src/environments/environment";

export const GET_ALL_TARIF_BERLAKU = `${environment.webApiBilling}` + `tarif/TarifBerlaku/GetAll`;
export const GET_ALL_TARIF_BERLAKU_BY_KELAS_PERAWATAN = `${environment.webApiBilling}` + `tarif/TarifBerlaku/GetByIdKelasPerawatan/`;
export const GET_TARIF_BERLAKU_BY_ID = `${environment.webApiBilling}` + `tarif/TarifBerlaku/GetById/`;
export const POST_SAVE_TARIF_BERLAKU = `${environment.webApiBilling}` + `tarif/TarifBerlaku/Insert`;
export const POST_SAVE_TARIF_BERLAKU_LIST_OF_OBJECT = `${environment.webApiBilling}` + `tarif/TarifBerlaku/InsertListOfObjects`;
export const POST_SAVE_KESELURUHAN_TARIF_BERLAKU = `${environment.webApiBilling}` + `tarif/TarifBerlaku/InsertTarifByPercentAndKelas`;
export const PUT_UPDATE_TARIF_BERLAKU = `${environment.webApiBilling}` + `tarif/TarifBerlaku/Update`;
export const PUT_UPDATE_STATUS_TARIF_BERLAKU = `${environment.webApiBilling}` + `tarif/TarifBerlaku/UpdateStatusActive`;
export const PUT_UPDATE_KESELURUHAN_TARIF_BERLAKU = `${environment.webApiBilling}` + `tarif/TarifBerlaku/UpdateTarifByPercentAndKelas`;
export const GET_ALL_TARIF_BERLAKU_BY_DYNAMIC_FILTER_FOR_TIKET = `${environment.webApiBilling}` + `tarif/TarifBerlaku/GetAllByDynamicForTiket/`;