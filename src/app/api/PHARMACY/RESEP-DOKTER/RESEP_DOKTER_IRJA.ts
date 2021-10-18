import { environment } from "src/environments/environment";

export const GET_OBAT = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/GetSetupObatForlookupParams';
export const GET_RACIKAN = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/GetAllByIdDokterAndParams';
export const INSERT_RACIKAN = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/Insert';
export const INSERT_RESEP_IRJA = `${environment.webApiPHARMACY}` +'TransResepDokterIrja/Insert';
export const GET_OBAT_PARAMS_DROPDOWNLIST = `${environment.webApiPHARMACY}` +'TransResepDokterIrja/GetSetupObatForlookupParams';
export const GET_ALL_RESEP_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepDokterIrja/GetAllByIdPersonAndParams';
export const GET_TEMPLATE_RESEP = `${environment.webApiPHARMACY}` +'TransResepDokterIrja/GetTemplateResepByIdDokterAndParams';
