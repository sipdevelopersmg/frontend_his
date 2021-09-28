import { environment } from "src/environments/environment";

export const GET_LIST_ORDER_FOR_VERIFIKASI_LAB = `${environment.webApiPis}` + 'OrderManagement/GetListOrderForVerifikasi';
export const GET_DETAIL_ORDER_FOR_VERIFIKASI_LAB = `${environment.webApiPis}` + 'OrderManagement/GetHeaderDetailsForVerifikasi';
export const POST_VERIFIKASI_ORDER_LAB = `${environment.webApiPis}` + 'OrderManagement/VerifikasiOrderLAB';
export const POST_CANCEL_ORDER_LAB = `${environment.webApiPis}` + 'OrderManagement/CancelOrderAll';