interface satuan{
    kode_satuan:string;
    isi:number;
}

export interface TrPemakaianInternalDetailInsert {


     /** @format int32 */
     no_urut?: number;
 
     /** @format int32 */
     id_item?: number;
     kode_item:string;
     nama_item:string;
 
     /** @format double */
     qty_satuan_besar_pemakaian_internal?: number;
     kode_satuan_besar_pemakaian_internal?: string | null;
 
     /** @format int32 */
     isi_pemakaian_internal?: number;
 
     /** @format double */
     qty_pemakaian_internal?: number;
 
     /** @format double */
     nominal_pemakaian_internal?: number;
 
     keterangan_pemakaian_internal?:string;
 
     /** @format Array of Object */
     satuan:satuan[];
}

export interface TrPemakaianInternalInsert {
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

    details?: TrPemakaianInternalDetailInsert[] | null;
}