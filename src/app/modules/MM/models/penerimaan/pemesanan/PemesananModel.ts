interface satuan{
    kode_satuan:string;
    isi:number;
}

export interface TrPemesananDetailInsert {
    /** @format int64 */
    kontrak_id?: number | null;

    /** @format int64 */
    kontrak_detail_item_id?: number | null;

    /** @format int64 */
    set_harga_order_id?: number | null;

    /** @format int64 */
    set_harga_order_detail_id?: number | null;

    /** @format int32 */
    no_urut?: number;

    /** @format int32 */
    id_item?: number;

    kode_item?: string;
    nama_item?: string;

    /** @format double */
    qty_satuan_besar?: number | null;
    kode_satuan_besar?: string | null;

    /** @format double */
    harga_satuan_besar?: number | null;

    /** @format int32 */
    isi?: number;

    /** @format double */
    qty_pesan?: number | null;

    /** @format double */
    harga_satuan?: number | null;

    /** @format double */
    disc_prosentase_1?: number | null;

    /** @format double */
    disc_nominal_1?: number | null;

    /** @format double */
    disc_prosentase_2?: number | null;

    /** @format double */
    disc_nominal_2?: number | null;

    /** @format double */
    harga_satuan_brutto?: number | null;

    /** @format double */
    tax_prosentase?: number | null;

    /** @format double */
    tax_nominal?: number | null;

    /** @format double */
    harga_satuan_netto?: number | null;

    /** @format double */
    sub_total_pesan?: number | null;

    /** @format Array of Object */
    satuan:satuan[];
}

export interface TrPemesananInsert {
    nomor_pemesanan?: string | null;

    /** @format date-time */
    tanggal_pemesanan?: string | null;

    /** @format date-time */
    tanggal_expired_pemesanan?: string | null;

    /** @format int32 */
    id_stockroom?: number;

    /** @format int32 */
    id_supplier?: number;
    keterangan?: string | null;

    /** @format double */
    jumlah_item_pesan?: Number | null;

    /** @format double */
    sub_total_1?: Number | null;

    /** @format double */
    total_disc?: Number | null;

    /** @format double */
    sub_total_2?: Number | null;

    /** @format double */
    total_tax?: Number | null;

    /** @format double */
    total_transaksi_pesan?: Number | null;

    details?: TrPemesananDetailInsert[] | null;
}