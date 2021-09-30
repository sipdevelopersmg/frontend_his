import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IAntrianRawatJalanModel {
    id_jadwal_dokter: number;
    id_dokter: number;
    id_person: number;
    id_spesialisasi_dokter: number;
    kode_dokter: string;
    full_name: string;
    spesialisasi_dokter: string;
    nama_hari: string;
    jam_mulai: string;
    jam_selesai: string;
    no_surat_ijin_praktek: string;
    tgl_exp_surat_ijin_praktek: string;
    no_str: string;
    tgl_exp_str: string
    id_smf: number;
    id_status_dokter: number;
    nama_foto: string;
    link_foto: string;
    kuota: string;
    sisa_kuota: string;
    pasien: Pasien[];
}

export interface Pasien {
    id_person: number;
    tgl_admisi: string;
    id_register: number;
    no_register: string;
    no_rekam_medis: string;
    id_icd_masuk: number;
    nama_pasien: string;
    tanggal_lahir: string;
    umur: string;
    gender: string;
    nama_debitur: string;
    id_dokter: number;
    id_poli: number;
    id_kelas_rawat: number;
    nama_kelas: string;
    nama_foto: string;
    link_foto: string;
    status_terlayani: string;
}

/**
 * @GetAllAntrianRawatJalanModel response model setelah request Get All Antrian Rawat Jalan
 * @Key : { responseResult: boolean; data: IAntrianRawatJalanModel[]; message: string }
*/
export class GetAllAntrianRawatJalanModel implements HttpResponseModel {
    responseResult: boolean;
    data: IAntrianRawatJalanModel[];
    message: string;
}