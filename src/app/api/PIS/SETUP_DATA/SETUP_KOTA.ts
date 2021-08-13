import { environment } from "src/environments/environment";

// ** Setup Provinsi
export const GET_ALL_SETUP_KOTA_BY_PROVINSI_ID = `${environment.webApiPis}` + `Wilayah/kotaGetAllByKodeProvinsi/`;
export const GET_BY_ID_SETUP_KOTA = `${environment.webApiPis}` + `Wilayah/KotaGetById/`;
export const POST_SAVE_SETUP_KOTA = `${environment.webApiPis}` + `Wilayah/KotaInsert`;
export const DELETE_SETUP_KOTA = `${environment.webApiPis}` + `Wilayah/KotaDelete/`;
export const PUT_UPDATE_SETUP_KOTA = `${environment.webApiPis}` + `Wilayah/KotaUpdate`;