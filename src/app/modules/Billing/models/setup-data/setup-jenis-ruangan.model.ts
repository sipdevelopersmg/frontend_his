import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @JenisRuanganModel base model Jenis Ruangan
*/
export interface JenisRuanganModel {
    /** @format int32 */
    id_jenis_ruangan?: number;
    jenis_ruangan?: string;
}

/**
 * @GetByIdJenisRuanganModel response model setelah request Get By Id Jenis Ruangan
 * @Key : { responseResult: boolean, data: JenisRuanganModel, message: string }
*/
export class GetByIdJenisRuanganModel implements HttpResponseModel {
    responseResult: boolean;
    data: JenisRuanganModel;
    message: string;
}

/**
 * @GetAllJenisRuanganModel response model setelah request Get All Jenis Ruangan
 * @Key : { responseResult: boolean, data: JenisRuanganModel[], message: string }
*/
export class GetAllJenisRuanganModel implements HttpResponseModel {
    responseResult: boolean;
    data: JenisRuanganModel[];
    message: string;
}

/**
 * @PostInsertJenisRuanganModel response model setelah request Post Insert Jenis Ruangan
 * @Key : { responseResult: boolean, data: number, message: string }
*/
export class PostInsertJenisRuanganModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateJenisRuanganModel response model setelah request Put Update Jenis Ruangan
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class PutUpdateJenisRuanganModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeleteJenisRuanganModel response model setelah request Delete Jenis Ruangan
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class DeleteJenisRuanganModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}