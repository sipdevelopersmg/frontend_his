import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface ITiketPemeriksaanModel {
    id_tiket_pemeriksaan?: number;
    id_jenis_ruangan?: number;
    jenis_ruangan?: string;
    kode_tiket_pemeriksaan?: string;
    nama_tiket_pemeriksaan?: string;
    id_setup_tarif?: number;
    kode_setup_tarif?: string;
    nama_setup_tarif?: string;
    id_kelas?: number;
    nama_kelas?: string;
    is_subsidi?: boolean;
}

export class GetAllTiketPemeriksaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: ITiketPemeriksaanModel[];
    message: string;
}

export class GetByIdTiketPemeriksaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: ITiketPemeriksaanModel;
    message: string;
}

export class PostInsertTiketPemeriksaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

export class PutUpdateTiketPemeriksaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export class DeleteTiketPemeriksaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}