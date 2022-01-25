import { environment } from "src/environments/environment";

export const GET_LOOKUP_BARANG_BY_ID_STOCKROOM = `${environment.webApiMM}` +'TransPemusnahanStok/GetLookupBarangByIdStockroom';
export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransPemusnahanStok/GetAllByParams';
export const GET_BY_ID = `${environment.webApiMM}` +'TransPemusnahanStok/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransPemusnahanStok/GetAllDetailByByHeaderId';
export const INSERT = `${environment.webApiMM}` +'TransPemusnahanStok/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransPemusnahanStok/Validasi';
export const BATAL = `${environment.webApiMM}` +'TransPemusnahanStok/Batal';
