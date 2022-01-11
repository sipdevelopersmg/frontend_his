export interface repackingModel {
    nomor_repacking:      string;
    tanggal_repacking:    Date;
    id_stockroom:         number;
    id_item:              number;
    batch_number:         string;
    expired_date:         Date;
    qty:                  number;
    hpp_satuan:           number;
    total_nominal:        number;
    jumlah_item:          number;
    total_transaksi:      number;
    keterangan_repacking: string;
    details:              repackingDetailModel[];
}

export interface repackingDetailModel {
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
    validasi : boolean;
    message: string;
}
