import { environment } from "src/environments/environment";

export const GET_OBAT = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/GetSetupObatForlookupParams';
export const GET_RACIKAN = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/GetAllByIdDokterAndParams';
export const INSERT_RACIKAN = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/Insert';
export const INSERT_RESEP = `${environment.webApiPHARMACY}` +'TransResepDokterIrda/Insert';
export const GET_OBAT_PARAMS_DROPDOWNLIST = `${environment.webApiPHARMACY}` +'TransResepDokterIrda/GetSetupObatForlookupParams';
export const GET_ALL_RESEP_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepDokterIrda/GetAllByIdPersonAndParams';
export const GET_ALL_RESEP_AKTIF_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepDokterIrda/GetAllDetailByIdRegisterAndParams';
export const GET_BY_ID = `${environment.webApiPHARMACY}` +'TransResepDokterIrda/GetById';
export const UPDATE_TO_STOP = `${environment.webApiPHARMACY}` +'TransResepDokterIrda/UpdateToStop';
export const UPDATE_TO_LANJUT = `${environment.webApiPHARMACY}` +'TransResepDokterIrda/UpdateToLanjut';
export const UPDATE_TO_UBAH = `${environment.webApiPHARMACY}` +'TransResepDokterIrda/UpdateToUbah';
export const BAWA_PULANG = `${environment.webApiPHARMACY}` +'TransResepDokterIrda/BawaPulang';

export const GET_TEMPLATE_RESEP = `${environment.webApiPHARMACY}` +'TransResepDokterIrda/GetTemplateResepByIdDokterAndParams';
export const GET_RESEP_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepDokterIrda/GetByIdRegister';
