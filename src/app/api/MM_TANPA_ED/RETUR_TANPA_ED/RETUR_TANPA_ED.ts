import { environment } from "src/environments/environment";

export const GET_LOOKUP_BARANG_ED_BY_ID_STOCKROOM = `${environment.webApiMM}` +'TransReturPembelianNoEd/GetLookupBarangByIdStockroom';
export const GET_ALL = `${environment.webApiMM}` +'TransReturPembelianNoEd/GetAllHeader';
export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransReturPembelianNoEd/GetAllByParams';
export const GET_DETAIL_BY_PARAMS = `${environment.webApiMM}` +'TransReturPembelianNoEd/GetDetailByParamsAndId';
export const GET_BY_ID = `${environment.webApiMM}` +'TransReturPembelianNoEd/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransReturPembelianNoEd/GetDetailByReturPembelianId';
export const INSERT = `${environment.webApiMM}` +'TransReturPembelianNoEd/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransReturPembelianNoEd/UpdateToValidated';
export const CANCEL = `${environment.webApiMM}` +'TransReturPembelianNoEd/UpdateToCanceled';
