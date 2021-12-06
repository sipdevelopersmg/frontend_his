import { environment } from "src/environments/environment";

export const GET_OBAT = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/GetSetupObatForlookupParams';
export const GET_RACIKAN = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/GetAllByIdDokterAndParams';
export const INSERT_RACIKAN = `${environment.webApiPHARMACY}` +'TransSetRacikanResep/Insert';
export const INSERT_RESEP_IRJA = `${environment.webApiPHARMACY}` +'TransResepDokterIrja/Insert';
export const GET_OBAT_PARAMS_DROPDOWNLIST = `${environment.webApiPHARMACY}` +'TransResepDokterIrja/GetSetupObatForlookupParams';
export const GET_ALL_RESEP_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepDokterIrja/GetAllByIdPersonAndParams';
export const GET_TEMPLATE_RESEP = `${environment.webApiPHARMACY}` +'TransResepDokterIrja/GetTemplateResepByIdDokterAndParams';
export const GET_ANTRIAN = `${environment.webApiPHARMACY}` +'TransResepDokterIrja/GetDataAntrian';
export const UPDATETOANTRIAN = `${environment.webApiPHARMACY}` +'TransResepDokterIrja/UpdateToAntrian';  
export const GET_BY_ID = `${environment.webApiPHARMACY}` +'TransResepDokterIrja/GetById';
export const GENERADE_NO_ANTRIAN = `${environment.webApiPHARMACY}` +'TransResepDokterIrja/GenerateNoAntrian';
export const ADMISI_PASIEN_IRJA = `${environment.webApiAdmisi}` +'Admisi/AdmisiPasienIrjaGetAllByDynamicFilterForFarmasi';
