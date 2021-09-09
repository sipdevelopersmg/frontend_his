import { environment } from "src/environments/environment";

export const GET_ALL_BY_PARMS = `${environment.webApiMM}` +'SetupJenisPenerimaan/GetAllByParams';
export const GET_ALL = `${environment.webApiMM}` +'SetupJenisPenerimaan/GetAll';
export const GET_BY_ID = `${environment.webApiMM}` +'SetupJenisPenerimaan/GetAkunSetupCoaById';
export const INSERT = `${environment.webApiMM}` +'SetupJenisPenerimaan/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupJenisPenerimaan/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupJenisPenerimaan/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupJenisPenerimaan/UpdateToDeActive';