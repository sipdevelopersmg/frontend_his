import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IKategoriKamarModel {
    id_setup_room_category?: number;
    room_category?: string;
    is_active?: boolean;
    user_created?: number;
    time_created?: string;
    user_edited?: number;
    time_edited?: string;
    user_deactivated?: number;
    time_deactivated?: string;
}

export class GetAllKategoriKamarModel implements HttpResponseModel {
    responseResult: boolean;
    data: IKategoriKamarModel[];
    message: string;
}

export class GetByIdKategoriKamarModel implements HttpResponseModel {
    responseResult: boolean;
    data: IKategoriKamarModel;
    message: string;
}

export class PostSaveKategoriKamarModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}

export class PutUpdateKategoriKamarModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}

export class PutUpdateStatusKategoriKamarModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}

export class DeleteKategoriKamarModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}