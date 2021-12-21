import { environment } from "src/environments/environment";

export const GET_ALL_PENJUALAN_BELUM_TERBAYAR = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrda/GetAllPenjualanBelumTerbayarByParams';
export const GET_KODA = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrda/GetKode';
export const GET_ALL_BY_PARAMS = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrda/GetAllByParams';
export const GET_BY_ID = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrda/GetById';
export const INSERT = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrda/Insert';
export const UPDATE_TO_VALIDATED = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrda/UpdateToValidated';
export const UPDATE_TO_CANCELED = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrda/UpdateToCanceled';
export const GET_DETAIL_PENJUALAN_BY_HEADER_ID = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrda/GetDetailPenjualanByHeaderId';
export const GET_DETAIL_BY_ID = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrda/GetDetailRefundByHeaderId';
export const VALIDASI = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrda/UpdateToValidated';
export const CANCEL = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrda/UpdateToCanceled';
export const GET_PASIEN_IRDA = `${environment.webApiAdmisi}` +'AdmisiIrda/AdmisiPasienIrdaGetAllByDynamicFilterForFarmasi';
export const GET_DETAIL_PENJUALAN_BY_ID_REGISTER = `${environment.webApiPHARMACY}` +'TransReturPenjualanObatIrda/GetDetailPenjualanByIdRegister';

