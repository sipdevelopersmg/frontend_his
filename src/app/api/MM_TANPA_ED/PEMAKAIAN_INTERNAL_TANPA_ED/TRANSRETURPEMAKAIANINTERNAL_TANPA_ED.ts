import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiMM}` +'TransReturPemakaianInternalNoEd/GetAllHeader';
export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransReturPemakaianInternalNoEd/GetAllByParams';
export const GET_DETAIL_BY_PARAMS = `${environment.webApiMM}` +'TransReturPemakaianInternalNoEd/GetDetailByParamsAndId';
export const GET_BY_ID = `${environment.webApiMM}` +'TransReturPemakaianInternalNoEd/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransReturPemakaianInternalNoEd/GetDetailItemByHeaderId';
export const INSERT = `${environment.webApiMM}` +'TransReturPemakaianInternalNoEd/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransReturPemakaianInternalNoEd/Validasi';
export const CANCEL = `${environment.webApiMM}` +'TransReturPemakaianInternalNoEd/Batal';
export const CLOSE = `${environment.webApiMM}` +'TransReturPemakaianInternalNoEd/UpdateToClosed';
