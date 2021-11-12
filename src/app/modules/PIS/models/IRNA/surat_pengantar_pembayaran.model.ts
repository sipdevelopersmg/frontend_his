import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface ICaraPulangModel {
    id_cara_pulang: number;
    cara_pulang: string;
    kode_cara_pulang_inadrg: string;
}

export class GetAllCaraPulangModel implements HttpResponseModel {
    responseResult: boolean;
    data: ICaraPulangModel[];
    message: string;
}

export interface IKondisiPulangModel {
    id_kondisi_pulang: number;
    kondisi_pulang: string;
}

export class GetAllKondisiPulangModel implements HttpResponseModel {
    responseResult: boolean;
    data: IKondisiPulangModel[];
    message: string;
}

export interface IInfoKematianModel {
    id_register: number
    tanggal_meninggal: string
    catatan: string
    status: string
}

export class PostSaveInfoKematianModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export interface IGetInfoKematianModel {
    id_info_kematian: number
    id_register: number
    tanggal_meninggal: string
    is_belum_ada_48_jam: boolean
    catatan: string
    status: string
    user_inputed: number
    time_inputed: string
}

export class GetInfoKematianByIdRegisterModel implements HttpResponseModel {
    responseResult: boolean;
    data: IGetInfoKematianModel;
    message: string;
}

export interface IPengantarPembayaranModel {
    id_register: number
    id_dokter_pemberi_perintah_pulang: number
    id_cara_pulang: number
    id_kondisi_pulang: number
    id_rencana_pulang: number
    tanggal_perintah_pulang: string
    keterangan_perintah_pulang: string
}

export class PostSavePengantarPembayaranModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export class PostCancelPengantarPembayaranModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export interface IGetPengantarPembayaranModel {
    id_perintah_pulang: number
    id_register: number
    id_dokter_pemberi_perintah_pulang: number
    id_cara_pulang: number
    id_kondisi_pulang: number
    id_rencana_pulang: number
    tanggal_perintah_pulang: string
    keterangan_perintah_pulang: string
    user_inputed: number
    time_inputed: string
    user_verified: number
    time_verified: string
    user_canceled: number
    time_canceled: string
    reason_canceled: any
}

export class GetPengantarPembayaranByIdRegisterModel implements HttpResponseModel {
    responseResult: boolean;
    data: IGetPengantarPembayaranModel;
    message: string;
}