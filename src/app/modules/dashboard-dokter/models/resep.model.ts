export interface TrResepDokterIrjaDetailRacikanInsert {
    counter: number;
    no_urut: number;
    id_item: number;
    nama_item: string;
    satuan: string;
    komposisi:number;
    seper:number;
    kandungan:number;
    qty_resep:number;
    qty_racikan: number | null;
    keterangan?: number | null;
}

export interface TrResepDokterIrjaDetailInsert {
    counter:number;
    no_urut: number;
    is_racikan:boolean;
    set_racikan_id?:number;
    id_metode_racikan?:number;
    metode_racikan?:string;
    id_item: number;
    nama_obat: string;
    qty_resep: number;
    satuan: string;
    label?:any;
    ket_label:string;
    id_label_pemakaian_obat?: number;
    label_pemakaian_obat?:string;
    aturan?:any;
    ket_aturan:string;
    id_tambahan_aturan_pakai?:number;
    label_tambahan_aturan_pakai?:string;
    racikan?:TrResepDokterIrjaDetailRacikanInsert[];
}

export interface TrResepDokterIrjaInsert {
    id_dokter: number;
    id_register: number;
    id_outlet: number;
    jenis_rawat: string;
    jumlah_item: number;
    details?: TrResepDokterIrjaDetailInsert[] | null;
}

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