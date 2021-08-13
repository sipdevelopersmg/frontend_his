import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @StatusDokterModel base model Status Dokter
 * @Key : { id_Status_dokter: number, status_dokter: string }
*/
export interface StatusDokterModel {
    id_status_dokter?: number;
    status_dokter: string;
}

/**
 * @GetAllStatusDokterModel response model setelah request Get All Status Dokter
 * @Key : { responseResult: boolean, data: StatusDokterModel[], message: string }
 */
export class GetAllStatusDokterModel implements HttpResponseModel {
    responseResult: boolean;
    data: StatusDokterModel[];
    message: string;
}

/**
 * @GetByIdStatusDokterModel response model setelah request Get By Id Status Dokter
 * @Key : { responseResult: boolean, data: StatusDokterModel, message: string }
 */
export class GetByIdStatusDokterModel implements HttpResponseModel {
    responseResult: boolean;
    data: StatusDokterModel;
    message: string;
}

/**
 * @PostSaveStatusDokterModel response model setelah request Post Save Status Dokter
 * @Key : { responseResult: boolean, data: id_status_dokter (number), message: string }
 */
export class PostSaveStatusDokterModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateStatusDokterModel response model setelah request Put Status Dokter
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class PutUpdateStatusDokterModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeleteStatusDokterModel response model setelah request Delete Status Dokter
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class DeleteStatusDokterModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}