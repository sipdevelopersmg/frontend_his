import { environment } from "src/environments/environment";

export const GET_OBAT = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/GetSetupObatForlookupParams';
export const GET_RACIKAN = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/GetAllByIdDokterAndParams';
export const INSERT_RACIKAN = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/Insert';
export const INSERT_RESEP_IRJA = `${environment.webApiPHARMACY}` +'TransResepDokter/Insert';
export const GET_OBAT_PARAMS_DROPDOWNLIST = `${environment.webApiPHARMACY}` +'TransResepDokter/GetSetupObatForlookupParams';
export const GET_ALL_RESEP_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepDokter/GetAllByIdPersonAndParams';
export const GET_ALL_RESEP_AKTIF_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepDokter/GetAllDetailByIdRegisterAndParams';