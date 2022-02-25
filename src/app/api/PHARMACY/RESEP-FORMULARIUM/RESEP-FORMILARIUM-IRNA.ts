import { environment } from "src/environments/environment";

export const GET_OBAT = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/GetSetupObatForlookupParams';
export const GET_RACIKAN = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/GetAllByIdDokterAndParams';
export const INSERT_RACIKAN = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/Insert';
export const INSERT_RESEP = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrna/Insert';
export const GET_OBAT_PARAMS_DROPDOWNLIST = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrna/GetFormulariumForlookupParams';
export const GET_ALL_RESEP_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrna/GetAllByIdPersonAndParams';
export const GET_ALL_RESEP_AKTIF_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrna/GetAllDetailByIdRegisterAndParams';
export const GET_BY_ID = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrna/GetById';
export const UPDATE_TO_STOP = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrna/UpdateToStop';
export const UPDATE_TO_LANJUT = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrna/UpdateToLanjut';
export const UPDATE_TO_UBAH = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrna/UpdateToUbah';
export const BAWA_PULANG = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrna/BawaPulang';

export const GET_TEMPLATE_RESEP = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrna/GetTemplateResepByIdDokterAndParams';
export const GET_RESEP_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrna/GetByIdRegister';
