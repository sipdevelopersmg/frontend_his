import { environment } from "src/environments/environment";

export const GET_LOOKUP_BARANG_BY_ID_STOCKROOM = `${environment.webApiMM}` +'TransRepacking/GetLookupBarangByIdStockroom';
export const GET_LOOKUP_BARANG_BY_ID_ITEM = `${environment.webApiMM}` +'TransRepacking/GetDetailUraiByHeaderIdAndParams';
export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransRepacking/GetAllByParams';
export const GET_BY_ID = `${environment.webApiMM}` +'TransRepacking/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransRepacking/GetDetailByHeaderId';
export const INSERT = `${environment.webApiMM}` +'TransRepacking/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransRepacking/Validasi';
export const CANCEL = `${environment.webApiMM}` +'TransRepacking/Batal';
