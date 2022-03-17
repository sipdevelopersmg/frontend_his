import { environment } from "src/environments/environment";

export const INSERT_ANTRIAN_REGULER = `${environment.webApiAdmisi}` + "BedBooking/Insert";
export const GET_ALL_ANTRIAN_REGULER = `${environment.webApiAdmisi}` + "BedBooking/GetAllByDynamicFilter";