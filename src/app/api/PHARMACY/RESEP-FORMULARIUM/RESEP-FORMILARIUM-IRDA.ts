import { environment } from "src/environments/environment";

export const GET_OBAT = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/GetSetupObatForlookupParams';
export const GET_RACIKAN = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/GetAllByIdDokterAndParams';
export const INSERT_RACIKAN = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/Insert';
export const INSERT_RESEP = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrda/Insert';
export const GET_OBAT_PARAMS_DROPDOWNLIST = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrda/GetFormulariumForlookupParams';
export const GET_ALL_RESEP_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrda/GetAllByIdPersonAndParams';
export const GET_ALL_RESEP_AKTIF_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrda/GetAllDetailByIdRegisterAndParams';
export const GET_BY_ID = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrda/GetById';
export const UPDATE_TO_STOP = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrda/UpdateToStop';
export const UPDATE_TO_LANJUT = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrda/UpdateToLanjut';
export const UPDATE_TO_UBAH = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrda/UpdateToUbah';
export const BAWA_PULANG = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrda/BawaPulang';

export const GET_TEMPLATE_RESEP = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrda/GetTemplateResepByIdDokterAndParams';
export const GET_RESEP_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrda/GetByIdRegister';
