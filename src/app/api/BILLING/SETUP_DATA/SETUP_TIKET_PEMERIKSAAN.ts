import { environment } from "src/environments/environment";

export const GET_ALL = `${environment.webApiBilling}` + `tarif/SetupTiketPemeriksaan/GetAll`;
export const GET_BY_ID = `${environment.webApiBilling}` + `tarif/SetupTiketPemeriksaan/GetById/`;
export const POST_SAVE = `${environment.webApiBilling}` + `tarif/SetupTiketPemeriksaan/Insert`;
export const PUT_UPDATE = `${environment.webApiBilling}` + `tarif/SetupTiketPemeriksaan/Update`;
export const DELETE = `${environment.webApiBilling}` + `tarif/SetupTiketPemeriksaan/Delete/`;
