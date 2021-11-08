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