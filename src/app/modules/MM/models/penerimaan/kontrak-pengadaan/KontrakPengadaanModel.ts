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
    jumlah_item_kontrak?: Number | null;


    /** @format double */
    total_transaksi_kontrak?: Number | null;

    tahun_anggaran?: string | null;
    keterangan?: string | null;

    /** @format int32 */
    user_inputed?: number | null;
    details?: TrKontrakSpjbDetailItemInsert[] | null;
}

/**
 *  @TrKontrakSpjbDetailItemInsert model Insert Trans Kontrak Spjb Detail
*/
export interface TrKontrakSpjbDetailItemInsert {
    /** @format int64 */
    kontrak_id?: number | null;

    /** @format int32 */
    no_urut: number | null;

    /** @format int32 */
    id_item: number | null;

    /** @format string */
    kode_item: string | null;

    /** @format string */
    nama_item: string | null;

    /** @format date-time */
    tanggal_maksimal_expired_date: string | null;

    /** @format double */
    qty_kontrak_satuan_besar: number | null;
    kode_satuan_besar: string | null;

    /** @format int32 */
    isi: number | null;

    /** @format double */
    qty_kontrak: number | null;

    /** @format double */
    harga_satuan: number | null;

    /** @format double */
    sub_total_kontrak: number | null;
    
    /** @format Array of Object */
    satuan:satuan[];

    validasi:boolean;
    message:string;
}

interface satuan{
    kode_satuan:string;
    isi:number;
}