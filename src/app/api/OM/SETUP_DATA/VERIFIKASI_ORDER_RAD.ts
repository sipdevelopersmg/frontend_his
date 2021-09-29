import { environment } from "src/environments/environment";

export const GET_LIST_ORDER_FOR_VERIFIKASI_RAD = `${environment.webApiPis}` + 'OrderManagement/GetListOrderForVerifikasi';
export const GET_DETAIL_ORDER_FOR_VERIFIKASI_RAD = `${environment.webApiPis}` + 'OrderManagement/GetHeaderDetailsForVerifikasi';
export const POST_VERIFIKASI_ORDER_RAD = `${environment.webApiPis}` + 'OrderManagement/VerifikasiOrderRAD';
export const POST_CANCEL_ORDER_RAD = `${environment.webApiPis}` + 'OrderManagement/CancelOrderAll';