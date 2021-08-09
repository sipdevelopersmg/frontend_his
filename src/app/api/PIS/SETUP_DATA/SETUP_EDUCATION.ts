import { environment } from "src/environments/environment";

// ** Setup EDUCATION
export const GET_ALL_SETUP_EDUCATION = `${environment.webApiPis}/Education/GetAll`;
export const GET_BY_ID_SETUP_EDUCATION = `${environment.webApiPis}/Education/GetById`;
export const POST_SAVE_SETUP_EDUCATION = `${environment.webApiPis}/Education/Insert`;
export const DELETE_SETUP_EDUCATION = `${environment.webApiPis}/Education/Delete/`;
export const PUT_UPDATE_SETUP_EDUCATION = `${environment.webApiPis}/Education/Update`;