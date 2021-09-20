interface satuan{
    kode_satuan:string;
    isi:number;
}

export interface TrPenerimaanDetailItemInsert {
    /** @format int64 */
    pemesanan_id?: number | null;

    /** @format int64 */
    pemesanan_detail_id?: number | null;

    /** @format int32 */
    no_urut?: number;

    /** @format int32 */
    id_item?: number;
    barcode:string;
    kode_item:string;
    nama_item:string;
    batch_number?: string | null;

    /** @format date-time */
    expired_date?: string;

    /** @format double */
    qty_satuan_besar?: number;
    kode_satuan_besar?: string | null;

    /** @format double */
    harga_satuan_besar?: number;

    /** @format int32 */
    isi?: number;

    /** @format double */
    qty_terima?: number;

    /** @format double */
    harga_satuan?: number;

    /** @format double */
    disc_prosentase_1?: number;

    /** @format double */
    disc_nominal_1?: number;

    /** @format double */
    disc_prosentase_2?: number;

    /** @format double */
    disc_nominal_2?: number;

    /** @format double */
    harga_satuan_brutto?: number;

    /** @format double */
    tax_prosentase?: number;

    /** @format double */
    tax_nominal?: number;

    /** @format double */
    harga_satuan_netto?: number;

    /** @format double */
    sub_total?: number;

    /** @format Array of Object */
    satuan:satuan[];
}

export interface TrPenerimaanInsert {
    nomor_penerimaan?: string | null;

    /** @format date-time */
    tanggal_penerimaan?: string;
    kode_jenis_penerimaan?: string | null;

    /** @format int32 */
    id_stockroom?: number;

    /** @format int32 */
    id_supplier?: number;

    /** @format int64 */
    pemesanan_id?: number | null;
    nomor_surat_jalan_supplier?: string | null;

    /** @format date-time */
    tanggal_surat_jalan_supplier?: string;

    /** @format int32 */
    id_shipping_method?: number | null;

    /** @format int32 */
    id_payment_term?: number | null;

    /** @format date-time */
    tanggal_jatuh_tempo_bayar?: string;
    keterangan?: string | null;

    /** @format double */
    jumlah_item?: number;

    /** @format double */
    sub_total_1?: number;

    /** @format double */
    total_disc?: number;

    /** @format double */
    sub_total_2?: number;

    /** @format double */
    total_tax?: number;

    /** @format double */
    total_transaksi?: number;

    /** @format double */
    biaya_kirim?: number;

    /** @format double */
    biaya_asuransi?: number;

    /** @format double */
    biaya_lain?: number;

    /** @format double */
    potongan_nominal?: number;

    /** @format double */
    potongan_prosentase?: number;

    /** @format double */
    total_uang_muka?: number;

    /** @format double */
    total_tagihan?: number;
    details?: TrPenerimaanDetailItemInsert[] | null;
}
