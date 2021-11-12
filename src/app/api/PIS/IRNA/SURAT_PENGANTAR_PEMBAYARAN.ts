import { environment } from "src/environments/environment";

export const GET_ALL_CARA_PULANG = `${environment.webApiAdmisi}` + "SetupCaraPulang/GetAll";
export const GET_ALL_KONDISI_PULANG = `${environment.webApiAdmisi}` + "SetupKondisiPulang/GetAll";
export const POST_SAVE_INFO_KEMATIAN = `${environment.webApiAdmisi}` + "TrInfoKematian/InsertOrUpdate";
export const GET_INFO_KEMATIAN_BY_ID_REGISTER = `${environment.webApiAdmisi}` + "TrInfoKematian/GetByIdRegister/";
export const POST_SAVE_PENGANTAR_PEMBAYARAN = `${environment.webApiAdmisi}` + "TrPerintahPulang/InsertOrUpdate";
export const POST_CANCEL_PENGANTAR_PEMBAYARAN = `${environment.webApiAdmisi}` + "TrPerintahPulang/Cancel";
export const GET_PENGANTAR_PEMBAYARAN_BY_ID_REGISTER = `${environment.webApiAdmisi}` + "TrPerintahPulang/GetByIdRegister/";
