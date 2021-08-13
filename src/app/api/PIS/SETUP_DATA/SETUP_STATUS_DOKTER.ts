import { environment } from "src/environments/environment";

// ** Setup Status Dokter
export const GET_ALL_SETUP_STATUS_DOKTER = `${environment.webApiPis}` + `SetupStatusDokter/GetAll`;
export const GET_BY_ID_SETUP_STATUS_DOKTER = `${environment.webApiPis}` + `SetupStatusDokter/GetById`;
export const POST_SAVE_SETUP_STATUS_DOKTER = `${environment.webApiPis}` + `SetupStatusDokter/Insert`;
export const DELETE_SETUP_STATUS_DOKTER = `${environment.webApiPis}` + `SetupStatusDokter/Delete/`;
export const PUT_UPDATE_SETUP_STATUS_DOKTER = `${environment.webApiPis}` + `SetupStatusDokter/Update`;