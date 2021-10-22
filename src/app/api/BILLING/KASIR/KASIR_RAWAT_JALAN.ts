import { environment } from "src/environments/environment";

export const GET_HISTORY_BUKA_KASIR = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/GetHistoryOpened`;

export const POST_SAVE_BUKA_KASIR_BY_PENGAWAS = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/BukaKasirByPengawas`;

export const GET_HISTORY_TAMBAH_MODAL_BY_ID_SALDO_KASIR = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/GetHistoryModalByIdSaldokasir/`;
export const POST_SAVE_TAMBAH_MODAL_BY_PENGAWAS = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/TambahModalByPengawas`;

export const POST_SAVE_BUKA_KASIR_BY_KASIR = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/BukaKasirByKasir`;

export const POST_SAVE_SETORAN_KASIR = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/TambahSetoranByKasir`;
export const GET_SALDO_KASIR_FOR_SETORAN = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/GetSaldoKasirByUserKasir`;
export const GET_HISTORY_SETORAN_KASIR = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/GetHistorySetoranByUserKasir`;

export const POST_SAVE_TUTUP_KASIR = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/TutupKasir`;
export const POST_CANCEL_TUTUP_KASIR = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/TutupKasirBatal/`;
export const GET_HISTORY_TUTUP_KASIR = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/GetHistoryClosedDynamic`;

export const GET_PENDAPATAN_VERSI_KASIR = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/GetPendapatanVersiKasir/`;
export const GET_PENDAPATAN_VERSI_SISTEM = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/GetPendapatanVersiSistem/`;
export const GET_DETAIL_PENDAPATAN_VERSI_SISTEM = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/GetDaftarPaymentAndInvoicePerKasir`;
export const POST_VALIDASI_CROSS_CHECK_TUTUP_KASIR = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/ValidasiKasir`;
export const GET_HISTORY_CROSS_CHECK_TUTUP_KASIR = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/GetHistoryValidatedDynamic`;
export const GET_DETAIL_HISTORY_CROSS_CHECK_TUTUP_KASIR = `${environment.webApiBilling}` + `tarif/TrSaldoKasir/GetDetailValidatedByPerKasir/`;

