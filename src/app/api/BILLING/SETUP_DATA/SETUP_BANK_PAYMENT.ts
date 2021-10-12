import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiBilling}` + `tarif/SetBankPayment/GetAll`;
export const GET_BY_ID = `${environment.webApiBilling}` + `tarif/SetBankPayment/GetById/`;
export const POST_SAVE = `${environment.webApiBilling}` + `tarif/SetBankPayment/Insert`;
export const PUT_UPDATE = `${environment.webApiBilling}` + `tarif/SetBankPayment/Update`;
export const DELETE = `${environment.webApiBilling}` + `tarif/SetBankPayment/Delete/`;