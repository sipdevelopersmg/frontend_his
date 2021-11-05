import { environment } from "src/environments/environment";

<<<<<<< Updated upstream
export const GET_ALL_BED_FOR_LOOKUP_ADMISI_PASIEN_IRNA = `${environment.webApiAdmisi}` + "AdmisiIrna/Bed_GetAllByDynamicFilterForLookupAdmisi/";

export const GET_ALL_ADMISI_PASIEN_IRNA = `${environment.webApiAdmisi}` + "AdmisiIrna/AdmisiPasienIrnaGetAllByDynamicFilter";

export const POST_ADMISI_RAWAT_INAP_NON_PENJAMIN_TPPRI = `${environment.webApiAdmisi}` + "AdmisiIrna/AdmisiIrnaNonPenjamin_TPPRI_Insert";
export const POST_ADMISI_RAWAT_INAP_WITH_PENJAMIN_TPPRI = `${environment.webApiAdmisi}` + "AdmisiIrna/AdmisiIrnaWithPenjamin_TPPRI_Insert";

export const POST_ADMISI_RAWAT_INAP_NON_PENJAMIN = `${environment.webApiAdmisi}` + "AdmisiIrna/AdmisiIrnaNonPenjamin_Insert";
export const POST_ADMISI_RAWAT_INAP_WITH_PENJAMIN = `${environment.webApiAdmisi}` + "AdmisiIrna/AdmisiIrnaWithPenjamin_Insert";

export const PUT_UPDATE_DIFFERENT_BED = `${environment.webApiAdmisi}` + "AdmisiIrna/UpdateDifferentBed";
=======
export const GET_ALL_PASIEN_FOR_LOOKUP_ANTRIAN_TPPRI = `${environment.webApiAdmisi}` + "TrAntrianTppri/PersonGetPasienForLookupAntrianTppri";
export const GET_ALL_SURAT_PERINTAH_BY_DYNAMIC_FILTER = `${environment.webApiAdmisi}` + "TrPerintahMondok/GetAllByDynamicFilter";
export const POST_SAVE_ANTRIAN_TPPRI = `${environment.webApiAdmisi}` + "TrAntrianTppri/Insert";
export const GET_ALL_ANTRIAN_TPPRI = `${environment.webApiAdmisi}` + "TrAntrianTppri/GetAllByDynamicFilter";
export const GET_ALL_PASIEN_BY_ID_POLI = `${environment.webApiAdmisi}` + "TrAntrianTppri/GetAllByDynamicFilter";
>>>>>>> Stashed changes
