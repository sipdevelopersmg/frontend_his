interface satuan{
    kode_satuan:string;
    isi:number;
}

export interface TrRefundObatIrnaDetailInsert {
    penjualan_obat_id: number;
    penjualan_obat_detail_id: number;
    no_urut: number;
    batch_number: string;
    expired_date: Date;
    qty_retur_penjualan_obat: number;
    keterangan: string;
    harga_satuan_retur: number;
    sub_total: number;
}

export interface TrRefundObatIrnaInsert {
        tanggal_retur_penjualan_obat: Date;
        penjualan_obat_id: number;
        id_outlet_terima_retur: number;
        keterangan_retur_penjualan_obat: string;
        jumlah_item_retur: number;
        total_transaksi_retur: number;
        details: TrRefundObatIrnaDetailInsert[];
}