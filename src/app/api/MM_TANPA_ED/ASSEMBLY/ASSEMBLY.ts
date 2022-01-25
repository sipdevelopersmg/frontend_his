import { environment } from "src/environments/environment";

export const GET_LOOKUP_BARANG_BY_ID_STOCKROOM = `${environment.webApiMM}` +'TransAssembly/GetLookupBarangByIdStockroom';
export const GET_LOOKUP_BARANG_BY_ID_ITEM = `${environment.webApiMM}` +'TransAssembly/GetDetailAssemblyByHeaderIdAndParams';
export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransAssembly/GetAllByParams';
export const GET_BY_ID = `${environment.webApiMM}` +'TransAssembly/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransAssembly/GetDetailByHeaderId';
export const INSERT = `${environment.webApiMM}` +'TransAssembly/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransAssembly/Validasi';
export const CANCEL = `${environment.webApiMM}` +'TransAssembly/Batal';
