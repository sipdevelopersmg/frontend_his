import { HttpResponseModel } from "../../../../modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @AsalRujukanModel base model Asal Rujukan
*/
export interface AsalRujukanModel {
    id_asal_rujukan?: number;
    kode_asal_rujukan?: string;
    nama_asal_rujukan?: string;
    is_required_kode_wilayah?: boolean;
}

/**
 * @GetAllAsalRujukanModel response model setelah request Get All Asal Rujukan
 * @Key : { responseResult: boolean, data: Asal RujukanModel[], message: string }
 */
export class GetAllAsalRujukanModel implements HttpResponseModel {
    responseResult: boolean;
    data: AsalRujukanModel[];
    message: string;
}

/**
 * @GetByIdAsalRujukanModel response model setelah request Get By Id Asal Rujukan
 * @Key : { responseResult: boolean, data: Asal RujukanModel, message: string }
 */
export class GetByIdAsalRujukanModel implements HttpResponseModel {
    responseResult: boolean;
    data: AsalRujukanModel;
    message: string;
}

/**
 * @PostSaveAsalRujukanModel response model setelah request Post Save Asal Rujukan
 * @Key : { responseResult: boolean, data: id_asal_rujukan (number), message: string }
 */
export class PostSaveAsalRujukanModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateAsalRujukanModel response model setelah request Put Update Asal Rujukan
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class PutUpdateAsalRujukanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

