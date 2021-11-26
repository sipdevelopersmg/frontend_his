import { environment } from "src/environments/environment";

export const GET_LOOKUP_BARANG_ED_BY_ID_STOCKROOM = `${environment.webApiMM}` +'TransReturPembelian/GetLookupBarangEDByIdStockroom';
export const GET_ALL = `${environment.webApiMM}` +'TransReturPembelian/GetAllHeader';
export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransReturPembelian/GetAllByParams';
export const GET_DETAIL_BY_PARAMS = `${environment.webApiMM}` +'TransReturPembelian/GetDetailByParamsAndId';
export const GET_BY_ID = `${environment.webApiMM}` +'TransReturPembelian/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransReturPembelian/GetDetailByReturPembelianId';
export const INSERT = `${environment.webApiMM}` +'TransReturPembelian/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransReturPembelian/UpdateToValidated';
export const CANCEL = `${environment.webApiMM}` +'TransReturPembelian/UpdateToCanceled';
