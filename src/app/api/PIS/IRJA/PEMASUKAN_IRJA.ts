import { environment } from "src/environments/environment";

export const POST_GET_PASIEN_IRJA_FOR_LOOKUP = `${environment.webApiAdmisi}` + "Transaksi/PasienIrjaGetAllForLookup";
export const GET_ALL_POLI_BY_ID_REGISTER = `${environment.webApiAdmisi}` + "Transaksi/PoliGetByIdRegister/";
export const POST_GET_ALL_TARIF_BERLAKU_POLI_BY_ID_POLI_AND_ID_KELAS = `${environment.webApiAdmisi}` + "Transaksi/TarifBerlakuPoliGetAllByIdPoliAndIdKelasForLookup";
export const POST_GET_ALL_DOKTER_FOR_LOOKUP = `${environment.webApiAdmisi}` + "Transaksi/DokterGetAllForLookup";
export const POST_SAVE_TRANSAKSI_PEMASUKAN_IRJA = `${environment.webApiAdmisi}` + "Transaksi/TransaksiIrjaInsert";
export const POST_CANCEL_TRANSAKSI_PEMASUKAN_IRJA = `${environment.webApiAdmisi}` + "Transaksi/TransaksiIrjaCancel";
export const GET_HISTORY_TRANSAKSI_PEMASUKAN_IRJA = `${environment.webApiAdmisi}` + "Transaksi/TransaksiIrjaGetHistoryByIdRegister/";
