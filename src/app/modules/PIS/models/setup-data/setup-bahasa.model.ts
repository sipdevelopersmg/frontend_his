import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @BahasaModel base model Bahasa
 * @Key : { id_bahasa: number, bahasa: string }
*/
export interface BahasaModel {
    id_bahasa?: number;
    bahasa: string;
}

/**
 * @GetAllBahasaModel response model setelah request Get All Bahasa
 * @Key : { responseResult: boolean, data: BahasaModel[], message: string }
 */
export class GetAllBahasaModel implements HttpResponseModel {
    responseResult: boolean;
    data: BahasaModel[];
    message: string;
}

/**
 * @GetByIdBahasaModel response model setelah request Get By Id Bahasa
 * @Key : { responseResult: boolean, data: BahasaModel, message: string }
 */
export class GetByIdBahasaModel implements HttpResponseModel {
    responseResult: boolean;
    data: BahasaModel;
    message: string;
}

/**
 * @PostSaveBahasaModel response model setelah request Post Save Bahasa
 * @Key : { responseResult: boolean, data: id_Bahasa (number), message: string }
 */
export class PostSaveBahasaModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateBahasaModel response model setelah request Put Update Bahasa
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class PutUpdateBahasaModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeleteBahasaModel response model setelah request Delete Bahasa
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class DeleteBahasaModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}
