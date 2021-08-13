import { environment } from "src/environments/environment";

// ** Setup Provinsi
export const GET_ALL_SETUP_PROVINSI = `${environment.webApiPis}` + `Wilayah/provinsiGetAll`;
export const GET_BY_ID_SETUP_PROVINSI = `${environment.webApiPis}` + `Wilayah/ProvinsiGetById/`;
export const POST_SAVE_SETUP_PROVINSI = `${environment.webApiPis}` + `Wilayah/ProvinsiInsert`;
export const DELETE_SETUP_PROVINSI = `${environment.webApiPis}` + `Wilayah/ProvinsiDelete/`;
export const PUT_UPDATE_SETUP_PROVINSI = `${environment.webApiPis}` + `Wilayah/ProvinsiUpdate`;