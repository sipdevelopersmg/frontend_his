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

export interface IDaftarPemesananTempatTidurModel {
    id_antrian_tppri?: number
    status_approve?: string
    status_bed?: string
    status_bed_descr?: string
    no_antrian_per_kelas?: number
    kode_antrian_tppri?: string
    tanggal_antrian_tppri?: string
    tanggal_rencana_masuk?: string
    tanggal_surat_perintah_mondok?: string
    id_register?: number
    no_rekam_medis?: string
    nama_pasien?: string
    gender?: string
    usia?: string
    id_kelas_request?: number
    nama_kelas?: string
    id_setup_room_request?: number
    room_no?: string
    room_descr?: string
    id_setup_bed_room_request?: number
    bed_no?: string
    id_poli?: number
    id_person?: number
    id_jenis_ruangan?: number
    kode_poli?: string
    nama_poli?: string
}

export class GetAllDaftarPemesananTempatTidurModel implements HttpResponseModel {
    responseResult: boolean;
    data: IDaftarPemesananTempatTidurModel[];
    message: string;
}

export class GetAllDaftarPemesananTempatTidurByNoRekamMedisModel implements HttpResponseModel {
    responseResult: boolean;
    data: IDaftarPemesananTempatTidurModel;
    message: string;
}
