import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiBilling}` + `tarif/SetEdcPayment/GetAll`;
export const GET_BY_ID = `${environment.webApiBilling}` + `tarif/SetEdcPayment/GetById/`;
export const POST_SAVE = `${environment.webApiBilling}` + `tarif/SetEdcPayment/Insert`;
export const PUT_UPDATE = `${environment.webApiBilling}` + `tarif/SetEdcPayment/Update`;
export const DELETE = `${environment.webApiBilling}` + `tarif/SetEdcPayment/Delete/`;