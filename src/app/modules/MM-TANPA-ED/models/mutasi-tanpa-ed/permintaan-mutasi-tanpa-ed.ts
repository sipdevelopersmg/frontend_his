interface satuan{
    kode_satuan:string;
    isi:number;
}

export interface TrPermintaanMutasiTanpaEdDetailInsert {

    /** @format int32 */
    no_urut?: number;

    /** @format int32 */
    id_item?: number;

    kode_item?: string;
    nama_item?: string;

    /** @format double */
    qty_satuan_besar_permintaan?: number | null;
    kode_satuan_besar_permintaan?: string | null;

    /** @format int32 */
    isi_permintaan?: number;

    /** @format double */
    qty_permintaan?: number | null;

    /** @format double */
    keterangan_permintaan?: number | null;

    /** @format Array of Object */
    satuan:satuan[];
}

export interface TrPermintaanMutasiTanpaEdInsert {
    nomor_permintaan_mutasi?: string | null;

    /** @format date-time */
    tanggal_permintaan_mutasi?: string | null;

    /** @format date-time */
    tanggal_expired_permintaan_mutasi?: string | null;

    /** @format int32 */
    id_stockroom_pemberi?: number;

    /** @format int32 */
    id_stockroom_penerima?: number;

    keterangan_permintaan_mutasi?: string | null;
    pic_pemberi_mutasi?: string | null;
    pic_penerima_mutasi?: string | null;

    /** @format date-time */
    time_serah_terima?: string | null;

    /** @format double */
    jumlah_item?: Number | null;

    /** @format double */
    total_transaksi?: Number | null;

    details?: TrPermintaanMutasiTanpaEdDetailInsert[] | null;
}