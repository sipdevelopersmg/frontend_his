import { environment } from "src/environments/environment";

// ** Setup JOB_TYPE
export const GET_ALL_SETUP_JOB_TYPE = `${environment.webApiPis}` + `JobType/GetAll`;
export const GET_BY_ID_SETUP_JOB_TYPE = `${environment.webApiPis}` + `JobType/GetById`;
export const POST_SAVE_SETUP_JOB_TYPE = `${environment.webApiPis}` + `JobType/Insert`;
export const DELETE_SETUP_JOB_TYPE = `${environment.webApiPis}` + `JobType/Delete/`;
export const PUT_UPDATE_SETUP_JOB_TYPE = `${environment.webApiPis}` + `JobType/Update`;