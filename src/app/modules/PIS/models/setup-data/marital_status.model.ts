import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @JenisIdentitasModel base model Jenis Identitas
 * @Key : { id_jenis_identitas: number, jenis_identitas: string, is_wna: boolean }
*/
export interface MaritalStatusModel {
    id_marital_status?: number;
    marital_status: string;
}

/**
 * @GetJenisIdentitas response model setelah request Get Jenis Identitas
 * @Key : { responseResult: boolean, data: {}, message: string }
*/
export class GetAllMaritalStatusModel implements HttpResponseModel {
    responseResult: boolean;
    data: MaritalStatusModel[];
    message: string;
}