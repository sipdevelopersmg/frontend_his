import { environment } from "src/environments/environment";

export const POST_KONSUL_PASIEN_IRJA = `${environment.webApiPis}` + 'Pasien/PasienKonsul_IRJA';
export const GET_RIWAYAT_KONSUL_BY_ID_DOKTER = `${environment.webApiPis}` + 'Pasien/GetRiwayatPasienKonsulByIdDokter/';