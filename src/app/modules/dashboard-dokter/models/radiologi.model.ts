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
    radChild?: IOrderPenunjangModel[];
}

export interface IOrderPenunjangModel {
    id_mapping_tarif_penunjang?: number;
    id_setup_tarif?: number;
    nama_tindakan_penunjang?: string;
    parameter_checked?: boolean;
    kode_kelompok?: string;
    is_ada_left_right?: boolean;
    is_ada_polos_kontras?: boolean;
    item_rad?: IDetailOrderPenunjangModel;
}

export interface IDetailOrderPenunjangModel {
    is_satu_sisi?: boolean;
    id_dua_sisi?: boolean;
    is_polos?: boolean;
    is_kontras?: boolean;
}

export class GetAllOrderPenunjangRadiologiModel implements HttpResponseModel {
    responseResult: boolean;
    data: ITabsPemeriksaanModel[];
    message: string;
}

export interface ITarifRadiologiDetailModel {
    id_mapping_tarif_penunjang?: number;
    id_mapping_tarif_penunjang_detail_radiologi?: number;
    id_setup_tarif?: number;
    kode_setup_tarif?: string;
    nama_setup_tarif?: string;
}

export class GetTarifRadiologiDetailModel implements HttpResponseModel {
    responseResult: boolean;
    data: ITarifRadiologiDetailModel;
    message: string;
}