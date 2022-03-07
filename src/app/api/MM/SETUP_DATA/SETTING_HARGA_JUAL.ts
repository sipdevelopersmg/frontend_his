import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiMM}` +'SetupTipeSupplier/GetAll';
export const INSERT = `${environment.webApiMM}` +'SetupTipeSupplier/Insert';
export const UPDATE = `${environment.webApiMM}` +'SetupTipeSupplier/Update';
export const UPDATETOACTIVE = `${environment.webApiMM}` +'SetupTipeSupplier/UpdateToActive';
export const UPDATETODEACTIVE = `${environment.webApiMM}` +'SetupTipeSupplier/UpdateToDeActive';