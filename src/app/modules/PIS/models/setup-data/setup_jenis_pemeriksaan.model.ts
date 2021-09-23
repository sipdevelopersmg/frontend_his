import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface JenisPemeriksaanModel {
    kode_kelompok: string;
    nama_kelompok: string;
    kode_grup_penunjang: string;
    is_active?: boolean;
    parent_kode_kelompok: string;
    nama_kelompok_parent?: string;
    kode_grup_penunjang_parent?: string;
    is_active_parent?: boolean;
    child?: JenisPemeriksaanModel[];
}

export class GetAllJenisPemeriksaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: JenisPemeriksaanModel[];
    message: string;
}

export class GetByIdJenisPemeriksaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: JenisPemeriksaanModel;
    message: string;
}

export class PostSaveJenisPemeriksaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

export class UpdateStatusJenisPemeriksaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export class UpdateJenisPemeriksaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export class CheckIsUsedJenisPemeriksaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: boolean;
    message: string;
}

export class DeleteJenisPemeriksaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}