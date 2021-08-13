import { environment } from "src/environments/environment";

// ** Setup Smf Dokter
export const GET_ALL_SETUP_SMF = `${environment.webApiPis}` + `SetupSmf/GetAll`;
export const GET_BY_ID_SETUP_SMF = `${environment.webApiPis}` + `SetupSmf/GetById`;
export const POST_SAVE_SETUP_SMF = `${environment.webApiPis}` + `SetupSmf/Insert`;
export const DELETE_SETUP_SMF = `${environment.webApiPis}` + `SetupSmf/Delete/`;
export const PUT_UPDATE_SETUP_SMF = `${environment.webApiPis}` + `SetupSmf/Update`;