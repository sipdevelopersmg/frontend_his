import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IGetDaftarPermintaanMutasiBedModel {
    id_bed_transfer: number
    id_register: number
    nomor_bed_transfer: string
    tanggal_bed_request: string
    id_setup_room_asal: number
    room_no_asal: any
    room_descr_asal: any
    id_setup_bed_room_asal: number
    bed_no_asal: any
    id_setup_room_tujuan: number
    room_no_tujuan: string
    room_descr_tujuan: string
    id_setup_bed_room_tujuan: number
    bed_no_tujuan: string
    id_kelas_tujuan: number
    nama_kelas_tujuan: string
    time_approve: any
    peminta: string
    penerima: any
}

export class GetDaftarPermintaanMutasiByIdRegisterModel implements HttpResponseModel {
    responseResult: boolean;
    data: IGetDaftarPermintaanMutasiBedModel[];
    message: string;
}

export interface IGetDaftarMutasiBedModel {
    id_bed_history: number
    tgl_masuk: string
    tgl_masuk_timestamp: string
    id_register: number
    id_setup_room: number
    room_no: string
    room_descr: string
    id_setup_bed_room: number
    bed_no: string
    id_kelas: number
    nama_kelas: string
    id_poli: number
}

export class GetDaftarMutasiByIdRegisterModel implements HttpResponseModel {
    responseResult: boolean;
    data: IGetDaftarMutasiBedModel[];
    message: string;
}

export interface IRequestMutasiBedModel {
    id_register: number
    tanggal_bed_request: string
    id_setup_room_asal: number
    id_setup_bed_room_asal: number
    id_setup_room_tujuan: number
    id_setup_bed_room_tujuan: number
    keterangan_request: string
};

export class PostSaveRequestMutasiBedModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export class PostCancelRequestMutasiBedModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export interface IApproveRequestMutasiModel {
    id_bed_transfer: number
    id_register: number
    tanggal_bed_approve: string
    keterangan_approve: string
    id_setup_room_asal: number
    id_setup_bed_room_asal: number
    id_setup_room_tujuan: number
    id_setup_bed_room_tujuan: number
    id_poli_tujuan: number
    id_kelas_tujuan: number
}

export class PostApproveRequestMutasiBedModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export interface IBatalkanMutasiModel {
    id_bed_history: number
    id_register: number
    id_kelas_tujuan: number
    id_poli_tujuan: number
    tgl_masuk_dibatalkan: string
    id_setup_room_tujuan: number
    id_setup_bed_room_tujuan: number
    reason_canceled?: string;
}

export class PostCancelMutasiBedModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}