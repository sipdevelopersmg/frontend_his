import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @AgamaModel base model Agama
 * @Key : { id_agama: number, agama: string }
*/
export interface AgamaModel {
    id_agama?: number;
    agama: string;
}

/**
 * @GetAllAgamaModel response model setelah request Get All Agama
 * @Key : { responseResult: boolean, data: AgamaModel[], message: string }
*/
export class GetAllAgamaModel implements HttpResponseModel {
    responseResult: boolean;
    data: AgamaModel[];
    message: string;
}