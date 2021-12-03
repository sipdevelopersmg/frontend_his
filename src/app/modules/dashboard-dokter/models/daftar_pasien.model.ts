import { HttpResponseModel } from "../../shared/models/Http-Operation/HttpResponseModel";

export interface IDaftarPasienIRJAModel {
    tgl_admisi?: Date;
    id_register?: number;
    no_register?: string;
    no_rekam_medis?: string;
    id_icd_masuk?: number;
    id_person?: number;
    nama_pasien?: string;
    tanggal_lahir?: Date;
    umur?: string;
    gender?: string;
    id_dokter?: number;
    id_poli?: number;
    id_kelas_rawat?: number;
    nama_debitur?: string;
    dpjp?: string;
    photo_url?: string;
    id_setup_bed_room?: number
    bed_no?: string
    id_setup_room?: number
    room_no?: string
    room_descr?: string
}

export class GetAllPasienIRJAByDokterModel implements HttpResponseModel {
    responseResult: boolean;
    data: IDaftarPasienIRJAModel[];
    message: string;
}

export class GetAllPasienIRNAByDokterModel implements HttpResponseModel {
    responseResult: boolean;
    data: IDaftarPasienIRJAModel[];
    message: string;
}

export class GetAllPasienIRDAByDokterModel implements HttpResponseModel {
    responseResult: boolean;
    data: IDaftarPasienIRJAModel[];
    message: string;
}