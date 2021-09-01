/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Int16NullableResponseModel {
    responseResult?: boolean;

    /** @format int32 */
    data?: number | null;
    message?: string | null;
}

export interface Int32NullableResponseModel {
    responseResult?: boolean;

    /** @format int32 */
    data?: number | null;
    message?: string | null;
}

export interface Int64NullableResponseModel {
    responseResult?: boolean;

    /** @format int64 */
    data?: number | null;
    message?: string | null;
}

export interface KelasPerawatan {
    /** @format int32 */
    id_kelas?: number;
    kode_kelas?: string | null;
    nama_kelas?: string | null;
    is_active?: boolean;
}

export interface KelasPerawatanRequestInsert {
    kode_kelas: string;
    nama_kelas: string;
}

export interface KelasPerawatanRequestUpdate {
    /** @format int32 */
    id_kelas: number;
    kode_kelas: string;
    nama_kelas: string;
}

export interface KelasPerawatanUpdatestatus {
    /** @format int32 */
    id_kelas?: number;
    is_active?: boolean;
}

export interface KelasPerawatanIEnumerableResponseModel {
    responseResult?: boolean;
    data?: KelasPerawatan[] | null;
    message?: string | null;
}

export interface KelasPerawatanResponseModel {
    responseResult?: boolean;
    data?: KelasPerawatan;
    message?: string | null;
}

export interface Poli {
    /** @format int32 */
    id_poli?: number;

    /** @format int32 */
    id_poli_parent?: number;

    /** @format int32 */
    id_jenis_ruangan?: number;

    /** @format int32 */
    id_outlet?: number;
    jenis_rawat?: string | null;
    kode_poli?: string | null;
    nama_poli?: string | null;
    is_active?: boolean;

    /** @format int32 */
    user_created?: number;

    /** @format date-time */
    time_created?: string;

    /** @format int32 */
    user_deactived?: number;

    /** @format date-time */
    time_deactived?: string;
}

export interface PoliRequestInsert {
    /** @format int32 */
    id_poli_parent?: number;

    /** @format int32 */
    id_jenis_ruangan: number;

    /** @format int32 */
    id_outlet?: number;
    jenis_rawat?: string | null;
    kode_poli: string;
    nama_poli: string;
}

export interface PoliRequestUpdate {
    /** @format int32 */
    id_poli: number;

    /** @format int32 */
    id_poli_parent?: number;

    /** @format int32 */
    id_jenis_ruangan: number;

    /** @format int32 */
    id_outlet?: number;
    jenis_rawat?: string | null;
    kode_poli: string;
    nama_poli: string;
}

export interface PoliResponseView {
    /** @format int32 */
    id_poli?: number;

    /** @format int32 */
    id_jenis_ruangan?: number;
    jenis_ruangan?: string | null;

    /** @format int32 */
    id_outlet?: number;
    jenis_rawat?: string | null;
    kode_poli?: string | null;
    nama_poli?: string | null;

    /** @format int32 */
    id_poli_parent?: number;

    /** @format int32 */
    id_jenis_ruangan_parent?: number;
    jenis_ruangan_parent?: string | null;

    /** @format int32 */
    id_outlet_parent?: number;
    jenis_rawat_parent?: string | null;
    kode_poli_parent?: string | null;
    nama_poli_parent?: string | null;
    child?: PoliResponseView[] | null;
}

export interface PoliResponseViewIEnumerableResponseModel {
    responseResult?: boolean;
    data?: PoliResponseView[] | null;
    message?: string | null;
}

export interface PoliUpdatestatus {
    /** @format int32 */
    id_poli?: number;
    is_active?: boolean;
}

export interface PoliResponseModel {
    responseResult?: boolean;
    data?: Poli;
    message?: string | null;
}

export interface SetupGrupTarif {
    /** @format int32 */
    id_grup_tarif: number;

    /** @format int32 */
    id_grup_tarif_parent?: number;
    kode_grup_tarif: string;
    nama_grup_tarif: string;

