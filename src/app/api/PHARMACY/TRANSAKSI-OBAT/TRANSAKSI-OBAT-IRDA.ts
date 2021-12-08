import { environment } from "src/environments/environment";
export const INSERT = `${environment.webApiPHARMACY}` +'TransPenjualanObatIrda/Insert';
export const GET_PASIEN_IRDA = `${environment.webApiAdmisi}` +'AdmisiIrda/AdmisiPasienIrdaGetAllByDynamicFilterForFarmasi';