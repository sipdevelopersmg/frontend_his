import { environment } from "src/environments/environment";

export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransMutasi/GetHistoryPermintaanByParams';
export const GET_BY_ID = `${environment.webApiMM}` +'TransMutasi/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransMutasi/GetDetailByMutasiId';
export const INSERT = `${environment.webApiMM}` +'TransMutasi/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransMutasi/UpdateToValidated';
export const CANCEL = `${environment.webApiMM}` +'TransMutasi/UpdateToCanceled';
export const CLOSE = `${environment.webApiMM}` +'TransMutasi/UpdateToClosed';
export const GET_DETAIL_FILE_BY_ID = `${environment.webApiMM}` +'TransMutasi/GetDetailUploadByMutasiId';
export const UPLOAD_FILE = `${environment.webApiMM}` +'TransMutasi/UploadDetailBerkas';
export const DELETE_FILE = `${environment.webApiMM}` +'TransMutasi/DeleteDetailBerkas';
