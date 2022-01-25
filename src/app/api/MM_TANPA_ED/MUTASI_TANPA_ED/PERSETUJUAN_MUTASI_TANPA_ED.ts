import { environment } from "src/environments/environment";

export const GET_HEADER_BY_PARAMS = `${environment.webApiMM}` +'TransMutasiNoEd/GetHistoryPermintaanByParams';
export const GET_BY_ID = `${environment.webApiMM}` +'TransMutasiNoEd/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransMutasiNoEd/GetDetailByMutasiId';
export const INSERT = `${environment.webApiMM}` +'TransMutasiNoEd/Insert';
export const VALIDASI = `${environment.webApiMM}` +'TransMutasiNoEd/UpdateToValidated';
export const CANCEL = `${environment.webApiMM}` +'TransMutasiNoEd/UpdateToCanceled';
export const CLOSE = `${environment.webApiMM}` +'TransMutasiNoEd/UpdateToClosed';
export const GET_DETAIL_FILE_BY_ID = `${environment.webApiMM}` +'TransMutasiNoEd/GetDetailUploadByMutasiId';
export const UPLOAD_FILE = `${environment.webApiMM}` +'TransMutasiNoEd/UploadDetailBerkas';
export const DELETE_FILE = `${environment.webApiMM}` +'TransMutasiNoEd/DeleteDetailBerkas';
