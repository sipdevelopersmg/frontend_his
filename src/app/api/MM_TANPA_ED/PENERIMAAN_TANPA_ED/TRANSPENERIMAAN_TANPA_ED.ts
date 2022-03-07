import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiMM}` +'TransPenerimaanNoEd/GetAllHeader';
export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransPenerimaanNoEd/GetAllByParams';
export const GET_DETAIL_BY_PARAMS = `${environment.webApiMM}` +'TransPenerimaanNoEd/GetDetailByParamsAndId';
export const GET_BY_ID = `${environment.webApiMM}` +'TransPenerimaanNoEd/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransPenerimaanNoEd/GetDetailItemByPenerimaanId';
export const INSERT = `${environment.webApiMM}` +'TransPenerimaanNoEd/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransPenerimaanNoEd/UpdateToValidated';
export const CANCEL = `${environment.webApiMM}` +'TransPenerimaanNoEd/UpdateToCanceled';
export const GET_PEMESANA = `${environment.webApiMM}` +'TransPenerimaanNoEd/GetLookupPemesananByParams'; 
export const GET_DETAIL_PEMESANAN = `${environment.webApiMM}` +'TransPenerimaanNoEd/GetLookupPemesananDetailItemByPemesananId';