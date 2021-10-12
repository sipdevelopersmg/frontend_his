import { environment } from "src/environments/environment";

export const GET_ALL_PAYMENT_METHOD = `${environment.webApiBilling}` + `tarif/SetPaymentMethod/GetAll`;
export const GET_ALL_PAYMENT_METHOD_BY_NAME = `${environment.webApiBilling}` + `tarif/SetPaymentMethod/GetPaymentMethodByName/`;
export const GET_BY_ID_PAYMENT_METHOD = `${environment.webApiBilling}` + `tarif/SetPaymentMethodDetail/GetAllByIdPaymentMethod/`;
export const GET_ALL_PAYMENT_METHOD_DETAIL = `${environment.webApiBilling}` + `tarif/SetPaymentMethodDetail/GetAll`;
export const GET_BY_ID = `${environment.webApiBilling}` + `tarif/SetPaymentMethodDetail/GetById/`;
export const POST_SAVE = `${environment.webApiBilling}` + `tarif/SetPaymentMethodDetail/Insert`;
export const PUT_UPDATE = `${environment.webApiBilling}` + `tarif/SetPaymentMethodDetail/Update`;
export const DELETE = `${environment.webApiBilling}` + `tarif/SetPaymentMethodDetail/Delete/`;