import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @DebiturModel base model Debitur
*/
export interface DebiturModel {
    id_debitur?: number;
    kode_debitur: string;
    nama_debitur: string;
    alamat_debitur: string;
    telepon: string;
    email: string;
    tgl_expired: Date;
    is_active?: boolean;
    user_created: number;
    time_created?: Date;
    user_deactived?: number;
    time_deactived?: Date;
}

/**
 * @GetAllDebiturModel response model setelah request Get All Debitur
 * @Key : { responseResult: boolean, data: DebiturModel[], message: string }
 */
export class GetAllDebiturModel implements HttpResponseModel {
    responseResult: boolean;
    data: DebiturModel[];
    message: string;
}

/**
 * @GetByIdDebiturModel response model setelah request Get By Id Debitur
 * @Key : { responseResult: boolean, data: DebiturModel, message: string }
 */
export class GetByIdDebiturModel implements HttpResponseModel {
    responseResult: boolean;
    data: DebiturModel;
    message: string;
}

/**
 * @PostSaveDebiturModel response model setelah request Post Save Debitur
 * @Key : { responseResult: boolean, data: id_debitur (number), message: string }
 */
export class PostSaveDebiturModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateDebiturModel response model setelah request Put Update Debitur
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class PutUpdateDebiturModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeleteDebiturModel response model setelah request Delete Debitur
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class DeleteDebiturModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}
