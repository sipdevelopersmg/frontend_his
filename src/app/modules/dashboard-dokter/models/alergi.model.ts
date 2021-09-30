import { HttpResponseModel } from "../../shared/models/Http-Operation/HttpResponseModel";

export interface IAlergiModel {
    id_alergi?: number
    id_register?: number
    alergi?: string
    tanggal_mulai_alergi?: string
    user_inputed?: number
    time_inputed?: string
}

export class GetAllAlergiModel implements HttpResponseModel {
    responseResult: boolean;
    data: IAlergiModel[];
    message: string;
}