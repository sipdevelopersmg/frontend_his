import { environment } from "src/environments/environment";

// ** Setup Jenis Pemeriksaan
export const GET_BY_KODE_KELOMPOK = `${environment.webApiPis}` + `OmJenisPemeriksaan/GetByKodeKelompok/`;
export const GET_ALL_KELOMPOK_BY_GRUP_PENUNJANG = `${environment.webApiPis}` + `OmJenisPemeriksaan/GetAllRecursive/`;
export const POST_SAVE_KODE_KELOMPOK = `${environment.webApiPis}` + `OmJenisPemeriksaan/Insert`;
export const PUT_UPDATE_KODE_KELOMPOK = `${environment.webApiPis}` + `OmJenisPemeriksaan/Update`;
export const PUT_UPDATE_STATUS_KODE_KELOMPOK = `${environment.webApiPis}` + `OmJenisPemeriksaan/UpdateStatus`;
export const CHECK_USED_KODE_KELOMPOK = `${environment.webApiPis}` + `OmJenisPemeriksaan/IsUsed/`;
export const DELETE_KODE_KELOMPOK = `${environment.webApiPis}` + `OmJenisPemeriksaan/Delete/`;