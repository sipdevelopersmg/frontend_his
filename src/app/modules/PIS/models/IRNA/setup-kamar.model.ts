import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IKamarModel {
    id_setup_room?: number;
    id_setup_room_category?: number;
    room_no?: string;
    room_descr?: string;
    floor_no?: string;
    id_poli?: number;
    id_kelas?: number;
    gender?: string;
    keterangan?: string;
    is_isolasi?: boolean;
    is_active?: boolean;
    user_created?: number;
    time_created?: string;
    user_edited?: number;
    time_edited?: string;
    user_deactivated?: number;
    time_deactivated?: string;
}

export class GetAllKamarModel implements HttpResponseModel {
    responseResult: boolean;
    data: IKamarModel[];
    message: string;
}

export class GetByIdKamarModel implements HttpResponseModel {
    responseResult: boolean;
    data: IKamarModel;
    message: string;
}

export class PostSaveKamarModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}

export class PutUpdateKamarModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}

export class PutUpdateStatusKamarModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}

export class DeleteKamarModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}