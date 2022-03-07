export interface TrResepFormulariumDokterIrjaDetailRacikanInsert {
    counter: number;
    counterRacikan: number;
    no_urut: number;
    id_formularium: number;
    nama_obat: string;
    nama_satuan: string;
    komposisi:number;
    seper:number;
    kandungan:number;
    qty_resep:number;
    qty_racikan: number | null;
    keterangan?: number | null;
}

export interface TrResepFormulariumDokterIrjaDetailInsert {
    counter:number;
    no_urut: number;
    is_racikan:boolean;
    set_racikan_id?:number;
    id_metode_racikan?:number;
    metode_racikan?:string;
    id_formularium: number;
    nama_obat: string;
    nama_racikan?: string;
    qty_resep: number;
    nama_satuan: string;
    label?:any;
    ket_label:string;
    id_label_pemakaian_obat?: number;
    label_pemakaian_obat?:string;
    aturan?:any;
    ket_aturan:string;
    id_tambahan_aturan_pakai?:number;
    label_tambahan_aturan_pakai_obat?:string;
    
    // IRNA
    jumlah_hari: number;
    qty_harian: number;

    id_rute_pemberian_obat?:number;
    rute_pemberian_obat?:string;
    nama_rute_pemberian_obat?:string;

    jumlah_satuan_aturan_pakai?:number;
    id_satuan_aturan_pakai?:number;
    satuan_aturan_pakai?:string;
    jumlah_interval_aturan_pakai?:number;
    id_interval_aturan_pakai?:number;
    interval_aturan_pakai?:string;

    racikans?:TrResepFormulariumDokterIrjaDetailRacikanInsert[];
}

export interface TrResepFormulariumDokterIrjaInsert {
    tanggal_resep: string;
    id_dokter: number;
    id_register: number;
    id_outlet: number;
    jenis_rawat: string;
    jumlah_item?: number;
    nama_template?: number;
    details?: TrResepFormulariumDokterIrjaDetailInsert[] | null;
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