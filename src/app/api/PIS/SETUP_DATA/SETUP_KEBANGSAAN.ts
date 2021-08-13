import { environment } from "src/environments/environment";

// ** Setup KEBANGSAAN
export const GET_ALL_SETUP_KEBANGSAAN = `${environment.webApiPis}` + `Kebangsaan/KebangsaanGetAll`;
export const GET_BY_ID_SETUP_KEBANGSAAN = `${environment.webApiPis}` + `Kebangsaan/KebangsaanGetById`;
export const POST_SAVE_SETUP_KEBANGSAAN = `${environment.webApiPis}` + `Kebangsaan/KebangsaanInsert`;
export const DELETE_SETUP_KEBANGSAAN = `${environment.webApiPis}` + `Kebangsaan/KebangsaanDelete/`;
export const PUT_UPDATE_SETUP_KEBANGSAAN = `${environment.webApiPis}` + `Kebangsaan/KebangsaanUpdate`;