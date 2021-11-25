import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiMM}` +'TransPemakaianInternal/GetAllHeader';
export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransPemakaianInternal/GetAllByParams';
export const GET_HEADER_OPEN_BY_PARAMS = `${environment.webApiMM}` +'TransPemakaianInternal/GetAllOpenByParams';
export const GET_DETAIL_BY_PARAMS = `${environment.webApiMM}` +'TransPemakaianInternal/GetDetailByParamsAndId';
export const GET_BY_ID = `${environment.webApiMM}` +'TransPemakaianInternal/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransPemakaianInternal/GetDetailByHeaderId';
export const INSERT = `${environment.webApiMM}` +'TransPemakaianInternal/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransPemakaianInternal/Validasi';
export const CANCEL = `${environment.webApiMM}` +'TransPemakaianInternal/Batal';
export const GET_ITEM_BY_STOCKROOM = `${environment.webApiMM}` +'TransPemakaianInternal/GetLookupBarangByIdStockroom';
export const GET_BATCH_BY_ITEM_STOCKROOM = `${environment.webApiMM}` +'TransPemakaianInternal/GetLookupBarangByIdItemAndIdStockroom';