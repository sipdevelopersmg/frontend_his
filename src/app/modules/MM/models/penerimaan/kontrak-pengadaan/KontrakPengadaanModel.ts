
/**
 * @TrKontrakSpjb base model Trans Kontrak Spjb
*/
export interface TrKontrakSpjb {
    /** @format int64 */
    kontrak_id?: number | null;

    /** @format int32 */
    id_supplier?: number | null;
    nomor_kontrak_spjb?: string | null;
    nomor_kontrak?: string | null;
    judul_kontrak?: string | null;

    /** @format date-time */
    tanggal_ttd_kontrak?: string | null;

    /** @format date-time */
    tanggal_berlaku_kontrak?: string | null;

    /** @format date-time */
    tanggal_berakhir_kontrak?: string | null;

    /** @format double */
    jumlah_item_kontrak?: number | null;

    /** @format double */
    jumlah_item_pesan?: number | null;

    /** @format double */
    jumlah_item_terima?: number | null;

    /** @format double */
    total_transaksi_kontrak?: number | null;

    /** @format double */
    total_transaksi_pesan?: number | null;

    /** @format double */
    total_transaksi_terima?: number | null;
    tahun_anggaran?: string | null;
    keterangan?: string | null;
    status_transaksi?: string | null;
    is_closed?: boolean | null;

    /** @format int32 */
    user_inputed?: number | null;

    /** @format date-time */
    time_inputed?: string | null;

    /** @format int32 */
    user_validated?: number | null;

    /** @format date-time */
    time_validated?: string | null;

    /** @format int32 */
    user_canceled?: number | null;

    /** @format date-time */
    time_canceled?: string | null;
    reason_canceled?: string | null;

    /** @format int32 */
    user_closed?: number | null;

    /** @format date-time */
    time_closed?: string | null;
    reason_closed?: string | null;

    /** @format int32 */
    user_revision?: number | null;

    /** @format date-time */
    time_revision?: string | null;
    reason_revision?: string | null;

    /** @format int32 */
    jumlah_revisi?: number | null;
    nomor_kontrak_spjb_asli?: string | null;
}

/**
 *  @TrKontrakSpjbInsert model Insert Trans Kontrak Spjb
*/
export interface TrKontrakSpjbInsert {
    /** @format int32 */
    id_supplier?: number | null;
    nomor_kontrak_spjb?: string | null;
    nomor_kontrak?: string | null;
    judul_kontrak?: string | null;

    /** @format date-time */
    tanggal_ttd_kontrak?: string | null;

    /** @format date-time */
    tanggal_berlaku_kontrak?: string | null;

    /** @format date-time */
    tanggal_berakhir_kontrak?: string | null;

    /** @format double */
    jumlah_item_kontrak?: number | null;

    /** @format double */
    jumlah_item_pesan?: number | null;

    /** @format double */
    jumlah_item_terima?: number | null;

    /** @format double */
    total_transaksi_kontrak?: number | null;

    /** @format double */
    total_transaksi_pesan?: number | null;

    /** @format double */
    total_transaksi_terima?: number | null;
    tahun_anggaran?: string | null;
    keterangan?: string | null;

    /** @format int32 */
    user_inputed?: number | null;
    detailItem?: TrKontrakSpjbDetailItemInsert[] | null;
}

/**
 *  @TrKontrakSpjbDetailItemInsert model Insert Trans Kontrak Spjb Detail
*/
export interface TrKontrakSpjbDetailItemInsert {
    /** @format int64 */
    kontrak_id?: number | null;

    /** @format int32 */
    no_urut?: number | null;

    /** @format int32 */
    id_item?: number | null;

    /** @format date-time */
    tanggal_maksimal_expired_date?: string | null;

    /** @format double */
    qty_kontrak_satuan_besar?: number | null;
    kode_satuan_besar?: string | null;

    /** @format int32 */
    isi?: number | null;

    /** @format double */
    qty_kontrak?: number | null;

    /** @format double */
    harga_satuan?: number | null;

    /** @format double */
    sub_total_kontrak?: number | null;
}