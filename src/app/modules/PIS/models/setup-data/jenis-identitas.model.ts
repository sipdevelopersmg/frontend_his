import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @JenisIdentitasModel base model Jenis Identitas
 * @Key : { id_jenis_identitas: number, jenis_identitas: string, is_wna: boolean }
*/
export interface JenisIdentitasModel {
    id_jenis_identitas?: number;
    jenis_identitas: string;
    is_wna: boolean;
}

/**
 * @GetJenisIdentitas response model setelah request Get Jenis Identitas
 * @Key : { responseResult: boolean, data: {}, message: string }
*/
export class GetAllJenisIdentitasModel implements HttpResponseModel {
    responseResult: boolean;
    data: {
        wni: JenisIdentitasModel[],
        wna: JenisIdentitasModel[]
    };
    message: string;
}