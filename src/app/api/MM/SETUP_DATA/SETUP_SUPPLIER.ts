import { environment } from "src/environments/environment";

export const GET_ALL_BY_PARMS = `${environment.webApiMM}` +'SetupSupplier/GetAllByParams';   
export const GET_ALL = `${environment.webApiMM}` +'SetupSupplier/GetAll';
export const GET_BY_ID = `${environment.webApiMM}` +'SetupSupplier/GetMMSetupSupplierById';
export const INSERT = `${environment.webApiMM}` +'SetupSupplier/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupSupplier/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupSupplier/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupSupplier/UpdateToDeActive';