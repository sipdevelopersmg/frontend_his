import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @KebangsaanModel base model Kebangsaan
 * @Key : { id_kebangsaan: number, kode_kebangsaan: string, nama_kebangsaan: string }
*/
export interface KebangsaanModel {
    id_kebangsaan?: number;
    kode_kebangsaan: string;
    nama_kebangsaan: string;
}

/**
 * @GetAllKebangsaanModel response model setelah request Get All Kebangsaan
 * @Key : { responseResult: boolean, data: KebangsaanModel[], message: string }
 */
export class GetAllKebangsaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: KebangsaanModel[];
    message: string;
}

/**
 * @GetByIdKebangsaanModel response model setelah request Get By Id Kebangsaan
 * @Key : { responseResult: boolean, data: KebangsaanModel, message: string }
 */
export class GetByIdKebangsaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: KebangsaanModel;
    message: string;
}

/**
 * @PostSaveKebangsaanModel response model setelah request Post Save Kebangsaan
 * @Key : { responseResult: boolean, data: id_Kebangsaan (number), message: string }
 */
export class PostSaveKebangsaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateKebangsaanModel response model setelah request Put Update Kebangsaan
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class PutUpdateKebangsaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeleteKebangsaanModel response model setelah request Delete Kebangsaan
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class DeleteKebangsaanModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}
