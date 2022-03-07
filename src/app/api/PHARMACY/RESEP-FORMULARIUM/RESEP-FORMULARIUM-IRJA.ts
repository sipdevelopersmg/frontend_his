import { environment } from "src/environments/environment";

export const GET_OBAT = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrja/GetFormulariumForlookupParams';
export const GET_RACIKAN = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrja/GetAllByIdDokterAndParams';
export const INSERT_RESEP_IRJA = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrja/Insert';
export const GET_FORMULARIUM_PARAMS_DROPDOWNLIST = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrja/GetFormulariumForlookupParams';
export const GET_ALL_RESEP_BY_REGISTER = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrja/GetAllByIdPersonAndParams';
export const GET_TEMPLATE_RESEP = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrja/GetTemplateResepByIdDokterAndParams';
export const GET_ANTRIAN = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrja/GetDataAntrian';
export const UPDATETOANTRIAN = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrja/UpdateToAntrian';
export const GET_BY_ID = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrja/GetById';
export const GENERADE_NO_ANTRIAN = `${environment.webApiPHARMACY}` +'TransResepFormulariumIrja/GenerateNoAntrian';
export const ADMISI_PASIEN_IRJA = `${environment.webApiAdmisi}` +'Admisi/AdmisiPasienIrjaGetAllByDynamicFilterForFarmasi';