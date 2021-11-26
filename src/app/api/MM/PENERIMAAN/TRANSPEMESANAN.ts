import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiMM}` +'TransPemesanan/GetAllHeader';
export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransPemesanan/GetAllByParams';
export const GET_DETAIL_BY_PARAMS = `${environment.webApiMM}` +'TransPemesanan/GetDetailByParamsAndId';
export const GET_BY_ID = `${environment.webApiMM}` +'TransPemesanan/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransPemesanan/GetDetailByPemesananId';
export const INSERT = `${environment.webApiMM}` +'TransPemesanan/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransPemesanan/UpdateToValidated';
export const CANCEL = `${environment.webApiMM}` +'TransPemesanan/UpdateToCanceled';
export const CLOSE = `${environment.webApiMM}` +'TransPemesanan/UpdateToClosed';
export const GET_LOOKUP_BARANG_PO = `${environment.webApiMM}` +'TransPemesanan/GetLookupBarangBelumPoByIdSupplier';