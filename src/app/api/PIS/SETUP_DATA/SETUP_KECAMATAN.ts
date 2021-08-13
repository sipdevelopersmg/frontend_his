import { environment } from "src/environments/environment";

// ** Setup Provinsi
export const GET_ALL_SETUP_KECAMATAN_BY_KOTA_ID = `${environment.webApiPis}` + `Wilayah/KecamatanGetAllByKodeKota/`;
export const GET_BY_ID_SETUP_KECAMATAN = `${environment.webApiPis}` + `Wilayah/KecamatanGetById/`;
export const POST_SAVE_SETUP_KECAMATAN = `${environment.webApiPis}` + `Wilayah/KecamatanInsert`;
export const DELETE_SETUP_KECAMATAN = `${environment.webApiPis}` + `Wilayah/KecamatanDelete/`;
export const PUT_UPDATE_SETUP_KECAMATAN = `${environment.webApiPis}` + `Wilayah/KecamatanUpdate`;