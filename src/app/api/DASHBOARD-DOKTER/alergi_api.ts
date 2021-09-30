import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiPis}` + 'Alergi/GetAllByIdRegister/';
export const GET_BY_ID = `${environment.webApiPis}` + 'Alergi/GetByIdAlergi/';
export const POST_SAVE = `${environment.webApiPis}` + 'Alergi/Insert';
export const PUT_UPDATE = `${environment.webApiPis}` + 'Alergi/Update';