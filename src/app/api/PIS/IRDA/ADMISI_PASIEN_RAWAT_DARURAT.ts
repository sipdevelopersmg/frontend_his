import { environment } from "src/environments/environment";

export const GET_ALL_ADMISI_RAWAT_DARURAT = `${environment.webApiAdmisi}` + "AdmisiIrda/AdmisiPasienIrdaGetAllByDynamicFilter";
export const POST_ADMISI_RAWAT_DARURAT_NON_PENJAMIN = `${environment.webApiAdmisi}` + "AdmisiIrda/AdmisiIrdaNonPenjamin_Insert";
export const POST_ADMISI_RAWAT_DARURAT_WITH_PENJAMIN = `${environment.webApiAdmisi}` + "AdmisiIrda/AdmisiIrdaWithPenjamin_Insert";
export const GET_ADMISI_RAWAT_DARURAT_BY_ID_REGISTER = `${environment.webApiAdmisi}` + "AdmisiIrda/AdmisiIrdaGetByIdRegister/";
export const GET_ADMISI_RAWAT_DARURAT_TANPA_IDENTITAS = `${environment.webApiAdmisi}` + "AdmisiIrda/AdmisiPasienIrdaGetAllAnonimByDynamicFilter";
export const GET_ALL_ADMISI_RAWAT_DARURAT_FOR_TRANS = `${environment.webApiAdmisi}` + "AdmisiIrda/AdmisiPasienIrdaGetAllForInputTransByDynamicFilter";
