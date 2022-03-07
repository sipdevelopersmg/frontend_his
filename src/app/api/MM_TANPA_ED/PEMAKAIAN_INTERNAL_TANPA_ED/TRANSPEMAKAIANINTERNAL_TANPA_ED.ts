import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiMM}` +'TransPemakaianInternalNoEd/GetAllHeader';
export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransPemakaianInternalNoEd/GetAllByParams';
export const GET_HEADER_OPEN_BY_PARAMS = `${environment.webApiMM}` +'TransPemakaianInternalNoEd/GetAllOpenByParams';
export const GET_DETAIL_BY_PARAMS = `${environment.webApiMM}` +'TransPemakaianInternalNoEd/GetDetailByParamsAndId';
export const GET_BY_ID = `${environment.webApiMM}` +'TransPemakaianInternalNoEd/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransPemakaianInternalNoEd/GetDetailByHeaderId';
export const INSERT = `${environment.webApiMM}` +'TransPemakaianInternalNoEd/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransPemakaianInternalNoEd/Validasi';
export const CANCEL = `${environment.webApiMM}` +'TransPemakaianInternalNoEd/Batal';
export const GET_ITEM_BY_STOCKROOM = `${environment.webApiMM}` +'TransPemakaianInternalNoEd/GetLookupBarangByIdStockroom';
export const GET_BATCH_BY_ITEM_STOCKROOM = `${environment.webApiMM}` +'TransPemakaianInternalNoEd/GetLookupBarangByIdItemAndIdStockroom';