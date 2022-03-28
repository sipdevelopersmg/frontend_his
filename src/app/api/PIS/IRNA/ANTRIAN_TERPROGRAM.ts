import { environment } from "src/environments/environment";

export const INSERT_ANTRIAN_TERPROGRAM = `${environment.webApiAdmisi}` + "BedBookingTerprogram/Insert";
export const GET_ALL_ANTRIAN_TERPROGRAM = `${environment.webApiAdmisi}` + "BedBookingTerprogram/GetAllByDynamicFilter";
export const GET_PERSON_TERJADWAL_FOR_APPROVE = `${environment.webApiAdmisi}` + "BedBookingTerprogram/BedBookingTerprogramGetPersonTerjadwal/";
export const POST_UPDATE_STATUS_APPROVE = `${environment.webApiAdmisi}` + "BedBookingTerprogram/Approve";
export const POST_UPDATE_STATUS_BATAL = `${environment.webApiAdmisi}` + "BedBookingTerprogram/UpdateCanceled";