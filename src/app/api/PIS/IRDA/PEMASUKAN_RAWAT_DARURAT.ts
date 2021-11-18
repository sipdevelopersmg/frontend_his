import { environment } from "src/environments/environment";

export const POST_SAVE_PEMASUKAN_RAWAT_DARURAT = `${environment.webApiAdmisi}` + "Transaksi/TransaksiIrdaInsert";
export const POST_CANCEL_PEMASUKAN_RAWAT_DARURAT = `${environment.webApiAdmisi}` + "Transaksi/TransaksiIrdaCancel";
export const GET_HISTORY_PEMASUKAN_RAWAT_DARURAT = `${environment.webApiAdmisi}` + "Transaksi/TransaksiIrdaGetHistoryByIdRegister/";
