import { environment } from "src/environments/environment";

export const GET_CHECK_IS_PERSON_TERJADWAL = `${environment.webApiAdmisi}` + "BedBooking/IsPersonTerjadwal/";
export const INSERT_ANTRIAN_REGULER = `${environment.webApiAdmisi}` + "BedBooking/Insert";
export const GET_ALL_ANTRIAN_REGULER = `${environment.webApiAdmisi}` + "BedBooking/GetAllByDynamicFilter";
export const POST_UPDATE_STATUS_TERJADWAL = `${environment.webApiAdmisi}` + "BedBooking/UpdateTerjadwal";
export const POST_UPDATE_STATUS_BATAL = `${environment.webApiAdmisi}` + "BedBooking/UpdateCanceled";