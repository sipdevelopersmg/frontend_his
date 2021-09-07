import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @TarifPerPoliModel base model Tarif Per Poli
*/
export interface TarifPerPoliModel {
    /** @format int32 */
    id_setup_tarif?: number;

    /** @format int64 */
    id_tarif_berlaku_poli?: number;

    /** @format int32 */
    id_poli?: number;

    kode_setup_tarif?: string;
    nama_setup_tarif?: string;
    nama_kelas?: string;
    nominal_tarif?: number;

    /** @format date-time */
    tgl_berlaku?: string;

    /** @format date-time */
    tgl_berakhir?: string | null;
    is_active?: boolean;

    /** @format int32 */
    user_created?: number;

    /** @format date-time */
    time_created?: string;

    /** @format int32 */
    user_deactived?: number;

    /** @format date-time */
    time_deactived?: string;
}

/**
 * @GetByIdTarifPerPoliModel response model setelah request Get By Id Tarif Per Poli
 * @Key : { responseResult: boolean, data: TarifPerPoliModel, message: string }
*/
export class GetByIdTarifPerPoliModel implements HttpResponseModel {
    responseResult: boolean;
    data: TarifPerPoliModel;
    message: string;
}

/**
 * @GetByIdPoliModel response model setelah request Get All Tarif Berlaku By Id Poli
 * @Key : { responseResult: boolean, data: TarifPerPoliModel, message: string }
*/
export class GetByIdPoliModel implements HttpResponseModel {
    responseResult: boolean;
    data: TarifPerPoliModel[];
    message: string;
}

/**
 * @GetAllTarifModel response model setelah request Get All Tarif Per Poli
 * @Key : { responseResult: boolean, data: TarifPerPoliRecursiveModel[], message: string }
*/
export class GetAllTarifPerPoliModel implements HttpResponseModel {
    responseResult: boolean;
    data: TarifPerPoliModel[];
    message: string;
}

/**
 * @PostInsertTarifModel response model setelah request Post Insert Tarif Per Poli
 * @Key : { responseResult: boolean, data: number, message: string }
*/
export class PostInsertTarifPerPoliModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateStatusTarifPerPoliModel response model setelah request Put Update Status Tarif Per Poli
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class PutUpdateStatusTarifPerPoliModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

export interface TarifPerPoliDynamicFilterModel {
    id_setup_tarif: number;
    kode_setup_tarif: string;
    nama_setup_tarif: string;
    nama_kelas: string;
    nominal_tarif: number;
}

/**
 * @GetAllTarifPerPoliByDynamicFilterModel response model setelah request Get All Tarif Per Poli Dynamic Tarif
 * @Key : { responseResult: boolean, data: TarifPerPoliDynamicFilterModel, message: string }
*/
export class GetAllTarifPerPoliByDynamicFilterModel implements HttpResponseModel {
    responseResult: boolean;
    data: TarifPerPoliDynamicFilterModel[];
    message: string;
}