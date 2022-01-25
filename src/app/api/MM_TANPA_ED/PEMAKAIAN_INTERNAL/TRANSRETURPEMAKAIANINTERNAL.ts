import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiMM}` +'TransReturPemakaianInternal/GetAllHeader';
export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransReturPemakaianInternal/GetAllByParams';
export const GET_DETAIL_BY_PARAMS = `${environment.webApiMM}` +'TransReturPemakaianInternal/GetDetailByParamsAndId';
export const GET_BY_ID = `${environment.webApiMM}` +'TransReturPemakaianInternal/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransReturPemakaianInternal/GetDetailItemByHeaderId';
export const INSERT = `${environment.webApiMM}` +'TransReturPemakaianInternal/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransReturPemakaianInternal/Validasi';
export const CANCEL = `${environment.webApiMM}` +'TransReturPemakaianInternal/Batal';
export const CLOSE = `${environment.webApiMM}` +'TransReturPemakaianInternal/UpdateToClosed';
