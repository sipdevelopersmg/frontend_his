import { environment } from "src/environments/environment";

// ** Setup Grup Penunjang
export const GET_ALL_SETUP_GRUP_PENUNJANG = `${environment.webApiPis}` + `OmSetupGrupPenunjang/GetAll`;
export const GET_BY_ID_SETUP_GRUP_PENUNJANG = `${environment.webApiPis}` + `OmSetupGrupPenunjang/GetById/`;
export const POST_SAVE_SETUP_GRUP_PENUNJANG = `${environment.webApiPis}` + `OmSetupGrupPenunjang/Insert`;
export const DELETE_SETUP_GRUP_PENUNJANG = `${environment.webApiPis}` + `OmSetupGrupPenunjang/Delete/`;
export const PUT_UPDATE_SETUP_GRUP_PENUNJANG = `${environment.webApiPis}` + `OmSetupGrupPenunjang/Update`;