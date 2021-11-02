import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IAntrianTppriModel {
    id_person?: number;
    id_kelas_request?: number;
    tanggal_rencana_masuk?: string;
    id_perintah_mondok?: number;
    id_setup_room_request?: number;
    id_setup_bed_room_request?: number;
}

export class PostSaveAntrianTppriModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}