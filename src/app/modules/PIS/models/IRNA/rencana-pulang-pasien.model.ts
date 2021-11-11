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