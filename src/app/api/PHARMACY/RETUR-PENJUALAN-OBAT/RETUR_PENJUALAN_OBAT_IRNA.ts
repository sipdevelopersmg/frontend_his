import { environment } from "src/environments/environment";

export const GET_ALL_PENJUALAN_BELUM_TERBAYAR = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrna/GetAllPenjualanBelumTerbayarByParams';
export const GET_KODA = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrna/GetKode';
export const GET_ALL_BY_PARAMS = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrna/GetAllByParams';
export const GET_BY_ID = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrna/GetById';
export const INSERT = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrna/Insert';
export const UPDATE_TO_VALIDATED = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrna/UpdateToValidated';
export const UPDATE_TO_CANCELED = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrna/UpdateToCanceled';
export const GET_DETAIL_PENJUALAN_BY_HEADER_ID = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrna/GetDetailPenjualanByHeaderId';
export const GET_DETAIL_BY_ID = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrna/GetDetailById';