    /** @format int32 */
    level: number;
}

export interface SetupGrupTarifRequestInsert {
    /** @format int32 */
    id_grup_tarif_parent?: number;
    kode_grup_tarif: string;
    nama_grup_tarif: string;

    /** @format int32 */
    level: number;
}

export interface SetupGrupTarifResponseView {
    /** @format int32 */
    id_grup_tarif?: number;
    kode_grup_tarif?: string | null;
    nama_grup_tarif?: string | null;

    /** @format int32 */
    level?: number;

    /** @format int32 */
    id_grup_tarif_parent?: number;
    kode_group_tarif_parent?: string | null;
    nama_grup_tarif_parent?: string | null;

    /** @format int32 */
    level_parent?: number;
    child?: SetupGrupTarifResponseView[] | null;
}

export interface SetupGrupTarifResponseViewIEnumerableResponseModel {
    responseResult?: boolean;
    data?: SetupGrupTarifResponseView[] | null;
    message?: string | null;
}

export interface SetupGrupTarifResponseModel {
    responseResult?: boolean;
    data?: SetupGrupTarif;
    message?: string | null;
}

export interface SetupJenisRuangan {
    /** @format int32 */
    id_jenis_ruangan: number;
    jenis_ruangan: string;
}

export interface SetupJenisRuanganRequestInsert {
    jenis_ruangan: string;
}

export interface SetupJenisRuanganIEnumerableResponseModel {
    responseResult?: boolean;
    data?: SetupJenisRuangan[] | null;
    message?: string | null;
}

export interface SetupJenisRuanganResponseModel {
    responseResult?: boolean;
    data?: SetupJenisRuangan;
    message?: string | null;
}

export interface SetupKelompokTarif {
    /** @format int32 */
    id_kelompok_tarif: number;
    kode_kelompok_tarif: string;
    nama_kelompok_tarif: string;
}

export interface SetupKelompokTarifRequestInsert {
    kode_kelompok_tarif: string;
    nama_kelompok_tarif: string;
}

export interface SetupKelompokTarifIEnumerableResponseModel {
    responseResult?: boolean;
    data?: SetupKelompokTarif[] | null;
    message?: string | null;
}

export interface SetupKelompokTarifResponseModel {
    responseResult?: boolean;
    data?: SetupKelompokTarif;
    message?: string | null;
}

export interface SetupTarif {
    /** @format int32 */
    id_setup_tarif?: number;

    /** @format int32 */
    id_grup_tarif?: number;

    /** @format int32 */
    id_kelompok_tarif?: number;
    kode_setup_tarif?: string | null;
    nama_setup_tarif?: string | null;
    jenis_rawat?: string | null;
    is_paket?: boolean;
    is_active?: boolean;

    /** @format int32 */
    user_created?: number;

    /** @format date-time */
    time_created?: string;

    /** @format int32 */
    user_deactived?: number;

    /** @format date-time */
    time_deactived?: string;
}

export interface SetupTarifPaket {
    /** @format int64 */
    id_setup_tarif_parent?: number;

    /** @format int64 */
    id_setup_tarif_child?: number;
    is_active?: boolean;
}

export interface SetupTarifPaketRequestInsertDeleteUpdate {
    /** @format int64 */
    id_setup_tarif_parent?: number;

    /** @format int64 */
    id_setup_tarif_child?: number;
}

export interface SetupTarifRequestInsert {
    /** @format int32 */
    id_grup_tarif: number;

    /** @format int32 */
    id_kelompok_tarif: number;
    kode_setup_tarif: string;
    nama_setup_tarif: string;
    jenis_rawat: string;
    is_paket: boolean;
}

export interface SetupTarifRequestUpdate {
    /** @format int32 */
    id_setup_tarif: number;

    /** @format int32 */
    id_grup_tarif: number;

    /** @format int32 */
    id_kelompok_tarif: number;
    kode_setup_tarif: string;
    nama_setup_tarif: string;
    jenis_rawat: string;
    is_paket: boolean;
}

