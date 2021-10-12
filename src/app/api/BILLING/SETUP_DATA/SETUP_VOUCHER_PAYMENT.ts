import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiBilling}` + `tarif/SetVoucher/GetAll`;
export const GET_BY_ID = `${environment.webApiBilling}` + `tarif/SetVoucher/GetById/`;
export const POST_SAVE = `${environment.webApiBilling}` + `tarif/SetVoucher/Insert`;
export const PUT_UPDATE = `${environment.webApiBilling}` + `tarif/SetVoucher/Update`;
export const DELETE = `${environment.webApiBilling}` + `tarif/SetVoucher/Delete/`;
export const CANCEL = `${environment.webApiBilling}` + `tarif/SetVoucher/Cancel`;