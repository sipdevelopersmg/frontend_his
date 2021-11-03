import { environment } from "src/environments/environment";

export const GET_OBAT = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/GetSetupObatForlookupParams';
export const GET_RACIKAN = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/GetAllByIdDokterAndParams';
export const INSERT_RACIKAN = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/Insert';
export const INSERT_RESEP = `${environment.webApiPHARMACY}` +'TransResepDokterIrna/Insert';
export const GET_OBAT_PARAMS_DROPDOWNLIST = `${environment.webApiPHARMACY}` +'TransResepDokterIrna/GetSetupObatForlookupParams';
export const GET_ALL_RESEP_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepDokterIrna/GetAllByIdPersonAndParams';
export const GET_ALL_RESEP_AKTIF_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepDokterIrna/GetAllDetailByIdRegisterAndParams';
export const GET_BY_ID = `${environment.webApiPHARMACY}` +'TransResepDokterIrna/GetById';
export const UPDATE_TO_STOP = `${environment.webApiPHARMACY}` +'TransResepDokterIrna/UpdateToStop';
export const UPDATE_TO_LANJUT = `${environment.webApiPHARMACY}` +'TransResepDokterIrna/UpdateToLanjut';
export const UPDATE_TO_UBAH = `${environment.webApiPHARMACY}` +'TransResepDokterIrna/UpdateToUbah';
export const BAWA_PULANG = `${environment.webApiPHARMACY}` +'TransResepDokterIrna/BawaPulang';

export const GET_TEMPLATE_RESEP = `${environment.webApiPHARMACY}` +'TransResepDokterIrna/GetTemplateResepByIdDokterAndParams';
export const GET_RESEP_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepDokterIrna/GetByIdRegister';
