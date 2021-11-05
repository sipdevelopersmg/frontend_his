import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IAdmisiPasienRawatInapModel {
    id_person: number
    no_rekam_medis: string
    id_jenis_ruangan: number
    id_poli: number
    id_dokter: number
    id_debitur: number
    id_asal_rujukan?: number // ** With Penjamin and TPPRI
    kode_wilayah_asal_rujukan?: string // ** With Penjamin and TPPRI
    id_kelas_rawat: number
    no_peserta?: string // ** With Penjamin and TPPRI
    id_icd_masuk: number
    keterangan_diagnosa: string
    keluhan: string
    id_setup_room_admisi: number
    id_setup_bed_room_admisi: number
    reason_different_bed: string
    id_antrian_tppri: number
}

export interface IResponseAdmisiPasienRawatInapModel {
    no_register: string
    jenis_karcis: string
    is_different_bed: boolean
    id_antrian_tppri: number
}

export class PostAdmisiRawatJalanWithNonPenjaminTPRRIModel implements HttpResponseModel {
    responseResult: boolean;
    data: IResponseAdmisiPasienRawatInapModel;
    message: string;
}

export class PostAdmisiRawatInapWithPenjaminTPRRIModel implements HttpResponseModel {
    responseResult: boolean;
    data: IResponseAdmisiPasienRawatInapModel;
    message: string;
}

export interface IAdmisiPasienRawatInapNonTPPRIModel {
    id_person: number
    no_rekam_medis: string
    id_jenis_ruangan: number
    id_poli: number
    id_dokter: number
    id_debitur: number
    id_asal_rujukan?: number // ** With Penjamin and Non TPPRI
    kode_wilayah_asal_rujukan?: string // ** With Penjamin and Non TPPRI
    id_kelas_rawat: number
    no_peserta?: string // ** With Penjamin and Non TPPRI
    id_icd_masuk: number
    keterangan_diagnosa: string
    keluhan: string
    id_setup_room_admisi: number
    id_setup_bed_room_admisi: number
}

export class PostAdmisiRawatInapNonPenjaminNonTPPRIModel implements HttpResponseModel {
    responseResult: boolean;
    data: IResponseAdmisiPasienRawatInapModel;
    message: string;
}

export class PostAdmisiRawatInapWithPenjaminNonTPPRIModel implements HttpResponseModel {
    responseResult: boolean;
    data: IResponseAdmisiPasienRawatInapModel;
    message: string;
}

export class PutUpdateAdmisiRawatInapDifferentBedModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export interface IHistoryAdmisiPasienRawatInapModel {
    id_register: number
    tgl_admisi: string
    no_rekam_medis: string
    no_register: string
    nama_pasien: string
    gender: string
    umur: string
    id_poli: number
    nama_poli: string
    nama_debitur: string
    id_kelas: number
    nama_kelas: string
    bed_no: string
    room_no: string
    room_descr: string
    room_category: string
}

export class GetAllAdmisiPasienRawatInapModel implements HttpResponseModel {
    responseResult: boolean;
    data: IHistoryAdmisiPasienRawatInapModel[];
    message: string;
}