import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiPis}` + 'VitalSign/GetAllByIdRegister/';
export const GET_BY_ID = `${environment.webApiPis}` + 'VitalSign/GetByIdVitalSign/';
export const POST_SAVE = `${environment.webApiPis}` + 'VitalSign/Insert';
export const PUT_UPDATE = `${environment.webApiPis}` + 'VitalSign/Update';