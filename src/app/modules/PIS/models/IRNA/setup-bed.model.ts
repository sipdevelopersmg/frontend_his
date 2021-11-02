import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IBedModel {
    id_setup_room?: number;
    id_setup_bed_room?: number;
    bed_no?: string;
    is_view_antrian?: boolean;
    is_sesuai_sk?: boolean;
    is_active?: boolean;
    user_created?: number;
    time_created?: string;
    user_edited?: number;
    time_edited?: string;
    user_deactivated?: number;
    time_deactivated?: string;
}

export class GetAllBedModel implements HttpResponseModel {
    responseResult: boolean;
    data: IBedModel[];
    message: string;
}

export class GetByIdBedModel implements HttpResponseModel {
    responseResult: boolean;
    data: IBedModel;
    message: string;
}

export class PostSaveBedModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}

export class PutUpdateBedModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}

export class PutUpdateStatusBedModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}