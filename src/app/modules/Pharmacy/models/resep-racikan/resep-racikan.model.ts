export interface ResepRacikanModel {
    is_racikan: boolean;
    id_obat: number;
    kode_obat: string;
    nama_obat: string;
    jumlah: number;
    satuan?: string;
    harga: number;
    diskon: number;
    subtotal: number;
    detail_racikan?: DetailResepRacikanModel[];
}

export interface DetailResepRacikanModel {
    id_obat: number;
    kode_obat: string;
    nama_obat: string;
    satuan: string;
    satuan_terkecil: string;
    dosis_obat: number;
    dosis_yg_diinginkan: number;
    jumlah: number;
    harga: number;
    subtotal: number;
}