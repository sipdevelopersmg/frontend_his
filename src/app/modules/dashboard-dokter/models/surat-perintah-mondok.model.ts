import { HttpResponseModel } from "../../shared/models/Http-Operation/HttpResponseModel";

export interface ISuratPerintahMondokModel {
    id_perintah_mondok?: number
    id_register?: number
    id_dokter_pemberi_perintah_mondok?: number
    tanggal_surat_perintah_mondok?: Date
    keterangan_perintah_mondok?: string
    is_sudah_mondok?: boolean
    time_inputed?: Date
    user_inputed?: string
}

export class GetAllSuratPerintahMondokModel implements HttpResponseModel {
    responseResult: boolean;
    data: ISuratPerintahMondokModel[];
    message: string;
}

export class PostSaveSuratPerintahMondokModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}

export class DeleteSuratPerintahMondokModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}

export class PutUpdateSuratPerintahMondokModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}