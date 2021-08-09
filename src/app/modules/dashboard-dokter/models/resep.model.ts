export interface InsertGridResepModel {
    rx?: string;
    no_urut?: number;
    kode_resep: string;
    nama_obat: string;
    satuan: string;
    qty_obat: number;
    aturan_pakai: string;
    keterangan_pakai: string;
    waktu_pakai: string;
    catatan: string;
}

export interface DaftarHistoryResepModel {
    id_resep: string;
    kode_resep: string;
    user_entry: string;
    waktu_entry: any;
    detail_resep: InsertGridResepModel[];
}