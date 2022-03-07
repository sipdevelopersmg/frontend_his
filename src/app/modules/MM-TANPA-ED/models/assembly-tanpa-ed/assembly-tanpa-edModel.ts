export interface assemblyTanpaEdModel {
    nomor_assembly:      string;
    tanggal_assembly:    Date;
    id_stockroom:         number;
    id_item:              number;
    batch_number:         string;
    expired_date:         Date;
    qty:                  number;
    hpp_satuan:           number;
    total_nominal:        number;
    jumlah_item:          number;
    total_transaksi:      number;
    keterangan_assembly: string;
    details:              assemblyDetailTanpaEdModel[];
}

export interface assemblyDetailTanpaEdModel {
    no_urut:       number;
    id_item_child: number;
    barcode     : string;
    kode_item   : string;
    nama_item   : string;
    batch_number:  string;
    expired_date:  Date;
    qty:           number;
    hpp_satuan:    number;
    sub_total:     number;
    qty_on_hand:   number;
    validasi : boolean;
}
