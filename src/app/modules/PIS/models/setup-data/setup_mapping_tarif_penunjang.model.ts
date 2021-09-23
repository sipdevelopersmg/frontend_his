import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface MappingTarifPenunjangModel {
    id_mapping_tarif_penunjang?: number
    id_setup_tarif: number
    nama_tindakan_penunjang: any
    kode_kelompok: string
    is_ada_left_right: boolean
    is_ada_polos_kontras: boolean
    user_created?: number
    time_created?: string
}

export class GetAllMappingTarifPenunjangModel implements HttpResponseModel {
    responseResult: boolean;
    data: MappingTarifPenunjangModel[];
    message: string;
}

export class GetByIdMappingTarifPenunjangModel implements HttpResponseModel {
    responseResult: boolean;
    data: MappingTarifPenunjangModel;
    message: string;
}

export class PostSaveMappingTarifPenunjangModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

export class DeleteMappingTarifPenunjangModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export class UpdateMappingTarifPenunjangModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}