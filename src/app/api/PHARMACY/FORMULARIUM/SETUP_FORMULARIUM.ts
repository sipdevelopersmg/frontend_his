import { environment } from "src/environments/environment";

export const GET_ALL_BY_PARAMS = `${environment.webApiPHARMACY}` +'SetupFormularium/GetAllByParams';
export const GET_ALL = `${environment.webApiPHARMACY}` +'SetupFormularium/GetAll';
export const GET_BY_ID_GENERIK = `${environment.webApiPHARMACY}` +'SetupFormularium/GetByIdGenerik';
export const INSERT = `${environment.webApiPHARMACY}` +'SetupFormularium/Insert';
export const UPDATE = `${environment.webApiPHARMACY}` +'SetupFormularium/Update';
export const DELETE = `${environment.webApiPHARMACY}` +'SetupFormularium/Delete';
export const UPDATETOACTIVE = `${environment.webApiPHARMACY}` +'SetupFormularium/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiPHARMACY}` +'SetupFormularium/UpdateToDeActive';


export const OBAT_GET_BY_ID_FORMULARIUM = `${environment.webApiPHARMACY}` +'SetupFormulariumObat/GetByIdFormularium';
export const OBAT_INSERT = `${environment.webApiPHARMACY}` +'SetupFormulariumObat/Insert';
export const OBAT_DELETE = `${environment.webApiPHARMACY}` +'SetupFormulariumObat/Delete';
export const OBAT_LOOKUP = `${environment.webApiPHARMACY}` +'SetupFormulariumObat/GetLookUpObatByParams';
