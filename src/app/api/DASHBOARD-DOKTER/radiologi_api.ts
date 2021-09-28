import { environment } from "src/environments/environment";

export const GET_ALL_DATA_PENUNJANG = `${environment.webApiPis}` + 'OmMappingTarifPenunjang/GetAllDataPenunjangRAD';
export const POST_GET_TARIF_RAD = `${environment.webApiPis}` + 'OmMappingTarifPenunjang/GetTarifRadByIdAndFlags';
export const POST_SAVE_ORDER_RAD = `${environment.webApiPis}` + 'OrderManagement/InsertOrderRAD';
export const GET_RIWAYAT_ORDER_RAD = `${environment.webApiPis}` + 'OrderManagement/GetHeaderRiwayatOrder_RAD_IRJA_ByIdRegister/';
export const GET_DETAIL_RIWAYAT_ORDER_RAD = `${environment.webApiPis}` + 'OrderManagement/GetDetailRiwayatOrder_RAD_IRJA_ByIdOrderPenunjang/';