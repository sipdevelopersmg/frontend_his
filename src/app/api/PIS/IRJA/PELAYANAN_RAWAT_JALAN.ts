import { environment } from "src/environments/environment";

export const POST_GET_PASIEN_ADMISI_HARI_INI = `${environment.webApiAdmisi}` + "Admisi/AdmisiPasienIrjaGetAllByDynamicFilter";
export const POST_GET_PASIEN_FOR_LOOKUP_ADMISI = `${environment.webApiAdmisi}` + "Admisi/PersonGetPasienForLookupAdmisi";
export const POST_GET_PASIEN_FOR_SEARCHING = `${environment.webApiAdmisi}` + "Admisi/PersonGetPasienForSearching";
export const POST_ADMISI_RAWAT_JALAN_NON_PENJAMIN = `${environment.webApiAdmisi}` + "Admisi/AdmisiIrjaNonPenjaminInsert";
export const POST_ADMISI_RAWAT_JALAN_WITH_PENJAMIN = `${environment.webApiAdmisi}` + "Admisi/AdmisiIrjaWithPenjaminInsert";
export const POST_CANCEL_ADMISI_RAWAT_JALAN = `${environment.webApiAdmisi}` + "Admisi/AdmisiCancel";
export const GET_PRINT_BUKTI_ADMISI_RAWAT_JALAN = `${environment.webApiLaporan}` + "PIS/Bukti_Admisi_Pasien_Rawat_Jalan.pdf";
