import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @KelompokTarifModel base model Kelompok Tarif
*/
export interface KelompokTarifModel {
    /** @format int32 */
    id_kelompok_tarif?: number;
    kode_kelompok_tarif: string;
    nama_kelompok_tarif: string;
}

/**
 * @GetByIdKelompokTarifModel response model setelah request Get By Id Kelompok Tarif
 * @Key : { responseResult: boolean, data: KelompokTarifModel, message: string }
*/
export class GetByIdKelompokTarifModel implements HttpResponseModel {
    responseResult: boolean;
    data: KelompokTarifModel;
    message: string;
}

/**
 * @GetAllKelompokTarifModel response model setelah request Get All Kelompok Tarif
 * @Key : { responseResult: boolean, data: KelompokTarifModel[], message: string }
*/
export class GetAllKelompokTarifModel implements HttpResponseModel {
    responseResult: boolean;
    data: KelompokTarifModel[];
    message: string;
}

/**
 * @PostInsertKelompokTarifModel response model setelah request Post Insert Kelompok Tarif
 * @Key : { responseResult: boolean, data: number, message: string }
*/
export class PostInsertKelompokTarifModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateKelompokTarifModel response model setelah request Put Update Kelompok Tarif
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class PutUpdateKelompokTarifModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @DeleteKelompokTarifModel response model setelah request Delete Kelompok Tarif
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class DeleteKelompokTarifModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}