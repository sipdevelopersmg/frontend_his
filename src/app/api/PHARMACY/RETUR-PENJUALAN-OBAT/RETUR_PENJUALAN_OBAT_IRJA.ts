import { environment } from "src/environments/environment";

export const GET_ALL_PENJUALAN_BELUM_TERBAYAR = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrja/GetAllPenjualanBelumTerbayarByParams';
export const GET_KODA = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrja/GetKode';
export const GET_ALL_BY_PARAMS = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrja/GetAllByParams';
export const GET_BY_ID = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrja/GetById';
export const INSERT = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrja/Insert';
export const UPDATE_TO_VALIDATED = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrja/UpdateToValidated';
export const UPDATE_TO_CANCELED = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrja/UpdateToCanceled';
export const GET_DETAIL_PENJUALAN_BY_HEADER_ID = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrja/GetDetailPenjualanByHeaderId';
export const GET_DETAIL_BY_ID = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrja/GetDetailById';
