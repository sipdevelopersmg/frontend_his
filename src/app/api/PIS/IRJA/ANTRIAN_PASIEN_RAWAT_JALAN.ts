import { environment } from "src/environments/environment";

export const GET_ANTRIAN_PASIEN_BY_DOKTER_PER_POLI = `${environment.webApiPis}` + "Pasien/GetDaftarAntrianPasienGroupByDokterPerPoli/";
export const POST_SAVE_KONSUL_ANTRIAN_PASIEN_IRJA = `${environment.webApiPis}` + "Pasien/PasienKonsul_IRJA_Many";
export const GET_RIWAYAT_KONSUL_ANTRIAN_PASIEN_IRJA = `${environment.webApiPis}` + "Pasien/GetRiwayatPasienKonsulByIdRegister/";
export const POST_CANCEL_KONSUL_ANTRIAN_PASIEN_IRJA = `${environment.webApiPis}` + "Pasien/PasienKonsulCancel_IRJA";