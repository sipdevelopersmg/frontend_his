import { environment } from "src/environments/environment";

export const GET_ALL_JENIS_RUANGAN = `${environment.webApiBilling}` + `tarif/SetupJenisRuangan/GetAll`;
export const GET_JENIS_RUANGAN_BY_ID = `${environment.webApiBilling}` + `tarif/SetupJenisRuangan/GetById/`;
export const POST_SAVE_JENIS_RUANGAN = `${environment.webApiBilling}` + `tarif/SetupJenisRuangan/Insert`;
export const PUT_UPDATE_JENIS_RUANGAN = `${environment.webApiBilling}` + `tarif/SetupJenisRuangan/Update`;
export const DELETE_JENIS_RUANGAN_BY_ID = `${environment.webApiBilling}` + `tarif/SetupJenisRuangan/Delete/`;