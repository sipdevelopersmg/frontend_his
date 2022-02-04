interface satuan{
    kode_satuan:string;
    isi:number;
}

export interface TrReturPemakaianInternalTanpaEdDetailInsert {

     /** @format int32 */
     no_urut?: number;
 
     /** @format int32 */
     id_item?: number;
     kode_item:string;
     nama_item:string;
 
     /** @format double */
     qty_satuan_besar_retur_pemakaian_internal?: number;
     kode_satuan_besar_retur_pemakaian_internal?: string | null;
 
     /** @format int32 */
     isi_retur_pemakaian_internal?: number;
 
     /** @format double */
     qty_retur_pemakaian_internal?: number;

     batch_number?: string | null;

     /** @format date-time */
     expired_date?: string;

     /** @format double */
     hpp_satuan?: number;
 
     /** @format double */
     nominal_retur_pemakaian_internal?: number;
 
     keterangan_retur_pemakaian_internal?:string;
 
     /** @format Array of Object */
     satuan:satuan[];
}

export interface TrReturPemakaianInternalTanpaEdInsert {
    nomor_pemakaian_internal?: string | null;

    /** @format date-time */
    tanggal_pemakaian_internal?: string | null;

    /** @format int32 */
    id_stockroom?: number;

    keterangan_pemakaian_internal?: string | null;

    pic_pemberi?: string | null;
    pic_penerima?: string | null;
    /** @format date-time */
    time_serah_terima?: string | null;

    /** @format double */
    jumlah_item?: number | null;

    /** @format double */
    total_transaksi?: number | null;

    details?: TrReturPemakaianInternalTanpaEdDetailInsert[] | null;
}