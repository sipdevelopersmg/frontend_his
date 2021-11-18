import { environment } from "src/environments/environment";

export const POST_SAVE_TRANSAKSI_PEMASUKAN_IRNA = `${environment.webApiAdmisi}` + "Transaksi/TransaksiIrnaInsert";
export const GET_HISTORY_TRANSAKSI_PEMASUKAN_IRNA = `${environment.webApiAdmisi}` + "Transaksi/TransaksiIrnaGetHistoryByIdRegister/";
export const POST_CANCEL_TRANSAKSI_PEMASUKAN_IRNA = `${environment.webApiAdmisi}` + "Transaksi/TransaksiIrnaCancel";
