import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

/**
 * @TarifBerlakuModel base model Tarif Berlaku
*/
export interface TarifBerlakuModel {
    /** @format int64 */
    id_tarif_berlaku?: number;

    /** @format int32 */
    id_setup_tarif?: number;

    /** @format int32 */
    id_kelas?: number;

    /** @format date-time */
    tgl_berlaku?: string;

    /** @format date-time */
    tgl_berakhir?: string | null;

    /** @format double */
    doct_fee?: number;

    /** @format double */
    medical_fee?: number;

    /** @format double */
    hos_fee?: number;

    /** @format double */
    com_fee?: number;

    /** @format double */
    add_fee?: number;

    /** @format double */
    anas_fee?: number;

    /** @format double */
    support_fee?: number;

    /** @format double */
    nominal_tarif?: number;
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
 * @GetByIdTarifBerlakuModel response model setelah request Get By Id Tarif Berlaku
 * @Key : { responseResult: boolean, data: TarifBerlakuModel, message: string }
*/
export class GetByIdTarifBerlakuModel implements HttpResponseModel {
    responseResult: boolean;
    data: TarifBerlakuModel;
    message: string;
}

/**
 * @GetByIdKelasPerawatanModel response model setelah request Get By Id Kelas Perawatan
 * @Key : { responseResult: boolean, data: TarifBerlakuModel, message: string }
*/
export class GetAllByIdKelasPerawatanModel implements HttpResponseModel {
    responseResult: boolean;
    data: TarifBerlakuModel[];
    message: string;
}

/**
 * @GetAllTarifModel response model setelah request Get All Tarif Berlaku
 * @Key : { responseResult: boolean, data: TarifBerlakuRecursiveModel[], message: string }
*/
export class GetAllTarifBerlakuModel implements HttpResponseModel {
    responseResult: boolean;
    data: TarifBerlakuModel[];
    message: string;
}

/**
 * @PostInsertTarifModel response model setelah request Post Insert Tarif Berlaku
 * @Key : { responseResult: boolean, data: number, message: string }
*/
export class PostInsertTarifBerlakuModel implements HttpResponseModel {
    responseResult: boolean;
    data: number;
    message: string;
}

/**
 * @PutUpdateStatusTarifBerlakuModel response model setelah request Put Update Status Tarif Berlaku
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class PutUpdateTarifBerlakuModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}

/**
 * @PutUpdateStatusTarifBerlakuModel response model setelah request Put Update Status Tarif Berlaku
 * @Key : { responseResult: boolean, data: string, message: string }
*/
export class PutUpdateStatusTarifBerlakuModel implements HttpResponseModel {
    responseResult: boolean;
    data: string;
    message: string;
}
