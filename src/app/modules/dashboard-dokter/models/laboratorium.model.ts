import { HttpResponseModel } from "../../shared/models/Http-Operation/HttpResponseModel";

export interface ITabsPemeriksaanModel {
    kode_kelompok?: string;
    nama_kelompok?: string;
    kode_grup_penunjang?: string;
    is_active?: boolean;
    parent_kode_kelompok?: string;
    nama_kelompok_parent?: string;
    kode_grup_penunjang_parent?: string;
    is_active_parent?: boolean;
    child?: IButtonPemeriksaanModel[];
}

export interface IButtonPemeriksaanModel {
    kode_kelompok?: string;
    nama_kelompok?: string;
    kode_grup_penunjang?: string;
    is_active?: boolean;
    parent_kode_kelompok?: string;
    nama_kelompok_parent?: string;
    kode_grup_penunjang_parent?: string;
    is_active_parent?: boolean;
    labChild?: IOrderPenunjangModel[];
}

export interface IOrderPenunjangModel {
    id_mapping_tarif_penunjang?: number;
    id_setup_tarif?: number;
    nama_tindakan_penunjang?: string;
    parameter_checked?: boolean;
    kode_kelompok?: string;
}

export class GetAllOrderPenunjangLaboratoriumModel implements HttpResponseModel {
    responseResult: boolean;
    data: ITabsPemeriksaanModel[];
    message: string;
}