export interface SetupTarifUpdatestatus {
    /** @format int32 */
    id_setup_tarif?: number;
    is_active?: boolean;
}

export interface SetupTarifIEnumerableResponseModel {
    responseResult?: boolean;
    data?: SetupTarif[] | null;
    message?: string | null;
}

export interface SetupTarifResponseModel {
    responseResult?: boolean;
    data?: SetupTarif;
    message?: string | null;
}

export interface StringResponseModel {
    responseResult?: boolean;
    data?: string | null;
    message?: string | null;
}

export interface TarifBerlaku {
    /** @format int64 */
    id_tarif_berlaku?: number;

    /** @format int32 */
    id_setup_tarif?: number;

    /** @format int32 */
    id_kelas?: number;

    /** @format date-time */
    tgl_berlaku?: string;

    /** @format date-time */
    tgl_berakhir?: string | null;

    /** @format double */
    doct_fee?: number;

    /** @format double */
    medical_fee?: number;

    /** @format double */
    hos_fee?: number;

    /** @format double */
    com_fee?: number;

    /** @format double */
    add_fee?: number;

    /** @format double */
    anas_fee?: number;

    /** @format double */
    support_fee?: number;

    /** @format double */
    nominal_tarif?: number;
    is_active?: boolean;

    /** @format int32 */
    user_created?: number;

    /** @format date-time */
    time_created?: string;

    /** @format int32 */
    user_deactived?: number;

    /** @format date-time */
    time_deactived?: string;
}

export interface TarifBerlakuPoli {
    /** @format int32 */
    id_setup_tarif?: number;

    /** @format int64 */
    id_tarif_berlaku_poli?: number;

    /** @format int32 */
    id_poli?: number;

    /** @format date-time */
    tgl_berlaku?: string;

    /** @format date-time */
    tgl_berakhir?: string | null;
    is_active?: boolean;

    /** @format int32 */
    user_created?: number;

    /** @format date-time */
    time_created?: string;

    /** @format int32 */
    user_deactived?: number;

    /** @format date-time */
    time_deactived?: string;
}

export interface TarifBerlakuPoliRequestInsert {
    /** @format int32 */
    id_setup_tarif: number;

    /** @format int32 */
    id_poli: number;

    /** @format date-time */
    tgl_berlaku: string;

    /** @format date-time */
    tgl_berakhir?: string | null;
}

export interface TarifBerlakuPoliUpdatestatus {
    /** @format int64 */
    id_tarif_berlaku_poli?: number;
    is_active?: boolean;
}

export interface TarifBerlakuPoliIEnumerableResponseModel {
    responseResult?: boolean;
    data?: TarifBerlakuPoli[] | null;
    message?: string | null;
}

export interface TarifBerlakuPoliResponseModel {
    responseResult?: boolean;
    data?: TarifBerlakuPoli;
    message?: string | null;
}

export interface TarifBerlakuRequestInsert {
    /** @format int32 */
    id_setup_tarif: number;

    /** @format int32 */
    id_kelas: number;

    /** @format date-time */
    tgl_berlaku: string;

    /** @format date-time */
    tgl_berakhir?: string | null;

    /** @format double */
    doct_fee?: number;

    /** @format double */
    medical_fee?: number;

    /** @format double */
    hos_fee?: number;

    /** @format double */
    com_fee?: number;

    /** @format double */
    add_fee?: number;

    /** @format double */
    anas_fee?: number;

    /** @format double */
    support_fee?: number;

    /** @format double */
    nominal_tarif: number;
}

export interface TarifBerlakuUpdatestatus {
    /** @format int64 */
    id_tarif_berlaku?: number;
    is_active?: boolean;
}

export interface TarifBerlakuIEnumerableResponseModel {
    responseResult?: boolean;
    data?: TarifBerlaku[] | null;
    message?: string | null;
}

export interface TarifBerlakuResponseModel {
    responseResult?: boolean;
    data?: TarifBerlaku;
    message?: string | null;
}
