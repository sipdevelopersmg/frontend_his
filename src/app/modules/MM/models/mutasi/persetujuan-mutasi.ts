interface satuan{
    kode_satuan:string;
    isi:number;
}

export interface TrPersetujuanMutasiDetailInsert {

    /** @format int32 */
    no_urut?: number;

    /** @format int32 */
    id_item?: number;

    kode_item?: string;
    nama_item?: string;

    /** @format double */
    qty_satuan_besar?: number | null;
    kode_satuan_besar?: string | null;

    /** @format int32 */
    isi_mutasi?: number;

    /** @format double */
    qty_mutasi?: number | null;

    

    /** @format double */
    nominal_mutasi?: number | null;

    /** @format double */
    keterangan_mutasi?: number | null;

    /** @format Array of Object */
    satuan:satuan[];
}

export interface TrPersetujuanMutasiInsert {
    nomor_mutasi?: string | null;

    /** @format date-time */
    tanggal_mutasi?: string | null;

    /** @format int32 */
    id_stockroom_pemberi?: number;

    /** @format int32 */
    id_stockroom_penerima?: number;

    keterangan_mutasi?: string | null;
    pic_pemberi_mutasi?: string | null;
    pic_penerima_mutasi?: string | null;

    /** @format date-time */
    time_serah_terima?: string | null;

    /** @format double */
    jumlah_item?: Number | null;

    /** @format double */
    total_transaksi?: Number | null;

    details?: TrPersetujuanMutasiDetailInsert[] | null;
}