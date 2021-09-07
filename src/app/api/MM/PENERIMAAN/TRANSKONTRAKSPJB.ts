import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiMM}` +'TransKontrakSpjb/GetAllHeader';
export const GET_ALL_BY_PARAMS = `${environment.webApiMM}` +'TransKontrakSpjb/GetAllByParams';
export const GET_BY_ID = `${environment.webApiMM}` +'TransKontrakSpjb/GetById';
export const GET_DETAIL_BY_ID = `${environment.webApiMM}` +'TransKontrakSpjb/GetDetailItemByKontrakId';
export const INSERT = `${environment.webApiMM}` +'TransKontrakSpjb/Insert';
export const GET_DETAIL_FILE_BY_ID = `${environment.webApiMM}` +'TransKontrakSpjb/GetDetailUploadByKontrakId';
export const UPLOAD_FILE = `${environment.webApiMM}` +'TransKontrakSpjb/UploadDetailBerkas';
export const DELETE_FILE = `${environment.webApiMM}` +'TransKontrakSpjb/DeleteDetailBerkas';