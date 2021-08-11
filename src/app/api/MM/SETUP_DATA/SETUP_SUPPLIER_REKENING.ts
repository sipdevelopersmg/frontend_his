import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiMM}` +'SetupSupplierRekening/GetAll';
export const GET_BY_ID = `${environment.webApiMM}` +'SetupSupplierRekening/GetMMSetupSupplierRekeningById';
export const INSERT = `${environment.webApiMM}` +'SetupSupplierRekening/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupSupplierRekening/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupSupplierRekening/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupSupplierRekening/UpdateToDeActive';