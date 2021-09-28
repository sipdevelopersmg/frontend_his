import { environment } from "src/environments/environment";

export const GET_ALL_DATA_PENUNJANG = `${environment.webApiPis}` + 'OmMappingTarifPenunjang/GetAllDataPenunjangLAB';
export const POST_SAVE_ORDER_LAB = `${environment.webApiPis}` + 'OrderManagement/InsertOrderLAB';
export const GET_RIWAYAT_ORDER_LAB = `${environment.webApiPis}` + 'OrderManagement/GetHeaderRiwayatOrder_LAB_IRJA_ByIdRegister/';
export const GET_DETAIL_RIWAYAT_ORDER_LAB = `${environment.webApiPis}` + 'OrderManagement/GetDetailRiwayatOrder_LAB_IRJA_ByIdOrderPenunjang/';