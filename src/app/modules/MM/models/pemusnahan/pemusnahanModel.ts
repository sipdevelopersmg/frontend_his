export interface pemusnahanModel {
    nomor_pemusnahan_stok:   string;
    tanggal_pemusnahan_stok: Date;
    id_stockroom:            number;
    jumlah_item:             number;
    total_transaksi:         number;
    keterangan:              string;
    details:                 pemusnahanDetailmodel[];
}

export interface pemusnahanDetailmodel {
    no_urut:      number;
    id_item:      number;
    kode_item:    number;
    barcode:      number;
    nama_item:    string;
    batch_number: string;
    expired_date: Date;
    qty:          number;
    hpp_satuan:   number;
    sub_total:    number;
}

