import { environment } from "src/environments/environment";

export const GET_ALL_BY_DYNAMIC_FILTER = `${environment.webApiPis}` + 'OmSetupPetugas/GetAllByDynamicFilter';
export const GET_ALL = `${environment.webApiPis}` + 'OmSetupPetugas/GetAll';
export const GET_BY_ID = `${environment.webApiPis}` + 'OmSetupPetugas/GetById/';
export const POST_SAVE = `${environment.webApiPis}` + 'OmSetupPetugas/Insert';
export const DELETE = `${environment.webApiPis}` + 'OmSetupPetugas/Delete/';
export const UPDATE = `${environment.webApiPis}` + 'OmSetupPetugas/Update';