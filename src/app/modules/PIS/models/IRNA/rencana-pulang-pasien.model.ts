import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IPostSaveRencanaPulangModel {
    id_register: number;
    id_dokter_pemberi_ijin_pulang: number;
    tanggal_rencana_pulang: string;
    keterangan_rencana_pulang: string;
}

export class PostSaveRencanaPulangPasienModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export interface IGetRencanaPulangModel {
    id_rencana_pulang: number
    id_register: number
    id_dokter_pemberi_ijin_pulang: number
    kode_dokter: string
    nama_dokter: string
    tanggal_rencana_pulang: string
    keterangan_rencana_pulang: string
    user_inputed: number
    time_inputed: string
    user_canceled: number
    time_canceled: string
    reason_canceled: string
}

export class GetRencanaPulangPasienModel implements HttpResponseModel {
    responseResult: boolean;
    data: IGetRencanaPulangModel;
    message: string;
}

export interface IGetRencanaPulangForAntrianRegulerModel {
    id_perintah_pulang: number
    id_register: number
    no_rekam_medis: string
    nama_pasien: string
    id_dokter_pemberi_perintah_pulang: number
    kode_dokter: string
    nama_dokter: string
    id_cara_pulang: number
    cara_pulang: string
    id_kondisi_pulang: number
    kondisi_pulang: string
    id_rencana_pulang: number
    tanggal_perintah_pulang: string
    keterangan_perintah_pulang: string
    id_kelas_rawat: number
    kelas_rawat: string
    room_no: string
    bed_no: string
    user_inputed: number
    time_inputed: string
    user_verified: number
    time_verified: string
    user_canceled: number
    time_canceled: string
    reason_canceled: any
}

export class GetRencanaPulangPasienForAntrianRegulerModel implements HttpResponseModel {
    responseResult: boolean;
    message: string;
    data: IGetRencanaPulangForAntrianRegulerModel[];
}