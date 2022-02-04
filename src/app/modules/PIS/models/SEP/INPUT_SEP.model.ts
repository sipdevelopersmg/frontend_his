
export interface IInputSEPModel {
    id_person?: number
    no_rekam_medis?: string
    full_name?: string
    id_jenis_ruangan?: number
    id_poli?: number
    id_jadwal_dokter?: number
    id_dokter?: number
    id_debitur?: number
    id_asal_rujukan?: number
    kode_wilayah_asal_rujukan?: any
    id_kelas_rawat?: number
    no_peserta?: any
    id_icd_masuk?: number
    keterangan_diagnosa?: any
    keluhan?: any
    kode_dpjp?: string
    kode_poli?: string
    diag_awal?: string
    no_surat_rujukan?: string
    is_katarak?: boolean
    is_poli_eksekutif?: boolean
    is_laka_lantas?: boolean
    laka_lantas_data?: LakaLantasModel
}

export interface LakaLantasModel {
    penjamin: string
    tglKejadian: string
    keterangan: string
    is_suplesi: boolean
    suplesi_data: SuplesiModel
}

export interface SuplesiModel {
    suplesi: string
    no_sep_suplesi: string
    lokasi_laka: LokasiLakaModel
}

export interface LokasiLakaModel {
    kode_propinsi: string
    kode_kabupaten: string
    kode_kecamatan: string
}
