import { environment } from "src/environments/environment";

export const GET_LOOKUP_BARANG_BY_ID_STOCKROOM = `${environment.webApiMM}` +'TransRepackingNoEd/GetLookupBarangByIdStockroom';
export const GET_LOOKUP_BARANG_BY_ID_ITEM = `${environment.webApiMM}` +'TransRepackingNoEd/GetDetailUraiByHeaderIdAndParams';
export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransRepackingNoEd/GetAllByParams';
export const GET_BY_ID = `${environment.webApiMM}` +'TransRepackingNoEd/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransRepackingNoEd/GetDetailByHeaderId';
export const INSERT = `${environment.webApiMM}` +'TransRepackingNoEd/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransRepackingNoEd/Validasi';
export const CANCEL = `${environment.webApiMM}` +'TransRepackingNoEd/Batal';
