import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @EtnisModel base model etnis
 * @Key : { id_etnis: number, etnis: string }
*/
export interface EtnisModel {
    id_etnis?: number;
    etnis: string;
}

/**
 * @GetAllEtnisModel response model setelah request Get All Etnis
 * @Key : { responseResult: boolean, data: EtnisModel[], message: string }
 */
export class GetAllEtnisModel implements HttpResponseModel {
    responseResult: boolean;
    data: EtnisModel[];
    message: string;
}

/**
 * @GetByIdEtnisModel response model setelah request Get By Id Etnis
 * @Key : { responseResult: boolean, data: EtnisModel, message: string }
 */
export class GetByIdEtnisModel implements HttpResponseModel {
    responseResult: boolean;
    data: EtnisModel;
    message: string;
}

/**
 * @PostSaveEtnisModel response model setelah request Post Save Etnis
 * @Key : { responseResult: boolean, data: id_etnis (number), message: string }
 */
export class PostSaveEtnisModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateEtnisModel response model setelah request Put Update Etnis
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class PutUpdateEtnisModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeleteEtnisModel response model setelah request Delete Etnis
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class DeleteEtnisModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}
