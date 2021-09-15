
export interface TrSethargaOrderDetailInsert {

    /** @format int32 */
    no_urut?: number;

    /** @format int32 */
    id_item?: number;
    
    kode_item?: string;
    nama_item?: string;
    satuan:string;

    /** @format double */
    harga_order_lama?: number | null;

    /** @format int32 */
    disc_prosentase_1_lama?: number;
 
    /** @format double */
    disc_prosentase_2_lama?: number | null;
 
    /** @format double */
    harga_order_netto_lama?: number | null;

    /** @format double */
    harga_order?: number | null;

    /** @format int32 */
    disc_prosentase_1?: number | null;

    /** @format double */
    disc_prosentase_2?: number | null;

    /** @format double */
    harga_order_netto?: number | null;

}

export interface TrSethargaOrderInsert {
    nomor_harga_order?: string | null;

    /** @format date-time */
    tanggal_berlaku?: string | null;

    /** @format int32 */
    id_supplier?: number;

    details?: TrSethargaOrderDetailInsert[] | null;
}