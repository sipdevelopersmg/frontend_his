interface satuan{
    kode_satuan:string;
    isi:number;
}

export interface TrReturPembelianDetailInsert {

     /** @format int64 */
     penerimaan_id?: number | null;

     /** @format int64 */
     penerimaan_detail_id?: number | null;
 
     /** @format int32 */
     no_urut?: number;
 
     /** @format int32 */
     id_item?: number;
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
     qty_retur?: number;
 
     /** @format double */
     harga_satuan_retur?: number;
 
     /** @format double */
     sub_total?: number;
 
     /** @format Array of Object */
     satuan:satuan[];
}

export interface TrReturPembelianInsert {
    nomor_retur_pembelian?: string | null;

    /** @format date-time */
    tanggal_retur_pembelian?: string | null;

    /** @format date-time */
    tanggal_jatuh_tempo_pelunasan_retur?: string | null;

    /** @format int32 */
    id_stockroom?: number;

    /** @format int32 */
    id_mekanisme_retur?: number;

    /** @format int32 */
    id_supplier?: number;

    /** @format int32 */
    penerimaan_id?: number;

    keterangan?: string | null;


    /** @format double */
    jumlah_item_retur?: number | null;

    /** @format double */
    total_transaksi_retur?: number | null;

    details?: TrReturPembelianDetailInsert[] | null;
}