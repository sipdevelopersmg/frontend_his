import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiPis}` + 'OrderManagement/GetListOrderHeaderForHasilRad';
export const GET_DETAIL_BY_ID = `${environment.webApiPis}` + 'OrderManagement/GetListOrderDetailForHasilRad/';
export const POST_SAVE = `${environment.webApiPis}` + 'OrderManagement/InsertHasilRAD';
export const GET_ALL_RIWAYAT = `${environment.webApiPis}` + 'OrderManagement/GetRiwayatHasilRAD_ByIdOrderPenunjangDetail/';
export const POST_UPDATE = `${environment.webApiPis}` + 'OrderManagement/UpdateHasilRAD';
export const POST_PUBLISH = `${environment.webApiPis}` + 'OrderManagement/PublishHasilRAD';