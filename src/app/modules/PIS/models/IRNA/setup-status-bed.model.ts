import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IBedStatusModel {
    id_setup_status_bed?: number;
    status_bed?: string;
    status_bed_descr?: string;
    is_ready?: boolean;
    is_new?: boolean;
    is_fill?: boolean;
}

export class GetAllBedStatusModel implements HttpResponseModel {
    responseResult: boolean;
    data: IBedStatusModel[];
    message: string;
}

export class GetByIdBedStatusModel implements HttpResponseModel {
    responseResult: boolean;
    data: IBedStatusModel;
    message: string;
}

export class PostSaveBedStatusModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}

export class PutUpdateBedStatusModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}

export class DeleteBedStatusModel implements HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}
