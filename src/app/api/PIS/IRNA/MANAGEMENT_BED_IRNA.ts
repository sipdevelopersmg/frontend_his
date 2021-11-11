import { environment } from "src/environments/environment";

export const GET_ALL_BED_TRANSFER_BY_ID_REGISTER = `${environment.webApiAdmisi}` + "TrBedTransfer/GetByIdRegister/";
export const GET_ALL_HISTORY_BED_TRANSFER_BY_ID_REGISTER = `${environment.webApiAdmisi}` + "TrBedHistoryPerRegister/DaftarMutasi/";
export const POST_SAVE_REQUEST_MUTASI = `${environment.webApiAdmisi}` + "TrBedTransfer/RequestMutasi";
export const POST_CANCEL_REQUEST_MUTASI = `${environment.webApiAdmisi}` + "TrBedTransfer/CancelRequestMutasi";
export const POST_APPROVE_REQUEST_MUTASI = `${environment.webApiAdmisi}` + "TrBedTransfer/ApproveMutasi";
export const POST_CANCEL_MUTASI_BED = `${environment.webApiAdmisi}` + "TrBedTransfer/BatalMutasi";

