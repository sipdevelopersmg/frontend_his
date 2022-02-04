import { environment } from "src/environments/environment";

export const GET_LOOKUP_BARANG_BY_ID_STOCKROOM = `${environment.webApiMM}` +'TransAssemblyNoEd/GetLookupBarangByIdStockroom';
export const GET_LOOKUP_BARANG_BY_ID_ITEM = `${environment.webApiMM}` +'TransAssemblyNoEd/GetDetailAssemblyByHeaderIdAndParams';
export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransAssemblyNoEd/GetAllByParams';
export const GET_BY_ID = `${environment.webApiMM}` +'TransAssemblyNoEd/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransAssemblyNoEd/GetDetailByHeaderId';
export const INSERT = `${environment.webApiMM}` +'TransAssemblyNoEd/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransAssemblyNoEd/Validasi';
export const CANCEL = `${environment.webApiMM}` +'TransAssemblyNoEd/Batal';
