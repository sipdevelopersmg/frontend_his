import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @SmfModel base model SMF Dokter
 * @Key : { id_smf: number, kode_smf: string, nama_smf: string }
*/
export interface SmfModel {
    id_smf?: number;
    kode_smf: string;
    nama_smf: string;
}

/**
 * @GetAllSmfModel response model setelah request Get All SMF Dokter
 * @Key : { responseResult: boolean, data: SmfModel[], message: string }
 */
export class GetAllSmfModel implements HttpResponseModel {
    responseResult: boolean;
    data: SmfModel[];
    message: string;
}

/**
 * @GetByIdSmfModel response model setelah request Get By Id SMF Dokter
 * @Key : { responseResult: boolean, data: SmfModel, message: string }
 */
export class GetByIdSmfModel implements HttpResponseModel {
    responseResult: boolean;
    data: SmfModel;
    message: string;
}

/**
 * @PostSaveSmfModel response model setelah request Post Save SMF Dokter
 * @Key : { responseResult: boolean, data: id_smf (number), message: string }
 */
export class PostSaveSmfModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateSmfModel response model setelah request Put Update SMF
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class PutUpdateSmfModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeleteSmfModel response model setelah request Delete SMF
 * @Key : { responseResult: boolean, data: "", message: string }
 */
export class DeleteSmfModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}