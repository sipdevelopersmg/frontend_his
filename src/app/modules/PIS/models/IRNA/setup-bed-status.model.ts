import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface IBedStatusModel {
    id_setup_room?: number;
    id_setup_bed_room?: number;
    id_register?: number;
    tgl_masuk?: string;
    tgl_keluar?: string;
    is_waiting_list?: boolean;
    status_bed?: boolean;
    user_edited?: number;
    time_edited?: string;
}

export class GetAllBedStatusModel implements HttpResponseModel {
    responseResult: boolean;
    data: IBedStatusModel[];
    message: string;
}