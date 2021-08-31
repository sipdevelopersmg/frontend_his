import { environment } from "src/environments/environment";

export const GET_ALL_PASIEN_IRJA = `${environment.webApiPis}` + "Person/PersonPasienGetAll";
export const PUT_UPDATE_STATUS_ACTIVE_PERSON = `${environment.webApiPis}` + "Person/UpdatePersonStatusActive";
export const POST_GET_PASIEN_BY_DYNAMIC_FILTER = `${environment.webApiPis}` + "Person/PersonPasienGetAllByDynamicFilter";
