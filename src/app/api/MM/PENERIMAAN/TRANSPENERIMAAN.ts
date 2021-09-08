import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiMM}` +'TransPenerimaan/GetAllHeader';
export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransPenerimaan/GetAllByParams';
export const GET_DETAIL_BY_PARAMS = `${environment.webApiMM}` +'TransPenerimaan/GetDetailByParamsAndId';
export const GET_BY_ID = `${environment.webApiMM}` +'TransPenerimaan/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransPenerimaan/GetDetailItemByPenerimaanId';
export const INSERT = `${environment.webApiMM}` +'TransPenerimaan/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransPenerimaan/UpdateToValidated';
export const CANCEL = `${environment.webApiMM}` +'TransPenerimaan/UpdateToCanceled';
export const CLOSE = `${environment.webApiMM}` +'TransPenerimaan/UpdateToClosed';
